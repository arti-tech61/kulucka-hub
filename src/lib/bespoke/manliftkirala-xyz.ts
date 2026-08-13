// ═══════════════════════════════════════════════════════════════════════════
// manliftkirala.xyz — ELLE YAZILMIŞ İÇERİK
//
// Profil: Denizli tekstil ve mermer sanayinde manlift kiralama.
// Açı: ÜRETİM VARDİYASI VE İŞ GÜCÜ PLANLAMASI — tekstilin üç vardiyalı
// düzeninde bakım penceresi bulmak, vardiya değişim saatlerinin kullanımı,
// tesisin kendi bakım ekibiyle koordinasyon, kimin ne zaman müsait olduğunun
// planlanması, mermer fabrikalarının kesim programına göre erişim.
//
// ⚠️ Kardeş domain denizliplatform-net.ts aynı ilçelerde YAZILI (pamukkale,
// honaz, civril) ve usak-osb-cevre-ili usakplatform-com.ts'te var; ancak
// oradaki açı sektör/ortam (toz, nem, zemin, turizm takvimi). Burada anlatım
// tamamen vardiya ve iş gücü koordinasyonu üzerinden kurulur; cümle, tablo
// ve SSS kurgusu tekrarlanmaz.
//
// Simetri: h1 → giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Tesis adı, marka ve rakam uydurulmamıştır.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const MANLIFTKIRALA_XYZ: Record<string, BespokeIcerik> = {
    "bolge:denizli-osb": {
        h1: "Denizli OSB'de Vardiya Düzenine Uygun Manlift Kiralama",
        giris:
            "Denizli Organize Sanayi Bölgesi'nde tekstil üretimi büyük ölçüde durmaz — dokuma tezgâhı, terbiye hattı ve boyahane kazanı gece de gündüz de çalışır ve bu, üç vardiyalı bir insan düzeni kurar. Bir platform kiralama talebi geldiğinde bizim ilk sorduğumuz şey artık 'hangi kot' değil, 'hangi vardiya boşluğu'dur; çünkü tavan aydınlatmasını değiştirecek makine, hattın üstünde iş varken oraya giremez ve hattın durduğu tek an genellikle vardiya değişiminin birkaç dakikalık penceresidir. Bu sayfayı, kotu değil takvimi merkeze koyan bir mantıkla yazdık: üç vardiyalı bir tesiste bakım penceresinin nasıl bulunduğunu, vardiya değişim saatlerinin nasıl kullanıldığını, tesisin kendi bakım ekibiyle işin nasıl paylaşıldığını ve kimin ne zaman sahada olacağının nasıl planlandığını anlatıyoruz. OSB'deki her fabrikanın vardiya saatleri birbirinden farklıdır ve bizim işimiz, makinenin sahaya doğru kotla değil doğru saatte gelmesini sağlamaktır.",
        maddeler: [
            {
                baslik: "Üç vardiyalı üretimde bakım penceresi nerede açılır",
                metin:
                    "Sürekli çalışan bir tekstil tesisinde iş hiç durmuyormuş gibi görünse de, her vardiyanın kendi içinde küçük duraklamalar vardır: bobin değişimi, parti geçişi, kısa temizlik molası. Bu duraklamalar tek başına bir platform işine yetmez ama art arda gelen birkaç kısa pencere, planlı bir bakım için toplanabilir. Bizim yaptığımız, tesisin vardiya çizelgesini önceden görüp bu pencereleri işaretlemektir — üçüncü vardiyanın sakin saati, hafta sonu tek vardiyaya düşen dönem ya da parti değişiminin planlı olduğu gün. Kotu bilmek kiralama kararının yarısıdır; pencereyi bilmek diğer yarısıdır.",
            },
            {
                baslik: "Vardiya değişim saatlerinin kullanımı",
                metin:
                    "Vardiya değişimi, tesisteki en yoğun ama aynı zamanda en kullanılabilir andır: giden ekip çıkarken gelen ekip henüz tam devreye girmemiştir ve hat çoğu zaman birkaç dakika boşta kalır. Bu boşluk tek başına uzun bir iş için yeterli değildir ama kısa kalemler — bir armatür kontrolü, bir sensör ayarı — tam bu pencereye sığar. Vardiya değişim saatini kullanmanın şartı, makinenin ve ekibin o saatte hazır ve konumlanmış olmasıdır; pencere açıldığında makine sahaya yeni geliyorsa fırsat kaçar. Bu yüzden değişim saati işlerinde makineyi bir önceki vardiyanın sonunda sahaya alır, pencere açılır açılmaz iş başlar.",
            },
            {
                baslik: "Tesisin kendi bakım ekibiyle koordinasyon",
                metin:
                    "OSB'deki fabrikaların çoğunun kendi bakım-onarım ekibi vardır ve bizim rolümüz bu ekibin yerini almak değil, onun ulaşamadığı erişimi sağlamaktır. Koordinasyon iki yönlü çalışır: bakım şefi bize hangi vardiyada hangi ekibin sahada olduğunu, hangi saatte hattın durabileceğini söyler; biz de makinenin hangi saatte geleceğini ve ne kadar süreceğini netleştiririz. İyi işleyen bir koordinasyonda tesisin bakım ekibi işin başında ve sonunda sahadadır — başında çalışma noktasını gösterir, sonunda kontrol eder. Bu ortaklık, aynı bakım şefiyle tekrar tekrar çalıştığımız tesislerde neredeyse otomatikleşir; ilk görüşmede telefon açmadan, doğrudan haftalık plana yazılır.",
            },
            {
                baslik: "Kim ne zaman müsait: iş gücü takviminin platform kararına etkisi",
                metin:
                    "Platform kiralamak yalnızca makineyi ayarlamak değildir; makineyi kimin kullanacağını da baştan bilmek gerekir. Vardiyalı çalışan bir tesiste yetkili operatör her saatte sahada olmayabilir — belgeli personel gündüz vardiyasında görevliyse gece işi için ayrı düzenleme gerekir. Talep alırken bu yüzden üçüncü bir soru sorarız: makineyi kullanacak kişi hangi vardiyada çalışıyor? Cevap net değilse operatörlü kiralama öneririz, çünkü gece vardiyasında belgeli kullanıcı bulunmayan bir sahada makine boş bekler. İş gücü takvimini bilmeden verilen bir teklif, sahada eksik operatörle karşılaşma riskini taşır.",
            },
            {
                baslik: "Vardiya geçişinde makinenin teslim-devir düzeni",
                metin:
                    "Uzun süreli kiralamalarda makine bir vardiyadan diğerine devredilir ve bu devrin düzenli olması, kullanım verimini doğrudan belirler. Standart uygulamamız, her vardiya değişiminde kısa bir devir kaydı tutulmasıdır — akü durumu, varsa hasar bildirimi, o vardiyada yapılan iş. Bu kayıt, üç ayrı vardiya ekibinin aynı makineyi farklı alışkanlıklarla kullanmasından doğan karışıklığı önler. Devir kaydı tutulmayan sahalarda en sık yaşanan sorun, gece vardiyasının makineyi şarjsız bırakması ve sabah vardiyasının bunu iş başında fark etmesidir; birkaç dakikalık bu kayıt alışkanlığı, bu tür kayıpları neredeyse sıfırlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Vardiya tipine göre uygun çalışma penceresi",
                paragraflar: [
                    "OSB'deki fabrikaların vardiya düzeni birbirinden farklı olsa da, sık karşılaştığımız kalıpları ve her birinde işin nasıl kurulduğunu aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Vardiya düzeni", "Bakım penceresi", "Makinenin sahada bulunma şekli", "Dikkat noktası"],
                    satirlar: [
                        ["Üç vardiya kesintisiz", "Parti geçişi, kısa duraklama", "Önceden konumlanmış", "Pencere kısa, hazırlık şart"],
                        ["İki vardiya + gece boşluğu", "Gece boşluk saatleri", "Gece için ayrı planlama", "Operatör müsaitliği"],
                        ["Tek vardiya + hafta sonu durma", "Hafta sonu tam gün", "Hafta sonu sahada", "Uzun iş için ideal"],
                        ["Değişken / sipariş bazlı", "Sipariş arası boşluk", "Çağrı üzerine", "Takvim erken paylaşılmalı"],
                    ],
                },
            },
            {
                baslik: "Vardiya çizelgesini paylaşan tesisin kazancı",
                paragraflar: [
                    "OSB'deki tesislerin bir kısmı vardiya çizelgesini bizimle önceden paylaşır, bir kısmı iş çıktıkça arar. Aradaki fark sahada net biçimde görülür: çizelgeyi paylaşan tesiste makine doğru saatte gelir, pencere kaçmaz ve iş ilk seferde biter. Ani arayan tesiste ise makine ya vardiya ortasında gelir ve beklemek zorunda kalır ya da pencere kısa olduğu için iş bölünür.",
                    "Bu yüzden düzenli çalıştığımız fabrikalara aylık vardiya ve bakım takvimini önceden göndermelerini öneririz. Takvim elimizde olduğunda hangi haftanın hangi gününde makinenin uygun olacağını biz belirleriz ve bakım şefine bir hafta önceden teyit veririz. Bu, hem tesisin hem bizim planlamamızı aynı anda kolaylaştıran basit bir alışkanlıktır.",
                ],
            },
            {
                baslik: "Vardiya değiştiren personelin eğitim sürekliliği",
                paragraflar: [
                    "Üç vardiyalı bir tesiste makineyi üç farklı ekip kullanabilir ve her ekibin aynı düzeyde eğitimli olması gerekir. Teslim sırasında verdiğimiz saha eğitimini tek vardiyaya değil, makineyi kullanacak bütün vardiyalara yaymayı öneririz — mümkünse vardiya değişim saatinde kısa bir tekrar eğitimiyle. Bu, ek bir maliyet değil, birkaç dakikalık bir alışkanlıktır ve makinenin yanlış kullanımdan kaynaklanan arızalarını büyük ölçüde önler.",
                    "Uzun süreli kiralamalarda bu eğitim sürekliliğini takip eden taraf biz oluruz: hangi vardiyanın eğitim aldığını, hangisinin almadığını kayıt altına alır ve eksik kalan vardiya için ek bir ziyaret planlarız. Bu takip, tesisin kendi bakım ekibiyle kurduğumuz koordinasyonun doğal bir uzantısıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hattımız hiç durmuyor; bakım için ne zaman uygun bir an buluruz?",
                cevap:
                    "Hiç durmayan bir hatta bile küçük duraklamalar vardır — parti geçişi, bobin değişimi, kısa temizlik molası. Bunlar tek başına yetmez ama vardiya çizelgenizi görürsek art arda gelen birkaç kısa pencereyi işaretleyip planlı bakımı bunlara sığdırabiliriz. İlk adım, haftalık vardiya ve üretim planınızı bizimle paylaşmanızdır; biz de bu plana bakıp size en az kayıpla çalışacağımız günü ve saati öneririz. Pencere gerçekten yoksa alternatif hafta sonu tam gün penceresidir; birçok tesiste bakım listesinin çoğu bu güne toplanır.",
            },
            {
                soru: "Vardiya değişim saatinde iş yapmak gerçekten yeterli mi?",
                cevap:
                    "Kısa kalemler için evet, uzun kalemler için hayır — ayrımı biz yaparız. Bir armatür kontrolü veya sensör ayarı gibi birkaç dakikalık işler vardiya değişim boşluğuna rahat sığar; kapsamlı bir donanım değişimi ise bu pencerede yarım kalır ve iki vardiyayı da aksatır. Şartı makinenin önceden hazır olmasıdır — pencere açıldığında makine sahaya yeni geliyorsa fırsat kaçar. Bu yüzden değişim saati işlerinde makineyi bir önceki vardiyanın sonunda sahaya alır, saniye kaybetmeden başlarız.",
            },
            {
                soru: "Kendi bakım ekibimiz var; sizinle nasıl iş bölüşecek?",
                cevap:
                    "Biz erişimi sağlarız, işin teknik kısmını çoğu zaman sizin ekibiniz yapar — bu, en yaygın çalıştığımız modeldir. Bakım şefiniz bize hangi vardiyanın sahada olacağını ve hattın hangi saatte durabileceğini söyler, biz makinenin o saatte hazır olmasını sağlarız. İşin başında çalışma noktasını sizin ekibiniz gösterir, sonunda yine sizin ekibiniz kontrol eder. Bu ortaklık düzenli çalıştığımız tesislerde zamanla otomatikleşir; her seferinde yeniden anlatmaya gerek kalmaz, haftalık plana doğrudan yazılır.",
            },
            {
                soru: "Gece vardiyasında belgeli operatörümüz yok; bu iş yapılamaz mı?",
                cevap:
                    "Yapılır ama farklı bir kurguyla. Gece vardiyasında yetkili kullanıcı yoksa iki yolumuz var: işi operatörlü kiralamayla bizim ekibimize bırakmak ya da işi belgeli personelin sahada olduğu vardiyaya kaydırmak. Hangisi uygunsa onu seçeriz — acil bir iş gece çıktıysa operatörlü çözüm hızlıdır; planlı bir iş ise gündüz vardiyasına kaydırmak genellikle daha ekonomiktir. Talep alırken makineyi kimin kullanacağını ve o kişinin hangi vardiyada olduğunu sormamızın nedeni tam olarak budur.",
            },
            {
                soru: "Makine üç vardiya boyunca sahada kalacak; her vardiya farklı kullanırsa sorun olur mu?",
                cevap:
                    "Kayıt tutulmazsa olur, tutulursa olmaz. Standart uygulamamız her vardiya değişiminde kısa bir devir kaydıdır — akü durumu, varsa hasar, o vardiyada yapılan iş. Bu kayıt olmadan en sık yaşanan sorun, gece vardiyasının makineyi şarjsız bırakması ve sabah ekibinin bunu iş başında fark etmesidir. Devir kaydını sizin vardiya defterinize entegre edebiliriz ya da bizim kısa formumuzu kullanabiliriz; hangisi tesisinizin alışkanlığına uyuyorsa onu öneririz.",
            },
            {
                soru: "Vardiya çizelgemizi önceden paylaşmak zorunlu mu, yoksa iş çıktıkça mı arayalım?",
                cevap:
                    "Zorunlu değil ama fark yaratır. Çizelgeyi önceden paylaşan tesiste makine doğru saatte gelir, kısa pencereler kaçmaz ve iş genellikle ilk seferde biter. Ani arayan tesiste ise makine vardiya ortasında gelebilir ve beklemek zorunda kalabilir ya da kısa pencereye sıkışan iş bölünür. Aylık vardiya ve bakım planınızı bize gönderirseniz, hangi haftanın hangi gününün uygun olduğunu biz belirler, bakım şefinize bir hafta önceden teyit veririz. Bu, küçük bir alışkanlık ama sahadaki verimi doğrudan etkiliyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Denizli OSB'nin tekstil ağırlıklı, çoğu zaman kesintisiz üretim yapan yapısı sektör geneli bilgidir; vardiya penceresi tespiti, koordinasyon ve devir kaydı düzeni kendi çalışma pratiğimizdir. Tesis adı, marka ve rakam kullanılmamıştır.",
    },

    "bolge:merkezefendi": {
        h1: "Merkezefendi'de Karma Vardiya Düzenine Göre Manlift Kiralama",
        giris:
            "Merkezefendi, Denizli'nin idari ve ticari merkezini taşıdığı için buradaki iş gücü düzeni sanayi ilçelerinden farklı bir ritimle işler: tek vardiya çalışan ofis ve mağaza binaları, iki vardiyalı üretim atölyeleri ve gece de çalışan lojistik-depo tesisleri aynı ilçede yan yana durur. Bir platform talebi geldiğinde bizim için belirleyici olan, işin nerede olduğu kadar hangi vardiya düzenine hizmet ettiğidir — çünkü aynı sokaktaki iki bina, biri gündüz 09.00-18.00 çalışıyor diye boşken diğeri gece vardiyasında doluyken bulunabilir. Merkezefendi'nin karma yapısı, bize her talepte önce 'bu bina kaç vardiya çalışıyor, hangi saatlerde boşalıyor' sorusunu sormayı öğretti. Bu sayfada, farklı vardiya düzenlerinin aynı ilçede nasıl bir arada yönetildiğini, iş gücünün gün içinde nasıl hareket ettiğini ve bir binadaki bakım ekibiyle diğerindeki çalışma saatlerinin nasıl senkronize edildiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Tek vardiyalı ticari binalarda gündüz dışı pencere",
                metin:
                    "İdari binalar, mağazalar ve ofis yapıları genellikle tek vardiya çalışır ve bu, platform işini basitleştirir gibi görünse de aslında tersi geçerlidir — çünkü bu yapılarda çalışma saatleri dışına çıkmak neredeyse zorunludur. Gündüz saatlerinde çalışan personelin arasında yükselen bir platform hem iş verimini düşürür hem güvenlik riski taşır. Bu yüzden ticari binalardaki cephe, tabela ve iç mekân işlerini mesai bitiminden sonraya ya da açılıştan önceki erken saate yazarız. Bu pencere kısa değildir ama personel trafiğiyle kesişmediği için verimlidir; bir akşam saatinde başlayan iş, ertesi sabah personel gelmeden bitirilebilir.",
            },
            {
                baslik: "İki vardiyalı atölyelerde geçiş saatinin değeri",
                metin:
                    "Merkezefendi'deki küçük ve orta ölçekli üretim atölyelerinin çoğu iki vardiya çalışır — sabah ve akşam — ve aradaki geçiş saati, bakım için doğal bir penceredir. Bu pencere üç vardiyalı büyük tesislerdeki kadar sık tekrarlanmaz ama daha uzundur; iki vardiya arasında genellikle yarım-bir saatlik bir boşluk kalır. Bu boşluğu kullanmanın şartı aynıdır: makine önceden hazır olmalı, geçiş anında bekleme olmamalıdır. İki vardiyalı atölyelerle çalışırken geçiş saatini bize bildirmelerini isteriz; bu saat bilindiğinde makineyi tam o pencereye göre planlarız ve ikinci vardiyanın başlangıcını geciktirmeyiz.",
            },
            {
                baslik: "Gece çalışan lojistik tesislerinde tersine çevrilmiş plan",
                metin:
                    "İlçenin depo ve lojistik yapıları çoğu zaman gece de aktiftir — sevkiyat, yükleme ve dağıtım operasyonları gündüzden bağımsız yürür. Bu tesislerde platform planı tersine döner: bizim için 'normal' saat olan gündüz, bu tesisler için en yoğun trafiğin olduğu zamandır ve bakım işi gece sakinliğine yazılır. Gece çalışmanın kendi kuralları vardır — aydınlatma, iletişim ve acil müdahale düzeni gündüzden farklı kurulur, gece vardiyasında görevli bir yetkilinin işin başında bulunması şarttır. Bu tür taleplerde önce tesisin gece vardiya sorumlusunu öğrenir, planı doğrudan onunla kurarız.",
            },
            {
                baslik: "Aynı sokakta farklı vardiyaların koordinasyonu",
                metin:
                    "Merkezefendi'nin karma dokusunda aynı gün içinde birkaç farklı vardiya düzenine hizmet vermek sık karşılaştığımız bir durumdur: sabah bir ofis binasının tabela işi, öğleden sonra bir atölyenin vardiya arası bakımı, gece bir depo tesisinin aydınlatma kontrolü. Bu üçünü aynı makineyle aynı güne dizmek mümkündür ve nakliye maliyetini üçe böler. Kurgunun tek şartı her adresin saatinin kesin bilinmesidir — bir adresteki gecikme, sıradaki vardiyanın penceresini kaçırabilir. Bu yüzden çok adresli günlerde her durağın başlangıç ve bitiş saatini yazılı netleştirir, aralarda pay bırakırız.",
            },
            {
                baslik: "İş gücünün gün içindeki hareketini takip etmek",
                metin:
                    "Merkezefendi'deki bazı işletmeler personelini gün içinde birden fazla lokasyona yönlendirir — sabah depoda, öğleden sonra mağazada çalışan bir ekip gibi. Bu hareketlilik, platform kararını da etkiler: makineyi kullanacak yetkili kişi hangi saatte hangi adreste olacak? Bu bilgi netleşmeden verilen bir kiralama planı, doğru saatte yanlış adreste bekleyen bir makineyle sonuçlanabilir. Talep alırken bu yüzden yalnızca işin adresini değil, o işi yapacak kişinin günlük rotasını da sorarız; iki bilgi çakıştığında plan baştan düzeltilir, sahada değil.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bina tipine göre vardiya ve uygun çalışma saati",
                paragraflar: [
                    "Merkezefendi'nin karma yapısında bina tipi, vardiya düzenini ve dolayısıyla uygun çalışma saatini büyük ölçüde belirler. Aşağıdaki tablo bu eşlemeyi özetliyor.",
                ],
                tablo: {
                    basliklar: ["Bina tipi", "Tipik vardiya", "Uygun çalışma saati", "Koordinasyon muhatabı"],
                    satirlar: [
                        ["Ofis / idari bina", "Tek vardiya, gündüz", "Mesai dışı akşam/sabah", "İdari amir"],
                        ["Mağaza / satış noktası", "Tek vardiya, gündüz", "Kapanış sonrası", "Mağaza müdürü"],
                        ["Küçük-orta atölye", "İki vardiya", "Vardiya geçiş saati", "Atölye ustabaşı"],
                        ["Depo / lojistik tesis", "Gece dahil sürekli", "Gece sakin saatler", "Gece vardiya sorumlusu"],
                    ],
                },
            },
            {
                baslik: "Çok adresli günün saat çizelgesiyle kurulması",
                paragraflar: [
                    "Merkezefendi'de bir günde birden fazla adres gezmek, ilçenin karma yapısı sayesinde sık uyguladığımız bir modeldir ama başarısı tamamen saat disiplinine bağlıdır. Her durak için başlangıç saati, tahmini süre ve bitiş saati önceden yazılır; aralarda makul bir geçiş payı bırakılır. Bu çizelge, müşteriyle paylaşılan bir plan hâline gelir ve her adresteki sorumlu, makinenin ne zaman geleceğini önceden bilir.",
                    "Bu modelin en büyük kazancı küçük işletmeler içindir: tek başına bir sevkiyat için yüksek gelecek nakliye maliyeti, aynı güne dizilen üç-dört adres arasında bölünür. Kazancın gerçekleşmesi için tek şart, her adresin kendi payına düşen saati aşmamasıdır — bir adreste yaşanan gecikme, çizelgenin tamamını geciktirir.",
                ],
            },
            {
                baslik: "Vardiya sorumlusunu bulmak: koordinasyonun ilk adımı",
                paragraflar: [
                    "Karma vardiya düzenindeki bir ilçede en sık yaşanan aksaklık, doğru muhatabın bulunamamasıdır — gece vardiyasında çalışan bir depo için gündüz idari personelle yapılan bir görüşme, gece sahada kimin yetkili olduğunu netleştirmez. Bu yüzden her talepte ilk adımımız, işin yapılacağı saatte sahada kimin sorumlu olacağını netleştirmektir.",
                    "Bu netleşme sağlandığında iş büyük ölçüde kendiliğinden akar: yetkili kişi işin başında bulunur, çalışma noktasını gösterir ve sonunda kontrol eder. Netleşmediğinde ise makine doğru saatte gelse bile sahada işi yönlendirecek kimse bulunmayabilir — bu, saatin doğru olması kadar muhatabın doğru olmasının da önemli olduğunu gösterir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ofis binamızın tabelası mesai saatinde mi değişmeli?",
                cevap:
                    "Önermeyiz. Mesai saatinde personel yoğunluğu içinde yükselen bir platform hem iş akışını böler hem güvenlik açısından gereksiz risk taşır. Standart önerimiz, mesai bitiminden sonraki akşam saati ya da açılıştan önceki erken sabahtır — bu pencerelerde bina boş olduğu için iş hem hızlı hem güvenli tamamlanır. Bina yönetiminizin uygun gördüğü saati bize iletin, makineyi o pencereye göre planlayalım. Acil bir arıza söz konusuysa mesai içinde de çalışırız, ancak bu durumda çalışma alanını sıkı biçimde sınırlarız.",
            },
            {
                soru: "Atölyemiz iki vardiya çalışıyor; bakımı hangi saate yazmalıyız?",
                cevap:
                    "En verimli seçenek vardiya geçiş saatinizdir — sabah ve akşam vardiyaları arasında genellikle yarım-bir saatlik bir boşluk olur ve bu, üretimi kesmeden çalışmamıza yeter. Şartı, makinenin bu pencere açılmadan önce sahada ve hazır olmasıdır; pencere açıldığında makine yeni geliyorsa fırsatın büyük kısmı kaybolur. Geçiş saatinizi bize bildirin, makineyi bir önceki vardiyanın bitişine göre konumlandıralım. İş geçiş penceresine sığmayacak kadar uzunsa, alternatif olarak hafta sonu ya da vardiyalardan birinin kısaltıldığı günü değerlendiririz.",
            },
            {
                soru: "Depomuz gece de çalışıyor; gece platform işi güvenli mi?",
                cevap:
                    "Doğru hazırlıkla evet. Gece çalışmanın kendi düzeni vardır: çalışma alanı yeterli aydınlatmayla desteklenir, iletişim hattı netleştirilir ve gece vardiyasında görevli bir yetkilinin işin başında bulunması şart koşulur — bu, işin başında kimsenin olmadığı bir gece çalışmasını kabul etmeyiz. Sevkiyat trafiğinin yoğun olduğu saatlerden kaçınmak için gece vardiya sorumlunuzla önceden bir saat belirleriz. Gece sakinliği aslında bu tesisler için bakımın en uygun zamanıdır; gündüz iş yoğunluğunda bulamayacağınız bir pencere gece açılır.",
            },
            {
                soru: "Aynı gün üç farklı adresimiz var; tek makineyle olur mu?",
                cevap:
                    "Olur, Merkezefendi'nin karma yapısı tam bu modele uygundur — sabah bir bina, öğleden sonra bir atölye, akşam bir depo aynı makineyle sırayla dolaşılabilir. Şartı, her adresin saatinin ve tahmini süresinin önceden kesin yazılmasıdır; bir adresteki gecikme, sıradaki randevuyu kaydırır. Üç adresin işini, sorumlularını ve tercih ettikleri saatleri gönderin; sıralamayı ve geçiş paylarını biz kurar, tek bir günlük çizelge çıkarırız. Bu model, nakliye maliyetini üç adres arasında bölerek her biri için ayrı ayrı kiralamaktan belirgin ucuza gelir.",
            },
            {
                soru: "İşi yapacak yetkili personelimiz gün içinde birkaç adres arasında geziyor; bu bir sorun mu?",
                cevap:
                    "Sorun değil, ama bilinmesi gereken bir bilgi. Makineyi kullanacak ya da çalışma noktasını gösterecek kişinin hangi saatte hangi adreste olacağını bilmeden kurulan bir plan, doğru saatte yanlış adreste bekleyen bir makineyle sonuçlanabilir. Bu yüzden talep alırken işin adresi kadar, o işi yönetecek kişinin günlük rotasını da sorarız. İki bilgi çakışıyorsa planı telefonda düzeltiriz; sahada karşılaşılan bir çakışma, hem sizin hem bizim zamanımızı boşa harcar.",
            },
            {
                soru: "Vardiya saatlerimiz sık değişiyor; her seferinde yeniden mi planlamalıyız?",
                cevap:
                    "Değişen saatleri bize önceden bildirdiğiniz sürece yeniden planlamak sorun değildir. Düzenli çalıştığımız işletmelerden haftalık ya da aylık vardiya programını almayı tercih ederiz; bu program elimizde olduğunda hangi haftanın hangi gününün uygun olduğunu biz belirler, size teyit veririz. Program paylaşılmadan gelen ani taleplerde de hizmet veririz, ancak o durumda uygunluk son dakika netleşir ve bazen istediğiniz saat değil, o an müsait olan saat teklif edilir. Sık değişen bir düzeniniz varsa, kısa bir haftalık bildirim alışkanlığı ikimiz için de zaman kazandırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Merkezefendi'nin Denizli'nin idari-ticari merkezi olması ve karma bina dokusu barındırması kamuya açık bilgidir; vardiya tipine göre planlama ve çok adresli çizelge kurgusu kendi çalışma pratiğimizdir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:pamukkale": {
        h1: "Pamukkale İlçesinde Sanayi Vardiyasına Göre Manlift Kiralama",
        giris:
            "Pamukkale denince akla önce travertenler ve otel dokusu gelir, ama ilçe sınırları bunun çok ötesine uzanır — turistik alanın dışında kalan mahallelerde küçük ve orta ölçekli üretim atölyeleri, tekstil yan sanayi işlikleri ve depolama tesisleri de yer alır. Bizim bu sayfada anlattığımız, ilçenin bu ikinci yüzü: turizm takviminden bağımsız, kendi vardiya ve iş gücü düzenine sahip üretim sahaları. Buradaki işletmelerin çoğu tek ya da iki vardiya çalışır ve talep genellikle küçük ölçekli, kısa süreli işlerden oluşur — bir atölyenin tavan aydınlatması, bir depo biriminin raf üstü kontrolü, bir işliğin cephe bakımı. Turizm bölgesinden farklı olarak burada takvim mevsime değil, işletmenin kendi üretim ve çalışma saatlerine bağlıdır. Bu sayfada, ilçenin sanayi-üretim kesimindeki işletmeler için vardiya saatine göre planlamanın nasıl kurulduğunu, küçük atölyelerin iş gücü kısıtlarını ve komşu işletmelerin ortak kiralamayı nasıl kurabileceğini anlattık.",
        maddeler: [
            {
                baslik: "Turizm dışı kesimde tek vardiyalı küçük işletme düzeni",
                metin:
                    "İlçenin üretim ağırlıklı mahallelerindeki küçük atölyeler çoğunlukla tek vardiya çalışır ve personel sayısı sınırlıdır — bazen iki-üç kişi. Bu ölçekte vardiya planlaması, büyük fabrikadaki kadar karmaşık değildir ama farklı bir kısıt getirir: işi yapacak yetkili genellikle atölye sahibinin kendisidir ve onun müsait olduğu saat, tek belirleyici zaman dilimidir. Bu yüzden küçük atölye taleplerinde önce işletme sahibinin günlük programını sorarız — sabah mı, öğleden sonra mı müsait, başka bir işe mi gidecek. Makine bu tek kişinin takvimine göre planlanır; büyük tesislerdeki gibi vardiya değişim penceresi aranmaz, doğrudan kişinin uygun olduğu saat kullanılır.",
            },
            {
                baslik: "İki vardiyalı işliklerde geçiş saatinin kullanımı",
                metin:
                    "Bölgedeki biraz daha büyük ölçekli tekstil yan sanayi işliklerinde iki vardiya görülür ve buralarda geçiş saati yine en verimli bakım penceresidir. Ancak küçük ölçekli işliklerde büyük fabrikalardan farklı olarak geçiş saati her gün aynı dakikada olmayabilir — sipariş yoğunluğuna göre vardiya biraz erken ya da geç başlayabilir. Bu değişkenlik nedeniyle işliklerle çalışırken geçiş saatini o haftaki üretim durumuna göre teyit ederiz; sabit bir saat varsayıp makineyi ona göre göndermek, değişken düzenli küçük işliklerde bekleme riskini artırır.",
            },
            {
                baslik: "Depo ve stok birimlerinde tek personelin işi yönetmesi",
                metin:
                    "İlçedeki depolama tesislerinin bir kısmı küçük ölçeklidir ve gün içinde bir ya da iki kişi tarafından yönetilir. Bu tesislerde platform işi planlanırken, o gün depoda kimin bulunacağı ve kaçta orada olacağı netleştirilir — çünkü tek personelli bir depoda personel başka bir işle meşgulse makinenin çalışma noktasını gösterecek kimse kalmayabilir. Bu tür taleplerde randevu saatini kesinleştirir ve mümkünse birkaç gün önceden teyit ederiz; küçük ekipli tesislerde son dakika değişikliği, büyük tesislerdekinden daha kolay işi aksatır.",
            },
            {
                baslik: "Komşu atölyelerin vardiyasını birleştiren gün planı",
                metin:
                    "Bölgedeki küçük işletmeler birbirine yakın konumludur ve çoğunun vardiya saatleri benzerdir — çoğu sabah açılıp akşam kapanır. Bu benzerlik, birden fazla işletmenin işini aynı güne dizmemizi kolaylaştırır: sabah bir atölye, öğleden sonra bir depo, akşamüstü bir işlik. Vardiya saatleri benzer olduğu için geçiş süreleri kısadır ve makine günü verimli doldurur. Komşu işletmelere önerimiz, aynı hafta içinde biriken taleplerini bize birlikte bildirmeleridir; sıralamayı vardiya saatlerine göre biz kurarız ve nakliye maliyeti katılımcılar arasında bölünür.",
            },
            {
                baslik: "Turizm sezonunun dolaylı etkisi: trafik ve erişim saati",
                metin:
                    "İlçenin turizm bölgesine yakın kesimlerdeki üretim tesisleri, doğrudan sezon takvimine bağlı olmasa da sezon trafiğinden dolaylı etkilenir — turistik güzergâha yakın yollarda araç yoğunluğu, ağır makine sevkiyatını yavaşlatabilir. Bu tesislere giden sevkiyatı planlarken, sezon içi yoğun saatleri göz önünde bulundurur, mümkünse erken sabah ya da akşamüstü geçişi tercih ederiz. Bu, işletmenin kendi vardiya saatinden bağımsız, sadece yol trafiğiyle ilgili bir planlama detayıdır ve makinenin randevu saatine zamanında ulaşmasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İşletme ölçeğine göre vardiya ve randevu düzeni",
                paragraflar: [
                    "İlçenin üretim kesimindeki işletme ölçekleri birbirinden farklı olsa da, her ölçeğin kendi randevu mantığı vardır. Aşağıdaki tablo bu ayrımı özetliyor.",
                ],
                tablo: {
                    basliklar: ["İşletme ölçeği", "Tipik vardiya", "Randevu belirleyicisi", "Planlama önceliği"],
                    satirlar: [
                        ["Küçük atölye (2-3 kişi)", "Tek vardiya", "İşletme sahibinin programı", "Kişi bazlı saat"],
                        ["Orta ölçek işlik", "İki vardiya", "Haftalık üretim yoğunluğu", "Geçiş saati teyidi"],
                        ["Küçük depo birimi", "Tek personel", "Personelin o günkü konumu", "Erken randevu teyidi"],
                        ["Komşu işletme grubu", "Benzer tek vardiya", "Ortak müsaitlik", "Tek günlük tur planı"],
                    ],
                },
            },
            {
                baslik: "Tek kişilik işletmede randevunun kesinliği",
                paragraflar: [
                    "Büyük fabrikada bir kişinin o gün izinli olması işi aksatmaz, çünkü yerine bakan başka biri vardır. İki-üç kişilik bir atölyede durum farklıdır — işletme sahibi ya da tek yetkili kişi müsait değilse iş tamamen ertelenir. Bu yüzden küçük işletme taleplerinde randevuyu birden fazla kez teyit ederiz: talep anında, sevkiyattan bir gün önce ve mümkünse sabahında kısa bir mesajla.",
                    "Bu tekrarlı teyit fazla temkinli görünebilir ama küçük ölçekli sahalarda en sık yaşanan aksama, unutulan ya da hatırlanmayan randevudur — büyük tesislerde bu, bakım şefinin takviminde otomatik yer bulurken, tek kişilik bir işletmede kolayca gözden kaçabilir. Birkaç dakikalık teyit alışkanlığı, hem bizim hem işletmenin boşa geçen bir günü yaşamasını önler.",
                ],
            },
            {
                baslik: "Küçük işletmeler için biriken iş listesi mantığı",
                paragraflar: [
                    "Tek ya da iki kişilik işletmelerde platform gerektiren işler genellikle küçük ve aralıklı doğar — bir armatür, bir tabela, bir raf kontrolü. Her birini ayrı ayrı çağırmak, küçük işletme bütçesi için nakliye ağırlıklı bir maliyet üretir. Önerdiğimiz yöntem, bu kalemleri biriktirip birkaç haftada bir tek bir randevuda toplamaktır.",
                    "Bu yöntemin ikinci faydası, komşu işletmelerle birleşme fırsatıdır: biriken listenizi bize bildirdiğinizde, aynı hafta içinde bölgenizde planlanan başka bir sevkiyata ekleyebiliriz. Vardiya saatiniz benzer işletmelerle uyumluysa, bu birleşme neredeyse her zaman mümkün olur ve maliyetiniz belirgin biçimde düşer.",
                ],
            },
        ],
        sss: [
            {
                soru: "Küçük bir atölyeyiz, sadece ben ve bir çırağım var; randevu nasıl belirlenir?",
                cevap:
                    "Sizin müsait olduğunuz saate göre. Büyük fabrikalardaki vardiya çizelgesi mantığı burada geçerli değildir; belirleyici olan tek yetkili kişinin — yani sizin — o gün ne zaman atölyede olacağınızdır. Bize sabah mı öğleden sonra mı uygun olduğunuzu söyleyin, makineyi o saate göre planlayalım. Randevuyu birden fazla kez teyit ederiz — talep anında, sevkiyattan bir gün önce ve mümkünse sabahında — çünkü küçük işletmelerde en sık yaşanan aksama unutulan randevudur, bunu önlemeye çalışırız.",
            },
            {
                soru: "İşliğimizin vardiya saatleri sabit değil, sipariş yoğunluğuna göre değişiyor; bu sorun olur mu?",
                cevap:
                    "Olmaz, ama bize haftalık durumu bildirmenizi isteriz. Sabit bir saat varsayıp makineyi ona göre göndermek, değişken düzenli işliklerde bekleme riski taşır; bu yüzden geçiş saatini o haftaki üretim yoğunluğunuza göre sevkiyattan hemen önce teyit ederiz. Vardiya erken başlıyorsa makineyi erken, geç başlıyorsa geç konumlandırırız. Tek istediğimiz, değişikliği bize mümkün olduğunca erken haber vermenizdir — son dakika bilgi, planlamayı zorlaştırır ama imkânsız kılmaz.",
            },
            {
                soru: "Deponuzda tek personel çalışıyor; o gün izinliyse ne olur?",
                cevap:
                    "Randevu ertelenir, çünkü tek yetkili personel yoksa çalışma noktasını gösterecek ve makineyi teslim alacak kimse kalmaz. Bu riski azaltmak için randevuyu birkaç kez teyit ederiz ve mümkünse alternatif bir tarih de konuşuruz. Deponuzda personel değişimi ya da izin planı varsa bunu talep aşamasında bildirmeniz, bizim de sizin de zamanınızı korur. Küçük ekipli tesislerde bu tür değişiklikler kolay yaşanır; bu yüzden esnek bir yedek tarih önerisini baştan konuşmayı öneririz.",
            },
            {
                soru: "Komşu atölyelerle aynı hafta iş yaptırmak istiyoruz; nasıl organize oluruz?",
                cevap:
                    "Vardiya saatleriniz benzerse bu kolayca kurulur — bölgedeki küçük işletmelerin çoğu benzer saatlerde açık olduğu için sabah bir atölye, öğleden sonra bir diğeri şeklinde tek günlük bir tur çıkarabiliriz. Yapmanız gereken, işlerinizi ve tercih ettiğiniz saatleri bize birlikte bildirmenizdir; sıralamayı biz kurarız ve nakliye maliyeti aranızda bölünür. Vardiya saatleriniz çok farklıysa (biri sabahçı biri akşamcı gibi) yine birleştirebiliriz ama geçiş süresi biraz uzar; bu durumda toplam maliyeti size açıkça gösteririz.",
            },
            {
                soru: "Turizm bölgesine yakınız; sezon trafiği randevumuzu etkiler mi?",
                cevap:
                    "Doğrudan işinizi değil ama sevkiyat saatini etkileyebilir. Turistik güzergâha yakın yollarda sezon içi araç yoğunluğu artar ve bu, ağır makinenin size ulaşma süresini uzatabilir. Bu riski azaltmak için bu bölgedeki randevularda erken sabah ya da akşamüstü geçişi tercih ederiz — trafik daha seyrek olduğu için makine zamanında ulaşır. Sizin işletme vardiyanız turizm takviminden bağımsız çalışıyorsa, tek etkilenen şey sevkiyat saatinin seçimidir; randevu saatinizde bir değişiklik gerekmez.",
            },
            {
                soru: "Küçük işlerimiz birikince mi çağırmalıyız, yoksa her iş çıktıkça mı arayalım?",
                cevap:
                    "Biriktirmenizi öneririz, özellikle nakliye maliyeti açısından. Tek bir armatür ya da tabela işi için ayrı sevkiyat, küçük işletme bütçesinde nakliye ağırlıklı bir maliyet oluşturur. Birkaç haftada bir biriken kalemleri tek randevuda toplamak hem daha ekonomik hem daha verimlidir. Ayrıca biriken listenizi bize bildirdiğinizde, aynı hafta bölgenizde planlanan başka bir sevkiyata ekleyebiliriz — bu da maliyeti daha da düşürür. Gerçek bir acil durumda elbette bekletmeyiz, tekil çağrıyı da yaparız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Pamukkale ilçe sınırlarının turistik travertenler dışında üretim ve depolama tesisleri de barındırması kamuya açık coğrafi bilgidir; küçük işletme randevu düzeni ve tur birleştirme kendi çalışma pratiğimizdir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:honaz": {
        h1: "Honaz'da Fabrika Vardiyasına Göre Manlift Kiralama",
        giris:
            "Honaz'daki fabrika ölçeğindeki tesislerde platform kiralama kararını belirleyen ilk soru bizim için kottan önce vardiyadır: bu tesis kaç vardiya çalışıyor, hangi saatte hat durabiliyor, bakım ekibi hangi vardiyada sahada. İlçedeki büyük tekstil ve mermer işleme tesisleri çoğunlukla iki ya da üç vardiyalı çalışır ve bu ölçekte bakım penceresini bulmak, küçük atölyedeki gibi tek bir kişiyle değil, tesisin bakım departmanıyla birlikte kurulan bir süreçtir. Mermer tarafında ise vardiya kadar önemli bir başka takvim vardır — kesim programı; katrak ve ST hattının hangi blokta ne zaman çalışacağı bilinmeden, hattın üstündeki bir servis işi için doğru pencere bulunamaz. Bu sayfada, fabrika ölçeğindeki tesislerde vardiya çizelgesinin bakım planına nasıl dönüştüğünü, tesisin kendi bakım ekibiyle kurulan iş bölümünü ve mermer kesim programının erişim kararını nasıl şekillendirdiğini anlattık.",
        maddeler: [
            {
                baslik: "Fabrika ölçeğinde vardiya çizelgesinin bakım planına dönüşmesi",
                metin:
                    "Büyük tesiste bakım işi, tek bir telefon görüşmesiyle değil bir çizelgeyle planlanır. Tesisin bakım departmanı bize haftalık ya da aylık vardiya programını verdiğinde, biz bu programın içindeki boşlukları — planlı duruşlar, düşük kapasiteli vardiyalar, hafta sonu tek vardiyaya düşen dönemler — işaretleriz ve platform işini bu boşluklara yerleştiririz. Bu süreç, küçük atölyedeki 'sizin uygun olduğunuz saat' mantığından farklıdır; burada birden fazla vardiyanın, birden fazla departmanın takvimi aynı anda hesaba katılır. Çizelgeyi görmeden verilen bir teklif, sahada bir vardiyanın ortasında bekleyen bir makineyle sonuçlanabilir.",
            },
            {
                baslik: "Bakım departmanıyla iş bölümü ve yetki devri",
                metin:
                    "Fabrika ölçeğindeki tesislerin kendi bakım-onarım ekibi olduğu için bizim rolümüz net biçimde tanımlıdır: erişimi sağlamak, teknik işi büyük ölçüde tesisin kendi ekibi yapar. Bu iş bölümünün sağlıklı işlemesi için yetkinin kim de olduğu baştan netleşir — hangi vardiyada hangi bakım sorumlusunun devrede olduğu, kararı kimin verdiği, acil bir durumda kimin aranacağı. Vardiya değiştiğinde yetki de değişebilir; bu yüzden uzun süreli işlerde her vardiyanın kendi sorumlusunu ve iletişim bilgisini alırız. Bu netlik, vardiya geçişinde işin sahipsiz kalmasını önler.",
            },
            {
                baslik: "Mermer kesim programının erişim kararına etkisi",
                metin:
                    "Mermer işleme tesislerinde katrak ve ST hatlarının kesim programı, platform planının ikinci belirleyicisidir — hattın üstündeki servis noktasına ulaşmak, ancak o blok kesimi bittiğinde ya da hat durduğunda mümkündür. Kesim programı günler öncesinden bellidir ve bize bu program paylaşıldığında, hangi günün hangi saatinde hat boşalacağını bilerek plan yaparız. Kesim devam ederken hat üstüne çıkmak, su devirdaimi ve dönen ekipman nedeniyle güvenli değildir; bu, tartışılan değil uyulan bir kuraldır. Kesim programını paylaşmayan sahalarda ise keşif ziyaretiyle bu bilgiyi biz alırız.",
            },
            {
                baslik: "Vardiya arası devir toplantılarının kullanımı",
                metin:
                    "Büyük tesislerde vardiya değişiminde çoğu zaman kısa bir devir toplantısı yapılır — giden vardiya sorumlusu, gelen vardiya sorumlusuna günün durumunu anlatır. Uzun süreli platform kiralamalarında bu toplantıya kısa bir bakım güncellemesi eklemeyi öneririz: makine hangi işte, akü ya da bakım durumu ne, bir sonraki vardiyada ne planlanıyor. Bu birkaç dakikalık ekleme, üç ayrı vardiyanın aynı makineyi koordinasyonsuz kullanmasından doğan aksaklıkları önler ve makinenin gün boyu verimli kullanılmasını sağlar.",
            },
            {
                baslik: "Planlı duruşun bakım listesini toplayan gücü",
                metin:
                    "Fabrika ölçeğindeki tesislerin yılda birkaç kez yaptığı planlı bakım duruşu, vardiya kısıtından bağımsız çalışabilen tek pencere olduğu için platform işlerinin büyük kısmı bu döneme toplanır. Duruş süresi kısa olduğu için önceden hazırlık kritik önem taşır — hangi kalemin hangi sırayla yapılacağı, hangi makine sınıfının ne zaman geleceği duruştan önce netleşir. Duruş planına erken dahil olduğumuzda pencere açıldığında hiç zaman kaybetmeden başlarız; geç dahil olunan duruşlarda ise makine bulma ve konumlanma süresi, kısıtlı duruş penceresinden çalınır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Vardiya ve kesim programına göre erişim penceresi",
                paragraflar: [
                    "Honaz'daki fabrika ölçeğindeki tesislerde erişim penceresini belirleyen iki ana faktörü — vardiya düzeni ve (mermer tarafında) kesim programı — aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Belirleyici takvim", "Doğal pencere", "Koordinasyon muhatabı"],
                    satirlar: [
                        ["Tekstil, 3 vardiya", "Vardiya çizelgesi", "Parti geçişi, hafta sonu", "Bakım departmanı"],
                        ["Tekstil, 2 vardiya", "Vardiya geçiş saati", "Sabah-akşam arası", "Vardiya amiri"],
                        ["Mermer, sürekli kesim", "Katrak/ST kesim programı", "Blok geçişi, hat durması", "Üretim şefi"],
                        ["Her ikisi, planlı duruş", "Yıllık duruş takvimi", "Duruş penceresinin tamamı", "Bakım müdürü"],
                    ],
                },
            },
            {
                baslik: "Kesim programını bilmeden hat üstüne çıkılmaz",
                paragraflar: [
                    "Mermer işleme hattında kesim devam ederken üst kotta çalışmak, iki ayrı riski aynı anda taşır: dönen ekipmana yakınlık ve su devirdaiminin ıslattığı zeminde platform stabilitesi. Bu risklerin ikisi de kesimin durmasıyla ortadan kalkar; bu yüzden hat üstü işlerimiz istisnasız kesim programına bağlıdır.",
                    "Kesim programını önceden paylaşan tesislerde bu koordinasyon sorunsuz işler — hangi blok ne zaman biter, hangi saatte hat boşalır bilinir ve makine tam o pencereye göre planlanır. Programı paylaşmayan ya da günlük değişen sahalarda ise her ziyaretimizde üretim şefiyle kısa bir teyit yaparız; hat durmadan sepet o kota çıkmaz, bu kuralın istisnası yoktur.",
                ],
            },
            {
                baslik: "Planlı duruşa erken dahil olmanın getirisi",
                paragraflar: [
                    "Fabrika ölçeğindeki bir tesisin yıllık planlı duruşu genellikle birkaç gündür ve bu süre boyunca onlarca bakım ekibi aynı anda sahaya girer. Platform işini bu koreografinin bir parçası hâline getirmek, duruş planına erken katılmakla mümkündür — makine sınıfları, konumlanma noktaları ve iş sırası duruştan haftalar önce netleşir.",
                    "Geç katılan bir platform talebi, duruş günü sahada makine bulma ve konumlanma süresiyle uğraşır ve bu süre, zaten kısıtlı olan duruş penceresinden çalınır. Erken planlama, hem bizim hem tesisin duruş süresini en verimli kullanmasını sağlayan tek yoldur; bu yüzden düzenli çalıştığımız fabrikalara duruş takvimini aylar öncesinden paylaşmalarını öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Fabrikamız üç vardiya çalışıyor; bakım işini hangi vardiyaya yazmalıyız?",
                cevap:
                    "Bunu birlikte belirleriz. Vardiya çizelgenizi bize verdiğinizde, üretim yoğunluğunun en düşük olduğu vardiyayı ya da parti geçişlerinin sık olduğu saatleri işaretler, platform işini oraya yerleştiririz. Üç vardiyalı tesislerde genellikle üçüncü vardiyanın belirli saatleri ya da hafta sonuna denk gelen tek vardiyalı dönem en uygun pencereyi sunar. Kesin bir tercihiniz yoksa bakım departmanınızla birlikte en az kayıpla çalışacağımız zamanı biz öneririz; siz yalnızca çizelgeyi paylaşmanız yeterli.",
            },
            {
                soru: "Bakım ekibimiz var; sizinle görev dağılımı nasıl olacak?",
                cevap:
                    "Erişimi biz sağlarız, teknik işin büyük kısmı çoğunlukla sizin ekibinizde kalır. Hangi vardiyada hangi bakım sorumlusunun devrede olacağını, kararı kimin vereceğini ve acil durumda kimin aranacağını baştan netleştiririz — vardiya değiştiğinde yetki de değişebileceği için uzun süreli işlerde her vardiyanın sorumlusunu ayrı ayrı alırız. Bu netlik sağlandığında iş vardiya geçişlerinde sahipsiz kalmaz; makine hangi vardiyada olursa olsun, o an kimin karar vereceği bellidir.",
            },
            {
                soru: "Mermer hattımızda kesim sürekli devam ediyor; hat üstü servise ne zaman çıkabiliriz?",
                cevap:
                    "Kesim durduğunda — bu, esnetilebilecek bir kural değildir. Katrak ve ST hattı çalışırken dönen ekipmana yakınlık ve ıslak zeminde platform stabilitesi ciddi risk taşır. Kesim programınızı paylaşırsanız hangi blok ne zaman biter, hangi saatte hat boşalır bilir ve makineyi tam o pencereye göre planlarız. Programı paylaşmıyorsanız her ziyaretimizde üretim şefinizle kısa bir teyit yaparız; hat durduğu teyit edilmeden sepet o kota çıkmaz.",
            },
            {
                soru: "Makine gece vardiyasında da kullanılacak; devir nasıl yapılır?",
                cevap:
                    "Vardiya değişiminde kısa bir devir kaydı öneririz: akü durumu, varsa hasar bildirimi, o vardiyada yapılan iş. Tesisinizde zaten vardiya devir toplantısı yapılıyorsa bu kaydı oraya kısa bir madde olarak eklemeniz yeterli; ayrı bir toplantı gerekmez. Bu kayıt olmadan en sık yaşanan sorun, gece vardiyasının makineyi şarjsız bırakması ve sabah ekibinin bunu iş başında fark etmesidir. Birkaç dakikalık bu alışkanlık, üç vardiyanın aynı makineyi koordinasyonsuz kullanmasından doğan kayıpları büyük ölçüde önler.",
            },
            {
                soru: "Planlı duruşumuz iki ay sonra; şimdiden mi konuşmalıyız?",
                cevap:
                    "Evet, ne kadar erken o kadar iyi. Duruş süresi kısadır ve bu süre boyunca onlarca bakım ekibi aynı anda sahaya girer; platform işini bu koreografinin bir parçası yapmak, erken planlamayla mümkündür. İki ay önceden başlarsak, hangi kalemin hangi makine sınıfını gerektirdiğini, konumlanma noktalarını ve iş sırasını duruştan haftalar önce netleştiririz. Duruş günü geldiğinde makine hazır bekler, pencere açılır açılmaz iş başlar. Geç başlayan planlamada ise duruşun kısıtlı süresinden makine bulma ve konumlanma zamanı çalınır.",
            },
            {
                soru: "Vardiya sorumlumuz sık değişiyor; her seferinde yeniden mi anlatmalıyız?",
                cevap:
                    "Hayır, bu bilgiyi biz kayıt altında tutarız. Düzenli çalıştığımız tesislerde hangi vardiyanın hangi sorumluyla yürüdüğünü ve daha önce hangi kararların alındığını kendi tarafımızda tutar, yeni sorumluyla görüşürken bu geçmişi paylaşırız. Sizden istediğimiz tek şey, sorumlu değiştiğinde bize haber vermenizdir — yeni kişinin iletişim bilgisi ve yetki kapsamı yeterlidir. Bu sayede vardiya sorumlusu değişse bile iş sürekliliği kopmaz, her seferinde sıfırdan başlamayız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Honaz'ın Denizli sanayisinin yoğunlaştığı ilçe olması ve mermer işleme tesislerinin kesim hattı düzeni sektör geneli bilgidir; vardiya çizelgesi koordinasyonu ve duruş planı entegrasyonu kendi çalışma pratiğimizdir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:civril": {
        h1: "Çivril'de Mevsimlik İş Gücüne Göre Manlift Kiralama",
        giris:
            "Çivril'deki depolama ve işleme tesislerinin iş gücü düzeni, ilin sanayi ilçelerinden farklı bir ritim izler: burada belirleyici olan sabit vardiya çizelgesinden çok mevsimlik dalgalanmadır. Hasat öncesi ve hasat sonrası dönemlerde tesisler geçici işçi alır, mevcut personelin çalışma saatleri uzar, hatta bazı tesislerde geçici olarak ikinci bir vardiya açılır; sakin dönemde ise aynı tesis tek, kısıtlı bir ekiple çalışır. Bir platform talebi geldiğinde bizim için belirleyici olan soru, o tesisin şu an hangi iş gücü yoğunluğunda olduğudur — çünkü yoğun dönemde bakım için ayrılabilecek zaman neredeyse yoktur, sakin dönemde ise aynı tesis günün büyük kısmını bakıma ayırabilir. Bu sayfada, mevsimlik iş gücü dalgalanmasının bakım planına nasıl yansıdığını, geçici personelin platform kullanımında nasıl bir kısıt oluşturduğunu ve sakin dönemin nasıl en verimli bakım penceresine dönüştürüldüğünü anlattık.",
        maddeler: [
            {
                baslik: "Hasat öncesi yoğunluğun personel takvimine etkisi",
                metin:
                    "Hasat öncesi hazırlık döneminde tesisler kapasitelerini artırır ve bu, mevcut personelin çalışma saatlerini uzatır ya da geçici ek personel getirir. Bu dönemde platform işi istemek, zaten yoğunlaşmış bir iş gücünün üstüne ek bir koordinasyon yükü bindirmek demektir — bakım için ayrılacak yetkili kişi bulmak zorlaşır, herkes kendi işine odaklanmıştır. Bu yüzden hasat öncesi dönemde zorunlu olmayan bakım taleplerini kabul etmekten kaçınır, işletmeye bu dönemi atlayıp sakin döneme geçmesini öneririz. Zorunlu bir arıza çıkarsa, işi mümkün olan en az personel müdahalesiyle, kısa ve net bir randevuyla planlarız.",
            },
            {
                baslik: "Geçici işçinin platform kullanımındaki kısıtı",
                metin:
                    "Mevsimlik dönemde tesise giren geçici personel, genellikle temel üretim işlerinde görevlendirilir ve platform gibi özel ekipman kullanımı için yetkilendirilmemiştir. Bu, bizim için önemli bir planlama detayıdır — çalışma noktasını gösterecek ve makineyi teslim alacak kişinin sabit, yetkili personelden olması gerekir. Yoğun dönemde bu kişinin müsaitlik penceresi dardır, çünkü sabit personel sayısı azken iş yükü yüksektir. Bu yüzden mevsimlik dönemde platform talebi geldiğinde önce sabit personelden kimin sorumlu olacağını ve o kişinin ne zaman müsait olduğunu netleştiririz; geçici personelin varlığı bu planlamayı değiştirmez.",
            },
            {
                baslik: "Sakin dönemin en verimli bakım penceresi olması",
                metin:
                    "Hasat ve sevkiyat dönemleri arasındaki sakin aralıkta tesisler büyük ölçüde küçülmüş bir ekiple çalışır ve bu, bakım için en geniş zaman dilimidir — personel başka işle meşgul değildir, tesis genellikle daha az doludur ve bakım işi günün istenen saatine rahatça yerleştirilebilir. Bu dönemde iş gücü kısıtı ortadan kalktığı için biz de kapsamlı bakım listelerini bu pencereye yönlendiririz. Sakin dönemin ne zaman başlayıp biteceğini genellikle işletme kendi ürün takviminden bilir; bu bilgiyi bizimle paylaşan işletmeler, bakım listelerini yıl boyunca en verimli zamana yerleştirmiş olur.",
            },
            {
                baslik: "Geçici ikinci vardiyanın açıldığı dönemlerde koordinasyon",
                metin:
                    "Bazı tesisler yoğun dönemde geçici olarak ikinci bir vardiya açar ve bu, normalde tek vardiyalı çalışan bir tesiste alışılmadık bir koordinasyon ihtiyacı doğurur. Geçici vardiya genellikle deneyimsiz bir yönetim yapısıyla kurulur — kim yetkili, hangi saatte kim sahada, henüz oturmamış olabilir. Bu dönemde platform işi planlarken, geçici vardiyanın yetkilisini özellikle netleştiririz ve mümkünse işi geçici vardiyanın açık olmadığı saatlere kaydırırız. Geçici vardiyanın kendisi kısa ömürlü olduğu için burada kalıcı bir koordinasyon düzeni kurmak yerine, o dönem için özel ve basit bir plan yeterlidir.",
            },
            {
                baslik: "Yıllık iş gücü döngüsüne göre bakım listesi planlaması",
                metin:
                    "Çivril'deki tesislerle uzun vadeli çalıştığımızda, işletmenin yıllık iş gücü döngüsünü — ne zaman yoğunlaştığını, ne zaman sakinleştiğini — birlikte çıkarır ve bakım listesini bu döngüye göre önceden dağıtırız. Bu, tek tek talep gelmesini beklemek yerine, yılın başında hangi ayın hangi bakım kalemine uygun olduğunu belirleyen bir plandır. Sonuç, işletmenin yoğun döneminde hiç rahatsız edilmemesi ve sakin döneminde bakım listesinin büyük kısmının tamamlanmasıdır. Bu planlama, özellikle iş gücü dalgalanması keskin olan tesislerde, yıl boyunca yaşanacak acil çağrı sayısını da azaltır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mevsimlik döngüde iş gücü yoğunluğu ve bakım uygunluğu",
                paragraflar: [
                    "Çivril'deki tesislerin yıllık iş gücü döngüsünü ve bu döngünün bakım planlamasına etkisini aşağıdaki tabloda özetledik.",
                ],
                tablo: {
                    basliklar: ["Dönem", "İş gücü durumu", "Bakım uygunluğu", "Önerilen yaklaşım"],
                    satirlar: [
                        ["Hasat öncesi hazırlık", "Yoğun, uzatılmış saatler", "Düşük", "Yalnız zorunlu işler"],
                        ["Hasat / sevkiyat", "En yoğun, ek personel", "Çok düşük", "Ertelenir"],
                        ["Hasat sonrası", "Kademeli azalma", "Orta", "Kısa kalemler yapılabilir"],
                        ["Sakin dönem", "Küçük, sabit ekip", "Yüksek", "Kapsamlı liste bu döneme"],
                    ],
                },
            },
            {
                baslik: "Yetkili personeli bulmak: mevsimlik dönemin ilk sorusu",
                paragraflar: [
                    "Mevsimlik dalgalanma yaşayan bir tesiste, doğru muhatabı bulmak sabit düzenli bir tesisten daha fazla dikkat ister. Yoğun dönemde geçici personel çoğunlukta olabilir ve platform işini yönlendirecek sabit, yetkili kişi bu kalabalığın içinde her zaman kolayca ulaşılamaz olabilir. Bu yüzden talep aldığımızda ilk sorumuz, işi kimin yöneteceği ve o kişinin sabit personelden olup olmadığıdır.",
                    "Bu netleşme, özellikle acil taleplerde zaman kazandırır — telefon açtığımızda doğrudan doğru kişiye ulaşırız, tesiste kimin yetkili olduğunu araştırmakla vakit kaybetmeyiz. Düzenli çalıştığımız tesislerde bu bilgiyi kayıt altında tutar, personel değişse bile güncel tutarız.",
                ],
            },
            {
                baslik: "Sakin döneme yığılan bakım listesinin verimi",
                paragraflar: [
                    "Sakin dönemde iş gücü kısıtı ortadan kalktığı için bu pencere, yıl boyunca biriken bakım kalemlerinin toplu olarak bitirildiği dönemdir. Depo panel derzi, silo gövde kontrolü, aydınlatma ve saha bakımı gibi kalemlerin tümü tek bir ziyarette ya da birkaç güne yayılan bir planda toplanabilir — çünkü personel müsaittir ve tesis, işlere ayrılacak zamanı kısıtlamaz.",
                    "Bu yığılmanın avantajı yalnızca koordinasyon kolaylığı değil, maliyettir de: tek seferlik nakliye, kapsamlı bir liste arasında bölünür ve birim maliyeti düşürür. Sakin dönemin başlangıcını bilen işletmelere, bu dönem gelmeden birkaç hafta önce bakım listesini çıkarmalarını öneririz; liste elimizde olduğunda sakin dönemin ilk haftasında işe başlarız, geç kalmayız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hasat öncesi dönemde acil bir bakım ihtiyacımız çıktı; yine de gelir misiniz?",
                cevap:
                    "Geliriz, ama planı bu yoğun dönemin gerçeklerine göre kurarız. Zorunlu bir arızada işi mümkün olan en az personel müdahalesiyle, kısa ve net bir randevuyla planlarız — sizden yalnızca sabit personelinizden bir kişinin, kısa bir süre için müsait olmasını isteriz. Zorunlu olmayan bakım kalemlerini ise bu dönemde önermeyiz; iş gücünüz zaten yoğunlaşmışken ek bir koordinasyon yükü, sizin için de bizim için de verimsizdir. Zorunlu değilse sakin döneme erteleyelim, o dönemde çok daha rahat planlarız.",
            },
            {
                soru: "Yoğun dönemde geçici işçilerimiz var; onlar makineyi kullanabilir mi?",
                cevap:
                    "Genellikle önermeyiz. Platform kullanımı yetkilendirme ve eğitim gerektirir, geçici personel çoğunlukla bu kapsamda değildir. Çalışma noktasını gösterecek ve makineyi teslim alacak kişinin sabit, yetkili personelinizden olmasını isteriz. Yoğun dönemde bu kişinin müsaitlik penceresi dar olabilir; bu yüzden randevuyu, o kişinin gerçekten ayırabileceği bir saate göre kuracağız. Sabit personelinizden kimin sorumlu olacağını ve ne zaman müsait olduğunu bize baştan söyleyin, planı ona göre kesinleştirelim.",
            },
            {
                soru: "Sakin dönem ne zaman başlıyor, bakım listemizi ona göre mi planlamalıyız?",
                cevap:
                    "Tam olarak öneririz bunu. Sakin dönemin tarihini genellikle siz kendi ürün ve sevkiyat takviminizden bilirsiniz; bu bilgiyi bizimle paylaşırsanız kapsamlı bakım listenizi bu döneme göre planlarız. Sakin dönemde personel müsaitliği yüksek olduğu için hem koordinasyon kolaylaşır hem tek seferlik nakliye daha geniş bir liste arasında bölünerek maliyet düşer. Sakin dönem başlamadan birkaç hafta önce listenizi bize iletin; dönemin ilk haftasında işe başlayalım, geç kalmayalım.",
            },
            {
                soru: "Bu sezon geçici olarak ikinci bir vardiya açtık; bakım işini nasıl planlarız?",
                cevap:
                    "Geçici vardiyanın yetkilisini netleştirerek başlarız — kim sorumlu, hangi saatte sahada, henüz yeni kurulmuş bir düzen olduğu için bunu özellikle sorarız. Mümkünse işi geçici vardiyanın açık olmadığı saatlere kaydırmayı öneririz, çünkü yeni kurulmuş bir vardiyada koordinasyon henüz oturmamış olabilir ve platform işi bu belirsizliğin içine girmemelidir. Geçici vardiya kısa ömürlü olduğu için burada kalıcı bir düzen kurmuyoruz; o dönem için basit ve net bir plan yeterlidir. Vardiyanızın saatlerini bize bildirin, en az karışıklık çıkaracak pencereyi birlikte bulalım.",
            },
            {
                soru: "Yıllık iş gücü döngümüzü size vermek ne işe yarar?",
                cevap:
                    "Bakım listenizi yıl içinde en doğru zamana yerleştirmemizi sağlar. Döngünüzü — ne zaman yoğunlaştığınızı, ne zaman sakinleştiğinizi — bildiğimizde, hangi kalemi hangi aya yazacağımızı önceden planlarız ve yoğun döneminizde sizi hiç rahatsız etmeyiz. Bu, tek tek talep gelmesini beklemekten daha verimlidir; çünkü siz de biz de zamanı önceden biliriz, son dakika koordinasyon yükü doğmaz. Düzenli çalıştığımız işletmelerin çoğu bu döngüyü bir kez paylaşır, biz de yıllar boyunca bu çerçeveye göre planlarız.",
            },
            {
                soru: "Tesisimizde personel sık değişiyor, mevsimlik işçi yoğunluğu yüksek; yine de düzenli koordinasyon kurulabilir mi?",
                cevap:
                    "Kurulabilir, çünkü koordinasyonu kişiye değil role bağlarız. Sizden istediğimiz, hangi rolün — bakım sorumlusu, tesis müdürü, vardiya amiri gibi — platform işlerinden yetkili olduğunu bir kez netleştirmenizdir; o rolü üstlenen kişi değişse bile biz yeni kişiyle aynı düzende devam ederiz. Personel değişikliğini bize bildirmeniz yeterli, yeniden sıfırdan anlatmaya gerek kalmaz. Mevsimlik yoğunluğun yüksek olduğu dönemlerde bu netlik özellikle işe yarar — kalabalık bir sahada doğru kişiye hızlıca ulaşmamızı sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Çivril'in tarımsal üretime bağlı mevsimlik iş gücü dalgalanması yaşayan bir ilçe olması genel geçer bilgidir; iş gücü döngüsüne göre bakım planlaması ve rol bazlı koordinasyon kendi çalışma pratiğimizdir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:usak-osb-cevre-ili": {
        h1: "Uşak Organize Sanayi Bölgesine Vardiya Senkronize Manlift Hizmeti",
        giris:
            "Denizli'den Uşak'a hizmet götürürken çözdüğümüz asıl problem mesafe değil, iki farklı tesisin vardiya saatini aynı sevkiyat gününe sığdırmaktır. Uşak OSB'deki tekstil ve battaniye üretim tesisleri, Denizli'dekilerle benzer vardiya mantığıyla çalışır — çoğu iki ya da üç vardiyalı — ama her tesisin kendi geçiş saati, kendi bakım penceresi ve kendi yetkili kadrosu vardır. Komşu ile sevkiyat yaptığımızda, tek bir tesisin vardiya saatine göre değil, o gün ziyaret edeceğimiz birden fazla tesisin vardiya saatlerinin kesişimine göre plan kurarız — çünkü mesafenin getirdiği nakliye maliyetini karşılamanın en pratik yolu, aynı çıkışta birden fazla tesisin işini bitirmektir ve bu da her tesisin vardiya penceresinin diğerleriyle çakışmadan sıralanmasını gerektirir. Bu sayfada, iki ilin vardiya düzenlerinin nasıl senkronize edildiğini, tek bir sevkiyat gününde birden fazla tesisin nasıl ziyaret edildiğini ve komşu ildeki iş gücü koordinasyonunun Denizli'dekinden farkını anlattık.",
        maddeler: [
            {
                baslik: "İki tesisin vardiya saatini aynı güne sığdırmak",
                metin:
                    "Uşak'a çıkan bir sevkiyatta genellikle birden fazla tesisin işi aynı güne dizilir ve bunun mümkün olması, her tesisin vardiya geçiş saatinin diğerinden yeterince ayrık olmasına bağlıdır. Talep aldığımızda önce her tesisin vardiya çizelgesini alır, geçiş saatlerini yan yana koyarız — birinin sabah 08.00 geçişi, diğerinin öğleden sonra 16.00 geçişi varsa, bu iki pencere aynı günde rahatça sığar. Geçiş saatleri çakışıyorsa, ikisinden birini ikinci sıraya alır ve o tesisin geçiş dışı ama yine de uygun bir saatini buluruz. Bu senkronizasyon, komşu ile sevkiyatın ekonomik olmasının temel şartıdır.",
            },
            {
                baslik: "Her tesisin kendi yetkili kadrosunu netleştirmek",
                metin:
                    "Denizli içindeki bir günde birden fazla adres gezerken bile her adresin yetkilisi ayrıdır; komşu ilde bu ayrım daha da önem kazanır çünkü bir tesisteki gecikme, günün geri kalanını tamamen bozabilir. Bu yüzden Uşak'a çıkmadan önce her tesisin o gün sahada olacak yetkilisini — vardiya amiri ya da bakım sorumlusu — isim isim netleştiririz ve iletişim bilgilerini alırız. Sahaya vardığımızda doğrudan doğru kişiye ulaşmak, komşu ilde kaybedilebilecek en değerli kaynak olan zamanı korur.",
            },
            {
                baslik: "Vardiya geçişinin ortak çıkış rotasına etkisi",
                metin:
                    "Komşu ile sevkiyatın rotası, coğrafi sıralamadan çok vardiya saatlerine göre kurulur. Bazen coğrafi olarak ilk sırada duran tesis, vardiya geçişi öğleden sonraya denk geldiği için rotanın ikinci durağı olur; sabah geçişi olan tesis, biraz daha uzak olsa bile ilk durak seçilir. Bu, ilk bakışta mantıksız görünen ama vardiya penceresini kaçırmamak için gerekli bir sıralamadır. Rotayı kurarken tesislerin coğrafi konumunu değil, vardiya çizelgelerini önce masaya yatırırız; coğrafya, vardiya sıralaması netleştikten sonra araya girer.",
            },
            {
                baslik: "Uzak sahada yetkili bulunamama riskine karşı hazırlık",
                metin:
                    "Komşu ilde bir tesise vardığımızda, önceden netleştirilen yetkili kişinin son anda müsait olmaması, uzak sahada telafisi en zor aksaklıktır — yakın bir sahada bu durumda birkaç saat beklenebilir ya da ertesi gün dönülebilir, komşu ilde bu seçenek yoktur. Bu riski azaltmak için her sevkiyattan bir gün önce ilgili tesisle kısa bir teyit görüşmesi yaparız: yetkili kişi hâlâ o gün sahada mı, saat değişti mi. Bu teyit, sahada boşa geçecek bir günü büyük ölçüde önler.",
            },
            {
                baslik: "İki ilin vardiya kültürü arasındaki küçük farklar",
                metin:
                    "Denizli ve Uşak'taki tekstil tesislerinin vardiya mantığı büyük ölçüde benzese de, tesisten tesise küçük farklar görülür — bazı sahalarda vardiya değişimi tam saatte, bazılarında birkaç dakika kayarak olur; bazı tesisler geçiş saatinde kısa bir toplantı yapar, bazıları doğrudan devrederler. Bu küçük farklar, ilk ziyarette gözlemlenir ve sonraki planlamalara yansıtılır. Düzenli çalıştığımız Uşak tesislerinde bu kültürel detayları kayıt altında tutarız; her yeni ziyarette sıfırdan öğrenmek yerine, bildiğimiz düzene göre plan kurarız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ortak çıkışta vardiya senkronizasyonu örneği",
                paragraflar: [
                    "İki-üç tesisi aynı günde ziyaret ettiğimiz tipik bir Uşak sevkiyatının vardiya bazlı sıralamasını aşağıdaki tabloda örnekledik. Amaç, vardiya penceresinin coğrafi sıralamadan önce geldiğini göstermektir.",
                ],
                tablo: {
                    basliklar: ["Sıra", "Belirleyici", "Tipik saat dilimi", "Sıralama nedeni"],
                    satirlar: [
                        ["1. durak", "Sabah vardiya geçişi", "07.30-09.00", "En erken pencere önce"],
                        ["2. durak", "Öğle arası boşluk", "12.00-13.00", "Kısa ama kullanılabilir"],
                        ["3. durak", "Öğleden sonra geçişi", "15.30-17.00", "Günün son penceresi"],
                        ["Yedek", "Gece vardiyası", "Talebe göre", "Ayrı sevkiyat gerekebilir"],
                    ],
                },
            },
            {
                baslik: "Vardiya çizelgesi paylaşmayan tesislerde keşif zorunluluğu",
                paragraflar: [
                    "Uşak'taki bazı tesisler vardiya çizelgesini ilk görüşmede paylaşmaz ve bu durumda komşu ile sevkiyatı planlamak zorlaşır — çünkü diğer duraklarla senkronizasyon kurulamadan rota belirsiz kalır. Bu tesislerle çalışırken önce kısa bir keşif görüşmesi yapar, en azından geçiş saatlerini ve yetkili kişiyi öğreniriz.",
                    "Bu keşif adımı, uzak sahada özellikle değerlidir çünkü bilgi eksikliğinin bedeli yakın sahadakinden yüksektir — yanlış saatte varan bir makine, komşu ilde geri dönüp tekrar gelmek anlamına gelir. Bu yüzden Uşak'taki yeni bir tesisle ilk kez çalışırken, sevkiyat tarihini kesinleştirmeden önce bu temel bilgileri almayı standart adımımız hâline getirdik.",
                ],
            },
            {
                baslik: "Komşu ilde tek muhatap modeli",
                paragraflar: [
                    "Birden fazla tesisi tek günde gezdiğimiz Uşak sevkiyatlarında, koordinasyonu tek elden yürütmek karışıklığı önler. Bizim tarafımızda tek bir sevkiyat sorumlusu, o günün bütün duraklarının vardiya bilgisini, yetkili iletişimini ve saatlerini takip eder; her tesisle ayrı ayrı, kopuk görüşmeler yerine tek bir koordineli plan yürür.",
                    "Bu model, aynı zamanda tesislerin de işini kolaylaştırır — bir tesis, kendi randevu saatinin diğer duraklara göre nasıl konumlandığını sorduğunda net bir cevap alır. Uşak'ta düzenli çalıştığımız birden fazla tesis olduğunda bu tek muhatap modeli, yıllar içinde kendiliğinden oturan bir düzene dönüşür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Uşak'taki tesisimizin vardiya saatlerini size nasıl iletmeliyiz?",
                cevap:
                    "En basit yol, vardiya geçiş saatlerinizi ve bakım işlerinden sorumlu kişinin iletişim bilgisini bize yazılı iletmenizdir. Bu bilgi elimizde olduğunda, aynı gün Uşak'a çıkacak başka bir sevkiyatla sizinkini birleştirip birleştiremeyeceğimizi hemen görürüz. Vardiya saatiniz belirsizse ya da sık değişiyorsa, ilk ziyarette kısa bir keşif görüşmesiyle bu bilgiyi biz alırız. Ne kadar erken paylaşılırsa, komşu ile sevkiyatın ortak çıkış fırsatını o kadar iyi değerlendiririz.",
            },
            {
                soru: "Aynı gün Uşak'ta birden fazla tesise gidiyorsanız, bizim sıramız nereye denk gelir?",
                cevap:
                    "Bunu coğrafi konumunuza değil vardiya geçiş saatinize göre belirleriz. Sabah erken geçişi olan bir tesis, biraz daha uzak olsa bile günün ilk durağı olabilir; öğleden sonra geçişi olan bir tesis ise coğrafi olarak yakın olsa da sona kalabilir. Amaç, her tesisin vardiya penceresini kaçırmadan günün rotasını kurmaktır. Vardiya geçiş saatinizi bildirdiğinizde, o günkü diğer duraklarla birlikte size hangi sırada geleceğimizi netleştiririz.",
            },
            {
                soru: "Belirlediğimiz yetkili kişi o gün izinli çıkarsa ne olur?",
                cevap:
                    "Bu riski azaltmak için sevkiyattan bir gün önce kısa bir teyit görüşmesi yaparız — yetkili kişi hâlâ o gün sahada mı, değişiklik var mı diye sorarız. Komşu ilde bu risk yakın sahadan daha kritiktir çünkü yanlış günde varan bir makine kolayca geri dönüp tekrar gelemez. Yetkili kişi değişecekse bize önceden haber verin; yeni kişinin iletişim bilgisini alır, planı ona göre güncelleriz. Son dakika değişikliklerde de elimizden geleni yaparız ama önceden bilinen bir değişiklik, günün akışını hiç bozmadan yönetilir.",
            },
            {
                soru: "Tesisimiz gece vardiyasında da çalışıyor; komşu ilden gece hizmet alabilir miyiz?",
                cevap:
                    "Alabilirsiniz, ama gece işleri genellikle ayrı bir sevkiyat gerektirir çünkü gündüz duraklarıyla aynı rotaya sığmaz. Gece vardiyanızın saatlerini ve o saatte kimin yetkili olacağını bildirin; bu bilgiye göre ayrı bir gece sevkiyatı planlarız. Komşu ilde gece çalışmanın kendi hazırlığı vardır — aydınlatma, iletişim hattı ve gece vardiya sorumlusunun işin başında bulunması gibi. Talebinizi ve gece vardiya düzeninizi paylaşın, uygun bir plan çıkaralım.",
            },
            {
                soru: "Uşak'taki tesisimizle ilk kez çalışacağız; nasıl başlanır?",
                cevap:
                    "İlk adım kısa bir keşif görüşmesidir — tesisinizin vardiya düzenini, geçiş saatlerini ve bakım sorumlusunu öğreniriz. Bu bilgi, sadece o günkü işi değil, gelecekteki sevkiyatları da planlamamızı kolaylaştırır. İlk ziyarette bu temel bilgileri aldıktan sonra, düzenli çalıştığımız diğer Uşak tesisleriyle vardiya senkronizasyonu kurmaya başlarız ve nakliye maliyetiniz zamanla ortak çıkışlarla düşer. İlk görüşmede sadece mevcut ihtiyacınızı değil, ne sıklıkla bakım gerektiğini de sorarız; bu, uzun vadeli planlamanın temelini oluşturur.",
            },
            {
                soru: "İki ilin vardiya kültürü farklı mı, buna göre hazırlık yapmamız gerekir mi?",
                cevap:
                    "Genel mantık benzer ama tesisten tesise küçük farklar olabilir — bazı sahalarda vardiya değişimi tam saatinde, bazılarında birkaç dakika kayarak olur. Sizin tarafınızdan özel bir hazırlık gerekmez; bu küçük farkları ilk ziyarette biz gözlemler ve sonraki planlamalara yansıtırız. Tek isteğimiz, vardiya değişim saatinizde küçük bir sapma varsa bunu bize söylemenizdir — böylece makinenin pencereyi kaçırmasını önleriz. Düzenli çalıştığımız tesislerde bu detayları kayıt altında tutar, her ziyarette yeniden öğrenmeyiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Uşak'ın Denizli'ye komşu il olması ve tekstil-battaniye üretiminde tanınması kamuya açık genel bilgidir; vardiya senkronizasyonu, tek muhatap modeli ve rota kurgusu kendi çalışma pratiğimizdir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:saraykoy": {
        h1: "Sarayköy'de Santral Vardiyası ve Sera Takvimine Göre Manlift Kiralama",
        giris:
            "Sarayköy'de bir platform talebi aldığımızda karşımıza iki farklı iş gücü ritmi çıkar ve ikisi birbirine hiç benzemez. Jeotermal santral tarafı kesintisiz çalışır — kuyu başı, güç bloğu ve soğutma kulesi 24 saat vardiyalı bir ekiple işletilir, bakım penceresi vardiya çizelgesinin içinde aranır. Aynı ilçenin ikinci yüzü olan seracılıkta ise iş gücü tamamen farklı akar: çoğu sera birkaç kişilik aile işletmesidir, çalışma saatleri gün ışığına ve mevsime bağlıdır, gece vardiyası diye bir kavram yoktur. Bir talep geldiğinde ilk sorduğumuz şey bu yüzden kottan önce hangi dünyaya ait olduğudur — santral mi, sera mı — çünkü ikisinin randevu mantığı, yetkili kişi profili ve bakım penceresi baştan sona farklı kurulur. Bu sayfada, santralin 24 saatlik vardiya düzeninde bakım penceresinin nasıl bulunduğunu, seracılığın gündüze bağlı iş gücü takviminin platform kararını nasıl şekillendirdiğini ve iki farklı ritmi aynı ilçede nasıl yönettiğimizi anlattık.",
        maddeler: [
            {
                baslik: "Santralin 24 saatlik vardiyasında bakım penceresi",
                metin:
                    "Jeotermal santral durmadan çalışır ama vardiya içinde küçük duraklamalar mutlaka vardır — parti geçişi değil, ama kontrol turu aralıkları, düşük kapasiteli gece saatleri, planlı bakım duruşları. Bakım ekibiyle konuştuğumuzda önce vardiya çizelgesini isteriz; üç vardiyanın hangisinde saha görece sakin, hangi saatte kuyu başı ekipleri boşta, bunu bilmeden verilen bir teklif sahada bekleyen bir makineyle sonuçlanır. Santral tarafında bakım penceresi genellikle gece üçüncü vardiyanın sakin saatlerinde ya da yıllık planlı duruşlarda açılır; ikisi de önceden bilinen, tesisin kendi takvimine yazılan pencerelerdir.",
            },
            {
                baslik: "Seracılığın gün ışığına bağlı çalışma takvimi",
                metin:
                    "Sera işletmelerinde iş gücü, santralin tam tersi bir mantıkla hareket eder — çalışma saatleri gün ışığıyla sınırlıdır ve gece vardiyası neredeyse hiç görülmez. Örtü değişimi, havalandırma mekanizması bakımı ya da aydınlatma montajı gibi yükseğe çıkmayı gerektiren işler bu yüzden sabah erken ya da öğleden sonra geç saatlere değil, işletmecinin sahada olduğu gün içi saatlere yazılır. Sera işletmecisi çoğu zaman tek ya da iki kişidir ve o kişi başka bir işe gittiyse platform işi o gün yapılamaz; bu yüzden randevu, büyük tesislerdeki vardiya penceresi değil, doğrudan kişinin günlük programı üzerinden kurulur.",
            },
            {
                baslik: "Santral bakım ekibiyle vardiya bazlı koordinasyon",
                metin:
                    "Santral tesislerinin kendi bakım-onarım kadrosu olduğu için bizim işimiz erişimi sağlamak, teknik kısmı çoğu zaman tesisin kendi ekibi yürütür. Bu iş bölümünün sağlıklı çalışması, hangi vardiyada hangi bakım sorumlusunun yetkili olduğunun baştan netleşmesine bağlıdır — vardiya değiştiğinde yetki de değişebilir, bu yüzden uzun süren işlerde her vardiyanın kendi muhatabını ve iletişim bilgisini alırız. Sıcak hatlara yakın çalışma söz konusu olduğunda bu netlik daha da kritik hâle gelir; hangi hattın basınç altında olduğunu teyit edecek kişi doğru bilinmezse iş başlatılmaz.",
            },
            {
                baslik: "Sera işletmecisinin müsaitliğini kesinleştirmek",
                metin:
                    "Birkaç kişilik bir sera işletmesinde platform işi planlarken en kritik adım, tek yetkili kişinin o gün gerçekten sahada olacağından emin olmaktır. Büyük tesiste bir kişinin izinli olması işi aksatmaz, sera işletmesinde ise aksatır — yerine bakacak başka biri genellikle yoktur. Bu yüzden sera taleplerinde randevuyu birden fazla kez teyit ederiz: talep anında, sevkiyattan bir gün önce ve mümkünse sabahında kısa bir mesajla. Bu tekrarlı teyit, küçük ölçekli sahalarda en sık yaşanan aksamayı — unutulan ya da hatırlanmayan randevuyu — büyük ölçüde önler.",
            },
            {
                baslik: "Santral ve sera işlerini aynı güne dizmek",
                metin:
                    "Sarayköy'e çıkan bir makinenin gününü verimli doldurmanın bir yolu, santral sahasındaki kısa bir kontrol işiyle yakındaki bir seranın bakım talebini aynı güne yazmaktır. Bunun şartı, santralin bakım penceresiyle sera işletmecisinin müsait olduğu saatin çakışmamasıdır — santral genellikle gece ya da erken sabah, sera ise gün içi çalıştığı için bu iki pencere doğal olarak birbirini tamamlar. İki farklı dünyanın takvimini aynı güne yerleştirmek, nakliye maliyetini ikiye bölerken hiçbir tarafın kendi ritmini bozmamasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sahaya göre vardiya ve randevu mantığı",
                paragraflar: [
                    "Sarayköy'deki iki farklı saha tipinin randevu mantığını ve belirleyici takvimini aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Belirleyici takvim", "Doğal pencere", "Koordinasyon muhatabı"],
                    satirlar: [
                        ["Jeotermal santral", "3 vardiyalı çizelge", "Gece sakin saat, planlı duruş", "Bakım sorumlusu"],
                        ["Kuyu başı tesisi", "Saha bakım turu", "Gündüz kontrol saatleri", "Saha ekibi"],
                        ["Jeotermal sera", "İşletmecinin günlük programı", "Gün içi, mevsime bağlı", "İşletme sahibi"],
                        ["Santral + sera birleşik gün", "İki takvimin kesişimi", "Gece santral, gündüz sera", "İkisi ayrı ayrı"],
                    ],
                },
            },
            {
                baslik: "Sıcak hatta çalışırken yetki netliğinin önemi",
                paragraflar: [
                    "Santral sahasında sıcak hatlara yakın bir işte, hangi vardiyanın hangi sorumluyu görevlendirdiği net değilse iş başlamaz — bu, esneklik gösterilecek bir kural değildir. Hangi hattın basınç altında olduğu, hangi vananın kapalı olduğu, o vardiyanın yetkilisi tarafından yazılı teyit edilmeden sepet o kota çıkmaz.",
                    "Bu yüzden uzun süreli santral işlerinde her vardiyanın kendi sorumlusunu ve iletişim numarasını baştan alırız; vardiya değiştiğinde yeni sorumluyla aynı teyit adımı tekrarlanır. Bu adım zaman alır gibi görünse de, yanlış vardiyada yanlış bilgiyle çalışmanın riskiyle kıyaslanamaz.",
                ],
            },
            {
                baslik: "Sera randevusunda tekrarlı teyidin gerekçesi",
                paragraflar: [
                    "Bir-iki kişilik sera işletmesinde randevu iptali ya da unutulması, büyük tesisteki gibi başka bir vardiyayla telafi edilemez — o gün kaybedilirse iş bir sonraki uygun tarihe kayar. Bu riski azaltmak için sera taleplerinde teyit adımını normalden sık tutarız.",
                    "Mevsim değiştiğinde işletmecinin sahadaki günlük programı da değişebilir; hasat döneminde farklı, dinlenme döneminde farklı saatlerde sahada bulunabilir. Bu değişkenliği önceden sormak, randevu gününde boşa giden bir sevkiyatı engeller.",
                ],
            },
        ],
        sss: [
            {
                soru: "Santralimiz hiç durmuyor; bakım için hangi saat uygun olur?",
                cevap:
                    "Vardiya çizelgenizi görmeden net bir saat söyleyemeyiz ama genel eğilim gece üçüncü vardiyanın sakin saatleri ya da yıllık planlı duruş dönemidir. Bakım sorumlunuzdan haftalık vardiya programını istiyoruz; bu program elimizde olduğunda hangi saatin en az kayıpla çalışacağımız saat olduğunu biz belirleriz. Sıcak hatlara yakın bir iş söz konusuysa, hangi hattın basınç altında olduğunun o vardiyanın yetkilisi tarafından teyit edilmesi şarttır; bu teyit olmadan sepet kota çıkmaz.",
            },
            {
                soru: "Seramızda ben ve eşim çalışıyoruz; randevu nasıl belirlenir?",
                cevap:
                    "Sizin müsait olduğunuz güne göre. Santraldeki vardiya çizelgesi mantığı burada geçerli değildir; belirleyici olan sizin ya da işi yönetecek kişinin o gün serada olacağı saattir. Bize sabah mı öğleden sonra mı uygun olduğunuzu söyleyin, makineyi ona göre planlayalım. Randevuyu birkaç kez teyit ederiz — talep anında, bir gün önce ve mümkünse sabahında — çünkü küçük işletmelerde en sık yaşanan aksama unutulan randevudur.",
            },
            {
                soru: "Santral bakım ekibimizle iş bölümü nasıl kurulur?",
                cevap:
                    "Biz erişimi sağlarız, teknik işi büyük ölçüde sizin ekibiniz yapar — bu en yaygın çalıştığımız modeldir. Bakım sorumlunuz bize hangi vardiyada kimin sahada olacağını, hangi hattın kapalı olduğunu bildirir; biz makinenin o saatte hazır olmasını sağlarız. Vardiya değiştiğinde yetkili de değişebileceği için uzun süreli işlerde her vardiyanın kendi sorumlusunu ve iletişim bilgisini baştan alırız; bu netlik, vardiya geçişinde işin sahipsiz kalmasını önler.",
            },
            {
                soru: "Sera işimiz mevsime göre değişiyor; siz bunu nasıl takip ediyorsunuz?",
                cevap:
                    "Sizden aktif olarak beklemeyiz, ama her talepte hangi dönemde olduğunuzu sorarız. Hasat döneminde işletmecinin sahadaki programı dinlenme dönemine göre farklı olabilir; bu değişkenliği bilmeden verilen bir randevu saati boşa gidebilir. Talep aldığımızda o haftaki durumunuzu teyit eder, makineyi ona göre planlarız. Sabit bir program varsaymak yerine her seferinde kısa bir teyit yapmak, bu tür sahalarda en güvenli yoldur.",
            },
            {
                soru: "Aynı gün hem santralde hem yakındaki bir serada işimiz var; tek makineyle olur mu?",
                cevap:
                    "Genellikle olur ve iki iş birbirini iyi tamamlar — santralin doğal penceresi gece ya da erken sabah, seranın penceresi ise gün içi olduğu için çakışma az yaşanır. İki tarafın da ayrı ayrı müsaitliğini netleştirir, aralarına makul bir geçiş payı bırakarak tek günlük bir plan kurarız. Bu birleşim, her iki tarafın da nakliye maliyetini düşürür; tek şartı, her iki randevunun da kesin saatinin önceden bilinmesidir.",
            },
            {
                soru: "Kuyu başı tesislerimiz birbirinden uzak; vardiya planına bu nasıl yansır?",
                cevap:
                    "Kuyu başı kontrolleri genellikle gündüz vardiyasının rutin bir parçasıdır ve saha ekibiyle birlikte yürür; makinenin noktalar arası geçiş süresi gün planına dahil edilir. Vardiya değişimine denk gelen bir kuyu başı işinde, hangi ekibin o saatte sahada olacağını önceden netleştiririz. Nokta listesini ve varsa öncelik sırasını paylaşırsanız, vardiya bilgisiyle birlikte en verimli güzergâhı biz çıkarırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Sarayköy'ün jeotermal enerji üretimi ve jeotermal ısıtmalı seracılıkla anılması kamuya açık bilgidir; santral vardiyası ile sera iş gücü takviminin birlikte planlanması kendi çalışma pratiğimizdir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:buldan": {
        h1: "Buldan'da Atölye İş Gücüne Göre Manlift Randevusu",
        giris:
            "Buldan'daki dokuma atölyelerinde platform kiralama kararını belirleyen şey, kottan çok atölyenin iş gücü ölçeğidir. İlçedeki üretim yapısı Denizli'nin büyük tekstil holleri gibi çok vardiyalı değil, birkaç tezgâhlı aile işletmeleri şeklinde kuruludur ve çoğu tek vardiya, gündüz saatlerinde çalışır. Bu ölçekte vardiya çizelgesi aramak yanlış soru sormaktır — asıl soru, atölyeyi yöneten bir-iki kişinin hangi gün, hangi saat müsait olduğudur. Aynı ilçede satış mağazaları ve sergi alanları da farklı bir çalışma ritmine sahiptir: mesai saatleri müşteri trafiğine göre kurulur ve platform işi bu trafiğin dışına yazılır. Bu sayfada, küçük ölçekli atölyelerde tek kişinin takvimine göre randevu kurmanın nasıl işlediğini, satış mekânlarının müşteri saatine göre planlamayı nasıl şekillendirdiğini ve komşu işletmelerin iş gücü takvimlerini nasıl birleştirdiğimizi anlattık.",
        maddeler: [
            {
                baslik: "Birkaç tezgâhlı atölyede tek kişinin takvimi",
                metin:
                    "Buldan'daki dokuma atölyelerinin çoğunda personel sayısı azdır, çoğu zaman atölye sahibi ve bir-iki çalışandan ibarettir. Bu ölçekte platform işi, büyük fabrikadaki vardiya penceresi mantığıyla değil, doğrudan atölye sahibinin günlük programına göre kurulur — o gün başka bir işe mi gidecek, tezgâh teslim tarihi mi yaklaşıyor, hangi saat boşta. Talep aldığımızda ilk sorduğumuz bu yüzden 'hangi saat size en uygun' sorusudur; büyük tesislerdeki gibi vardiya değişim saati aramayız, çünkü aranacak bir vardiya değişimi yoktur.",
            },
            {
                baslik: "Mağaza ve sergi alanlarında müşteri saatinin dışına çıkmak",
                metin:
                    "Dokuma ürünlerinin satıldığı mağaza ve sergi mekânlarında iş gücü, müşteri trafiğine göre şekillenir — satış personeli açılıştan kapanışa kadar sahadadır ve bu saatler platform işi için en az uygun zaman dilimidir. Vitrin aydınlatması, tabela yenileme ya da cephe işleri bu yüzden kapanış sonrasına ya da açılıştan önceki erken saate yazılır. Mağaza müdürüyle koordinasyon kurarken sorduğumuz, kaç kişinin sahada çalıştığı değil, kapanış sonrası hangi saate kadar birinin orada kalabileceğidir — çünkü işin teslim alınması için en az bir yetkilinin işin başında ve sonunda bulunması gerekir.",
            },
            {
                baslik: "Tarihi doku çevresinde randevunun izin sürecine bağlanması",
                metin:
                    "İlçenin geleneksel yapı dokusuna yakın işlerde, iş gücü takvimine bir katman daha eklenir: koruma statüsü taşıyan bir yapıda çalışılacaksa ilgili izin süreci onaylanmadan iş planlanamaz. Bu izin süreci genellikle yapı sahibinin ya da ilgili kurumun kendi çalışma saatine bağlıdır ve bizim randevu takvimimiz bu onayın çıkma süresine göre şekillenir. İzin süreci uzun sürebileceği için, bu tür taleplerde randevu tarihini kesinleştirmeden önce iznin ne aşamada olduğunu netleştiririz; onay çıkmadan sahaya makine göndermeyiz.",
            },
            {
                baslik: "Dar sokakta komşu esnafla saat koordinasyonu",
                metin:
                    "İlçe merkezinin dar sokaklarında bir işe giderken, komşu işletmelerin de o saatte açık ve çalışır durumda olması makinenin manevra alanını doğrudan etkiler. Sokakta park hâlindeki araçlar ya da yoğun müşteri trafiği varsa, makinenin konumlanacağı an, komşu esnafın en sakin olduğu saate denk getirilir. Bu koordinasyon bazen tek bir işletmeyle değil, sokaktaki birkaç komşu esnafla birlikte kurulur — hangi saatte sokak nispeten boşalıyor, bunu genellikle mahalledeki işletmelerin kendisi bilir ve bize önceden bildirir.",
            },
            {
                baslik: "Küçük işletmelerin iş gücü takvimini birleştirmek",
                metin:
                    "Buldan'daki işler tek tek küçük ölçekli olduğu için, tek bir atölye ya da mağaza için ayrı sevkiyat yapmak iş gücü açısından da verimsizdir — bir makine, bir günde tek bir kişinin takvimine göre çalışıp boş kalır. Bunun yerine, benzer çalışma saatine sahip birkaç işletmenin talebini aynı güne diziyoruz: sabah bir atölyede aydınlatma, öğleden sonra bir mağazada tabela. Her işletmenin kendi müsaitlik saatini önceden bildirmesi yeterlidir; sıralamayı ve geçiş sürelerini biz kurar, nakliye maliyetini paylaşanlar arasında bölünürüz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İşletme tipine göre randevu belirleyicisi",
                paragraflar: [
                    "Buldan'daki işletme tiplerinin iş gücü ölçeği ve buna bağlı randevu mantığını aşağıdaki tabloda özetledik.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Tipik iş gücü", "Randevu belirleyicisi", "Uygun saat aralığı"],
                    satirlar: [
                        ["Küçük dokuma atölyesi", "1-3 kişi", "Atölye sahibinin programı", "Gün içi esnek"],
                        ["Satış / sergi mağazası", "1-2 kişi", "Müşteri trafiği", "Kapanış sonrası, açılış öncesi"],
                        ["Tarihi doku çevresi yapı", "Değişken", "İzin sürecinin durumu", "Onay sonrası belirlenir"],
                        ["Komşu esnaf grubu", "Benzer küçük ölçek", "Ortak sakin saat", "Sokak trafiğine göre"],
                    ],
                },
            },
            {
                baslik: "Tek kişilik atölyede randevunun kesinliği",
                paragraflar: [
                    "Büyük fabrikada bir çalışanın o gün izinli olması işi aksatmaz, birkaç kişilik bir atölyede ise doğrudan aksatır — işi yönetecek başka biri genellikle yoktur. Bu yüzden Buldan'daki atölye taleplerinde randevuyu birden fazla kez teyit ederiz: talep anında, sevkiyattan bir gün önce ve mümkünse sabahında kısa bir mesajla.",
                    "Bu tekrarlı teyit fazla temkinli görünebilir ama küçük ölçekli sahalarda en sık yaşanan aksama, unutulan ya da hatırlanmayan randevudur. Birkaç dakikalık bu alışkanlık, hem bizim hem atölyenin boşa geçen bir günü yaşamasını önler.",
                ],
            },
            {
                baslik: "Mağaza kapanış sonrası çalışmanın pratik sınırları",
                paragraflar: [
                    "Kapanış sonrası çalışmanın avantajı müşteri trafiğinin olmamasıdır ama sınırı da vardır — mağaza personelinin de bir mesai bitişi olur ve iş bu sürenin ötesine taşarsa fazladan bir kişinin orada kalması gerekir. Bu yüzden kapanış sonrası işlerde tahmini süreyi mümkün olduğunca net veririz ve personelin ne kadar bekleyebileceğini önceden sorarız.",
                    "İş süre tahminini aşarsa, kalan kısmı ertesi açılıştan önceki erken saate bölmeyi öneririz; bu, personeli geç saatte tutmaktan daha pratik bir çözümdür ve iki kısa oturuma bölünen iş genellikle toplamda daha az yorucu geçer.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemiz küçük, sadece ben ve bir çırağım var; randevu size göre nasıl kurulur?",
                cevap:
                    "Sizin müsait olduğunuz güne ve saate göre kurulur. Büyük fabrikalardaki vardiya mantığı burada geçerli değildir; belirleyici olan tek yetkili kişinin — yani sizin — o gün atölyede olacağınız saattir. Sabah mı öğleden sonra mı uygun olduğunuzu bildirin, makineyi ona göre planlayalım. Randevuyu birkaç kez teyit ederiz çünkü küçük işletmelerde en sık yaşanan aksama unutulan randevudur; bunu önlemeye çalışırız.",
            },
            {
                soru: "Mağazamızın tabela işini kapanıştan sonra yapabilir misiniz?",
                cevap:
                    "Evet, bu en sık tercih edilen düzendir. Kapanış sonrası müşteri trafiği olmadığı için iş hem daha hızlı hem daha rahat ilerler. Tek dikkat ettiğimiz, personelinizin ne kadar süre bekleyebileceğidir; iş tahmini süreyi aşarsa kalan kısmı açılıştan önceki erken saate bölmeyi öneririz. Kapanış saatinizi ve o gün orada kalabilecek bir yetkilinin olup olmadığını bize önceden bildirin, planı ona göre kuralım.",
            },
            {
                soru: "Tarihi bir binanın yakınında çalışacağız; iznimiz yoksa ne olur?",
                cevap:
                    "İzin süreci onaylanmadan sahaya makine göndermeyiz. Yapı koruma kapsamındaysa, ilgili kurumdan iznin çıkması gerekir ve bizim randevu takvimimiz bu onayın süresine göre şekillenir. Talebinizi aldığımızda önce iznin hangi aşamada olduğunu sorarız; onay bekleniyorsa tarihi kesinleştirmek yerine tahmini bir aralık veririz, onay çıktığında hızlıca netleştiririz. Bu süreç uzayabilir, bu yüzden mümkünse izni erken başlatmanızı öneririz.",
            },
            {
                soru: "Sokağımız dar ve komşu esnaf da yoğun; makine ne zaman gelmeli?",
                cevap:
                    "Sokaktaki komşu işletmelerin en sakin olduğu saati bulmak için genellikle sizden ya da komşularınızdan bilgi alırız — hangi saatte sokak nispeten boşalıyor, bunu en iyi orada çalışanlar bilir. Bu bilgiye göre makinenin konumlanacağı saati belirleriz. Gerekirse birkaç komşu esnafla birlikte kısa bir koordinasyon yaparız; bu, hem makinenin manevra alanı bulmasını kolaylaştırır hem komşularınızın işini aksatmaz.",
            },
            {
                soru: "Tek bir aydınlatma işi için ayrı sevkiyat pahalı olmaz mı?",
                cevap:
                    "Evet, tek iş için ayrı sevkiyat en pahalı senaryodur çünkü maliyetin büyük kısmı makinenin gidip gelmesinden gelir. Bunun yerine, benzer çalışma saatine sahip komşu işletmelerin taleplerini aynı güne diziyoruz — sabah bir atölye, öğleden sonra bir mağaza gibi. Müsait olduğunuz saati bildirmeniz yeterli; sıralamayı biz kurarız, nakliye maliyeti paylaşanlar arasında bölünür ve tek başına ödeyeceğinizin altına iner.",
            },
            {
                soru: "İşlerimiz mevsime ya da sipariş yoğunluğuna göre değişiyor; bunu nasıl takip ediyorsunuz?",
                cevap:
                    "Sizden aktif bir program beklemeyiz, her talepte o haftaki durumunuzu sorarız. Sipariş yoğunluğunun arttığı dönemlerde müsait olduğunuz saat değişebilir; bu değişkenliği bilmeden verilen bir randevu boşa gidebilir. Bu yüzden sabit bir saat varsaymak yerine, sevkiyattan hemen önce kısa bir teyit yaparız. Düzenli çalıştığımız atölyelerde bu teyit alışkanlığı zamanla otomatikleşir, her seferinde yeniden anlatmaya gerek kalmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Buldan'ın dokumacılık geleneği ve küçük ölçekli atölye yapısı kamuya açık genel bilgidir; tek kişilik işletme randevu düzeni ve komşu esnaf koordinasyonu kendi çalışma pratiğimizdir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:denizli-deri-ihtisas-osb": {
        h1: "Denizli Deri İhtisas OSB'de Üretim Sürecine Göre Manlift Planlaması",
        giris:
            "Deri İhtisas OSB'deki tesislerde platform kiralama kararını belirleyen şey, klasik anlamda bir vardiya çizelgesinden çok üretim sürecinin kendi ritmidir. Deri işleme, tabaklamadan bitmiş ürüne kadar birbirini takip eden kimyasal ve mekanik aşamalardan oluşur ve her aşamanın kendi süresi, kendine özgü kokusu ve havalandırma ihtiyacı vardır. Bu, bakım işinin ne zaman yapılacağını üretim akışının neresinde durduğu belirler demektir — bir kurutma sürecinin ortasında hat üstüne çıkmak, o partiyi riske atabilir, ama parti geçişleri arasında kısa ama düzenli pencereler açılır. İhtisas OSB'nin bir başka özelliği, arıtma tesisi gibi ortak kullanılan altyapının kendi bağımsız çalışma takvimine sahip olmasıdır. Bu sayfada, deri üretim sürecinin aşamalarına göre bakım penceresinin nasıl bulunduğunu, tesis içindeki iş gücünün üretim akışına göre nasıl konumlandığını ve ortak altyapı tesislerindeki koordinasyonun nasıl kurulduğunu anlattık.",
        maddeler: [
            {
                baslik: "Üretim aşamaları arasındaki geçiş pencereleri",
                metin:
                    "Deri işleme sürecinde her aşama — ıslatma, tabaklama, kurutma, bitirme — kendi süresini tamamladıktan sonra bir sonrakine geçer ve bu geçiş anları, bakım için doğal bir duraklamadır. Bir kurutma tamburunun ya da bitirme hattının üstünde çalışılacaksa, o ekipmanın partisinin bittiği ve bir sonrakinin henüz başlamadığı an aranır. Bu pencere, tekstildeki vardiya değişiminden farklıdır — saatlik değil süreç bazlıdır ve tesisin üretim planlamacısı olmadan bu pencereyi dışarıdan tahmin etmek mümkün değildir. Bu yüzden ilk adımımız her zaman üretim planlamacısıyla konuşup o haftaki parti akışını öğrenmektir.",
            },
            {
                baslik: "Kimyasal süreçlerin havalandırma ve erişim kısıtı",
                metin:
                    "Tabaklama ve boyama gibi kimyasal yoğun aşamaların yürüdüğü bölümlerde, işlem devam ederken üst kotta çalışmak hem koku hem buhar nedeniyle önerilmez; bu bölümlerdeki bakım işleri, işlemin durduğu ya da havalandırmanın tam kapasiteyle çalıştığı saatlere yazılır. Bu kısıt, tesisin kendi iş güvenliği prosedürüyle örtüşür ve bizim tarafımızdan da aynen uygulanır — hangi kimyasalın hangi saatte kullanıldığı bilinmeden sepet o bölüme sokulmaz. Bu bilgiyi genellikle üretim sorumlusu ya da iş güvenliği uzmanı verir, biz de planı bu bilgiye göre kurarız.",
            },
            {
                baslik: "Arıtma tesisinin bağımsız çalışma takvimi",
                metin:
                    "İhtisas OSB'nin ortak kullanılan atık su arıtma tesisi, üye fabrikaların üretim takviminden bağımsız kendi işletme düzenine sahiptir ve buradaki bakım işleri kendi vardiya ve iş gücü planına göre yürütülür. Arıtma tesisindeki bir platform talebi geldiğinde muhatabımız tek bir fabrika değil, OSB'nin ortak işletme kadrosudur; bu farklı bir koordinasyon kanalı gerektirir. Arıtma tesisinin kendi bakım ekibiyle çalışırken, hangi havuzun hangi saatte devrede olduğu ve hangi bölümde çalışma yapılabileceği bu ekipten alınır.",
            },
            {
                baslik: "Tesis içi iş gücünün üretim akışına göre konumlanması",
                metin:
                    "Deri fabrikalarında personel, tekstildeki gibi sabit bir vardiya istasyonunda değil, üretim akışının neresinde iş varsa oraya göre hareket eder — bir parti kurutmaya girdiğinde o bölümdeki personel bir sonraki aşamaya kayabilir. Bu hareketlilik, platform işini planlarken çalışma noktasını gösterecek yetkilinin o saatte orada olup olmayacağını netleştirmemizi gerektirir. Talep alırken bu yüzden yalnızca hangi ekipmanda çalışılacağını değil, o bölümde o saatte kimin görevli olacağını da sorarız; üretim akışı değişkense bu bilgiyi sevkiyattan hemen önce teyit ederiz.",
            },
            {
                baslik: "Parti teslim tarihinin bakım takvimine etkisi",
                metin:
                    "Deri üretiminde parti teslim tarihleri, bakım işinin ne zaman yapılabileceğini doğrudan sınırlar — teslim tarihi yaklaşan bir partinin üretildiği hat, o dönemde bakım için durdurulmaz. Bu yüzden uzun süreli ya da kapsamlı bakım işlerini, üretim planlamacısının teslim takviminde göreli boşluk gösterdiği dönemlere yazarız. Acil bir arıza durumunda bu kural esnetilir ama planlı işlerde teslim takvimini bilmeden verilen bir tarih, sahada 'bu hafta olmaz' cevabıyla karşılaşabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Üretim aşamasına göre erişim penceresi",
                paragraflar: [
                    "Deri İhtisas OSB'deki tesislerde üretim aşamasına göre bakım penceresinin nasıl değiştiğini aşağıdaki tabloda özetledik.",
                ],
                tablo: {
                    basliklar: ["Üretim aşaması", "Erişim kısıtı", "Doğal pencere", "Koordinasyon muhatabı"],
                    satirlar: [
                        ["Islatma / tabaklama", "Kimyasal buhar, koku", "İşlem arası, tam havalandırma", "Üretim sorumlusu"],
                        ["Kurutma", "Sıcaklık, parti bütünlüğü", "Parti geçişi", "Hat sorumlusu"],
                        ["Bitirme / boyama", "Kimyasal yoğunluk", "Vardiya sonu, işlem arası", "İş güvenliği uzmanı"],
                        ["Ortak arıtma tesisi", "Havuz devri, OSB takvimi", "OSB'nin kendi planı", "OSB işletme kadrosu"],
                    ],
                },
            },
            {
                baslik: "Üretim planlamacısıyla erken temas kurmanın getirisi",
                paragraflar: [
                    "Deri fabrikasında bakım penceresi saatlik değil süreç bazlı olduğu için, üretim planlamacısıyla erken temas kurmadan verilen bir tarih büyük olasılıkla değişir. Talep aldığımızda önce o haftaki parti akışını sorar, hangi ekipmanın hangi gün göreli boşta olacağını öğreniriz.",
                    "Bu erken temas, hem bizim hem tesisin zamanını korur — planlamacı bize uygun günü gösterdiğinde, makineyi o güne göre ayarlarız ve sahada 'bu hafta olmaz' sürprizini yaşamayız. Düzenli çalıştığımız tesislerde bu iletişim zamanla haftalık bir rutine dönüşür.",
                ],
            },
            {
                baslik: "Arıtma tesisinde farklı muhatap, farklı süreç",
                paragraflar: [
                    "Ortak arıtma tesisindeki bir bakım talebi, tek bir fabrikanın üretim planlamacısıyla değil OSB'nin işletme kadrosuyla yürür ve bu, bazı müşterilerimiz için ilk seferde kafa karıştırıcı olabiliyor. Kendi fabrikanızın üretim takviminden bağımsız bir süreç olduğu için, arıtma tesisindeki işi kendi tesisinizin bakım planına yazamazsınız.",
                    "Bu tür taleplerde doğrudan OSB'nin ortak işletme birimiyle iletişime geçmenizi ya da bize yönlendirmenizi öneririz; biz gerekli koordinasyonu kurar, hangi havuzun hangi saatte müsait olduğunu netleştiririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üretim sürecimiz kesintisiz gibi görünüyor; bakım için nasıl bir pencere buluruz?",
                cevap:
                    "Süreç kesintisiz görünse de parti geçişleri arasında mutlaka kısa duraklamalar vardır. Bunun için önce üretim planlamacınızla konuşuruz — o haftaki parti akışını, hangi ekipmanın hangi gün göreli boşta olacağını sorarız. Bu bilgi elimizde olduğunda, en az kayıpla çalışacağımız günü ve saati size öneririz. Pencere gerçekten bulunamıyorsa, kapsamlı bakım işlerini teslim takviminizin görece boş olduğu döneme yazmayı öneririz.",
            },
            {
                soru: "Kimyasal işlem devam ederken hat üstünde çalışabilir misiniz?",
                cevap:
                    "Hayır, kimyasal yoğun aşamalar sürerken üst kotta çalışmayız — bu, koku ve buhar riskine bağlı bir kısıttır ve tesisin kendi iş güvenliği prosedürüyle örtüşür. İşlemin durduğu ya da havalandırmanın tam kapasiteyle çalıştığı saatleri üretim sorumlunuzdan ya da iş güvenliği uzmanınızdan öğrenir, planı buna göre kurarız. Bu bilgi olmadan sepeti o bölüme sokmayız; bu, tartışılan değil uyulan bir kuraldır.",
            },
            {
                soru: "Arıtma tesisinde bir işimiz var; kiminle görüşmeliyiz?",
                cevap:
                    "Kendi fabrikanızın üretim planlamacısıyla değil, OSB'nin ortak işletme kadrosuyla. Arıtma tesisi, üye fabrikaların üretim takviminden bağımsız kendi işletme düzenine sahiptir; bu yüzden farklı bir koordinasyon kanalı gerekir. Doğrudan OSB'nin ilgili birimiyle iletişime geçebilir ya da bize yönlendirebilirsiniz — biz gerekli koordinasyonu kurar, hangi havuzun hangi saatte müsait olduğunu netleştiririz.",
            },
            {
                soru: "Çalışma noktasını gösterecek personel üretim akışına göre yer değiştiriyor; bu bir sorun mu?",
                cevap:
                    "Bilinmesi gereken bir bilgi ama engel değil. Talep alırken hangi ekipmanda çalışılacağı kadar, o bölümde o saatte kimin görevli olacağını da sorarız. Üretim akışınız değişkense bu bilgiyi sevkiyattan hemen önce teyit ederiz; böylece makine sahaya vardığında çalışma noktasını gösterecek kimse bulunmama riskini azaltırız. Personel rotasyonunuz sabit bir düzendeyse bunu bir kez öğrenip sonraki taleplerde tekrar sormayız.",
            },
            {
                soru: "Teslim tarihi yaklaşan bir partimiz var; bakımı erteleyebilir miyiz?",
                cevap:
                    "Planlı işlerde evet, önerdiğimiz de budur. Teslim tarihi yaklaşan partinin üretildiği hattı o dönemde durdurmak istemeyiz; bunun yerine üretim planlamacınızın teslim takviminde göreli boşluk gösterdiği bir sonraki döneme yazarız. Acil bir arıza söz konusuysa bu kural esner ve gerekirse hemen müdahale ederiz; ama rutin bakım için teslim takvimini bilmek, ikinize de zaman kazandıran bir bilgidir.",
            },
            {
                soru: "OSB içindeki farklı fabrikaların işlerini aynı güne toplayabilir misiniz?",
                cevap:
                    "Üretim süreçleri birbirine yeterince yakınsa evet. Her fabrikanın kendi üretim planlamacısından o haftaki müsaitlik bilgisini alır, birbirini bozmayacak bir sıra kurarız. Ancak deri üretiminde bakım penceresi saatlik değil süreç bazlı olduğu için, bu birleştirme tekstildeki kadar sık ve kolay kurulamayabilir — bazen bir fabrikanın penceresi bu hafta, diğerininki gelecek hafta çıkar. Mümkün olduğu her durumda birleştiririz, mümkün olmadığında bunu baştan açıkça söyleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Deri İhtisas OSB'nin kendi ortak atık su arıtma altyapısına sahip olması ve deri üretiminin ıslatma-tabaklama-kurutma-bitirme aşamalarından oluşması sektör geneli bilgidir; süreç bazlı bakım penceresi planlaması ve OSB koordinasyon kanalı kendi çalışma pratiğimizdir. Tesis adı ve rakam kullanılmamıştır.",
    },
};
