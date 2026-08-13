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
};
