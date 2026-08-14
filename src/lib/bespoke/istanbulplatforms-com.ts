// ═══════════════════════════════════════════════════════════════════════════
// istanbulplatforms.com — ELLE YAZILMIŞ İÇERİK
//
// Profil: İstanbul ve Marmara'da kurumsal müşterilere UZUN DÖNEM KONTRATLI
// endüstriyel platform tedariki. Açı: TEDARİK KONTRATI DÜNYASI — yıllık ve
// çok yıllık çerçeve sözleşmeler, tedarikçi ön yeterlilik ve onay süreçleri,
// satın alma departmanı dili, hizmet seviyesi taahhüdü (müdahale süresi,
// ikame garantisi, kullanılabilirlik oranı), filo tahsisi ve yedeklilik,
// kontrat yönetimi ve dönemsel raporlama, çok lokasyonlu müşteri yönetimi.
//
// ⚠️ KARDEŞ DOMAIN UYARISI — İstanbul'da üç dosya daha var:
//   platformistanbul.net       → hub modeli açısı
//   istanbul-platform.com      → fiyat şeffaflığı açısı
//   istanbuldaplatform.com     → kurumsal PROJE YÖNETİMİ açısı (en yakın)
// ikitelli ve basaksehir sayfaları onlarda da mevcut. Bu dosya proje/şantiye
// anlatmaz; kontrat, hizmet seviyesi ve tedarikçi ilişkisi anlatır. Cümle,
// tablo ve SSS çakışması YASAK.
//
// Bilgi kuralı: müşteri adı, rakam, oran, süre taahhüdü uydurulmaz. Sözleşme
// yapıları ve hizmet seviyesi kavramları sektör standardı genel bilgidir.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const ISTANBULPLATFORMS_COM: Record<string, BespokeIcerik> = {
    "bolge:ikitelli-osb": {
        h1: "İkitelli OSB'de Çerçeve Sözleşmeli Platform Tedariki",
        giris:
            "İkitelli Organize Sanayi Bölgesi'nde faaliyet gösteren kurumsal ölçekli işletmelerin yüksek erişim ihtiyacı, tek seferlik bir kiralama ilişkisiyle karşılanmaz. Bu tesislerde platform, bakım biriminin haftalık iş emirlerinde, kalite ve İSG denetimlerinin kontrol listelerinde, yıllık bütçenin ayrı bir kaleminde yer alan sürekli bir kaynaktır — ve sürekli kaynaklar satın alma tarafında tekil sipariş olarak değil, çerçeve sözleşme olarak yönetilir. Bizim bu bölgedeki çalışma biçimimiz doğrudan bu ihtiyaca göre kurulmuştur: yıllık veya çok yıllık dönem için fiyat, kapsam, hizmet seviyesi ve raporlama şartlarını yazılı olarak bağlayan bir tedarik ilişkisi. Böyle bir sözleşmenin altında imza olduğunda tesisin bakım şefi her ihtiyaçta yeniden teklif toplamaz, satın alma her siparişte onay zinciri işletmez ve fiyat, dönem boyunca öngörülebilir kalır. Bu sayfa, İkitelli'deki bir tesisle böyle bir kontratın nasıl kurulduğunu ve nasıl işletildiğini anlatır.",
        maddeler: [
            {
                baslik: "Tedarikçi ön yeterlilik dosyasının hazır tutulması",
                metin:
                    "Kurumsal bir işletmeyle sözleşme aşamasına gelmeden önce tedarikçi onay sürecinden geçilir ve bu süreç, fiyat görüşmesinden daha uzun sürebilir. İstenen set bellidir: ticari sicil ve vergi kayıtları, mali yeterlilik göstergeleri, sorumluluk sigortası poliçe limitleri, kalite ve İSG yönetim sistemi belgeleri, personel yeterlilik kayıtları ve ekipmanın periyodik kontrol raporları. Bu dosyayı sürekli güncel tutar, süresi dolan belgeleri talep gelmeden yeniler ve müşterinin tedarikçi portalına kendi sorumluluğumuz olarak yükleriz. Onay sürecinin gecikmesi, çoğu zaman eksik evraktan kaynaklanır ve bu gecikmenin bedelini müşteri öder.",
            },
            {
                baslik: "Kapsam tanımı: neyin dahil olduğu, neyin olmadığı",
                metin:
                    "Bir tedarik sözleşmesinin en çok anlaşmazlık üreten yeri fiyat değil kapsamdır. Bu yüzden sözleşme metninde şu başlıklar tek tek yazılır: hangi makine sınıfları kapsamdadır, nakliye ve kurulum dahil midir, periyodik bakım ve kontrol kime aittir, operatörlü kullanım ayrı kalem midir, mesai dışı ve resmî tatil çalışması nasıl fiyatlanır, hasar ve kayıp sorumluluğu hangi eşikten sonra kime geçer. Bu maddeleri baştan netleştirmek zahmetli görünür ama dönem boyunca çıkacak her tartışmayı önler — kapsamı belirsiz sözleşme, ilk faturada gerilim üretir.",
            },
            {
                baslik: "Dönem fiyatı ve revizyon mekanizması",
                metin:
                    "Uzun dönem kontratın müşteriye en somut faydası fiyat öngörülebilirliğidir: dönem boyunca birim fiyatlar sabittir ve bütçe kaleminiz sürprize açık kalmaz. Çok yıllık sözleşmelerde ise fiyatın hangi koşulda ve hangi yönteme göre revize edileceği baştan tanımlanır — keyfi zam değil, önceden yazılmış bir mekanizma. Revizyon dönemi, tetikleyici koşullar ve bildirim süresi sözleşmede yer alır. Bu şeffaflık iki tarafı da korur: müşteri beklenmedik artışla karşılaşmaz, tedarikçi de uzun dönemde maliyet baskısı altında hizmet kalitesini düşürmek zorunda kalmaz.",
            },
            {
                baslik: "Tahsisli filo ve öncelik hakkı",
                metin:
                    "Sözleşmeli müşterinin talebi, serbest piyasadan gelen taleple aynı sırada beklemez. Kontratın işleyiş tarafındaki karşılığı budur: dönem başında müşterinin kullanım profiline göre makine sınıfları belirlenir, yoğun dönemleri için rezervasyon açılır ve bu makineler o dönemde başka müşteriye taahhüt edilmez. Sürekli ihtiyacı olan tesislerde makinenin doğrudan sahada konumlandırılması da bir seçenektir — kullanımı kayıt altında tutulan, bakımı bize ait, tesisin kendi ekipmanı gibi elinin altında duran bir makine. Hangi modelin ekonomik olduğu, yıllık kullanım saatiyle belirlenir.",
            },
            {
                baslik: "Tek muhatap ve talep kanalının tanımlanması",
                metin:
                    "Kurumsal kontratlarda hizmetin kalitesini belirleyen görünmez unsur, iletişimin nasıl kurulduğudur. Sözleşme yürürlüğe girdiğinde her iki taraf için yetkili kişiler tanımlanır: müşteri tarafında talebi açmaya yetkili isimler, bizim tarafımızda kontrattan sorumlu kişi ve yedeği. Talep kanalı da yazılıdır — hangi adrese, hangi bilgilerle, hangi formatta. Bu düzenin amacı bürokrasi değil hızdır: yetkili listesi belli olduğunda talep, onay beklemeden işleme girer; muhatap belli olduğunda sorun, doğru kişiye ilk seferde ulaşır ve telefon zinciri dolaşmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kontrat modelleri ve hangi kullanım profiline uygun oldukları",
                paragraflar: [
                    "Kurumsal müşterilerle kurduğumuz başlıca sözleşme modelleri, uygun oldukları kullanım profili ve ticari mantıkları aşağıdaki tabloda karşılaştırılmıştır. Doğru modeli seçmek, birim fiyat pazarlığından daha büyük tasarruf sağlar.",
                ],
                tablo: {
                    basliklar: ["Kontrat modeli", "Uygun kullanım profili", "Ticari mantık", "Dikkat edilecek madde"],
                    satirlar: [
                        ["Yıllık çerçeve", "Düzenli ama değişken talep", "Sabit birim fiyat, çağrı bazlı kullanım", "Asgari kullanım taahhüdü var mı"],
                        ["Çok yıllık çerçeve", "Öngörülebilir sürekli talep", "Dönem fiyatı + revizyon mekanizması", "Revizyon yöntemi net yazılmalı"],
                        ["Tahsisli makine", "Yüksek yıllık kullanım saati", "Sahada duran makine, bakım tedarikçide", "Kullanım kaydı ve devir sorumluluğu"],
                        ["Karma filo", "Farklı sınıf ihtiyacı bir arada", "Çekirdek tahsis + çağrı bazlı takviye", "Takviye için müdahale süresi"],
                        ["Çok lokasyonlu çerçeve", "Birden fazla tesis", "Tek sözleşme, lokasyon bazlı raporlama", "Maliyet dağıtım yöntemi"],
                    ],
                },
            },
            {
                baslik: "Satın alma ile bakım biriminin farklı beklentileri",
                paragraflar: [
                    "Kurumsal bir tedarik ilişkisinde masanın karşısında tek bir muhatap yoktur ve iki muhatabın öncelikleri her zaman aynı değildir. Satın alma birimi fiyatın öngörülebilirliğine, sözleşme risklerinin dengeli dağıtılmasına, tedarikçinin mali sürekliliğine ve evrak düzenine bakar. Bakım birimi ise makinenin istendiği anda hazır olmasına, arızada ne kadar hızlı dönüldüğüne ve sahadaki personelin işini bilmesine bakar. Sözleşme yalnızca birinin diliyle yazıldığında diğeri sonradan sorun yaşar: ucuz ama yavaş bir tedarikçi bakımı, hızlı ama belirsiz maliyetli bir tedarikçi satın almayı zorlar.",
                    "Bizim tercihimiz, kontratı iki tarafın da beklentisini yazılı hâle getirerek kurmaktır — ticari şartlar satın almanın diliyle, hizmet seviyesi maddeleri bakımın diliyle yazılır ve ikisi aynı belgede yaşar. Sözleşme görüşmesine her iki birimin de katılmasını isteriz; sonradan yapılan düzeltmeler, baştan yapılan konuşmadan her zaman daha maliyetlidir.",
                ],
            },
            {
                baslik: "Kontratın ilk otuz günü: devreye alma dönemi",
                paragraflar: [
                    "İmzadan sonraki ilk dönem, sözleşmenin kâğıttan sahaya indiği aşamadır ve bunu kendi başına bir süreç olarak yönetiriz. Bu dönemde tesisin erişim ihtiyaç envanteri çıkarılır — hangi hacimde hangi yükseklik, hangi zemin, hangi giriş kısıtı; makine sınıfları buna göre kesinleştirilir. Tesisin giriş prosedürü, İSG oryantasyonu ve çalışma izni sistemi öğrenilir; personelimiz bu oryantasyondan geçirilir. Talep kanalı test edilir, raporlama formatı müşterinin istediği hâle getirilir ve ilk dönem raporunun neye benzeyeceği örnek üzerinden gösterilir.",
                    "Bu hazırlık yapılmadan başlayan sözleşmelerin ortak kaderi aynıdır: ilk aylarda çıkan her aksaklık, sözleşme metnine değil hazırlık eksiğine dayanır ve taraflar arasında gereksiz bir güven kaybı yaratır. Devreye alma dönemine ayrılan birkaç gün, dönemin geri kalanını sorunsuz kılar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yıllık sözleşme yapmakla ihtiyaç oldukça kiralamak arasındaki fark bizim için ne olur?",
                cevap:
                    "Fark üç başlıkta toplanır. Birincisi fiyat öngörülebilirliğidir: sözleşmede birim fiyatlar dönem boyunca sabittir, çağrı bazlı çalışmada ise her talep o günün piyasa koşullarıyla fiyatlanır ve bütçe kaleminiz dalgalanır. İkincisi erişilebilirliktir: sözleşmeli müşterinin rezervasyon önceliği vardır, yoğun dönemde makine bulamama riski belirgin şekilde düşer. Üçüncüsü süreç maliyetidir — her ihtiyaçta teklif toplamak, onay zinciri işletmek ve yeni tedarikçi tanımlamak, satın alma tarafında görünmeyen ama gerçek bir iş yüküdür. Yıllık kullanım hacminiz belirli bir eşiğin üstündeyse sözleşme neredeyse her zaman avantajlıdır; eşiğin altındaysa bunu açıkça söyleriz.",
            },
            {
                soru: "Tedarikçi onay sürecimiz uzun; ne kadar sürede evrakları tamamlayabilirsiniz?",
                cevap:
                    "Standart set bizde hazır durur: ticari kayıtlar, sigorta poliçeleri, yönetim sistemi belgeleri, personel yeterlilik kayıtları ve ekipmanın güncel periyodik kontrol raporları. Bunları talebiniz üzerine kısa sürede iletebiliriz. Süreci uzatan şey genellikle standart evrak değil, kurumunuza özgü taleplerdir — özel sigorta limitleri, kendi formatınızdaki taahhütnameler, portal üzerinden yapılan kayıt adımları veya ek denetim ziyaretleri. Bu tür şartları bize baştan bildirirseniz eksikleri paralel yürütür, süreci tek turda kapatırız. Ayrıca belgelerin geçerlilik sürelerini kendi takvimimize alır, dönem içinde süresi dolanları siz istemeden yenileriz.",
            },
            {
                soru: "Sözleşmede asgari kullanım taahhüdü isteyecek misiniz?",
                cevap:
                    "Zorunlu tutmuyoruz ama iki tarafa da faydası olduğunda öneriyoruz. Asgari kullanım taahhüdü, tedarikçi açısından filo planlamasını mümkün kılar ve bunun karşılığında daha iyi bir birim fiyat verilebilir; müşteri açısından ise gerçekten kullanılacak bir hacim taahhüt edilmediğinde gereksiz bir yük hâline gelir. Bu yüzden yaklaşımımız şudur: geçmiş kullanım verinizi birlikte inceleriz, taahhüt edilebilir güvenli bir taban varsa onu yazar ve fiyata yansıtırız; talebiniz dalgalı ve öngörülemezse taahhütsüz çerçeve kurar, fiyat avantajını kullanım hacmi gerçekleştikçe dönemsel olarak gözden geçiririz. Tutmayacağını bildiğimiz bir taahhüdü sözleşmeye yazmayı doğru bulmuyoruz.",
            },
            {
                soru: "Sözleşme süresi dolmadan çıkmak istersek ne olur?",
                cevap:
                    "Fesih ve erken çıkış koşulları sözleşmede baştan tanımlanır ve bunu gizli bir madde olarak değil, görüşmenin açık bir başlığı olarak ele alırız. Standart yaklaşımımız, bildirim süreli karşılıklı fesih hakkıdır: taraflardan biri belirlenen süre önceden yazılı bildirimde bulunarak sözleşmeyi sonlandırabilir. Tahsisli makine bulunan kontratlarda çıkış koşulları farklı olabilir, çünkü o makine sizin için ayrılmış ve başka müşteriye taahhüt edilmemiştir; bu durumda kalan dönemin nasıl ele alınacağı yazılır. Hizmet seviyesi taahhütlerinin karşılanmaması hâlinde ise fesih hakkı size aittir ve bunu sözleşmeye yazmakta tereddüt etmeyiz — taahhüdün arkasında durmak, onu yazmanın ön şartıdır.",
            },
            {
                soru: "Fiyatlarımızın dönem içinde artmayacağını nasıl garanti ediyorsunuz?",
                cevap:
                    "Yıllık çerçevede birim fiyatlar dönem boyunca sabittir; bu, sözleşme metninde yazılı bir taahhüttür ve tek taraflı değiştirilemez. Çok yıllık sözleşmelerde ise fiyatın sabit kalacağını iddia etmek gerçekçi olmaz; bunun yerine revizyonun hangi tarihte, hangi yönteme göre ve ne kadar bildirimle yapılacağını yazarız. Yöntem önceden belli olduğunda artış sürpriz olmaz, bütçenize önceden yansıtabilirsiniz. Bir noktayı özellikle belirtiriz: kapsam dışı kalemleri sonradan fatura satırı hâline getirerek örtülü zam yapmak yaygın bir uygulamadır ve bizim çalışma biçimimiz değildir. Kapsam listesi ne kadar ayrıntılıysa fiyat taahhüdü o kadar anlamlıdır.",
            },
            {
                soru: "Aynı sözleşme kapsamında farklı makine sınıflarına ihtiyaç duyarsak nasıl işler?",
                cevap:
                    "Çerçeve sözleşmeyi tek makine üzerine değil, bir fiyat listesi üzerine kurarız: kapsamdaki tüm sınıflar için birim fiyatlar dönem başında belirlenir ve ihtiyaç doğduğunda ilgili satır işletilir. Böylece yeni bir sınıf gerektiğinde yeniden teklif ve onay süreci başlamaz. Listede olmayan, özel bir ekipman ihtiyacı çıkarsa ek fiyat teklifiyle sözleşmeye zeyilname olarak eklenir — süreç yine tek turdur, çünkü ticari şartlar zaten kurulmuştur. Deneyimimiz şu yönde: kurumsal tesislerin ihtiyacı dönem içinde mutlaka değişir, bu yüzden fiyat listesini baştan ihtiyacınızdan biraz geniş tutmak, sonradan yaşanacak gecikmeyi ortadan kaldırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. İkitelli OSB'nin kurumsal ölçekli işletme yoğunluğu kamuya açık genel bilgidir; tedarikçi ön yeterlilik seti ve çerçeve sözleşme yapıları sektör standardı, kontrat kurulum ve devreye alma düzeni firma pratiğidir.",
    },

    "bolge:basaksehir": {
        h1: "Başakşehir'de Hizmet Seviyesi Taahhütlü Platform Tedariki",
        giris:
            "Başakşehir'deki kurumsal tesislerin platform tedarikçisinden beklediği şey, bir fiyat listesinden ibaret değildir; beklenti bir performans taahhüdüdür. Talep açıldıktan sonra makine ne kadar sürede sahada olacak, arıza hâlinde ne kadar sürede müdahale edilecek, çözülemezse ne kadar sürede yerine bir başkası gelecek, dönem boyunca makinenin kullanılabilir kalma oranı ne olacak — kurumsal bir sözleşmede bu soruların cevabı iyi niyet beyanı olarak değil, ölçülebilir taahhüt olarak yazılır. Hizmet seviyesi taahhüdü dediğimiz şey tam olarak budur ve bir tedarikçiyi diğerinden ayıran asıl ayrım burada oluşur. Başakşehir'de çalıştığımız kurumsal müşterilerle kurduğumuz sözleşmelerin omurgası bu maddelerdir: ölçülebilir hizmet seviyeleri, bunları destekleyen filo yedekliliği ve taahhüde uyumun dönemsel olarak raporlanması. Bu sayfa, hizmet seviyesi taahhüdünün nasıl tanımlandığını ve arkasında hangi operasyonel düzenin durduğunu anlatır.",
        maddeler: [
            {
                baslik: "Ölçülebilir müdahale süresi tanımı",
                metin:
                    "Bir taahhüdün anlamlı olması için ölçülebilir olması gerekir ve bu, tanımın hassas yazılmasıyla başlar: süre ne zaman başlar — talebin açıldığı an mı, mesai saatinin başladığı an mı? Ne zaman durur — makine tesise girdiğinde mi, çalışır hâle geldiğinde mi? Mesai dışı, hafta sonu ve resmî tatil talepleri aynı süreye mi tabidir? Bu ayrıntılar yazılmadığında taahhüt, sonradan yorum tartışmasına dönüşür. Sözleşmelerimizde başlangıç ve bitiş anları, çalışma saatleri ve istisna durumları tek tek tanımlanır; ölçüm yöntemi belirsizse taahhüdün kendisi de belirsizdir.",
            },
            {
                baslik: "İkame garantisi ve yedek makine havuzu",
                metin:
                    "Kurumsal müşteri için asıl risk, makinenin arızalanması değil arızanın işi durdurmasıdır. İkame taahhüdü bu riski devralır: yerinde çözülemeyen arızada, tanımlı süre içinde eşdeğer sınıfta bir makine sahaya gönderilir ve arızalı olan çekilir. Bu taahhüdün arkasında somut bir şey durmak zorundadır — belirli bir sınıfta serbest kapasite tutmak. Yedeklilik olmadan verilen ikame sözü, sözleşme metninde iyi görünen ama ilk gerçek arızada tutmayan bir maddedir. Bu yüzden taahhüt edilen sınıfların yedek planı, sözleşme öncesinde kendi içimizde kontrol edilir.",
            },
            {
                baslik: "Kullanılabilirlik oranı ve planlı bakımın yeri",
                metin:
                    "Sahada sürekli duran tahsisli makinelerde ölçülen temel gösterge kullanılabilirlik oranıdır: makinenin dönem içinde çalışır durumda geçirdiği sürenin toplam süreye oranı. Bu göstergenin dürüst hesaplanabilmesi için planlı bakım süresinin nasıl ele alınacağı baştan tanımlanır — planlı bakım, müşteriyle mutabık kalınan bir pencerede yapıldığında kullanılabilirlik dışında tutulur, habersiz yapıldığında tutulmaz. Bu ayrım, tedarikçinin bakımı erteleyerek göstergeyi süslemesini engeller. Ölçüm dönemi, hesaplama yöntemi ve raporlama sıklığı sözleşmenin ekinde yer alır.",
            },
            {
                baslik: "Taahhüde uymama hâlinde ne olacağı",
                metin:
                    "Yaptırımı olmayan taahhüt, taahhüt değildir. Sözleşmelerimizde hizmet seviyelerinin karşılanmaması hâlinde uygulanacak sonuçlar yazılır ve bunlar kademelidir: belirli bir eşiğin aşılmasında dönem bedelinde tanımlı bir indirim, tekrar eden ihlallerde düzeltici faaliyet planı sunma yükümlülüğü, kalıcı başarısızlıkta müşterinin cezasız fesih hakkı. Bu maddeleri müşteri istemeden biz masaya getiririz, çünkü arkasında duramayacağımız bir seviyeyi zaten taahhüt etmeyiz. Gerçekçi bir taahhüt, abartılı bir taahhütten hem müşteri hem tedarikçi için değerlidir.",
            },
            {
                baslik: "Talep önceliklendirme: her çağrı acil değildir",
                metin:
                    "Tek bir müdahale süresi tanımlamak, planlanabilir bir bakım talebiyle üretimi durduran bir arızayı aynı kefeye koyar ve bu, kaynakların yanlış dağılmasına yol açar. Kurduğumuz düzende talepler öncelik sınıfına ayrılır: üretimi veya güvenliği doğrudan etkileyen acil talepler, planlı bakım kapsamındaki normal talepler ve tarih esnekliği olan programlı talepler. Her sınıfın kendi hedef süresi vardır. Sınıflandırmayı müşteri talebi açarken kendisi yapar; bu, hem gerçekten acil olanın hızlı karşılanmasını sağlar hem sistemin herkesin her talebi acil işaretlemesiyle tıkanmasını önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hizmet seviyesi göstergeleri ve tanım gerektiren noktalar",
                paragraflar: [
                    "Sözleşmelerimizde kullandığımız temel hizmet seviyesi göstergeleri, her birinin ne ölçtüğü ve tanımlanmadığında hangi tartışmayı ürettiği aşağıdaki tabloda toplanmıştır. Sözleşme görüşmesinde bu tabloyu birlikte doldurmayı öneririz.",
                ],
                tablo: {
                    basliklar: ["Gösterge", "Ne ölçer", "Tanımlanmazsa çıkan sorun", "Sözleşmedeki karşılığı"],
                    satirlar: [
                        ["Karşılama süresi", "Talepten teslime geçen süre", "Sürenin ne zaman başladığı tartışması", "Başlangıç anı ve mesai tanımı"],
                        ["Müdahale süresi", "Arıza bildiriminden varışa", "Mesai dışı kapsamı belirsizliği", "Saat dilimi bazlı hedefler"],
                        ["İkame süresi", "Yerine makine gelme süresi", "Eşdeğer sınıf tartışması", "Sınıf eşdeğerlik listesi"],
                        ["Kullanılabilirlik oranı", "Çalışır geçen sürenin payı", "Planlı bakımın sayılıp sayılmaması", "Bakım penceresi mutabakatı"],
                        ["Talep karşılama oranı", "Karşılanan talep yüzdesi", "Reddedilen talebin tanımı", "Öncelik sınıfı bazlı ölçüm"],
                    ],
                },
            },
            {
                baslik: "Taahhüdün altındaki operasyon: yedeklilik nasıl kurulur",
                paragraflar: [
                    "Hizmet seviyesi taahhüdü bir sözleşme maddesi gibi görünse de aslında bir kapasite kararıdır. Belirli bir sürede ikame taahhüt eden tedarikçi, o sınıfta serbest kapasite tutuyor demektir ve serbest kapasite tutmanın bir maliyeti vardır. Bu maliyeti dürüstçe fiyata yansıtmak, taahhüdü fiyatlamadan verip sonra tutamamaktan iyidir. Uygulamada yedekliliği üç katmanda kurarız: sözleşmeli müşterilere ayrılmış rezerv makineler, bakımı tamamlanıp kullanıma hazır bekleyen park kapasitesi ve tepe dönemler için önceden bağlanmış tedarik anlaşmaları.",
                    "Bu yapının müşteri açısından test edilebilir bir yanı vardır ve test edilmesini isteriz: sözleşme öncesinde taahhüt edilen sınıflarda ne kadar yedek kapasite bulunduğunu sorun, cevabın somut olmasını bekleyin. Yedekliliği rakamla açıklayamayan bir tedarikçinin ikame taahhüdü, iyi niyetten öteye geçmez.",
                ],
            },
            {
                baslik: "Hizmet seviyesinin ölçülmesi ve itiraz mekanizması",
                paragraflar: [
                    "Ölçümün kimin kaydına göre yapılacağı, hizmet seviyesi sözleşmelerinin en sık atlanan maddesidir. Bizim düzenimizde her talep, açıldığı andan kapandığı ana kadar kayıt altına alınır ve dönem raporunda talep bazında listelenir: açılış zamanı, öncelik sınıfı, karşılama zamanı, varsa gecikme ve gecikmenin nedeni. Rapor müşteriyle paylaşılır ve müşterinin kendi kaydıyla karşılaştırma imkânı doğar. Uyuşmazlık hâlinde itiraz süresi ve inceleme yöntemi sözleşmede tanımlıdır; iki kayıt arasındaki fark, çoğu zaman talebin hangi anda açılmış sayıldığından kaynaklanır ve bu, tanımı netleştirerek kalıcı olarak çözülür.",
                    "Dönem sonunda göstergeler tek tek gözden geçirilir. Hedefin altında kalınan başlıklar için nedeniyle birlikte düzeltici faaliyet sunulur; sürekli hedefin çok üstünde seyreden başlıklar ise gereğinden yüksek kapasite tutulduğunun işaretidir ve bir sonraki dönemde taahhüt seviyesi ile fiyat birlikte yeniden dengelenir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Müdahale süresi taahhüdü verirken hangi süreyi esas alıyorsunuz?",
                cevap:
                    "Tek bir süre vermek yerine, talebi öncelik sınıfına ayırıp her sınıf için ayrı hedef tanımlarız. Üretimi veya güvenliği doğrudan etkileyen acil bildirimler en kısa hedefe tabidir; planlı bakım kapsamındaki talepler ve tarih esnekliği olan programlı talepler daha geniş pencerelere yazılır. Süre hedefleri, mesai saatleri içinde ve dışında ayrı ayrı belirtilir — bunları tek bir rakama indirmek gerçekçi olmaz ve ilk gerçek olayda tartışma çıkarır. Somut hedefleri sözleşme görüşmesinde, sizin tesisinizin konumu, çalışma düzeni ve talep profili üzerinden belirleriz; standart bir tabelayı imzalatıp sonra istisnalarını saymayı doğru bulmuyoruz.",
            },
            {
                soru: "İkame makine geldiğinde 'eşdeğer sınıf' neye göre belirleniyor?",
                cevap:
                    "Eşdeğerlik, sözleşmenin ekinde bir liste hâlinde tanımlanır ve tek ölçüt çalışma yüksekliği değildir. Listede her sınıf için belirleyici özellikler yazılır: erişim yüksekliği, yatay uzanım, sepet kapasitesi, tahrik tipi ve zemin uygunluğu. Bir makinenin yerine gelen ikame, bu özelliklerin işiniz için kritik olanlarını karşılamak zorundadır — akülü çalışılan bir iç hacme dizel makine göndermek, sayfada aynı yüksekliğe çıksa bile eşdeğer değildir. Listeyi devreye alma döneminde sizin kullanım profilinize göre birlikte hazırlarız. Belirsiz bırakılan eşdeğerlik tanımı, ikame taahhüdünü pratikte işlevsiz hâle getiren en yaygın açıktır.",
            },
            {
                soru: "Kullanılabilirlik oranını nasıl hesaplıyorsunuz, planlı bakım bu orana dahil mi?",
                cevap:
                    "Kullanılabilirlik, makinenin dönem içinde çalışır durumda geçirdiği sürenin toplam kontrat süresine oranıdır. Planlı bakım, sizinle önceden mutabık kalınan bir pencerede yapıldığı sürece bu hesabın dışında tutulur; habersiz veya mutabakat dışında yapılan bir bakım duruşu ise kullanılabilirliği düşürür. Bu ayrım bilinçlidir ve tedarikçiyi disipline eder: bakım penceresini sizinle konuşmak zorunda kalırız. Hesaplama yöntemi, ölçüm dönemi ve rapor formatı sözleşmenin ekinde yazılıdır. Arıza duruşlarında ise süre, bildirim anından makinenin tekrar çalışır hâle geldiği ana kadar sayılır — parça bekleme süresi de bu sayıma dahildir, dışarıda bırakılmaz.",
            },
            {
                soru: "Taahhüt edilen seviyeler tutmazsa somut olarak ne yapıyorsunuz?",
                cevap:
                    "Sonuçlar sözleşmede kademeli olarak yazılıdır. Belirlenen eşiğin aşıldığı dönemlerde dönem bedelinde tanımlı bir indirim uygulanır; bu, ceza mantığından çok, alınmayan hizmetin bedelinin iade edilmesi mantığıyla kurulur. Tekrar eden ihlallerde kök neden analizi ve düzeltici faaliyet planı sunma yükümlülüğümüz doğar ve bu plan sizinle birlikte takip edilir. Kalıcı başarısızlık hâlinde ise cezasız fesih hakkı size aittir. Bu maddeleri kendimiz teklif ederiz, çünkü bir taahhüdün ciddiyeti, arkasındaki yaptırımla ölçülür. Buna karşılık taahhüt seviyelerini gerçekçi tutmakta da ısrarcıyızdır — tutamayacağımız bir rakamı imzalamak, kimseye fayda sağlamaz.",
            },
            {
                soru: "Tesisimizde sürekli bir makine dursun istiyoruz; bu kontratta nasıl tanımlanır?",
                cevap:
                    "Tahsisli makine modeliyle. Bu modelde belirlenen makine dönem boyunca sizin tesisinizde konumlanır, kullanımı sizin ekibinizde olur, bakımı ve periyodik kontrolleri bize aittir. Sözleşmede tanımlanması gereken başlıklar şunlardır: makinenin devir ve teslim durumu, kullanım kaydının nasıl tutulacağı, planlı bakım penceresi, kullanılabilirlik hedefi, arıza hâlinde ikame süresi ve hasar sorumluluğunun sınırı. Ayrıca makineyi kullanacak personelinizin yeterlilik durumu netleştirilir; gerekiyorsa saha eğitimini biz veririz. Bu modelin ekonomik olup olmadığı yıllık kullanım saatinizle belirlenir — kullanım düşükse çağrı bazlı çalışmak daha uygundur ve bunu hesapla gösteririz.",
            },
            {
                soru: "Hizmet seviyesi raporlarını hangi sıklıkla ve hangi ayrıntıda alıyoruz?",
                cevap:
                    "Standart düzenimiz aylık özet ve dönemsel ayrıntılı rapordur; sıklığı sizin iç raporlama takviminize göre ayarlarız. Rapor talep bazında listelenir: her talebin açılış zamanı, öncelik sınıfı, karşılanma zamanı, kullanılan makine ve varsa gecikme nedeni. Göstergelerin dönem içindeki seyri ve hedefe göre durumu ayrıca özetlenir. Tahsisli makine bulunan kontratlarda kullanım saatleri, bakım kayıtları ve duruş dökümü eklenir. Formatı devreye alma döneminde sizin sisteminize uyacak şekilde belirleriz — raporun sizin tarafınızda ek bir işleme ihtiyaç duymadan kullanılabilmesi, raporun içeriği kadar önemlidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Hizmet seviyesi taahhüdü, kullanılabilirlik ölçümü ve ikame eşdeğerliği kavramları tedarik yönetiminde sektör standardı genel bilgidir; öncelik sınıflandırması, yedeklilik katmanları ve raporlama düzeni firma pratiğidir.",
    },

    "bolge:istanbul-geneli": {
        h1: "İstanbul Genelinde Çok Lokasyonlu Kurumsal Platform Kontratları",
        giris:
            "Bir kurumun İstanbul'da tek bir tesisi varsa erişim ekipmanı tedariki bir satın alma kalemidir; birden fazla tesisi varsa aynı iş bir yönetim problemine dönüşür. Anadolu ve Avrupa yakasına dağılmış üretim tesisleri, depolar, mağaza veya şube ağları, plaza ve idari binalar — her biri kendi bakım ekibiyle, kendi bütçesiyle ve çoğu zaman kendi tedarikçisiyle çalıştığında ortaya öngörülemeyen bir toplam maliyet, birbirinden farklı hizmet kaliteleri ve dağınık bir evrak yığını çıkar. Merkezî satın alma birimlerinin bu tablodan rahatsız olmasının nedeni fiyat değil görünürlük eksikliğidir: kurumun yıl içinde erişim ekipmanına ne harcadığı, hangi lokasyonda ne kadar kullanıldığı ve hangi tedarikçinin taahhüdünü tuttuğu bilinmiyordur. Çok lokasyonlu çerçeve sözleşme tam olarak bu sorunu çözer. Bu sayfa, İstanbul genelinde dağılmış tesisleri olan kurumlarla kurduğumuz tek sözleşmeli, lokasyon bazlı raporlanan tedarik düzenini anlatır.",
        maddeler: [
            {
                baslik: "Tek sözleşme, çok lokasyon: yapının kurulması",
                metin:
                    "Model basit ama disiplin ister: ticari şartlar, fiyat listesi ve hizmet seviyeleri merkezî olarak tek sözleşmede belirlenir; her lokasyon bu sözleşmeden kendi ihtiyacı kadar yararlanır. Lokasyonların ayrı ayrı fiyat pazarlığı yapmasına veya farklı şartlarla çalışmasına gerek kalmaz. Sözleşmeye lokasyon listesi ek olarak konur ve dönem içinde tesis eklenmesi veya çıkarılması için basit bir bildirim yeterlidir. Bu yapının kurumsal karşılığı, satın almanın tek bir tedarikçi ilişkisini yönetmesi, bakım birimlerinin ise ihtiyaç anında doğrudan talep açabilmesidir.",
            },
            {
                baslik: "Lokasyon bazlı maliyet görünürlüğü",
                metin:
                    "Merkezî sözleşmenin en çok değer üreten çıktısı, maliyetin nereye gittiğinin görülmesidir. Her talep hangi lokasyona, hangi maliyet merkezine ve mümkünse hangi iş emrine ait olduğu bilgisiyle kaydedilir; dönem raporunda tüketim lokasyon kırılımıyla sunulur. Bu döküm, kurumun kendi içinde karşılaştırma yapmasını sağlar — benzer büyüklükteki iki tesisin kullanım farkı, çoğu zaman bir bakım pratiği farkına işaret eder. Faturalama tarafında ise ister tek merkezî fatura ister lokasyon bazlı ayrı faturalar düzenlenir; muhasebe yapınıza uygun olan hangisiyse ona göre kurulur.",
            },
            {
                baslik: "Yakalar arası lojistik ve konumlandırma",
                metin:
                    "İstanbul'da çok lokasyonlu hizmetin gerçek sınavı coğrafyadır: iki yaka arasındaki geçişler, trafik yoğunluğu ve mesafe, taahhüt edilen sürelerin tutup tutmayacağını doğrudan belirler. Bu yüzden lokasyon listesi elimize geçtiğinde ilk yaptığımız iş, makine konumlandırmasını bu listeye göre planlamaktır — talebin yoğunlaştığı bölgelere yakın kapasite tutmak, süre taahhüdünün altyapısıdır. Bazı kurumlarda en verimli çözüm, yüksek kullanımlı tesislere makine tahsis edip düşük kullanımlılara çağrı bazlı hizmet vermektir; bu karma yapıyı kullanım verisi üzerinden kurarız.",
            },
            {
                baslik: "Standart hizmet, farklı tesis koşulları",
                metin:
                    "Aynı kurumun tesisleri birbirine benzemez: bir üretim tesisinin zemini, tavan yüksekliği ve giriş prosedürü ile bir plaza katının koşulları arasında hiçbir ortaklık yoktur. Çerçeve sözleşme ticari şartları standartlaştırır ama sahadaki uygulamayı standartlaştıramaz. Bu yüzden her lokasyon için ayrı bir saha dosyası tutarız: erişim noktaları, zemin ve kapı ölçüleri, giriş prosedürü, çalışma izni sistemi ve daha önce yaşanmış kısıtlar. Bu dosya sayesinde yeni bir talep geldiğinde keşif sıfırdan başlamaz ve doğru makine ilk seferde gider.",
            },
            {
                baslik: "Kurum çapında tek evrak ve uyum standardı",
                metin:
                    "Çok tedarikçiyle çalışan kurumların en görünmez maliyeti uyum yönetimidir: her tedarikçinin belge seti farklı zamanlarda dolar, her birinin sigorta limiti ve İSG uygulaması ayrı takip ister, denetim geldiğinde evrak toplamak günler alır. Tek çerçeve sözleşmede bu yük tek noktaya iner — belgeler bizde merkezî olarak güncel tutulur, tüm lokasyonlarda aynı standart uygulanır ve denetim istendiğinde set tek seferde teslim edilir. Personelimizin yeterlilik kayıtları ve ekipmanın periyodik kontrol raporları da aynı merkezî düzende izlenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Lokasyon tipine göre hizmet düzeni",
                paragraflar: [
                    "Çok lokasyonlu bir kurumun İstanbul'daki farklı tesis tiplerinde uyguladığımız hizmet düzeni ve bu düzeni belirleyen etkenler aşağıdaki tabloda özetlenmiştir. Aynı sözleşme, farklı tesiste farklı işler.",
                ],
                tablo: {
                    basliklar: ["Lokasyon tipi", "Talep karakteri", "Uygun hizmet düzeni", "Belirleyici etken"],
                    satirlar: [
                        ["Üretim tesisi", "Yüksek ve düzenli", "Tahsisli makine", "Yıllık kullanım saati"],
                        ["Depo ve dağıtım merkezi", "Dönemsel yoğunlaşan", "Rezervasyonlu çağrı", "Sezon takvimi"],
                        ["Plaza ve idari bina", "Düşük ama planlı", "Programlı çağrı", "Bina yönetimi onayı"],
                        ["Şube ve mağaza ağı", "Dağınık ve küçük", "Bölge turu düzeni", "Coğrafi kümeleme"],
                        ["Yeni açılan lokasyon", "Kısa süreli yoğun", "Geçici takviye paketi", "Açılış takvimi"],
                    ],
                },
            },
            {
                baslik: "Merkezî sözleşme ile saha özerkliği arasındaki denge",
                paragraflar: [
                    "Çok lokasyonlu kontratların pratikte tıkandığı nokta genellikle ticari değil idaridir: merkez sözleşmeyi imzalar, ama sahadaki bakım şefi kendi eski tedarikçisini aramaya devam eder. Bunun nedeni çoğu zaman direnç değil hızdır — saha, merkezî sistemin yavaş işleyeceğini varsayar. Bu varsayımı kırmanın tek yolu, sistemi sahanın işine yarayacak şekilde kurmaktır: talep açma yetkisi tesis seviyesine verilir, onay zinciri işletilmez, muhatap doğrudan ulaşılabilir olur. Merkez, kontrolü talep anında değil raporlama katmanında uygular.",
                    "Devreye alma döneminde her lokasyonun bakım sorumlusuyla ayrı ayrı tanışmayı, sistemin nasıl işlediğini yerinde anlatmayı ve saha dosyasını birlikte doldurmayı bu yüzden önemseriz. Kâğıt üzerinde kurulan ama sahada kabul görmeyen bir sözleşme, kuruma vaat ettiği tasarrufun hiçbirini üretmez.",
                ],
            },
            {
                baslik: "Dönemsel gözden geçirme toplantıları",
                paragraflar: [
                    "Uzun dönemli bir tedarik ilişkisi, imzalandıktan sonra kendi hâline bırakıldığında körelir. Bunu önlemek için dönemsel gözden geçirme toplantıları yaparız: kullanım verisi lokasyon bazında incelenir, hizmet seviyesi göstergelerinin seyri değerlendirilir, açık kalan sorunlar ve sahadan gelen geri bildirimler ele alınır ve gelecek dönemin ihtiyaç öngörüsü birlikte çıkarılır. Toplantıya satın alma ve bakım tarafından katılım olmasını isteriz; iki birimin aynı veriye bakması, çoğu yanlış anlamayı kendiliğinden çözer.",
                    "Bu toplantıların somut çıktısı genellikle yapısal olur: bir lokasyonun kullanımı tahsisli modele geçecek kadar artmıştır, bir başkasınınki çağrı bazlı modele dönmeyi haklı çıkaracak kadar düşmüştür, ya da bir tesisin tekrarlayan talebi aslında bir bakım probleminin belirtisidir. Sözleşmeyi dönem içinde bu bulgulara göre uyarlamak, hem maliyeti hem hizmeti iyileştirir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Farklı ilçelerde altı tesisimiz var; hepsi için tek sözleşme yapabilir miyiz?",
                cevap:
                    "Yapabilirsiniz ve bu, çok lokasyonlu kurumlar için önerdiğimiz modeldir. Ticari şartlar, fiyat listesi ve hizmet seviyeleri tek sözleşmede belirlenir; tesisler bu sözleşmeden kendi ihtiyaçları kadar yararlanır. Sözleşmeye lokasyon listesi ek olarak konur ve dönem içinde tesis eklemek veya çıkarmak için yazılı bildirim yeterlidir, yeniden sözleşme yapılmaz. Her lokasyon için ayrı saha dosyası tutulur, böylece tesisler arasındaki koşul farkları hizmete yansır. Faturalama tercihinizi de siz belirlersiniz: tek merkezî fatura veya lokasyon bazlı ayrı faturalar. Altı tesis ölçeğinde bu modelin en görünür kazancı, dağınık tedarikçi yönetiminin ortadan kalkmasıdır.",
            },
            {
                soru: "Hangi tesisin ne kadar harcadığını görebilecek miyiz?",
                cevap:
                    "Evet, bu modelin temel çıktılarından biri budur. Her talep açılırken lokasyon, maliyet merkezi ve varsa iş emri bilgisi kaydedilir; dönem raporunda tüketim bu kırılımlarla sunulur. Rapor yalnızca tutar değil, kullanım dökümü de içerir — hangi makine sınıfı, kaç gün, hangi amaçla. Bu veri kurum içi karşılaştırmayı mümkün kılar ve genellikle beklenmedik bulgular üretir: benzer ölçekli iki tesisin kullanım farkı, çoğu zaman bir bakım pratiği veya ekipman eksikliği farkını işaret eder. Raporu kendi sisteminizde kullanabileceğiniz formatta hazırlarız; formatı devreye alma döneminde birlikte belirleriz.",
            },
            {
                soru: "Uzak lokasyonlarımızda da aynı hizmet süresini taahhüt ediyor musunuz?",
                cevap:
                    "Hayır ve bunu baştan açıkça yazarız — İstanbul coğrafyasında her lokasyona aynı süreyi taahhüt etmek gerçekçi olmaz. Lokasyon listesi elimize geçtiğinde her tesis için ayrı hedef süre belirlenir; bu süreler, tesisin konumu, ulaşım koşulları ve kapasite konumlandırmamız dikkate alınarak yazılır. Yakın lokasyonlara daha kısa, uzak veya erişimi zor olanlara daha gerçekçi süreler tanımlanır. Tek bir rakamı bütün tesislere yazıp sonra istisnalarını saymak yerine, farklılaşmış ve tutulabilir hedefler koymayı tercih ederiz. Süreleri iyileştirmenin yolu ise operasyoneldir: yoğun talep gelen bölgelere yakın kapasite konumlandırmak.",
            },
            {
                soru: "Tesislerimizin bakım ekipleri kendi tedarikçileriyle çalışmaya alışkın; geçişi nasıl sağlarsınız?",
                cevap:
                    "Bunu sözleşmenin en kritik aşaması sayarız ve idari bir talimatla çözülmeyeceğini biliriz. Devreye alma döneminde her lokasyonun bakım sorumlusuyla ayrı ayrı görüşür, sistemin nasıl işleyeceğini yerinde anlatır ve saha dosyasını birlikte doldururuz. Talep açma yetkisi tesis seviyesinde kalır, onay zinciri işletilmez — saha için hız, eski tedarikçisiyle çalıştığı zamanki kadar veya daha iyi olmalıdır. İlk aylarda geri bildirimi doğrudan sahadan toplar, aksayan noktaları merkeze rapor etmeden önce düzeltiriz. Deneyimimiz şu: saha, hızlı ve muhatabı belli bir sisteme birkaç hafta içinde alışır; yavaş bir sisteme ise hiçbir zaman alışmaz.",
            },
            {
                soru: "Yeni bir tesis açtığımızda sözleşmeyi yenilemek gerekecek mi?",
                cevap:
                    "Gerekmez. Lokasyon listesi sözleşmenin eki olduğu için yeni tesis, yazılı bildirimle listeye eklenir ve mevcut ticari şartlarla hizmet almaya başlar. Yeni lokasyon için yapılan tek ek çalışma saha dosyasının oluşturulmasıdır — erişim noktaları, zemin ve kapı ölçüleri, giriş prosedürü ve varsa özel kısıtlar kayda geçer. Açılış dönemi genellikle kısa süreli yoğun bir ihtiyaç doğurur; bunun için geçici takviye paketi planlarız ve tesis normal işleyişe geçtiğinde düzen kendi seviyesine iner. Aynı esneklik ters yönde de geçerlidir: kapanan veya devredilen bir tesis, bildirimle listeden çıkar.",
            },
            {
                soru: "Gözden geçirme toplantıları ne sıklıkla yapılıyor ve neye yarıyor?",
                cevap:
                    "Sıklığı kurumunuzun raporlama ritmine göre belirleriz; yaygın düzen üç aylık toplantı ve yıl sonunda kapsamlı bir değerlendirmedir. Toplantının içeriği veri üzerine kuruludur: lokasyon bazlı kullanım, hizmet seviyesi göstergelerinin seyri, açık kalan konular, sahadan gelen geri bildirimler ve gelecek dönem öngörüsü. Faydası da somuttur — kullanımı artan bir tesis tahsisli modele geçirilir, kullanımı düşen bir tesis çağrı bazlı modele döner, tekrarlayan bir talebin altındaki asıl problem görünür hâle gelir. Toplantıya hem satın alma hem bakım tarafından katılım olmasını isteriz; iki birimin aynı veriye birlikte bakması, sözleşmenin dönem içinde kendini iyileştirmesini sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Çok lokasyonlu çerçeve sözleşme, maliyet merkezi bazlı raporlama ve tedarikçi uyum yönetimi kavramları sektör standardı genel bilgidir; saha dosyası düzeni, devreye alma yaklaşımı ve gözden geçirme toplantısı pratiği firma pratiğidir.",
    },

    "bolge:marmara-bolgesi": {
        h1: "Marmara Bölgesinde Çok İlli Kurumsal Platform Tedarik Kontratları",
        giris:
            "Marmara, Türkiye sanayisinin en yoğun kümelendiği coğrafyadır ve burada faaliyet gösteren büyük kurumların tesisleri nadiren tek il sınırında kalır: İstanbul'daki merkez ve üretim tesislerine Kocaeli, Sakarya, Bursa, Tekirdağ ve Balıkesir hattındaki fabrikalar, depolar ve lojistik merkezleri eşlik eder. Bu ölçekte erişim ekipmanı tedariki artık bir il içi hizmet meselesi değil, bölgesel bir tedarik zinciri kararıdır. Kurumun karşısındaki sorular da buna göre değişir: tek bir sözleşmeyle bütün illeri kapsamak mı, yoksa her ilde ayrı tedarikçiyle çalışmak mı daha doğrudur? Farklı illerde aynı hizmet seviyesi taahhüt edilebilir mi? Bir ilde yaşanan aksaklık, diğer illerdeki hizmeti nasıl etkiler? Bu sayfa, Marmara genelinde dağılmış tesisleri olan kurumlarla çok illi çerçeve sözleşmelerin nasıl kurulduğunu, bölgesel kapasitenin nasıl yapılandırıldığını ve il farklarının sözleşmeye nasıl dürüstçe yansıtıldığını anlatır.",
        maddeler: [
            {
                baslik: "Çok illi çerçevenin kapsam sınırının çizilmesi",
                metin:
                    "Bölgesel bir sözleşmenin ilk maddesi, hangi illeri ve hangi tesisleri kapsadığıdır. Kapsamı olduğundan geniş çizmek yaygın bir hatadır: her ile hizmet vaat eden ama bazı illerde gerçek kapasitesi olmayan bir tedarikçi, sözleşmenin ilk yılında güven kaybeder. Bizim yaklaşımımız, kapsamı gerçek operasyonel erişimimize göre çizmek ve sınırı açıkça yazmaktır. Kapsam dışında kalan bir lokasyonunuz varsa bunu baştan söyler, o tesis için ayrı bir çözüm önerir veya kapsam genişletmesinin hangi koşulda mümkün olacağını belirtiriz. Yazılı sınır, sonradan yaşanacak hayal kırıklığından iyidir.",
            },
            {
                baslik: "İl bazlı farklılaşan hizmet seviyeleri",
                metin:
                    "Aynı taahhüdü bütün illere yazmak, sözleşmeyi kolaylaştırır ama gerçeği yansıtmaz. Marmara içinde mesafeler, ulaşım koşulları ve kapasitemizin konumu ilden ile değişir; dolayısıyla karşılama ve müdahale süreleri de değişmek zorundadır. Sözleşmede her il veya tesis grubu için ayrı hedefler tanımlarız ve bunları neye göre belirlediğimizi de açıklarız. Bu yaklaşımın kuruma faydası şudur: hangi tesiste ne bekleyeceğini bilir, kritik operasyonları buna göre planlar ve gerektiğinde belirli tesisler için daha güçlü bir düzen — örneğin tahsisli makine — talep eder.",
            },
            {
                baslik: "Bölgesel kapasite konumlandırması ve yedeklilik",
                metin:
                    "Çok illi bir taahhüdün arkasında duran şey sözleşme metni değil, kapasitenin coğrafi dağılımıdır. Talep yoğunluğunun oluştuğu bölgelerde makine bulundurmak, taahhüt edilen sürelerin fiziksel karşılığıdır. Kurumun tesis listesi elimize geçtiğinde bu dağılımı yeniden değerlendirir, gerekiyorsa konumlandırmayı sözleşme dönemine göre uyarlarız. Yedeklilik de bölgesel kurulur: bir ildeki makine arızalandığında ikame, en yakın kapasiteden gider ve mesafe, taahhüt edilen ikame süresinin içinde kalacak şekilde planlanır. Kapasitesi olmayan bir ile verilen süre taahhüdü, kâğıt üzerinde kalır.",
            },
            {
                baslik: "Mobilizasyon ve iller arası makine hareketi",
                metin:
                    "Bölgesel sözleşmelerde makinelerin iller arasında hareket etmesi olağandır ve bu hareketin ticari karşılığı baştan tanımlanır: nakliyenin kime ait olduğu, hangi mesafeye kadar dahil olduğu, uzun mesafeli sevkiyatların nasıl fiyatlanacağı ve süre taahhüdünün nakliyeyi kapsayıp kapsamadığı. Bu kalemleri belirsiz bırakan sözleşmeler, ilk uzun mesafeli talepte tartışma üretir. Bir başka pratik konu, makinenin bir tesiste işi bittiğinde depoya dönmek yerine doğrudan diğer tesise geçebilmesidir; bu, hem maliyeti hem süreyi düşürür ve çok lokasyonlu sözleşmelerin doğal avantajıdır.",
            },
            {
                baslik: "Bölge çapında tek uyum ve evrak standardı",
                metin:
                    "Farklı illerde farklı tedarikçilerle çalışan kurumların yaşadığı en yorucu sorun, hizmet kalitesinin ve evrak düzeninin ilden ile değişmesidir: bir tesiste eksiksiz işleyen İSG uygulaması, başka bir ilde gevşek yürür ve bu, denetimde kurumun karşısına çıkar. Bölgesel çerçeve sözleşme bu farkı ortadan kaldırır — aynı belge seti, aynı personel yeterlilik standardı, aynı periyodik kontrol düzeni ve aynı raporlama formatı bütün tesislerde geçerlidir. Denetim veya iç inceleme geldiğinde kurumun bütün lokasyonları için tek bir kaynaktan tutarlı bir dosya çıkar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bölgesel sözleşmede il grupları ve hizmet yapısı",
                paragraflar: [
                    "Marmara genelinde çalıştığımız kurumlarda tesisleri coğrafi gruplara ayırır ve her grup için hizmet yapısını ayrı belirleriz. Aşağıdaki tablo bu gruplama mantığını ve belirleyici etkenlerini gösterir; kesin süreler her sözleşmede tesis listesine göre yazılır.",
                ],
                tablo: {
                    basliklar: ["Tesis grubu", "Belirleyici etken", "Uygun hizmet yapısı", "Sözleşmedeki karşılığı"],
                    satirlar: [
                        ["Çekirdek bölge tesisleri", "Kapasiteye yakınlık", "Çağrı bazlı hızlı hizmet", "En kısa hedef süreler"],
                        ["Komşu il sanayi tesisleri", "Mesafe ve ulaşım", "Rezervasyonlu çağrı", "Farklılaşmış hedef süre"],
                        ["Yüksek kullanımlı fabrika", "Yıllık kullanım saati", "Tahsisli makine", "Kullanılabilirlik hedefi"],
                        ["Uzak lokasyon", "Erişim süresi", "Programlı ziyaret düzeni", "Planlı takvim, geniş pencere"],
                        ["Geçici proje sahası", "Süre belirsizliği", "Dönemsel takviye", "Esnek süre ve çıkış şartı"],
                    ],
                },
            },
            {
                baslik: "Tek bölgesel sözleşme mi, il bazlı ayrı tedarikçiler mi",
                paragraflar: [
                    "Bu kararı veren kurumlara dürüst bir karşılaştırma sunmayı tercih ederiz, çünkü tek sözleşme her koşulda üstün değildir. Bölgesel çerçevenin güçlü yanları nettir: tek ticari ilişki, tek evrak seti, bütün tesislerde aynı standart, karşılaştırılabilir raporlama ve toplam hacmin fiyata yansıması. Buna karşılık il bazlı ayrı tedarikçilerin de bir avantajı vardır — çok uzak bir lokasyonda yerel bir tedarikçi, mesafe nedeniyle daha hızlı ve daha ucuz olabilir. Kritik soru, kurumun o lokasyondaki hizmet kalitesini ve evrak uyumunu takip etme kapasitesinin olup olmadığıdır.",
                    "Pratikte en sık kurduğumuz yapı karmadır: tesislerin ana gövdesi bölgesel çerçeve içinde, coğrafi olarak çok ayrık kalan birkaç lokasyon ise ayrı düzenle yönetilir. Bu ayrımı yaparken kendi kapsamımızı olduğundan geniş göstermemeye özen gösteririz; kapsam dışında kalan bir tesis için size doğruyu söylemek, sonradan tutamayacağımız bir taahhüde imza atmaktan iyidir.",
                ],
            },
            {
                baslik: "Bölgesel kontratlarda dönemsel bütçe öngörüsü",
                paragraflar: [
                    "Çok illi bir sözleşmenin satın alma tarafındaki en değerli çıktısı, gelecek dönemin bütçesinin veriye dayalı olarak kurulabilmesidir. Dönem içinde biriken kullanım verisi — hangi tesis, hangi sınıf, kaç gün, hangi mevsimde — gelecek yılın öngörüsü için doğrudan girdi olur. Bu öngörüyü sözleşme yenileme görüşmesinden önce hazırlar ve sizinle paylaşırız; böylece görüşme, tahmin üzerinden değil geçmiş veri üzerinden yürür. Mevsimsel yoğunlaşmaların görünür hâle gelmesi ayrıca operasyonel fayda üretir: tepe dönemler önceden bilindiğinde kapasite o dönemlere göre ayrılır.",
                    "Bu çalışmanın bir de kurum içi faydası vardır. Tesis bazlı kullanım dökümü, bütçe tartışmalarında hangi lokasyonun neden daha çok harcadığı sorusuna somut cevap verir ve kararlar sezgiyle değil kayıtla alınır. Veriyi kurumun kendi formatında sunmayı standart hizmetimizin parçası sayarız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Marmara'daki bütün tesislerimize aynı sözleşmeyle hizmet verebilir misiniz?",
                cevap:
                    "Tesis listenizi görmeden kesin cevap vermeyiz, çünkü kapsamı gerçek operasyonel erişimimize göre çizeriz. Liste elimize geçtiğinde her lokasyon için hizmet verip veremeyeceğimizi, verebiliyorsak hangi süre hedefiyle hizmet edeceğimizi tesis tesis belirtiriz. Kapsam dışında kalan lokasyonlarınız varsa bunu açıkça söyler, o tesisler için ayrı çözüm öneririz. Bütün Marmara'yı kapsadığını söyleyip bazı illerde gerçek kapasitesi olmayan bir sözleşme, kuruma tasarruf değil risk getirir. Kapsamı dar ama tutulabilir çizmeyi, geniş ama boş çizmeye tercih ederiz — sözleşmenin değeri, ilk kriz anında ölçülür.",
            },
            {
                soru: "Farklı illerdeki tesislerimizde aynı hizmet süresini bekleyebilir miyiz?",
                cevap:
                    "Hayır ve bunu gizlemeyiz. Marmara içinde mesafeler ve ulaşım koşulları ilden ile ciddi biçimde değişir; tek bir süre hedefini bütün tesislere yazmak, sözleşmeyi düzenli gösterir ama gerçeği yansıtmaz. Bunun yerine tesisleri coğrafi gruplara ayırır, her grup için ayrı ve tutulabilir hedefler tanımlarız. Belirli bir tesiste daha kısa süre kritikse bunun operasyonel çözümü vardır — o tesise tahsisli makine konumlandırmak veya bölgesel kapasiteyi o yöne kaydırmak; ikisinin de ticari karşılığını hesaplayıp sunarız. Böylece kurum, hangi tesiste ne beklemesi gerektiğini bilerek kendi operasyon planını kurar.",
            },
            {
                soru: "Bir ilden diğerine makine sevk edilmesi gerekirse nakliye maliyeti kime ait olur?",
                cevap:
                    "Bu, sözleşmenin baştan netleştirdiği kalemlerden biridir. Standart yaklaşımımız, tesis grubuna göre tanımlanmış bir nakliye kapsamıdır: belirlenen mesafe bandı içindeki sevkiyatlar birim fiyata dahildir, bandın dışına çıkan uzun mesafeli hareketler için ayrı ve önceden belirlenmiş bir tarife uygulanır. Ayrıca operasyonel bir avantajı da sözleşmeye yansıtırız: bir tesiste işi biten makine depoya dönmek yerine doğrudan başka bir tesise geçebiliyorsa, bu geçişin maliyeti tek yönlü hesaplanır. Bu tür ayrıntılar küçük görünür ama çok illi bir kontratta yıl sonunda ciddi bir fark yaratır ve belirsiz bırakıldığında tartışma üretir.",
            },
            {
                soru: "Bazı illerde yerel tedarikçiler daha uygun fiyat veriyor; bölgesel sözleşme yine de mantıklı mı?",
                cevap:
                    "Sorunun cevabı, kurumun neyi optimize ettiğine bağlıdır ve dürüst cevap her zaman 'evet' değildir. Tek tek birim fiyatlara bakıldığında yerel bir tedarikçi bazı lokasyonlarda daha uygun olabilir. Ancak karşılaştırmayı tam yapmak gerekir: çoklu tedarikçi yönetiminin idari yükü, tedarikçi onay süreçlerinin tekrarı, hizmet kalitesinin ve İSG standardının lokasyondan lokasyona değişmesi, evrak takibinin dağılması ve toplam harcamanın görünmez hâle gelmesi de birer maliyettir. Bizim önerimiz karma yapıdır: gövdeyi bölgesel çerçevede tutmak, coğrafi olarak çok ayrık kalan lokasyonları ayrı yönetmek. Bu ayrımı sizinle birlikte, veriye bakarak yaparız.",
            },
            {
                soru: "Bir tesiste yaşanan aksaklık diğer tesislerimizin hizmetini etkiler mi?",
                cevap:
                    "Etkilememesi için yedekliliği bölgesel olarak kurarız; tek bir merkeze bağlı bir yapıda bu risk gerçektir. Uygulamada kapasite, talebin yoğunlaştığı bölgelere dağıtılır ve bir tesise giden ikame, en yakın kapasiteden çıkar. Böylece bir lokasyondaki yoğunlaşma, uzaktaki bir tesisin hizmetini bloke etmez. Buna karşılık dürüst olalım: bölge genelinde eş zamanlı bir tepe dönem yaşanırsa öncelik sıralaması devreye girer ve bu sıralama sözleşmede tanımlıdır — üretimi veya güvenliği doğrudan etkileyen talepler önce karşılanır. Bu kuralı sözleşmeye yazmak, kriz anında keyfî karar verilmesini engeller.",
            },
            {
                soru: "Sözleşme yenileme dönemine gelirken elimizde nasıl bir veri olacak?",
                cevap:
                    "Yenileme görüşmesinden önce dönemin tam dökümünü hazırlarız: tesis bazlı kullanım, makine sınıfı dağılımı, mevsimsel yoğunlaşmalar, hizmet seviyesi göstergelerinin seyri, taahhüt edilen ve gerçekleşen sürelerin karşılaştırması ve dönem boyunca yaşanan aksaklıkların nedenleriyle listesi. Buna ek olarak gelecek dönem için veriye dayalı bir ihtiyaç öngörüsü sunarız. Amacımız, görüşmenin tahmin ve pazarlık üzerinden değil kayıt üzerinden yürümesidir. Bu döküm sizin elinizde olduğunda başka tedarikçilerle karşılaştırma yapmanız da kolaylaşır — bunu bir dezavantaj olarak görmüyoruz, çünkü ölçülebilir bir performansın arkasında durabiliyorsak yenileme kararı zaten veriyle verilmelidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Marmara'nın çok illi sanayi yoğunluğu kamuya açık genel bilgidir; çok illi çerçeve sözleşme, bölgesel yedeklilik ve mobilizasyon kapsamı kavramları tedarik yönetiminde sektör standardı, tesis gruplama ve yenileme veri seti firma pratiğidir.",
    },

    "bolge:dudullu-osb": {
        h1: "Dudullu OSB'de Sürekli Filo Tahsisli Platform Tedariki",
        giris:
            "Dudullu Organize Sanayi Bölgesi, Ümraniye'nin İMES Sanayi Sitesi'ne komşu konumuyla Anadolu Yakası'nın en yoğun üretim ve imalat kümelerinden birini oluşturur; bölgedeki tesislerin büyük kısmı platform ihtiyacını mevsimsel bir olay değil, üretim takviminin sabit bir girdisi olarak yaşar. Bu tür bir ihtiyacı her seferinde tekil talep olarak karşılamak, hem tesis için hem tedarikçi için verimsizdir — talep her açıldığında yeniden makine bulmak, fiyat sormak ve müsaitlik kontrol etmek, sürekli ihtiyacı olan bir işletme için gereksiz bir sürtünmedir. Bizim Dudullu'daki çalışma biçimimiz, Tuzla'daki Anadolu Yakası operasyon merkezimizden bölgeye sürekli filo tahsisi kurmaktır: dönem başında tesisin kullanım profiline göre makine sınıfları ve adetleri belirlenir, bu kapasite dönem boyunca Dudullu hattına ayrılır ve tesis, her ihtiyaçta sıfırdan tedarikçi arayışına girmez. Bu sayfa, Dudullu OSB'deki bir tesisle sürekli filo tahsisinin nasıl kurulduğunu ve nasıl işletildiğini anlatır.",
        maddeler: [
            {
                baslik: "Dudullu'nun üretim yoğunluğu ve sürekli erişim ihtiyacı",
                metin:
                    "Dudullu OSB'deki tesislerin çoğu, İMES'e komşu bir üretim ve imalat ekosisteminin parçasıdır ve bu ekosistemde çatı, cephe, aydınlatma ve raf sistemleri üzerinde çalışma neredeyse hiç durmaz — bir hat yenilenirken diğer hat bakımdadır, bir bölümde tadilat sürerken başka bölümde periyodik kontrol yapılır. Bu sürekliliği tek seferlik kiralamalarla karşılamaya çalışan bir tesis, her talebinde makine müsaitliğine bağımlı kalır ve yoğun dönemde erişim riskiyle karşılaşır. Sürekli filo tahsisi bu riski ortadan kaldırır: tesisin ihtiyaç profiline göre ayrılan kapasite, başka müşteriye taahhüt edilmez ve tesis kendi üretim takvimini bu kapasiteye göre planlayabilir.",
            },
            {
                baslik: "Tuzla merkezli Anadolu Yakası hub'ından tahsis mantığı",
                metin:
                    "Filo tahsisinin işleyebilmesi için kapasitenin talebin olduğu bölgeye yakın durması gerekir; bu yüzden Dudullu'ya ayrılan filo, Anadolu Yakası operasyon merkezimiz olan Tuzla'dan yönetilir. Bu, iki pratik sonuç doğurur: birincisi, talep açıldığında makine Avrupa Yakası'ndan köprü veya tünel geçişi beklemeden kısa sürede sahaya ulaşır; ikincisi, arıza veya ek talep durumunda ikame kapasitesi yine aynı yakadan, aynı gün içinde devreye girer. Anadolu Yakası'ndaki müşterilerimize Avrupa Yakası kapasitesinden hizmet vermeye çalışmak, sözleşmede yazılı bir süre taahhüdünü sahada anlamsız kılar; bu yüzden yaka ayrımını filo planlamasının başlangıç noktası sayarız.",
            },
            {
                baslik: "Dönem başı filo planlaması: sınıf ve adet kararı",
                metin:
                    "Sözleşme kurulmadan önce tesisin geçmiş kullanım verisi — hangi ayda hangi sınıf makineye ne sıklıkta ihtiyaç duyulduğu — birlikte incelenir. Bu inceleme, dönem boyunca tahsis edilecek makine sınıflarını ve adetlerini belirler: kapalı hacimde çalışan akülü makaslı platformlar, dış cephe ve çatı işleri için eklemli platformlar, malzeme taşımada kullanılan forkliftler. Planlama, tesisin en yoğun dönemini esas alır; sakin dönemde fazla kapasite boşta kalmaz çünkü aynı filo, dönem içinde bölgedeki diğer tahsisli müşterilerle esnek biçimde paylaşılabilir hâle getirilir. Karar, tahmine değil geçmiş kullanım kaydına dayanır.",
            },
            {
                baslik: "Vardiya düzenine göre teslim ve devir saatleri",
                metin:
                    "OSB içindeki üretim tesislerinin büyük kısmı vardiyalı çalışır ve makine ihtiyacı da bu ritme uyar — gündüz vardiyasının bakım penceresi ile gece vardiyasının üretim yoğunluğu aynı makineyi farklı saatlerde farklı amaçla kullanabilir. Sürekli filo tahsisinde teslim ve devir saatleri tesisin vardiya çizelgesine göre baştan tanımlanır: makine hangi vardiya değişiminde kime teslim edilir, günlük kontrol kaydı kim tarafından tutulur, mesai dışı acil talep hangi kanaldan açılır. Bu netlik olmadan vardiyalı bir tesiste makine, iki vardiya arasında kimsenin sorumluluğunda olmayan bir boşlukta kalabilir.",
            },
            {
                baslik: "Yıl içi filo revizyonu",
                metin:
                    "Dudullu'daki bir tesisin ihtiyacı yıl boyunca sabit kalmaz — yeni bir hat devreye girer, bir bölüm kapasitesini büyütür veya bir proje geçici olarak ek makine gerektirir. Sürekli filo tahsisi bu değişime kapalı bir yapı değildir; dönem içinde tesisin talebiyle filo büyütülür veya küçültülür, değişiklik yazılı bir revizyonla sözleşmeye eklenir. Revizyon için sözleşmenin baştan iptal edilip yeniden kurulmasına gerek yoktur — mevcut ticari şartlar üzerinden ek veya eksiltme yapılır. Bu esneklik, sürekli tahsisin tek seferlik kiralamaya göre asıl avantajlarından biridir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Dudullu'da filo tahsis modelleri",
                paragraflar: [
                    "Dudullu OSB'deki tesislerin kullanım profiline göre kurduğumuz filo tahsis modelleri ve her modelin uygun olduğu durum aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Tahsis modeli", "Uygun kullanım profili", "Kapasite konumu", "Revizyon esnekliği"],
                    satirlar: [
                        ["Sürekli sahada duran makine", "Günlük düzenli kullanım", "Tesiste konumlu", "Dönem sonunda gözden geçirme"],
                        ["Rezerve kapasite", "Öngörülebilir ama aralıklı talep", "Tuzla hub'da hazır", "Aylık revizyon mümkün"],
                        ["Çağrı bazlı takviye", "Ani ek ihtiyaç", "Bölge filosundan", "Talep anında"],
                        ["Karma filo", "Hem sabit hem değişken ihtiyaç", "Kısmen tesiste, kısmen hub'da", "Dönemsel ayarlama"],
                        ["Proje bazlı geçici artış", "Belirli süreli büyüme", "Hub'dan yönlendirme", "Proje sonunda otomatik düşüş"],
                    ],
                },
            },
            {
                baslik: "İMES komşuluğunun tedarik zincirine etkisi",
                paragraflar: [
                    "Dudullu OSB'nin İMES Sanayi Sitesi'ne komşu olması, filo tahsisinin işleyişini dolaylı biçimde kolaylaştırır: bölgede yoğun bir yedek parça, servis ve tali sanayi ağı bulunduğu için sahadaki bir makinenin küçük bir arızasında bile dışarıdan parça beklemek yerine bölge içinden hızlı çözüm bulunabilir. Bu, tahsisli filonun kullanılabilirlik oranını dolaylı yoldan yükselten bir etkendir — arıza süresi, parçanın nereden geleceğine değil çoğu zaman bölge içi tedarik hızına bağlıdır. Filo planlamasında bu yerel ağı bilmek, hangi sınıf makinenin bölgede tutulacağı kararını da etkiler.",
                    "Aynı yakınlık, tesisler arası makine geçişini de kolaylaştırır: Dudullu'daki bir tesiste iş biten makine, aynı bölgedeki başka bir tahsisli müşteriye uzun bir nakliye süreci olmadan yönlendirilebilir. Bu esneklik, dönem içi revizyonların hızını doğrudan artırır.",
                ],
            },
            {
                baslik: "Devreye alma: Dudullu'ya özgü adımlar",
                paragraflar: [
                    "Dudullu'daki bir sözleşmenin devreye alma döneminde önce tesisin OSB içi giriş prosedürü ve varsa kendi İSG oryantasyon süreci öğrenilir; bu prosedürler OSB yönetimine göre değil tesisin kendi güvenlik politikasına göre değişebildiği için genelleme yapılmaz, her tesis için ayrı kontrol edilir. Ardından tesisin çalışma alanları — kapalı üretim hattı, açık yükleme rampası, çatı erişim noktaları — gezilerek makine sınıfı kararları kesinleştirilir ve vardiya çizelgesine göre teslim-devir saatleri belirlenir.",
                    "Bu hazırlık genellikle birkaç iş günü içinde tamamlanır ve sözleşmenin ilk ayı bu plana göre işletilir; ilk ay sonunda kullanım verisiyle plan gözden geçirilir, gerekiyorsa filo büyüklüğü ilk revizyonla ayarlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sürekli filo tahsisi ile normal kiralama arasındaki temel fark nedir?",
                cevap:
                    "Normal kiralamada her ihtiyaç ayrı bir talep, ayrı bir teklif ve ayrı bir müsaitlik kontrolüdür; sürekli filo tahsisinde ise dönem başında belirlenen kapasite tesise ayrılmış durumdadır ve tesis bu kapasiteyi ihtiyaç doğdukça kullanır. Bunun somut sonucu üçtür: erişilebilirlik artar çünkü ayrılan kapasite başka müşteriye taahhüt edilmez, süreç kısalır çünkü her seferinde yeniden teklif toplanmaz, ve fiyat öngörülebilir hâle gelir çünkü birim fiyatlar dönem başında sabitlenir. Dudullu gibi sürekli üretim yapan bir bölgede bu fark, yoğun dönemde makine bulamama riskinin tamamen ortadan kalkması anlamına gelir. Kullanım hacminiz düzenliyse tahsis modeli neredeyse her zaman avantajlıdır; hacim çok düşükse bunu size açıkça söyleriz.",
            },
            {
                soru: "Tesisimiz Anadolu Yakası'nda, filo Avrupa Yakası'ndan mı geliyor?",
                cevap:
                    "Hayır, Dudullu'ya ayrılan filo Anadolu Yakası operasyon merkezimiz olan Tuzla'dan yönetilir. Bunun nedeni sadece coğrafi kolaylık değildir — köprü ve tünel geçişlerindeki trafik belirsizliği, sözleşmede yazılı bir müdahale süresini sahada anlamsız kılabilir. Anadolu Yakası'ndaki müşterilerimize Avrupa Yakası kapasitesinden hizmet vermeyi tercih etmeyiz, çünkü taahhüt ettiğimiz süreyi tutamama riskini bilerek almış oluruz. Dudullu'daki bir arızada ikame makine de aynı yakadaki kapasiteden gönderilir; bu, taahhüt edilen sürenin fiziksel bir karşılığı olması içindir.",
            },
            {
                soru: "Filo büyüklüğünü nasıl belirliyorsunuz, yanlış hesaplarsak ne olur?",
                cevap:
                    "Karar, tahminle değil geçmiş kullanım verinizle başlar — hangi ayda hangi sınıf makineye ne sıklıkta ihtiyaç duyduğunuzu birlikte inceleriz ve dönem boyunca ayrılacak kapasiteyi buna göre kurarız. Elinizde geçmiş veri yoksa ilk dönemi temkinli bir tahsisle başlatır, ilk birkaç ayın gerçek kullanımını izler ve buna göre ayarlarız. Yanlış hesaplama telafisiz bir hata değildir: filo tahsisi baştan revizyona kapalı bir yapı olarak kurulmaz, dönem içinde tesisin gerçek ihtiyacına göre büyütülür veya küçültülür ve bu, mevcut ticari şartlar üzerinden yazılı bir ek olarak yapılır. Sözleşmenin yeniden kurulmasına gerek kalmaz.",
            },
            {
                soru: "Vardiyalı çalışıyoruz, makine gece vardiyasında da kullanılabilir mi?",
                cevap:
                    "Evet, ve bunu sözleşmenin kurulma aşamasında tanımlarız. Teslim ve devir saatleri sizin vardiya çizelgenize göre yazılır: makine hangi vardiya değişiminde kime teslim edilir, günlük kontrol kaydını hangi vardiyanın sorumlusu tutar, mesai dışı bir acil talep hangi kanaldan açılır. Bu netlik olmadan vardiyalı bir tesiste makinenin iki vardiya arasında kimsenin sorumluluğunda olmadığı bir boşlukta kalması riski doğar — biz bunu devreye alma döneminde saha ziyaretiyle netleştirir, vardiya sorumlularının isimlerini ve iletişim kanallarını sözleşmeye ek olarak yazarız.",
            },
            {
                soru: "Dudullu'daki bölge içi yedek parça ve servis ağı bize nasıl fayda sağlıyor?",
                cevap:
                    "Dudullu'nun İMES Sanayi Sitesi'ne komşu olması, bölgede yoğun bir yedek parça ve servis ekosistemi bulunması anlamına gelir; bu, tahsisli filonuzda küçük bir arıza çıktığında dışarıdan parça beklemek yerine bölge içinden hızlı çözüm bulunabilmesini sağlar. Kullanılabilirlik oranınızı doğrudan etkileyen bir faktördür — arıza süresi çoğu zaman parçanın nereden geleceğine değil bölge içi tedarik hızına bağlıdır. Aynı yakınlık, dönem içi revizyonlarda da işe yarar: bölgedeki başka bir tahsisli müşteride açığa çıkan kapasite, uzun bir nakliye süreci olmadan sizin ihtiyacınıza yönlendirilebilir.",
            },
            {
                soru: "Sözleşme süresi boyunca fiyat sabit mi kalıyor?",
                cevap:
                    "Dönem başında belirlenen birim fiyatlar, sözleşmede yazılı bir taahhüt olarak dönem boyunca sabittir ve tek taraflı değiştirilemez. Filo revizyonu yapıldığında — yani makine sayısı arttırıldığında veya azaltıldığında — eklenen veya çıkarılan birimler için mevcut fiyat listesi esas alınır, yeniden pazarlık gerekmez. Çok yıllık sözleşmelerde ise fiyatın hangi tarihte ve hangi yönteme göre revize edileceği baştan yazılır; bu, keyfi bir zam değil önceden tanımlanmış bir mekanizmadır. Kapsam dışı bir kalemi sonradan fatura satırı hâline getirerek örtülü fiyat artışı yapmak bizim çalışma biçimimiz değildir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Dudullu OSB'nin İMES Sanayi Sitesi'ne komşuluğu ve bölgenin üretim yoğunluğu kamuya açık genel bilgidir; sürekli filo tahsisi, vardiya bazlı teslim düzeni ve dönem içi revizyon mekanizması firma pratiğidir.",
    },

    "bolge:silivri": {
        h1: "Silivri'de Kontratlı Platform Tedarikinin Lojistik Avantajı",
        giris:
            "Silivri, İstanbul'un batı ucunda, kentin yoğun merkezinden belirgin bir mesafede yer alan bir ilçedir ve bu mesafe, erişim ekipmanı tedarikinde göz ardı edilemeyecek bir maliyet kalemi doğurur. Tek seferlik bir kiralamada makinenin gidiş ve dönüş nakliyesi sabit bir maliyettir; bu maliyet kısa süreli bir kullanıma yayıldığında toplam faturanın önemli bir payını oluşturur — üç günlük bir kiralamada nakliye bedeli, kullanım bedeliyle neredeyse yarışabilir. Uzun dönem kontratlı tedarik bu dengeyi tersine çevirir: makine bir kez bölgeye gelir ve sözleşme süresi boyunca bölgede kalır, nakliye maliyeti tek seferlik kalemden dönem boyunca amorti olan bir kaleme dönüşür. Avrupa Yakası operasyon merkezimiz olan İkitelli'den Silivri'ye kadar olan mesafe, tekil taleplerde bir dezavantaj gibi görünse de, kontratlı bir ilişkide bu dezavantaj bir kez ödenip kapatılan bir maliyete indirgenir. Bu sayfa, Silivri'de sürekli veya düzenli ihtiyacı olan bir işletme için kontratlı tedarikin lojistik mantığını anlatır.",
        maddeler: [
            {
                baslik: "Mesafenin tek seferlik kiralamada gerçek maliyeti",
                metin:
                    "İkitelli'deki operasyon merkezimizden Silivri'ye bir makinenin gidip gelmesi, kentin merkezi ilçelerine göre belirgin ölçüde daha uzun sürer ve daha yüksek nakliye maliyeti doğurur. Tek günlük veya birkaç günlük bir talepte bu maliyet, kullanım süresine oranla yüksek kalır — makine sahada bir gün çalışsa da nakliyesi aynı gidiş-dönüş mesafesini kat eder. Bu durum Silivri'ye özgü değildir, her uzak lokasyonun tek seferlik kiralamada karşılaştığı yapısal bir gerçektir; ama Silivri'nin merkeze uzaklığı bu etkiyi belirgin kılacak kadar büyüktür. Fiyat teklifimizde bu kalemi gizlemeyiz, ayrı bir satır olarak gösteririz.",
            },
            {
                baslik: "Kontratlı modelde makinenin bölgede kalması",
                metin:
                    "Bir sözleşme kurulduğunda mantık değişir: makine bölgeye bir kez gelir, sözleşme süresi boyunca sahada veya bölge içinde konumlu kalır ve nakliye maliyeti dönem başına bir kez ödenir. Dönem içindeki her kullanım, ayrı bir nakliye gerektirmeden işletilir. Bu, kontratlı tedarikin Silivri gibi uzak bir bölgede tek seferlik kiralamaya göre en somut avantajıdır ve fiyat karşılaştırması yapılırken en çok gözden kaçan kalemdir — birim kira bedeli benzer görünse de, tek seferlik kiralamanın toplam maliyeti nakliye kalemiyle birlikte hesaplandığında kontratlı modelin lehine belirgin bir fark ortaya çıkar.",
            },
            {
                baslik: "Silivri'deki tarım-gıda ve lojistik depolarının sürekli ihtiyacı",
                metin:
                    "Silivri, İstanbul'un tarım ve gıda üretimine yakın bölgelerinden biridir ve ilçede depolama ve lojistik amaçlı tesisler de bulunur; bu tür tesislerde raf sistemleri, çatı ve cephe bakımı, aydınlatma yenilemesi gibi işler düzenli aralıklarla tekrarlanan bir ihtiyaçtır. Böyle bir tesis için erişim ekipmanı, yılda bir kez değil düzenli aralıklarla gereken bir kaynaktır ve bu düzenlilik, kontratlı tedarikin ekonomik olduğu tam noktadır. Düzenli ama yoğun olmayan bir talep profili için tahsisli sürekli makine yerine, bölgede konumlu rezerve kapasiteyle çalışan bir çerçeve sözleşme genellikle daha uygun maliyetlidir.",
            },
            {
                baslik: "Acil müdahalede mesafe riskinin azaltılması",
                metin:
                    "Sözleşmesiz bir müşterinin Silivri'de acil bir ihtiyacı doğduğunda, en yakın müsait makinenin nereden geleceği belirsizdir ve bu belirsizlik müdahale süresine doğrudan yansır. Kontratlı bir müşteri için durum farklıdır: sözleşme kurulduğunda bölgeye ayrılan kapasite zaten bölgede veya bölgeye yakın konumdadır, bu yüzden acil bir talepte beklenen süre, sözleşmede yazılı taahhüde göre şekillenir ve İkitelli'den her seferinde yeni bir sevkiyat planlanmasını beklemez. Mesafenin süre taahhüdünü zorlaştırdığı doğrudur; ama bu zorluk, kapasiteyi bölgeye önceden yaklaştırarak yönetilebilir hâle getirilir.",
            },
            {
                baslik: "Dönem içi kullanım artışında nakliye avantajının büyümesi",
                metin:
                    "Kontratlı bir müşterinin dönem içindeki kullanım sıklığı arttıkça, başlangıçta ödenen tek seferlik nakliye maliyetinin kullanım başına düşen payı küçülür. Yılda birkaç kez ihtiyaç duyan bir tesis için bu avantaj sınırlıdır; ama düzenli aralıklarla veya sürekli ihtiyaç duyan bir tesis için nakliye maliyeti, dönem sonunda kullanım bedeli içinde neredeyse görünmez hâle gelir. Bu yüzden Silivri'deki bir tesisle sözleşme görüşmesine başlarken önce kullanım sıklığını birlikte değerlendiririz — sıklık düşükse kontrat avantajı sınırlı kalır, bunu açıkça söyleriz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kiralama modeline göre nakliye maliyetinin dağılımı",
                paragraflar: [
                    "Silivri gibi merkeze uzak bir bölgede, kiralama modeline göre nakliye maliyetinin toplam faturaya etkisi aşağıdaki tabloda karşılaştırılmıştır. Süre uzadıkça nakliyenin payı küçülür; kontratlı modelde bu düşüş en belirgin seviyeye ulaşır.",
                ],
                tablo: {
                    basliklar: ["Model", "Nakliye ödeme sıklığı", "Kullanım süresine oranı", "Uygun kullanım profili"],
                    satirlar: [
                        ["Tek günlük kiralama", "Her talepte", "Çok yüksek", "Tek seferlik acil ihtiyaç"],
                        ["Haftalık kiralama", "Her talepte", "Yüksek", "Kısa süreli proje"],
                        ["Aylık kiralama", "Her talepte", "Orta", "Orta vadeli iş"],
                        ["Rezerve kapasiteli çerçeve", "Dönem başında bir kez", "Düşük", "Düzenli aralıklı ihtiyaç"],
                        ["Tahsisli sürekli makine", "Dönem başında bir kez", "En düşük", "Sürekli yüksek kullanım"],
                    ],
                },
            },
            {
                baslik: "Silivri OSB ve depo bölgelerinin ihtiyaç profili",
                paragraflar: [
                    "Silivri'de sanayi ve depolama amaçlı kullanılan alanların ihtiyaç profili, kentin merkezi OSB'lerinden farklı bir ritimde işler: talep genellikle daha az sıklıkta ama her seferinde daha planlanabilir biçimde doğar — mevsimsel bakım dönemleri, depo genişletme çalışmaları, periyodik çatı ve raf kontrolleri gibi önceden bilinen ihtiyaçlar öne çıkar. Bu ritim, tesadüfi acil taleplere göre kurulan bir filo yerine, önceden planlanmış bir rezervasyon takvimiyle çalışan bir çerçeve sözleşmeye daha uygundur. Sözleşme görüşmesinde tesisin yıllık bakım takvimini birlikte çıkarmayı öneririz; bu takvim, hem bizim kapasite planlamamızı hem sizin bütçenizi kolaylaştırır.",
                    "Planlanabilir talep, mesafe dezavantajını da telafi eder: bir bakım penceresi haftalar öncesinden bilindiğinde, makinenin bölgeye önceden konumlandırılması mümkün olur ve son dakika acil nakliyesine gerek kalmaz.",
                ],
            },
            {
                baslik: "Devreye alma: saha keşfi ve giriş prosedürleri",
                paragraflar: [
                    "Silivri'deki bir sözleşmenin ilk adımı, mesafe nedeniyle diğer bölgelere göre biraz daha kapsamlı planlanır: saha keşfi, tesisin erişim ihtiyaç envanterini çıkarmanın yanında, bölgeye en uygun makine konumlandırma noktasını da belirler. Tesisin giriş prosedürü, varsa özel güvenlik veya gıda-tarım tesislerine özgü hijyen kuralları öğrenilir ve personelimiz bu kurallara göre bilgilendirilir. Talep kanalı ve raporlama formatı bu dönemde netleştirilir; mesafe nedeniyle iletişimin gecikmeye tahammülü daha düşüktür, bu yüzden talep açma sürecinin baştan net olması burada özellikle önemlidir.",
                    "Bu hazırlığın amacı, mesafenin getirdiği dezavantajı sözleşmenin başında bir kez çözüp dönem boyunca tekrar gündeme gelmesini önlemektir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silivri'ye tek seferlik bir kiralama neden bu kadar pahalı çıkıyor?",
                cevap:
                    "Sebep birim kira bedeli değil nakliyedir. İkitelli'deki operasyon merkezimizden Silivri'ye bir makinenin gidip gelmesi, kentin merkezi bölgelerine göre belirgin ölçüde uzun bir mesafe kat eder ve bu mesafe sabit bir nakliye maliyeti doğurur. Kısa süreli bir kullanımda — örneğin birkaç günlük bir kiralamada — bu sabit maliyet, kullanım süresine oranla yüksek kalır çünkü nakliye bedeli kullanım gününe değil gidiş-dönüş mesafesine bağlıdır. Aynı makineyi bir ay kullansanız nakliye maliyeti değişmez ama kullanım süresine oranı belirgin biçimde küçülür. Fiyat teklifimizde nakliye kalemini ayrı gösteririz ki bu maliyetin nereden geldiği açık olsun.",
            },
            {
                soru: "Kontrat yaparsak nakliye maliyetinden nasıl tasarruf ediyoruz?",
                cevap:
                    "Kontratlı modelde makine bölgeye bir kez gelir ve sözleşme süresi boyunca bölgede veya bölgeye yakın bir noktada konumlu kalır; dönem içindeki her kullanım için ayrı bir gidiş-dönüş nakliyesi gerekmez. Bu, tek seferlik kiralamaların toplamına göre belirgin bir fark yaratır — özellikle düzenli aralıklarla tekrarlayan bir ihtiyacınız varsa. Somut tasarruf, kullanım sıklığınızla doğru orantılıdır: yılda birkaç kez ihtiyacınız varsa fark sınırlı kalır, düzenli veya sürekli ihtiyacınız varsa nakliye maliyeti dönem sonunda kullanım bedeli içinde neredeyse görünmez hâle gelir. Kullanım sıklığınızı birlikte değerlendirip size dürüst bir karşılaştırma sunarız.",
            },
            {
                soru: "Acil bir arıza veya ek ihtiyaç çıkarsa Silivri'ye ne kadar sürede ulaşırsınız?",
                cevap:
                    "Sözleşmesiz bir talepte bu süre, İkitelli'den yeni bir sevkiyat planlanmasına bağlı olduğu için belirsizlik taşır. Kontratlı bir müşteri için durum farklıdır: sözleşme kurulduğunda bölgeye ayrılan kapasite zaten bölgede veya bölgeye yakın bir noktada konumlandırılmıştır, bu yüzden acil bir talepte beklenen süre sözleşmede yazılı taahhüde göre şekillenir ve merkezden yeni bir sevkiyat beklemek zorunda kalmazsınız. Mesafenin süre taahhüdünü zorlaştırdığını gizlemiyoruz; bu zorluğu kapasiteyi önceden bölgeye yaklaştırarak yönetiyoruz ve taahhüt ettiğimiz süreyi buna göre belirliyoruz.",
            },
            {
                soru: "Yılda sadece iki-üç kez ihtiyacımız oluyor, yine de kontrat mantıklı mı?",
                cevap:
                    "Dürüst cevap, her zaman evet değildir. Kontratlı modelin nakliye avantajı kullanım sıklığıyla doğru orantılıdır; yılda iki-üç kez gibi düşük bir sıklıkta, dönem başında ödenen sabit maliyetler ile tek seferlik kiralamaların toplam nakliye gideri arasındaki fark sınırlı kalabilir. Bu durumda size kontrat yerine, ihtiyaçlarınızı önceden bildirdiğiniz bir rezervasyonlu çağrı düzenini öneririz — sözleşme yükü olmadan, talebiniz açıldığında öncelikli işlenen bir ilişki. Kullanım sıklığınız artarsa kontrata geçişi her zaman değerlendirebiliriz; başlangıçta size uymayan bir modeli önermeyiz.",
            },
            {
                soru: "Tesisimiz tarım-gıda üretimi yapıyor, özel hijyen kurallarımız var; buna uyum sağlıyor musunuz?",
                cevap:
                    "Evet, bu tür kurallar devreye alma döneminde saha keşfiyle birlikte öğrenilir ve personelimiz tesisinizin kurallarına göre bilgilendirilir. Gıda ve tarım tesislerinde sıkça karşılaştığımız gereksinimler arasında makinenin girişten önce temizlik veya dezenfeksiyon işlemine tabi tutulması, belirli alanlara erişimin kısıtlı olması ve personel için ayrı bir hijyen oryantasyonu bulunması yer alır. Bu kuralları genel bir prosedür olarak değil, sizin tesisinize özgü bir liste olarak kaydeder ve her sevkiyat öncesinde bu listeye göre hazırlık yaparız. Standart olmayan bir kuralınız varsa devreye alma döneminde bize bildirmeniz, sürecin ilk seferde doğru işlemesini sağlar.",
            },
            {
                soru: "Silivri'deki bir depo genişletme projesi için geçici ek kapasite alabilir miyiz?",
                cevap:
                    "Evet, sürekli sözleşmeniz olsun olmasın, proje bazlı geçici kapasite artışı mümkündür. Mevcut kontratınız varsa, proje süresi için gerekli ek makine sınıfları ve adetleri mevcut ticari şartlar üzerinden bir ek olarak sözleşmeye eklenir ve proje bittiğinde filo otomatik olarak eski seviyesine iner. Sözleşmeniz yoksa, projenin süresini ve kapsamını görüp bölgeye özel bir teklif hazırlarız; proje birden fazla haftaya yayılıyorsa, tek seferlik günlük kiralamalar yerine proje süresine özel bir fiyatlandırma genellikle daha ekonomiktir çünkü nakliye maliyeti proje başına bir kez hesaplanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Silivri'nin İstanbul'un batı ucundaki konumu ve merkeze olan mesafesi kamuya açık genel bilgidir; nakliye maliyetinin kiralama süresine oranı ve kontratlı tedarikin lojistik mantığı firma pratiğidir.",
    },

    "bolge:ambarli-liman": {
        h1: "Ambarlı Limanı Ardiye Operasyonlarına Dönemsel Platform Tahsisi",
        giris:
            "Ambarlı Limanı, İstanbul'un Avrupa Yakası'ndaki en yoğun konteyner ve ro-ro trafiğine sahip liman bölgelerinden biridir ve buna bağlı ardiye alanları — depolama sahaları, antrepo binaları, yükleme-boşaltma tesisleri — talep yoğunluğu sabit kalmayan bir işleyişe sahiptir. Gemi trafiğinin yoğunlaştığı dönemlerde ardiye sahalarındaki erişim ekipmanı ihtiyacı hızla artar; durgun dönemlerde ise aynı ihtiyaç belirgin biçimde geriler. Bu dalgalanmayı sabit bir filoyla veya tek seferlik kiralamalarla karşılamaya çalışmak iki ayrı sorun doğurur: sabit bir filo durgun dönemde atıl kapasite olarak maliyet üretir, tek seferlik kiralama ise yoğun dönemde makine bulma riskini artırır. Bizim Ambarlı bölgesindeki çalışma biçimimiz, Avrupa Yakası operasyon merkezimiz İkitelli'den yönetilen dönemsel tahsis modelidir: ardiye operasyonunun yıl içindeki yoğunluk döngüsüne göre kapasite önceden planlanır, yoğun döneme girmeden filo büyütülür, durgun dönemde ihtiyaç fazlası kapasite bölgedeki başka müşterilere yönlendirilir. Bu sayfa, liman ardiyesi operasyonlarına dönemsel tahsisin nasıl kurulduğunu anlatır.",
        maddeler: [
            {
                baslik: "Liman trafiğinin ardiye ihtiyacına yansıması",
                metin:
                    "Ambarlı'daki ardiye sahalarının erişim ekipmanı ihtiyacı, doğrudan liman trafiğinin ritmiyle ilişkilidir: gemi sayısının arttığı dönemlerde depolama sahalarında yükleme-boşaltma yoğunlaşır, raf ve istifleme sistemlerinin bakımı sıklaşır, geçici depolama alanlarının aydınlatma ve işaretleme düzenlemeleri daha sık elden geçer. Bu dönemlerde erişim ekipmanına duyulan ihtiyaç, sabit bir aylık ortalamanın oldukça üzerine çıkabilir. Durgun dönemde ise aynı ihtiyaç normal seviyesine iner. Dönemsel tahsis modeli, bu dalgalanmayı önceden öngörülen bir plan olarak ele alır; sürpriz olarak değil.",
            },
            {
                baslik: "Dönemsel tahsis modelinin işleyişi",
                metin:
                    "Sözleşme kurulduğunda tesisin yıl içindeki yoğunluk döngüsü birlikte incelenir ve buna göre iki seviyeli bir kapasite planı yapılır: normal dönemde sahada tutulan temel filo ve yoğun döneme girmeden önce devreye alınan ek kapasite. Ek kapasitenin ne zaman devreye gireceği, geçmiş dönem verisine veya tesisin kendi operasyonel öngörüsüne göre önceden tanımlanır; talep son anda açılmaz, planlanmış bir tarihte otomatik olarak büyür. Yoğun dönem sona erdiğinde ek kapasite bölgedeki başka tahsisli müşterilere yönlendirilir ve tesisin faturası normal seviyesine döner.",
            },
            {
                baslik: "Liman sahası güvenlik ve giriş prosedürlerine uyum",
                metin:
                    "Liman sahalarında çalışan tesisler, genel sanayi tesislerinden farklı bir güvenlik rejimine tabidir; liman güvenlik düzenlemeleri kapsamında personel giriş kartı, araç ve ekipman kayıt süreci ve bazı bölgelerde ek güvenlik taraması uygulanabilir. Bu prosedürler kamuya açık genel liman güvenlik uygulamalarıdır ve tesise göre farklılık gösterebilir; bu yüzden her sözleşme öncesinde tesisin kendi güvenlik biriminden hangi belgelerin ve sürecin isteneceği netleştirilir. Operatörlerimizin liman sahasına giriş için gereken belgeleri süresi dolmadan yenilemesi, sözleşme boyunca bizim sorumluluğumuzdur.",
            },
            {
                baslik: "Ardiye binalarında yükseklik ve erişim ihtiyacı",
                metin:
                    "Antrepo ve depolama binalarının yüksek raf sistemleri, çatı yapıları ve aydınlatma donanımı, düzenli aralıklarla erişim gerektiren unsurlardır. Bu tür binalarda çalışma alanı genellikle dar koridorlar ve yoğun istifleme arasında sıkışır, bu yüzden makine sınıfı seçimi zemin ve koridor genişliğine göre özenle yapılır. Kapalı antrepo hacimlerinde akülü ve düşük emisyonlu makineler tercih edilir; açık saha ve yükleme rampalarında ise dizel veya daha yüksek erişimli sınıflar devreye girer. Bu ayrımı sözleşme kurulurken saha tipine göre önceden tanımlarız.",
            },
            {
                baslik: "Gemi bekleme sürelerine bağlı ani talep",
                metin:
                    "Liman operasyonlarının doğasında, gemi varış ve kalkış programlarına bağlı ani değişiklikler vardır; bir geminin beklenenden erken veya geç gelmesi, ardiye sahasındaki iş yoğunluğunu birkaç gün içinde değiştirebilir. Dönemsel tahsis planı bu tür kısa vadeli dalgalanmaları da hesaba katacak şekilde bir miktar esneklik payı içerir — planlı ek kapasitenin yanında, kısa süreli ani talepler için bölge filosundan hızlı takviye alınabilir. Bu esneklik, sözleşmede ayrı bir madde olarak tanımlanır ve dönemsel plana ek bir kalem olarak fiyatlandırılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yıl içi yoğunluk dönemlerine göre filo stratejisi",
                paragraflar: [
                    "Ambarlı bölgesindeki ardiye operasyonlarında yıl içi yoğunluk dönemine göre uyguladığımız filo stratejisi ve bu stratejiyi belirleyen etkenler aşağıdaki tabloda özetlenmiştir. Kesin dönemler her sözleşmede tesisin kendi trafik verisine göre yazılır.",
                ],
                tablo: {
                    basliklar: ["Dönem tipi", "Talep karakteri", "Filo stratejisi", "Planlama ufku"],
                    satirlar: [
                        ["Normal dönem", "Sabit temel ihtiyaç", "Temel filo sahada", "Sürekli"],
                        ["Yoğun trafik dönemi", "Ani ve yüksek", "Planlı ek kapasite devreye girer", "Önceden belirlenmiş tarih"],
                        ["Durgun dönem", "Düşük", "Fazla kapasite bölgeye yönlendirilir", "Dönem sonu değerlendirme"],
                        ["Gemi gecikmesi kaynaklı ani talep", "Kısa süreli ve öngörülemez", "Bölge filosundan hızlı takviye", "Talep anında"],
                        ["Antrepo bakım penceresi", "Planlanabilir", "Rezervasyonlu çağrı", "Haftalar öncesinden"],
                    ],
                },
            },
            {
                baslik: "Liman güvenlik ve giriş uyumunun sözleşmeye yansıması",
                paragraflar: [
                    "Liman sahalarında çalışmanın idari yükü, genel sanayi tesislerine göre daha ağırdır: personel giriş kartlarının süresi takip edilmeli, araç ve ekipman kayıtları güncel tutulmalı, bazı bölgelerde ek güvenlik taraması süreçlerine uyulmalıdır. Bu yükü müşteriye değil kendimize alırız — operatörlerimizin giriş belgelerini kendi takvimimize göre yeniler, süresi dolmadan yenileme sürecini başlatırız. Sözleşme metninde de bu sorumluluk açıkça bizim üzerimize yazılır; tesisin, her sevkiyat öncesinde operatör belgelerini kontrol etmek zorunda kalmaması amaçlanır.",
                    "Devreye alma döneminde tesisin kendi güvenlik biriminden hangi sürecin isteneceği netleştirilir ve bu süreç, sözleşme boyunca değişmediği sürece tekrar sorulmaz; liman idaresinin genel kurallarında bir değişiklik olursa bunu takip etmek de bizim sorumluluğumuzdadır.",
                ],
            },
            {
                baslik: "Dönemsel tahsisin ticari yapısı",
                paragraflar: [
                    "Dönemsel tahsis, sabit bir aylık bedelden farklı kurulur: temel filo için dönem boyunca sabit bir birim fiyat, planlı ek kapasite için önceden tanımlanmış bir devreye girme bedeli ve ani takviye için ayrı bir çağrı bazlı fiyat olmak üzere üç katmanlı bir yapı kullanılır. Bu yapının amacı, durgun dönemde atıl kapasite için ödeme yapmamanızı, yoğun döneme girerken ise kapasite bulamama riskiyle karşılaşmamanızı sağlamaktır. Dönem sonunda gerçekleşen kullanım verisiyle bir sonraki yılın yoğunluk tahmini birlikte gözden geçirilir ve plan buna göre ince ayar yapılır.",
                    "Bu ticari yapı, ilk sözleşme döneminde tahmin üzerine kurulsa da, her dönem sonunda gerçek veriyle güncellenerek zamanla tesisin gerçek ihtiyacına daha yakın bir plana dönüşür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yoğun dönemde ek makineyi ne zaman devreye alıyorsunuz?",
                cevap:
                    "Ek kapasitenin devreye girme tarihi, sözleşme kurulurken tesisin geçmiş dönem verisine veya operasyonel öngörüsüne göre önceden tanımlanır — talep son anda açılmaz, planlanmış bir tarihte otomatik olarak büyür. Bu, hem bizim kapasiteyi önceden hazırlamamızı hem sizin bütçenizi önceden planlamanızı sağlar. Öngörülen tarihte gerçek trafik beklenenden farklı çıkarsa, planı birkaç gün önceden bildirimle esnetebiliriz; ama bu esneklik, sözleşmesiz bir müşterinin son anda kapasite aramasıyla aynı riski taşımaz çünkü zaten bölgeye ayrılmış bir temel kapasite üzerine ekleme yapılır.",
            },
            {
                soru: "Durgun dönemde fazla kapasite için ödeme yapıyor muyuz?",
                cevap:
                    "Hayır, bu tam olarak dönemsel tahsisin çözdüğü sorundur. Yoğun dönem için planlanan ek kapasite, durgun döneme girildiğinde sizin filonuzdan çıkar ve bölgedeki başka tahsisli müşterilere yönlendirilir; siz sadece temel filo için sabit bedel ödemeye devam edersiniz. Bu esneklik sözleşmede yazılı bir mekanizmadır, bizim inisiyatifimize bırakılmaz — hangi tarihte ek kapasitenin düşeceği, temel filonun ne olduğu baştan tanımlıdır. Amacımız, sabit bir filo tutmanın atıl kapasite maliyetini size değil bölgesel kapasite planlamamıza yüklemektir.",
            },
            {
                soru: "Liman sahasına giriş için özel bir güvenlik süreci var, sizin operatörleriniz buna hazır mı?",
                cevap:
                    "Evet, ve bu hazırlığı sözleşme öncesinde tamamlarız. Liman sahalarında yaygın olan personel giriş kartı, araç-ekipman kayıt süreci ve bazı bölgelerdeki ek güvenlik tarama uygulamaları, devreye alma döneminde tesisinizin güvenlik biriminden öğrenilir ve operatörlerimiz bu sürece göre hazırlanır. Belgelerin süresini takip etmek ve süresi dolmadan yenilemek bizim sorumluluğumuzdadır; sözleşme metninde bu açıkça yazılır. Böylece her sevkiyat öncesinde sizin operatör belgelerini kontrol etmek zorunda kalmanız beklenmez.",
            },
            {
                soru: "Bir geminin gecikmesi yüzünden aniden ek makineye ihtiyacımız olursa ne yaparsınız?",
                cevap:
                    "Bu tür kısa süreli ani talepler için dönemsel plana ayrı bir esneklik payı ekleriz: planlı ek kapasitenin yanında, bölge filosundan hızlı bir takviye kanalı tanımlıdır. Bu takviye, ayrı ve çağrı bazlı bir fiyatla işletilir çünkü önceden planlanan kapasiteden farklı bir maliyet yapısı taşır; ama sözleşmeniz olduğu için önceliğiniz sözleşmesiz bir talebe göre daha yüksektir ve bölgede zaten konumlu kapasiteden hızlı biçimde karşılanır. Bu maddeyi sözleşme görüşmesinde ayrıca ele alır, sizin liman trafiğinizin ne kadar öngörülemez olduğuna göre esneklik payını birlikte belirleriz.",
            },
            {
                soru: "Antrepo binalarımızda dar koridorlar var, hangi makine sınıfını öneriyorsunuz?",
                cevap:
                    "Antrepo ve depolama binalarındaki dar koridorlar ve yoğun istifleme, makine sınıfı seçimini doğrudan belirler; öncelik dar alanlarda manevra kabiliyeti yüksek, kapalı hacimde kullanıma uygun akülü ve düşük emisyonlu sınıflardır. Açık saha ve yükleme rampalarında ise daha yüksek erişimli veya dizel sınıflar daha uygun olabilir. Doğru kararı vermek için devreye alma döneminde antrepo binalarınızı gezer, koridor genişliği ve raf yüksekliğine göre sınıf listesini birlikte çıkarırız. Yanlış sınıf seçimi, sahada hem verimsizlik hem güvenlik riski yaratır; bu yüzden bu kararı ilk sözleşme görüşmesinde değil, saha ziyaretinden sonra kesinleştiririz.",
            },
            {
                soru: "Dönemsel tahsis planını her yıl yeniden mi kuruyorsunuz?",
                cevap:
                    "İlk yıl, elinizdeki veriye göre bir tahminle kurulur; ama her dönem sonunda gerçekleşen kullanım verisiyle plan gözden geçirilir ve bir sonraki yılın yoğunluk tahmini bu veriye dayanarak güncellenir. Zamanla plan, sizin gerçek liman trafiğinize daha yakın hâle gelir — yoğun dönemin başlangıç tarihi, ek kapasitenin büyüklüğü ve durgun dönemin süresi, ilk yıldaki tahminden daha isabetli olur. Bu gözden geçirmeyi sözleşme yenileme görüşmesinden ayrı, dönem içinde de yaparız; liman trafiğinde yapısal bir değişiklik olduğunu fark ettiğimizde bunu size bildiririz, dönem sonunu beklemeyiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Ambarlı Limanı'nın Avrupa Yakası'ndaki konteyner ve ro-ro trafiği yoğunluğu ile liman sahalarında genel güvenlik/giriş uygulamaları kamuya açık bilgidir; dönemsel tahsis modeli ve üç katmanlı ticari yapı firma pratiğidir.",
    },

    "bolge:istanbul-deri-osb": {
        h1: "İstanbul Deri OSB'de (Tuzla) Periyodik Bakım Kontratlı Platform Hizmeti",
        giris:
            "Tuzla'daki İstanbul Deri Organize Sanayi Bölgesi, adından da anlaşılacağı gibi tekstil ve deri sanayisine ihtisaslaşmış bir bölgedir ve bu ihtisas niteliği, bölgedeki tesislerin bakım ihtiyacını genel bir sanayi bölgesinden farklı kılar. Deri işleme ve konfeksiyon üretiminin yürütüldüğü kapalı hacimlerde çalışma ortamı, kimyasal kokusu ve nem gibi etkenler taşıyabilir; bu ortamda çalışacak ekipmanın seçimi ve bakım periyodunun düzenliliği, genel bir üretim tesisine göre daha dikkat ister. Bizim bu bölgedeki çalışma biçimimiz, tek seferlik çağrılara dayanmaz — tesisin çatı, cephe, aydınlatma ve havalandırma sistemlerine yönelik erişim ihtiyacını periyodik bakım kontratı olarak kurarız: önceden belirlenmiş tarihlerde, önceden tanımlanmış kapsamda, tekrar eden bir bakım takvimi. Operasyon merkezimiz Tuzla'da olduğu için bölgeye yakınlığımız, planlı bakım pencerelerinin sapmadan işlemesini kolaylaştırır. Bu sayfa, İstanbul Deri OSB'deki bir tesisle periyodik bakım kontratının nasıl kurulduğunu anlatır.",
        maddeler: [
            {
                baslik: "İhtisas OSB'sinin bakım ihtiyacına özgü niteliği",
                metin:
                    "İstanbul Deri OSB, genel sanayi bölgelerinden farklı olarak tek bir sektöre — deri ve tekstil üretimine — ihtisaslaşmış bir bölgedir ve bu, tesislerin bina yapısında ve bakım ihtiyacında ortak bir örüntü doğurur: kapalı ve geniş üretim hacimleri, yoğun aydınlatma ihtiyacı, havalandırma ve nem kontrol sistemlerinin sık kontrol gerektirmesi. Bu örüntü, bölgedeki farklı tesislerin benzer bakım takvimlerine ihtiyaç duyması anlamına gelir ve bu ortaklık, bölgesel bir bakım kontratı kurgusunu kolaylaştırır — aynı dönemde birden fazla tesise planlı bakım hizmeti verebiliriz.",
            },
            {
                baslik: "Periyodik bakım kontratı: önceden belirlenmiş takvim",
                metin:
                    "Periyodik bakım kontratı, tek seferlik çağrıdan temel olarak farklıdır: dönem başında hangi ayda hangi bakım işinin yapılacağı — çatı kontrolü, aydınlatma armatürü değişimi, havalandırma kanalı erişimi, cephe temizliği — yazılı bir takvime bağlanır. Tesis, hangi ayda makinenin sahada olacağını önceden bilir ve üretim planını buna göre ayarlayabilir; biz de kapasitemizi bu takvime göre önceden ayırırız. Bu düzen, hem tesisin hem bizim tarafımızda beklenmedik bir talep gibi işlemez — planlı bir operasyon gibi işler.",
            },
            {
                baslik: "Tuzla hub'a yakınlığın planlı bakıma etkisi",
                metin:
                    "Periyodik bakım kontratının en kritik özelliği, planlanan tarihte sapmadan gerçekleşmesidir; bir bakım penceresi ertelendiğinde, bir sonraki pencereye kadar geçen süre tesisin bakım açığını büyütür. Anadolu Yakası operasyon merkezimizin Tuzla'da, İstanbul Deri OSB'ye yakın bir konumda olması, planlanan tarihte makinenin sahada olmasını kolaylaştırır — uzun bir yol mesafesi veya köprü geçişi belirsizliği, planlı tarihi tehdit eden bir risk faktörü olmaktan çıkar. Bu yakınlık, sözleşmede yazılı bakım takviminin bir formalite değil gerçekten işleyen bir taahhüt olmasını sağlar.",
            },
            {
                baslik: "Kapalı üretim hacimlerinde akülü makine tercihi",
                metin:
                    "Deri ve tekstil üretiminin yürütüldüğü kapalı hacimlerde egzoz emisyonu ve gürültü, üretim ortamını doğrudan etkileyen faktörlerdir; bu yüzden bu tür alanlarda çalışacak erişim ekipmanının akülü ve düşük gürültülü sınıflardan seçilmesi genel bir sektör pratiğidir. Bölgedeki tesislerle çalışırken bu tercihi baştan konuşuruz — hangi hacimde akülü makaslı platformun, hangi alanda ise dış cephe için dizel eklemli platformun uygun olduğunu saha ziyaretiyle belirleriz. Kapalı hacimde yanlış makine sınıfı seçmek, sadece verimsizlik değil üretim ortamının kalitesini etkileyen bir risktir.",
            },
            {
                baslik: "OSB yönetimiyle koordineli yıllık bakım takvimi",
                metin:
                    "İstanbul Deri OSB gibi organize bir bölgede, tesislerin bakım çalışmaları çoğu zaman bölge yönetiminin genel takvimiyle de örtüşür — ortak alan çalışmaları, mevsimsel kontroller veya bölge geneli denetim dönemleri. Periyodik bakım kontratı kurarken tesisin kendi takvimini bu genel çerçeveyle çakıştırmamaya özen gösteririz; örneğin bölge genelinde yoğun bir dönemde birden fazla tesisin aynı haftada bakım talep etmesi olasıdır, bu yüzden takvimi mümkün olduğunca erken netleştirir ve kapasite çakışmasını önceden yönetiriz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Periyodik bakım tipleri ve önerilen sıklık",
                paragraflar: [
                    "İstanbul Deri OSB'deki tesislerde en sık kurduğumuz periyodik bakım kontratı kalemleri, önerilen sıklıkları ve kullanılan makine sınıfları aşağıdaki tabloda özetlenmiştir. Kesin takvim, tesisin bina yapısına ve üretim yoğunluğuna göre birlikte belirlenir.",
                ],
                tablo: {
                    basliklar: ["Bakım kalemi", "Önerilen sıklık", "Uygun makine sınıfı", "Ortam duyarlılığı"],
                    satirlar: [
                        ["Çatı ve dış cephe kontrolü", "Yılda 2 kez", "Eklemli platform", "Açık alan, ortam duyarlılığı düşük"],
                        ["İç mekân aydınlatma bakımı", "Yılda 2-4 kez", "Akülü makaslı platform", "Kapalı hacim, düşük emisyon şart"],
                        ["Havalandırma kanalı erişimi", "Yılda 2 kez", "Akülü dikey platform", "Kapalı hacim, dar alan"],
                        ["Depo raf sistemi kontrolü", "Yılda 1-2 kez", "Forklift + akülü platform", "Kapalı hacim"],
                        ["Bölge genel denetim öncesi hazırlık", "Denetim takvimine göre", "Karma filo", "OSB takvimiyle koordineli"],
                    ],
                },
            },
            {
                baslik: "İhtisas bölgesinin tedarikçi seçimine etkisi",
                paragraflar: [
                    "Tek bir sektöre ihtisaslaşmış bir OSB'de çalışmak, tedarikçiden farklı bir bilgi birikimi bekler: deri ve tekstil üretim ortamının kimyasal ve nem duyarlılığını bilmeyen bir tedarikçi, yanlış makine sınıfını önerebilir veya bakım periyodunu ortamın gerçek aşınma hızına göre değil genel bir sektör ortalamasına göre belirleyebilir. Bölgedeki tesislerle tekrar eden bir ilişki kurmak, bu bilgi birikimini zamanla derinleştirir — hangi bina tipinde hangi bakım kaleminin daha sık gerektiğini, hangi alanların ortam duyarlılığının yüksek olduğunu saha deneyimiyle öğreniriz.",
                    "Bu birikimi yeni bir tesisle çalışmaya başlarken de kullanırız: bölgedeki benzer bina tiplerinden edindiğimiz genel bilgiyi, yeni tesisin kendi saha keşfiyle doğrulayıp bakım takvimini ona göre kurarız — genel bilgiyi doğrulanmamış varsayım olarak sunmayız.",
                ],
            },
            {
                baslik: "Tuzla hub'dan planlı bakım lojistiği",
                paragraflar: [
                    "Periyodik bakım kontratının lojistik tarafı, tek seferlik kiralamadan farklı planlanır: yıllık takvimde yer alan her bakım penceresi, Tuzla'daki operasyon merkezimizde önceden bir sevkiyat planına dönüştürülür ve o hafta hangi makinenin hangi tesise gideceği, önceki haftadan hazırlanır. Bu, son dakika planlama belirsizliğini ortadan kaldırır ve planlı tarihte sapma riskini düşürür. Bölgeye yakınlığımız sayesinde aynı hafta içinde birden fazla tesise planlı bakım hizmeti verebiliriz, bu da bölgesel kapasiteyi verimli kullanmamızı sağlar.",
                    "Beklenmedik bir gecikme yaşandığında — örneğin bir önceki bakımın öngörülenden uzun sürmesi — bunu takip eden tesise önceden haber veririz; sessiz bir gecikme yerine, revize edilmiş bir tarih iletişimini tercih ederiz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Periyodik bakım kontratı ile ihtiyaç oldukça çağırmak arasındaki fark nedir?",
                cevap:
                    "Periyodik bakım kontratında hangi ayda hangi bakım işinin yapılacağı dönem başında yazılı bir takvime bağlanır; siz üretim planınızı bu takvime göre kurarsınız, biz kapasitemizi buna göre ayırırız. İhtiyaç oldukça çağırmakta ise her talep ayrı bir süreçtir — makine müsaitliği, fiyat ve zamanlama her seferinde yeniden belirlenir. Bakım ihtiyacınız yılın belirli dönemlerinde tekrar eden bir örüntü gösteriyorsa — ki deri ve tekstil üretim tesislerinde genellikle gösterir — periyodik kontrat hem öngörülebilirlik hem de genellikle daha uygun bir toplam maliyet sağlar. İhtiyacınız gerçekten düzensizse bunu size açıkça söyleriz, kontratı zorlamayız.",
            },
            {
                soru: "Kapalı üretim alanımızda kimyasal koku var, hangi makine sınıfını öneriyorsunuz?",
                cevap:
                    "Deri ve tekstil üretiminin yürütüldüğü kapalı hacimlerde egzoz emisyonu ve gürültü üretim ortamını doğrudan etkileyebileceği için, bu tür alanlarda akülü ve düşük gürültülü makine sınıfları tercih edilir — bu, sektörde yaygın bir genel pratiktir. Hangi model ve hangi sınıfın sizin hacminize uygun olduğu, saha ziyaretiyle belirlenir: tavan yüksekliği, zemin durumu ve havalandırma sisteminin kapasitesi karara girer. Dış cephe veya çatı gibi açık alanlarda ise ortam duyarlılığı düşük olduğu için dizel eklemli platformlar daha uygun olabilir. Bu ayrımı sözleşme kurulmadan önce netleştirir, yanlış sınıf seçiminin üretim ortamınızı etkilemesini önleriz.",
            },
            {
                soru: "Tuzla'daki merkeziniz bize ne kadar avantaj sağlıyor?",
                cevap:
                    "Periyodik bakım kontratının en kritik özelliği, planlanan tarihte sapmadan gerçekleşmesidir; bir bakım penceresi ertelendiğinde bir sonraki pencereye kadar geçen süre bakım açığınızı büyütür. Operasyon merkezimizin Tuzla'da, İstanbul Deri OSB'ye yakın bir konumda olması, planlanan tarihte makinenin sahada olmasını kolaylaştırır — uzun bir yol mesafesi veya trafik belirsizliği, planlı tarihi tehdit eden bir risk olmaktan çıkar. Bu yakınlık ayrıca beklenmedik bir ek talep çıktığında da hızlı müdahaleyi kolaylaştırır; sözleşmede yazılı takvimin sadece kâğıt üzerinde değil sahada gerçekten işlemesini sağlayan asıl unsur budur.",
            },
            {
                soru: "Bölge genelinde denetim dönemi geldiğinde bakım takvimimiz nasıl etkilenir?",
                cevap:
                    "İstanbul Deri OSB gibi organize bir bölgede, bölge geneli denetim dönemlerinde birden fazla tesisin aynı haftalarda bakım talep etmesi olasıdır; biz bu riski önceden yönetiriz. Sözleşme kurulurken tesisinizin bakım takvimini bölgenin genel döngüsüyle mümkün olduğunca çakışmayacak şekilde planlarız; eğer bölge genelinde yoğun bir dönem öngörüyorsak bunu size önceden bildirir, gerekirse takviminizi biraz öne veya arkaya çekmeyi öneririz. Denetim öncesi hazırlık talebiniz son dakika gelirse, mevcut takvimimizdeki müsaitliğe göre önceliklendirme yaparız ama bunun garantisini veremeyiz — bu yüzden erken planlamayı öneririz.",
            },
            {
                soru: "Bakım takvimini yıl içinde değiştirebilir miyiz?",
                cevap:
                    "Evet, takvim baştan kesin bir taahhüt değil, gözden geçirilebilir bir plandır. Üretim yoğunluğunuz değişirse, yeni bir bina alanı devreye girerse veya bir bakım kaleminin sıklığının yetersiz kaldığını fark ederseniz, takvimi yazılı bir revizyonla güncelleriz. Değişiklik için sözleşmenin yeniden kurulmasına gerek yoktur, mevcut ticari şartlar üzerinden takvim satırları eklenir veya çıkarılır. Tek istediğimiz, değişikliği bir sonraki bakım penceresinden yeterince önce bildirmenizdir — bu, bizim kapasite planlamamızın da sağlıklı işlemesini sağlar.",
            },
            {
                soru: "Periyodik bakım kontratının fiyatı sabit mi, yoksa her seferinde mi belirleniyor?",
                cevap:
                    "Dönem başında, yıllık bakım takviminde yer alan her kalem için birim fiyat belirlenir ve bu fiyatlar dönem boyunca sabittir; her bakım penceresinde yeniden fiyat görüşmesi yapılmaz. Takvim dışında çıkan beklenmedik bir ihtiyaç — örneğin öngörülmeyen bir arıza onarımı sonrası ek kontrol — ayrı bir kalem olarak, önceden belirlenmiş çağrı bazlı fiyatla işletilir. Bu ayrım sözleşmede net yazılır: hangi işler yıllık takvimin parçası, hangileri kapsam dışı ek talep. Kapsamı net tutmak, dönem sonunda beklenmedik bir fatura kalemiyle karşılaşmamanızı sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. İstanbul Deri OSB'nin Tuzla'daki konumu ve deri-tekstil sanayisine ihtisaslaşmış OSB niteliği kamuya açık genel bilgidir; kapalı hacimde akülü makine tercihi sektör standardı genel bilgidir, periyodik bakım takvimi kurgusu ve OSB takvimiyle koordinasyon firma pratiğidir.",
    },

    // ─────────────────────────────────────────────────────────────────────
    // HİZMET SAYFALARI — aynı TEDARİK KONTRATI açısı korunur, her sınıf
    // kontrat mimarisinin farklı bir maddesini/riskini konu edinir.
    // Yazım: 2026-08-14.
    // ─────────────────────────────────────────────────────────────────────

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Çerçeve Sözleşmede Sepetli / Örümcek Platform Kalemi",
        giris:
            "Bir çerçeve sözleşmenin fiyat listesi hazırlanırken en çok tartışılan satırlardan biri sepetli örümcek platformdur — çünkü bu sınıf, diğer makine sınıfları gibi düzenli ve öngörülebilir bir talep üretmez. Bir tesiste yılda birkaç kez, genellikle dar bir kapıdan geçmesi gereken, hassas bir zeminde çalışması gereken veya vinç erişimi olmayan bir noktaya ulaşması gereken özel bir iş çıktığında devreye girer. Satın alma tarafında bu durum bir soruyu doğurur: yıllık kullanım hacmi düşük ve düzensiz bir sınıfı, düzenli kullanılan sınıflarla aynı sözleşme mantığıyla mı fiyatlandırmalı? Bizim kurumsal müşterilerle kurduğumuz çerçevelerde cevap nettir — sepetli örümcek platform, fiyat listesinde ayrı bir kalem olarak durur, çağrı bazlı çalışır ve asgari kullanım taahhüdüne dahil edilmez; çünkü bu sınıfı taahhüde bağlamak, gerçekleşmeyecek bir hacmi sözleşmeye yazmak anlamına gelir. Bu sayfa, bu özel sınıfın bir kurumsal tedarik sözleşmesinde nasıl konumlandığını, hangi kapsam maddelerinin bu sınıfa özgü yazıldığını ve fiyat listesindeki yerinin neden farklı kurulduğunu anlatır.",
        maddeler: [
            {
                baslik: "Kapsam maddesinde 'özel erişim sınıfı' tanımı",
                metin:
                    "Sözleşme metninde sepetli örümcek platform, standart makaslı veya eklemli sınıflardan ayrı bir başlık altında, 'özel erişim sınıfı' olarak tanımlanır ve bu tanımın altına hangi koşulların bu sınıfı tetiklediği yazılır: kapı veya koridor genişliği belirli bir eşiğin altında olan geçişler, hassas iç mekân zeminleri, vinç veya araç erişimi bulunmayan iç avlu ve atrium işleri. Bu tanımın amacı, talep açıldığında hangi sınıfın devreye gireceği konusunda saha ile satın alma arasında yorum farkı bırakmamaktır — 'dar bir yerde çalışacağız' ifadesi tek başına yeterli değildir, kapsam maddesi somut eşikler ister.",
            },
            {
                baslik: "Çağrı bazlı fiyatlama, taahhütsüz kapasite",
                metin:
                    "Düzenli kullanılan sınıflarda dönem fiyatı sabitlenir ve kullanım hacmi tahmin edilerek kapasite ayrılır; sepetli örümcek platformda bu mantık işlemez çünkü talep önceden kestirilemez. Bunun yerine birim fiyat dönem başında sabitlenir ama kullanım taahhüdü aranmaz — müşteri sadece gerçekten ihtiyaç duyduğu dönemde talep açar ve o dönemin fiyatı zaten sözleşmede yazılıdır. Bu yapı iki tarafı da korur: müşteri kullanmadığı bir kapasite için bedel ödemez, biz de düzensiz talebi zorla düzenli taahhüde bağlamaya çalışmayız.",
            },
            {
                baslik: "Karşılama süresi neden farklı yazılır",
                metin:
                    "Sürekli tahsisli bir makine sahada dururken karşılama süresi dakikalarla ölçülebilir; sepetli örümcek platform çağrı bazlı çalıştığı için karşılama süresi sözleşmede ayrı ve daha gerçekçi bir pencereyle tanımlanır. Bu farkı gizlemeyiz — düzenli sınıflarla aynı hızlı karşılama vaadini bu sınıfa yazmak, tutmayacağımız bir taahhüt vermek olurdu. Bunun yerine, iş programınızda bu tür bir ihtiyacı önceden görebiliyorsanız (örneğin planlı bir tesisat işi), talebi birkaç gün önceden açmanızı öneririz; bu, karşılama süresini fiilen sıfıra indiren en pratik yöntemdir.",
            },
            {
                baslik: "Zemin ve geçiş bilgisinin sözleşme öncesi paylaşılması",
                metin:
                    "Bu sınıfın seçilme nedeni neredeyse her zaman bir fiziksel kısıttır — kapı genişliği, kat yüksekliği, zemin hassasiyeti veya erişim yolu. Devreye alma döneminde tesisin saha dosyasına bu ölçüleri özellikle işleriz, çünkü sepetli örümcek platform talebi geldiğinde doğru modelin ilk seferde gönderilmesi bu bilgiye bağlıdır. Ölçü paylaşılmadan açılan bir talep, sahada ikinci bir keşif gerektirebilir ve bu, karşılama süresini uzatan en yaygın nedendir.",
            },
            {
                baslik: "Diğer sınıflarla birlikte kullanılan işlerde kapsam çakışması",
                metin:
                    "Bazı işlerde sepetli örümcek platform tek başına değil, örneğin bir çelik konstrüksiyon montajının dar bir bölümünde eklemli platformla birlikte kullanılır. Böyle durumlarda kapsam maddesinde hangi işin hangi sınıfla yürütüleceği net yazılır, aksi hâlde fatura satırında hangi kalemin hangi işe karşılık geldiği tartışma konusu olur. Karma iş taleplerinde bu ayrımı teklif aşamasında birlikte çıkarırız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Fiyat listesindeki konumu: düzenli sınıflarla karşılaştırma",
                paragraflar: [
                    "Çerçeve sözleşmenin fiyat listesinde sınıfların taahhüt ve fiyatlama mantığı birbirinden farklıdır. Aşağıdaki tablo, sepetli örümcek platformun bu listedeki yerini düzenli kullanılan sınıflarla karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["Sınıf", "Kullanım düzeni", "Taahhüt", "Karşılama süresi mantığı"],
                    satirlar: [
                        ["Sepetli örümcek platform", "Düzensiz, özel iş", "Taahhütsüz, çağrı bazlı", "Standart pencere, erken bildirimle kısalır"],
                        ["Makaslı platform", "Düzenli, tekrarlayan", "Asgari taahhüt önerilir", "Kısa, tahsisli kapasiteye bağlı"],
                        ["Eklemli platform (boom)", "Düzenli, proje bazlı olabilir", "Değişken, işe göre", "Orta, proje takvimine göre planlanır"],
                        ["Tahsisli makine (herhangi sınıf)", "Sürekli", "Yüksek taahhüt", "Sahada zaten mevcut, süre neredeyse yok"],
                    ],
                },
            },
            {
                baslik: "Sözleşme görüşmesinde bu kalemi nasıl ele alırız",
                paragraflar: [
                    "Devreye alma döneminde müşteriye doğrudan sorduğumuz bir soru vardır: geçmiş bir-iki yılda kaç kez dar geçit, hassas zemin veya vinç erişimi olmayan bir noktaya erişim ihtiyacınız oldu? Cevap 'hiç hatırlamıyorum' ise bu kalemi fiyat listesine yazarız ama üzerinde durmayız — gerçek ihtiyaç doğduğunda zaten oradadır. Cevap somut ve tekrarlayan bir örüntü gösteriyorsa (örneğin belirli bir bina bloğunun periyodik tesisat bakımı), bu kalemi ayrı bir alt-takvime bağlayıp öngörülebilir hâle getirmeyi öneririz.",
                    "Bu yaklaşımın nedeni basittir: bir müşteriye ihtiyacından fazla taahhüt sattığımızda, ilk yenileme döneminde bu fazlalık fark edilir ve güven kaybına dönüşür. Sepetli örümcek platform gibi düzensiz bir sınıfı zorla düzenli bir kaleme dönüştürmek, kısa vadede ciro gibi görünse de uzun vadede sözleşme ilişkisine zarar verir.",
                ],
            },
            {
                baslik: "Personel yeterliliği ve sözleşme eki",
                paragraflar: [
                    "Sepetli örümcek platform, uzaktan kumandalı ve kompakt yapısı nedeniyle operatör yeterliliği açısından da ayrı bir madde gerektirir; standart makaslı platform eğitimi bu sınıf için otomatik olarak yeterli sayılmaz. Sözleşme ekinde, bu sınıfın operatörlü mü yoksa müşteri personeliyle mi kullanılacağı ve ikinci durumda hangi yeterlilik belgesinin arandığı yazılır. Kurumsal müşterilerin İSG departmanı bu maddeyi genellikle dikkatle inceler; biz de belgeyi talep etmeden önce kendi tarafımızdaki standart seti paylaşırız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sepetli örümcek platformu asgari kullanım taahhüdüne dahil etmemizi ister misiniz?",
                cevap:
                    "Genellikle önermeyiz. Bu sınıfın kullanım örüntüsü düzensiz olduğu için taahhüt yazmak, ya müşteriyi kullanmayacağı bir hacme bağlar ya da bizi karşılayamayacağımız bir kapasite ayırmaya zorlar. İstisna, geçmiş verinizde gerçekten tekrarlayan bir ihtiyaç görüyorsak — örneğin belirli bir bina bloğunun periyodik iç tesisat bakımı bu sınıfı düzenli olarak gerektiriyorsa, o zaman bu alt-kalemi ayrı bir taahhütle sözleşmeye yazarız. Genel kuralımız, taahhüdü gerçek veriye dayandırmak, varsayıma dayandırmamaktır.",
            },
            {
                soru: "Bu sınıfın karşılama süresi diğer sınıflardan neden daha uzun yazılıyor?",
                cevap:
                    "Çünkü bu sınıf için sahada sürekli tahsisli kapasite tutmuyoruz — talep düzensiz olduğu için bu ekonomik olmazdı. Düzenli sınıflarda kısa karşılama süresi, o sınıfın zaten belirli bir kapasitede hazır tutulmasından gelir; sepetli örümcek platformda ise talep geldiğinde uygun modelin müsaitliği kontrol edilip yönlendirilir. Bu farkı sözleşmede gizlemek yerine açıkça yazarız, çünkü tutmayacağımız bir süre taahhüdü vermek güveni zedeler. Planlı bir iş için birkaç gün önceden bildirim yaparsanız, fiilen bu süreyi ortadan kaldırabiliriz.",
            },
            {
                soru: "Aynı fatura döneminde hem eklemli platform hem sepetli örümcek platform kullandık; kalemler nasıl ayrışıyor?",
                cevap:
                    "Fiyat listesinde her sınıfın kendi birim fiyatı ve fiyatlama mantığı ayrı yazılıdır, bu yüzden karışık bir iş yapıldığında da fatura satır bazında ayrışır — hangi tarihte, hangi sınıf, hangi süre kullanıldığı ayrı ayrı görünür. Karma bir işte hangi bölümün hangi sınıfla yürütüleceğini teklif aşamasında netleştiririz, böylece fatura döneminde sürpriz bir kalem çıkmaz. Belirsiz kalan tek nokta, işin sahada beklenenden farklı ilerlemesi hâlinde sınıf değişikliği olursa; bu durumda değişikliği önceden bildiririz, faturaya geriye dönük bir kalem eklemeyiz.",
            },
            {
                soru: "Bu makineyi kendi personelimiz kullanabilir mi, yoksa operatör şart mı?",
                cevap:
                    "İkisi de mümkündür ama sözleşme ekinde hangi seçeneğin uygulanacağı yazılmalıdır. Kendi personelinizin kullanması durumunda, bu sınıfa özgü yeterlilik belgesinin geçerli olması istenir — standart makaslı platform sertifikası bu sınıf için otomatik yeterli sayılmaz, çünkü kumanda ve hareket mantığı farklıdır. Belgeniz yoksa operatörlü kullanım önerilir ve bu, ayrı bir fiyat kalemi olarak sözleşmeye yazılır. Devreye alma döneminde personelinizin mevcut yeterliliğini birlikte gözden geçirir, gerekiyorsa saha içi bilgilendirme yaparız.",
            },
            {
                soru: "Sık kullanmadığımız bu sınıfı fiyat listesine yazmanın bize bir maliyeti var mı?",
                cevap:
                    "Hayır. Fiyat listesine bir sınıfın yazılması, o sınıfı kullanmaya mecbur bırakmaz veya sabit bir bedel doğurmaz — sadece ihtiyaç doğduğunda hangi fiyatla karşılaşacağınızı önceden bilmenizi sağlar. Asıl amaç, ihtiyaç çıktığında yeniden teklif toplama sürecine girmemenizdir; fiyat zaten sözleşmede yazılıdır, talebi açtığınız an işleme girer. Kullanmadığınız dönemler için herhangi bir bedel tahakkuk etmez.",
            },
            {
                soru: "Dar bir geçitten geçemeyen bir işimiz çıkarsa ve elinizde uygun model yoksa ne olur?",
                cevap:
                    "Bu ihtimali sözleşme görüşmesinde açıkça konuşuruz çünkü bu sınıfın modelleri arasında şase genişliği ve uzanma mesafesi bakımından fark vardır ve her ölçüye her zaman uygun model bulunmayabilir. Devreye alma döneminde tesisinizin tipik geçiş ölçülerini önceden alır, bu ölçülere uygun modelin filo içinde ve ihtiyaç anında müsait olup olmadığını değerlendiririz. Eğer belirli bir ölçü bizim mevcut model setimizin dışındaysa bunu baştan söyleriz; taahhüt edemeyeceğimiz bir işi sözleşmeye yazıp sonra karşılayamamak, hem sizin hem bizim için daha kötü bir sonuçtur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sepetli örümcek platformun paletli/uzaktan kumandalı yapısı ve dar geçit erişimi sektör standardı genel bilgidir; bu sınıfın çerçeve sözleşmede taahhütsüz/çağrı bazlı ele alınması, karşılama süresi farkı ve fiyat listesi konumu firma pratiğidir.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Kontrat Kapsamında Nakliye ve Teslimat Maddesi",
        giris:
            "Kurumsal bir tedarik sözleşmesinde nakliye, çoğu zaman hafife alınan ama fiyat tartışmasının en sık çıktığı maddedir. Sorun basittir: bir teklifte 'nakliye dahildir' yazması, tek başına yeterli bir kapsam tanımı değildir — hangi mesafeye kadar dahil olduğu, mesai dışı teslimatın ayrı ücretlendirilip ücretlendirilmediği, birden fazla lokasyona aynı gün teslimat yapılıyorsa bunun nasıl fiyatlandığı, teslimat gecikmesinin hizmet seviyesi taahhüdünü nasıl etkilediği yazılmadığı sürece, dönem içinde mutlaka bir anlaşmazlık üretir. Bizim çerçeve sözleşmelerimizde nakliye ayrı bir madde olarak, kendi kapsam sınırları ve kendi hizmet seviyesiyle yazılır — çünkü nakliye, makinenin kendisi kadar sözleşmenin işleyişini belirleyen bir unsurdur. Bir makine ne kadar uygun olursa olsun, teslimat süresi karşılama süresi taahhüdünün bir parçasıdır ve bu ikisini ayrı düşünmek mümkün değildir. Bu sayfa, nakliye ve teslimat maddesinin bir kurumsal sözleşmede nasıl kurulduğunu anlatır.",
        maddeler: [
            {
                baslik: "Kapsam sınırının coğrafi ve saatlik tanımı",
                metin:
                    "Sözleşmede nakliye kapsamı iki eksende tanımlanır: coğrafi sınır (hangi bölge veya mesafe standart kapsamda, hangisi ek ücretli) ve zaman sınırı (mesai saatleri içi standart, mesai dışı ve resmî tatil ayrı kalem). Bu iki eksen yazılmadan verilen 'nakliye dahildir' ifadesi, dönem içinde en sık tartışılan maddeye dönüşür. Devreye alma döneminde müşterinin lokasyon listesini alır, her lokasyonu bu iki eksene göre sözleşme ekine işleriz.",
            },
            {
                baslik: "Karşılama süresi taahhüdüyle bağlantısı",
                metin:
                    "Hizmet seviyesi maddesinde tanımlanan karşılama süresi, makinenin depoda hazır olmasından değil, sahaya fiilen ulaşmasından itibaren ölçülür — bu yüzden nakliye kapasitemiz, verdiğimiz süre taahhüdünün altında yatan gerçek kısıttır. Bir bölgeye taahhüt ettiğimiz süre, o bölgeye ayırdığımız nakliye kapasitesiyle desteklenmelidir; aksi hâlde kâğıt üzerinde iyi görünen bir taahhüt, ilk yoğun günde tutmaz. Bu nedenle nakliye planlaması, sözleşme fiyatlandırmasından önce değil, fiyatlandırmayla birlikte yapılır.",
            },
            {
                baslik: "Çok lokasyonlu teslimatlarda önceliklendirme",
                metin:
                    "Aynı gün birden fazla lokasyona teslimat gerektiğinde, hangi teslimatın önce yapılacağı sözleşmede tanımlı bir mantığa göre belirlenir — öncelik sınıfına göre mi (acil talep önce), yoksa rota mantığına göre mi (coğrafi olarak sıralı teslimat). Karma bir düzen de mümkündür: acil talepler önceliklendirilir, geri kalan teslimatlar rota verimliliğine göre sıralanır. Bu mantığı sözleşme görüşmesinde konuşuruz, çünkü aksi takdirde 'bizim teslimatımız neden ikinci sıraya kaldı' sorusu her seferinde yeniden tartışılır.",
            },
            {
                baslik: "Teslim alma prosedürü ve tutanak",
                metin:
                    "Nakliye maddesinin görünmeyen ama önemli bir parçası, teslim alma prosedürüdür. Makine sahaya ulaştığında kim imza atacak, hasar kontrolü kim tarafından yapılacak, kullanım öncesi kısa kontrol listesi kimin sorumluluğunda — bu adımlar sözleşme ekinde tanımlanır. Bu prosedür yazılı olmadığında, dönem sonunda bir hasar veya eksiklik iddiası ortaya çıktığında hangi tarafın ne zaman teslim aldığı belirsiz kalır ve anlaşmazlık büyür.",
            },
            {
                baslik: "İade ve geri alım süreci",
                metin:
                    "Teslimat maddesinin ayna görüntüsü geri alımdır ve genellikle daha az dikkat çeker ama aynı derecede önemlidir: kullanım süresi dolduğunda geri alım talebi ne kadar sürede karşılanır, sahada geciken bir geri alım hangi tarafa ek maliyet yükler. Sözleşmemizde geri alım da bir hizmet seviyesi maddesi olarak yazılır, sadece teslimat değil.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Nakliye kapsamı: standart ve ek ücretli durumlar",
                paragraflar: [
                    "Nakliye maddesinin sözleşmede nasıl ayrıştığını, hangi durumun standart kapsamda hangisinin ek kalem olduğunu aşağıdaki tabloda özetledik. Sözleşme görüşmesinde bu tabloyu birlikte doldurup lokasyon listenize uyarlarız.",
                ],
                tablo: {
                    basliklar: ["Durum", "Kapsam", "Fiyatlama mantığı", "Sözleşmede tanımlanan nokta"],
                    satirlar: [
                        ["Mesai içi standart teslimat", "Standart kapsam", "Birim fiyata dahil", "Kapsam bölgesi sınırı"],
                        ["Mesai dışı / tatil teslimatı", "Ek kalem", "Ayrı çağrı bazlı fiyat", "Hangi saatlerin mesai dışı sayıldığı"],
                        ["Aynı gün çoklu lokasyon", "Standart, önceliklendirilir", "Rota mantığına göre sıralanır", "Öncelik kriteri"],
                        ["Kapsam dışı mesafe", "Ek kalem", "Mesafe bazlı ek ücret", "Kapsam sınırının kendisi"],
                        ["Geciken geri alım", "Hizmet seviyesi maddesi", "Taahhüde bağlı", "Geri alım karşılama süresi"],
                    ],
                },
            },
            {
                baslik: "Nakliye kapasitesinin kontrat taahhüdünü nasıl belirlediği",
                paragraflar: [
                    "Bir hizmet seviyesi taahhüdü verirken, altında somut bir kaynak durmalıdır ve nakliye tarafında bu kaynak araç ve şoför kapasitesidir. Bir bölgeye kısa karşılama süresi taahhüt ediyorsak, bu taahhüdün arkasında o bölgeye ayrılmış düzenli bir nakliye kapasitesi vardır; taahhüt ile kapasite arasında bu bağ kurulmadan verilen sürelerin ilk yoğun dönemde tutmadığını biliriz. Bu yüzden sözleşme öncesinde, taahhüt edeceğimiz bölgelerin nakliye kapasitesini kendi içimizde kontrol ederiz.",
                    "Bu yaklaşımın müşteri için pratik bir sonucu vardır: bir bölgeye verdiğimiz süre taahhüdü, o bölgede gerçekten karşılanabilir bir sayıdır, pazarlık masasında iyi görünsün diye yazılmış bir rakam değildir. Karşılanamayacağını bildiğimiz bir süreyi yazmayız.",
                ],
            },
            {
                baslik: "Teslimat verisinin raporlanması",
                paragraflar: [
                    "Dönem raporunda teslimat performansı ayrı bir başlık olarak yer alır: talep açılış zamanı, teslimat zamanı, hedef süreyle karşılaştırma ve varsa gecikme nedeni. Bu veri, sadece bizim performansımızı değil, sizin talep açma alışkanlığınızı da gösterir — örneğin bazı lokasyonların talebi son dakika açtığı görülebilir, bu da teslimat süresini fiilen daraltan bir davranıştır. Bu raporu birlikte incelemek, dönem içinde her iki tarafın da davranışını iyileştirmesine yardımcı olur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Nakliye ücreti fiyata dahil mi, ayrı mı faturalanıyor?",
                cevap:
                    "Bu, sözleşmede tanımlanan kapsam bölgesine bağlıdır. Belirlenen standart kapsam alanı içindeki mesai içi teslimatlar birim fiyata dahildir ve ayrıca faturalanmaz. Kapsam dışı mesafeler, mesai dışı veya resmî tatil teslimatları ise ayrı kalem olarak, önceden belirlenmiş birim fiyatla faturalanır. Bu ayrımı sözleşme ekinde net yazarız, böylece dönem sonunda 'bu neden ek ücretli çıktı' sorusu gelmez — kapsam ve istisnalar baştan bellidir.",
            },
            {
                soru: "Aynı gün üç farklı lokasyona teslimat istersek hangisi önce gelir?",
                cevap:
                    "Sözleşmede tanımlanan önceliklendirme mantığına göre belirlenir. Eğer taleplerden biri acil sınıfa giriyorsa (üretimi durduran bir arıza gibi) o önce karşılanır; kalan teslimatlar rota verimliliğine göre sıralanır, yani coğrafi olarak birbirine yakın olanlar aynı tur içinde art arda yapılır. Bu mantığı devreye alma döneminde sizinle konuşur, lokasyonlarınızın kendi içindeki öncelik sıralamasını da (varsa) sözleşmeye yazarız. Belirsiz bir önceliklendirme, en çok şikayet üreten noktalardan biridir; bu yüzden bunu tesadüfe bırakmayız.",
            },
            {
                soru: "Makine teslim alınırken hasar tespiti yapılmazsa ne olur?",
                cevap:
                    "Sözleşme ekinde tanımlanan teslim alma prosedürü tam olarak bu riski önlemek için vardır: makine sahaya ulaştığında kısa bir kontrol listesi üzerinden hasar ve eksiklik kontrolü yapılır ve karşılıklı imzalanır. Bu adım atlanırsa, dönem sonunda bir hasar iddiası çıktığında hasarın teslimattan önce mi sonra mı oluştuğu belirsiz kalır ve bu, iki taraf için de tatsız bir tartışmaya dönüşür. Bu yüzden teslim alma prosedürünü sözleşmenin isteğe bağlı değil zorunlu bir maddesi olarak yazarız.",
            },
            {
                soru: "Kullanım süresi bitince makineyi hemen mi geri alıyorsunuz?",
                cevap:
                    "Geri alım talebi açıldığında, sözleşmede tanımlanan geri alım hedef süresi içinde makineyi çekeriz; bu süre genellikle teslimat süresinden farklı ve biraz daha esnek yazılır çünkü aciliyeti farklıdır. Geri alımın gecikmesi hâlinde ek kullanım bedeli kimin sorumluluğunda olduğu sözleşmede tanımlanır — eğer gecikme bizim tarafımızdaki bir planlama sorunundan kaynaklanıyorsa ek bedel talep etmeyiz; makinenin sahada tutulması sizin talebinizden kaynaklanıyorsa (örneğin işin uzaması) bu durum ayrıca fiyatlanır.",
            },
            {
                soru: "Kapsam dışı bir mesafeye teslimat gerekirse fiyatı önceden mi öğreniyoruz?",
                cevap:
                    "Evet. Kapsam sınırının dışında kalan mesafeler için mesafe bazlı ek ücret sözleşme ekinde önceden yazılıdır, talep anında yeniden pazarlık yapılmaz. Bu, hem sizin bütçe planlamanız hem bizim operasyon planlamamız için önemlidir — kapsam dışı bir talep geldiğinde ne kadar ek maliyet doğacağını her iki taraf da önceden bilir. Kapsam sınırının kendisi de dönemsel gözden geçirmede yeniden değerlendirilebilir; lokasyon profiliniz değişirse sınırı birlikte güncelleriz.",
            },
            {
                soru: "Teslimat performansımızı nasıl takip edebiliyoruz?",
                cevap:
                    "Dönem raporunda teslimat performansı ayrı bir başlık olarak yer alır: her talebin açılış zamanı, gerçekleşen teslimat zamanı, hedef süreyle karşılaştırma ve varsa gecikme nedeni listelenir. Bu raporu istediğiniz sıklıkta (aylık özet, dönemsel ayrıntılı) alabilirsiniz. Rapor size sadece bizim performansımızı değil, kendi talep açma alışkanlığınızı da gösterir — bazı ekiplerin talebi son dakikada açtığı görülebilir, bu da fiilen karşılama süresini daraltan bir davranıştır ve raporda bu örüntü ortaya çıkar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Nakliye kapsamının mesai içi/dışı ve mesafe bazlı ayrımı sektör standardı genel bilgidir; teslim alma prosedürü, önceliklendirme mantığı ve geri alım maddesi kurgusu firma pratiğidir.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Karma Filo Sözleşmesinde Forklift Kalemi",
        giris:
            "Kurumsal bir tesisin erişim ekipmanı ihtiyacı nadiren tek bir makine sınıfıyla sınırlıdır — bir depo veya üretim tesisinde yüksekte çalışma platformu kadar, palet taşıma ve istifleme için forklift de düzenli bir ihtiyaçtır. Bu iki ihtiyacı ayrı tedarikçilerle, ayrı sözleşmelerle karşılamak, satın alma tarafında gereksiz bir tedarikçi çoğalmasına yol açar; oysa aynı çerçeve sözleşme altında karma bir fiyat listesiyle her iki sınıf da yönetilebilir. Bizim yaklaşımımız budur: forklift, çerçeve sözleşmenin fiyat listesinde platform sınıflarıyla yan yana, kendi birim fiyatı ve kendi hizmet seviyesiyle yer alır. Bu, müşteriye tek sözleşme, tek muhatap ve tek fatura düzeni sağlarken, her sınıfın kendine özgü kullanım mantığını (forkliftte kapasite ve ataşman, platformda erişim yüksekliği) de korur. Bu sayfa, forklift kaleminin bir kurumsal tedarik sözleşmesinde nasıl tanımlandığını ve hangi maddelerin bu sınıfa özgü yazıldığını anlatır.",
        maddeler: [
            {
                baslik: "Kapasite ve ataşman listesinin sözleşme ekine yazılması",
                metin:
                    "Platform sınıflarında belirleyici ölçüt erişim yüksekliğiyken, forklift sınıfında belirleyici ölçüt kaldırma kapasitesi ve ataşman tipidir. Sözleşme ekinde, tesisinizin tipik yük profiline göre hangi kapasite sınıflarının kapsamda olduğu ve hangi ataşmanların (standart çatal, yan kaydırmalı, döner kafa gibi) fiyat listesine dahil edildiği yazılır. Bu liste, ihtiyaç çıktığında yeniden teklif almadan hangi ekipmanın hangi fiyatla geleceğini önceden bilmenizi sağlar.",
            },
            {
                baslik: "İç mekân ve dış saha ayrımı",
                metin:
                    "Forklift kaleminde en sık karışan nokta, iç mekân (depo içi, kapalı hacim) ile dış saha kullanımının aynı makineyle karşılanamamasıdır — kapalı hacimde egzoz emisyonu ve gürültü kısıtı vardır, dış sahada ise zemin ve hava koşulu farklı bir lastik ve tahrik tercihini gerektirir. Sözleşmede bu iki kullanım tipi ayrı kalem olarak yazılır ve hangi lokasyonun hangi tipe girdiği baştan netleştirilir; aksi hâlde yanlış makine sınıfının gönderilmesi hem verimsizlik hem güvenlik riski yaratır.",
            },
            {
                baslik: "Operatör yeterliliği ve mevzuat kaydı",
                metin:
                    "Forklift operatörlüğü, platform operatörlüğünden farklı bir mevzuat çerçevesine tabidir ve bu fark sözleşme ekinde ayrıca yazılır. Kendi personelinizle çalışacaksanız operatör belgelerinin sözleşme dosyasında güncel tutulması istenir; operatörlü kullanım tercih edilirse bu ayrı bir fiyat kalemidir. Personel devrinin yüksek olduğu depo operasyonlarında, belge takibinin sözleşme kapsamına dahil edilmesi (kimin hangi belgeyi ne zaman yenilediğinin izlenmesi) pratikte büyük fayda sağlar.",
            },
            {
                baslik: "Yoğun dönem kapasite planlaması",
                metin:
                    "Depo ve lojistik operasyonlarında forklift talebi genellikle mevsimsel veya kampanya bazlı dalgalanır — yılsonu, kampanya dönemi veya stok sayımı gibi dönemlerde talep aniden artar. Sözleşmede bu tür öngörülebilir yoğun dönemler için önceden bildirim yükümlülüğü ve buna karşılık ek kapasite rezervasyonu maddesi yazılır. Öngörülemeyen ani bir talep artışında ise elimizdeki genel kapasiteye göre karşılama yapılır, ancak bunun garantisi taahhüt edilmez — bu farkı sözleşmede açıkça belirtiriz.",
            },
            {
                baslik: "Periyodik bakım ve iş güvenliği kontrolü",
                metin:
                    "Forklift, sürekli yük altında çalışan bir ekipman olduğu için periyodik kontrol takvimi platform sınıflarına göre daha sık işletilir. Sözleşmede bu takvim ve kontrol raporlarının hangi sıklıkla müşteriyle paylaşılacağı yazılır; kurumsal tesislerin İSG denetimlerinde bu raporlar sıklıkla istenir, bu yüzden güncel tutulmaları sadece bizim değil sizin de yükümlülüğünüzü kolaylaştırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Forklift sınıflarının karma filo listesindeki yeri",
                paragraflar: [
                    "Bir kurumsal fiyat listesinde forklift sınıflarının tipik kullanım profili ve dikkat edilmesi gereken sözleşme maddesi aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Sınıf", "Tipik kullanım", "Belirleyici özellik", "Sözleşmede dikkat edilecek madde"],
                    satirlar: [
                        ["Dizel forklift", "Dış saha, ağır yük", "Kapasite, zemin uygunluğu", "İç mekân kullanımı hariç tutulmalı"],
                        ["Elektrikli/akülü forklift", "Kapalı depo içi", "Emisyonsuz, düşük gürültü", "Şarj altyapısı sorumluluğu"],
                        ["Yan kaydırmalı ataşman", "Dar koridorlu depo", "Koridor genişliği uyumu", "Ataşman listesine ek fiyat"],
                        ["Reach truck / yüksek istifleme", "Yüksek raf sistemleri", "Raf yüksekliği", "Zemin düzlüğü koşulu"],
                    ],
                },
            },
            {
                baslik: "Depo operasyonlarında karma talebin yönetimi",
                paragraflar: [
                    "Depo ve lojistik tesislerinde forklift talebi genellikle platform talebinden bağımsız hareket eder — biri stok hareketiyle, diğeri bakım ve tesisat işiyle ilgilidir. Ama aynı sözleşme altında yönetildiğinde satın alma tarafında tek bir dönem raporu, tek bir tedarikçi değerlendirmesi ve tek bir yenileme görüşmesi yeterli olur. Bu, özellikle çok lokasyonlu depo ağlarında satın alma biriminin idari yükünü belirgin şekilde azaltır.",
                    "Uygulamada karma filo sözleşmelerinin en sık sorduğumuz sorusu şudur: forklift ve platform ihtiyacınız aynı ekip tarafından mı yönetiliyor, yoksa depo operasyon ekibi ile bakım ekibi ayrı mı çalışıyor? Cevaba göre talep açma yetkisini ve raporlama formatını farklı kurarız; tek bir formatı iki farklı ekibe zorlamak, pratikte kullanılmayan bir sisteme dönüşür.",
                ],
            },
            {
                baslik: "Yoğun dönem rezervasyonunun işleyişi",
                paragraflar: [
                    "Öngörülebilir yoğun dönemler (yılsonu, kampanya, stok sayımı) için rezervasyon maddesi şöyle işler: müşteri, dönem başında bilinen yoğun tarihleri bize bildirir, biz bu tarihler için ek kapasiteyi önceden ayırırız. Bildirim ne kadar erken yapılırsa, o kadar geniş bir kapasite havuzundan ayırma şansımız olur. Son dakika gelen bir yoğun dönem talebinde ise elimizdeki serbest kapasiteye göre karşılarız, ancak bunu bir taahhüt olarak değil, iyi niyet çabası olarak sunarız — bu farkı sözleşmede net yazmak, dönem sonunda beklenti uyumsuzluğunu önler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forklift ve platform ihtiyacımızı tek sözleşmede birleştirmenin somut faydası ne?",
                cevap:
                    "Üç somut fayda var. Birincisi idari: tek tedarikçi onay süreci, tek fatura düzeni, tek yenileme görüşmesi — ayrı sözleşmelerle çalışmanın idari yükü ortadan kalkar. İkincisi raporlama: dönem raporunda tüm erişim ve taşıma ekipmanı harcamanızı tek yerde görürsünüz, bu bütçe planlamasını kolaylaştırır. Üçüncüsü pazarlık gücü: toplam hacim tek sözleşmede birleştiğinde, birim fiyatlar genellikle ayrı sözleşmelere göre daha avantajlı kurulabilir. Buna karşılık her sınıfın kendi hizmet seviyesi ve fiyat mantığı korunur — birleştirme, sınıflar arası farkı gizlemez.",
            },
            {
                soru: "Depo içinde dizel forklift kullanabilir miyiz, yoksa zorunlu olarak elektrikli mi olmalı?",
                cevap:
                    "Kapalı hacimlerde egzoz emisyonu ve gürültü nedeniyle elektrikli veya akülü forklift standart tercihtir ve sözleşme ekinde iç mekân kullanımı için bu sınıf tanımlanır. Dizel forklift, havalandırması yeterli olmayan kapalı alanlarda çalışma güvenliği açısından uygun değildir; bu konuda esneklik göstermeyiz. Kapalı hacminizin havalandırma kapasitesi ve tavan yüksekliği hakkında belirsizlik varsa, bunu devreye alma döneminde birlikte değerlendirir, uygun sınıfı netleştiririz.",
            },
            {
                soru: "Yılsonu stok sayımı gibi yoğun dönemlerde ek forklift garantisi veriyor musunuz?",
                cevap:
                    "Garanti, bildirim süresine bağlıdır. Dönem başında bilinen yoğun tarihleri bize bildirirseniz, o tarihler için ek kapasiteyi önceden rezerve ederiz ve bu bir taahhüttür. Son dakika gelen, önceden bildirilmemiş bir yoğun talep için ise elimizdeki serbest kapasiteye göre karşılamaya çalışırız ama bunu taahhüt olarak sunmayız — çünkü o tarihte başka müşterilerin de benzer ihtiyacı olabilir. Yılsonu gibi öngörülebilir dönemleri erken bildirmenizi bu yüzden özellikle öneririz.",
            },
            {
                soru: "Operatör belgelerimizin süresi dolarsa bunu takip ediyor musunuz?",
                cevap:
                    "Sözleşme ekinde bu takibi isteğe bağlı olarak dahil edebiliriz — personelinizin forklift operatör belgelerinin geçerlilik tarihlerini kendi takvimimize alır, süresi yaklaşanlar için sizi önceden uyarırız. Bu, özellikle personel devrinin yüksek olduğu depo operasyonlarında pratik bir fayda sağlar; belge süresi dolmuş bir personelin makineyi kullanması hem mevzuata hem sigortaya aykırı bir risktir ve bunu fark etmeden yaşamak istemezsiniz. Bu maddeyi dahil etmek isteyip istemediğinizi sözleşme görüşmesinde sorarız.",
            },
            {
                soru: "Dar koridorlu rafımıza uygun forklift bulamazsak ne oluyor?",
                cevap:
                    "Devreye alma döneminde raf koridor genişliğinizi ve raf yüksekliğinizi ölçtürür, bu ölçülere uygun sınıfı (yan kaydırmalı ataşman, reach truck gibi) fiyat listesine ayrı kalem olarak ekleriz. Eğer koridor genişliğiniz bizim mevcut model setimizin dışındaysa bunu baştan söyleriz; taahhüt edemeyeceğimiz bir kapasiteyi sözleşmeye yazıp sonra karşılayamamak, ikimiz için de kötü bir sonuçtur. Bu tip özel raf sistemlerinde ölçü paylaşımı, sözleşme kurulmadan önceki en kritik adımdır.",
            },
            {
                soru: "Forklift periyodik kontrol raporlarını denetim öncesi bizden mi istiyorsunuz, siz mi hazır tutuyorsunuz?",
                cevap:
                    "Biz hazır tutarız ve talep etmeden paylaşırız. Periyodik kontrol takvimi bizim sorumluluğumuzdadır, raporlar güncel tutulur ve sözleşmede belirlenen sıklıkta (genellikle aylık veya dönemsel) sizinle paylaşılır. Bir İSG denetimi öngörüyorsanız, denetim tarihinden önce ek bir talep göndermeniz yeterlidir, güncel setin tamamını hızlıca iletiriz. Bu düzenin amacı, denetim hazırlığının son dakika bir evrak arayışına dönüşmemesidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift kapasite/ataşman ayrımı ve iç mekân/dış saha emisyon kısıtı sektör standardı genel bilgidir; karma filo fiyat listesi kurgusu, yoğun dönem rezervasyon maddesi ve belge takip hizmeti firma pratiğidir.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Eklemli Platform (Boom) — Kontratın Ana Kalemi",
        giris:
            "Kurumsal tedarik sözleşmelerimizin fiyat listesinde eklemli platform, çoğu tesiste hem en yüksek kullanım hacmine hem de en fazla hizmet seviyesi maddesine sahip sınıftır — çünkü bu sınıf hem yatay uzanım gerektiren cephe ve çatı işlerinde hem de düzensiz geometrili sanayi hollerinde en esnek erişim çözümünü sunar ve bu esneklik onu tesisin günlük operasyonuna en sık giren makine hâline getirir. Bir çerçeve sözleşmesi kurulurken eklemli platform kalemi, diğer sınıflara göre daha ayrıntılı ele alınır: kullanılabilirlik oranı hedefi genellikle bu sınıf üzerinden ölçülür, tahsisli makine modeli en çok bu sınıfta tercih edilir ve ikame garantisi maddesi en sık bu sınıfta devreye girer. Bu sayfa, eklemli platformun bir kurumsal sözleşmede neden bu kadar merkezi bir yer tuttuğunu ve bu merkeziliğin sözleşme maddelerine nasıl yansıdığını anlatır.",
        maddeler: [
            {
                baslik: "Alt sınıf ayrımı: dizel, elektrikli, kompakt",
                metin:
                    "Eklemli platform tek bir ürün değildir; dış sahada büyük yatay uzanımlı dizel modeller, kapalı hacimde egzozsuz elektrikli modeller ve dar alanlarda kullanılan kompakt modeller birbirinden farklı iş için tercih edilir. Fiyat listesinde bu alt sınıflar ayrı satırlar olarak yer alır ve hangi lokasyonun hangi alt sınıfa ihtiyaç duyduğu devreye alma döneminde tesis bazında belirlenir. Bu ayrım yapılmadan tek bir 'eklemli platform' fiyatı vermek, kapalı hacim ile açık saha ihtiyacını aynı kefeye koymak anlamına gelir ve bu, ilk talepte yanlış makinenin gönderilmesine yol açar.",
            },
            {
                baslik: "Kullanılabilirlik oranı hedefinin bu sınıfta ölçülmesi",
                metin:
                    "Tahsisli eklemli platform bulunan sözleşmelerde, hizmet seviyesi maddesinin merkezinde kullanılabilirlik oranı yer alır — çünkü bu sınıf genellikle tesisin günlük bakım operasyonunun bel kemiğidir ve arıza duruşu doğrudan iş programını etkiler. Planlı bakım penceresinin kullanılabilirlik hesabına dahil edilip edilmediği, arıza duruşunda parça bekleme süresinin sayılıp sayılmadığı gibi ayrıntılar bu sınıf için özellikle titiz yazılır, çünkü bu sınıftaki bir hesaplama belirsizliği en büyük anlaşmazlığı üretir.",
            },
            {
                baslik: "İkame garantisinin en sık işlediği sınıf",
                metin:
                    "Eklemli platform, filo içindeki en yüksek kullanım hacmine sahip sınıflardan biri olduğu için ikame garantisi maddesi de en sık burada devreye girer. Sözleşmede bu sınıf için tanımlanan eşdeğerlik listesi (uzanım, yükseklik, tahrik tipi, zemin uygunluğu) özellikle ayrıntılı tutulur — bir dizel modelin yerine akülü bir model göndermek, sayfada aynı yüksekliğe çıksa bile kapalı hacim işinde eşdeğer sayılmaz. Bu listeyi devreye alma döneminde tesisinizin tipik kullanım profiline göre birlikte netleştiririz.",
            },
            {
                baslik: "Tahsisli makine ekonomisi",
                metin:
                    "Eklemli platformun yıllık kullanım saati belirli bir eşiğin üzerine çıktığında, tahsisli makine modeli çağrı bazlı çalışmaya göre daha ekonomik hâle gelir. Bu eşiği net bir hesapla gösteririz: geçmiş kullanım verinizi (varsa) veya tahmini kullanım profilinizi çağrı bazlı birim fiyatla çarpar, tahsisli model bedeliyle karşılaştırırız. Bu hesap olmadan tahsisli model önermeyiz — ihtiyacınızın altında bir kullanım için tahsisli makine önermek, size gereksiz bir sabit maliyet yüklemek olur.",
            },
            {
                baslik: "Yatay uzanım ve zemin yükü hesabının sözleşmeye etkisi",
                metin:
                    "Eklemli platformun geniş yatay uzanım kabiliyeti, aynı zamanda zemine bindirdiği yükün de değişken olmasına yol açar — makinenin uzanım açısına göre destek ayaklarındaki nokta yükü değişir. Hassas zeminli veya taşıma kapasitesi sınırlı alanlarda bu bilgi, hangi alt sınıfın kullanılabileceğini doğrudan belirler ve sözleşme ekindeki saha dosyasına işlenir. Bu bilgi paylaşılmadan açılan bir talep, sahada zemin uygunsuzluğu nedeniyle iptal riski taşır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Alt sınıfların kullanım profili ve fiyat listesindeki yeri",
                paragraflar: [
                    "Eklemli platformun alt sınıfları, tipik kullanım alanı ve sözleşmede dikkat edilecek nokta açısından aşağıdaki tabloda karşılaştırılmıştır.",
                ],
                tablo: {
                    basliklar: ["Alt sınıf", "Tipik kullanım", "Avantajı", "Sözleşmede dikkat edilecek madde"],
                    satirlar: [
                        ["Dizel eklemli (büyük uzanım)", "Açık saha, cephe, çatı", "Uzun yatay/dikey erişim", "Zemin yükü ve dış hava koşulu"],
                        ["Elektrikli eklemli (iç mekân)", "Kapalı hacim, hassas zemin", "Emisyonsuz, düşük gürültü", "Şarj altyapısı, tavan yüksekliği"],
                        ["Kompakt eklemli", "Dar koridor, düşük tavan", "Küçük ayak izi", "Geçiş genişliği eşiği"],
                        ["Tahsisli eklemli (herhangi alt sınıf)", "Yüksek yıllık kullanım", "Sahada hazır, düşük karşılama süresi", "Kullanılabilirlik ölçüm yöntemi"],
                    ],
                },
            },
            {
                baslik: "Neden bu sınıf sözleşmenin ağırlık merkezi",
                paragraflar: [
                    "Kurumsal tesislerin çoğunda düzenli tekrarlayan bakım ve erişim ihtiyacının büyük bölümü eklemli platformla karşılanır — bu, sınıfın hem yatay hem dikey erişim sunması ve düzensiz geometrili sanayi ortamlarına en kolay uyum sağlayan sınıf olmasından kaynaklanır. Bu yüzden sözleşme görüşmesinde zamanın büyük kısmı bu sınıfın kapsam, fiyat ve hizmet seviyesi maddelerine ayrılır; diğer sınıflar genellikle daha kısa ve standart maddelerle geçilir.",
                    "Bu ağırlık, müşteri için de bir sinyal niteliğindedir: sözleşme görüşmesinde eklemli platform maddelerine yeterince zaman ayrılmıyorsa, o sözleşmenin günlük operasyonda sorun çıkarma ihtimali yüksektir. Bizim tarafımızda bu maddenin ayrıntılı yazılması, kısa vadede görüşmeyi uzatsa da, dönem boyunca en çok kullanılan sınıfta anlaşmazlık riskini düşürür.",
                ],
            },
            {
                baslik: "Devreye alma döneminde eklemli platform envanteri",
                paragraflar: [
                    "İlk otuz günlük devreye alma döneminde tesisinizin erişim ihtiyaç envanteri çıkarılırken eklemli platform için özel bir çalışma yaparız: hangi hacimlerde hangi uzanım ve yükseklik gerektiği, hangi bölümlerin kapalı/açık olduğu, zemin taşıma kapasitesinin bilinip bilinmediği. Bu envanter, dönem boyunca hangi alt sınıfın ne sıklıkla talep edileceğini önceden tahmin etmemizi sağlar ve tahsisli model ekonomisinin hesaplanmasında temel veri olur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Eklemli platform için hangi alt sınıfı seçeceğimize nasıl karar veriyoruz?",
                cevap:
                    "Karar üç veriye dayanır: çalışma alanı kapalı mı açık mı (emisyon ve gürültü kısıtı belirler), zemin taşıma kapasitesi ne durumda (destek ayağı yükünü belirler) ve gereken yatay/dikey uzanım ne kadar. Devreye alma döneminde bu üç veriyi tesisinizin farklı bölümleri için ayrı ayrı çıkarır, sözleşme ekindeki saha dosyasına işleriz. Yeni bir talep geldiğinde bu dosyaya bakarak doğru alt sınıfı ilk seferde göndeririz; veri paylaşılmadan açılan talepte ise sahada ikinci bir keşif gerekebilir.",
            },
            {
                soru: "Kullanılabilirlik oranını hesaplarken parça bekleme süresi dahil mi?",
                cevap:
                    "Evet, dahildir. Arıza duruşu, bildirim anından makinenin tekrar çalışır hâle geldiği ana kadar sayılır ve bu süreye parça bekleme dahildir — bu, tedarikçinin parça tedarikini geciktirip göstergeyi süslemesini engelleyen bir tanımdır. Planlı bakım ise sizinle mutabık kalınan bir pencerede yapıldığı sürece bu hesabın dışında tutulur. Ölçüm yöntemi ve dönem sözleşmenin ekinde yazılıdır; eklemli platform gibi yüksek kullanımlı bir sınıfta bu tanımın net olması özellikle önemlidir çünkü belirsizlik burada en büyük tartışmayı üretir.",
            },
            {
                soru: "Dizel eklemli platform yerine ikame olarak elektrikli model gönderilebilir mi?",
                cevap:
                    "Genel kural olarak hayır, çünkü kapalı hacimde çalışıyorsanız zaten elektrikli/akülü model kullanıyorsunuzdur ve dizel bir ikame kapalı alanda emisyon riski taşır; açık sahada dizel çalışıyorsanız elektrikli bir ikame menzil ve şarj süresi açısından yetersiz kalabilir. Sözleşme ekindeki eşdeğerlik listesi, bu tür yanlış ikameleri önlemek için tahrik tipini kritik özellik olarak tanımlar. İkame gerektiğinde önce aynı tahrik tipinde eşdeğer bir model aranır; gerçekten bulunamıyorsa alternatif, sizinle konuşularak ve işinize uygunluğu teyit edilerek gönderilir.",
            },
            {
                soru: "Yıllık kullanım saatimiz tahsisli modeli haklı çıkarıyor mu, nasıl anlarız?",
                cevap:
                    "Geçmiş kullanım verinizi (varsa fatura geçmişi, yoksa tahmini iş programı) alır, bunu mevcut çağrı bazlı birim fiyatla çarparak yıllık maliyeti hesaplarız; bu rakamı tahsisli model bedeliyle karşılaştırır, hangisinin daha ekonomik olduğunu somut sayılarla gösteririz. Genel eğilim şudur: kullanım belirli bir eşiğin üzerindeyse tahsisli model avantajlıdır, altındaysa çağrı bazlı çalışmak daha uygundur. Bu eşiğin tam olarak nerede olduğu sizin birim fiyatınıza ve kullanım yoğunluğunuza göre değişir; hesabı sözleşme görüşmesinde birlikte yaparız, tek taraflı bir öneri sunmayız.",
            },
            {
                soru: "Zemin taşıma kapasitesini bilmiyoruz, bu bir sorun mu?",
                cevap:
                    "Sorun değil ama devreye alma döneminde birlikte netleştirilmesi gereken bir nokta. Zemin bilgisi net değilse, ilk talep için ihtiyatlı bir sınıf seçeriz (daha düşük nokta yükü üreten model) ve sahada gözlemle birlikte netleştiririz. Kritik veya tekrarlayan bir kullanım söz konusuysa, zemin taşıma kapasitesinin bir mühendislik değerlendirmesiyle netleştirilmesini öneririz — bu bizim hizmetimizin kapsamı dışındadır ama süreçte hangi bilginin gerekli olduğunu size gösteririz.",
            },
            {
                soru: "Eklemli platform için ikame süresini neden diğer sınıflardan daha kısa tutuyorsunuz?",
                cevap:
                    "Çünkü bu sınıf genellikle tesisin günlük bakım operasyonunun bel kemiğidir ve arıza duruşu doğrudan iş programını etkiler; bu yüzden bu sınıfta yedek kapasiteyi diğer sınıflara göre daha geniş tutarız. Taahhüt edilen ikame süresinin arkasında somut bir yedek havuzu durur — bunu sözleşme öncesinde sorabilirsiniz, cevabımız her zaman somuttur. Daha az kullanılan sınıflarda aynı geniş yedekliliği tutmak ekonomik olmadığı için o sınıflarda süre biraz daha geniş yazılır; bu farkı gizlemeyiz, aksine sözleşmede açıkça belirtiriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platformun yatay uzanım özelliği ve dizel/elektrikli/kompakt alt sınıf ayrımı sektör standardı genel bilgidir; bu sınıfın sözleşmede kullanılabilirlik/ikame maddelerinin merkezi olması ve tahsisli model eşik hesabı firma pratiğidir.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "İç Mekân ve Depo İçi Kullanım İçin Sözleşme Şartı",
        giris:
            "Kapalı bir hacimde çalışan bir kurumsal tesis için — depo, üretim tesisi, AVM, hastane veya plaza içi — platform kiralaması, açık saha kiralamasından farklı bir sözleşme mantığı gerektirir; çünkü kapalı hacim kendine özgü kısıtlar getirir: egzozsuz çalışma zorunluluğu, düşük gürültü, tavan yüksekliği sınırı, hassas zemin (parke, seramik, epoksi kaplama) ve çoğu zaman tesisin kendi çalışma izni sistemine uyum. Bir çerçeve sözleşmesinde bu kısıtlar tek bir cümleyle 'iç mekân uygun makine' diye geçiştirilemez — her biri ayrı bir kapsam maddesi olarak yazılır, çünkü bunlardan herhangi biri atlandığında yanlış makine sahaya gönderilir ve bu, sadece verimsizlik değil güvenlik ve zemin hasarı riski de üretir. Bu sayfa, iç mekân ve depo içi kullanım için kurduğumuz sözleşme şartlarını ve bunların neden bu kadar ayrıntılı yazıldığını anlatır.",
        maddeler: [
            {
                baslik: "Egzozsuz makine zorunluluğunun sözleşmeye yazılması",
                metin:
                    "Kapalı hacimde çalışacak sınıflar sözleşmede açıkça elektrikli veya akülü olarak tanımlanır ve dizel makine gönderimi bu kapsam için hariç tutulur. Bu, sadece bir tercih değil bir zorunluluktur — kapalı hacimde egzoz emisyonu birikir ve havalandırma yetersizse ciddi bir sağlık riski oluşturur. Sözleşme kapsamında hangi lokasyonların kapalı hacim sayıldığı ve bu lokasyonlara hangi sınıfların tahsis edileceği baştan yazılır, talep anında yeniden tartışılmaz.",
            },
            {
                baslik: "Zemin koruma ve nokta yükü sınırı",
                metin:
                    "Parke, seramik veya cilalı zeminlerde çalışan makinelerin nokta yükü, zeminin taşıma kapasitesini aşmamalıdır; bu yüzden sözleşme ekinde tesisin hassas zemin bölümleri işaretlenir ve bu bölümlere hangi alt sınıfların (düşük nokta yükü üreten, geniş lastik veya palet tabanlı modeller) uygun olduğu tanımlanır. Gerekli durumlarda zemin koruma plakası kullanımı da kapsam maddesine eklenir; bu ek hizmetin ayrı bir kalem olup olmadığı sözleşmede yazılır.",
            },
            {
                baslik: "Tesisin kendi çalışma izni ve oryantasyon sistemine uyum",
                metin:
                    "Kurumsal iç mekân tesislerinin büyük çoğunluğunda kendi çalışma izni (work permit) sistemi ve İSG oryantasyonu vardır; personelimizin bu sisteme uyması sözleşmenin bir parçasıdır. Devreye alma döneminde personelimiz tesisin oryantasyonundan geçirilir ve bu kayıt sözleşme dosyasında tutulur. Bu adım atlandığında, sahaya giriş anında beklenmedik bir gecikme yaşanır ve bu gecikme, taahhüt edilen karşılama süresinin dışında kalan ama gerçekte hizmeti geciktiren bir unsura dönüşür — bu yüzden oryantasyon süreci sözleşmenin kendisine dahil edilir, ayrı bir formalite olarak görülmez.",
            },
            {
                baslik: "Tavan yüksekliği ve dar geçiş envanteri",
                metin:
                    "İç mekân işlerinde makinenin tesise sığması, çalışma yüksekliğine ulaşabilmesi kadar önemlidir — kapı genişliği, asansör ölçüsü, tavan yüksekliği gibi fiziksel sınırlar makine seçimini doğrudan belirler. Bu ölçüler sözleşme ekindeki saha dosyasına, tesisin farklı bölümleri için ayrı ayrı işlenir. Bu envanter olmadan açılan bir talep, sahada makinenin sığmaması gibi bir sorunla karşılaşabilir; bu da hem zaman kaybı hem de güven kaybı üretir.",
            },
            {
                baslik: "Gürültü ve mesai saati kısıtları",
                metin:
                    "Hastane, AVM veya ofis binası gibi kullanıcı yoğunluğu yüksek iç mekânlarda çalışma saatleri genellikle kısıtlıdır — gündüz mesai içi çalışma mümkün olmayabilir, gece veya erken saat çalışması gerekebilir. Bu kısıt sözleşmede tanımlanır ve mesai dışı çalışmanın ayrı bir fiyat kalemi olup olmadığı netleştirilir. Bu tür kısıtlı saatli işlerde planlama, standart bir depo veya fabrika işine göre daha önceden yapılmalıdır; bunu müşteriye baştan söyleriz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekân lokasyon tiplerine göre kapsam farkları",
                paragraflar: [
                    "Farklı iç mekân lokasyon tiplerinde uyguladığımız kapsam ve kısıtları aşağıdaki tabloda özetledik.",
                ],
                tablo: {
                    basliklar: ["Lokasyon tipi", "Ana kısıt", "Tercih edilen sınıf", "Çalışma saati düzeni"],
                    satirlar: [
                        ["Depo / üretim tesisi", "Zemin ve raf koridoru", "Elektrikli, ataşman seçenekli", "Genellikle mesai içi"],
                        ["AVM", "Kullanıcı yoğunluğu, gürültü", "Sessiz elektrikli/akülü", "Genellikle gece/kapanış sonrası"],
                        ["Hastane", "Steril alan, gürültü, titreşim", "Kompakt akülü", "Sıkı programlı, sınırlı pencere"],
                        ["Plaza / ofis katı", "Hassas zemin, asansör ölçüsü", "Kompakt, zemin koruma plakalı", "Genellikle mesai dışı"],
                        ["Fabrika içi (kapalı hol)", "Tavan yüksekliği, üretim hattı yakınlığı", "Elektrikli eklemli/makaslı", "Üretim programına bağlı"],
                    ],
                },
            },
            {
                baslik: "Saha dosyasının devreye alma döneminde çıkarılması",
                paragraflar: [
                    "İç mekân sözleşmelerinde saha dosyası, açık saha sözleşmelerine göre daha ayrıntılı hazırlanır çünkü kısıt sayısı fazladır. Devreye alma döneminde tesisin her bölümü için ayrı ayrı ölçüm ve kısıt kaydı çıkarılır: kapı ve koridor genişlikleri, tavan yüksekliği, zemin tipi ve hassasiyeti, mevcut havalandırma durumu, çalışma izni prosedürü ve varsa saat kısıtı. Bu dosya, dönem boyunca her yeni talepte referans alınır ve talep açan kişinin her seferinde bu bilgileri yeniden anlatmasına gerek kalmaz.",
                    "Bu dosyanın kalitesi, dönem boyunca yaşanacak aksaklık sayısını doğrudan belirler. Eksik veya güncel olmayan bir saha dosyası, yanlış makine sınıfının gönderilmesine ve bunun sahada fark edilip geri çevrilmesine yol açar — bu da hem zaman hem itibar kaybı üretir. Bu yüzden saha dosyasının güncelliğini periyodik olarak (özellikle tesiste bir tadilat veya düzen değişikliği olduğunda) müşteriyle birlikte gözden geçiririz.",
                ],
            },
            {
                baslik: "Mesai dışı çalışmanın fiyat ve operasyon etkisi",
                paragraflar: [
                    "AVM, hastane veya plaza gibi kullanıcı yoğun lokasyonlarda mesai dışı çalışma zorunluluğu, hem fiyat hem operasyon planlaması açısından ayrı ele alınır. Fiyat tarafında mesai dışı birim fiyat sözleşmede tanımlıdır; operasyon tarafında ise gece veya erken saat vardiyası için personel planlaması önceden yapılmalıdır — bu, standart mesai içi taleple aynı hızda karşılanamayacak bir çalışma biçimidir. Bu tip lokasyonlarda talebi mümkün olduğunca erken açmanızı öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Dizel makine hiçbir koşulda kapalı hacme giremez mi?",
                cevap:
                    "Kural olarak hayır. Kapalı hacimde egzoz emisyonu birikir ve havalandırma yetersizse ciddi bir sağlık riski oluşturur; bu yüzden sözleşmede kapalı hacim lokasyonları için elektrikli veya akülü sınıf tanımlanır, dizel makine bu kapsamdan hariç tutulur. Çok büyük hacimli ve endüstriyel havalandırması güçlü bazı sanayi hollerinde istisnai bir değerlendirme yapılabilir ama bu, sahada havalandırma kapasitesinin ölçülmesini gerektiren özel bir karardır ve standart uygulama değildir. Bu konuda esneklik göstermeyiz çünkü risk personelinize aittir.",
            },
            {
                soru: "Zeminimiz hassas, makine iz bırakır mı?",
                cevap:
                    "Doğru sınıf seçildiğinde ve gerekiyorsa zemin koruma önlemi alındığında risk büyük ölçüde kontrol altına alınır. Devreye alma döneminde zemininizin tipini ve hassasiyet düzeyini kaydeder, buna uygun düşük nokta yükü üreten bir alt sınıf öneririz; kritik alanlarda zemin koruma plakası kullanımı sözleşme kapsamına eklenir. Ek koruma önlemi ayrı bir kalem olarak fiyatlandırılabilir, bunu sözleşme görüşmesinde netleştiririz. Zemin tipini önceden bildirmezseniz ve sahada beklenmedik bir hassasiyetle karşılaşırsak, işi durdurup uygun ekipmanı getirmemiz gerekebilir — bu yüzden bu bilgiyi baştan almayı önemseriz.",
            },
            {
                soru: "Personeliniz bizim güvenlik oryantasyonumuzdan geçmek zorunda mı?",
                cevap:
                    "Evet, tesisinizin kendi çalışma izni ve İSG oryantasyon sistemi varsa personelimiz bundan geçer ve bu, sözleşmenin bir parçası olarak devreye alma döneminde planlanır. Bu adımı atlamayız çünkü hem sizin mevzuat yükümlülüğünüz hem de sahadaki güvenliğin bir gereğidir. Pratik tarafı da vardır: oryantasyon önceden tamamlandığında, dönem içindeki her yeni talepte personelimiz sahaya doğrudan girebilir; oryantasyon her seferinde yeniden yapılmaz, bir kez tamamlanır ve kayıt altında tutulur.",
            },
            {
                soru: "Gece çalışması gerekiyorsa fiyat nasıl değişiyor?",
                cevap:
                    "Mesai dışı ve gece çalışması sözleşmede ayrı bir birim fiyatla tanımlanır ve bu fiyat dönem başında bellidir, talep anında pazarlık edilmez. Operasyon tarafında ise gece vardiyası için personel planlamasının önceden yapılması gerektiğini baştan söyleriz — bu, mesai içi bir talep kadar hızlı karşılanamayabilir. AVM veya hastane gibi düzenli gece çalışması gerektiren lokasyonlarda, dönem başında bir gece vardiyası takvimi oluşturmayı öneririz; bu, hem fiyat öngörülebilirliği hem operasyonel hazırlık açısından size fayda sağlar.",
            },
            {
                soru: "Tesisimizde tadilat oldu, saha dosyası hâlâ geçerli mi?",
                cevap:
                    "Muhtemelen değil ve bunu fark ettiğinizde bize bildirmenizi rica ederiz. Kapı ölçüsü değişmiş, yeni bir bölüm açılmış veya zemin kaplaması yenilenmiş olabilir — bu tür değişiklikler saha dosyasının güncelliğini doğrudan etkiler. Güncel olmayan bir dosyaya göre gönderilen makine, sahada uygunsuzlukla karşılaşabilir. Periyodik gözden geçirme toplantılarında saha dosyasını sizinle birlikte kontrol ederiz, ama büyük bir değişiklik olduğunda beklemeden bildirmeniz süreci hızlandırır.",
            },
            {
                soru: "AVM'de kapanış sonrası kısa bir pencerede çalışmamız gerekiyor, bu mümkün mü?",
                cevap:
                    "Mümkündür ama bu tip dar zaman pencereli işlerde planlama, standart bir mesai içi talepten çok daha önceden yapılmalıdır — personel ve ekipmanın kapanış saatinde hazır olması, o saatte başka bir işe tahsis edilmemiş olmasını gerektirir. Bu tür lokasyonlar için sözleşme kurulurken düzenli bir çalışma takvimi (örneğin haftanın belirli gecesi) oluşturmayı öneririz; düzenli bir pencere tanımlandığında karşılama neredeyse garantili hâle gelir, ad hoc taleplerde ise müsaitliğe bağlıdır ve bunu size açıkça söyleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kapalı hacimde egzozsuz makine zorunluluğu ve zemin nokta yükü kavramı sektör standardı genel bilgidir; saha dosyası kapsamı, oryantasyon sürecinin sözleşmeye dahil edilmesi ve mesai dışı çalışma takvimi kurgusu firma pratiğidir.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Proje Bazlı Montaj İşinin Çerçeve Sözleşmeye Uyarlanması",
        giris:
            "Çelik konstrüksiyon montajı, kurumsal tedarik sözleşmelerimizin çoğu maddesiyle doğal olarak uyuşmayan bir iş türüdür — çünkü bir montaj işi düzenli ve tekrarlayan değil, başlangıcı ve bitişi belli, yoğun ve kısa süreli bir projedir. Bir çerçeve sözleşme genellikle dönem boyunca sabit birim fiyat ve öngörülebilir kullanım varsayar; bir montaj projesi ise birkaç hafta içinde yoğun bir makine talebi üretip sonra tamamen düşer. Bizim yaklaşımımız, montaj projelerini çerçeve sözleşmenin dışına atmak değil, sözleşmeye 'proje eki' (zeyilname) olarak entegre etmektir — ticari şartlar ve tedarikçi ilişkisi zaten kurulu olduğu için, yeni bir proje çıktığında sıfırdan teklif toplama sürecine girmeden, mevcut çerçevenin altında hızlı bir proje eki hazırlanır. Bu sayfa, bir çelik konstrüksiyon montaj projesinin mevcut çerçeve sözleşmeye nasıl bağlandığını ve bu tür projelere özgü hangi maddelerin ayrıca yazıldığını anlatır.",
        maddeler: [
            {
                baslik: "Proje eki (zeyilname) mantığı",
                metin:
                    "Mevcut çerçeve sözleşmesi olan bir müşteride yeni bir montaj projesi çıktığında, sıfırdan sözleşme kurmak yerine proje ekiyle ilerleriz: proje süresi, tahmini makine ihtiyacı (sınıf ve adet), proje takvimine göre teslimat planı ve proje özel fiyatlandırma bu ekte yazılır, ticari genel şartlar (ödeme, sigorta, sorumluluk) ana sözleşmeden devralınır. Bu yapı, tekrar eden idari süreci ortadan kaldırır ve projenin başlamasını hızlandırır.",
            },
            {
                baslik: "Yoğun kısa süreli talep için kapasite planlaması",
                metin:
                    "Montaj projeleri, çerçeve sözleşmenin normal kapasite planlamasının dışında bir talep dalgası yaratır — bir proje için aynı anda birden fazla eklemli platform veya vinç destekli sepetli platform gerekebilir. Bu tür yoğun talepler için proje ekinde ayrı bir kapasite rezervasyonu yapılır; standart çağrı bazlı kapasiteye güvenilmez, çünkü proje takviminin aksaması doğrudan iş programını etkiler. Proje başlamadan makul bir süre önce bildirilmesi, bu rezervasyonun sağlıklı kurulmasının ön şartıdır.",
            },
            {
                baslik: "İş programına bağlı teslimat ve devir",
                metin:
                    "Montaj projelerinde makine ihtiyacı sabit değildir — proje ilerledikçe farklı fazlarda farklı sınıflar devreye girer (temel ve alt yapı fazında farklı, çelik yükseltme fazında farklı, kaplama ve son iş fazında farklı). Proje ekinde bu fazlara göre bir teslimat takvimi oluşturulur ve bu takvim, projenin gerçek ilerlemesine göre revize edilebilir. İş programının kaymasından kaynaklanan takvim değişikliklerinde makinenin sahada beklemesi veya erken çekilmesi durumları, proje ekinde ayrıca fiyatlandırılır.",
            },
            {
                baslik: "Şantiye özel iş güvenliği ve sorumluluk maddeleri",
                metin:
                    "Montaj sahaları, standart tesis içi çalışmadan farklı bir risk profiline sahiptir — yükseklikte çalışan birden fazla ekip, vinç operasyonları, geçici altyapı. Proje ekinde bu şantiyeye özgü iş güvenliği koordinasyonu ve sorumluluk sınırları ayrıca tanımlanır; genel çerçeve sözleşmedeki standart sorumluluk maddeleri, şantiye ortamının riskini tam karşılamayabilir. Bu farkı proje başlamadan önce netleştiririz.",
            },
            {
                baslik: "Proje sonu kapanış ve makine iadesi",
                metin:
                    "Montaj projesi tamamlandığında, proje ekindeki tüm makinelerin toplu iadesi standart tek makine iadesinden farklı bir lojistik gerektirir — birden fazla makinenin aynı dönemde sahadan çekilmesi planlanmalıdır. Proje ekinde kapanış prosedürü (hangi tarihte hangi makinenin çekileceği, hasar kontrolünün nasıl yapılacağı) yazılır; bu, projenin sonunda beklenmedik bir gecikme veya ek maliyet çıkmasını önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj fazlarına göre tipik makine ihtiyacı",
                paragraflar: [
                    "Bir çelik konstrüksiyon montaj projesinin farklı fazlarında tipik olarak hangi sınıfların devreye girdiğini aşağıdaki tabloda özetledik. Gerçek ihtiyaç projeye göre değişir, bu tablo genel bir çerçevedir.",
                ],
                tablo: {
                    basliklar: ["Faz", "Tipik ihtiyaç", "Yoğunluk", "Proje ekinde dikkat edilecek nokta"],
                    satirlar: [
                        ["Temel ve alt yapı", "Sınırlı, forklift ağırlıklı", "Düşük", "Zemin durumu, geçici yol"],
                        ["Çelik yükseltme", "Eklemli/teleskopik platform", "Yüksek, kısa süreli", "Vinç koordinasyonu, kapasite rezervasyonu"],
                        ["Cephe ve kaplama", "Makaslı/eklemli, geniş yatay uzanım", "Orta-yüksek", "Dış hava koşulu, rüzgar kısıtı"],
                        ["Son iş ve tesisat", "Kompakt/sepetli, iç mekân", "Değişken", "Diğer ekiplerle alan paylaşımı"],
                    ],
                },
            },
            {
                baslik: "Zaten sözleşmeli bir müşterinin proje avantajı",
                paragraflar: [
                    "Mevcut çerçeve sözleşmesi olan bir müşteri için yeni bir montaj projesi çıktığında en büyük fark hızdır — ticari genel şartlar, sigorta bilgileri ve tedarikçi onay dosyası zaten yerinde olduğu için proje eki hazırlanması ve onaylanması günler değil, çoğu zaman saatler alır. Sözleşmesi olmayan bir müşteri için ise aynı süreç sıfırdan tedarikçi onayı ve ticari şartların görüşülmesini gerektirir ve bu, proje takviminde ciddi bir gecikme riski oluşturabilir.",
                    "Bu yüzden, düzenli montaj projesi üreten bir taahhüt veya mühendislik firmasına önerimiz her zaman şudur: ilk proje için tekil bir teklif almak yerine, uzun vadeli bir çerçeve sözleşme kurun; sonraki her proje bu çerçevenin altında ek olarak hızlıca yürütülür ve her seferinde yeniden pazarlık masasına oturmazsınız.",
                ],
            },
            {
                baslik: "Proje takvimindeki sapmaların fiyat etkisi",
                paragraflar: [
                    "Montaj projelerinde takvim sapması yaygındır ve proje ekinde bu ihtimal baştan ele alınır. Eğer proje bizim tarafımızdaki bir gecikmeden dolayı yavaşlarsa (örneğin taahhüt edilen makinenin geç gelmesi), bu bizim sorumluluğumuzdadır ve ek maliyet talep etmeyiz. Proje sizin tarafınızdaki bir nedenden gecikirse (örneğin önceki fazın tamamlanmaması, ruhsat gecikmesi) ve makine sahada beklerse, bu bekleme süresi proje ekinde tanımlanan bekleme bedeliyle fiyatlandırılır. Bu ayrımı önceden yazmak, projenin ortasında gecikmenin kimin sorumluluğunda olduğu tartışmasını önler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Mevcut çerçeve sözleşmemiz varken yeni bir montaj projesi için yeniden mi sözleşme imzalamamız gerekiyor?",
                cevap:
                    "Hayır, gerekmez. Mevcut çerçevenin ticari genel şartları (ödeme koşulları, sigorta, sorumluluk sınırları) korunur; yeni proje için sadece bir proje eki (zeyilname) hazırlanır. Bu ekte projeye özgü bilgiler yer alır: proje süresi, tahmini makine ihtiyacı, teslimat takvimi ve proje özel fiyatlandırma. Bu yapı sayesinde sıfırdan tedarikçi onayı veya ticari şart görüşmesi yapmanıza gerek kalmaz; süreç günler değil genellikle saatler içinde tamamlanır.",
            },
            {
                soru: "Proje için birden fazla makineye aynı anda ihtiyacımız olacak, bunu garanti edebiliyor musunuz?",
                cevap:
                    "Proje başlamadan makul bir süre önce bildirdiğiniz takdirde evet — proje ekinde bu ihtiyaç için ayrı bir kapasite rezervasyonu yaparız, standart çağrı bazlı kapasiteye güvenmeyiz. Bildirim ne kadar erken yapılırsa, ihtiyaç duyduğunuz sınıfların ve adedin sahada hazır bulunma garantisi o kadar sağlam olur. Son dakika gelen büyük hacimli bir talep için aynı garantiyi veremeyiz; bu yüzden montaj projelerinde erken bildirimi özellikle önemsiyoruz.",
            },
            {
                soru: "Projemiz gecikirse makine bedelini kim öder?",
                cevap:
                    "Bu, gecikmenin nereden kaynaklandığına bağlıdır ve proje ekinde bu ayrım baştan yazılır. Gecikme bizim tarafımızdaki bir nedenden (örneğin taahhüt edilen makinenin geç ulaşması) kaynaklanıyorsa, bu bizim sorumluluğumuzdadır ve ek bedel talep etmeyiz. Gecikme sizin tarafınızdaki bir nedenden (önceki fazın tamamlanmaması, ruhsat veya izin gecikmesi gibi) kaynaklanıyorsa ve makine sahada bekliyorsa, bu bekleme süresi proje ekinde tanımlanan bekleme bedeliyle fiyatlandırılır. Bu ayrımı proje başlamadan önce netleştirmek, ortasında yaşanacak bir anlaşmazlığı önler.",
            },
            {
                soru: "Proje bitince tüm makineleri aynı anda mı geri alıyorsunuz?",
                cevap:
                    "Genellikle hayır — proje ekinde kapanış prosedürü, hangi makinenin hangi tarihte, hangi fazın tamamlanmasıyla çekileceği şeklinde planlanır. Bazı makineler işin erken tamamlanan bölümünden hemen çekilirken, son iş fazında kullanılanlar en sona kadar sahada kalabilir. Bu kademeli kapanış, hem sizin sahanızın gereksiz makine yoğunluğundan kurtulmasını hem bizim filo planlamamızın sağlıklı işlemesini sağlar. Toplu iade gerekiyorsa bunu da önceden planlarız, sadece lojistik olarak daha yoğun bir günü gerektirir.",
            },
            {
                soru: "Şantiyede vinç ve diğer ekiplerle aynı anda çalışacağız, koordinasyonu kim sağlıyor?",
                cevap:
                    "Sahadaki genel iş güvenliği koordinasyonu ve farklı ekiplerin eş zamanlı çalışma planı genellikle şantiye yönetiminin (ana yüklenici veya proje yönetimi) sorumluluğundadır; biz bu plana kendi ekibimizi ve makinemizi uydururuz. Proje ekinde, bizim ekibimizin hangi koordinasyon toplantılarına katılacağı ve hangi iş güvenliği prosedürüne uyacağı tanımlanır. Vinç operasyonlarıyla aynı alanda çalışma gerektiren işlerde, çalışma saatlerinin ve alanların net ayrıştırılması özellikle önemlidir; bunu proje başında şantiye yönetimiyle birlikte netleştiririz.",
            },
            {
                soru: "Küçük bir montaj işimiz var, bunun için de proje eki gerekli mi yoksa standart çağrı yeterli mi?",
                cevap:
                    "Küçük ölçekli, tek sınıf ve kısa süreli bir montaj desteği için proje eki hazırlamak gereksiz bir formaliteye dönüşebilir — bu durumda standart çerçeve sözleşme kapsamında normal bir çağrı olarak işleriz. Proje eki asıl değeri, birden fazla sınıfın koordineli teslim edilmesi gerektiği, takvime bağlı fazların olduğu veya toplam süresi birkaç haftayı aşan işlerde ortaya çıkar. Hangi yolun sizin işiniz için daha uygun olduğunu, işin kapsamını öğrendiğimizde birlikte değerlendiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çelik konstrüksiyon montaj projelerinin faz bazlı ekipman ihtiyacı sektör standardı genel bilgidir; proje eki (zeyilname) mekanizması, bekleme bedeli ayrımı ve kademeli kapanış prosedürü firma pratiğidir.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarım ve Silo İşleri: Kontrat Modelimizin Dışında Kalan Bir Segment",
        giris:
            "Dürüst olmak gerekirse, tarım ve silo tesisleri bizim kurumsal tedarik kontratı modelimizin merkezinde değildir — bu model, sanayi bölgeleri ve kentsel kurumsal tesislerdeki düzenli, tekrarlayan ve öngörülebilir talep üzerine kuruludur; tarım ve silo sahaları ise genellikle kırsal bir coğrafyada, mevsimsel bir takvimle ve çoğu zaman OSB kuşağının dışında yer alır. Çerçeve sözleşme mantığımızın temel varsayımlarından biri — yıl boyunca öngörülebilir kullanım hacmine dayalı fiyat ve kapasite planlaması — bu segmentte genellikle geçerli olmaz, çünkü tarımsal işletmelerin platform ihtiyacı hasat öncesi veya sonrası dar bir pencereye sıkışır ve yıl içinde uzun süre hiç talep gelmeyebilir. Bunu gizlemek yerine baştan söylemeyi tercih ediyoruz: eğer İstanbul veya Marmara çevresinde bir tarım tesisi veya silo yapısında düzenli, sürekli bir bakım kontratı arıyorsanız, bu bizim güçlü olduğumuz bir alan değildir. Ama tek seferlik veya düzensiz bir ihtiyacınız varsa, elimizdeki genel kentsel-sanayi filosunu bu işe uygun olduğu ölçüde sunabiliriz — bu sayfa o sınırı ve o desteği anlatır.",
        maddeler: [
            {
                baslik: "Neden çerçeve sözleşme mantığımız bu segmentte zorlanır",
                metin:
                    "Kontrat modelimizin değer önerisi, düzenli kullanıma karşılık öngörülebilir fiyat ve öncelikli kapasitedir. Tarım ve silo işlerinde talep mevsimsel ve seyrek olduğu için, bir asgari kullanım taahhüdü ya da tahsisli makine modeli genellikle ekonomik olmaz — sizin için gereksiz bir sabit maliyet, bizim için de kullanılmayan bir kapasite taahhüdü doğurur. Bu yüzden bu segmentte standart çerçevemizi zorla uygulamak yerine, tek seferlik ve çağrı bazlı bir çalışma biçimini öneririz.",
            },
            {
                baslik: "Açık saha ve zemin koşulunun bizim filomuza uygunluğu",
                metin:
                    "Filomuzun ağırlığı, kentsel ve sanayi tesislerinin zemin koşullarına (beton, asfalt, düzgün toprak) göre kuruludur. Tarım sahalarının bazı bölümleri (işlenmemiş toprak, çamurlu veya engebeli arazi) bu filo için uygun olmayabilir; bu durumda dürüstçe söyleriz ve bölgeye özel ağır arazi ekipmanına sahip bir tedarikçiyi önerebiliriz. Silo yapılarının kendisi genellikle beton veya sert zeminli bir alanda olduğu için, asıl kısıt genellikle silo çevresindeki açık toprak alanlarda ortaya çıkar.",
            },
            {
                baslik: "Silo yüksekliği ve dikey erişim değerlendirmesi",
                metin:
                    "Silo gövdesinin dış cephesindeki bakım veya boya işleri, standart eklemli veya teleskopik platform sınıflarımızla genellikle karşılanabilir — silo yüksekliği makul bir aralıktaysa. Çok yüksek silo bataryaları veya özel elevatör kuleleri gibi işler, filomuzdaki en üst sınıfların erişim yüksekliğini aşabilir; bu durumda talebinizi aldığımızda önce silo yüksekliğini ve erişim noktasını netleştirir, filomuzun yeterli olup olmadığını dürüstçe değerlendiririz.",
            },
            {
                baslik: "Mevsimsel talep için önceden planlama önerisi",
                metin:
                    "Hasat öncesi bakım penceresi gibi öngörülebilir bir ihtiyacınız varsa, bunu bize mümkün olduğunca erken bildirmenizi öneririz — bu segmentte önceliğimiz kurumsal sözleşmeli müşterilerimiz olduğu için, yoğun sanayi dönemleriyle çakışan bir talep geldiğinde kapasitemiz sınırlı olabilir. Erken bildirim, elimizdeki müsaitliğe göre planlama yapmamızı ve size gerçekçi bir teslimat tarihi vermemizi sağlar.",
            },
            {
                baslik: "Kapalı hacim silo/depo içi işlerde egzozsuz makine avantajı",
                metin:
                    "Silo veya tahıl deposunun kapalı iç hacminde yapılan tesisat veya bakım işlerinde, filomuzun egzozsuz elektrikli/akülü model ağırlığı burada gerçek bir avantaja dönüşür — toz ortamında ve kapalı hacimde emisyonsuz çalışma zaten bizim standart pratiğimizdir. Bu tür kapalı hacim işlerinde, açık saha işlerine göre daha rahat destek verebiliriz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bu segmentte nerede destek olabiliriz, nerede olamayız",
                paragraflar: [
                    "Tarım ve silo işlerinde hangi durumda uygun bir çözüm sunabildiğimizi, hangi durumda dürüstçe yönlendirme yaptığımızı aşağıdaki tabloda özetledik.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Uygunluğumuz", "Neden", "Alternatif öneri"],
                    satirlar: [
                        ["Silo dış cephe bakımı (makul yükseklik)", "Uygun", "Standart eklemli/teleskopik sınıf yeterli", "—"],
                        ["Silo/tahıl deposu iç hacim işi", "Uygun, hatta avantajlı", "Egzozsuz filo toz/kapalı ortama uygun", "—"],
                        ["Çok yüksek silo bataryası", "Sınırlı", "Filomuzun üst sınıf erişimini aşabilir", "Özel yüksek erişim tedarikçisi"],
                        ["Çamurlu/engebeli açık arazi", "Uygun değil", "Zemin taşıma gücü ve lastik tipi uyumsuz", "Bölgeye özel ağır arazi ekipmanı tedarikçisi"],
                        ["Düzenli, yıl boyu bakım kontratı", "Zayıf", "Model, mevsimsel/seyrek talebe uygun değil", "Bölgeye yerleşik yerel tedarikçi"],
                    ],
                },
            },
            {
                baslik: "Neden bu dürüstlüğü tercih ediyoruz",
                paragraflar: [
                    "Kurumsal tedarik sözleşmesi kurduğumuz her müşteriye verdiğimiz temel söz, taahhüt ettiğimiz her şeyin arkasında durabilmemizdir. Tarım ve silo segmentinde güçlü bir uzmanlık iddiasında bulunup sonra bunu karşılayamamak, hem o müşteriyle hem de bizi bu alanda güçlü sanıp yönlendiren diğer müşterilerle olan güveni zedeler. Bu yüzden bu sayfada abartılı bir kapsam iddiası kurmuyoruz; elimizdeki gerçek kapasiteyi ve bu kapasitenin nerede işe yarayıp nerede yaramayacağını açık yazıyoruz.",
                    "Bu yaklaşımın pratik bir faydası da vardır: bize gelen bir talebi doğru değerlendirdiğimizde, sizin de zaman kaybetmeden doğru tedarikçiye yönelmenizi sağlarız. Uygun olmayan bir işi kabul edip sahada karşılayamamak, hem sizin işinizi geciktirir hem bizim itibarımızı zedeler — bunun yerine baştan dürüst bir değerlendirme yapmayı tercih ediyoruz.",
                ],
            },
            {
                baslik: "Talep değerlendirme süreci",
                paragraflar: [
                    "Bir tarım veya silo işi talebi geldiğinde önce birkaç temel soruyla işin bizim filomuza uygun olup olmadığını değerlendiririz: erişim yüksekliği ne kadar, zemin tipi nasıl (beton/toprak/engebeli), iş açık sahada mı kapalı hacimde mi geçecek, talep tek seferlik mi yoksa tekrarlayan mı. Bu bilgiler ışığında ya uygun bir çözüm sunarız ya da dürüstçe uygun olmadığımızı söyleriz. Sınırda kalan durumlarda, kısıtlı bir kapsamda ('şu bölüm için uygunuz, şu bölüm için değiliz' gibi) net bir cevap veririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo tesisimiz için düzenli bir bakım kontratı kurabilir miyiz?",
                cevap:
                    "Kurabiliriz ama önce dürüstçe söylememiz gereken bir şey var: bu segmentte düzenli kontrat modelimiz, kentsel ve sanayi tesislerindeki kadar olgun değil çünkü talebiniz muhtemelen mevsimsel ve seyrek olacaktır. Yıl boyu sabit bir taahhüt yerine, hasat öncesi ve sonrası dönemler için ayrı ayrı planlanan, çağrı bazlı bir düzen önereceğiz. Eğer gerçekten yıl boyu düzenli bir ihtiyacınız varsa (örneğin sürekli işleyen bir yem fabrikası gibi), bu durumda standart çerçevemizi uygulayabiliriz — ama bunu geçmiş kullanım verinizle birlikte değerlendirmemiz gerekir.",
            },
            {
                soru: "Silo dış cephesindeki bakım işi için yüksekliğiniz yetiyor mu?",
                cevap:
                    "Çoğu standart silo yüksekliği için evet, filomuzdaki eklemli ve teleskopik sınıflar bu işi karşılar. Ancak çok yüksek silo bataryaları veya özel elevatör kuleleri gibi yapılar filomuzun üst sınırını aşabilir. Talebinizi aldığımızda ilk sorduğumuz şey tam olarak silo yüksekliği ve erişim noktasıdır; bu bilgiyle filomuzun yeterli olup olmadığını hemen söyleyebiliriz. Yetersizse, bunu söylemek yerine 'idare eder' diyerek yanlış bir makine göndermeyiz.",
            },
            {
                soru: "Açık tarım arazisinde çalışabiliyor musunuz?",
                cevap:
                    "Zemin durumuna bağlı. Sert, düzgün ve kuru zeminlerde filomuz genellikle çalışabilir; ama çamurlu, engebeli veya işlenmemiş toprak arazide bizim standart lastik ve tahrik konfigürasyonumuz yetersiz kalabilir ve makinenin saplanma riski oluşur. Bu tür zeminler için özel arazi tipi ekipmana sahip bölgesel bir tedarikçiyi önermeyi tercih ederiz — yanlış makineyle girip sahada sıkışmak, hem işinizi geciktirir hem ek bir kurtarma maliyeti doğurur.",
            },
            {
                soru: "Tahıl deposu içindeki tesisat işimiz için uygun musunuz?",
                cevap:
                    "Bu, aslında bu segmentte en rahat destek olabildiğimiz iş tipidir. Kapalı iç hacimde, toz ortamında çalışacak egzozsuz elektrikli/akülü platform filomuz zaten bu tür işlere uygun kurulmuştur — silo veya tahıl deposunun iç mekân bakım, tesisat veya aydınlatma işlerinde standart bir kentsel depo işinden farklı bir yaklaşım gerekmez. Zemin ve kapı ölçülerini paylaşırsanız uygun sınıfı hızlıca öneririz.",
            },
            {
                soru: "Talebimiz hasat döneminde gelirse öncelik alabilir miyiz?",
                cevap:
                    "Önceliğimiz kurumsal çerçeve sözleşmeli müşterilerimizdir ve hasat dönemi genellikle sanayi tesislerinin de yoğun bakım dönemleriyle çakışabilir; bu yüzden bu segmentte kesin bir öncelik garantisi veremeyiz. Ama erken bildirim büyük fark yaratır — talebinizi hasat takviminden haftalar önce bildirirseniz, elimizdeki müsaitliğe göre planlama yapar ve size gerçekçi bir tarih veririz. Son dakika gelen bir talepte ise o anki serbest kapasiteye bağlı kalırız ve bunu size açıkça söyleriz.",
            },
            {
                soru: "Bize uygun olmadığınızı söylerseniz başka kimi önerirsiniz?",
                cevap:
                    "Belirli bir tedarikçi ismi vermek yerine, aramanız gereken profili tarif ederiz: bölgenizde tarım ve arazi tipi işlere özel ekipmana (geniş lastikli, düşük zemin basıncı üreten, gerekirse paletli) sahip, mevsimsel talebe alışkın yerel bir tedarikçi. Bu tür tedarikçiler genellikle bizim gibi kentsel-sanayi ağırlıklı firmalardan farklı bir filo ve fiyatlama mantığıyla çalışır. Uygun olmadığımız bir işi üstlenip kötü bir deneyim yaşatmak yerine, doğru profili tarif ederek zaman kaybınızı önlemeyi tercih ederiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Tarım ve silo işlerinin mevsimsel talep yapısı ve açık arazi zemin koşulları sektör standardı genel bilgidir; kontrat modelimizin bu segmentteki sınırı ve talep değerlendirme yaklaşımımız firma pratiğidir; hiçbir tesis adı veya kapasite rakamı belirtilmemiştir.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Enerji ve Aydınlatma Bakımı İçin Periyodik Kontrat Modeli",
        giris:
            "Enerji ve aydınlatma bakımı, çerçeve sözleşme mantığımızın en doğal uyduğu iş türlerinden biridir — çünkü bu iş kendiliğinden periyodik bir yapıya sahiptir: aydınlatma armatürlerinin, direklerin, tabela ve reklam panolarının, elektrik hatlarının belirli aralıklarla kontrolü ve bakımı düzenli bir takvime bağlıdır ve bu düzenlilik tam olarak bir yıllık çerçeve sözleşmenin varsayımıyla örtüşür. Bir tesisin veya bina yönetiminin aydınlatma bakım ihtiyacı, tek seferlik bir arıza müdahalesinden ibaret değildir; yılın belirli dönemlerinde tekrarlayan bir kontrol turu, arıza bildirimi geldiğinde hızlı müdahale ve dönem sonunda bir bakım raporu gerektirir. Bizim bu alandaki sözleşme modelimiz, bu periyodik yapıyı doğrudan sözleşme maddesine dönüştürür: yıllık bakım takvimi, öncelik sınıflandırması (planlı kontrol/acil arıza) ve dönemsel raporlama. Bu sayfa, enerji ve aydınlatma bakımının bir kurumsal sözleşmede nasıl periyodik bir düzene oturduğunu anlatır.",
        maddeler: [
            {
                baslik: "Yıllık bakım takviminin oluşturulması",
                metin:
                    "Sözleşme kurulurken, tesisin veya kurumun aydınlatma ve enerji altyapısının hangi bölümlerinin ne sıklıkta kontrol edileceği bir takvime dökülür — örneğin yüksek direk armatürleri yılda iki kez, tabela ve reklam panoları çeyrek dönemde bir, çatı üstü aydınlatma ekipmanı yıllık bir kez gibi. Bu takvim sözleşmenin ekinde yer alır ve her kalem için birim fiyat dönem başında sabitlenir; dönem içinde yeniden fiyat görüşmesi yapılmaz.",
            },
            {
                baslik: "Planlı kontrol ile acil arıza ayrımı",
                metin:
                    "Bir aydınlatma direğinin rutin yıllık kontrolü ile bir hattın gece aydınlatmasını tamamen kesen bir arıza, aynı öncelik sınıfında değerlendirilmez. Sözleşmede bu iki talep tipi ayrı öncelik sınıflarına ayrılır ve her sınıfın kendi hedef karşılama süresi vardır — acil arıza için kısa bir pencere, planlı kontrol için daha geniş ve önceden mutabık kalınan bir tarih aralığı. Bu ayrım, kaynakların doğru dağılmasını sağlar ve her talebin acil işaretlenmesiyle sistemin tıkanmasını önler.",
            },
            {
                baslik: "Yüksekte elektrik işine özgü güvenlik protokolü",
                metin:
                    "Enerji hattı veya aydınlatma direği üzerinde çalışma, standart bir bakım işinden farklı bir güvenlik protokolü gerektirir — enerji kesintisi koordinasyonu, izolasyon kontrolü ve elektrik çarpması riskine karşı ek önlemler. Sözleşme ekinde bu protokol tanımlanır ve hangi işlerde enerji kesintisi gerektiği, kesinti koordinasyonunun kiminle yapılacağı yazılır. Bu koordinasyon genellikle tesisin kendi elektrik birimi veya dağıtım şirketiyle önceden planlanmalıdır; bu yüzden bu tür işlerde talep açma süresi diğer bakım işlerine göre biraz daha uzun tutulur.",
            },
            {
                baslik: "Bölge geneli aydınlatma ağının rota bazlı planlanması",
                metin:
                    "Bir kurumun aydınlatma altyapısı tek bir noktada değil, otopark, çevre yolu, tesis dışı reklam panosu gibi dağınık noktalarda yer alıyorsa, bakım turu tek tek talep açmak yerine rota bazlı planlanır — aynı bölgedeki noktalar tek bir tur içinde birleştirilir. Bu, hem maliyet hem süre açısından daha verimlidir ve sözleşmede bu rota mantığı bakım takvimine dahil edilir.",
            },
            {
                baslik: "Dönem sonu bakım raporu ve enerji verimliliği notları",
                metin:
                    "Yıllık bakım kontratının sonunda, sadece hangi kontrolün yapıldığını değil, sahada gözlemlenen genel durumu da içeren bir rapor sunarız — hangi armatürlerin ömrünü tamamladığı, hangi hatların yenilenmeye ihtiyaç duyduğu gibi gözlemsel notlar. Bu, sözleşme kapsamının dışında bir danışmanlık hizmeti değil, bakım turunun doğal bir çıktısıdır ve bir sonraki dönem bütçesinin planlanmasına yardımcı olur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bakım takvimi kalemleri ve tipik sıklık",
                paragraflar: [
                    "Enerji ve aydınlatma bakım kontratlarında sık kullanılan kalemler ve tipik kontrol sıklıkları aşağıdaki tabloda özetlenmiştir. Gerçek takvim, tesisinizin altyapısına göre birlikte belirlenir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Tipik sıklık", "Öncelik sınıfı", "Dikkat edilecek nokta"],
                    satirlar: [
                        ["Yüksek direk armatürü", "Yılda 1-2 kez", "Planlı", "Enerji kesintisi koordinasyonu"],
                        ["Tabela / reklam panosu", "Çeyrek dönemde bir", "Planlı", "Bina/işletme sahibiyle erişim izni"],
                        ["Çatı üstü aydınlatma", "Yıllık", "Planlı", "Çatı erişim ve zemin güvenliği"],
                        ["Otopark / çevre yolu aydınlatması", "Rota bazlı, dönemsel", "Planlı, rota mantığı", "Coğrafi kümeleme"],
                        ["Ani aydınlatma kesintisi", "Talep anında", "Acil", "Kısa karşılama süresi hedefi"],
                    ],
                },
            },
            {
                baslik: "Enerji kesintisi koordinasyonunun sözleşmedeki yeri",
                paragraflar: [
                    "Enerji hattı üzerinde çalışma gerektiren bakım işlerinde, işin güvenle yapılabilmesi için ilgili hattın veya devrenin kesilmesi gerekebilir. Bu koordinasyon bizim değil, genellikle tesisin kendi elektrik biriminin veya bina yönetiminin sorumluluğundadır; sözleşmede bu sorumluluk sınırı net yazılır. Bizim tarafımızdaki yükümlülük, kesinti gerektiren işleri önceden bildirmek ve kesinti penceresi belirlendiğinde o pencereye uymaktır.",
                    "Bu koordinasyonun önceden planlanmadığı durumlarda saha ekibimiz işi başlatamaz ve bu, taahhüt edilen karşılama süresinin dışında kalan ama gerçekte gecikmeye yol açan bir unsura dönüşür. Bu yüzden enerji kesintisi gerektiren kalemler bakım takviminde ayrıca işaretlenir ve bu kalemler için talep açma süresi diğer kalemlere göre daha geniş tutulur.",
                ],
            },
            {
                baslik: "Dönem sonu raporunun bütçe planlamasına katkısı",
                paragraflar: [
                    "Yıllık bakım kontratının en somut çıktılarından biri, dönem sonu raporundaki gözlemsel notlardır. Sahada gördüğümüz genel durumu — hangi ekipmanın yenilenmeye yaklaştığı, hangi hattın tekrarlayan arıza ürettiği — bu raporda paylaşırız. Bu bilgi, bir sonraki dönemin bakım bütçesinin ve varsa yenileme yatırımının planlanmasında kurumun kendi mühendislik veya tesis yönetimi ekibine somut bir girdi sağlar; biz bu notları teknik bir yorum olarak sunarız, kesin bir mühendislik değerlendirmesi olarak değil.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yıllık bakım takviminde hangi kalemlerin olacağına nasıl karar veriyoruz?",
                cevap:
                    "Devreye alma döneminde tesisinizin aydınlatma ve enerji altyapısının envanterini birlikte çıkarırız — hangi noktada hangi tip armatür, direk veya pano olduğu, bunların erişim zorluğu ve mevcut kontrol geçmişi (varsa). Bu envanterden yola çıkarak her kalem için makul bir kontrol sıklığı öneririz; kesin sıklığı sizin iç standartlarınız veya mevzuat gereksinimleriniz varsa onlara göre ayarlarız. Takvim, sözleşme dönemi başında yazılır ama yıl içinde ihtiyaç değişirse revize edilebilir.",
            },
            {
                soru: "Gece aniden aydınlatma kesilirse ne kadar sürede müdahale ediyorsunuz?",
                cevap:
                    "Bu, sözleşmede acil öncelik sınıfına girer ve hedef süre, planlı kontrol talebinden belirgin şekilde daha kısadır. Sürenin tam rakamı, tesisinizin lokasyonu ve bizim o bölgedeki nakliye kapasitemize göre sözleşme görüşmesinde netleştirilir. Eğer arıza enerji hattı kaynaklıysa ve kesinti koordinasyonu gerektiriyorsa, bu koordinasyonun kendisi bir zaman unsuru ekler — bu durumda süre, sizin elektrik biriminizle koordinasyonun ne kadar hızlı kurulduğuna da bağlıdır.",
            },
            {
                soru: "Enerji kesintisi koordinasyonunu siz mi yoksa biz mi yapıyoruz?",
                cevap:
                    "Genel kural, bu koordinasyonun sizin (veya bina yönetiminizin, dağıtım şirketinizin) sorumluluğunda olmasıdır; biz kesinti gerektiren işleri önceden bildirir, siz kesinti penceresini ayarlarsınız, biz o pencereye göre işi planlarız. Sözleşme ekinde bu sorumluluk sınırı yazılı olarak netleştirilir, çünkü bu konuda belirsizlik en çok gecikmeye yol açan noktadır. Bazı büyük kurumsal tesislerde kendi elektrik ekibi bu koordinasyonu bizimle doğrudan yürütür, bu durumda muhatap netleşir ve süreç hızlanır.",
            },
            {
                soru: "Otoparkımız ve çevre yolumuz farklı noktalarda, hepsini tek turda mı kontrol ediyorsunuz?",
                cevap:
                    "Evet, dağınık aydınlatma noktalarını coğrafi olarak kümeleyip rota bazlı bir tur planlarız — bu hem sizin için daha düşük maliyetli hem bizim için daha verimlidir. Bakım takviminde bu rota, hangi noktaların aynı turda birleştirileceği şeklinde tanımlanır. Bir noktada beklenmedik bir arıza çıkarsa ve bu acil sınıftaysa, rotayı beklemeden ayrı bir müdahale planlarız; rutin kontroller ise rota takvimine göre yürür.",
            },
            {
                soru: "Dönem sonu raporunda hangi ekipmanın değişmesi gerektiğini de söylüyor musunuz?",
                cevap:
                    "Evet, sahada gözlemlediğimiz genel durumu rapora dahil ederiz — örneğin bir armatürün ömrünü tamamladığını veya bir hattın tekrarlayan arıza ürettiğini not ederiz. Bunu kesin bir mühendislik değerlendirmesi olarak değil, bakım turunun doğal bir gözlemi olarak sunarız; kurumunuzun kendi teknik ekibi bu notları kendi değerlendirmesine girdi olarak kullanabilir. Detaylı bir mühendislik raporu veya ömür analizi gerekiyorsa, bu bizim hizmet kapsamımızın dışındadır ve bunu size açıkça söyleriz.",
            },
            {
                soru: "Bakım takvimindeki bir kalemi yıl ortasında iptal edebilir miyiz?",
                cevap:
                    "Evet, takvim baştan kesin bir taahhüt değil gözden geçirilebilir bir plandır. Bir kalemin artık gerekmediğini (örneğin ilgili tabela kaldırıldıysa) fark ederseniz, yazılı bir bildirimle takvimden çıkarılır ve fiyat buna göre güncellenir. Aynı şekilde yeni bir kalem eklenmesi de mümkündür. Tek istediğimiz, değişikliğin bir sonraki planlı tur öncesinde bize bildirilmesidir; bu, kapasite planlamamızın sağlıklı işlemesini sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Aydınlatma/enerji bakımının periyodik yapısı ve enerji kesintisi koordinasyonu gerekliliği sektör standardı genel bilgidir; bakım takvimi kurgusu, rota bazlı planlama ve dönem sonu gözlemsel rapor pratiği firma pratiğidir.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Sözleşmede Operatörlü / Operatörsüz Ayrımının Fiyat ve Sorumluluk Etkisi",
        giris:
            "Bir çerçeve sözleşmenin fiyat listesinde operatörlü ve operatörsüz kiralama, aynı makine sınıfı için iki farklı satır olarak yer alır ve bu ikisi arasındaki fark yalnızca bir hizmet ekleme meselesi değildir — sorumluluk, sigorta kapsamı ve iş güvenliği yükümlülüğü açısından da farklı bir çerçeve doğurur. Operatörsüz kiralamada makineyi kullanan kişi müşterinin personelidir ve bu personelin yeterlilik belgesi bir sözleşme şartıdır; operatörlü kiralamada ise makineyi kullanan kişi bizim personelimizdir ve iş güvenliği sorumluluğunun bir kısmı bize geçer. Kurumsal müşterilerin bu ayrımı net yazılı görmek istemesinin nedeni budur — bir kaza veya olay durumunda hangi tarafın hangi yükümlülüğü taşıdığı, sözleşmede önceden tanımlanmış olmalıdır. Bu sayfa, operatörlü ve operatörsüz kiralamanın bir kurumsal sözleşmede nasıl ayrı maddeler olarak kurulduğunu anlatır.",
        maddeler: [
            {
                baslik: "Fiyat listesinde ayrı satır olarak yer alması",
                metin:
                    "Fiyat listesinde her makine sınıfı için operatörlü ve operatörsüz seçenek ayrı birim fiyatla yazılır; bu, dönem içinde ihtiyaç değiştiğinde (örneğin personel yetersizliği nedeniyle bir dönem operatörlü çalışmaya geçmek gerektiğinde) yeniden fiyat görüşmesi yapılmadan seçim değiştirilebilmesini sağlar. İki seçenek arasındaki fark, sadece personel maliyeti değil, aynı zamanda üstlenilen sorumluluğun kapsamıdır.",
            },
            {
                baslik: "Operatörsüz kiralamada yeterlilik belgesi şartı",
                metin:
                    "Operatörsüz kiralamada, makineyi kullanacak personelin sınıfa uygun yeterlilik belgesine sahip olması sözleşme şartıdır; bu belge sözleşme dosyasında kayıt altına alınır ve süresi takip edilir. Belgesi olmayan personelin makineyi kullanması hem mevzuata hem sigorta şartlarına aykırıdır ve bu durumda sorumluluk büyük ölçüde müşteri tarafına geçer. Bu yüzden operatörsüz kiralama öncesi belge kontrolü atlanmaz.",
            },
            {
                baslik: "Operatörlü kiralamada sorumluluk paylaşımı",
                metin:
                    "Operatörlü kiralamada makineyi bizim personelimiz kullandığı için, makinenin doğru ve güvenli kullanımından kaynaklanan sorumluluğun bir kısmı bize geçer; ancak sahadaki genel iş güvenliği koşulları (örneğin çalışma alanının güvenli hâle getirilmesi, diğer ekiplerle koordinasyon) yine tesisin sorumluluğundadır. Sözleşmede bu sorumluluk sınırı net çizilir — operatörlü kiralama, tesisin tüm iş güvenliği yükünü bizim üzerimize almaz, sadece makinenin operasyonel kullanımını kapsar.",
            },
            {
                baslik: "Karma kullanım: bazı sınıflar operatörlü, bazıları değil",
                metin:
                    "Bazı kurumsal müşteriler, kendi personelinin belgeli olduğu sınıflarda operatörsüz, belgesiz olduğu sınıflarda operatörlü çalışmayı tercih eder. Fiyat listesi bu karma kullanıma izin verecek şekilde kurulur — her sınıf için ayrı ayrı seçim yapılabilir, tüm filo için tek bir kural dayatılmaz. Bu esneklik, personel yeterliliğinizin zaman içinde değişmesine (yeni eğitim, personel devri) sözleşmeyi yeniden kurmadan uyum sağlamanızı mümkün kılar.",
            },
            {
                baslik: "Operatör personelin tesise özgü oryantasyonu",
                metin:
                    "Operatörlü kiralamada bizim personelimiz sahaya geldiğinde, tesisin kendi çalışma izni ve İSG prosedürüne uyması gerekir — bu, operatörsüz kiralamadan farklı bir madde değildir ama operatörlü kiralamada bizim sorumluluğumuz altında yönetilir. Devreye alma döneminde düzenli çalışacak operatör personelimiz oryantasyondan geçirilir ve bu kayıt tutulur, böylece her talepte yeniden oryantasyon süreci yaşanmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü ve operatörsüz karşılaştırması",
                paragraflar: [
                    "İki seçeneğin sorumluluk, fiyat ve şart açısından farkları aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Boyut", "Operatörsüz", "Operatörlü", "Sözleşmede tanımlanan nokta"],
                    satirlar: [
                        ["Makineyi kullanan", "Müşteri personeli", "Bizim personelimiz", "Yetkili kişi listesi"],
                        ["Yeterlilik şartı", "Sınıfa uygun belge zorunlu", "Bizim tarafımızda karşılanır", "Belge kayıt ve süre takibi"],
                        ["Operasyonel sorumluluk", "Büyük ölçüde müşteride", "Kısmen bize geçer", "Sorumluluk sınırı maddesi"],
                        ["Fiyat", "Daha düşük birim fiyat", "Personel maliyeti dahil", "Ayrı fiyat listesi satırı"],
                        ["Esneklik", "Sınıf bazında seçilebilir", "Sınıf bazında seçilebilir", "Karma kullanım maddesi"],
                    ],
                },
            },
            {
                baslik: "Hangi durumda operatörlü çalışmayı öneriyoruz",
                paragraflar: [
                    "Operatörlü kiralamayı özellikle şu durumlarda öneririz: personelinizin ilgili sınıfta yeterlilik belgesi yoksa veya belge süresi dolmuşsa, işin karmaşıklığı (dar alan, hassas zemin, yüksek uzanım) deneyimli bir kullanım gerektiriyorsa, veya kısa süreli ve tek seferlik bir iş için personel eğitimi yatırımı mantıklı değilse. Sürekli ve yüksek kullanımlı sınıflarda ise operatörsüz çalışma genellikle daha ekonomiktir, çünkü personel maliyeti dönem boyunca tekrarlanmaz.",
                    "Bu öneriyi tek taraflı dayatmayız — sözleşme görüşmesinde her sınıf için ayrı ayrı hangi seçeneğin sizin durumunuza uygun olduğunu birlikte değerlendiririz. Bazı müşteriler bilinçli olarak tüm filoyu operatörlü tutmayı tercih eder çünkü kendi personelini bu işe ayırmak istemez; bazıları ise maliyet avantajı için mümkün olan her sınıfta kendi personelini eğitmeyi tercih eder. İkisi de geçerli bir tercihtir.",
                ],
            },
            {
                baslik: "Belge takibinin sözleşme kapsamına dahil edilmesi",
                paragraflar: [
                    "Operatörsüz kiralamada personel yeterlilik belgelerinin takibini isteğe bağlı olarak sözleşme kapsamına dahil edebiliriz — hangi personelin hangi sınıfta belgesinin olduğunu ve süresinin ne zaman dolacağını kendi takvimimize alır, süre yaklaştığında sizi uyarırız. Bu, özellikle personel devrinin yüksek olduğu operasyonlarda pratik bir fayda sağlar; belgesi geçersiz bir personelin makineyi kullanması hem mevzuata hem sigortaya aykırı bir risktir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Aynı sözleşme içinde bazı makineleri operatörlü, bazılarını operatörsüz kiralayabilir miyiz?",
                cevap:
                    "Evet, bu tercih sınıf bazında yapılır ve fiyat listesi buna göre kurulur. Personelinizin belgeli olduğu sınıflarda operatörsüz, belgesiz olduğu veya işin karmaşıklığının deneyimli kullanım gerektirdiği sınıflarda operatörlü çalışabilirsiniz. Bu seçim dönem içinde de değişebilir — örneğin personeliniz yeni bir belge alırsa, o sınıfı operatörsüz kullanmaya geçebilirsiniz; bunun için sözleşmeyi yeniden kurmanız gerekmez, yazılı bir bildirim yeterlidir.",
            },
            {
                soru: "Operatörlü kiralamada bir kaza olursa sorumluluk kimde?",
                cevap:
                    "Sözleşmede bu sorumluluk sınırı net çizilir: makinenin operasyonel kullanımından (doğru teknikle çalıştırılması, güvenli manevra) kaynaklanan bir olayda sorumluluk büyük ölçüde bize aittir çünkü makineyi kullanan bizim personelimizdir. Ancak sahadaki genel iş güvenliği koşulları — örneğin çalışma alanının güvenli hâle getirilmesi, başka bir ekibin güvensiz bir müdahalesi — tesisin sorumluluğunda kalmaya devam eder. Bu sınırı sözleşme görüşmesinde birlikte netleştirir, genel çerçeve sözleşmemizdeki sorumluluk maddesiyle uyumlu hâle getiririz.",
            },
            {
                soru: "Personelimizin belgesi operatörsüz kiralama için yeterli mi, nasıl kontrol ediyorsunuz?",
                cevap:
                    "Sözleşme kurulmadan önce, kullanılacak her sınıf için hangi yeterlilik belgesinin arandığını yazılı olarak paylaşırız ve personelinizin mevcut belgelerini bu listeyle karşılaştırırız. Eksik veya süresi dolmuş bir belge varsa, o sınıf için operatörlü çalışmayı öneririz ya da personelinizin belge sürecini tamamlamasını bekleriz — belgesiz kullanım riskini göze almayız. İsterseniz belge takibini sözleşme kapsamına dahil ederiz, böylece süre dolmadan önce sizi uyarırız.",
            },
            {
                soru: "Operatörlü kiralama fiyatı ne kadar farklı, hesap nasıl yapılıyor?",
                cevap:
                    "Fark, operatör personelin çalışma süresi boyunca maliyetini yansıtır ve fiyat listesinde ayrı bir satır olarak önceden bellidir — talep anında pazarlık edilmez. Kısa süreli veya tek seferlik işlerde operatörlü seçenek genellikle toplam maliyeti daha öngörülebilir kılar çünkü personel eğitimi veya belge yatırımı gerekmez; uzun süreli ve yüksek kullanımlı işlerde ise operatörsüz seçenek genellikle daha ekonomiktir. Hangisinin sizin durumunuz için daha avantajlı olduğunu, kullanım süresi ve sıklığınıza göre birlikte hesaplarız.",
            },
            {
                soru: "Operatör personeliniz bizim tesisimizin güvenlik kurallarına uyuyor mu?",
                cevap:
                    "Evet, düzenli çalışacak operatör personelimiz devreye alma döneminde tesisinizin çalışma izni ve İSG oryantasyonundan geçirilir ve bu kayıt sözleşme dosyasında tutulur. Bu, operatörlü kiralamanın standart bir parçasıdır; personelimizin sizin kurallarınıza uyması bizim sorumluluğumuzdadır. Yeni bir personel göreve başladığında da aynı oryantasyon süreci tekrarlanır, bunu sizden habersiz atlamayız.",
            },
            {
                soru: "Operatörsüz başladık ama personelimiz ayrıldı, hemen operatörlü geçiş yapabilir miyiz?",
                cevap:
                    "Evet, bu senaryo tam olarak fiyat listesinin karma kullanıma izin verecek şekilde kurulmasının nedenidir. Personel değişikliği veya belge eksikliği yaşandığında yazılı bir bildirimle o sınıf için operatörlü çalışmaya geçebilirsiniz; sözleşmeyi yeniden kurmanız gerekmez, sadece o dönem için hangi fiyat satırının uygulanacağı değişir. Bu esneklik, personel devrinin kaçınılmaz olduğu operasyonlarda sözleşmenin sürekli işlemesini sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Operatörlü/operatörsüz kiralama ayrımı ve yeterlilik belgesi gerekliliği sektör standardı genel bilgidir; fiyat listesi ayrımı, sorumluluk sınırı maddesi ve karma kullanım esnekliği firma pratiğidir.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Çok Noktalı Rota Bakımının Çerçeve Sözleşmeye Bağlanması",
        giris:
            "Bir kurumun tek bir tesisi değil de birbirinden coğrafi olarak ayrık birden fazla küçük lokasyonu (şube ağı, dağıtım noktaları, tabela ve reklam panosu ağı, aydınlatma direği hattı gibi) varsa, bakım ihtiyacı tek büyük bir talep değil, çok sayıda küçük ve dağınık taleptir. Bu tip talebi standart bir çağrı bazlı düzenle karşılamaya çalışmak, her nokta için ayrı bir talep açma, ayrı bir teslimat ve ayrı bir faturalama anlamına gelir — bu, hem satın alma hem operasyon tarafında orantısız bir idari yük üretir. Bizim çok lokasyonlu çerçeve sözleşme modelimizin bir alt uygulaması olarak kurduğumuz rota bakım düzeni, bu dağınık talebi tek bir planlanmış tura dönüştürür: coğrafi olarak yakın noktalar aynı tur içinde birleştirilir, tek bir sefer içinde birden fazla nokta ziyaret edilir ve tek bir rapor üretilir. Bu sayfa, çok noktalı rota bakımının bir kurumsal sözleşmede nasıl kurulduğunu anlatır.",
        maddeler: [
            {
                baslik: "Nokta listesinin ve rota gruplarının oluşturulması",
                metin:
                    "Sözleşme kurulurken, bakım gerektiren tüm noktaların listesi çıkarılır ve bu noktalar coğrafi yakınlığa göre rota gruplarına ayrılır — aynı ilçe veya aynı güzergah üzerindeki noktalar tek bir grupta toplanır. Bu gruplama, hem maliyet verimliliği hem planlama kolaylığı sağlar. Nokta listesi sözleşmenin ekinde yer alır ve yeni bir nokta eklenmesi veya çıkarılması yazılı bildirimle yapılır, sözleşme yeniden kurulmaz.",
            },
            {
                baslik: "Tur sıklığının ve rotanın planlanması",
                metin:
                    "Her rota grubu için bir tur sıklığı belirlenir — bazı gruplar aylık, bazıları çeyrek dönemde bir ziyaret edilebilir; sıklık, noktaların bakım ihtiyacına göre değişir. Tur sırası da genellikle sabit bir güzergah mantığıyla kurulur, böylece her tur öngörülebilir bir sürede tamamlanır. Bu planlama, hem bizim operasyon açımızdan verimliliği hem sizin bütçe öngörülebilirliğinizi artırır.",
            },
            {
                baslik: "Tur dışı acil talep işleyişi",
                metin:
                    "Rota bazlı planlı turların dışında, belirli bir noktada beklenmedik bir arıza çıkarsa bu, rota takviminin dışında ayrı bir acil talep olarak işlenir — bir sonraki planlı tura kadar beklenmez. Sözleşmede bu iki talep tipi (rota bazlı planlı, tur dışı acil) ayrı maddeler olarak tanımlanır ve her birinin kendi hedef karşılama süresi vardır.",
            },
            {
                baslik: "Tek rapor, çok nokta",
                metin:
                    "Her tur tamamlandığında, o turdaki tüm noktaların durumu tek bir raporda birleştirilir — hangi noktada ne kontrol edildi, hangi noktada bir sorun tespit edildi, hangi noktanın bir sonraki tura kadar beklemesi uygun. Bu, sizin tarafınızda her nokta için ayrı ayrı rapor takip etmek yerine, tek bir belgeden bölge genelindeki durumu görmenizi sağlar.",
            },
            {
                baslik: "Yeni nokta eklenmesinin rotaya entegrasyonu",
                metin:
                    "Şube ağınız büyüdükçe veya yeni bir lokasyon açıldıkça, yeni noktalar mevcut rota gruplarından birine coğrafi yakınlığına göre eklenir; bu, yeni bir sözleşme veya ayrı bir fiyat görüşmesi gerektirmez. Eğer yeni nokta mevcut rota gruplarının hiçbirine coğrafi olarak yakın değilse, bunu size söyleriz ve ya yeni bir rota grubu açarız ya da o nokta için ayrı bir çağrı bazlı düzen öneririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Rota bazlı ile tekil talep karşılaştırması",
                paragraflar: [
                    "Çok noktalı bir ağda rota bazlı planlama ile her noktayı ayrı ayrı tekil talep olarak yönetmenin farkı aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Boyut", "Tekil talep (nokta başına)", "Rota bazlı planlama", "Fark"],
                    satirlar: [
                        ["Maliyet", "Her seferde ayrı nakliye maliyeti", "Paylaşılan tur maliyeti", "Rota bazlı daha düşük"],
                        ["Planlama", "Talep geldikçe reaktif", "Önceden belirlenmiş takvim", "Rota bazlı öngörülebilir"],
                        ["Raporlama", "Nokta başına ayrı rapor", "Tur bazlı tek rapor", "Rota bazlı daha az idari yük"],
                        ["Acil müdahale", "Aynı hızda", "Rota dışı ayrı süreçle", "Her ikisinde de acil öncelik korunur"],
                        ["Yeni nokta ekleme", "Yeni sözleşme gerekebilir", "Mevcut rotaya entegrasyon", "Rota bazlı daha esnek"],
                    ],
                },
            },
            {
                baslik: "Rota gruplarının nasıl kurulduğu",
                paragraflar: [
                    "Bir rota grubu oluştururken sadece coğrafi yakınlığa değil, aynı zamanda erişim koşullarına da bakarız — örneğin bir grup içindeki tüm noktalar açık saha erişimliyse bir makine yeterli olabilir, bazı noktalar kapalı hacim gerektiriyorsa farklı bir ekipman kombinasyonu planlanır. Bu ayrıntı, tur planlamasının teorik bir harita çiziminden öteye, gerçekten uygulanabilir bir operasyona dönüşmesini sağlar.",
                    "Devreye alma döneminde nokta listesini birlikte gözden geçirir, her noktanın kısa bir profilini (erişim tipi, bakım ihtiyacı, varsa özel kısıt) çıkarırız. Bu profil, ilk turdan itibaren doğru ekipmanla gitmemizi sağlar; profil eksik olduğunda ilk tur bir keşif turuna dönüşebilir ve bu, planlanan verimliliği düşürür.",
                ],
            },
            {
                baslik: "Bütçe öngörülebilirliği açısından katkısı",
                paragraflar: [
                    "Rota bazlı planlamanın satın alma tarafındaki en somut faydası bütçe öngörülebilirliğidir: her rota grubunun tur sıklığı ve birim fiyatı dönem başında bellidir, bu yüzden yıllık bakım bütçesi tekil taleplerin toplamı gibi belirsiz değil, sabit bir kalem olarak planlanabilir. Tur dışı acil taleplerin payı da geçmiş dönem verisine dayanarak tahmin edilebilir, böylece bütçenin tamamı öngörülebilir hâle gelir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kaç noktamız olursa rota bazlı planlama mantıklı olur?",
                cevap:
                    "Kesin bir eşik yoktur ama genel eğilim şudur: birbirine coğrafi olarak yakın en az birkaç noktanız varsa ve bu noktaların bakım ihtiyacı benzer bir sıklıkta tekrarlıyorsa, rota bazlı planlama tekil taleplere göre neredeyse her zaman daha verimlidir. Az sayıda ve birbirinden uzak noktalarınız varsa, rota mantığı fazla fayda sağlamayabilir ve standart çağrı bazlı düzen daha uygun olabilir. Nokta listenizi paylaştığınızda, rota gruplaması yapmanın sizin için avantajlı olup olmadığını somut olarak gösteririz.",
            },
            {
                soru: "Rota turunun arasında bir noktada acil arıza çıkarsa bir sonraki tura kadar mı bekliyoruz?",
                cevap:
                    "Hayır. Tur dışı acil talep, rota takviminden bağımsız ayrı bir süreçle işlenir ve kendi hedef karşılama süresi vardır — bu süre, planlı rota turundan daha kısadır çünkü aciliyeti farklıdır. Rota bazlı planlama, sadece rutin ve öngörülebilir bakımı bir araya toplar; beklenmedik bir arıza her zaman kendi önceliğinde ele alınır. Bu ayrımı sözleşmede net yazarız, böylece rota bazlı çalışmanın acil müdahaleyi geciktireceği yanlış anlaşılmasının önüne geçeriz.",
            },
            {
                soru: "Yeni bir şube açtığımızda rotaya nasıl ekleniyor?",
                cevap:
                    "Yeni noktayı bize bildirdiğinizde, coğrafi konumuna göre mevcut rota gruplarından birine eklenir ve o gruptaki bir sonraki turda kapsam altına alınır; bunun için sözleşmeyi yeniden kurmanıza gerek yoktur. Eğer yeni nokta mevcut rota gruplarının hiçbirine yakın değilse, bunu size söyler ve ya yeni bir rota grubu açarız ya da o nokta için ayrı bir çağrı bazlı düzen öneririz — her iki durumda da net bir plan sunarız, belirsiz bırakmayız.",
            },
            {
                soru: "Rota raporunu hangi formatta alıyoruz?",
                cevap:
                    "Her tur tamamlandığında, o turdaki tüm noktaların durumunu tek bir raporda birleştiririz: hangi noktada ne kontrol edildi, hangi noktada bir sorun tespit edildi, gerekiyorsa ek bir müdahale önerisi. Formatı, sizin iç raporlama sisteminize uyacak şekilde devreye alma döneminde birlikte belirleriz. Bu tek rapor, çok sayıda ayrı belge takip etmek yerine bölge genelindeki durumu bir bakışta görmenizi sağlar.",
            },
            {
                soru: "Rota bazlı çalışmanın bize maliyet avantajı olduğunu nasıl gösterebilirsiniz?",
                cevap:
                    "Nokta listenizi ve tahmini bakım sıklığınızı aldığımızda, aynı ihtiyacı tekil talep olarak (her nokta için ayrı nakliye ve planlama) karşılamanın maliyetiyle, rota bazlı gruplandığında oluşacak maliyeti yan yana hesaplarız. Fark genellikle nakliye ve planlama verimliliğinden kaynaklanır — aynı tur içinde birden fazla nokta ziyaret edildiğinde, nakliye maliyeti noktalar arasında paylaşılır. Bu hesabı sözleşme görüşmesinde somut rakamlarla gösteririz, soyut bir vaat olarak bırakmayız.",
            },
            {
                soru: "Rota gruplarının sıklığını dönem içinde değiştirebilir miyiz?",
                cevap:
                    "Evet, tur sıklığı baştan kesin bir taahhüt değil, gözden geçirilebilir bir plandır. Bir rota grubundaki noktaların bakım ihtiyacı beklenenden daha sık veya daha seyrek çıkarsa (dönem raporundaki bulgulara dayanarak), sıklığı yazılı bir revizyonla güncelleriz. Bu değişiklik için sözleşmenin yeniden kurulmasına gerek yoktur, mevcut çerçeve içinde takvim satırı güncellenir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Coğrafi kümeleme ile rota bazlı bakım planlaması sektör standardı genel bir lojistik yaklaşımdır; rota grubu kurgusu, tur dışı acil talep ayrımı ve tek rapor formatı firma pratiğidir.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Zor Zemin ve Arazi İşleri: Kontrat Kapsamımızın Sınırı",
        giris:
            "Kurumsal tedarik kontratı modelimiz, büyük ölçüde OSB'lerin, sanayi sitelerinin ve kurumsal tesislerin sert ve düzgün zeminleri (beton, asfalt, sıkıştırılmış zemin) üzerine kuruludur — filomuzun ağırlığı da bu zemin tipine uygun lastik ve tahrik konfigürasyonuna sahiptir. Hazırlıksız, engebeli veya yumuşak arazi koşulları, farklı bir makine sınıfı (geniş lastikli, düşük zemin basıncı üreten veya paletli özel arazi tipi ekipman) gerektirir ve bu, bizim standart filomuzun doğal güçlü olduğu alan değildir. Bunu dürüstçe söylemeyi tercih ediyoruz: eğer düzenli olarak zorlu arazi koşullarında çalışan bir işiniz varsa, bu alana özel ekipmana sahip bir tedarikçiyle çalışmanız muhtemelen daha uygun olacaktır. Buna karşılık, standart bir kurumsal tesisin çevresinde ara sıra çıkan, sınırlı ölçekli zor zemin ihtiyaçlarında elimizdeki filoyu değerlendirebiliriz ve nerede sınırımızın bittiğini net söyleriz. Bu sayfa, bu sınırı ve sınırın içinde kaldığımız durumlarda nasıl bir yaklaşım izlediğimizi anlatır.",
        maddeler: [
            {
                baslik: "Filomuzun zemin varsayımı",
                metin:
                    "Kurumsal fiyat listemizdeki makine sınıfları, OSB ve sanayi tesisi zemin koşullarına göre seçilmiştir — genellikle standart lastik konfigürasyonu ve sert-orta zemin taşıma varsayımı. Yumuşak toprak, çamur, kum veya belirgin eğimli arazide bu konfigürasyon yetersiz kalabilir ve makinenin saplanma veya devrilme riski oluşturur. Bu riski göze alarak uygun olmayan bir işi kabul etmeyiz; bunun yerine sahanın zemin durumunu önceden sorar, uygun olup olmadığımızı dürüstçe değerlendiririz.",
            },
            {
                baslik: "Sınırda kalan durumlar: değerlendirme kriterleri",
                metin:
                    "Bazı işler tam olarak 'uygun' veya 'uygun değil' kategorisine kolayca girmez — örneğin hafif engebeli ama kuru ve sıkışmış bir zemin, standart filomuzla dikkatli bir değerlendirmeyle karşılanabilir. Bu tür sınırda kalan durumlarda saha koşullarını (zemin nemi, eğim derecesi, taşıma geçmişi varsa) sorar, mümkünse kısa bir saha ziyaretiyle netleştiririz. Net bir cevap veremediğimiz durumda, riski müşteriye üstü kapalı geçirmek yerine 'bu konuda emin değiliz, saha ziyareti gerekir' deriz.",
            },
            {
                baslik: "Kurumsal tesis çevresindeki sınırlı arazi işleri",
                metin:
                    "OSB veya sanayi tesisi çevresinde, tesisin kendi arazisinin bir bölümünde (örneğin bahçe düzenlemesi öncesi hazırlık alanı, henüz asfaltlanmamış bir genişleme sahası) sınırlı ölçekli bir zor zemin ihtiyacı çıkabilir. Bu tür işlerde, işin ölçeği ve süresi küçük olduğu için filomuzdaki uygun bir alt sınıfla (geniş lastikli, düşük zemin basıncı) destek olabiliriz; büyük ölçekli ve sürekli arazi işleri için bu geçerli değildir.",
            },
            {
                baslik: "Hava koşulunun zemin durumuna etkisi",
                metin:
                    "Yağışlı dönemlerde daha önce uygun değerlendirdiğimiz bir zemin bile geçici olarak yumuşayabilir; bu yüzden zor zemin sınırındaki işlerde talep açıldığı andaki hava ve zemin durumunu ayrıca sorarız. Kuru dönemde uygun olan bir saha, yağış sonrası aynı gün uygun olmayabilir — bu değişkenliği önceden söyleriz, sabit bir 'uygun' cevabı vermeyiz.",
            },
            {
                baslik: "Uygun olmadığımız durumda yönlendirme",
                metin:
                    "İşin bizim filomuzun kapasitesini aştığını değerlendirdiğimizde, bunu geciktirmeden söyleriz ve aramanız gereken ekipman profilini (paletli, geniş lastikli, düşük zemin basıncı üreten arazi tipi platform) tarif ederiz. Yanlış bir makineyle sahaya girip işi yarıda bırakmak, hem sizin işinizi geciktirir hem güvenlik riski oluşturur — bu yüzden baştan doğru değerlendirme yapmayı, sonradan sahada geri çekilmeye tercih ederiz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin tipine göre uygunluk değerlendirmesi",
                paragraflar: [
                    "Farklı zemin ve arazi koşullarında filomuzun uygunluk durumunu aşağıdaki tabloda özetledik.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Uygunluğumuz", "Neden", "Öneri"],
                    satirlar: [
                        ["Beton / asfalt", "Uygun", "Standart filo konfigürasyonu", "—"],
                        ["Sıkıştırılmış, kuru toprak", "Uygun", "Yeterli taşıma kapasitesi", "—"],
                        ["Hafif engebeli, kuru zemin", "Sınırda, değerlendirme gerekir", "Eğim ve zemin sertliğine bağlı", "Saha bilgisi/ziyareti ile netleştirilir"],
                        ["Yumuşak toprak, çamur", "Uygun değil", "Saplanma riski", "Arazi tipi özel ekipman tedarikçisi"],
                        ["Belirgin eğimli arazi", "Uygun değil", "Devrilme riski", "Arazi tipi özel ekipman tedarikçisi"],
                    ],
                },
            },
            {
                baslik: "Neden bu sınırı net çiziyoruz",
                paragraflar: [
                    "Kurumsal tedarik ilişkisinin temeli, taahhüt ettiğimiz her şeyin arkasında durabilmemizdir. Zor zemin ve arazi işlerinde güçlü olduğumuzu iddia edip sonra sahada makinenin saplandığını görmek, hem o işi hem de bizimle kurulu genel çerçeve sözleşmeye olan güveni zedeler. Bu yüzden bu segmentte net bir sınır çiziyoruz: standart kurumsal tesis zemini bizim güçlü olduğumuz alandır, gerçek arazi koşulları değildir.",
                    "Bu netlik, aslında sözleşmeli müşterilerimiz için de bir güvence niteliği taşır — bir tedarikçinin nerede güçlü nerede zayıf olduğunu bilmeniz, sözleşme kapsamınızı doğru kurmanızı sağlar. Kapsamınızda hem kurumsal tesis hem zorlu arazi işi varsa, ikisi için iki ayrı tedarikçiyle çalışmanızı, bu ikisini tek çerçeveye zorlamamanızı öneririz.",
                ],
            },
            {
                baslik: "Saha değerlendirmesinin nasıl yapıldığı",
                paragraflar: [
                    "Sınırda kalan bir talep geldiğinde, önce telefonda birkaç temel soruyla (zemin tipi, nem durumu, eğim, önceki ağır ekipman geçiş geçmişi) ön değerlendirme yaparız. Belirsizlik devam ediyorsa, kısa bir saha ziyaretiyle zemin durumunu yerinde görürüz — bu ziyaret genellikle ücretsizdir ve amacı, hem sizin hem bizim için doğru bir karar vermektir. Saha ziyareti sonrası ya uygun bir çözüm sunarız ya da dürüstçe uygun olmadığımızı söyleriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimizin arka bahçesinde toprak bir alanda kısa bir iş var, uygun musunuz?",
                cevap:
                    "Zemin durumuna bağlı — sıkıştırılmış ve kuru bir toprak zeminse, filomuzdaki uygun bir alt sınıfla muhtemelen destek olabiliriz. Zemin yumuşak, çamurlu veya belirgin eğimliyse uygun değiliz ve bunu söyleriz. Talebinizi aldığımızda zemin nemi, sertliği ve eğim durumu hakkında birkaç soru sorarız; net değilse kısa bir saha ziyaretiyle görmeyi öneririz. Bu değerlendirmeyi atlayıp tahminle ilerlemeyiz, çünkü yanlış tahminin bedeli sahada makinenin saplanması olabilir.",
            },
            {
                soru: "Yağmur sonrası aynı sahaya gidebilir misiniz?",
                cevap:
                    "Daha önce uygun bulduğumuz bir saha, yağış sonrası geçici olarak yumuşayabilir — bu yüzden zemin sınırındaki işlerde talep açıldığı andaki güncel durumu ayrıca sorarız. Yağış sonrası birkaç gün beklemek, zeminin toparlanması için genellikle yeterlidir; acil bir ihtiyaç varsa sahayı tekrar değerlendirir, gerekirse geçici bir zemin desteği (plaka gibi) önerisinde bulunuruz. Riski görmezden gelip yine de gitmeyi tercih etmeyiz.",
            },
            {
                soru: "Bize uygun değilsiniz derseniz, nasıl bir tedarikçi aramalıyız?",
                cevap:
                    "Belirli bir isim vermek yerine aranması gereken profili tarif ederiz: geniş lastikli veya paletli, düşük zemin basıncı üreten, arazi tipi işlere alışkın bir tedarikçi. Bu tür firmalar genellikle bizim gibi OSB/kurumsal tesis ağırlıklı çalışan firmalardan farklı bir filo ve fiyatlama mantığıyla çalışır. Yanlış bir makineyle işinizi denemek yerine, doğru profildeki bir tedarikçiye yönlenmeniz, hem zaman hem güvenlik açısından daha iyi bir sonuç verir.",
            },
            {
                soru: "Saha ziyareti ücretli mi?",
                cevap:
                    "Genellikle hayır — sınırda kalan bir talep için yaptığımız kısa saha değerlendirmesi, doğru bir karar vermek amacıyla yapılan bir ön adımdır ve standart olarak ücretsizdir. İstisnası, sahanın çok uzak bir mesafede olduğu veya değerlendirmenin ayrıntılı bir ekipman testi gerektirdiği durumlardır; böyle bir istisna söz konusuysa bunu önceden söyleriz, sürpriz bir ücret çıkarmayız.",
            },
            {
                soru: "Bizim gibi hem kurumsal tesisi hem çevresinde arazi işi olan bir müşteri için tek sözleşme mi öneriyorsunuz?",
                cevap:
                    "Kurumsal tesis kısmı için evet, çerçeve sözleşmemiz altında güçlü bir hizmet sunarız. Ama gerçek arazi işi kısmı için, sizi tek bir tedarikçiye zorlamak yerine, o kısım için arazi tipi ekipmana sahip ayrı bir tedarikçiyle çalışmanızı öneririz — çünkü bu segmentte bizim taahhüt edebileceğimiz seviye, o alana özel bir firmanın taahhüt edebileceği seviyeden düşüktür. Amacımız sözleşme hacmini büyütmek değil, her iş için doğru çözümü göstermektir.",
            },
            {
                soru: "Hafif engebeli bir saha için 'sınırda' derseniz, kararı kim veriyor?",
                cevap:
                    "Kararı birlikte veririz — biz saha bilgisini (zemin sertliği, eğim derecesi, nem durumu) topluyoruz ve teknik değerlendirmemizi paylaşıyoruz; nihai kararda sizin de bilgi sahibi olmanızı isteriz, özellikle riski üstlenecek taraf olarak. Belirsizlik yüksekse saha ziyaretini öneririz, çünkü telefon üzerinden verilen bir tahmin, gerçek zemin gözlemi kadar güvenilir olmaz. Amacımız, hem sizin hem bizim için sürpriz olmayan bir karara varmaktır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Zor zemin/arazi koşullarında ekipman uygunluğu (lastik tipi, zemin basıncı) sektör standardı genel bilgidir; filomuzun bu segmentteki sınırı ve saha değerlendirme süreci firma pratiğidir; hiçbir tesis adı veya kapasite rakamı belirtilmemiştir.",
    },

    "hizmet:makasli-platform-kiralama": {
        h1: "Makaslı Platform: Çok Tesisli Sözleşmede Standart Filo Kalemi",
        giris:
            "Marmara genelinde birden fazla lokasyonu olan kurumsal bir müşteriyle çerçeve sözleşme kurulduğunda, makaslı platform genellikle listenin en sık tekrarlayan ve en kolay standartlaştırılabilen kalemidir — çünkü bu sınıfın kullanım biçimi tesisten tesise büyük farklılık göstermez: dikey erişim, sabit bir çalışma alanı, önceden bilinen bir yükseklik aralığı. Bu öngörülebilirlik, sözleşme tarafında bir fırsata dönüşür: aynı model ailesini birden fazla lokasyonda standart tutmak, hem personel eğitimini (tek kontrol paneli, tek kullanım alışkanlığı) hem bakım takvimini (tek parça envanteri, tek periyodik kontrol takvimi) basitleştirir. Bizim bu sınıftaki yaklaşımımız, tekil bir kiralama işlemi değil, çok lokasyonlu bir filo yönetimi sözleşmesi kurmaktır — hangi model ailesinin kaç lokasyonda kaç adet bulunacağı, ne sıklıkla rotasyona gireceği ve kullanım verisinin nasıl raporlanacağı baştan yazılı hâle getirilir. Bu sayfa, makaslı platformun kurumsal sözleşmede ayrı bir kalem olarak nasıl yönetildiğini anlatır.",
        maddeler: [
            {
                baslik: "Model ailesi standardizasyonu",
                metin:
                    "Birden fazla lokasyonu olan bir müşteride farklı tesislerde farklı marka veya model makaslı platform kullanılması, hem operatör eğitimini hem yedek parça yönetimini karmaşıklaştırır. Sözleşme kurulurken, müşterinin tipik çalışma yüksekliği aralığına uygun bir veya iki model ailesi belirlenir ve mümkün olduğunca tüm lokasyonlarda bu ailenin kullanılması hedeflenir. Bu standardizasyon, yeni bir lokasyon sözleşmeye eklendiğinde de aynı model ailesiyle devam edilmesini sağlar — operatör, hangi tesise giderse gitsin aynı kontrol düzenini görür.",
            },
            {
                baslik: "Kontrat dönemi içinde makine rotasyonu",
                metin:
                    "Tahsisli bir makaslı platform belirli bir yaşa veya kullanım saatine ulaştığında, arıza riski ve bakım maliyeti artmaya başlar; bu yüzden sözleşmede bir rotasyon eşiği tanımlanır. Eşiğe ulaşan makine, dönem içinde bizim tarafımızdan daha genç bir makineyle değiştirilir ve bu değişim müşteriye ek maliyet çıkarmadan, sözleşme kapsamındaki standart hizmetin bir parçası olarak yapılır. Rotasyon takvimi, bakım planımızın bir çıktısıdır; müşterinin bunu takip etmesi beklenmez.",
            },
            {
                baslik: "Çoklu lokasyon talep önceliklendirmesi",
                metin:
                    "Aynı sözleşme altında beş, on veya daha fazla lokasyon varsa, dönemsel yoğunluk (örneğin yıl sonu sayım hazırlığı, planlı bakım durgunluğu) birden fazla lokasyonda aynı anda makaslı platform talebi doğurabilir. Sözleşmede bu senaryo için bir önceliklendirme mantığı yazılır — hangi lokasyonun kritik iş programına göre önce karşılanacağı, talep açıldığı andaki aciliyete göre değil, sözleşme başında birlikte belirlenen bir sıraya göre işler. Bu, talep anında pazarlık yapılmasını önler.",
            },
            {
                baslik: "Kullanım verisinin dönemsel raporlanması",
                metin:
                    "Çok lokasyonlu sözleşmelerde her makinenin hangi tesiste, ne kadar süre ve hangi yoğunlukta kullanıldığı düzenli olarak raporlanır. Bu rapor, müşterinin satın alma ve bakım departmanlarına lokasyon bazlı maliyet dağılımı sağlar ve bir sonraki dönem sözleşme yenilemesinde hangi lokasyonun tahsisli makineye ihtiyacı olduğunu, hangisinin çağrı bazlı yeterli olduğunu somut veriyle gösterir. Raporlama sıklığı ve formatı sözleşme ekinde tanımlanır; bu bizim inisiyatifimize bırakılmaz.",
            },
            {
                baslik: "Periyodik kontrol belgelerinin merkezi takibi",
                metin:
                    "Makaslı platform sınıfının periyodik kontrol (muayene) belgeleri, çok lokasyonlu bir filoda dağınık kalırsa denetim anında ciddi bir zaman kaybına yol açar. Sözleşme kapsamında bu belgeler merkezi bir dosyada tutulur ve hangi makinenin hangi lokasyonda, kontrol tarihi ne zaman dolacak bilgisiyle listelenir. Bir denetim öncesi müşteri bizden tek bir talep göndererek ilgili lokasyonun tüm belge setini alabilir; belgeleri tek tek lokasyon yöneticilerinden toplamak zorunda kalmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Makaslı platform sınıfları ve çok lokasyonlu kullanım profili",
                paragraflar: [
                    "Sözleşme kapsamındaki makaslı platform sınıflarını, tipik kullanım profili ve çok lokasyonlu yönetimdeki yeri açısından aşağıdaki tabloda özetledik.",
                ],
                tablo: {
                    basliklar: ["Sınıf", "Çalışma yüksekliği aralığı", "Tipik kullanım", "Rotasyon önceliği"],
                    satirlar: [
                        ["Kompakt elektrikli", "6-8 m", "Dar koridor, iç mekân bakım", "Yüksek kullanım, kısa rotasyon"],
                        ["Standart elektrikli", "8-12 m", "Depo, üretim hattı üstü", "Orta kullanım, standart rotasyon"],
                        ["Geniş platform / büyük kapasiteli", "10-14 m", "Çok kişili ekip, malzeme taşıma", "Düşük kullanım, uzun rotasyon"],
                        ["Dizel/arazi tipi makaslı", "10-16 m", "Açık saha, sert zemin", "Lokasyona özel, ayrı değerlendirme"],
                    ],
                },
            },
            {
                baslik: "Neden makaslı platformu ayrı bir filo kalemi olarak yönetiyoruz",
                paragraflar: [
                    "Çok lokasyonlu bir sözleşmede her makine sınıfını aynı yoğunlukta yönetmek gerekmez — bazı sınıflar lokasyona özgü kalırken, makaslı platform gibi tekrarlayan ve standartlaştırılabilir sınıflar merkezi bir filo mantığıyla yönetilmeye daha uygundur. Bu ayrımı sözleşme kurulurken yaparız: hangi sınıfların merkezi filo mantığıyla (standart model, rotasyon takvimi, merkezi raporlama), hangilerinin lokasyon bazlı ayrı değerlendirmeyle yönetileceği baştan tanımlanır.",
                    "Bu yaklaşımın müşteriye somut faydası, dönem sonunda tek bir konsolide rapor görebilmesidir — hangi lokasyonda kaç makaslı platform kullanıldığı, toplam maliyetin nasıl dağıldığı, hangi lokasyonların gelecek dönemde tahsisli makineye geçmesi gerektiği. Bu bilgi, lokasyon bazlı dağınık faturalarla değil, tek bir filo yönetimi raporuyla sunulur.",
                ],
            },
            {
                baslik: "Yeni lokasyon eklendiğinde devreye alma",
                paragraflar: [
                    "Mevcut sözleşmeye yeni bir lokasyon eklendiğinde, o lokasyon için ayrı bir sözleşme kurmak yerine mevcut çerçeveye bir ek (ek protokol) yapılır. Yeni lokasyonun tipik çalışma yüksekliği ve kullanım profili değerlendirilir, mümkünse mevcut model ailesiyle uyumlu bir makine tahsis edilir. Bu, yeni lokasyonun operatör eğitimini ve bakım sürecini sıfırdan kurmak yerine mevcut standarda dahil etmesini sağlar; devreye alma süresi de bu sayede kısalır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Beş farklı lokasyonumuz var, hepsinde aynı model makaslı platform mu kullanmalıyız?",
                cevap:
                    "Zorunlu değil ama önerimiz bu yöndedir, çünkü tipik çalışma yükseklikleriniz birbirine yakınsa aynı model ailesi hem operatör eğitimini hem bakım takibini basitleştirir. Lokasyonlarınızdan biri belirgin şekilde farklı bir yükseklik veya zemin koşuluna sahipse, o lokasyon için ayrı bir sınıf tanımlarız — standardizasyonu zorlama amacıyla yanlış makineyi göndermeyiz. Devreye alma döneminde her lokasyonun profilini çıkarır, mümkün olan en fazla ortak noktayı buluruz.",
            },
            {
                soru: "Rotasyon eşiğine ulaşan makine değiştirildiğinde ek ücret çıkar mı?",
                cevap:
                    "Hayır, rotasyon standart hizmetin bir parçasıdır ve sözleşme bedeline dahildir; bu, bizim kendi bakım planımızın bir çıktısıdır, müşteriden ek bir talep beklemeyiz. Rotasyon eşiği (yaş veya kullanım saati) sözleşmede yazılıdır ve bu eşiğe yaklaşan makineler için değişim, o lokasyonun iş programını en az etkileyecek şekilde önceden planlanır — beklenmedik bir anda makine değişimi yapıp işinizi durdurmayız.",
            },
            {
                soru: "Yıl sonu sayım döneminde tüm lokasyonlarımız aynı anda makaslı platform istiyor, hepsini karşılayabilir misiniz?",
                cevap:
                    "Bu tam olarak sözleşmede önceden tanımladığımız önceliklendirme senaryosudur. Yıl sonu gibi dönemsel yoğunluk beklenen dönemler için sözleşme başında sizinle birlikte bir kapasite planı yaparız — hangi lokasyonun ne zaman ihtiyaç duyacağı önceden bildirilirse, o dönem için makine ayırırız. Önceden bildirilmeyen ani bir yoğunlukta ise mevcut filo kapasitesine göre önceliklendirme yaparız; bu öncelik sırası, talep anında değil sözleşme kurulurken birlikte belirlenir.",
            },
            {
                soru: "Periyodik kontrol belgesi süresi dolan bir makine varsa bunu biz mi takip etmeliyiz?",
                cevap:
                    "Hayır, bu takip sözleşme kapsamında bizim tarafımızdan merkezi olarak yapılır. Her makinenin periyodik kontrol tarihi bir dosyada lokasyon bilgisiyle birlikte tutulur ve süre dolmadan önce makine, kontrolü tamamlanmış bir başka makineyle değiştirilir — sizin bu süreci takip etmenize gerek kalmaz. Bir denetim öncesi ilgili lokasyonun güncel belge setini istediğinizde, tek bir talep göndermeniz yeterlidir.",
            },
            {
                soru: "Konsolide rapor ne sıklıkla geliyor ve içinde ne var?",
                cevap:
                    "Raporlama sıklığı sözleşme ekinde tanımlanır, genellikle aylık veya üç aylık dönemlerde sunulur. Rapor, her lokasyonda hangi makinenin ne kadar süre kullanıldığını, toplam maliyet dağılımını ve varsa rotasyon veya kontrol belgesi durumunu içerir. Bu rapor, bir sonraki dönem sözleşme yenilemesinde hangi lokasyonun tahsisli makineye geçmesi gerektiğini veya hangi lokasyonun ihtiyacının azaldığını somut veriyle göstermenizi sağlar.",
            },
            {
                soru: "Yeni açtığımız bir tesisi mevcut sözleşmeye nasıl ekliyoruz?",
                cevap:
                    "Yeni lokasyon için sıfırdan bir sözleşme kurmak yerine mevcut çerçeve sözleşmenize bir ek protokol yaparız — bu, hem hızlıdır hem de mevcut fiyat ve hizmet seviyesi şartlarınızın yeni lokasyonda da geçerli olmasını sağlar. Yeni lokasyonun çalışma yüksekliği ve kullanım profilini değerlendirir, mümkünse mevcut model ailenizle uyumlu bir makine tahsis ederiz; böylece yeni tesisiniz sıfırdan bir standart kurmak yerine mevcut filo yönetiminize dahil olur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Makaslı platformun sınıf/yükseklik aralığı ve periyodik kontrol gerekliliği sektör standardı genel bilgidir; çok lokasyonlu model standardizasyonu, rotasyon eşiği mantığı ve konsolide raporlama düzeni firma pratiğidir; hiçbir müşteri adı veya rakam belirtilmemiştir.",
    },

    "hizmet:manlift-kiralama": {
        h1: "Manlift Sevkiyatı: Marmara Genelinde Çok Lokasyonlu Müdahale Taahhüdü",
        giris:
            "Makaslı platformun aksine manlift talebi çoğu kurumsal müşteride düzenli ve öngörülebilir değildir — bir cephe onarımı, ani bir çatı arızası, mevsimsel bir aydınlatma bakımı gibi değişken ve genellikle planlanmamış işler manlift talebini tetikler. Marmara genelinde birden fazla lokasyonu olan bir müşteri için bu değişkenlik, sözleşmede farklı bir madde grubu gerektirir: sabit bir tahsis değil, hangi lokasyondan talep gelirse gelsin belirli bir süre içinde makinenin sahada olacağını taahhüt eden bir müdahale maddesi. Bizim bu sınıftaki sözleşme yaklaşımımız, tek bir merkezden değil bölgedeki birden fazla noktadan sevkiyat yapabilecek bir dağıtım mantığına dayanır — hangi lokasyona hangi noktadan, ne sürede ulaşılacağı sözleşme ekinde lokasyon bazlı yazılır. Bu sayfa, manlift sınıfının çok lokasyonlu bir çerçeve sözleşmede müdahale taahhüdü, operatör sertifikasyonu ve sorumluluk açısından nasıl kurulduğunu anlatır.",
        maddeler: [
            {
                baslik: "Lokasyon bazlı müdahale süresi taahhüdü",
                metin:
                    "Manlift talebinin ani karakteri nedeniyle sözleşmede tek bir genel müdahale süresi yazmak yerine, her lokasyon için ayrı bir süre taahhüdü tanımlarız — çünkü lokasyonun sevkiyat noktasına uzaklığı doğrudan bu süreyi belirler. Marmara genelinde yayılan bir müşteri filosunda İstanbul içi bir lokasyonla Kocaeli veya Tekirdağ'daki bir lokasyonun müdahale süresi aynı olamaz; bu farkı gizlemek yerine her lokasyon için gerçekçi bir süre yazarız ve bu süreye sadık kalırız.",
            },
            {
                baslik: "Çoklu sevkiyat noktası mantığı",
                metin:
                    "Tek bir merkezden tüm Marmara'ya sevkiyat yapmak yerine, filoyu bölgedeki birden fazla noktaya dağıtılmış şekilde tutarız ve bir talep geldiğinde en yakın uygun noktadan sevkiyat yaparız. Bu, sözleşmedeki müdahale süresi taahhütlerinin gerçekçi kalmasını sağlayan yapısal bir tercihtir — tek merkezli bir dağıtım modeliyle uzak lokasyonlara verilen süre taahhüdü, trafik veya mesafe nedeniyle sık sık tutturulamaz hâle gelir.",
            },
            {
                baslik: "Operatör sertifikasyon kaydının kontrat kapsamında tutulması",
                metin:
                    "Operatörlü manlift talebinde, görevlendirilecek personelin sınıfa uygun yeterlilik belgesi ve yüksekte çalışma sertifikası sözleşme dosyasında kayıt altındadır; hangi personelin hangi lokasyonda görevlendirilebileceği bu kayda göre belirlenir. Sertifika süresi dolmak üzere olan personel, süre dolmadan önce yenileme sürecine alınır ve bu takip bizim tarafımızdan yürütülür — müşterinin hangi operatörün sertifikasının güncel olduğunu ayrıca sorması gerekmez.",
            },
            {
                baslik: "Hava koşulu kaynaklı gecikme bildirimi",
                metin:
                    "Manlift, açık sahada ve genellikle yükseklikte çalışan bir sınıf olduğu için rüzgâr hızı gibi hava koşulları güvenli çalışma sınırını doğrudan etkiler. Sözleşmede, güvenli çalışma sınırının aşıldığı durumlarda işin ertelenebileceği ve bu ertelemenin müdahale süresi taahhüdünü ihlal saymayacağı açıkça yazılır. Bu maddeyi gizli bir çıkış kapısı olarak değil, güvenlik gerekçesiyle işlemi durdurma hakkı olarak sözleşmeye koyarız ve gecikme durumunda müşteriyi anında bilgilendiririz.",
            },
            {
                baslik: "Dış mekân sorumluluk ve sigorta eşiği",
                metin:
                    "Yükseklikte ve açık sahada çalışan manlift, kapalı hacimdeki bir makaslı platforma göre farklı bir risk profiline sahiptir; bu yüzden sözleşmedeki sorumluluk sınırı ve sigorta teminat eşiği manlift sınıfı için ayrıca yazılır. Üçüncü şahıs sorumluluğu, kamu alanına yakın çalışma (kaldırım, cadde kenarı) gibi özel durumlar sözleşme ekinde ayrı bir madde olarak ele alınır ve bu tür işlerde gerekli ek önlemler (trafik yönlendirme, güvenlik şeridi) kimin sorumluluğunda olduğu netleştirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Marmara alt bölgelerine göre tipik müdahale süresi",
                paragraflar: [
                    "Sevkiyat noktasına uzaklığa göre lokasyon gruplarında uyguladığımız tipik müdahale süresi yaklaşımını aşağıdaki tabloda özetledik; kesin süre her sözleşmede lokasyon bazlı ayrıca yazılır.",
                ],
                tablo: {
                    basliklar: ["Bölge grubu", "Sevkiyat noktasına yakınlık", "Tipik müdahale karakteri", "Sözleşmede dikkat edilecek madde"],
                    satirlar: [
                        ["İstanbul merkez ve yakın ilçeler", "Yakın", "Aynı gün, çoğu zaman birkaç saat içinde", "Trafik saatine göre pencere"],
                        ["İstanbul çeper ilçeler", "Orta", "Aynı gün, planlı ise daha hızlı", "Erken bildirim avantajı"],
                        ["Kocaeli / Tekirdağ hattı", "Uzak", "Genellikle aynı gün, bildirimli", "Sevkiyat noktası ataması önceden yapılır"],
                        ["Marmara dışı ek talep (istisnai)", "Çok uzak", "Ayrı değerlendirme, standart kapsam dışı", "Ayrı fiyat ve süre görüşmesi"],
                    ],
                },
            },
            {
                baslik: "Neden tek merkezli değil çok noktalı dağıtım modeli",
                paragraflar: [
                    "Marmara gibi geniş ve trafik yoğunluğu değişken bir bölgede tek bir depodan tüm lokasyonlara sevkiyat yapmayı taahhüt etmek, kâğıt üzerinde basit görünse de sahada sık sık tutturulamayan bir vaade dönüşür. Bunun yerine filoyu bölgedeki birden fazla noktaya dağıtılmış tutmayı tercih ederiz; bu, hem müdahale süresi taahhütlerinin gerçekçi kalmasını sağlar hem de bir noktada yaşanan bir aksaklığın (araç arızası, trafik kapanması) tüm sözleşme kapsamındaki lokasyonları etkilememesini sağlar.",
                    "Bu modelin sözleşmeye yansıyan tarafı şudur: her lokasyon için hangi noktadan sevkiyat yapılacağı ve o noktaya göre gerçekçi bir süre taahhüdü, sözleşme ekinde ayrı ayrı yazılır. Bu, tek bir genel taahhütle sizi yanıltmak yerine, her lokasyonunuz için ne bekleyebileceğinizi baştan net söylemek anlamına gelir.",
                ],
            },
            {
                baslik: "Acil talep ile planlı talep arasındaki fark",
                paragraflar: [
                    "Sözleşme kapsamında iki tür manlift talebi ayrı ele alınır: önceden bildirilen planlı işler (örneğin aydınlatma bakım takvimi) ve aniden ortaya çıkan acil işler (örneğin fırtına sonrası hasar kontrolü). Planlı talepler için müdahale süresi taahhüdü daha geniş bir pencerede karşılanır ve genellikle daha ekonomiktir; acil talepler için daha kısa bir süre taahhüt edilir ama bu, filodaki anlık müsaitliğe bağlı kalabilir. Bu iki kategori arasındaki fiyat ve süre farkı sözleşmede açıkça yazılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kocaeli'deki lokasyonumuz için müdahale süresi İstanbul merkezdeki kadar hızlı olabilir mi?",
                cevap:
                    "Genellikle hayır, çünkü müdahale süresi büyük ölçüde sevkiyat noktasına uzaklığa bağlıdır ve bunu gizlemek yerine sözleşmede lokasyon bazlı gerçekçi bir süre yazarız. Kocaeli hattındaki lokasyonlar için, o bölgeye en yakın sevkiyat noktamızdan hareket edecek şekilde bir plan kurarız ve bu planı sözleşme ekine işleriz. Erken bildirim yapılan planlı işlerde süre önemli ölçüde kısalır; ani ve bildirimsiz taleplerde ise mesafenin doğal etkisini kabul etmenizi bekleriz.",
            },
            {
                soru: "Rüzgârlı bir günde iş ertelenirse bu sözleşme ihlali sayılır mı?",
                cevap:
                    "Hayır. Güvenli çalışma rüzgâr sınırının aşıldığı durumlarda işi ertelemek, sözleşmede önceden tanımlanmış bir güvenlik maddesidir ve müdahale süresi taahhüdünün ihlali olarak değerlendirilmez. Bu maddeyi keyfi bir bahane olarak kullanmayız — erteleme kararını gerçek rüzgâr ölçümüne göre veririz ve durumu size anında bildiririz. Hava koşulu düzelir düzelmez iş, önceliklendirme listesinde öne alınarak tamamlanır.",
            },
            {
                soru: "Operatörümüzün sertifikası süresi dolmuşsa siz bunu fark eder misiniz?",
                cevap:
                    "Eğer operatörlü kiralama kapsamında bizim personelimiz görevlendiriliyorsa, sertifika takibi tamamen bizim sorumluluğumuzdadır ve süre dolmadan yenileme sürecine alınır — bu personel sizin filonuza dahil değildir. Eğer operatörsüz çalışıyor ve kendi personelinizi görevlendiriyorsanız, personelinizin sertifika durumu sizin sorumluluğunuzdadır; isterseniz bu takibi de sözleşme kapsamına dahil edip sizi süre dolmadan önce uyarabiliriz.",
            },
            {
                soru: "Fırtına sonrası acil bir talebimiz olursa, planlı taleplerden önce mi karşılanır?",
                cevap:
                    "Acil talepler, sözleşmede tanımlanan ayrı bir kategoridedir ve filodaki anlık müsaitliğe göre öncelikli değerlendirilir; ancak aynı anda birden fazla lokasyondan acil talep gelirse, önceliklendirme sözleşmede tanımlanan kritiklik sırasına göre yapılır. Bu sırayı talep anında değil, sözleşme kurulurken birlikte belirleriz — hangi lokasyonunuzun hangi tür arızasının en kritik sayılacağını önceden konuşuruz, böylece kriz anında pazarlık yapmayız.",
            },
            {
                soru: "Kamu alanına yakın (kaldırım, cadde kenarı) bir manlift işinde trafik yönlendirmesi kimin sorumluluğunda?",
                cevap:
                    "Bu, sözleşme ekinde ayrıca netleştirilen bir noktadır — genel kural olarak kamu alanına yönelik izin ve trafik yönlendirme düzenlemesi tesisin veya işi yaptıran tarafın sorumluluğundadır, biz sahada güvenlik şeridi ve makinenin doğru konumlandırılması konusunda destek veririz. Bu tür bir iş söz konusuysa, talep açılırken bunu belirtmenizi isteriz; gerekli izin ve yönlendirme düzeni önceden hazır olmadan sahaya gitmeyiz çünkü bu hem güvenlik hem mevzuat riski taşır.",
            },
            {
                soru: "Sevkiyat noktanız değişirse bizim lokasyonumuza olan süre taahhüdü de değişir mi?",
                cevap:
                    "Evet, sevkiyat ağımızda bir değişiklik olursa (yeni bir nokta açılması, bir noktanın kapanması) bu durumun etkilediği lokasyonlar için süre taahhüdünü gözden geçirir ve size yazılı olarak bildiririz. Amacımız her zaman gerçekçi bir taahhütte bulunmaktır; ağ yapımız değiştiğinde eski taahhüdü sessizce sürdürüp sahada tutturamamak yerine, değişikliği açıkça paylaşır ve gerekirse sözleşme ekini güncelleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Manlift'in yükseklikte ve açık sahada çalışması, rüzgâr sınırı ve yeterlilik belgesi gerekliliği sektör standardı genel bilgidir; çok noktalı sevkiyat modeli, lokasyon bazlı müdahale süresi taahhüdü ve acil/planlı talep ayrımı firma pratiğidir; hiçbir müşteri adı, rakam veya kesin süre taahhüdü belirtilmemiştir.",
    },
};
