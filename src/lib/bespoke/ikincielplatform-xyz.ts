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

    // ═══════════════════════════════════════════════════════════════════════
    // "hizmet:*" SAYFALARI — sabit hizmet konusu listesi (11 slug) ile
    // birlikte HER SAYFADA "ikinci el forklift alma riski" karşılaştırması
    // işlenir; her sayfa FARKLI bir teknik risk boyutuna odaklanır (lastik,
    // akü, hidrolik, motor/yakıt, yedek parça tedariği, bakım geçmişi,
    // LPG tüp sertifikası, elektrikli şarj altyapısı, dizel emisyon kısıtı,
    // satıcı garantisi, toplam sahip olma maliyeti) — aralarında tekrar yok.
    // Ulusal/sektörel ölçekte yazıldı, belirli bir şehre bağlanmadı.
    // Yazım: 2026-08-14. Yalnızca kamuya açık/genel doğrulanabilir bilgi.
    // ═══════════════════════════════════════════════════════════════════════

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Sepetli / Örümcek Platform İşlerinde Forklift İkinci El mi Kiralık mı Olmalı?",
        giris:
            "Sepetli örümcek platformla yapılan iç mekân ve dar alan işlerinde forklift genellikle malzeme, parça ve ekipmanın sahaya taşınmasında ikinci bir araç olarak devreye girer; platform yükseğe erişimi, forklift ise zemin seviyesindeki malzeme trafiğini üstlenir. Bu ikili çalışma düzeninde forkliftin lastik durumu kritik bir ayrıntı hâline gelir, çünkü örümcek platformla aynı sahada, genellikle cilalı beton veya hassas zeminli iç mekânlarda çalışılır ve lastiğin aşınma deseni hem zemine iz bırakma riskini hem de kayma güvenliğini doğrudan etkiler. İkinci el bir forkliftte lastik aşınmasının önceki kullanım geçmişiyle ilişkisini bilmeden karar vermek, sahaya girişte zemin hasarı veya güvenlik sorunu olarak geri dönebilir. Bu sayfada, sepetli platform işlerinde eşlik eden forkliftin lastik durumunun neden özellikle önemli olduğunu ve kiralamanın bu riski nasıl ortadan kaldırdığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Lastik aşınması ve zemin uyumu",
                metin:
                    "Forklift lastiği, çalıştığı zemin tipine göre farklı hızda ve farklı desende aşınır; sert ve pürüzlü bir açık saha zemininde çalışmış bir lastik, iç mekân cilalı betonda iz bırakma riski taşıyabilir. İkinci el bir forkliftte lastiğin önceki hangi zeminlerde ne kadar süre kullanıldığı bilgisi neredeyse hiç paylaşılmaz; alıcı yalnızca dışarıdan görünen diş derinliğine bakarak karar verir, ama diş derinliği tek başına zemin uyumunu göstermez.",
            },
            {
                baslik: "İç mekân işlerinde iz bırakmayan lastik seçimi",
                metin:
                    "Sepetli platformla birlikte çalışılan iç mekân sahalarında (depo, üretim hattı, hassas zemin) forkliftin iz bırakmayan (non-marking) lastikle donatılmış olması genellikle şart koşulur. İkinci el bir araçta bu tip lastik standart olarak bulunmayabilir ve sonradan değişim, hem maliyetli hem de aracın önceki lastik aşınma geçmişini tamamen sıfırlayan bir yatırım gerektirir. Bu detay satın alma kararı verilmeden önce netleştirilmezse, saha girişinde beklenmedik bir engelle karşılaşılabilir.",
            },
            {
                baslik: "Düzensiz aşınmanın işaret ettiği gizli sorunlar",
                metin:
                    "Lastiğin bir tarafında yoğunlaşmış veya düzensiz aşınma deseni, yalnızca lastiğin kendisiyle ilgili bir sorun değil, aksın hizalanması veya süspansiyon sisteminde bir dengesizlikle de ilişkili olabilir. İkinci el alımda bu tür düzensiz aşınma genellikle gözden kaçar çünkü alıcı lastiğin toplam durumuna bakar, aşınma desenine değil. Desenin yorumlanması teknik deneyim gerektirir ve bu deneyime sahip olmayan bir alıcı için risk, satın alma sonrası ortaya çıkan ek bir aks veya süspansiyon onarımı olarak geri döner.",
            },
            {
                baslik: "Platform ve forklift birlikte çalışırken senkron risk",
                metin:
                    "Sepetli platform ile forklift aynı sahada, çoğu zaman aynı zaman diliminde çalıştığı için forkliftin beklenmedik biçimde devre dışı kalması (lastik patlaması, aşırı aşınma nedeniyle kayma) yalnızca kendi işini değil, platformun malzeme akışını da aksatır. İkinci el bir forkliftte bu risk, aracın satın alma anındaki lastik durumunun gerçek ömrünü bilmeden üstlenilmiş olur; iş takvimine bağlı sahalarda bu risk kabul edilebilir olmayabilir.",
            },
            {
                baslik: "Kiralamada güncel ve uygun lastikle teslim",
                metin:
                    "Kiralık forklift, sahanın zemin tipine uygun lastikle (iç mekân için iz bırakmayan, açık saha için standart) teslim edilir ve lastik durumu, kiralama süresi boyunca filo sahibinin sorumluluğundadır. Bu, sepetli platform işlerinde forkliftin lastik kaynaklı bir aksama yaratma riskini ortadan kaldırır ve sahaya giriş öncesi lastik uyumluluğunu ayrıca sorgulama ihtiyacını azaltır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İkinci El Forklift Riski ve Kiralama Avantajı — Lastik Ekseni",
                paragraflar: [
                    "Sepetli platform işlerinde eşlik eden forkliftin lastik durumu, aşağıdaki tabloda özetlenen kalemler üzerinden değerlendirilmelidir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "İkinci El Forklift Riski", "Kiralama Avantajı"],
                    satirlar: [
                        ["Lastik aşınma geçmişi", "Önceki zemin/kullanım bilgisi yok", "Güncel, kontrollü lastik durumu"],
                        ["İç mekân uyumu", "İz bırakmayan lastik standart olmayabilir", "Saha tipine göre uygun lastikle teslim"],
                        ["Aşınma deseni yorumu", "Teknik deneyim gerektirir, çoğu zaman atlanır", "Filo sahibi düzenli kontrol yapar"],
                        ["Devre dışı kalma riski", "Beklenmedik patlama/kayma platformu aksatabilir", "Arıza riski filo sahibine ait"],
                    ],
                },
            },
            {
                baslik: "Lastik durumunu satın almadan önce değerlendirme yöntemi",
                paragraflar: [
                    "İkinci el bir forkliftte lastik durumunu değerlendirirken yalnızca diş derinliğine bakmak yeterli değildir; lastiğin yan duvarında çatlak olup olmadığı, aşınmanın simetrik mi yoksa tek tarafa yoğunlaşmış mı olduğu ve lastik üretim tarihi (kauçuk yaşlanması diş derinliğinden bağımsız ilerler) birlikte değerlendirilmelidir. Yaşlanmış bir lastik, diş derinliği yeterli görünse bile sertleşip tutuş gücünü kaybedebilir.",
                    "Bu değerlendirme sahada birkaç dakikada yapılabilir gibi görünse de, sonucun doğru yorumlanması tekerlek ve lastik konusunda deneyim gerektirir. Emin olunmayan durumlarda bağımsız bir teknik görüş almak, satın alma sonrası lastik değişimi gibi beklenmedik bir maliyetten kaçınmanın en güvenli yoludur.",
                ],
            },
            {
                baslik: "Sepetli platform ve forklift kiralamasını birlikte planlamak",
                paragraflar: [
                    "Sepetli örümcek platform ile forkliftin aynı sahada birlikte kullanılacağı işlerde, ikisinin de aynı tedarikçiden ve uyumlu bir teslim takvimiyle kiralanması operasyonel kolaylık sağlar; lastik, bakım ve teslimat gibi detaylar tek noktadan yönetilir ve sahadaki koordinasyon basitleşir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sepetli platform işine eşlik eden forkliftte lastik neden bu kadar önemli?",
                cevap:
                    "İç mekân ve dar alan işlerinde forklift genellikle hassas zeminlerde (cilalı beton, üretim hattı) çalışır ve lastiğin zemine iz bırakmaması veya kayma yaratmaması gerekir. İkinci el bir araçta lastiğin önceki kullanım geçmişi bilinmediği için bu uyum garanti edilemez; kiralamada ise saha tipine uygun lastikle teslimat standarttır.",
            },
            {
                soru: "İz bırakmayan (non-marking) lastik her forkliftte bulunur mu?",
                cevap:
                    "Hayır, bu genellikle özel bir donanımdır ve her ikinci el araçta standart olarak bulunmaz. Sonradan takılması hem maliyetli hem de zaman gerektirir. Kiralamada saha tipi belirtildiğinde uygun lastikli araç doğrudan planlanabilir.",
            },
            {
                soru: "Lastikteki düzensiz aşınma ne anlama gelir?",
                cevap:
                    "Tek tarafa yoğunlaşmış aşınma, aks hizalaması veya süspansiyon dengesizliği gibi altta yatan bir sorunla ilişkili olabilir. Bu, yalnızca lastik değişimiyle çözülmeyebilecek bir durumdur ve ikinci el alımda genellikle fark edilmeden geçer.",
            },
            {
                soru: "Kiralık forkliftte lastik arızası çıkarsa iş programım aksar mı?",
                cevap:
                    "Ciddi bir kiralama işletmesiyle çalışıldığında lastik ve benzeri arızalar filo sahibinin sorumluluğundadır ve gerektiğinde ikame çözüm sağlanır. Bu, sepetli platform gibi takvime bağlı işlerde aksama riskini büyük ölçüde azaltır.",
            },
            {
                soru: "Lastik yaşını nasıl kontrol edebilirim?",
                cevap:
                    "Kauçuk lastiklerde genellikle üretim tarihini gösteren bir kod bulunur; bu kod diş derinliğinden bağımsız olarak lastiğin yaşlanma durumunu gösterir. İkinci el alımda bu kodun kontrol edilmesi, yalnızca görünüme bakmaktan daha güvenilir bir değerlendirme sağlar.",
            },
            {
                soru: "Sepetli platform ve forkliftin aynı anda kiralanması avantaj sağlar mı?",
                cevap:
                    "Evet, aynı tedarikçiden koordineli teslimat, saha girişi ve lastik/zemin uyumu gibi detayların tek noktadan yönetilmesini sağlar ve iki ayrı tedarikçiyle uğraşma yükünü ortadan kaldırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift lastik aşınma dinamikleri ve iz bırakmayan lastik uygulaması sektör geneli bilinen teknik bilgidir. Marka, tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Forklift Nakliyesinde İkinci El Aracın Akü/Batarya Riski",
        giris:
            "Forklift nakliye ve teslimat hizmetlerinde, aracın sahaya ulaştıktan hemen sonra tam kapasiteyle çalışmaya başlaması beklenir; özellikle elektrikli modellerde bu beklenti akü grubunun gerçek durumuna bağlıdır. İkinci el bir elektrikli forklift satın alındığında, akünün kaç şarj döngüsü gördüğü ve gerçek kapasitesinin ne olduğu bilgisi neredeyse hiç paylaşılmaz; teslimat sonrası ilk tam gün kullanımda akünün beklenenden erken bitmesi, iş programını doğrudan aksatan bir sürpriz hâline gelir. Nakliye süreci akünün durumunu değiştirmez ama teslimat sonrası ilk saatlerde ortaya çıkan performans sorunları, genellikle akünün önceden bilinmeyen yaşlanmasından kaynaklanır. Bu sayfada, forklift teslimatı planlanırken akü/batarya ömrünün neden özellikle sorgulanması gerektiğini ve kiralamanın bu belirsizliği nasıl ortadan kaldırdığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Akü kapasitesi ve teslimat sonrası ilk gün performansı",
                metin:
                    "Bir elektrikli forkliftin akü kapasitesi, şarj döngüsü sayısı arttıkça kademeli olarak düşer ve bu düşüş dışarıdan bakıldığında fark edilmez. Teslimat sonrası ilk tam gün kullanımda kapasitesi düşmüş bir akü, öğleden sonra beklenenden erken bitebilir ve bu durum sahada iş akışını durdurabilir. İkinci el bir araç teslim alınırken akünün gerçek kapasitesi test edilmemişse, bu risk teslimat anına kadar görünmez kalır.",
            },
            {
                baslik: "Nakliye öncesi akü durumu bildirimi",
                metin:
                    "Forklift nakliyesi planlanırken, aracın akü tipi (kurşun asit veya lityum) ve şarj durumu teslimat öncesi netleştirilmelidir; bazı akü tipleri uzun süreli boşta bekleme veya taşıma sırasında derin deşarja karşı hassastır. İkinci el bir araçta akünün bakım geçmişi bilinmiyorsa, nakliye sırasında oluşabilecek uzun bekleme süresinin akü ömrüne etkisi de öngörülemez.",
            },
            {
                baslik: "Akü değişim maliyetinin büyüklüğü",
                metin:
                    "Elektrikli forkliftlerde akü grubu, aracın en pahalı münferit parçasıdır; kapasitesi düşmüş bir akünün değişimi, ikinci el aracın satın alma fiyatının önemli bir bölümüne yakın maliyet taşıyabilir. Bu maliyet teslimat sonrası ilk aylarda ortaya çıktığında, başlangıçta cazip görünen ikinci el fiyat avantajı büyük ölçüde ortadan kalkar.",
            },
            {
                baslik: "Şarj altyapısı ile akü uyumu",
                metin:
                    "Teslim alınan forkliftin akü tipi, sahadaki mevcut şarj istasyonuyla uyumlu olmalıdır; farklı şarj protokolüne sahip bir akü, mevcut altyapıyla çalışmayabilir veya verimsiz şarj olabilir. İkinci el bir araçta bu uyum satın alma öncesi netleştirilmezse, teslimat sonrası ek bir şarj cihazı yatırımı gerekebilir.",
            },
            {
                baslik: "Kiralamada akü garantili teslimat",
                metin:
                    "Kiralık forkliftte akü kapasitesi teslimat öncesi kontrol edilir ve kiralama süresi boyunca akü performansından filo sahibi sorumludur; kapasite düşüşü veya arıza durumunda değişim maliyeti kiracıya yansımaz. Bu, nakliye ve teslimat planlamasında akü kaynaklı belirsizliği ortadan kaldıran önemli bir avantajdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İkinci El Forklift Riski ve Kiralama Avantajı — Akü Ekseni",
                paragraflar: [
                    "Nakliye ve teslimat planlamasında akü/batarya durumunun taşıdığı riskler aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "İkinci El Forklift Riski", "Kiralama Avantajı"],
                    satirlar: [
                        ["Akü kapasitesi", "Şarj döngüsü/kapasite kaybı bilinmez", "Teslimat öncesi kontrol edilir"],
                        ["Değişim maliyeti", "Araç fiyatına yakın ek maliyet riski", "Değişim filo sahibine aittir"],
                        ["Şarj altyapı uyumu", "Mevcut istasyonla uyumsuz olabilir", "Saha altyapısına göre model seçilir"],
                        ["Teslimat sonrası performans", "İlk gün beklenmedik bitiş riski", "Garantili kapasiteyle teslim"],
                    ],
                },
            },
            {
                baslik: "Nakliye öncesi akü kontrolünde sorulması gereken sorular",
                paragraflar: [
                    "Bir forklift teslim alınmadan önce satıcıya şu sorular yöneltilmelidir: akünün yaşı ve toplam şarj döngüsü sayısı nedir, son kapasite testi ne zaman yapıldı, akü tipi hangi şarj protokolüyle uyumlu. Bu soruların belgeli yanıtı yoksa, teslimat sonrası performans konusunda net bir beklenti oluşturmak mümkün değildir.",
                    "Akü durumunun belirsiz olduğu bir araçla nakliye planlamak, teslimat gününde beklenmedik bir gecikme veya iş durması riskini de beraberinde getirir; bu risk özellikle sıkı bir iş takvimine bağlı teslimatlarda kabul edilebilir olmayabilir.",
                ],
            },
            {
                baslik: "Kurşun asit ve lityum akü arasındaki taşıma farkı",
                paragraflar: [
                    "Kurşun asit aküler taşıma sırasında dikkatli konumlandırma gerektirirken, lityum aküler genellikle daha hafif ve taşımaya daha uygun olsa da her ikisi de derin deşarj durumuna karşı hassastır. Nakliye süresi uzunsa, aracın akü seviyesinin teslimat öncesi yeterli düzeyde olması sağlanmalıdır; aksi hâlde araç sahaya ulaştığında ilk iş şarja bağlamak olur ve bu da planlanan başlangıç saatini geciktirir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el elektrikli forkliftin akü kapasitesini teslimattan önce nasıl öğrenebilirim?",
                cevap:
                    "Aküyü tam şarj edip yük altında çalıştırarak voltaj düşüşünü ve çalışma süresini gözlemlemek en güvenilir yöntemdir. Bu test satıcının huzurunda, mümkünse bağımsız bir teknisyen eşliğinde yapılmalıdır; yalnızca şarj göstergesine güvenmek yeterli değildir.",
            },
            {
                soru: "Nakliye sırasında akü boşalırsa ne olur?",
                cevap:
                    "Derin deşarj, özellikle kurşun asit akülerde kalıcı kapasite kaybına yol açabilir. Bu yüzden nakliye öncesi akünün yeterli şarj seviyesinde olması ve uzun bekleme sürelerinden kaçınılması önemlidir.",
            },
            {
                soru: "Akü değişim maliyeti gerçekten bu kadar yüksek mi?",
                cevap:
                    "Elektrikli forkliftlerde akü grubu aracın tek en pahalı parçasıdır ve değişim maliyeti aracın kendi ikinci el fiyatının önemli bir bölümüne yakın olabilir. Bu nedenle akü durumu bilinmeden yapılan bir satın alma, büyük bir mali risk taşır.",
            },
            {
                soru: "Kiralık forkliftte akü teslimat öncesi kontrol ediliyor mu?",
                cevap:
                    "Evet, kiralık araçlarda akü kapasitesi teslimat öncesi kontrol edilir ve kiralama süresi boyunca performans düşüşü veya arıza filo sahibinin sorumluluğundadır; kiracıya ek maliyet yansımaz.",
            },
            {
                soru: "Şarj altyapım mevcut aküyle uyumlu değilse ne yapmalıyım?",
                cevap:
                    "İkinci el bir araçta bu uyumsuzluk satın alma sonrası ek bir şarj cihazı yatırımı gerektirebilir. Kiralamada ise saha altyapısı bilgisi paylaşıldığında uyumlu akü tipine sahip araç seçilerek bu maliyet önlenir.",
            },
            {
                soru: "Dizel forklift nakliyesinde akü riski geçerli mi?",
                cevap:
                    "Dizel modellerde büyük akü grubu bulunmaz, yalnızca standart bir marş aküsü vardır; bu nedenle akü riski esas olarak elektrikli forklift modelleri için geçerlidir. Dizel modellerde teslimat sonrası performans riski daha çok motor ve yakıt sistemiyle ilgilidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Elektrikli forklift akü/batarya dinamikleri (kapasite kaybı, şarj döngüsü, derin deşarj) sektör geneli bilinen teknik bilgidir. Marka, tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Yük Taşıma ve İstifleme İşinde İkinci El Forkliftin Hidrolik Sistem Riski",
        giris:
            "Palet taşıma ve istifleme işleri, forkliftin kaldırma ve eğme fonksiyonlarını sürekli devrede tutan, hidrolik sistemi en yoğun kullanan iş türlerinden biridir. Bu yoğun kullanım, hidrolik pompa, valf ve silindirlerdeki aşınmayı hızlandırır ve zamanla kaldırma hızında düşüş, sızıntı veya ani performans kaybı olarak kendini gösterir. İkinci el bir forklift satın alınırken hidrolik sistemin iç durumu, yalnızca dışarıdan yağ seviyesine bakılarak anlaşılamaz; pompa içi aşınma ancak yük altında test edilerek ortaya çıkar ve bu test genellikle satın alma sürecinde atlanır. Yoğun istifleme işine başlayan bir işletme için bu, kısa sürede kaldırma performansının beklenenin altında kalması riskini taşır. Bu sayfada, istifleme ağırlıklı işlerde forkliftin hidrolik sistem durumunun neden özellikle kritik olduğunu ve kiralamanın bu riski nasıl bertaraf ettiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Sürekli kaldırma-indirme döngüsünün hidrolik sisteme etkisi",
                metin:
                    "İstifleme işinde forklift, gün boyunca yüzlerce kez kaldırma ve indirme hareketi yapar; bu tekrarlı döngü hidrolik contalarda mikro sızıntılar oluşturur ve pompa içi aşınmayı hızlandırır. İkinci el bir araçta bu döngü sayısının toplamı bilinmez, yalnızca aracın yaşı bilinir; ama yaş, gerçek kullanım yoğunluğunu yansıtmaz.",
            },
            {
                baslik: "Kaldırma hızındaki düşüşün fark edilmesi",
                metin:
                    "Hidrolik pompa aşındıkça kaldırma hızı kademeli olarak düşer; bu düşüş yavaş ilerlediği için günlük kullanımda fark edilmesi zordur. İkinci el bir araç test edilirken kısa bir deneme yeterli olmayabilir, çünkü aşınmanın etkisi ancak sürekli yük altında ve uzun süreli kullanımda belirginleşir.",
            },
            {
                baslik: "Sızıntı noktalarının tespiti",
                metin:
                    "Hidrolik yağ sızıntısı genellikle silindir contalarında veya hortum bağlantılarında başlar ve başlangıçta yalnızca hafif bir leke olarak görünür. İkinci el alımda bu lekeler satış öncesi temizlenmiş olabilir, bu da sızıntının varlığını gizler; sızıntı ancak birkaç günlük kullanım sonrası yeniden ortaya çıkar.",
            },
            {
                baslik: "Yoğun istiflemede arızanın operasyonel maliyeti",
                metin:
                    "İstifleme işi genellikle depo akışının merkezinde yer aldığı için forkliftin hidrolik arıza nedeniyle devre dışı kalması, yalnızca o aracın değil tüm depo operasyonunun yavaşlamasına yol açabilir. İkinci el bir araçta bu arıza riski önceden öngörülemediği için, işletme yedek araç bulundurmak zorunda kalabilir; bu da ek bir maliyet kalemidir.",
            },
            {
                baslik: "Kiralamada periyodik hidrolik bakım güvencesi",
                metin:
                    "Kiralık forkliftlerde hidrolik sistem periyodik bakım programına dahildir ve yük testi düzenli aralıklarla yapılır; sızıntı veya performans düşüşü tespit edildiğinde onarım filo sahibi tarafından üstlenilir. Bu, yoğun istifleme işlerinde kaldırma performansının sürekli güvence altında olmasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İkinci El Forklift Riski ve Kiralama Avantajı — Hidrolik Sistem Ekseni",
                paragraflar: [
                    "İstifleme ağırlıklı işlerde hidrolik sistem durumunun taşıdığı riskler aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "İkinci El Forklift Riski", "Kiralama Avantajı"],
                    satirlar: [
                        ["Pompa/valf aşınması", "Yük testi yapılmadan satın alınır", "Periyodik yük testi filo tarafından yapılır"],
                        ["Sızıntı", "Satış öncesi temizlenmiş olabilir", "Düzenli kontrol ile erken tespit"],
                        ["Kaldırma hızı", "Yavaş düşüş, kısa testte fark edilmez", "Performans garantili teslim"],
                        ["Arıza sonrası operasyon", "Yedek araç bulundurma yükü alıcıda", "İkame araç filo sahibinin sorumluluğunda"],
                    ],
                },
            },
            {
                baslik: "Hidrolik sistemi satın almadan önce test etme yöntemi",
                paragraflar: [
                    "İkinci el bir forkliftin hidrolik sistemini değerlendirirken, aracın nominal kapasitesine yakın bir yükle kaldırma hızı üretici değerleriyle karşılaştırılmalı ve yük tam yüksekliğe kaldırılıp birkaç dakika o konumda tutularak ani bir alçalma (sızıntı işareti) olup olmadığı gözlemlenmelidir. Bu test, satıcının huzurunda ve tercihen bağımsız bir teknisyen eşliğinde yapılmalıdır.",
                    "Bu testin atlanması, satın alma sonrası ilk yoğun kullanım haftalarında hidrolik arızasıyla karşılaşma riskini önemli ölçüde artırır; onarım maliyeti çoğu zaman testin kendisinden çok daha yüksektir.",
                ],
            },
            {
                baslik: "Yoğun istifleme işlerinde araç seçimi ve kapasite planlaması",
                paragraflar: [
                    "İstifleme işinin yoğunluğu (günlük palet sayısı, ortalama kaldırma yüksekliği) doğru forklift kapasitesinin belirlenmesinde temel kriterdir; kapasitesi yetersiz bir araç hidrolik sistemi sürekli sınırda çalıştırarak aşınmayı hızlandırır. İşin yoğunluğu netleştirildiğinde, hem satın alma hem kiralama kararında daha isabetli bir kapasite seçimi yapılabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el forkliftte hidrolik sistem sızıntısını nasıl tespit ederim?",
                cevap:
                    "Silindir ve hortum bağlantılarında yağ lekesi aranmalı, ayrıca araç yük altında tam yüksekliğe kaldırılıp birkaç dakika beklenerek ani bir alçalma olup olmadığı gözlemlenmelidir. Satış öncesi temizlenmiş bir sızıntı, kısa bir bakışta fark edilmeyebilir.",
            },
            {
                soru: "Kaldırma hızındaki düşüş neden fark edilmesi zor?",
                cevap:
                    "Pompa aşındıkça kaldırma hızı kademeli ve yavaş biçimde düşer; günlük kullanımda bu değişim fark edilmeyecek kadar yavaş ilerler. Ancak üretici değerleriyle karşılaştırmalı bir test yapıldığında düşüş net biçimde ortaya çıkar.",
            },
            {
                soru: "Yoğun istifleme işinde hidrolik arıza çıkarsa operasyonum ne kadar etkilenir?",
                cevap:
                    "İstifleme genellikle depo akışının merkezinde olduğu için forkliftin devre dışı kalması tüm operasyonu yavaşlatabilir. İkinci el bir araçta bu risk önceden öngörülemez; kiralamada ise ikame araç temini genellikle sözleşme kapsamındadır.",
            },
            {
                soru: "Kiralık forkliftte hidrolik bakım ne sıklıkla yapılıyor?",
                cevap:
                    "Bakım periyodu araç kullanım yoğunluğuna göre planlanır ve düzenli aralıklarla yük testi dahil kontrol yapılır. Bu programın sürekliliği sözleşme kapsamında filo sahibinin sorumluluğundadır.",
            },
            {
                soru: "Hidrolik yağ seviyesi normal görünüyorsa sistem sağlıklı demektir mi?",
                cevap:
                    "Hayır, yağ seviyesi yalnızca kaba bir gösterge sunar; pompa ve valf içindeki aşınma yağ seviyesinden bağımsız ilerleyebilir. Gerçek durumun anlaşılması için yük altında performans testi gerekir.",
            },
            {
                soru: "İkinci el forkliftte hidrolik sistem onarımı ne kadar maliyetli olabilir?",
                cevap:
                    "Pompa veya valf değişimi, aracın diğer bakım kalemlerine göre daha yüksek maliyetli bir onarımdır ve genellikle önceden planlanmadığı için işletme bütçesine ek bir yük olarak yansır. Bu risk, satın alma öncesi yük testi yapılmadığında büyük ölçüde görünmez kalır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift hidrolik sistem aşınma dinamikleri sektör geneli bilinen teknik bilgidir. Marka, tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Eklemli Platform Sahasında Forklift Desteğinde Motor ve Yakıt Sistemi Riski",
        giris:
            "Eklemli platform (boom) işlerinde forklift genellikle malzeme ve ekipman ikmalinde destek aracı olarak kullanılır; bu tür işler çoğunlukla açık sahada, uzun mesafeli hareket gerektiren sahalarda yürütülür ve forkliftin motor performansı bu hareketliliğin sürekliliğini belirler. Dizel bir ikinci el forkliftte motor ve yakıt sisteminin gerçek durumu, dışarıdan çalıştırıldığında bile net anlaşılmaz; enjektör kirliliği, yakıt filtresi tıkanıklığı veya turbo aşınması gibi sorunlar ancak yük altında ve uzun süreli çalışmada ortaya çıkar. Boom platformla eş zamanlı yürütülen bir sahada motor kaynaklı bir arıza, yalnızca forkliftin değil tüm malzeme ikmal zincirinin aksamasına yol açabilir. Bu sayfada, eklemli platform işlerinde destek forkliftinin motor/yakıt sistemi riskinin neden özellikle önemli olduğunu ve kiralamanın bu riski nasıl azalttığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Enjektör ve yakıt filtresi kirliliği",
                metin:
                    "Dizel motorlarda enjektörler zamanla kirlenir ve bu kirlenme yakıt tüketimini artırırken motor gücünü düşürür. İkinci el bir araçta enjektör bakım geçmişi genellikle belgelenmez; alıcı motorun çalışır durumda olmasına bakarak karar verir, ama bu, enjektörlerin optimum verimlilikte çalıştığı anlamına gelmez.",
            },
            {
                baslik: "Turbo aşınması ve güç kaybı",
                metin:
                    "Turbo şarjlı dizel motorlarda turbo ünitesi yoğun kullanımla aşınır ve bu aşınma özellikle yüksek yükte ani güç talebi anlarında fark edilir. Açık saha ve uzun mesafeli hareket gerektiren boom destek işlerinde bu tür ani yük talepleri sık yaşanır; ikinci el bir araçta turbo durumunun test edilmemiş olması, sahada beklenmedik güç kaybı riski taşır.",
            },
            {
                baslik: "Soğutma sistemi ve aşırı ısınma riski",
                metin:
                    "Açık sahada uzun süreli ve kesintisiz çalışma, motor soğutma sistemini normalden daha fazla zorlar; radyatör tıkanıklığı veya soğutma sıvısı eksikliği fark edilmezse motor aşırı ısınabilir. İkinci el bir araçta soğutma sisteminin bakım geçmişi genellikle sorgulanmaz ve bu, yaz aylarında veya yoğun kullanımda ciddi bir arıza riskine dönüşebilir.",
            },
            {
                baslik: "Yakıt sisteminde su veya kirlilik birikimi",
                metin:
                    "Uzun süre kullanılmayan veya düzensiz yakıt ikmali yapılan araçlarda yakıt deposunda su birikimi veya mikrobiyal kirlilik oluşabilir; bu durum motora ulaştığında enjektör hasarına yol açabilir. İkinci el bir aracın yakıt deposu ve sisteminin temizlik durumu satın alma öncesi kontrol edilmezse, bu risk motor çalışır göründüğü sürece fark edilmez.",
            },
            {
                baslik: "Kiralamada motor performans garantisi",
                metin:
                    "Kiralık dizel forkliftlerde motor bakımı (yağ, filtre, enjektör kontrolü) periyodik programa dahildir ve motor kaynaklı bir güç kaybı veya arıza durumunda onarım filo sahibinin sorumluluğundadır. Bu, açık saha ve uzun mesafeli boom destek işlerinde motor performansının süreklilik arz etmesini sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İkinci El Forklift Riski ve Kiralama Avantajı — Motor/Yakıt Sistemi Ekseni",
                paragraflar: [
                    "Açık saha ve boom destek işlerinde forkliftin motor/yakıt sistemi durumunun taşıdığı riskler aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "İkinci El Forklift Riski", "Kiralama Avantajı"],
                    satirlar: [
                        ["Enjektör durumu", "Bakım geçmişi belgelenmez", "Periyodik kontrol filo tarafından yapılır"],
                        ["Turbo performansı", "Yüksek yükte ani güç kaybı riski", "Performans garantili teslim"],
                        ["Soğutma sistemi", "Aşırı ısınma riski öngörülemez", "Düzenli soğutma sistemi kontrolü"],
                        ["Yakıt kirliliği", "Depo/sistem temizliği bilinmez", "Güncel ve temiz yakıt sistemi"],
                    ],
                },
            },
            {
                baslik: "Dizel motor durumunu satın almadan önce değerlendirme yöntemi",
                paragraflar: [
                    "İkinci el bir dizel forkliftin motoru değerlendirilirken, aracın soğukken ve sıcakken çalıştırılması, egzoz dumanının rengi (aşırı siyah veya beyaz duman motor sorununa işaret edebilir) ve yük altında ani hızlanma tepkisi gözlemlenmelidir. Bu gözlemler, motorun genel sağlığı hakkında dolaylı ama önemli bilgi verir.",
                    "Kesin bir değerlendirme için ise bağımsız bir teknisyen tarafından kompresyon testi ve yakıt sistemi kontrolü yapılması önerilir; bu adım atlanırsa motor kaynaklı sorunlar ancak sahada yoğun kullanım başladıktan sonra ortaya çıkar.",
                ],
            },
            {
                baslik: "Boom platform ile forklift destek işlerinin koordinasyonu",
                paragraflar: [
                    "Eklemli platform işlerinde forkliftin malzeme ikmal rotası genellikle boom'un çalışma alanına bağlı olarak değişir; bu nedenle forkliftin güvenilirliği, boom operasyonunun akıcılığını doğrudan etkiler. Motor kaynaklı bir arıza, yalnızca forkliftin kendi işini değil boom'un malzeme beklemesine bağlı gecikmesini de tetikleyebilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el dizel forkliftte motor durumunu nasıl anlarım?",
                cevap:
                    "Soğuk ve sıcak çalıştırma, egzoz dumanı rengi ve yük altında hızlanma tepkisi dolaylı bilgi verir; ama kesin değerlendirme için bağımsız bir teknisyenin kompresyon testi ve yakıt sistemi kontrolü yapması önerilir.",
            },
            {
                soru: "Turbo aşınması neden özellikle açık saha işlerinde önemli?",
                cevap:
                    "Açık saha ve uzun mesafeli hareket gerektiren işlerde ani yük talepleri sık yaşanır ve turbo aşınmışsa bu anlarda güç kaybı yaşanır. İkinci el bir araçta turbo durumu test edilmemişse, bu risk sahada beklenmedik biçimde ortaya çıkar.",
            },
            {
                soru: "Yakıt sisteminde su birikimi nasıl bir sorun yaratır?",
                cevap:
                    "Su veya mikrobiyal kirlilik enjektöre ulaştığında ciddi hasara yol açabilir. Bu durum motor çalışır göründüğü sürece fark edilmez ve ancak enjektör arızası ortaya çıktığında belirginleşir.",
            },
            {
                soru: "Kiralık forkliftte motor arızası çıkarsa boom işim aksar mı?",
                cevap:
                    "Ciddi bir kiralama işletmesinde motor kaynaklı arızalar filo sahibinin sorumluluğundadır ve gerektiğinde ikame araç sağlanır; bu, boom destek işlerinde aksama riskini azaltır.",
            },
            {
                soru: "Egzoz dumanının rengi motor sağlığı hakkında ne söyler?",
                cevap:
                    "Aşırı siyah duman genellikle yakıt-hava karışımı sorununu, beyaz duman ise yanma odasına su veya soğutma sıvısı karışması ihtimalini işaret edebilir. Bu gözlem tek başına kesin tanı koymaz ama teknik incelemeye yönlendiren önemli bir ipucudur.",
            },
            {
                soru: "Motor bakım geçmişi olmayan bir ikinci el forklift almalı mıyım?",
                cevap:
                    "Bakım geçmişi belgelenmemiş bir araçta motor durumunun gerçek seviyesini bilmek mümkün değildir; bu belirsizlik özellikle yoğun ve sürekli kullanım gerektiren işlerde büyük bir risktir. Böyle bir durumda bağımsız teknik inceleme yaptırmak veya kiralamayı tercih etmek daha güvenlidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Dizel motor bakım kalemleri (enjektör, turbo, soğutma, yakıt sistemi) sektör geneli bilinen teknik bilgidir. Marka, tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "İç Mekân Depo İşlerinde İkinci El Forkliftte Yedek Parça Tedarik Süresi Riski",
        giris:
            "İç mekân ve depo içi işlerde forklift genellikle günlük operasyonun kesintisiz devam etmesi beklenen bir ekipmandır; bir arıza anında aracın ne kadar sürede tekrar çalışır hâle geleceği, yedek parça tedarik süresiyle doğrudan ilişkilidir. İkinci el bir forklift, özellikle piyasada daha az yaygın bir marka veya model ise, arıza durumunda parça bulmak günler hatta haftalar sürebilir; bu süre boyunca depo operasyonu ya yavaşlar ya da alternatif bir çözüm aranmak zorunda kalınır. Satın alma kararı verilirken bu risk genellikle göz ardı edilir çünkü ilan aşamasında aracın çalışır durumda olması yeterli görülür, parça bulunabilirliği sorgulanmaz. Bu sayfada, iç mekân depo işlerinde forkliftin yedek parça tedarik süresinin neden kritik bir risk kalemi olduğunu ve kiralamanın bu belirsizliği nasıl ortadan kaldırdığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Marka/model yaygınlığının parça bulunabilirliğine etkisi",
                metin:
                    "Piyasada yaygın olarak satılan marka ve modellerin yedek parçası genellikle bölgesel bayilerde stokta bulunurken, daha az yaygın veya ithal edilmesi zor modellerin parçası özel sipariş gerektirebilir. İkinci el bir araç satın alınırken bu yaygınlık faktörü nadiren değerlendirilir; alıcı fiyat ve görünür durum üzerinden karar verir.",
            },
            {
                baslik: "Arıza anında operasyonun durma süresi",
                metin:
                    "Depo içi kesintisiz çalışan bir işletmede forkliftin arızalanması, parça temin edilene kadar operasyonun yavaşlamasına veya tamamen durmasına yol açabilir. İkinci el bir araçta bu süre önceden tahmin edilemez; parça yerel stokta yoksa birkaç gün, ithal gerekiyorsa haftalar sürebilir ve bu süre boyunca alternatif ekipman kiralamak zorunda kalınabilir.",
            },
            {
                baslik: "Eski model parçalarının üretimden kalkması",
                metin:
                    "Belirli bir yaşın üzerindeki forklift modellerinde bazı parçaların üretimi durdurulmuş olabilir; bu durumda parça ya ikinci el piyasadan ya da özel imalatla temin edilir, her iki yol da hem maliyetli hem de zaman alıcıdır. İkinci el alım sırasında aracın model yaşı ve parça üretim durumu birlikte değerlendirilmezse, bu risk yalnızca arıza anında fark edilir.",
            },
            {
                baslik: "Yerel servis ağının parça stoğuyla ilişkisi",
                metin:
                    "Bir markanın yerel servis ağı güçlüyse, sık arızalanan parçalar genellikle bölgesel depoda stoklu tutulur; servis ağı zayıfsa parça merkezi depodan veya yurt dışından getirilir. İkinci el bir araç satın alınırken markanın yerel servis kapasitesi araştırılmazsa, arıza sonrası bekleme süresi beklenenin çok üzerinde olabilir.",
            },
            {
                baslik: "Kiralamada parça tedarik riskinin filo sahibine geçmesi",
                metin:
                    "Kiralık forkliftlerde yedek parça tedariği ve stok yönetimi filo sahibinin sorumluluğundadır; filo genellikle yaygın ve servis desteği güçlü modelleri tercih eder, bu da arıza sonrası müdahale süresini kısaltır. Bir arıza durumunda kiracı parça bulma sürecine dahil olmaz, yalnızca ikame çözümden faydalanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İkinci El Forklift Riski ve Kiralama Avantajı — Yedek Parça Tedarik Ekseni",
                paragraflar: [
                    "İç mekân depo işlerinde forkliftin yedek parça tedarik süresinin taşıdığı riskler aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "İkinci El Forklift Riski", "Kiralama Avantajı"],
                    satirlar: [
                        ["Parça bulunabilirliği", "Marka/model yaygınlığına bağlı belirsiz", "Filo genelde yaygın model tercih eder"],
                        ["Arıza sonrası bekleme", "Günler-haftalar arası öngörülemez", "İkame araç ile kesinti azaltılır"],
                        ["Eski model parçaları", "Üretimden kalkmış olabilir", "Güncel/yaygın model kullanımı"],
                        ["Yerel servis kapasitesi", "Satın alma öncesi araştırılmaz", "Filo servis ağı güçlü model seçer"],
                    ],
                },
            },
            {
                baslik: "İkinci el forklift alırken parça bulunabilirliğini araştırma yöntemi",
                paragraflar: [
                    "Bir ikinci el forklift değerlendirilirken, marka ve modelin bölgedeki yetkili servis ağı ve parça bayii sayısı araştırılmalı, sık arızalanan parçaların (filtre, conta, elektrik aksamı) stokta bulunup bulunmadığı sorgulanmalıdır. Bu araştırma, satın alma kararının yalnızca fiyat üzerinden değil, uzun vadeli kullanılabilirlik üzerinden verilmesini sağlar.",
                    "Parça bulunabilirliği düşük bir modelin ilk bakışta cazip bir fiyatla satılıyor olması, uzun vadede daha yüksek bir toplam maliyete dönüşebilir; bu nedenle fiyat karşılaştırması yaparken parça tedarik riski de hesaba katılmalıdır.",
                ],
            },
            {
                baslik: "Depo operasyonunda yedek araç bulundurma maliyeti",
                paragraflar: [
                    "Arıza riskine karşı bir yedek forklift bulundurmak, işletmeye sürekli bir sabit maliyet (sigorta, bakım, park alanı) yükler ve bu araç çoğu zaman atıl kalır. Kiralama modeli, arıza anında ikame araç sağlandığı için işletmenin kendi bünyesinde yedek araç bulundurma zorunluluğunu ortadan kaldırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el forklift alırken yedek parça bulunabilirliğini nasıl kontrol ederim?",
                cevap:
                    "Marka ve modelin bölgedeki yetkili servis ağı ve bayi sayısı araştırılmalı, sık arızalanan parçaların stokta olup olmadığı sorgulanmalıdır. Bu bilgi genellikle ilanlarda yer almaz, doğrudan servis noktalarıyla iletişime geçilerek öğrenilmelidir.",
            },
            {
                soru: "Az yaygın bir marka forklift almak neden riskli?",
                cevap:
                    "Az yaygın markaların parçaları genellikle yerel stokta bulunmaz ve özel sipariş gerektirir; bu da arıza sonrası bekleme süresini günlerden haftalara çıkarabilir. Depo içi kesintisiz operasyon gereken işlerde bu risk özellikle yüksektir.",
            },
            {
                soru: "Eski model bir forkliftin parçası üretimden kalkmışsa ne olur?",
                cevap:
                    "Bu durumda parça ikinci el piyasadan veya özel imalatla temin edilmeye çalışılır; her iki yol da yüksek maliyetli ve zaman alıcıdır. Model yaşı satın alma öncesi bu açıdan değerlendirilmelidir.",
            },
            {
                soru: "Kiralık forklift arızalanırsa parça bekleme süresi kiracıyı etkiler mi?",
                cevap:
                    "Hayır, parça tedarik süreci filo sahibinin sorumluluğundadır ve genellikle bu süre boyunca kiracıya ikame araç sağlanır; kiracı parça bekleme sürecine doğrudan maruz kalmaz.",
            },
            {
                soru: "Depo işletmesi kendi yedek forkliftini bulundurmalı mı?",
                cevap:
                    "Yedek araç bulundurmak sürekli bir sabit maliyet (sigorta, bakım, park alanı) yaratır ve araç çoğu zaman atıl kalır. Kiralama modelinde ikame araç ihtiyaç anında sağlandığı için bu sabit maliyet ortadan kalkar.",
            },
            {
                soru: "Yerel servis ağı güçlü bir markayı nasıl anlarım?",
                cevap:
                    "Markanın bölgede birden fazla yetkili servis noktası ve bayisi olması, parça ve teknik destek erişiminin daha hızlı olacağının bir göstergesidir. Bu bilgi, satıcıdan değil doğrudan servis noktalarından teyit edilmelidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift yedek parça tedarik dinamikleri ve marka/model yaygınlığının etkisi sektör geneli bilinen genel bilgidir. Marka, tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Çelik Konstrüksiyon Sahasında Forklift Desteğinde Bakım Geçmişi Belirsizliği Riski",
        giris:
            "Çelik konstrüksiyon montaj sahalarında forklift, ağır çelik profil ve malzemenin sahaya taşınmasında sıkça kullanılır ve bu iş, aracı standart depo kullanımına göre daha ağır yüklerle ve daha zorlu koşullarda çalıştırır. İkinci el bir forklift satın alınırken en büyük belirsizlik kalemlerinden biri, aracın önceki bakım geçmişinin ne kadar düzenli ve belgeli olduğudur; bir satıcının 'düzenli bakımlı' ifadesi, somut bir bakım kaydı olmadan doğrulanabilir bir bilgi değildir. Ağır yük taşıyan bir sahada bakım geçmişi belirsiz bir aracın hangi parçasının ne zaman değiştiğini, hangi arızaların yaşandığını bilmeden karar vermek, montaj takvimine bağlı bir işte büyük bir risk taşır. Bu sayfada, çelik konstrüksiyon işlerinde forkliftin bakım geçmişi belirsizliğinin neden özellikle önemli olduğunu ve kiralamanın bu belirsizliği nasıl ortadan kaldırdığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Bakım kaydı olmayan bir aracın gerçek durumu",
                metin:
                    "Bir forkliftin periyodik bakımlarının (yağ değişimi, filtre kontrolü, hidrolik test) düzenli yapılıp yapılmadığı, yalnızca yazılı bir servis kaydıyla doğrulanabilir. İkinci el ilanların büyük bölümünde bu kayıt paylaşılmaz veya eksik sunulur; alıcı satıcının sözlü beyanına güvenmek zorunda kalır ve bu beyan genellikle doğrulanamaz.",
            },
            {
                baslik: "Ağır yük taşımanın bakım ihtiyacını artırması",
                metin:
                    "Çelik profil ve malzeme taşımak, forkliftin standart palet taşımasına göre daha ağır ve daha düzensiz yük dağılımı anlamına gelir; bu tür kullanım hidrolik sistem, mast ve şase üzerinde daha hızlı yorulmaya yol açar. Bakım geçmişi bilinmeyen bir araçta bu yorulmanın ne kadar biriktiği tahmin edilemez.",
            },
            {
                baslik: "Geçmiş arızaların gizlenmesi riski",
                metin:
                    "Bir aracın geçmişte yaşadığı ciddi bir arıza (örneğin mast eğilmesi veya şase çatlağı) onarıldıktan sonra dışarıdan fark edilmeyebilir, ama bu onarımın kalitesi ve kalıcılığı belgelenmemişse aynı sorunun tekrarlama riski sürer. İkinci el satın almada bu tür geçmiş arıza bilgisi neredeyse hiç paylaşılmaz.",
            },
            {
                baslik: "Montaj takvimine bağlı işlerde belirsizliğin maliyeti",
                metin:
                    "Çelik konstrüksiyon montajı genellikle sıkı bir takvime bağlı yürütülür ve forkliftin beklenmedik bir arızayla devre dışı kalması, montaj sürecini doğrudan geciktirir. Bakım geçmişi belirsiz bir araçla bu riski üstlenmek, takvime bağlı işlerde kabul edilebilir bir risk olmayabilir.",
            },
            {
                baslik: "Kiralamada belgeli ve düzenli bakım programı",
                metin:
                    "Kiralık forkliftlerde bakım programı düzenli olarak uygulanır ve bu program filo sahibi tarafından belgelenir; kiracı aracın bakım durumunu sorguladığında net bir yanıt alabilir. Bu şeffaflık, özellikle ağır yük taşınan ve takvime bağlı çelik konstrüksiyon işlerinde önemli bir güvence sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İkinci El Forklift Riski ve Kiralama Avantajı — Bakım Geçmişi Ekseni",
                paragraflar: [
                    "Çelik konstrüksiyon işlerinde forkliftin bakım geçmişi belirsizliğinin taşıdığı riskler aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "İkinci El Forklift Riski", "Kiralama Avantajı"],
                    satirlar: [
                        ["Bakım kaydı", "Yazılı belge genellikle yok", "Düzenli ve belgeli bakım programı"],
                        ["Geçmiş arızalar", "Onarım kalitesi doğrulanamaz", "Filo sahibi bakım geçmişini takip eder"],
                        ["Ağır yük yorulması", "Ne kadar biriktiği bilinmez", "Kullanım yoğunluğuna göre model seçimi"],
                        ["Takvime bağlı risk", "Beklenmedik arıza montajı geciktirir", "İkame araç ile kesinti azaltılır"],
                    ],
                },
            },
            {
                baslik: "Bakım geçmişini doğrulama yöntemleri",
                paragraflar: [
                    "İkinci el bir forklift değerlendirilirken satıcıdan yazılı servis kayıtları istenmeli; bu kayıtlar yoksa aracın periyodik bakım kartı veya yetkili servis faturaları sorgulanmalıdır. Kayıt tamamen yoksa, bağımsız bir teknik inceleme yaptırmak, aracın gerçek durumu hakkında en azından o anki bir fikir verir; ama geçmiş kullanım yoğunluğu hakkında kesin bilgi sağlamaz.",
                    "Bakım kaydı olmayan bir araca yatırım yapmak, satın alma fiyatının ne kadar cazip olduğundan bağımsız olarak, gelecekteki bakım maliyetini öngörülemez hâle getirir; bu belirsizlik özellikle ağır yük taşınan işlerde ciddiye alınmalıdır.",
                ],
            },
            {
                baslik: "Ağır yük taşıma için doğru forklift kapasitesi seçimi",
                paragraflar: [
                    "Çelik profil ve malzeme taşırken forkliftin kapasitesinin yükün ağırlığına ve dengesine uygun seçilmesi, hem güvenlik hem de aracın yıpranma hızı açısından önemlidir. Kapasitesi sınırda bir araç, sürekli zorlanarak çalıştığında bakım ihtiyacını normalden daha hızlı artırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el forkliftin bakım geçmişini nasıl doğrularım?",
                cevap:
                    "Satıcıdan yazılı servis kayıtları veya yetkili servis faturaları istenmelidir. Bu belgeler yoksa, aracın gerçek bakım durumu hakkında güvenilir bir bilgi elde etmek mümkün değildir; bağımsız bir teknik inceleme en azından o anki durumu değerlendirebilir.",
            },
            {
                soru: "Geçmişte onarılmış bir arıza tekrar edebilir mi?",
                cevap:
                    "Onarımın kalitesi ve kalıcılığı belgelenmemişse evet, aynı sorunun tekrarlama riski sürer. Özellikle mast veya şase gibi yapısal parçalarda geçmiş bir hasarın onarım kalitesi kritik önemdedir.",
            },
            {
                soru: "Ağır yük taşıyan işlerde bakım geçmişi neden daha kritik?",
                cevap:
                    "Ağır ve düzensiz yük taşımak hidrolik sistem, mast ve şase üzerinde standart kullanıma göre daha hızlı yorulmaya yol açar. Bakım geçmişi bilinmeyen bir araçta bu yorulmanın ne kadar biriktiği tahmin edilemez, bu da beklenmedik arıza riskini artırır.",
            },
            {
                soru: "Montaj takvimine bağlı bir işte kiralamayı tercih etmek neden mantıklı?",
                cevap:
                    "Kiralamada bakım programı belgeli ve düzenlidir, arıza durumunda ikame araç genellikle sözleşme kapsamındadır. Bu, sıkı bir takvime bağlı montaj işlerinde beklenmedik gecikme riskini önemli ölçüde azaltır.",
            },
            {
                soru: "Bakım kaydı olmayan bir forkliftin fiyatı ucuzsa yine de riskli mi?",
                cevap:
                    "Evet, düşük fiyat bakım geçmişi belirsizliğini telafi etmez; onarım maliyeti ve montaj gecikmesi gibi ikincil maliyetler, başlangıçtaki fiyat avantajını kısa sürede aşabilir.",
            },
            {
                soru: "Kiralık forkliftte bakım programını nasıl doğrulayabilirim?",
                cevap:
                    "Kiralama işletmesinden bakım programının nasıl uygulandığı ve belgelenip belgelenmediği sorulabilir; ciddi bir işletme bu bilgiyi şeffaf biçimde paylaşır, çünkü bakımlı bir filo kendi ticari çıkarına da hizmet eder.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift bakım geçmişi ve ağır yük taşıma dinamikleri sektör geneli bilinen genel bilgidir. Marka, tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarım ve Silo Sahalarında Forklift Desteğinde LPG Tüp Güvenlik Sertifikası Riski",
        giris:
            "Tarım ve silo sahalarında forklift, çoğunlukla kapalı veya yarı kapalı depolama alanlarında çuval, palet ve tahıl ürünü taşımasında kullanılır; bu ortamlarda egzoz emisyonunun düşük tutulması gerektiği için LPG'li forklift modelleri sıkça tercih edilir. İkinci el bir LPG'li forkliftte, aracın kendisi kadar üzerindeki LPG tüpünün güvenlik sertifikası ve periyodik test durumu da kritik bir kalemdir; bir LPG tüpünün belirli aralıklarla basınç testinden geçmesi ve sertifikasının güncel olması yasal ve güvenlik açısından zorunludur. İkinci el alımda tüpün kendisi araçla birlikte devredilir ama sertifika geçerlilik tarihi genellikle sorgulanmaz; süresi dolmuş veya test edilmemiş bir tüp, kapalı bir tarım deposunda ciddi bir güvenlik riski oluşturur. Bu sayfada, tarım ve silo sahalarında LPG'li forkliftin tüp sertifikası riskinin neden özellikle önemli olduğunu ve kiralamanın bu riski nasıl ortadan kaldırdığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "LPG tüpünün periyodik test zorunluluğu",
                metin:
                    "LPG tüpleri, malzeme yorulması ve basınç kaybı riskine karşı belirli aralıklarla hidrostatik basınç testinden geçirilmesi gereken ekipmanlardır. İkinci el bir forklift satın alındığında, üzerindeki tüpün son test tarihi ve sertifikasının geçerlilik süresi araç faturasında değil, tüpün kendi etiketinde yer alır ve bu bilgi satın alma sürecinde çoğu zaman kontrol edilmez.",
            },
            {
                baslik: "Kapalı tarım deposunda LPG kullanımının getirdiği hassasiyet",
                metin:
                    "Tarım ürünleri genellikle yanıcı organik madde (tahıl tozu, kuru ot artığı) içerdiği için kapalı silo ve depo alanlarında LPG sızıntısı riski, standart bir depoya göre daha ciddi sonuçlar doğurabilir. Sertifikası süresi dolmuş veya test edilmemiş bir tüp, bu tür ortamlarda kabul edilebilir bir risk değildir.",
            },
            {
                baslik: "Tüp değişiminin ve yeniden sertifikalandırmanın maliyeti",
                metin:
                    "Süresi dolmuş bir LPG tüpünün yeniden test ettirilmesi veya değiştirilmesi, ikinci el forkliftin satın alma fiyatına dahil olmayan ayrı bir maliyet kalemidir. Alıcı bu maliyeti satın alma anında hesaba katmazsa, aracı yasal ve güvenli biçimde kullanabilmek için beklenmedik bir ek harcama yapmak zorunda kalır.",
            },
            {
                baslik: "Denetim ve yasal uygunluk riski",
                metin:
                    "Tarım ve gıda depolama tesisleri zaman zaman iş güvenliği denetimine tabi tutulabilir ve bu denetimlerde LPG tüpünün sertifika durumu sorgulanabilir. Sertifikası geçersiz bir tüple çalışan bir forklift, denetim sırasında işletmeyi yasal bir sorunla karşı karşıya bırakabilir; bu risk ikinci el alımda satın alma anında gözden kaçabilir.",
            },
            {
                baslik: "Kiralamada güncel sertifikalı LPG tüpü güvencesi",
                metin:
                    "Kiralık LPG'li forkliftlerde tüpün periyodik test ve sertifika takibi filo sahibinin sorumluluğundadır; kiracı aracı teslim aldığında tüpün güncel ve geçerli sertifikaya sahip olduğundan emin olabilir. Bu, tarım ve silo sahalarında hem güvenlik hem de denetim uygunluğu açısından önemli bir avantajdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İkinci El Forklift Riski ve Kiralama Avantajı — LPG Tüp Sertifikası Ekseni",
                paragraflar: [
                    "Tarım ve silo sahalarında LPG'li forkliftin tüp sertifikası durumunun taşıdığı riskler aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "İkinci El Forklift Riski", "Kiralama Avantajı"],
                    satirlar: [
                        ["Tüp test tarihi", "Satın alma sürecinde nadiren kontrol edilir", "Güncel test/sertifika ile teslim"],
                        ["Kapalı depoda güvenlik", "Süresi dolmuş tüp ciddi risk taşır", "Sertifikalı tüp kullanım güvencesi"],
                        ["Yeniden sertifikalandırma maliyeti", "Ayrı ve öngörülmemiş harcama", "Filo sahibinin sorumluluğunda"],
                        ["Denetim uygunluğu", "Geçersiz sertifika yasal risk yaratır", "Sertifika takibi düzenli yapılır"],
                    ],
                },
            },
            {
                baslik: "LPG tüpü sertifikasını satın almadan önce kontrol etme yöntemi",
                paragraflar: [
                    "İkinci el bir LPG'li forklift değerlendirilirken, tüpün üzerindeki etikette yer alan üretim tarihi ve son test tarihi mutlaka kontrol edilmelidir; bu bilgi genellikle tüpün gövdesinde damgalı olarak bulunur. Test tarihi belirsizse veya süresi geçmişse, tüpün yeniden test ettirilmeden kullanılmaması gerekir.",
                    "Bu kontrol, satın alma pazarlığının bir parçası olarak satıcıya açıkça sorulmalı ve mümkünse tüpün fiziksel etiketi fotoğraflanarak doğrulanmalıdır; sözlü beyan tek başına yeterli bir güvence değildir.",
                ],
            },
            {
                baslik: "Tarım sahalarında mevsimsel kullanım ve tüp bakımı",
                paragraflar: [
                    "Tarım ve silo işletmelerinde forklift kullanımı hasat dönemlerinde yoğunlaşıp diğer dönemlerde azalabilir; bu düzensiz kullanım deseni, LPG tüpünün de uzun süre atıl kalmasına yol açabilir. Uzun süre kullanılmayan bir tüpün de tekrar devreye alınmadan önce sertifika ve basınç kontrolünden geçirilmesi önerilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "LPG tüpünün sertifikasının geçerli olduğunu nasıl anlarım?",
                cevap:
                    "Tüpün gövdesinde damgalı üretim ve son test tarihi bulunur; bu tarihler periyodik test aralığıyla karşılaştırılarak sertifikanın güncel olup olmadığı anlaşılabilir. İkinci el alımda bu etiketin fiziksel olarak kontrol edilmesi gerekir.",
            },
            {
                soru: "Süresi dolmuş bir LPG tüpü kullanmak neden riskli?",
                cevap:
                    "Malzeme yorulması nedeniyle basınç kaybı veya sızıntı riski artar; özellikle kapalı ve yanıcı malzeme içeren tarım depolarında bu risk ciddi sonuçlar doğurabilir. Süresi dolmuş bir tüp kullanılmadan önce yeniden test ettirilmelidir.",
            },
            {
                soru: "Tüp yeniden sertifikalandırma maliyeti ne kadar öngörülebilir?",
                cevap:
                    "Bu maliyet aracın satın alma fiyatına dahil değildir ve alıcı tarafından ayrıca karşılanır; ikinci el satın alma öncesi bu ek maliyet hesaba katılmazsa bütçe planlaması eksik kalır.",
            },
            {
                soru: "Denetimde sertifikasız LPG tüpü tespit edilirse ne olur?",
                cevap:
                    "İşletme yasal bir uyarı veya yaptırımla karşılaşabilir; bu risk özellikle gıda ve tarım depolama tesislerinde daha ciddiye alınmalıdır çünkü bu tesisler düzenli denetime tabi olabilir.",
            },
            {
                soru: "Kiralık LPG'li forkliftte tüp sertifikası kim tarafından takip edilir?",
                cevap:
                    "Tüpün periyodik test ve sertifika takibi filo sahibinin sorumluluğundadır; kiracı bu süreçle doğrudan ilgilenmek zorunda kalmaz ve aracı her zaman güncel sertifikalı bir tüple teslim alır.",
            },
            {
                soru: "Uzun süre kullanılmayan bir LPG tüpü tekrar kullanılabilir mi?",
                cevap:
                    "Kullanılabilir, ama devreye almadan önce sertifika ve basınç kontrolünden geçirilmesi önerilir; uzun süreli atıl kalma, tüpün fiziksel durumu hakkında ek bir belirsizlik yaratır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. LPG tüpü periyodik test/sertifika zorunluluğu genel bilinen güvenlik uygulamasıdır. Marka, tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Enerji ve Aydınlatma Bakım Sahalarında Elektrikli Forkliftte Şarj Altyapısı Uyumsuzluğu Riski",
        giris:
            "Enerji ve aydınlatma bakım sahalarında, forklift genellikle malzeme ve ekipmanın direk/hat çevresine taşınmasında destek aracı olarak kullanılır ve bu sahalarda genellikle sabit bir elektrik altyapısı bulunur. Elektrikli bir ikinci el forklift satın alındığında, aracın şarj bağlantı tipi ve şarj protokolünün sahadaki mevcut altyapıyla uyumlu olup olmadığı, satın alma sürecinde nadiren sorgulanan ama teslimat sonrası ilk günde ortaya çıkan bir risktir. Bazı ikinci el elektrikli forkliftler, özellikle farklı üreticilerden veya farklı dönemlerden gelen modellerde, standart olmayan şarj konnektörüne veya voltaj gereksinimine sahip olabilir; bu durumda mevcut şarj istasyonuyla doğrudan uyumsuzluk yaşanır ve ek bir adaptör veya yeni şarj cihazı yatırımı gerekebilir. Bu sayfada, enerji ve aydınlatma bakım işlerinde elektrikli forkliftin şarj altyapısı uyumunun neden özellikle önemli olduğunu ve kiralamanın bu riski nasıl ortadan kaldırdığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Şarj konnektörü ve voltaj uyumsuzluğu",
                metin:
                    "Elektrikli forkliftler üreticiye ve modele göre farklı konnektör tipleri ve voltaj gereksinimleri (24V, 36V, 48V gibi) kullanabilir. İkinci el bir araç satın alınırken bu teknik detay genellikle satıcı tarafından belirtilmez; alıcı ancak teslimat sonrası şarj etmeye çalıştığında mevcut istasyonla uyumsuzluğu fark eder.",
            },
            {
                baslik: "Sahadaki mevcut şarj altyapısının kapasitesi",
                metin:
                    "Enerji ve aydınlatma bakım sahalarında elektrik altyapısı genellikle sabit tesisat işlerine göre planlanmıştır; forklift şarjı için ayrı bir kapasite ayrılmamış olabilir. İkinci el bir aracın şarj gücü gereksinimi, mevcut sahadaki elektrik kapasitesini aşarsa, ya altyapı güçlendirmesi ya da farklı bir şarj çözümü gerekir.",
            },
            {
                baslik: "Adaptör veya yeni şarj cihazı yatırımı",
                metin:
                    "Konnektör veya voltaj uyumsuzluğu tespit edildiğinde, çözüm genellikle bir adaptör veya tamamen yeni bir şarj cihazı satın almaktır; bu, ikinci el aracın başlangıçtaki fiyat avantajını önemli ölçüde azaltan bir ek maliyettir. Bu maliyet satın alma öncesi öngörülmezse bütçe planlaması eksik kalır.",
            },
            {
                baslik: "Saha içi mobil çalışma ve şarj erişimi",
                metin:
                    "Enerji bakım işleri genellikle sahanın farklı noktalarında (direk dibi, trafo alanı, kablo güzergahı) yürütülür ve forkliftin bu noktalara ulaşırken şarj seviyesinin yeterli olması gerekir. Şarj altyapısı uyumsuzsa, araç sık sık merkezi bir noktaya dönmek zorunda kalabilir; bu da iş verimliliğini düşürür.",
            },
            {
                baslik: "Kiralamada saha altyapısına göre uygun model teslimi",
                metin:
                    "Kiralık elektrikli forkliftte, saha bilgisi (mevcut şarj altyapısı, voltaj kapasitesi) paylaşıldığında filo sahibi bu bilgiye uygun konnektör ve voltaj özelliğine sahip bir model temin eder. Bu, teslimat sonrası şarj uyumsuzluğu riskini baştan ortadan kaldırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İkinci El Forklift Riski ve Kiralama Avantajı — Şarj Altyapısı Ekseni",
                paragraflar: [
                    "Enerji ve aydınlatma bakım sahalarında elektrikli forkliftin şarj altyapısı uyumunun taşıdığı riskler aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "İkinci El Forklift Riski", "Kiralama Avantajı"],
                    satirlar: [
                        ["Konnektör/voltaj uyumu", "Satın alma öncesi belirtilmez", "Saha bilgisine göre uygun model seçilir"],
                        ["Şarj altyapı kapasitesi", "Sahaya göre yetersiz kalabilir", "Uyumlu güç gereksinimiyle teslim"],
                        ["Ek yatırım", "Adaptör/yeni cihaz maliyeti öngörülemez", "Ek yatırım gerekmez"],
                        ["Saha içi mobilite", "Sık şarj dönüşü verimliliği düşürür", "Uygun kapasiteyle kesintisiz kullanım"],
                    ],
                },
            },
            {
                baslik: "Şarj uyumunu satın almadan önce doğrulama yöntemi",
                paragraflar: [
                    "İkinci el bir elektrikli forklift değerlendirilirken, aracın şarj konnektör tipi ve voltaj gereksinimi doğrudan satıcıdan yazılı olarak istenmeli ve bu bilgi, sahadaki mevcut şarj altyapısıyla önceden karşılaştırılmalıdır. Bu karşılaştırma yapılmadan satın alma kararı verilmesi, teslimat sonrası kullanılamayan bir araçla sonuçlanabilir.",
                    "Bazı durumlarda konnektör farkı basit bir adaptörle çözülebilir, ama voltaj uyumsuzluğu genellikle daha kapsamlı bir altyapı değişikliği gerektirir; bu ayrımın satın alma öncesi netleştirilmesi önemlidir.",
                ],
            },
            {
                baslik: "Enerji sahalarında elektrikli ve dizel model seçimi",
                paragraflar: [
                    "Kapalı veya yarı kapalı enerji tesislerinde egzoz kısıtı nedeniyle elektrikli model tercih edilirken, açık saha direk/hat işlerinde dizel model daha pratik olabilir. Saha tipi netleştirildiğinde, hem satın alma hem kiralama kararında doğru yakıt sınıfı seçilebilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el elektrikli forkliftin şarj uyumunu satın almadan önce nasıl kontrol ederim?",
                cevap:
                    "Aracın konnektör tipi ve voltaj gereksinimi satıcıdan yazılı olarak istenmeli ve bu bilgi sahadaki mevcut şarj altyapısıyla karşılaştırılmalıdır. Bu karşılaştırma yapılmazsa teslimat sonrası uyumsuzluk riskiyle karşılaşılabilir.",
            },
            {
                soru: "Konnektör uyumsuzluğu basit bir adaptörle çözülür mü?",
                cevap:
                    "Bazı durumlarda evet, ama voltaj uyumsuzluğu genellikle daha kapsamlı bir çözüm (yeni şarj cihazı veya altyapı değişikliği) gerektirir. Bu ayrımın önceden netleştirilmesi gerekir.",
            },
            {
                soru: "Sahamdaki elektrik altyapısı forklift şarjı için yeterli mi bilmiyorum, ne yapmalıyım?",
                cevap:
                    "Mevcut altyapının kapasitesi bir elektrik teknisyeni tarafından değerlendirilmeli; kiralama tercih edilirse bu bilgi filo sahibiyle paylaşılarak uyumlu bir model önerisi alınabilir.",
            },
            {
                soru: "Kiralık elektrikli forklift her zaman doğru şarj özelliğiyle mi geliyor?",
                cevap:
                    "Saha altyapı bilgisi önceden paylaşıldığında filo sahibi bu bilgiye uygun konnektör ve voltaj özelliğine sahip bir model temin eder; bu bilgi paylaşılmazsa uyumsuzluk riski kiralamada da ortaya çıkabilir.",
            },
            {
                soru: "Enerji sahalarında dizel yerine neden elektrikli forklift tercih ediliyor?",
                cevap:
                    "Kapalı veya yarı kapalı tesislerde egzoz emisyonunun sınırlı tutulması gerektiğinde elektrikli model tercih edilir. Açık saha işlerinde ise dizel model şarj bağımlılığı olmadan daha pratik olabilir.",
            },
            {
                soru: "Şarj altyapı uyumsuzluğu satın alma sonrası ne kadar maliyetli olabilir?",
                cevap:
                    "Adaptör basit bir çözümse düşük maliyetli olabilir, ama yeni bir şarj cihazı veya altyapı güçlendirmesi gerekiyorsa maliyet aracın kendi fiyatının önemli bir bölümüne yaklaşabilir. Bu risk satın alma öncesi netleştirilmelidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Elektrikli forklift şarj konnektörü/voltaj çeşitliliği sektör geneli bilinen teknik bilgidir. Marka, tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Operatörlü Platform İşlerinde Dizel Forkliftte Emisyon/Egzoz Kısıtı Uyumsuzluğu Riski",
        giris:
            "Operatörlü platform kiralama işlerinde forklift, sahaya operatör eşliğinde teslim edilen bir destek aracı olarak devreye girer ve bu tür işler zaman zaman kapalı veya kısmi kapalı alanlarda (tesis içi, tünel, alt kat) yürütülebilir. Kapalı alan çalışmalarında dizel forkliftlerin egzoz emisyonu, hem işçi sağlığı hem de bazı tesislerin kendi iç yönetmelikleri açısından sınırlandırılabilir; bazı tesisler yalnızca belirli bir emisyon standardını karşılayan araçlara giriş izni verir. İkinci el bir dizel forklift satın alınırken aracın hangi emisyon standardına uygun üretildiği (motor yaşına bağlı olarak değişen kademeler) genellikle sorgulanmaz; bu bilgi eksikliği, aracın belirli bir tesise giriş izni alamaması gibi beklenmedik bir kısıtla sonuçlanabilir. Bu sayfada, operatörlü platform işlerinde dizel forkliftin emisyon/egzoz kısıtı uyumunun neden önemli olduğunu ve kiralamanın bu riski nasıl azalttığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Motor yaşına bağlı emisyon kademesi farkı",
                metin:
                    "Dizel motorlar üretildikleri döneme göre farklı emisyon kademelerine (daha eski motorlar daha yüksek emisyon, daha yeni motorlar daha düşük emisyon) sahiptir. İkinci el bir forkliftin motor yaşı genellikle aracın genel yaşıyla birlikte değerlendirilir ama emisyon kademesi ayrıca sorgulanmaz; bu bilgi eksikliği bazı tesislerin giriş kriterlerini karşılamama riskini doğurur.",
            },
            {
                baslik: "Kapalı alan çalışmasında egzoz birikimi riski",
                metin:
                    "Kapalı veya havalandırması sınırlı alanlarda dizel egzoz gazının birikmesi, işçi sağlığı açısından ciddi bir risktir; bu nedenle bazı tesisler kapalı alan işlerinde yalnızca elektrikli veya düşük emisyonlu araçlara izin verir. İkinci el bir dizel forklift bu kritere uymuyorsa, sahaya girişinde reddedilme veya ek havalandırma önlemi zorunluluğuyla karşılaşılabilir.",
            },
            {
                baslik: "Tesis iç yönetmeliklerinin çeşitliliği",
                metin:
                    "Farklı tesisler kendi iş güvenliği politikalarına göre farklı emisyon kriterleri uygulayabilir; bir tesiste kabul edilen bir araç, başka bir tesiste kabul edilmeyebilir. İkinci el bir forklift satın almadan önce hangi tesislerde çalışılacağı netleştirilmemişse, aracın her sahada kullanılabilir olacağı varsayımı yanlış çıkabilir.",
            },
            {
                baslik: "Emisyon kısıtı nedeniyle iş kaybı riski",
                metin:
                    "Operatörlü platform işinde forklift desteği planlanan bir sahaya emisyon kriterini karşılamayan bir araçla gidilmesi, son anda işin iptal edilmesine veya alternatif bir araç aranmasına yol açabilir. Bu durum hem zaman kaybı hem de müşteri ilişkisi açısından olumsuz bir sonuç doğurabilir.",
            },
            {
                baslik: "Kiralamada tesise uygun emisyon sınıfı garantisi",
                metin:
                    "Kiralık forkliftte, çalışılacak tesisin emisyon kriteri önceden belirtildiğinde filo sahibi bu kritere uygun bir araç (gerekirse elektrikli veya düşük emisyonlu dizel) temin eder. Bu, operatörlü platform işlerinde tesise giriş reddi riskini baştan ortadan kaldırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İkinci El Forklift Riski ve Kiralama Avantajı — Emisyon/Egzoz Kısıtı Ekseni",
                paragraflar: [
                    "Operatörlü platform işlerinde dizel forkliftin emisyon/egzoz kısıtı uyumunun taşıdığı riskler aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "İkinci El Forklift Riski", "Kiralama Avantajı"],
                    satirlar: [
                        ["Emisyon kademesi", "Motor yaşına bağlı, satın almada sorgulanmaz", "Tesis kriterine uygun model seçilir"],
                        ["Kapalı alan girişi", "Reddedilme veya kısıt riski", "Uygun sınıf araçla sorunsuz giriş"],
                        ["Tesis yönetmeliği çeşitliliği", "Her sahada geçerlilik garanti edilmez", "Saha bazlı model planlaması yapılır"],
                        ["İş kaybı riski", "Son anda iptal/alternatif arama", "Önceden planlanmış uygun araç"],
                    ],
                },
            },
            {
                baslik: "Emisyon uyumunu satın almadan önce doğrulama yöntemi",
                paragraflar: [
                    "İkinci el bir dizel forklift değerlendirilirken, motorun üretim yılı ve varsa emisyon etiketi/belgesi kontrol edilmelidir; bu bilgi motor bloğu üzerinde veya araç dokümantasyonunda yer alabilir. Çalışılması planlanan tesislerin emisyon kriteri önceden öğrenilip bu bilgiyle karşılaştırılmalıdır.",
                    "Bu karşılaştırma yapılmadan satın alınan bir araç, belirli tesislere giriş yapamadığında iş kapasitesi daralmış bir yatırıma dönüşebilir; bu risk özellikle birden fazla farklı tesiste çalışan operatörlü hizmet sağlayıcıları için önemlidir.",
                ],
            },
            {
                baslik: "Operatörlü hizmet sağlayıcıları için çoklu tesis planlaması",
                paragraflar: [
                    "Birden fazla tesiste operatörlü platform desteği veren bir işletme için, her tesisin kendi emisyon ve giriş kriteri olabileceği baştan kabul edilmeli ve buna göre araç filosu (veya kiralama planı) çeşitlendirilmelidir; tek bir araç tipiyle her tesise uyum sağlamak her zaman mümkün olmayabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el dizel forkliftin emisyon kademesini nasıl öğrenebilirim?",
                cevap:
                    "Motorun üretim yılı ve varsa emisyon etiketi/belgesi kontrol edilmelidir; bu bilgi motor bloğu üzerinde veya araç dokümantasyonunda bulunabilir. Satıcıdan bu belgenin paylaşılması istenmelidir.",
            },
            {
                soru: "Kapalı alanda dizel forklift kullanmak her zaman yasak mı?",
                cevap:
                    "Hayır, genel bir yasak değildir ama birçok tesis kendi iş güvenliği politikasına göre kapalı alan çalışmasında düşük emisyonlu veya elektrikli araçları tercih eder. Bu kriter tesise göre değişir ve önceden öğrenilmelidir.",
            },
            {
                soru: "Bir tesiste kabul edilen forklift başka bir tesiste neden reddedilebilir?",
                cevap:
                    "Her tesis kendi iç yönetmeliğine göre farklı emisyon ve güvenlik kriteri uygulayabilir; bu kriterler standart değildir. Birden fazla tesiste çalışan işletmelerin bu çeşitliliği baştan hesaba katması gerekir.",
            },
            {
                soru: "Kiralık forklift her tesisin emisyon kriterine uygun mu geliyor?",
                cevap:
                    "Çalışılacak tesisin kriteri önceden belirtildiğinde filo sahibi buna uygun bir araç temin eder; bu bilgi paylaşılmazsa standart bir model gönderilebilir ve uyumsuzluk riski doğabilir.",
            },
            {
                soru: "Emisyon kısıtı nedeniyle işin son anda iptal olması ne sıklıkla yaşanır?",
                cevap:
                    "Bu, aracın emisyon durumu önceden kontrol edilmediğinde karşılaşılabilecek somut bir risktir; sıklığı tesisin kriterlerinin katılığına bağlıdır, ama önceden planlama yapılarak tamamen önlenebilir bir risktir.",
            },
            {
                soru: "Elektrikli forklift emisyon kısıtı olan tesislerde her zaman güvenli bir seçim mi?",
                cevap:
                    "Elektrikli modeller egzoz emisyonu üretmediği için kapalı alan kısıtlarını genellikle sorunsuz karşılar; ancak sahanın şarj altyapısı uyumu ayrıca değerlendirilmelidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Dizel motor emisyon kademeleri ve kapalı alan egzoz riski genel bilinen iş güvenliği bilgisidir. Marka, tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Çok Noktalı Bakım Rotalarında İkinci El Forkliftte Satıcı Garantisi Eksikliği Riski",
        giris:
            "Çok noktalı rota bakım işlerinde forklift, farklı sahalar arasında dolaşan bir bakım ekibine malzeme ve ekipman desteği sağlar; bu iş modeli, aracın farklı zeminlerde, farklı yüklerle ve düzensiz aralıklarla çalışmasını gerektirir. İkinci el bir forklift satın alınırken satıcının sunduğu garanti kapsamı, çoğu zaman 'olduğu gibi satılır' ifadesiyle sınırlıdır; bu, satın alma sonrası ortaya çıkan hiçbir arızanın satıcı tarafından karşılanmayacağı anlamına gelir. Çok noktalı bir rotada çalışan bir araç için bu garanti eksikliği özellikle risklidir, çünkü arıza hangi sahada ve ne zaman çıkacağı önceden bilinmez ve her sahada farklı bir onarım kaynağı bulmak gerekebilir. Bu sayfada, çok noktalı rota bakım işlerinde ikinci el forkliftin satıcı garantisi eksikliğinin neden ciddi bir risk taşıdığını ve kiralamanın bu belirsizliği nasıl ortadan kaldırdığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "'Olduğu gibi satılır' ifadesinin anlamı",
                metin:
                    "İkinci el araç satışlarında sıkça karşılaşılan bu ifade, satıcının aracın mevcut durumundan sonraki hiçbir arızadan sorumlu olmadığı anlamına gelir. Alıcı, satın alma anından itibaren tüm mekanik riski üstlenir; bu risk, aracın o ana kadar bilinmeyen gizli sorunlarını da kapsar.",
            },
            {
                baslik: "Çok noktalı rotada arızanın onarım lojistiği",
                metin:
                    "Bir bakım ekibiyle birlikte farklı sahalar arasında dolaşan forklift arızalandığında, en yakın servis noktasının hangi sahaya yakın olduğu, o noktaya aracın nasıl taşınacağı gibi lojistik sorular ortaya çıkar. Garantisiz bir araçta bu onarım süreci tamamen alıcının organizasyonuna ve bütçesine kalır.",
            },
            {
                baslik: "Garantili ikinci el satışların nadirliği",
                metin:
                    "Bazı ikinci el satıcılar sınırlı süreli bir garanti sunabilir, ama bu genellikle istisnadır ve garanti kapsamı (hangi parçaları kapsadığı, süresi) net olmayabilir. Garanti sunan bir satıcı bulmak, forklift piyasasında araç bulmaktan daha zor bir arayış hâline gelebilir.",
            },
            {
                baslik: "Belirsiz garantinin bütçe planlamasına etkisi",
                metin:
                    "Garanti kapsamı olmayan bir araçla çalışan bir işletme, olası bir arıza için ayrı bir onarım bütçesi ayırmak zorunda kalır; bu bütçe ne zaman ve ne kadar kullanılacağı bilinmediği için finansal planlamayı zorlaştırır. Kiralamada ise bu belirsizlik, sabit kira bedeliyle ortadan kalkar.",
            },
            {
                baslik: "Kiralamada sözleşmeye bağlı garanti kapsamı",
                metin:
                    "Kiralık forkliftte mekanik arızaların onarım sorumluluğu, kiralama süresi boyunca net biçimde filo sahibine aittir ve bu sözleşme kapsamında yazılı olarak tanımlanır. Çok noktalı bir rotada hangi sahada arıza çıkarsa çıksın, onarım sorumluluğu ve genellikle ikame araç süreci filo sahibi tarafından yönetilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İkinci El Forklift Riski ve Kiralama Avantajı — Satıcı Garantisi Ekseni",
                paragraflar: [
                    "Çok noktalı rota bakım işlerinde ikinci el forkliftin satıcı garantisi eksikliğinin taşıdığı riskler aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "İkinci El Forklift Riski", "Kiralama Avantajı"],
                    satirlar: [
                        ["Garanti kapsamı", "Genellikle yok, 'olduğu gibi satılır'", "Sözleşmeye bağlı net garanti"],
                        ["Onarım lojistiği", "Alıcının organizasyonuna kalır", "Filo sahibi süreci yönetir"],
                        ["Onarım bütçesi", "Öngörülemez, ayrı bütçe gerekir", "Sabit kira bedeline dahil"],
                        ["Çok sahalı arıza", "Her sahada farklı çözüm aranır", "İkame araç ile kesinti azaltılır"],
                    ],
                },
            },
            {
                baslik: "Garantili ikinci el satıcı bulma ve sözleşme değerlendirme yöntemi",
                paragraflar: [
                    "Eğer ikinci el forklift alımı tercih edilecekse, garanti sunan satıcılar öncelikli olarak araştırılmalı ve garanti kapsamı (hangi parçalar, ne kadar süre, hangi koşullar altında geçerli) yazılı olarak talep edilmelidir. Sözlü garanti vaatleri, satış sonrası ortaya çıkan bir anlaşmazlıkta genellikle uygulanabilir değildir.",
                    "Garanti kapsamı dar veya belirsizse, bu durum satın alma fiyatı pazarlığında dikkate alınmalı; garantisiz bir araç için ödenen fiyat, olası onarım riskini karşılayacak kadar düşük olmalıdır.",
                ],
            },
            {
                baslik: "Çok noktalı bakım rotalarında araç güvenilirliğinin önemi",
                paragraflar: [
                    "Bir bakım ekibinin günlük programı genellikle birden fazla sahayı kapsar ve forkliftin herhangi bir noktada arızalanması, o günkü tüm rotanın aksamasına yol açabilir. Bu nedenle çok noktalı rota işlerinde araç güvenilirliği, tek bir sahada çalışan bir araca göre çok daha kritik bir faktördür.",
                ],
            },
        ],
        sss: [
            {
                soru: "'Olduğu gibi satılır' ifadesi ne anlama geliyor?",
                cevap:
                    "Satıcının aracın satış anındaki durumundan sonraki hiçbir arızadan sorumlu olmadığı anlamına gelir. Alıcı, satın alma anından itibaren tüm mekanik riski üstlenmiş olur.",
            },
            {
                soru: "Garantili ikinci el forklift bulmak zor mu?",
                cevap:
                    "Evet, bu genellikle istisnadır; çoğu ikinci el satış garantisiz yapılır. Garanti sunan bir satıcı bulunsa bile kapsamın net olarak yazılı tanımlanması gerekir.",
            },
            {
                soru: "Çok noktalı rotada forklift arızalanırsa onarımı kim organize eder?",
                cevap:
                    "İkinci el ve garantisiz bir araçta bu tamamen alıcının sorumluluğundadır; en yakın servis noktası, taşıma ve maliyet organizasyonu alıcı tarafından yürütülür. Kiralamada bu süreç filo sahibi tarafından yönetilir.",
            },
            {
                soru: "Kiralık forkliftte garanti kapsamı nasıl tanımlanıyor?",
                cevap:
                    "Kiralama sözleşmesinde mekanik arızaların onarım sorumluluğunun filo sahibine ait olduğu net biçimde belirtilir; bu, ikinci el alımdaki belirsiz garanti durumuna göre çok daha öngörülebilir bir yapıdır.",
            },
            {
                soru: "Garantisiz bir ikinci el forklift için onarım bütçesi nasıl planlanır?",
                cevap:
                    "Kesin bir planlama yapmak zordur çünkü arızanın ne zaman ve ne kadar maliyetli olacağı bilinmez; işletmeler genellikle geçmiş deneyimlere dayanarak tahmini bir yedek bütçe ayırır, ama bu tahmin gerçek maliyeti karşılamayabilir.",
            },
            {
                soru: "Çok sahalı bir bakım ekibi için kiralama neden daha güvenilir?",
                cevap:
                    "Kiralamada arıza durumunda ikame araç süreci genellikle sözleşme kapsamındadır ve bu, hangi sahada arıza çıkarsa çıksın rotanın aksamasını en aza indirir; ikinci el ve garantisiz bir araçta bu güvence yoktur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İkinci el araç satışlarında garanti uygulamaları genel bilinen ticari bilgidir. Marka, tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Zor Zemin ve Arazi İşlerinde İkinci El Forkliftte Toplam Sahip Olma Maliyeti Riski",
        giris:
            "Zor zemin ve arazi koşullarında çalışan forklift, düz beton zemine göre çok daha fazla mekanik zorlanmaya maruz kalır; engebeli yüzey, toz, çamur ve düzensiz eğim, aracın şase, süspansiyon ve lastik sistemini normalden daha hızlı yorar. İkinci el bir forklift satın alınırken alıcı genellikle yalnızca satın alma fiyatına bakar, ama zor zemin koşullarında çalışacak bir aracın gerçek maliyeti, satın alma fiyatının çok ötesinde bir toplama ulaşır: hızlanmış bakım ihtiyacı, sık lastik değişimi, artan yakıt tüketimi ve beklenmedik onarımlar bu toplamı oluşturur. Bu 'toplam sahip olma maliyeti' kavramı, ikinci el alım kararında neredeyse hiç hesaplanmaz çünkü hesaplamak için aracın gelecekteki bakım ihtiyacını tahmin etmek gerekir ve bu tahmin belirsiz bir araçta güvenilir yapılamaz. Bu sayfada, zor zemin ve arazi işlerinde toplam sahip olma maliyetinin neden kiralama lehine sonuç verdiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Satın alma fiyatı toplam maliyetin yalnızca bir parçası",
                metin:
                    "İkinci el bir forkliftin etiket fiyatı, alıcının gördüğü tek somut rakamdır; ama bu rakam, aracın gelecekteki bakım, yakıt, lastik ve olası onarım maliyetlerini yansıtmaz. Zor zemin koşullarında bu ek maliyetler, düz zemine göre çok daha hızlı birikir ve birkaç yıl içinde satın alma fiyatına yakın bir toplama ulaşabilir.",
            },
            {
                baslik: "Engebeli zeminde hızlanmış lastik ve şase yorulması",
                metin:
                    "Düzensiz ve sert arazi yüzeyi, lastik aşınmasını ve şase üzerindeki yapısal yorulmayı düz betona göre belirgin biçimde hızlandırır. İkinci el bir araçta bu yorulmanın ne kadar biriktiği bilinmediği için, zor zeminde kullanıma devam edildiğinde beklenenden çok daha erken bir lastik veya şase onarımı ihtiyacı ortaya çıkabilir.",
            },
            {
                baslik: "Toz ve çamurun hava/yağ filtrelerine etkisi",
                metin:
                    "Arazi koşullarında yoğun toz veya çamur, hava ve yağ filtrelerinin normalden daha sık değişmesini gerektirir; bu değişim sıklığı hesaba katılmadan yapılan bir bütçe planlaması, gerçek işletme maliyetini eksik tahmin eder. İkinci el bir araçta bu filtre değişim sıklığının önceki kullanımda nasıl uygulandığı bilinmez.",
            },
            {
                baslik: "Beklenmedik onarımların toplam maliyete etkisi",
                metin:
                    "Zor zemin koşullarında çalışan bir aracın hidrolik, mast veya aks sisteminde beklenmedik bir onarım ihtiyacı ortaya çıkma olasılığı, düz zemine göre daha yüksektir. İkinci el bir araçta bu onarımların hangi sıklıkla ve ne maliyetle ortaya çıkacağı öngörülemediği için, toplam sahip olma maliyeti hesaplanması güç bir belirsizlik taşır.",
            },
            {
                baslik: "Kiralamada sabit ve öngörülebilir toplam maliyet",
                metin:
                    "Kiralamada, zor zemin kullanımına bağlı hızlanmış bakım ve lastik değişimi gibi maliyetler kira bedeline dahil edilir ve kiracı yalnızca sabit, önceden bilinen bir bedel öder. Bu, toplam sahip olma maliyeti açısından ikinci el sahipliğine göre çok daha öngörülebilir bir yapı sunar ve bütçe planlamasını kolaylaştırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İkinci El Forklift Riski ve Kiralama Avantajı — Toplam Sahip Olma Maliyeti Ekseni",
                paragraflar: [
                    "Zor zemin ve arazi işlerinde forkliftin toplam sahip olma maliyetini oluşturan kalemler ve kiralamadaki karşılığı aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Maliyet kalemi", "İkinci El Forklift Riski", "Kiralamadaki Durum"],
                    satirlar: [
                        ["Satın alma/kira bedeli", "Tek kalem, görünür", "Sabit ve önceden bilinen bedel"],
                        ["Lastik/şase yorulması", "Hızlanmış aşınma öngörülemez", "Bakım kira bedeline dahil"],
                        ["Filtre değişim sıklığı", "Geçmiş kullanım bilinmez", "Düzenli bakım programına dahil"],
                        ["Beklenmedik onarım", "Sıklık ve maliyet belirsiz", "Onarım riski filo sahibine ait"],
                    ],
                },
            },
            {
                baslik: "Toplam sahip olma maliyetini hesaplama yaklaşımı",
                paragraflar: [
                    "Zor zemin koşullarında bir forkliftin gerçek maliyetini değerlendirmek için, satın alma fiyatına ek olarak yıllık tahmini bakım maliyeti, lastik değişim sıklığı ve yakıt tüketim artışı ayrı ayrı tahmin edilmeli ve bu tahminler toplam üzerine eklenmelidir. İkinci el bir araçta bu tahminlerin güvenilir yapılması, aracın geçmiş kullanım verisine erişim olmadığı için zordur.",
                    "Bu hesaplama yapıldığında, başlangıçta düşük görünen bir satın alma fiyatının, zor zemin koşullarında birkaç yıl içinde kiralama toplam maliyetine yaklaşabileceği veya onu aşabileceği görülebilir; bu nedenle karar yalnızca ilk fiyat üzerinden değil, toplam maliyet üzerinden verilmelidir.",
                ],
            },
            {
                baslik: "Arazi koşullarına uygun forklift modeli seçimi",
                paragraflar: [
                    "Zor zemin ve arazi işleri için standart depo tipi forklift yerine, geniş lastikli veya arazi tipi şasiye sahip modeller daha uygun olabilir; bu tür modeller standart forkliftlere göre daha az yorulma yaşar. İkinci el piyasada bu tip özel modelleri bulmak standart modellere göre daha zordur ve fiyatı da farklılık gösterir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Toplam sahip olma maliyeti nedir, satın alma fiyatından farkı ne?",
                cevap:
                    "Toplam sahip olma maliyeti, satın alma fiyatına ek olarak aracın kullanım ömrü boyunca ortaya çıkacak bakım, lastik, yakıt ve onarım maliyetlerinin tamamını kapsar. Zor zemin koşullarında bu ek maliyetler düz zemine göre çok daha hızlı birikir.",
            },
            {
                soru: "Zor zeminde çalışan bir forkliftin lastik ömrü ne kadar kısalır?",
                cevap:
                    "Kesin bir oran vermek zordur çünkü zemin tipi, yük ve kullanım yoğunluğuna göre değişir; ama engebeli ve sert yüzeylerde lastik aşınmasının düz betona göre belirgin biçimde hızlandığı bilinen bir mekanik gerçektir.",
            },
            {
                soru: "İkinci el bir aracın toplam maliyetini satın almadan önce nasıl tahmin edebilirim?",
                cevap:
                    "Satın alma fiyatına ek olarak yıllık tahmini bakım, lastik değişimi ve yakıt maliyeti ayrı ayrı hesaplanmalıdır; ancak aracın geçmiş kullanım verisine erişim olmadan bu tahmin güvenilir biçimde yapılamaz, bu da hesaplamanın kendisini belirsiz kılar.",
            },
            {
                soru: "Kiralamada toplam maliyet neden daha öngörülebilir?",
                cevap:
                    "Zor zemin kullanımına bağlı bakım ve lastik maliyetleri kira bedeline dahil edildiği için kiracı yalnızca sabit bir bedel öder; beklenmedik onarım riski filo sahibine aittir ve bütçe planlaması bu sayede kolaylaşır.",
            },
            {
                soru: "Zor zemin işleri için özel forklift modeli gerekir mi?",
                cevap:
                    "Standart depo tipi forklift yerine geniş lastikli veya arazi tipi şasiye sahip modeller genellikle daha az yorulma yaşar ve daha uygundur; ancak bu tip modeller ikinci el piyasada bulmak daha zordur.",
            },
            {
                soru: "Düşük fiyatlı bir ikinci el forklift zor zeminde gerçekten ekonomik mi?",
                cevap:
                    "Yalnızca satın alma fiyatına bakıldığında ekonomik görünebilir, ama toplam sahip olma maliyeti hesaplandığında hızlanmış bakım ve onarım kalemleri bu avantajı kısa sürede ortadan kaldırabilir; bu nedenle karar toplam maliyet üzerinden değerlendirilmelidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Toplam sahip olma maliyeti kavramı ve zor zemin/arazi koşullarının ekipman aşınmasına etkisi genel bilinen mekanik/finansal bilgidir. Marka, tesis adı ve rakam uydurulmamıştır.",
    },
};
