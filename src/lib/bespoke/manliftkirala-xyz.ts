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
};
