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

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Vardiya Arası Kısa Pencerede Sepetli / Örümcek Platform Kiralama",
        giris:
            "Denizli'nin tekstil ve mermer ağırlıklı sanayi dokusunda sepetli örümcek platform talebi çoğu zaman büyük bir işten değil, dar bir yerden çıkar: bir dokuma hattının üstündeki ışıklığa ulaşmak, bir depo koridorunun dar kapısından geçmek, mermer atölyesinin sıkışık taşlar arasındaki bir noktaya erişmek. Bu sayfanın anlattığı, örümcek platformun teknik esnekliğinden çok, bu esnekliğin vardiyalı bir üretim düzeninde nasıl kullanıldığıdır. Üç vardiyalı bir tekstil hattında ya da iki vardiyalı bir işlikte, dar bir noktaya erişim işi genellikle uzun bir duruş gerektirmez — kısa, dar şaseli bir makinenin birkaç dakikalık bir vardiya boşluğuna girip çıkması yeterlidir. Bizim rolümüz, bu kısa pencereye hem ölçü hem zamanlama olarak uyan makineyi göndermektir; geniş şaseli bir platform dar koridora girmediği gibi, vardiya penceresini bilmeden gönderilen bir makine de o pencereyi kaçırır.",
        maddeler: [
            {
                baslik: "Dar geçit ölçüsü kadar vardiya penceresi de belirleyicidir",
                metin:
                    "Örümcek platform talebinde standart soru hedef yükseklik ve en dar geçit ölçüsüdür, ama vardiyalı bir tesiste üçüncü bir soru daha sorarız: bu noktaya ne zaman erişilebilir? Dokuma hattının üstündeki bir ışıklık, hat çalışırken erişilemez; erişim ancak parti geçişinde ya da vardiya değişiminde açılır. Bu yüzden ölçü bilgisiyle birlikte vardiya bilgisini de topladığımızda, hem makinenin hem zamanın sahaya uyduğu bir teklif çıkar.",
            },
            {
                baslik: "Kısa pencereye önceden konumlanmış makine",
                metin:
                    "Vardiya değişimi ya da parti geçişi genellikle birkaç dakikalık bir boşluk açar ve bu boşluk, makine sahaya o an geliyorsa büyük ölçüde kaybolur. Örümcek platformun avantajı tam burada devreye girer: küçük şasesi ve hızlı kurulumu sayesinde pencere açılmadan önce sahaya alınıp konumlandırılabilir, pencere açılır açılmaz iş başlar. Bu, geniş şaseli bir makinenin aynı pencerede yapamayacağı bir hız kazandırır.",
            },
            {
                baslik: "Mermer atölyesinde sıkışık taşlar arasında erişim",
                metin:
                    "Mermer işleme atölyelerinde bloklar ve işlenmiş taşlar arasındaki geçitler genellikle dardır ve standart bir platform bu aralıklardan geçemez. Örümcek platformun katlanabilir kolları, taşlar arasında dar bir koridordan geçip hedef noktaya ulaşmayı mümkün kılar. Ancak atölyenin kesim programı burada da belirleyicidir — bloklar arasında hareket, kesim ya da taşıma işlemi sürerken güvenli değildir; erişim, hattın durduğu ya da taşıma trafiğinin sakinleştiği saatlere denk getirilir.",
            },
            {
                baslik: "Kısa iş, uzun bekleme olmadan tamamlanır",
                metin:
                    "Örümcek platform gerektiren işler genellikle kısa kalemlerdir — bir armatür kontrolü, bir sensör değişimi, bir boru kelepçesi. Vardiya penceresi doğru bilindiğinde bu işler tek bir kısa ziyarette biter ve tesisin üretim akışı bölünmez. Vardiya bilgisi eksikse, makine sahaya doğru zamanda gelmez ve kısa bir iş, üretim akışını kesintiye uğratacak şekilde uzayabilir; bu yüzden talep alırken vardiya bilgisini eksiksiz almayı önceliğimiz sayıyoruz.",
            },
            {
                baslik: "Vardiya sorumlusuyla doğrudan koordinasyon",
                metin:
                    "Kısa süreli ve dar noktalı işlerde muhatap genellikle vardiya amiri ya da bakım sorumlusudur, üst yönetim değil. Talebi bu kişiyle doğrudan kurmak, hem pencere bilgisini hem sahadaki dar noktaların gerçek ölçüsünü en hızlı netleştiren yoldur. Düzenli çalıştığımız tesislerde bu iletişim kanalı zamanla sabitlenir; her seferinde yeniden anlatmaya gerek kalmadan, vardiya sorumlusu bize doğrudan pencereyi ve ölçüyü bildirir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Erişim tipi ve uygun vardiya penceresi eşlemesi",
                paragraflar: [
                    "Denizli'deki tekstil, mermer ve deri işletmelerinde sık karşılaştığımız dar erişim türlerini ve bunlara uyan vardiya penceresini aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Erişim noktası", "Tipik engel", "Uygun pencere", "Muhatap"],
                    satirlar: [
                        ["Hat üstü ışıklık/armatür", "Hat çalışırken erişilemez", "Parti geçişi, vardiya arası", "Vardiya amiri"],
                        ["Dar depo koridoru", "Şase genişliği sınırı", "Sevkiyat trafiğinin düşük olduğu saat", "Depo sorumlusu"],
                        ["Mermer blokları arası", "Kesim ve taşıma trafiği", "Hat durması, taşıma arası", "Üretim şefi"],
                        ["Bahçe/avlu dar girişi", "Standart platform giremiyor", "İşletme sahibinin uygun saati", "İşletme sahibi"],
                    ],
                },
            },
            {
                baslik: "Ölçü ve pencere bilgisini aynı görüşmede toplamak",
                paragraflar: [
                    "Talep aldığımızda hedef yükseklik ve en dar geçit ölçüsünü sorduğumuz aynı görüşmede vardiya ya da erişim penceresini de sorarız — bu iki bilginin ayrı ayrı, farklı zamanlarda toplanması sahada gecikmeye yol açar. Vardiya bilgisi netse, makineyi bir önceki vardiyanın bitişine göre konumlandırır, pencere açılır açılmaz işe başlarız.",
                    "Vardiya bilgisi belirsizse ya da işletme sahibi bunu kesin bilmiyorsa, talebi vardiya amiriyle veya bakım sorumlusuyla doğrudan teyit etmesini öneririz; bu kısa ek adım, sahada makinenin boş beklemesini önler.",
                ],
            },
            {
                baslik: "Kısa işlerin birikmesi ve tek ziyarette toplanması",
                paragraflar: [
                    "Örümcek platform gerektiren dar noktalı işler genellikle tek başına küçük kalemlerdir ve her biri için ayrı sevkiyat, nakliye ağırlıklı bir maliyet oluşturur. Aynı tesiste birikmiş birkaç dar noktalı işi (farklı hatlarda birkaç armatır, birkaç sensör) aynı vardiya penceresine sığdırıp tek ziyarette tamamlamak mümkündür.",
                    "Bunun için tesisin bakım listesini önceden bilmemiz gerekir; düzenli çalıştığımız işletmelerden aylık bir dar-nokta listesi almayı ve bunu uygun bir vardiya penceresine tek seferde yerleştirmeyi öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hattımızın üstündeki bir ışıklığa erişmemiz gerekiyor, hat hiç durmuyor; nasıl planlarız?",
                cevap:
                    "Hat tamamen durmasa da parti geçişleri arasında kısa duraklamalar olur; bu, örümcek platform gibi hızlı kurulan bir makine için genellikle yeterlidir. Vardiya amirinizden bu duraklamanın ne zaman ve ne kadar süreceğini öğrenir, makineyi bir önceki vardiyanın bitişine göre sahaya alır, pencere açılır açılmaz işe başlarız. Duraklama gerçekten yoksa alternatif olarak hafta sonu tek vardiyaya düşen dönemi değerlendiririz.",
            },
            {
                soru: "Depomuzun kapısı çok dar, standart platform giremiyor; örümcek platform buraya girer mi?",
                cevap:
                    "Büyük olasılıkla evet, dar geçit tam olarak örümcek platformun çözdüğü durumdur. En dar geçit ölçüsünü (kapı genişliği) paylaşmanız, uygun şase genişliğine sahip modeli belirlememiz için yeterli. Şase genişliğinin de bir alt sınırı olduğunu unutmayın; ölçü aşırı darsa bunu dürüstçe söyler, alternatif bir erişim noktası ya da farklı bir makine sınıfı öneririz.",
            },
            {
                soru: "Mermer atölyemizde bloklar arası dar bir noktaya erişim gerekiyor, ne zaman uygun olur?",
                cevap:
                    "Kesim ve taşıma trafiğinin sakinleştiği saatlerde. Bloklar arasında hareket, kesim ya da taşıma işlemi sürerken güvenli değildir; bu yüzden üretim şefinizden hattın durduğu ya da taşıma trafiğinin düştüğü saatleri öğrenir, erişimi tam o pencereye göre planlarız. Kesim programınızı önceden paylaşırsanız, planlama daha kesin olur ve sahada bekleme yaşanmaz.",
            },
            {
                soru: "İşimiz çok kısa, bir sensör değişimi gibi; yine de tam bir sevkiyat mı gerekiyor?",
                cevap:
                    "Evet ama kısa işler için süreç ağırlaştırılmaz — vardiya penceresi doğru bilindiğinde tek kısa bir ziyarette iş biter. Eğer tesiste birikmiş başka dar noktalı küçük işler varsa (başka bir hatta bir armatür, başka bir noktada bir kontrol), bunları aynı vardiya penceresine sığdırıp tek seferde tamamlamayı öneririz; bu, hem sizin hem bizim için nakliye maliyetini düşürür.",
            },
            {
                soru: "Vardiya amirimizle mi görüşmeliyiz, yoksa doğrudan işletme sahibiyle mi?",
                cevap:
                    "Kısa süreli ve dar noktalı işlerde en hızlı sonucu genellikle vardiya amiri ya da bakım sorumlusuyla doğrudan görüşmek verir — pencere bilgisini ve sahadaki dar noktaların gerçek ölçüsünü en iyi onlar bilir. Küçük işletmelerde bu kişi işletme sahibinin kendisi olabilir. Düzenli çalıştığımız tesislerde bu iletişim kanalı zamanla sabitlenir ve her seferinde yeniden anlatmaya gerek kalmaz.",
            },
            {
                soru: "Vardiya bilgimiz belirsiz, kesin bir saat veremiyoruz; bu işi engeller mi?",
                cevap:
                    "Engellemez ama planlamayı biraz esnetir. Vardiya bilgisi kesin değilse, talebi bakım sorumlunuzla teyit etmenizi öneririz; bu kısa ek adım, sahada makinenin boş beklemesini önler. Kesinlik tam sağlanamıyorsa, geniş bir zaman aralığı üzerinden çalışır ve makineyi o aralığın başında sahaya alarak pencere açıldığı an işe başlarız; bu, belirsizliğin getirdiği kaybı büyük ölçüde azaltır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Örümcek platformun dar şase ve katlanabilir kol gibi teknik özellikleri üretici genel bilgisidir; Denizli'nin tekstil-mermer-deri sanayi yapısı ve vardiya penceresine göre erişim planlaması kendi çalışma pratiğimizdir. Tesis adı, marka ve rakam uydurulmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Vardiya Saatine Göre Planlanan Nakliye ve Teslimat Hizmeti",
        giris:
            "Denizli OSB ve çevresindeki sanayi bölgelerinde bir makinenin sahaya varış saati, kotu ya da modeli kadar önemlidir — çünkü aynı yol üzerinde birden fazla vardiyalı tesis var ve her tesisin giriş-çıkış trafiği farklı saatte yoğunlaşır. Vardiya değişim saatinde OSB içi yollar, işçi servisleri ve personel araçlarıyla dolar; ağır bir sevkiyat aracının tam bu saate denk gelmesi hem kendi teslimatını geciktirir hem tesisin personel trafiğini yavaşlatır. Bizim nakliye planlamamız bu yüzden yalnızca güzergâh değil, hedef tesisin vardiya saatine göre kurulur: sevkiyat, mümkün olduğunca vardiya değişim yoğunluğunun dışına yazılır ve tesisin kendi bakım ya da vardiya sorumlusuyla varış saati önceden netleştirilir. Bu sayfada, vardiyalı bir sanayi bölgesinde nakliye ve teslimatın nasıl zamanlandığını, hangi bilgilerin sevkiyatı hızlandırdığını ve çok adresli bir günün nasıl kurulduğunu anlatıyoruz.",
        maddeler: [
            {
                baslik: "Vardiya değişim saatinin trafiğe etkisi",
                metin:
                    "OSB içindeki yollar, vardiya değişim saatinde işçi servisleri, personel araçları ve tesis içi taşıma trafiğiyle yoğunlaşır. Ağır bir sevkiyat aracının bu saate denk gelmesi hem kendi ilerlemesini yavaşlatır hem de tesisin personel giriş-çıkışını zorlaştırır. Bu yüzden sevkiyat planlarken hedef tesisin vardiya saatlerini önceden öğrenir, mümkün olduğunca değişim saatinin dışına, vardiyanın ortasına denk gelen bir varış zamanı seçeriz.",
            },
            {
                baslik: "Teslimat öncesi hangi bilgiler sevkiyatı hızlandırır",
                metin:
                    "Sevkiyat için gereken temel bilgiler hedef adres, makinenin gireceği kapı ya da rampa ölçüsü ve tesisteki teslim alacak yetkilinin o saatte sahada olup olmayacağıdır. Vardiyalı bir tesiste üçüncü bilgi özellikle önemlidir — teslim alacak yetkili farklı vardiyada çalışıyorsa, makine sahaya doğru saatte gelse bile teslim alacak kimse bulunmayabilir. Bu yüzden talep alırken teslim alacak kişinin hangi vardiyada olduğunu ayrıca sorarız.",
            },
            {
                baslik: "Çok adresli günün vardiya saatine göre sıralanması",
                metin:
                    "Aynı gün içinde birden fazla tesise sevkiyat yapılacaksa, sıralama güzergâh mesafesi kadar her tesisin vardiya saatine göre de kurulur. Vardiya değişim saati yakın olan iki tesis art arda sıralanmaz; aralarına vardiyanın sakin olduğu bir tesis ya da bir bekleme payı eklenir. Bu, hem trafik yoğunluğunu azaltır hem her tesise doğru saatte ulaşmayı mümkün kılar.",
            },
            {
                baslik: "Gece vardiyasına teslimat: farklı bir düzen",
                metin:
                    "Gece de çalışan depo ve lojistik tesislerine yapılan teslimat, gündüz teslimattan farklı kurallarla işler — aydınlatma yeterliliği, iletişim hattının netliği ve gece vardiyasında görevli bir yetkilinin teslim noktasında bulunması önceden teyit edilir. Gece sevkiyatı, gündüz trafiğinden bağımsız olduğu için genellikle daha hızlı ilerler, ama teslim alacak yetkilinin kesin olarak sahada olacağının doğrulanması şarttır.",
            },
            {
                baslik: "Teslim sonrası kısa devir ve bilgilendirme",
                metin:
                    "Makine sahaya ulaştığında teslim alan vardiyaya kısa bir kullanım ve güvenlik bilgilendirmesi yapılır; bu bilgilendirme, o an sahada olmayan diğer vardiyalara da aktarılmalıdır. Uzun süreli kiralamalarda bu aktarımın eksik kalması, sonraki vardiyanın makineyi yanlış kullanmasına yol açabilir. Bu yüzden mümkün olduğunda ilk bilgilendirmeyi yazılı bir kısa notla destekleriz; bu not, vardiya değişiminde devredilebilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tesis tipine göre uygun teslimat saati",
                paragraflar: [
                    "Denizli sanayi bölgesindeki farklı tesis tiplerinde vardiya yoğunluğuna göre uygun teslimat saatini aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Yoğun trafik saati", "Önerilen teslimat saati", "Teyit edilecek bilgi"],
                    satirlar: [
                        ["Üç vardiyalı tekstil", "Vardiya değişim saatleri", "Vardiya ortası", "Teslim alacak yetkilinin vardiyası"],
                        ["İki vardiyalı işlik", "Sabah-akşam geçişi", "Vardiya ortası", "O günkü üretim yoğunluğu"],
                        ["Gece dahil depo/lojistik", "Sevkiyat/dağıtım saatleri", "Gece sakin saatler", "Gece vardiya sorumlusu"],
                        ["Tek vardiyalı ofis/mağaza", "Mesai saatleri", "Mesai dışı", "Bina yönetimi onayı"],
                    ],
                },
            },
            {
                baslik: "Çok adresli sevkiyat gününün kurulması",
                paragraflar: [
                    "Bir günde birden fazla tesise sevkiyat yapılacaksa, her adresin vardiya saatini önceden alır, sıralamayı hem mesafe hem vardiya yoğunluğuna göre kurarız. Vardiya değişim saati yakın olan iki tesis art arda sıralanmaz; bu, hem sevkiyat aracının hem tesislerin trafiğini rahatlatır.",
                    "Bu planlamanın kazancı özellikle küçük ve orta ölçekli işletmeler içindir: tek başına bir sevkiyat için yüksek gelecek nakliye maliyeti, aynı güne dizilen birkaç adres arasında bölünür. Kazancın gerçekleşmesi için tek şart, her adresin vardiya bilgisinin doğru ve önceden bilinmesidir.",
                ],
            },
            {
                baslik: "Teslim alacak yetkilinin vardiyasını bilmenin önemi",
                paragraflar: [
                    "Sevkiyat planlamasında en sık gözden kaçan bilgi, teslim alacak kişinin hangi vardiyada çalıştığıdır. Makine doğru adrese doğru saatte ulaşsa bile, teslim alacak yetkili farklı bir vardiyadaysa makine sahada bekler ya da teslim gecikir.",
                    "Bu yüzden talep alırken adres ve ölçü bilgisi kadar, teslim alacak kişinin o saatte sahada olup olmayacağını da sorarız; belirsizse, talebi netleştirmesi için tesisin bakım ya da vardiya sorumlusuyla iletişime geçmesini öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sevkiyatı vardiya değişim saatine denk getirsek ne olur?",
                cevap:
                    "Genellikle önermeyiz. Vardiya değişim saatinde OSB içi yollar işçi servisleri ve personel araçlarıyla yoğunlaşır; bu, hem sevkiyat aracının ilerlemesini yavaşlatır hem tesisin kendi trafiğini zorlaştırır. Mümkün olduğunca vardiyanın ortasına denk gelen bir saati tercih ederiz. Zorunlu bir durumda değişim saatinde de teslimat yaparız, ancak bu durumda süre biraz uzayabilir; bunu size baştan söyleriz.",
            },
            {
                soru: "Teslim alacak personelimiz vardiyaya göre değişiyor, bu bir sorun mu?",
                cevap:
                    "Bilinmesi gereken bir bilgi ama engel değil. Talep alırken adres ve ölçü kadar, teslim alacak kişinin o saatte hangi vardiyada olacağını da sorarız. Vardiyanız değişkense, sevkiyattan önce hangi vardiyanın teslim alacağını netleştirmenizi öneririz; bu bilgi olmadan gönderilen bir sevkiyat, sahada teslim alacak kimse bulamama riski taşır.",
            },
            {
                soru: "Gece vardiyasına teslimat yapıyor musunuz?",
                cevap:
                    "Yaparız, ancak gündüzden farklı bir hazırlıkla. Gece teslimatında aydınlatma yeterliliği, iletişim hattının netliği ve gece vardiyasında görevli bir yetkilinin teslim noktasında bulunacağı önceden teyit edilir. Bu koşullar sağlandığında gece sevkiyatı gündüz trafiğinden bağımsız olduğu için genellikle daha hızlı ilerler.",
            },
            {
                soru: "Aynı gün birden fazla tesise sevkiyat yapabilir misiniz?",
                cevap:
                    "Yaparız, Denizli'deki komşu sanayi bölgelerinde sık uyguladığımız bir modeldir. Her tesisin vardiya saatini önceden alır, sıralamayı hem mesafe hem vardiya yoğunluğuna göre kurarız; vardiya değişimi yakın olan iki tesisi art arda sıralamayız. Bu model, tek tek sevkiyattan daha ekonomiktir çünkü nakliye maliyeti adresler arasında bölünür.",
            },
            {
                soru: "Makine sahaya ulaştığında kim bilgilendirilir, sadece o an orada olan mı?",
                cevap:
                    "İlk bilgilendirmeyi teslim alan vardiyaya yaparız, ama bu bilgiyi yazılı kısa bir notla desteklemeyi öneririz — çünkü sonraki vardiyalar da makineyi kullanacaksa aynı bilgiye ihtiyaç duyar. Bu not, vardiya değişiminde devredilebilir ve farklı vardiyaların makineyi tutarlı biçimde kullanmasını sağlar. Uzun süreli kiralamalarda bu, aksaklıkları önemli ölçüde azaltır.",
            },
            {
                soru: "Teslimat saatini kesin olarak nasıl belirliyorsunuz?",
                cevap:
                    "Hedef tesisin vardiya saatlerini önceden öğrenir, trafiğin en düşük olduğu vardiya ortası saatini öneririz. Kesin saat, tesisin onayıyla netleşir ve sevkiyattan önce teyit edilir. Vardiya saatleriniz düzenli değişiyorsa, güncel programı bizimle paylaşmanız, her seferinde doğru saati bulmamızı kolaylaştırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Denizli OSB ve çevresindeki sanayi bölgelerinin vardiyalı üretim yapısı sektör geneli bilgidir; vardiya saatine göre sevkiyat planlaması ve çok adresli gün kurgusu kendi çalışma pratiğimizdir. Tesis adı, marka ve rakam kullanılmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Depo Vardiyasına Göre Forklift ve İstifleme Kiralama",
        giris:
            "Denizli'deki tekstil ve mermer tesislerinin depo bölümleri, üretim hattından farklı bir vardiya ritmiyle çalışabilir — bazı depolar tek vardiya, bazıları üretimle aynı üç vardiya, bazıları ise sadece sevkiyat günlerinde yoğunlaşan değişken bir düzenle işler. Forklift ve istifleme talebi geldiğinde bizim önce netleştirdiğimiz şey, deponun kendi vardiya düzeni ve bu düzenin üretim hattının vardiyasıyla örtüşüp örtüşmediğidir. Bir dokuma tesisinin üretim hattı üç vardiya çalışırken depo tek vardiya çalışabilir; bu durumda istifleme işi üretim vardiyasına değil, depo vardiyasına göre planlanmalıdır. Bu sayfada, depo vardiyasının forklift talebini nasıl şekillendirdiğini, stok sayımı ve sevkiyat öncesi yoğun günlerin nasıl planlandığını ve tek personelli küçük depolarda randevunun nasıl kesinleştirildiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Depo vardiyası üretim vardiyasından bağımsız olabilir",
                metin:
                    "Üç vardiyalı bir üretim hattının deposu her zaman aynı yoğunlukta çalışmaz — bazı tesislerde depo tek vardiya, bazılarında üretimle eş zamanlı iki vardiya çalışır. Forklift talebi alırken bu yüzden üretim vardiyasını değil, doğrudan deponun kendi vardiya düzenini sorarız. İstifleme işi depo kapalıyken planlanırsa, makine sahaya gelse bile işi yönlendirecek depo personeli bulunmayabilir.",
            },
            {
                baslik: "Sevkiyat öncesi yoğun günlerde ek kapasite",
                metin:
                    "Depoların çoğu, düzenli günlere göre sevkiyat öncesi günlerde çok daha yoğun çalışır — palet sayısı artar, istifleme hızı önem kazanır. Bu yoğun günlerde tek forklift yetmeyebilir ve ek bir makine geçici süreyle devreye alınır. Sevkiyat takviminizi önceden paylaşmanız, bu yoğun günleri işaretlememizi ve ek kapasiteyi tam o güne göre ayarlamamızı sağlar.",
            },
            {
                baslik: "Vardiya değişiminde stok sayımı ve makine kullanımı",
                metin:
                    "Bazı depolarda vardiya değişimi, kısa bir stok sayımı ya da devir kontrolüyle eşleşir ve bu süre boyunca forklift genellikle boşta kalır. Bu boşluk, makinenin küçük bir bakım kontrolü ya da akü şarjı için kullanılabilecek doğal bir penceredir. Uzun süreli kiralamalarda bu pencereyi bilerek planlama yaparız; makinenin gün boyu aralıksız çalışıp vardiya değişiminde hiç durmaması, uzun vadede arıza riskini artırır.",
            },
            {
                baslik: "Tek personelli küçük depoda randevu kesinliği",
                metin:
                    "Küçük ölçekli bir işletmenin deposu bazen tek bir kişi tarafından yönetilir ve bu kişi izinliyse ya da başka bir işle meşgulse forklift işini yönlendirecek kimse kalmayabilir. Bu tür taleplerde randevuyu birden fazla kez teyit eder, mümkünse sevkiyattan bir gün önce kısa bir hatırlatma yaparız. Küçük ekipli depolarda son dakika değişikliği, büyük tesislerdekinden daha kolay işi aksatır.",
            },
            {
                baslik: "Operatörlü ya da operatörsüz: vardiyaya göre karar",
                metin:
                    "Depo personeli forklift kullanmaya yetkili değilse ya da yetkili personel farklı bir vardiyada görevliyse operatörlü kiralama en pratik çözümdür. Yetkili personel deponun her vardiyasında sahadaysa operatörsüz kiralama maliyeti düşürür. Talep alırken bu yüzden hem deponun vardiya düzenini hem yetkili personelin hangi vardiyalarda bulunduğunu sorarız; cevap net değilse operatörlü seçeneği öneririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Depo tipine göre forklift kullanım düzeni",
                paragraflar: [
                    "Denizli'deki depo tiplerini vardiya düzenine ve tipik forklift ihtiyacına göre aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Depo tipi", "Vardiya düzeni", "Yoğunluk artışı", "Operatör önerisi"],
                    satirlar: [
                        ["Üretimle eş zamanlı büyük depo", "İki-üç vardiya", "Parti geçişlerinde", "Deponun kendi personeli"],
                        ["Tek vardiyalı küçük depo", "Gündüz tek vardiya", "Sevkiyat günü", "Operatörlü öneriyoruz"],
                        ["Gece dahil lojistik depo", "Sürekli", "Gece sevkiyat saatleri", "Vardiyaya göre değişken"],
                        ["Mevsimsel/değişken depo", "Sipariş bazlı", "Sipariş yoğunluğunda", "Talebe göre belirlenir"],
                    ],
                },
            },
            {
                baslik: "Sevkiyat takvimini önceden bilmenin kazancı",
                paragraflar: [
                    "Sevkiyat öncesi yoğun günler önceden bilindiğinde, ek forklift kapasitesini tam o güne göre planlar, tesisin normal günlerde tek makineyle idare etmesini sağlarız. Bu, hem maliyeti optimize eder hem sevkiyat gününde makine yetersizliği riskini ortadan kaldırır.",
                    "Düzenli çalıştığımız depolara aylık sevkiyat takvimini önceden paylaşmalarını öneririz; bu takvim elimizde olduğunda hangi günlerde ek kapasite gerekeceğini biz belirler, önceden teyit veririz.",
                ],
            },
            {
                baslik: "Vardiya değişiminde makinenin bakım penceresi",
                paragraflar: [
                    "Sürekli çalışan bir depoda forklift, vardiya değişiminde kısa bir boşluk yaşar ve bu boşluk küçük bir bakım kontrolü için kullanılabilir — akü durumu, lastik kontrolü, kısa bir temizlik. Bu birkaç dakikalık alışkanlık, makinenin uzun vadeli arıza riskini azaltır.",
                    "Uzun süreli kiralamalarda bu kontrolü vardiya devir kaydına ekleyebiliriz; hangi vardiyanın makineyi teslim aldığı, akü durumunun ne olduğu kısa bir notla kayıt altına alınır ve sonraki vardiyaya devredilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üretim hattımız üç vardiya, ama deponuz tek vardiya çalışıyor; forkliftin çalışma saati hangisine göre olur?",
                cevap:
                    "Deponuzun vardiyasına göre. Forklift ve istifleme işi doğrudan depo personelinin varlığına bağlıdır; üretim hattı üç vardiya çalışsa da depo tek vardiyaysa makine o vardiyanın saatlerine göre planlanır. Bu yüzden talep alırken üretim vardiyasını değil, doğrudan deponun kendi çalışma saatlerini sorarız.",
            },
            {
                soru: "Sevkiyat günlerimizde palet sayısı çok artıyor, tek forklift yetmiyor; ne yapabiliriz?",
                cevap:
                    "Sevkiyat takviminizi önceden bize bildirirseniz, o günlere özel geçici ek forklift kapasitesi ayarlarız. Bu, normal günlerde tek makineyle idare edip yoğun günlerde ek kapasite eklemenizi sağlar; sürekli iki makine kiralamaktan daha ekonomiktir. Takvim ne kadar erken paylaşılırsa, o günün kapasitesini o kadar kesin ayırabiliriz.",
            },
            {
                soru: "Deponuzda tek personel var, o gün izinliyse forklift işi ne olur?",
                cevap:
                    "Randevu ertelenir, çünkü tek yetkili personel yoksa işi yönlendirecek kimse kalmaz. Bu riski azaltmak için randevuyu birden fazla kez teyit ederiz, mümkünse sevkiyattan bir gün önce kısa bir hatırlatma yaparız. Personel değişimi ya da izin planınız varsa bunu talep aşamasında bildirmeniz, hem sizin hem bizim zamanınızı korur.",
            },
            {
                soru: "Forkliftin vardiya boyunca aralıksız çalışması sorun olur mu?",
                cevap:
                    "Uzun vadede olabilir. Vardiya değişiminde makinenin kısa bir bakım penceresi bulması — akü kontrolü, lastik kontrolü — arıza riskini azaltır. Uzun süreli kiralamalarda bu kontrolü vardiya devir kaydına ekleriz; hangi vardiyanın makineyi teslim aldığı ve akü durumu kısa bir notla kayıt altına alınır, sonraki vardiyaya devredilir.",
            },
            {
                soru: "Depo personelimiz forklift kullanmaya yetkili değil; operatörlü mü kiralamalıyız?",
                cevap:
                    "Genellikle evet, bu en pratik çözümdür. Yetkili personel deponuzun her vardiyasında sahada değilse ya da hiç yoksa operatörlü kiralama, işin aksamadan yürümesini sağlar. Yetkili personeliniz belirli vardiyalarda varsa, işi o vardiyaya göre planlayıp operatörsüz de ilerleyebiliriz; kararı deponuzun vardiya ve personel düzenine göre birlikte veririz.",
            },
            {
                soru: "Gece vardiyasında da sevkiyat yapıyoruz; forklift gece çalışabilir mi?",
                cevap:
                    "Çalışabilir, gece çalışmanın kendi hazırlığıyla — yeterli aydınlatma, net iletişim hattı ve gece vardiyasında görevli bir yetkilinin sahada bulunması önceden teyit edilir. Gece vardiyasının sevkiyat yoğunluğunu bize önceden bildirirseniz, forklift kapasitesini o saatlere göre ayarlarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Depo ve üretim hattının farklı vardiya düzenlerine sahip olabilmesi sektör geneli bilgidir; depo vardiyasına göre forklift planlaması ve sevkiyat öncesi ek kapasite kendi çalışma pratiğimizdir. Tesis adı, marka ve rakam kullanılmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Planlı Duruş ve Vardiya Dışı Büyük İşler İçin Eklemli Platform (Boom) Kiralama",
        giris:
            "Eklemli platform (boom) gerektiren işler, sepetli platformun aksine genellikle kısa bir vardiya boşluğuna sığmaz — sanayi holü çatısında kapsamlı bir bakım, yüksek bir çelik konstrüksiyonun montajı ya da geniş bir cephenin baştan sona kontrolü gibi işler saatler, bazen günler sürer. Denizli'deki fabrika ölçeğindeki tesislerde bu tür büyük kapsamlı işler, vardiya arası kısa pencerelere değil, tesisin yıllık planlı duruş dönemine ya da vardiyanın tamamen durduğu hafta sonu gibi geniş zaman dilimlerine yazılır. Bu sayfada, boom gerektiren büyük işlerin vardiyalı bir tesiste nasıl planlandığını, planlı duruş takvimine erken dahil olmanın neden önemli olduğunu ve geniş kapsamlı bir işin vardiya değişimlerinden nasıl etkilenmeden sürdürüldüğünü anlatıyoruz.",
        maddeler: [
            {
                baslik: "Büyük kapsamlı işler neden kısa pencereye sığmaz",
                metin:
                    "Boom gerektiren işlerin çoğu — çatı bakımı, yüksek montaj, geniş cephe kontrolü — birkaç saatten kısa sürmez ve kesintisiz ilerlemesi gerekir. Vardiya arası kısa bir boşlukta başlayıp yarım bırakılan bir iş, ekipmanın sökülüp tekrar kurulmasını gerektirir ve bu, toplam süreyi uzatır. Bu yüzden boom talebinde önce işin toplam süresini tahmin eder, bu süreye uyan geniş bir pencere ararız — kısa vardiya boşluğu değil.",
            },
            {
                baslik: "Planlı duruş dönemine erken dahil olmak",
                metin:
                    "Fabrika ölçeğindeki tesislerin yılda birkaç kez yaptığı planlı duruş, vardiya kısıtından bağımsız çalışabilen en geniş penceredir ve boom işlerinin büyük kısmı bu döneme yazılır. Duruş süresi sınırlı olduğu için erken planlama kritiktir — hangi kalemin ne zaman yapılacağı, hangi makine sınıfının ne zaman geleceği duruştan haftalar önce netleşir. Geç katılan bir talep, kısıtlı duruş penceresinden zaman çalar.",
            },
            {
                baslik: "Hafta sonu tek vardiyalı dönemin kullanımı",
                metin:
                    "Planlı duruş her zaman yakın tarihli olmayabilir; bu durumda ikinci en geniş pencere, üretimin tek vardiyaya düştüğü hafta sonudur. Hafta sonu penceresi, hafta içi vardiya değişimlerinden bağımsız, kesintisiz bir çalışma süresi sunar. Büyük kapsamlı bir boom işi için hafta sonu, hem işin bölünmeden ilerlemesini hem de üretim akışının hiç etkilenmemesini sağlar.",
            },
            {
                baslik: "Vardiya değişse de işin sürekliliği",
                metin:
                    "Boom işi birden fazla vardiyayı kapsayacak kadar uzarsa, iş vardiyalar arasında bölünmeden sürdürülür — bizim ekibimiz ya da operatörümüz vardiya değişse bile sahada kalır ya da devir kaydıyla işi bir sonraki ekibe aktarır. Bu süreklilik, işin yarım kalıp yeniden başlatılmasından doğacak zaman kaybını önler ve tesisin üretim vardiyalarını rahatsız etmeden ilerlemesini sağlar.",
            },
            {
                baslik: "Büyük iş için sahaya erken keşif",
                metin:
                    "Boom gerektiren büyük kapsamlı işlerde, telefonla verilen bir tahmin genellikle yeterli netliği sağlamaz; sahaya erken bir keşif ziyareti yapıp erişim yüksekliğini, çalışma alanının genişliğini ve varsa engelleri (çatı üstü ekipman, kablo hattı) yerinde görürüz. Bu keşif, hem doğru makine sınıfını hem de gerçekçi bir süre tahminini belirler; planlı duruş ya da hafta sonu penceresine göre iş bu bilgiyle kesinleşir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş kapsamına göre uygun geniş pencere",
                paragraflar: [
                    "Boom gerektiren işin kapsamına göre hangi geniş pencerenin daha uygun olduğunu aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["İş kapsamı", "Tahmini süre", "Uygun pencere", "Planlama önceliği"],
                    satirlar: [
                        ["Çatı/cephe kapsamlı bakım", "Bir-birkaç gün", "Planlı duruş", "Haftalar önceden"],
                        ["Yüksek montaj", "Birkaç gün", "Planlı duruş ya da hafta sonu", "Erken keşif şart"],
                        ["Geniş cephe kontrolü", "Bir gün", "Hafta sonu tek vardiya", "Birkaç gün önceden"],
                        ["Acil yüksek müdahale", "Değişken", "En yakın uygun pencere", "Aynı gün değerlendirme"],
                    ],
                },
            },
            {
                baslik: "Planlı duruş takvimine dahil olma süreci",
                paragraflar: [
                    "Düzenli çalıştığımız fabrikalarda yıllık planlı duruş takvimini aylar öncesinden alır, boom gerektiren işleri bu takvimin içine erken yerleştiririz. Hangi makine sınıfının, hangi gün, hangi noktada olacağı duruştan önce netleşir; duruş günü sahada makine bulma ya da konumlanma süresiyle uğraşılmaz.",
                    "Duruş takvimini paylaşmayan ya da geç paylaşan tesislerde de hizmet veririz, ancak bu durumda makine ve ekip müsaitliği son dakika netleşir; bazen istenen tarih değil, o an uygun olan tarih teklif edilir.",
                ],
            },
            {
                baslik: "Vardiyalar arası devir ile işin bölünmemesi",
                paragraflar: [
                    "Boom işi birden fazla vardiyayı kapsıyorsa, her vardiya değişiminde kısa bir devir yapılır — o ana kadar tamamlanan kısım, kalan iş ve varsa dikkat edilmesi gereken nokta bir sonraki ekibe aktarılır. Bu devir, işin sıfırdan başlamasını önler ve toplam süreyi kısaltır.",
                    "Uzun kapsamlı işlerde bu devri yazılı kısa bir notla desteklemeyi öneririz; bu, özellikle operatör ya da ekip değişikliği olduğunda işin tutarlı ilerlemesini sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Çatımızın kapsamlı bir bakımı gerekiyor, kaç günlük iş bu ve nasıl planlanır?",
                cevap:
                    "Kapsama göre değişir, ama genellikle bir günden uzun sürer ve vardiya arası kısa pencerelere sığmaz. Önce sahaya bir keşif ziyareti yaparak gerçekçi bir süre tahmini çıkarırız; bu tahmine göre en uygun geniş pencereyi — planlı duruş döneminiz varsa onu, yoksa hafta sonu tek vardiyalı dönemi — öneririz. Planlı duruş takviminiz varsa bunu bize aylar öncesinden paylaşmanız, işi en verimli şekilde yerleştirmemizi sağlar.",
            },
            {
                soru: "Planlı duruşumuz henüz belli değil; boom işini nasıl planlarız?",
                cevap:
                    "Duruş tarihi netleşmeden de bir ön keşif yapıp işin kapsamını ve süresini belirleyebiliriz. Duruş tarihi kesinleştiğinde bu bilgiyi kullanarak işi hemen yerleştiririz. Duruş çok geç netleşiyorsa ya da yoksa, hafta sonu tek vardiyalı dönem alternatif bir geniş pencere sunar; ikisi arasında hangisinin daha uygun olduğuna birlikte karar veririz.",
            },
            {
                soru: "İşimiz birden fazla vardiyayı kapsayacak kadar uzun sürecek; iş yarım mı kalır?",
                cevap:
                    "Hayır, süreklilik sağlarız. Vardiya değiştiğinde ekibimiz ya da operatörümüz sahada kalır ya da kısa bir devirle işi bir sonraki ekibe aktarır — o ana kadar tamamlanan kısım ve kalan iş net biçimde yazılır. Bu, işin sıfırdan başlamasını önler ve üretim vardiyalarınızı rahatsız etmeden ilerlemesini sağlar.",
            },
            {
                soru: "Telefonla verdiğiniz süre tahmini ne kadar güvenilir?",
                cevap:
                    "Basit ve tek noktalı işlerde telefon tahmini genellikle isabetlidir, ama boom gerektiren kapsamlı işlerde (çatı, yüksek montaj) sahaya erken bir keşif yapmadan verilen tahmin bir ön fikirdir. Erişim yüksekliği, çalışma alanı genişliği ve varsa engelleri yerinde görmeden kesin bir süre söylemek isabetsiz olur; bu yüzden büyük işlerde keşfi öneririz, bu keşif genellikle ek bir maliyet oluşturmaz.",
            },
            {
                soru: "Hafta sonu çalışmak, hafta içi planlı duruşa göre daha mı pahalı?",
                cevap:
                    "Genellikle hafif bir fark olabilir ama esas belirleyici işin kapsamı ve süresidir, gün değil. Hafta sonu tercih etmenizin nedeni genellikle planlı duruşunuzun yakın olmaması; bu durumda hafta sonu, üretiminizi hiç etkilemeden geniş bir pencere sunar. Maliyet farkını talep aşamasında açıkça belirtiriz, sürpriz bir ek ücret çıkmaz.",
            },
            {
                soru: "Acil bir yüksek müdahale gerekiyor, planlı duruşu ya da hafta sonunu bekleyemeyiz; ne yaparsınız?",
                cevap:
                    "Acil durumlarda geniş pencere aramayız, en yakın uygun zamanı değerlendiririz. Durumu ilettiğinizde aynı gün ya da ertesi gün için makine ve ekip müsaitliğini kontrol eder, mümkün olan en hızlı çözümü sunarız. Acil işlerde bile güvenlik kısıtlarından (örneğin kesim ya da üretim trafiği sürüyorsa) taviz vermeyiz; bu, işin hızından çok güvenliğini önceliklendirir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Fabrika ölçeğindeki tesislerin yıllık planlı duruş uygulaması sektör geneli bilgidir; boom işlerinin geniş pencereye göre planlanması ve vardiyalar arası devir düzeni kendi çalışma pratiğimizdir. Tesis adı, marka ve rakam kullanılmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Vardiya Arası Duraklamada İç Mekân ve Depo İçi Platform Kiralama",
        giris:
            "Denizli'deki tekstil, mermer ve deri işletmelerinin iç mekân bakım ihtiyaçları — tavan tesisatı, boru hattı kontrolü, depo içi raf üstü işleri — üretim hattı çalışırken yapılamaz; bu işlerin hepsi hattın durduğu ya da vardiyanın azaldığı bir zamana ihtiyaç duyar. Bu sayfa, iç mekân ve depo içi platform işlerinin vardiyalı bir üretim düzeninde nasıl konumlandığını anlatıyor. Fark, sepetli platformdaki kısa dar-nokta erişiminden farklı olarak, iç mekân işlerinin genellikle orta ölçekli bir süre gerektirmesidir — bir tavan hattının tamamının kontrolü, bir depo koridorunun raf üstü temizliği gibi. Bu süre, tek bir kısa vardiya boşluğuna değil, birkaç ardışık boşluğa ya da vardiyanın azaldığı bir döneme yayılır. Bu sayfada, hangi iç mekân işinin hangi pencereye uyduğunu, tesisin bakım ekibiyle iş bölümünün nasıl kurulduğunu ve tozlu-nemli ortamların çalışma saatine etkisini anlatıyoruz.",
        maddeler: [
            {
                baslik: "İç mekân işi neden hat çalışırken yapılamaz",
                metin:
                    "Tavan tesisatı, boru hattı ya da raf üstü işleri genellikle hattın tam altında ya da yakınında yer alır ve hat çalışırken bu bölgeye platformla girmek hem üretim akışını böler hem güvenlik riski taşır. Bu yüzden iç mekân talebinde önce hattın ne zaman durduğunu ya da vardiyanın ne zaman azaldığını sorarız; kısa bir dar-nokta erişiminden farklı olarak, iç mekân işleri genellikle bu duraklamanın süresine göre kapsam daraltılarak planlanır.",
            },
            {
                baslik: "Orta ölçekli işin birkaç ardışık pencereye yayılması",
                metin:
                    "Bir tavan hattının tamamının kontrolü gibi orta ölçekli bir iş, tek bir vardiya boşluğuna sığmayabilir. Bu durumda işi bölümlere ayırır, her bölümü ayrı bir vardiya boşluğuna ya da ardışık günlerin aynı boşluğuna yerleştiririz. Bu bölümleme, üretim akışını hiçbir zaman uzun süre kesmeden, işin toplamda tamamlanmasını sağlar; bölümler arası geçişte nereye kadar gelindiği kayıt altına alınır.",
            },
            {
                baslik: "Depo koridorunda raf üstü işlerin zamanlaması",
                metin:
                    "Depo içi raf üstü işleri, deponun kendi vardiya düzenine göre planlanır ve genellikle sevkiyat trafiğinin düşük olduğu saatler tercih edilir — sevkiyat yoğunken koridorda platformla çalışmak hem forklift trafiğiyle çakışır hem iş güvenliği açısından risklidir. Depo sorumlusuyla önceden konuştuğumuzda, hangi saatlerin koridor trafiği açısından sakin olduğunu öğrenir, işi tam o saatlere yerleştiririz.",
            },
            {
                baslik: "Tozlu ve nemli ortamların çalışma saatine etkisi",
                metin:
                    "Tekstil terbiye hatlarında buhar ve nem, mermer atölyelerinde toz ve su, deri OSB'de kimyasal koku gibi ortam koşulları, iç mekân işinin hangi saatte yapılabileceğini doğrudan etkiler. Bu koşulların en düşük olduğu saat genellikle vardiya değişimi ya da işlem arasıdır. Talep alırken tesisin bu tür ortam koşullarını da sorar, işi hem vardiya hem ortam açısından uygun bir pencereye yerleştiririz.",
            },
            {
                baslik: "Tesisin bakım ekibiyle görev paylaşımı",
                metin:
                    "İç mekân işlerinde tesisin kendi bakım ekibi genellikle teknik kısmı (tesisat, boru, elektrik) üstlenir, bizim rolümüz erişimi sağlamaktır. Bu iş bölümü, hangi vardiyada hangi bakım sorumlusunun sahada olacağının baştan netleşmesini gerektirir. Vardiya değiştiğinde sorumluluk da değişebileceği için, uzun süreli işlerde her vardiyanın kendi bakım sorumlusunu ve iletişim bilgisini alırız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekân iş tipine göre pencere ve süre",
                paragraflar: [
                    "Denizli'deki iç mekân işlerinde sık karşılaştığımız iş tiplerini, tipik sürelerini ve uygun pencereyi aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Tipik süre", "Uygun pencere", "Ortam kısıtı"],
                    satirlar: [
                        ["Tavan hattı tam kontrolü", "Birkaç ardışık boşluk", "Vardiya arası, bölümlü", "Hat durmalı"],
                        ["Boru/tesisat kontrolü", "Yarım-bir gün", "Planlı duruş ya da hafta sonu", "Düşük"],
                        ["Depo raf üstü işi", "Birkaç saat", "Sevkiyat dışı saat", "Forklift trafiği"],
                        ["Terbiye hattı yakını iş", "Değişken", "İşlem arası, tam havalandırma", "Buhar/nem/koku"],
                    ],
                },
            },
            {
                baslik: "Bölümlere ayrılan işin takibi",
                paragraflar: [
                    "Orta ölçekli bir iç mekân işini birkaç vardiya boşluğuna bölerken, her bölümün nereye kadar tamamlandığını kayıt altına alırız. Bu kayıt, hem bizim ekibimizin hem tesisin bakım ekibinin işin bütününü takip etmesini sağlar ve bir sonraki pencerede kaldığımız yerden devam etmemizi mümkün kılar.",
                    "Bu bölümleme yaklaşımı, tesisin üretim akışını hiçbir zaman uzun süre kesmeden, kapsamlı bir işin haftalar içinde tamamlanmasına imkân verir; bu, tek seferde uzun bir duruş istemek yerine tercih ettiğimiz bir yöntemdir.",
                ],
            },
            {
                baslik: "Ortam koşulunu vardiya bilgisiyle birlikte almak",
                paragraflar: [
                    "İç mekân talebi alırken vardiya saatiyle birlikte ortam koşulunu da sorarız — çünkü bazı bölgelerde vardiya uygun olsa da ortam koşulu (buhar, toz, koku) hâlâ yüksek olabilir. İki bilginin kesiştiği an, gerçek çalışma penceresidir.",
                    "Bu bilgiyi tesisin üretim ya da iş güvenliği sorumlusundan alırız; onların onayı olmadan, vardiya uygun görünse bile ortam riskliyse platformu o bölgeye sokmayız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tavan hattımızın tamamının kontrolü gerekiyor ama hat sürekli çalışıyor; nasıl planlarız?",
                cevap:
                    "İşi bölümlere ayırarak. Tek bir vardiya boşluğu tüm hattı kapsamaya yetmez; bu yüzden hattı bölümlere ayırır, her bölümü ayrı bir vardiya boşluğuna ya da ardışık günlerin aynı boşluğuna yerleştiririz. Her bölümün nereye kadar tamamlandığını kayıt altına alır, bir sonraki pencerede kaldığımız yerden devam ederiz. Bu yöntem, hattınızı uzun süre durdurmadan işin toplamda tamamlanmasını sağlar.",
            },
            {
                soru: "Depomuzun koridorlarında raf üstü bir iş var; sevkiyat yoğunken çalışabilir misiniz?",
                cevap:
                    "Önermeyiz. Sevkiyat yoğunken koridorda platformla çalışmak forklift trafiğiyle çakışır ve iş güvenliği açısından risk taşır. Depo sorumlunuzdan sevkiyat trafiğinin düşük olduğu saatleri öğrenir, işi tam o saatlere yerleştiririz. Sevkiyat takviminizi önceden paylaşırsanız, bu sakin saatleri daha kesin belirleyebiliriz.",
            },
            {
                soru: "Terbiye hattımızın yakınında bir iş var, buhar ve koku yoğun; ne zaman uygun olur?",
                cevap:
                    "İşlem arası ya da tam havalandırmanın sağlandığı saatlerde. Kimyasal buhar ve koku yoğunken üst kotta çalışmayız; bu, iş güvenliği açısından tartışılmayan bir kuraldır. Üretim ya da iş güvenliği sorumlunuzdan işlemin durduğu ya da havalandırmanın tam çalıştığı saatleri öğrenir, planı buna göre kurarız. Vardiya uygun görünse bile ortam koşulu riskliyse platformu o bölgeye sokmayız.",
            },
            {
                soru: "Bakım ekibimiz var, tesisat işini onlar yapacak; sizin rolünüz ne olur?",
                cevap:
                    "Biz erişimi sağlarız, tesisat ve elektrik gibi teknik işi çoğunlukla sizin ekibiniz yapar. Hangi vardiyada hangi bakım sorumlusunun sahada olacağını baştan netleştiririz; vardiya değiştiğinde sorumluluk da değişebileceği için uzun süreli işlerde her vardiyanın sorumlusunu ayrı ayrı alırız. Bu netlik, vardiya geçişlerinde işin sahipsiz kalmasını önler.",
            },
            {
                soru: "İşimiz birkaç hafta sürecek gibi görünüyor, bu normal mi?",
                cevap:
                    "Orta-büyük kapsamlı iç mekân işlerinde evet, normaldir — çünkü işi tek seferde uzun bir duruşla değil, birkaç ardışık vardiya boşluğuna bölerek yürütürüz. Bu, üretim akışınızı hiç uzun süre kesmeden ilerlemenizi sağlar. Süreyi kısaltmak isterseniz, planlı duruş döneminize ya da hafta sonuna yoğunlaştırılmış bir çalışma planı önerebiliriz; bu durumda süre kısalır ama günlük çalışma süresi uzar.",
            },
            {
                soru: "Ortam koşulunu (toz, nem, buhar) kim değerlendirir, siz mi tesis mi?",
                cevap:
                    "Ortak değerlendiririz ama son sözü tesisin üretim ya da iş güvenliği sorumlusu söyler — çünkü o bölgenin gerçek koşullarını en iyi onlar bilir. Talep alırken bu bilgiyi sorar, vardiya saatiyle birlikte değerlendiririz. İki koşul (vardiya ve ortam) birbiriyle çelişiyorsa, ortam koşulu her zaman önceliklidir; vardiya uygun olsa bile ortam riskliyse işi ertelenir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Denizli'deki tekstil terbiye, mermer işleme ve deri üretiminin ortam koşulları (buhar, toz, koku) sektör geneli bilgidir; iç mekân işlerinin bölümlere ayrılarak vardiya boşluklarına yerleştirilmesi kendi çalışma pratiğimizdir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Planlı Duruş Takvimine Göre Çelik Konstrüksiyon Montaj Platformu",
        giris:
            "Denizli'deki sanayi holü ve fabrika genişletme projelerinde çelik konstrüksiyon montajı, günlük vardiya ritmine değil, tesisin genişleme ya da planlı duruş takvimine bağlı çalışır. Bir sanayi holünün çatı kirişi montajı ya da bir üretim hattının yeni bölümünün çelik iskeleti, üretimin vardiya düzeninden bağımsız, kendi başına planlanan bir proje takvimi izler — ama bu proje mevcut bir tesisin içinde ya da yakınında yürüyorsa, tesisin vardiyalarıyla çakışmaması gerekir. Bu sayfada, çelik konstrüksiyon montaj işlerinin mevcut bir üretim tesisinin vardiya düzeniyle nasıl uyumlandığını, planlı duruş dönemlerinin montaj için nasıl kullanıldığını ve çok makineli, çok günlük bir montaj projesinin nasıl koordine edildiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Montaj projesi kendi takvimini izler",
                metin:
                    "Yeni bir sanayi holü inşaatı ya da mevcut bir tesisin genişletilmesi, üretim vardiyasından bağımsız bir proje takvimiyle ilerler — inşaat ekibi, çelik montaj ekibi ve platform kiralama süreci bu takvime göre koordine edilir. Ancak proje mevcut bir tesisin sınırları içinde ya da bitişiğinde yürüyorsa, montaj sırasında oluşan trafik ve gürültünün tesisin vardiya akışını etkilememesi gerekir; bu yüzden proje takvimini tesisin vardiya programıyla karşılaştırıp çakışan noktaları önceden belirleriz.",
            },
            {
                baslik: "Mevcut hat yakınında montajın vardiyaya duyarlılığı",
                metin:
                    "Mevcut bir üretim hattının yakınında yapılan bir çelik konstrüksiyon genişletmesi, hattın vardiyasına duyarlı bir planlama gerektirir — ağır makine hareketi, malzeme taşıma ve montaj gürültüsü, hat çalışırken personel güvenliğini ve üretim konsantrasyonunu etkileyebilir. Bu tür projelerde ağır makine hareketlerini vardiyanın düşük olduğu saatlere, hassas montaj işlerini ise mümkünse planlı duruş dönemine yazarız.",
            },
            {
                baslik: "Planlı duruş dönemi: en geniş montaj penceresi",
                metin:
                    "Fabrika ölçeğindeki tesislerin yıllık planlı duruşu, çelik konstrüksiyon montajı için en verimli penceredir — üretim tamamen durduğu için ağır makine hareketi ve montaj işlemleri hiçbir vardiya kısıtı olmadan yürütülebilir. Büyük kapsamlı montaj projelerini mümkün olduğunca bu döneme denk getirmeyi öneririz; bunun için proje planlamasının tesisin duruş takvimiyle aylar öncesinden eşleştirilmesi gerekir.",
            },
            {
                baslik: "Çok makineli montaj gününün koordinasyonu",
                metin:
                    "Kapsamlı bir çelik konstrüksiyon montajı genellikle birden fazla makineyi (eklemli platform, forklift, bazen vinç) aynı sahada eş zamanlı gerektirir. Bu makinelerin sahada birbirini engellememesi için çalışma alanları ve sıralama önceden netleştirilir — hangi makine hangi bölgede, hangi saatte çalışacak. Bu koordinasyon, montaj ekibinin iş planıyla birlikte, projeye özel bir saha yerleşim şemasıyla desteklenir.",
            },
            {
                baslik: "Montaj sonrası devir ve üretime geçiş",
                metin:
                    "Çelik konstrüksiyon montajı tamamlandığında, o bölgenin üretime ya da normal vardiya düzenine geri dönüşü kademeli olur — önce güvenlik kontrolü, sonra kısıtlı erişimle test, ardından tam kullanım. Bu geçiş sürecinde platform ve diğer makineler sahadan aşamalı olarak çekilir; tesisin bakım ekibiyle bu devir sırasını önceden netleştirmek, üretime geçişte gecikmeyi önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Proje tipine göre montaj penceresi",
                paragraflar: [
                    "Denizli'deki çelik konstrüksiyon montaj projelerinin tipine göre uygun pencereyi aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Proje tipi", "Vardiya etkileşimi", "Uygun pencere", "Koordinasyon muhatabı"],
                    satirlar: [
                        ["Yeni bağımsız sanayi holü", "Yok/az", "Kendi proje takvimi", "Proje müdürü"],
                        ["Mevcut hat yakını genişletme", "Yüksek", "Planlı duruş", "Bakım müdürü"],
                        ["Çatı kirişi/kapsamlı bakım", "Orta", "Duruş ya da hafta sonu", "Üretim şefi"],
                        ["Küçük ek montaj", "Düşük", "Vardiya arası, bölümlü", "Vardiya amiri"],
                    ],
                },
            },
            {
                baslik: "Duruş takvimiyle proje takviminin eşleştirilmesi",
                paragraflar: [
                    "Mevcut bir tesisin yakınında yürüyen büyük kapsamlı bir montaj projesinde, projenin ağır ve gürültülü aşamalarını tesisin planlı duruş dönemine yazmak, hem üretim akışını korur hem montaj ekibinin kesintisiz çalışmasını sağlar. Bu eşleştirme, proje başlamadan aylar önce tesisin duruş takvimini görmemizi gerektirir.",
                    "Duruş takvimi henüz netleşmemişse, projenin en az vardiyaya duyarlı aşamalarını önce yürütür, hassas ve gürültülü aşamaları duruş tarihi netleştiğinde planlarız; bu, projeyi tamamen durdurmadan esnek bir başlangıç sağlar.",
                ],
            },
            {
                baslik: "Saha yerleşim şemasıyla çok makineli koordinasyon",
                paragraflar: [
                    "Birden fazla makinenin aynı sahada çalıştığı montaj projelerinde, her makinenin çalışma bölgesini ve saatini gösteren basit bir saha yerleşim şeması hazırlarız. Bu şema, montaj ekibiyle paylaşılır ve makineler arası çakışmayı önler.",
                    "Şema, proje ilerledikçe güncellenir — bir aşama tamamlandığında bir sonraki aşamanın makine ve alan ihtiyacı yeniden çizilir. Bu, özellikle uzun süren projelerde sahadaki karışıklığı önemli ölçüde azaltır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yeni bir sanayi holü inşa ediyoruz, henüz üretim başlamadı; vardiya planlaması gerekir mi?",
                cevap:
                    "Bağımsız bir yeni inşaatta vardiya kısıtı genellikle yoktur — proje kendi takvimini izler ve çalışma saatleri esas olarak inşaat ekibinizin programına göre belirlenir. Ancak saha başka bir aktif tesisin yakınındaysa, o tesisin vardiya ve trafik düzenini bilmek yine faydalıdır; bu bilgiyi baştan sorarız.",
            },
            {
                soru: "Mevcut üretim hattımızın yanına genişleme yapıyoruz, hat durmadan çalışabilir misiniz?",
                cevap:
                    "Kısmen. Ağır makine hareketlerini ve gürültülü montaj işlemlerini vardiyanın düşük olduğu saatlere ya da mümkünse planlı duruş döneminize yazarız; hattınızı tamamen durdurmayan, ama vardiyanızı da rahatsız etmeyen bir denge kurarız. Planlı duruş takviminiz varsa, projenin en yoğun aşamalarını o döneme denk getirmenizi öneririz.",
            },
            {
                soru: "Planlı duruşumuz aylar sonra; proje o zamana kadar bekler mi?",
                cevap:
                    "Beklemez. Projenin vardiyaya en az duyarlı aşamalarını (örneğin hazırlık, temel işleri) hemen başlatır, hassas ve gürültülü aşamaları duruş tarihine denk getiririz. Bu, projeyi tamamen durdurmadan esnek bir başlangıç sağlar ve toplam proje süresini kısaltır.",
            },
            {
                soru: "Aynı sahada birden fazla makine çalışacak, birbirlerine engel olmaz mı?",
                cevap:
                    "Bunu önlemek için basit bir saha yerleşim şeması hazırlarız — hangi makine hangi bölgede, hangi saatte çalışacak açıkça gösterilir. Bu şema montaj ekibinizle paylaşılır ve proje ilerledikçe güncellenir. Bu koordinasyon olmadan çok makineli bir sahada çakışma riski yüksektir; şema bu riski büyük ölçüde azaltır.",
            },
            {
                soru: "Montaj bittiğinde o bölgeyi hemen üretime açabilir miyiz?",
                cevap:
                    "Genellikle kademeli bir geçiş öneririz — önce güvenlik kontrolü, sonra kısıtlı erişimle test, ardından tam kullanım. Bu geçiş sırasını bakım ekibinizle önceden netleştiririz; makineler sahadan aşamalı çekilirken üretime geçiş de aynı hızla ilerler. Ani bir geçiş, kontrol edilmemiş bir riskle üretime başlamak anlamına gelebilir, bunu önermeyiz.",
            },
            {
                soru: "Proje süresi ne kadar sürer, kesin bir tarih verebilir misiniz?",
                cevap:
                    "Kesin tarih, sahaya yapılan bir keşiften sonra netleşir — montajın kapsamı, kullanılacak makine sayısı ve vardiya kısıtları bu tarihi belirler. Planlı duruş döneminize denk getirdiğimizde proje genellikle daha hızlı ilerler çünkü vardiya kısıtı ortadan kalkar; hattınız çalışırken yürüyen bir projede ise süre biraz uzayabilir. Keşif sonrası size gerçekçi bir aralık veririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Fabrika ölçeğindeki tesislerde çelik konstrüksiyon montajının planlı duruş dönemiyle eşleştirilmesi sektör geneli bir uygulamadır; saha yerleşim şeması ve kademeli üretime geçiş kendi çalışma pratiğimizdir. Tesis adı, marka ve rakam kullanılmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Küçük Ekipli Tarım ve Silo Sahalarında Vardiyasız Randevu Planlaması",
        giris:
            "Denizli'nin tarım kesimi — Buldan'ın bağcılık işletmeleri, Çivril ve çevresindeki tahıl depolama tesisleri, çeşitli ilçelerdeki kurutma ve paketleme birimleri — sanayi tesislerinden farklı bir iş gücü düzenine sahiptir: burada vardiya kavramı neredeyse yoktur, işletme genellikle bir ya da birkaç kişi tarafından yönetilir ve platform talebi bu az sayıda kişinin müsaitliğine göre şekillenir. Bir tekstil fabrikasında vardiya amirini arayarak pencere bulabilirken, bir tarım işletmesinde muhatap doğrudan işletme sahibinin kendisidir ve onun tarla ya da bağ işiyle meşgul olduğu günlerde randevu mümkün olmaz. Bu sayfada, vardiyasız küçük ekipli tarım ve silo işletmelerinde randevunun nasıl kurulduğunu, mevsimsel yoğunluğun planlamaya etkisini ve sınırlı personel bulunan sahalarda işin nasıl aksamadan yürütüldüğünü anlatıyoruz.",
        maddeler: [
            {
                baslik: "Vardiya yerine tek kişinin takvimi",
                metin:
                    "Küçük bir tarım işletmesinde ya da silo tesisinde vardiya çizelgesi aramayız; belirleyici olan işletme sahibinin ya da sınırlı sayıdaki personelin günlük programıdır. Talep alırken bu yüzden 'hangi vardiya' değil, 'siz veya yetkili kişi hangi gün müsaitsiniz' sorusunu sorarız. Makine bu tek kişinin takvimine göre planlanır; büyük tesislerdeki vardiya değişim penceresi mantığı burada geçerli değildir.",
            },
            {
                baslik: "Bağ ve tarla işlerinin yoğun olduğu dönemler",
                metin:
                    "Buldan çevresindeki bağcılık işletmelerinde hasat ve budama gibi dönemsel yoğun işler, işletme sahibinin platform talebiyle ilgilenecek zamanını kısıtlayabilir. Bu dönemlerde randevuyu, tarla işinin görece sakinleştiği bir güne denk getirmek daha güvenilirdir. İşletme sahibinden yıllık iş takvimini genel hatlarıyla öğrenmek, hangi ayın daha uygun olduğunu baştan bilmemizi sağlar.",
            },
            {
                baslik: "Silo ve depolama tesislerinde hasat sonrası yoğunluk",
                metin:
                    "Tahıl depolama ve silo tesisleri, hasat sonrası dönemde normal günlere göre çok daha yoğun çalışır — dolum, tartım ve kayıt işleri önceliklidir. Bu yoğun dönemde platform talebi genellikle ertelenir; biz de bu gerçeği bilerek, hasat sonrası yoğunluğun bittiği bir dönemi öneririz. Acil bir bakım ihtiyacı varsa, yoğun dönemde de kısa bir pencere bulmaya çalışırız, ama bunu net biçimde konuşarak planlarız.",
            },
            {
                baslik: "Tek personelin izinli olduğu günün riski",
                metin:
                    "Bir ya da iki kişilik bir tarım işletmesinde, tek yetkilinin o gün izinli ya da başka bir işle meşgul olması, randevunun tamamen ertelenmesi anlamına gelir — yerine bakacak başka biri genellikle yoktur. Bu riski azaltmak için randevuyu birden fazla kez teyit ederiz: talep anında, sevkiyattan birkaç gün önce ve mümkünse sabahında kısa bir hatırlatmayla.",
            },
            {
                baslik: "Kırsal yol ve erişim süresinin plana etkisi",
                metin:
                    "Tarım işletmeleri ve silo tesisleri genellikle sanayi bölgesinin dışında, kırsal yollarla ulaşılan konumlardadır ve bu, sevkiyat süresini şehir içi taleplere göre uzatabilir. Randevu saatini belirlerken bu ek yol süresini hesaba katar, makinenin işletme sahibinin belirttiği saatte tam olarak sahada olmasını sağlarız; bu, özellikle tek kişilik işletmelerde beklemenin en aza indirilmesi için önemlidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İşletme tipine göre randevu belirleyicisi",
                paragraflar: [
                    "Denizli'nin tarım ve silo kesimindeki işletme tiplerine göre randevu belirleyicisini aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Yoğun dönem", "Randevu belirleyicisi", "Planlama önceliği"],
                    satirlar: [
                        ["Bağcılık işletmesi", "Hasat/budama dönemi", "İşletme sahibinin programı", "Sakin ay tercih edilir"],
                        ["Tahıl silo/depolama", "Hasat sonrası dolum", "Tesis yetkilisinin müsaitliği", "Yoğunluk sonrası dönem"],
                        ["Kurutma/paketleme birimi", "Sezon yoğunluğu", "Vardiya yok, tek yetkili", "Erken randevu teyidi"],
                        ["Küçük çiftlik/sera", "Ekim-dikim dönemi", "İşletme sahibinin kendisi", "Esnek gün seçimi"],
                    ],
                },
            },
            {
                baslik: "Yıllık iş takvimini genel hatlarıyla bilmek",
                paragraflar: [
                    "Tarım işletmeleriyle ilk görüşmede genellikle yıllık iş takvimini genel hatlarıyla sorarız — hangi ayların yoğun, hangilerinin görece sakin olduğunu. Bu bilgi kesin bir tarih vermez ama hangi dönemde randevu önermenin daha güvenilir olduğunu bize gösterir.",
                    "Bu ön bilgi, özellikle rutin bakım gibi acil olmayan işlerde randevuyu işletmenin en uygun olduğu döneme yerleştirmemizi sağlar; acil bir arıza durumunda ise dönem gözetmeksizin en yakın uygun zamanı değerlendiririz.",
                ],
            },
            {
                baslik: "Tekrarlı teyidin küçük işletmedeki önemi",
                paragraflar: [
                    "Büyük bir fabrikada bir kişinin izinli olması işi aksatmaz, ama tek ya da iki kişilik bir tarım işletmesinde durum farklıdır — yetkili kişi müsait değilse iş tamamen ertelenir. Bu yüzden randevuyu talep anında, sevkiyattan birkaç gün önce ve mümkünse sabahında kısa bir mesajla tekrar teyit ederiz.",
                    "Bu tekrarlı teyit, kırsaldaki işletmelerde en sık yaşanan aksamayı — unutulan ya da hatırlanmayan randevuyu — büyük ölçüde önler; birkaç dakikalık bir alışkanlık, boşa geçen bir günü engeller.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bağ işletmemizde vardiya yok, sadece ben varım; randevu nasıl belirlenir?",
                cevap:
                    "Sizin müsait olduğunuz güne göre. Sanayi tesislerindeki vardiya çizelgesi mantığı burada geçerli değildir; belirleyici olan sizin ya da işletmedeki tek yetkilinin o gün ne zaman müsait olacağıdır. Bize hangi günün uygun olduğunu söyleyin, makineyi o güne göre planlayalım. Randevuyu birden fazla kez teyit ederiz, çünkü küçük işletmelerde en sık yaşanan aksama unutulan randevudur.",
            },
            {
                soru: "Hasat döneminde çok yoğunuz, bu dönemde randevu almanızı önerir misiniz?",
                cevap:
                    "Acil bir ihtiyaç yoksa önermeyiz. Hasat ve dolum döneminde işletmenizin dikkati başka yerdeyken bir platform işiyle ilgilenmek zor olur. Rutin bakım gibi acil olmayan işleri, yoğunluğun bittiği bir sonraki döneme yazmanızı öneririz. Acil bir arıza varsa yoğun dönemde de en yakın uygun kısa pencereyi bulmaya çalışırız; bunu net biçimde konuşarak planlarız.",
            },
            {
                soru: "İşletmemiz sanayi bölgesinden uzak, kırsal bir yolda; bu sevkiyatı etkiler mi?",
                cevap:
                    "Etkiler ama planımıza dahildir. Kırsal yollarla ulaşılan konumlar, şehir içi taleplere göre daha uzun bir yol süresi gerektirir; bu ek süreyi randevu saatini belirlerken hesaba katarız. Makinenin sizin belirttiğiniz saatte tam olarak sahada olması için yola çıkış saatini buna göre ayarlarız; bu, özellikle tek kişilik işletmelerde beklemeyi en aza indirir.",
            },
            {
                soru: "Silo tesisimiz hasat sonrası çok yoğun; başka bir zaman önerir misiniz?",
                cevap:
                    "Evet, dolum ve tartım işlerinin en yoğun olduğu haftalarda platform işini önermeyiz; bu yoğunluğun bittiği bir dönemi öneririz. Acil bir bakım ihtiyacınız varsa yoğun dönemde de kısa bir pencere aramaya çalışırız, ama bu durumda önceliğinizin dolum işleri olduğunu bilerek planı esnek tutarız.",
            },
            {
                soru: "Randevu günü ben tarlada olabilirim, telefona bakamayabilirim; ne yaparsınız?",
                cevap:
                    "Bu riski baştan konuşuruz. Randevu saatini belirlerken, o saatte kesin ulaşılabilir olup olmayacağınızı sorar, gerekirse alternatif bir iletişim yolu (bir aile üyesi, bir çalışan) belirleriz. Sevkiyattan önce kısa bir hatırlatma mesajı göndeririz; bu, telefona anlık ulaşamasanız bile randevunun hafızanızda taze kalmasını sağlar.",
            },
            {
                soru: "Ekim-dikim dönemindeyiz, sera veya tarla işimiz için ne zaman uygun olursunuz?",
                cevap:
                    "Sizin belirlediğiniz güne göre planlarız; ekim-dikim döneminde işletmenizin yoğunluğunu biliyoruz ve size en uygun günü sormayı önceliğimiz sayarız. Kesin bir gün veremiyorsanız, o haftanın içinde esnek bir aralık üzerinden çalışır, size en yakın günden bir gün önce teyit isteriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Denizli'nin Buldan bağcılık ve çevre ilçelerdeki tahıl depolama/silo tesisleri barındırması kamuya açık coğrafi bilgidir; vardiyasız küçük işletme randevu düzeni ve mevsimsel planlama kendi çalışma pratiğimizdir. Tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Gece Vardiyasına Göre Enerji ve Aydınlatma Bakım Platformu",
        giris:
            "Denizli OSB ve sanayi bölgelerindeki aydınlatma direği, elektrik hattı ve tabela bakımı, gündüz vardiyasının en yoğun olduğu saatlerde yapılırsa hem trafik hem personel güvenliği açısından zorlaşır. Bu yüzden enerji ve aydınlatma bakım taleplerinin büyük kısmını gece vardiyasına ya da vardiyanın azaldığı geç saatlere yazarız — OSB içi yollar boşalır, aydınlatma direğine erişim için trafik kesintisi gerekmez ve iş, gündüz personel yoğunluğundan etkilenmeden ilerler. Bu sayfada, aydınlatma ve enerji bakım işlerinin gece vardiyasına göre nasıl planlandığını, gece çalışmanın kendi güvenlik gereksinimlerini ve OSB'nin ortak aydınlatma altyapısıyla tekil bir işletmenin kendi tesisi arasındaki koordinasyon farkını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Gündüz yoğunluğunun bakım işine etkisi",
                metin:
                    "Aydınlatma direği ya da elektrik hattı bakımı, genellikle bir yol kenarında ya da personel geçiş güzergâhında yapılır ve gündüz saatlerinde bu bölgede platform çalıştırmak hem trafiği yavaşlatır hem geçen personel için risk oluşturur. Bu yüzden mümkün olduğunda bu tür işleri gece vardiyasına ya da personel trafiğinin en düşük olduğu saatlere yazarız; gündüz zorunlu bir durum varsa çalışma alanını sıkı biçimde işaretleriz.",
            },
            {
                baslik: "Gece çalışmanın kendi hazırlığı",
                metin:
                    "Gece bakım işi, gündüzden farklı bir hazırlık gerektirir — çalışma alanı yeterli aydınlatmayla desteklenir, iletişim hattı netleştirilir ve gece vardiyasında görevli bir yetkilinin işin başında bulunması şart koşulur. Bu koşullar sağlanmadan gece işine başlamayız; bu, işin hızından çok güvenliğini önceliklendiren bir kuraldır. Gece vardiya sorumlusuyla önceden bir saat belirler, bu saate göre ekibimizi planlarız.",
            },
            {
                baslik: "OSB ortak aydınlatmasıyla tekil işletme farkı",
                metin:
                    "OSB'nin ana yollarındaki ortak aydınlatma direklerinin bakımı, OSB yönetimiyle koordine edilir ve genellikle birden fazla işletmeyi ilgilendiren geniş kapsamlı bir iştir. Buna karşılık bir işletmenin kendi bahçesindeki ya da bina cephesindeki aydınlatmanın bakımı, doğrudan o işletmenin yetkilisiyle kurulur ve daha küçük kapsamlıdır. Bu iki türü ayırt etmek, doğru muhatabı ve doğru zamanlamayı baştan belirlememizi sağlar.",
            },
            {
                baslik: "Elektrik hattı işlerinde ek güvenlik koordinasyonu",
                metin:
                    "Enerji hattına yakın çalışmalarda, platform operatörünün mesafe ve izolasyon kurallarına uyması yeterli değildir; ilgili elektrik hattının o an enerjili olup olmadığının da netleştirilmesi gerekir. Bu bilgi, tesisin elektrik sorumlusundan ya da OSB'nin teknik biriminden alınır ve iş, bu teyit olmadan başlamaz. Bu ek koordinasyon adımı, işin süresini biraz uzatabilir ama güvenlik açısından atlanmaz.",
            },
            {
                baslik: "Toplu tabela ve aydınlatma turunun kurulması",
                metin:
                    "Bir OSB'de ya da sanayi bölgesinde birden fazla işletmenin tabela ve aydınlatma bakımı aynı gece penceresine sığdırılabilir — bu, nakliye maliyetini bölmenin yanı sıra gece vardiyasının verimli kullanılmasını da sağlar. Komşu işletmelerin taleplerini aynı geceye toplamak için, her adresin bakım kapsamını ve tahmini süresini önceden netleştirir, sırayı gece boyunca akacak şekilde kurarız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bakım tipine göre uygun zaman ve muhatap",
                paragraflar: [
                    "Enerji ve aydınlatma bakım işlerinin tipine göre uygun zamanı ve muhatabı aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Bakım tipi", "Uygun zaman", "Ek güvenlik koşulu", "Muhatap"],
                    satirlar: [
                        ["OSB ortak yol aydınlatması", "Gece, düşük trafik", "OSB teknik teyidi", "OSB yönetimi"],
                        ["İşletme cephe/tabela aydınlatması", "Gece ya da mesai dışı", "İşletme onayı", "İşletme yetkilisi"],
                        ["Elektrik hattı yakını iş", "Hattın enerjisiz olduğu saat", "Enerji kesintisi teyidi", "Elektrik sorumlusu"],
                        ["Toplu tabela/aydınlatma turu", "Gece boyunca sıralı", "Her adresin ayrı onayı", "Birden fazla yetkili"],
                    ],
                },
            },
            {
                baslik: "Gece vardiya sorumlusuyla erken temas",
                paragraflar: [
                    "Gece bakım talebi aldığımızda önce gece vardiyasında kimin görevli olacağını netleştiririz — gündüz idari personelle yapılan bir görüşme, gece sahada kimin yetkili olduğunu göstermez. Bu netleşme sağlanmadan gece işi planlanmaz.",
                    "Gece vardiya sorumlusuyla kurulan iletişim, iş başında ve sonunda doğrulamanın hızlı yapılmasını sağlar; bu kişi işin başında çalışma noktasını gösterir, sonunda kontrol eder.",
                ],
            },
            {
                baslik: "Enerji kesintisi teyidinin zorunluluğu",
                paragraflar: [
                    "Elektrik hattına yakın bir bakım işinde, hattın enerjili olup olmadığının teyidi olmadan platform o bölgeye yaklaşmaz. Bu teyit, tesisin elektrik sorumlusundan ya da OSB'nin teknik biriminden yazılı ya da sözlü olarak alınır ve iş başlamadan önce netleşir.",
                    "Bu adım işin süresini biraz uzatsa da, enerji hattı yakınında güvenlik açısından atlanamayacak tek koşuldur; müşterilerimize bu süreyi baştan açıkça anlatırız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Aydınlatma direğimizin bakımını gündüz mü gece mi yapmalıyız?",
                cevap:
                    "Mümkünse gece ya da personel trafiğinin en düşük olduğu saati öneririz. Gündüz saatlerinde bu tür işler hem trafik yavaşlatır hem geçen personel için risk oluşturur. Gece çalışmanın kendi hazırlığı vardır — yeterli aydınlatma, net iletişim ve gece vardiyasında görevli bir yetkilinin işin başında bulunması. Bu koşullar sağlandığında gece çalışması hem daha güvenli hem daha hızlı ilerler.",
            },
            {
                soru: "Elektrik hattına yakın bir işimiz var, güvenli mi?",
                cevap:
                    "Doğru hazırlıkla evet. Hattın o an enerjili olup olmadığının teyidi olmadan işe başlamayız; bu teyidi tesisin elektrik sorumlusundan ya da OSB'nin teknik biriminden alırız. Bu ek koordinasyon adımı işin süresini biraz uzatabilir ama güvenlik açısından atlanmaz; bunu size baştan açıkça söyleriz.",
            },
            {
                soru: "OSB'nin ortak aydınlatma direğinde mi, kendi işletmemizin aydınlatmasında mı fark var?",
                cevap:
                    "Evet, önemli bir fark var. OSB'nin ana yollarındaki ortak direklerin bakımı OSB yönetimiyle koordine edilir ve genellikle birden fazla işletmeyi ilgilendirir; bu, daha geniş kapsamlı bir süreçtir. Kendi bahçenizdeki ya da bina cephenizdeki aydınlatmanın bakımı ise doğrudan sizinle kurulur ve daha hızlı ilerler. Talebinizi iletirken hangi tür olduğunu belirtmeniz, doğru muhatabı baştan bulmamızı sağlar.",
            },
            {
                soru: "Komşu işletmelerle aynı gece tabela bakımı yaptırabilir miyiz?",
                cevap:
                    "Evet, bu nakliye maliyetini ve gece vardiyasının verimini artıran bir yöntemdir. Her işletmenin bakım kapsamını ve tahmini süresini önceden netleştirir, sırayı gece boyunca akacak şekilde kurarız. Yapmanız gereken, komşu işletmelerle birlikte talebinizi bize iletmeniz; sıralamayı ve geçiş sürelerini biz planlarız.",
            },
            {
                soru: "Gece vardiyamızda kimin yetkili olduğunu bilmiyoruz, ne yapmalıyız?",
                cevap:
                    "Bunu bize sormanıza gerek yok, ama işletme içinde netleştirilmesi gerekir — gündüz idari personelle yapılan bir görüşme, gece sahada kimin yetkili olduğunu göstermez. Gece vardiya sorumlunuzu belirleyip bize iletmeniz, planlamanın ilk adımıdır. Bu netleşme sağlanmadan gece işini planlamayız, çünkü işin başında ve sonunda doğrulama yapacak kimse olmayabilir.",
            },
            {
                soru: "Acil bir aydınlatma arızası var, gece bekleyemez; hemen gelebilir misiniz?",
                cevap:
                    "Acil durumlarda gece-gündüz ayrımı yapmadan en yakın uygun zamanı değerlendiririz. Ancak elektrik hattı yakınında bir arızaysa, aciliyet güvenlik teyidini atlatmaz — enerji durumunu netleştirmeden işe başlamayız. Acil talebinizi ilettiğinizde, hem hızlı hem güvenli bir çözüm için gerekli teyidi en kısa sürede alır, işi başlatırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Denizli OSB'nin ortak aydınlatma altyapısına sahip olması sektör geneli bilgidir; gece vardiyasına göre bakım planlaması ve enerji kesintisi teyit süreci kendi çalışma pratiğimizdir. Tesis adı, marka ve rakam kullanılmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Vardiyaya Göre Operatörlü / Operatörsüz Platform Kiralama Kararı",
        giris:
            "Denizli'deki vardiyalı sanayi tesislerinde operatörlü mü yoksa operatörsüz mü kiralama yapılacağı kararı, çoğu zaman makinenin özelliğinden değil, işin yapılacağı vardiyada yetkili ve belgeli bir operatörün bulunup bulunmadığından çıkar. Gündüz vardiyasında platform kullanmaya yetkili personeli olan bir tesis, gece vardiyasında aynı yetkinliğe sahip olmayabilir; bu durumda operatörlü kiralama, vardiya boşluğunu kapatan tek pratik çözümdür. Bu sayfada, operatörlü ve operatörsüz kiralama kararının vardiya düzenine göre nasıl verildiğini, hangi vardiyada hangi seçeneğin daha uygun olduğunu ve operatörümüzün vardiya değişimlerinde nasıl koordine edildiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Karar noktası: kim, hangi vardiyada kullanacak",
                metin:
                    "Operatörlü ya da operatörsüz karar, işin niteliğinden önce 'makineyi kim, hangi vardiyada kullanacak' sorusuna bağlıdır. Belgeli ve deneyimli bir personeliniz tüm vardiyalarda sahadaysa operatörsüz kiralama maliyeti düşürür. Yetkili personel yalnızca belirli bir vardiyada bulunuyorsa, diğer vardiyalar için operatörlü kiralama ya da işi o vardiyaya kaydırma seçeneklerinden biri değerlendirilir.",
            },
            {
                baslik: "Gece vardiyasında operatör boşluğu",
                metin:
                    "Birçok tesiste belgeli platform operatörü gündüz vardiyasında görevlidir ve gece vardiyasında aynı yetkinlikte personel bulunmaz. Gece çıkan acil bir iş için bu durumda iki seçenek vardır: operatörlü kiralamayla işi bizim ekibimize bırakmak ya da işi belgeli personelin sahada olduğu bir sonraki vardiyaya kaydırmak. Acil ve ertelenemez bir işse operatörlü çözüm hızlıdır; planlı bir işse gündüz vardiyasına kaydırmak genellikle daha ekonomiktir.",
            },
            {
                baslik: "Operatörlü kiralamada vardiya değişiminin yönetimi",
                metin:
                    "İş birden fazla vardiyayı kapsayacak kadar uzarsa, operatörümüz vardiya değişiminde ya sahada kalır ya da bir sonraki operatörümüze kısa bir devir yapar — o ana kadar yapılan iş, kalan kısım ve varsa dikkat edilmesi gereken saha koşulu aktarılır. Bu devir, operatör değişse bile işin aynı standartla sürmesini sağlar ve tesisin vardiya akışını bozmaz.",
            },
            {
                baslik: "Karma model: bazı vardiyada operatörlü, bazısında değil",
                metin:
                    "Bazı tesislerde karma bir model uygularız — gündüz vardiyasında tesisin kendi yetkili personeli makineyi kullanır, gece vardiyasında ise bizim operatörümüz devreye girer. Bu model, tam gün operatörlü kiralamaktan daha ekonomiktir ve tesisin kendi personelinin deneyimini de kullanmasını sağlar. Karar, hangi vardiyada kimin yetkili olduğunun net biçimde bilinmesiyle mümkündür.",
            },
            {
                baslik: "Yetkinlik belgesinin vardiya bazında doğrulanması",
                metin:
                    "Operatörsüz kiralama talep edildiğinde, makineyi kullanacak personelin yeterlilik belgesini vardiya bazında doğrularız — çünkü aynı işletmede farklı vardiyalarda farklı personel görev alabilir ve her birinin belgesi ayrı ayrı kontrol edilmelidir. Bu doğrulama, hem güvenlik hem de sorumluluk açısından atlanmayan bir adımdır; belgesi olmayan bir vardiyaya operatörsüz makine teslim edilmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Vardiya durumuna göre operatör önerisi",
                paragraflar: [
                    "Tesisinizin vardiya ve personel durumuna göre operatörlü ya da operatörsüz kiralama önerisini aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Vardiya durumu", "Yetkili personel", "Önerilen model", "Maliyet etkisi"],
                    satirlar: [
                        ["Tüm vardiyalarda yetkili personel var", "Evet, her vardiyada", "Operatörsüz", "En düşük"],
                        ["Sadece gündüz vardiyasında yetkili var", "Kısmi", "Karma model", "Orta"],
                        ["Hiçbir vardiyada yetkili personel yok", "Hayır", "Operatörlü", "Daha yüksek ama güvenli"],
                        ["Tek seferlik/kısa iş", "Değişken", "Operatörlü öneriyoruz", "Öğrenme süresi yok"],
                    ],
                },
            },
            {
                baslik: "Karma modelin kurulması",
                paragraflar: [
                    "Karma model uygulanacaksa, önce hangi vardiyalarda tesisin kendi personelinin yetkili olduğunu netleştirir, kalan vardiyalar için operatör planlaması yaparız. Bu, tesisin hem kendi ekibinin deneyimini kullanmasını hem de boşluk kalan vardiyalarda güvenli bir çözüm bulmasını sağlar.",
                    "Karma model uzun süreli kiralamalarda özellikle avantajlıdır; vardiya bazında maliyet optimize edilirken güvenlik hiçbir vardiyada eksik kalmaz.",
                ],
            },
            {
                baslik: "Vardiya değişiminde operatör devri",
                paragraflar: [
                    "Operatörlü bir iş birden fazla vardiyayı kapsıyorsa, vardiya değişiminde kısa bir devir yaparız — tamamlanan kısım, kalan iş ve saha koşulları bir sonraki operatöre aktarılır. Bu devir sözlü olabileceği gibi, uzun işlerde yazılı kısa bir notla da desteklenir.",
                    "Bu devir düzeni, operatör değişse bile işin standardının düşmemesini sağlar ve tesisin vardiya akışını bozmadan işin sürmesine imkân verir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Gündüz vardiyamızda yetkili personelimiz var ama gece yok; ne öneriyorsunuz?",
                cevap:
                    "Karma model öneririz — gündüz vardiyasında sizin personeliniz makineyi kullanır, gece vardiyasında bizim operatörümüz devreye girer. Bu, tam gün operatörlü kiralamaktan daha ekonomiktir ve gündüz personelinizin deneyiminden de yararlanmanızı sağlar. Karar için tek gerekli bilgi, hangi vardiyalarda kimin yetkili olduğudur.",
            },
            {
                soru: "Operatörsüz kiralamak istiyoruz, personelimizin belgesini nasıl kontrol ediyorsunuz?",
                cevap:
                    "Makineyi kullanacak personelin yeterlilik belgesini vardiya bazında doğrularız — özellikle farklı vardiyalarda farklı kişiler görev alıyorsa, her birinin belgesi ayrı ayrı kontrol edilir. Bu, güvenlik ve sorumluluk açısından atlamadığımız bir adımdır; belgesi olmayan bir vardiyaya operatörsüz makine teslim etmeyiz.",
            },
            {
                soru: "Gece acil bir işimiz çıktı, belgeli operatörümüz yok; ne yapabiliriz?",
                cevap:
                    "Operatörlü kiralamayla işi bizim ekibimize bırakabiliriz; bu, acil ve ertelenemez işler için en hızlı çözümdür. İş ertelenebilir bir işse, gündüz vardiyasına kaydırmak genellikle daha ekonomiktir. Hangisinin sizin durumunuza uygun olduğunu ilk görüşmede birlikte değerlendiririz.",
            },
            {
                soru: "İşimiz birkaç vardiyayı kapsayacak, operatör her vardiyada aynı kişi mi olur?",
                cevap:
                    "Her zaman değil, ama vardiya değişiminde mutlaka bir devir yaparız — tamamlanan kısım, kalan iş ve saha koşulları bir sonraki operatörümüze aktarılır. Bu devir, operatör değişse bile işin aynı standartla sürmesini sağlar. Uzun işlerde bu devri kısa yazılı bir notla da destekleriz.",
            },
            {
                soru: "Operatörlü kiralamak operatörsüzden ne kadar farklı maliyette?",
                cevap:
                    "Fark, işin süresine ve vardiya kapsamına göre değişir; talep aşamasında size net bir rakam veririz. Kısa süreli ya da tek seferlik işlerde operatörlü kiralama, öğrenme süresi olmadan hemen başlamayı sağladığı için genellikle tercih edilir. Uzun süreli ve çok vardiyalı işlerde karma model, maliyeti optimize eden bir orta yol sunar.",
            },
            {
                soru: "Vardiya düzenimiz sık değişiyor, her seferinde operatör kararını yeniden mi vermeliyiz?",
                cevap:
                    "Değişen vardiya düzeninizi bize önceden bildirdiğiniz sürece, kararı her seferinde yeniden değerlendirmemiz sorun değildir. Düzenli çalıştığımız tesislerden güncel vardiya ve personel programını almayı tercih ederiz; bu program elimizde olduğunda hangi vardiyada operatörlü hangi vardiyada operatörsüz çalışacağımızı biz öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Vardiyalı sanayi tesislerinde belgeli operatörün her vardiyada bulunmayabileceği sektör geneli bir gerçekliktir; karma operatör modeli ve vardiya bazında belge doğrulaması kendi çalışma pratiğimizdir. Tesis adı, marka ve rakam kullanılmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Farklı Vardiya Saatlerindeki İşletmeleri Aynı Güne Bağlayan Çok Noktalı Rota Bakım Platformu",
        giris:
            "Denizli sanayi bölgesinde bir günde birden fazla adrese hizmet vermek, her adresin kendi vardiya düzenine sahip olması nedeniyle basit bir güzergâh planlamasından daha karmaşıktır — bir tekstil tesisinin vardiya değişim saati, bir mermer atölyesinin kesim programı ve bir küçük işletmenin sahibinin müsaitliği aynı gün içinde birbirinden bağımsız çalışır. Bizim çok noktalı rota planlamamız, yalnızca adresler arası mesafeyi değil, her adresin vardiya ya da müsaitlik penceresini de hesaba katar; bu sayede tek bir makine, aynı günde farklı vardiya düzenindeki birkaç işletmeye sırayla hizmet verebilir. Bu sayfada, farklı vardiya saatlerindeki işletmelerin nasıl aynı güne bağlandığını, sıralamanın nasıl kurulduğunu ve bir adresteki gecikmenin diğerlerini nasıl etkilediğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Her adresin kendi vardiya penceresi",
                metin:
                    "Çok noktalı bir günde ilk adım, her adresin kendi vardiya ya da müsaitlik penceresini ayrı ayrı öğrenmektir — bir tesis vardiya değişiminde uygun, bir diğeri sadece hafta sonu, bir üçüncüsü ise işletme sahibinin müsait olduğu herhangi bir saatte uygun olabilir. Bu bilgi toplanmadan kurulan bir rota, bir adreste bekleme ya da erişememe riskiyle karşılaşır.",
            },
            {
                baslik: "Sıralamanın mesafe ve pencereye göre kurulması",
                metin:
                    "Rota sıralaması yalnızca mesafeye göre değil, hangi adresin hangi saatte uygun olduğuna göre kurulur. Vardiya değişim saati dar olan bir adres, o pencereye tam denk gelecek şekilde sıraya yerleştirilir; daha esnek bir pencereye sahip adresler ise günün diğer boşluklarını doldurur. Bu, mesafe açısından en kısa rotanın değil, en az bekleme yaratan rotanın tercih edilmesi anlamına gelebilir.",
            },
            {
                baslik: "Bir adresteki gecikmenin zincirleme etkisi",
                metin:
                    "Çok adresli bir günde bir adresteki beklenmedik gecikme (trafik, sahada ek bir sorun), sıradaki randevuları geciktirebilir. Bu riski azaltmak için her durak arasına makul bir geçiş payı bırakırız ve dar pencereli adresleri günün başına, esnek pencereli adresleri sona yerleştiririz. Bir gecikme yaşandığında, etkilenen adresleri erken uyarır, alternatif bir saat öneririz.",
            },
            {
                baslik: "Komşu işletmelerin taleplerini birleştirmek",
                metin:
                    "Denizli'deki OSB ve sanayi bölgelerinde birbirine yakın konumlu işletmelerin taleplerini aynı güne toplamak, nakliye maliyetini böler ve makinenin günü verimli doldurmasını sağlar. Bu birleştirme için, komşu işletmelerin taleplerini ve tercih ettikleri saatleri önceden bilmemiz gerekir; sıralamayı biz kurar, her işletmeye kendi payına düşen saat aralığını net biçimde bildiririz.",
            },
            {
                baslik: "Farklı sektörlerin aynı güne dizilmesi",
                metin:
                    "Bir günün içinde bir tekstil tesisinin vardiya arası bakımı, bir mermer atölyesinin kesim programına bağlı erişimi ve bir küçük işletmenin esnek randevusu aynı makineyle sırayla yapılabilir. Bu, farklı sektörlerin farklı zamanlama mantıklarını aynı anda yönetmeyi gerektirir; her adresin kendi kısıtını ayrı ayrı bilmek, bu çeşitliliği tek bir tutarlı güne dönüştürmenin tek yoludur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Adres tipine göre rota içindeki konum",
                paragraflar: [
                    "Farklı adres tiplerinin rota içindeki tipik konumunu ve pencere darlığını aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Adres tipi", "Pencere darlığı", "Rota içi konum", "Gecikme toleransı"],
                    satirlar: [
                        ["Vardiya değişimi bağımlı tesis", "Dar", "Kesin saatte, öncelikli", "Düşük"],
                        ["Kesim programı bağımlı atölye", "Orta", "Programa göre esnek", "Orta"],
                        ["Küçük işletme, esnek randevu", "Geniş", "Gün sonuna doğru", "Yüksek"],
                        ["Gece vardiyalı depo/lojistik", "Dar, farklı zaman dilimi", "Ayrı gece turu", "Düşük"],
                    ],
                },
            },
            {
                baslik: "Geçiş payının hesaplanması",
                paragraflar: [
                    "Her durak arasına bırakılan geçiş payı, sadece yol mesafesine değil, bir önceki adresteki işin ne kadar süreceğine dair tahmine de dayanır. Basit ve tek noktalı işlerde pay kısa tutulur; karmaşık ya da belirsiz kapsamlı işlerde pay geniş tutulur.",
                    "Bu hesaplama, rotanın gerçekçi kalmasını sağlar; aşırı iyimser bir program, ilk adresteki küçük bir gecikmeyle tüm günü bozabilir.",
                ],
            },
            {
                baslik: "Birleştirme talebinin nasıl iletileceği",
                paragraflar: [
                    "Komşu işletmelerin taleplerini birleştirmek isteyen müşterilerimizden, işlerini ve tercih ettikleri saatleri birlikte bildirmelerini isteriz — ayrı ayrı gelen talepler, birleştirme fırsatını bazen kaçırabilir çünkü zamanlaması çakışmayabilir.",
                    "Talepler birlikte geldiğinde, sıralamayı ve geçiş paylarını biz kurar, her işletmeye kendi payına düşen saat aralığını ve toplam maliyet paylaşımını net biçimde bildiririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Aynı gün üç farklı tesise gitmeniz gerekiyor, her birinin vardiyası farklı; bu mümkün mü?",
                cevap:
                    "Mümkün, Denizli'deki sanayi bölgelerinde sık uyguladığımız bir modeldir. Her tesisin vardiya penceresini önceden öğrenir, sıralamayı hem mesafe hem pencere darlığına göre kurarız — dar pencereli tesis kesin saatinde, esnek pencereli tesis günün diğer boşluğunda ziyaret edilir. Üç adresin bilgisini paylaşın, size tek bir günlük çizelge çıkaralım.",
            },
            {
                soru: "Bir adreste iş uzarsa, sıradaki randevum kaçar mı?",
                cevap:
                    "Bu riski azaltmak için her durak arasına makul bir geçiş payı bırakırız ve belirsiz kapsamlı işlerin ardına daha geniş bir pay koyarız. Yine de beklenmedik bir gecikme olursa, etkilenen sıradaki adresleri erken uyarır, alternatif bir saat öneririz; sürpriz bir gecikmeyle karşı karşıya bırakmamaya çalışırız.",
            },
            {
                soru: "Komşu işletmelerle aynı gün hizmet almak istiyoruz, nasıl organize oluruz?",
                cevap:
                    "İşlerinizi ve tercih ettiğiniz saatleri birlikte bize bildirin; ayrı ayrı gelen talepler bazen birleştirme fırsatını kaçırabilir. Talepler birlikte geldiğinde sıralamayı ve geçiş paylarını biz kurarız, her işletmeye kendi payına düşen saat aralığını ve toplam maliyet paylaşımını net biçimde bildiririz. Bu model, tek tek hizmet almaktan belirgin ölçüde ekonomiktir.",
            },
            {
                soru: "Gece vardiyalı bir depo ile gündüz çalışan bir atölyeyi aynı güne koyabilir misiniz?",
                cevap:
                    "Genellikle ayrı turlara ayırırız — gece vardiyalı depo, kendi gece penceresine göre planlanan ayrı bir turda ziyaret edilir; gündüz atölyeler ise kendi gündüz turunda. İkisini tek bir sürekli güzergâha bağlamak, farklı zaman dilimleri arasında verimsiz bir bekleme yaratır; bu yüzden bu tür karma taleplerde iki ayrı tur öneririz.",
            },
            {
                soru: "Rotadaki her adresin kesin saatini önceden söyleyebilir misiniz?",
                cevap:
                    "Dar pencereli adresler için evet, kesin bir saat veririz — çünkü bu adreslerin penceresi zaten dardır ve kesinlik gerektirir. Esnek pencereli adresler içinse genellikle bir saat aralığı veririz, çünkü bu adresler günün diğer bölümlerini doldurmak için kullanılır ve kesin saat, önceki adreslerin seyrine bağlı olarak küçük ölçüde kayabilir.",
            },
            {
                soru: "Tek bir adresimiz var ama vardiyamız dar bir pencere sunuyor; yine de rota mantığı geçerli mi?",
                cevap:
                    "Tek adres için de aynı titizlikle çalışırız — dar bir pencereniz varsa makineyi bir önceki işin bitişine göre erken konumlandırır, pencere açılır açılmaz işe başlarız. Rota mantığı özellikle çok adresli günlerde belirginleşir, ama tek adresli dar pencereli talepler de aynı planlama disipliniyle ele alınır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Denizli sanayi bölgesindeki işletmelerin farklı vardiya ve üretim programlarına sahip olması sektör geneli bilgidir; çok noktalı rota planlaması ve pencereye göre sıralama kendi çalışma pratiğimizdir. Tesis adı, marka ve rakam kullanılmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Sınırlı İş Gücüyle Zor Zemin ve Arazi Platform Kiralama",
        giris:
            "Denizli'nin sanayi bölgeleri dışındaki kırsal ve arazi sahalarında — bir bağ kenarındaki elektrik direği, bir tarım deposunun düz olmayan bahçesi, yeni açılan bir arazinin sınır çevresi — zor zemin koşulları, iş gücü kısıtıyla birlikte gelir. Bu tür sahalarda genellikle büyük bir bakım ekibi değil, bir ya da birkaç kişi bulunur ve makinenin zemine uygunluğu kadar, o kişinin işi yönlendirebilme kapasitesi de planlamayı belirler. Bu sayfada, zor zemin ve arazi sahalarında platform kiralamanın hem teknik (zemin türü, eğim, erişim) hem iş gücü (kimin sahada olacağı, ne zaman ulaşılacağı) boyutunu birlikte nasıl ele aldığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Zemin türünün makine seçimine etkisi",
                metin:
                    "Toprak, çakıl, hafif eğimli ya da düzensiz zeminlerde standart lastik tekerlekli platformlar yetersiz kalabilir; bu tür sahalarda paletli taban ve geniş destek ayaklarına sahip makineler tercih edilir. Zemin türünü ve varsa eğim derecesini talep aşamasında sorar, uygun makine sınıfını buna göre öneririz. Zemin aşırı yumuşak ya da bataklıksa, bunu dürüstçe söyler, alternatif bir erişim planı öneririz.",
            },
            {
                baslik: "Sahada tek kişinin işi yönlendirmesi",
                metin:
                    "Kırsal ve arazi sahalarında genellikle işi yönlendirecek tek bir kişi bulunur — işletme sahibi, bir bakım görevlisi ya da bir çiftçi. Bu kişi o gün sahada değilse, makine doğru zemine ulaşsa bile çalışma noktasını gösterecek kimse kalmaz. Bu yüzden randevuyu bu tek kişiyle doğrudan kurar, sevkiyattan önce teyit ederiz.",
            },
            {
                baslik: "Arazi erişiminde yol ve zaman planlaması",
                metin:
                    "Kırsal sahalara erişim, sanayi bölgesindeki asfalt yollara göre daha uzun ve değişken sürebilir — toprak yol, mevsimsel çamur ya da dar geçitler sevkiyat süresini uzatabilir. Randevu saatini belirlerken bu ek süreyi hesaba katar, makinenin belirlenen saatte sahada olmasını sağlarız; bu, özellikle tek kişilik sahalarda beklemeyi en aza indirir.",
            },
            {
                baslik: "Destek ekipmanı ve önceden hazırlık",
                metin:
                    "Zor zeminli bir sahada, platformun destek ayaklarını sağlam biçimde konumlandırmak için bazen ek takoz ya da zemin plakası gerekebilir. Bu ihtiyacı önceden tahmin etmek için zemin fotoğrafı isteriz; sahaya varıldığında eksik bir ekipmanla karşılaşmamak, işin ilk seferde tamamlanmasını sağlar.",
            },
            {
                baslik: "Mevsimsel zemin değişikliğinin planlamaya etkisi",
                metin:
                    "Aynı arazi parçası, yağışlı mevsimde çamurlu ve zayıf zeminliyken kurak mevsimde sert ve erişilebilir olabilir. Bu değişkenlik nedeniyle, mevsime bağlı bir sahada randevu öncesi kısa bir zemin teyidi isteriz — özellikle son günlerde yağış olduysa. Bu teyit, sahada makinenin batması ya da geri çevrilmesi gibi bir sorunu önceden önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin tipine göre makine ve hazırlık önerisi",
                paragraflar: [
                    "Kırsal ve arazi sahalarında sık karşılaştığımız zemin tiplerini ve önerilen hazırlığı aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Önerilen taban", "Ek hazırlık", "Mevsimsel risk"],
                    satirlar: [
                        ["Sert toprak, düz", "Standart lastik", "Genellikle gerekmez", "Düşük"],
                        ["Çakıllı, hafif eğimli", "Paletli, destek ayaklı", "Zemin fotoğrafı", "Orta"],
                        ["Yumuşak toprak, yağış sonrası", "Paletli, geniş destek", "Zemin plakası", "Yüksek"],
                        ["Dar arazi yolu erişimi", "Kompakt şase", "Erken yol keşfi", "Mevsime bağlı"],
                    ],
                },
            },
            {
                baslik: "Tek yetkiliyle randevunun kesinleştirilmesi",
                paragraflar: [
                    "Kırsal sahalarda işi yönlendirecek kişi genellikle tek kişidir ve bu kişinin o gün sahada olacağından emin olmak, kentsel bir sahaya göre daha kritiktir — yerine bakacak başka biri genellikle yoktur. Randevuyu talep anında ve sevkiyattan bir gün önce olmak üzere iki kez teyit ederiz.",
                    "Bu tekrarlı teyit, kırsal sahalarda en sık yaşanan aksamayı — unutulan randevu ya da beklenmedik bir tarla işiyle çakışma — büyük ölçüde önler.",
                ],
            },
            {
                baslik: "Zemin fotoğrafının önceden istenmesi",
                paragraflar: [
                    "Zor zeminli bir talep aldığımızda, mümkünse sahadan birkaç fotoğraf isteriz — zeminin dokusu, eğim varsa derecesi, erişim yolunun genişliği. Bu fotoğraflar, doğru makine sınıfını ve gerekebilecek ek ekipmanı sahaya gitmeden belirlememizi sağlar.",
                    "Fotoğraf paylaşılamıyorsa, telefonda detaylı bir sözlü tarif isteriz; bu, belirsizliği tamamen ortadan kaldırmasa da, sahada büyük bir sürprizle karşılaşma riskini azaltır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Arazimiz düz değil, hafif eğimli ve toprak; hangi makineyi önerirsiniz?",
                cevap:
                    "Büyük olasılıkla paletli tabanlı ve destek ayaklı bir model öneririz — bu tür makineler düz olmayan ve toprak zeminlerde çalışmak için tasarlanmıştır, destek ayakları eğimi dengeler. Kesin öneri için zemin fotoğrafı ya da detaylı bir sözlü tarif isteriz; eğim ya da zemin yumuşaklığı belirli bir sınırı aşıyorsa bunu dürüstçe söyler, alternatif bir çözüm öneririz.",
            },
            {
                soru: "Sahamızda sadece ben varım, o gün tarlaya gitmem gerekirse ne olur?",
                cevap:
                    "Randevu ertelenir, çünkü sahada işi yönlendirecek başka kimse yoksa makine boş bekler ya da geri döner. Bu riski azaltmak için randevuyu talep anında ve sevkiyattan bir gün önce olmak üzere iki kez teyit ederiz. Programınızda bir değişiklik olasılığı varsa bunu talep aşamasında bildirmeniz, hem sizin hem bizim zamanınızı korur.",
            },
            {
                soru: "Son günlerde yağış oldu, zeminimiz çamurlu olabilir; sevkiyatı etkiler mi?",
                cevap:
                    "Etkileyebilir, bu yüzden mevsime bağlı sahalarda randevu öncesi kısa bir zemin teyidi isteriz. Zemin gerçekten yumuşaksa, paletli ve geniş destekli bir makineye geçebilir ya da zemin plakası gibi ek hazırlık önerebiliriz. Bu teyit olmadan sevkiyat yapmak, sahada makinenin batması gibi bir riski beraberinde getirir; bu yüzden bu adımı atlamayız.",
            },
            {
                soru: "Arazimize giden yol dar ve toprak; makine buraya ulaşabilir mi?",
                cevap:
                    "Çoğu zaman evet, ama yol genişliğini ve zeminini önceden bilmemiz gerekir. Erken bir yol keşfi (fotoğraf ya da detaylı tarif) yaparak kompakt bir şase gerekip gerekmediğini belirleriz. Yol aşırı darsa ya da mevsimsel olarak geçilemez durumdaysa, bunu size baştan söyler, alternatif bir erişim noktası ya da farklı bir sevkiyat aracı öneririz.",
            },
            {
                soru: "Destek ayakları için ek bir hazırlık gerekir mi?",
                cevap:
                    "Zemin türüne bağlı. Sert ve düz zeminlerde genellikle ek hazırlık gerekmez; yumuşak ya da düzensiz zeminlerde destek ayaklarının sağlam konumlanması için takoz ya da zemin plakası gerekebilir. Bu ihtiyacı önceden tahmin etmek için zemin fotoğrafı isteriz; sahaya varıldığında eksik ekipmanla karşılaşmamak, işin ilk seferde tamamlanmasını sağlar.",
            },
            {
                soru: "Kırsal sahamıza ulaşım süresi ne kadar, randevu saatini nasıl belirliyorsunuz?",
                cevap:
                    "Kırsal yollara erişim, sanayi bölgesindeki asfalt yollara göre daha uzun ve değişken sürebilir. Randevu saatini belirlerken bu ek yol süresini hesaba katar, yola çıkış saatimizi buna göre ayarlarız; amacımız makinenin sizin belirlediğiniz saatte tam olarak sahada olmasıdır. Yolun mevsimsel durumu (çamur, erişim kapanması) hakkında bilginiz varsa, bunu bize önceden bildirmeniz planlamayı kolaylaştırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Denizli'nin sanayi bölgeleri dışındaki kırsal ve arazi sahalarının zemin çeşitliliği kamuya açık coğrafi bilgidir; zemin fotoğrafıyla ön değerlendirme ve tek yetkiliyle randevu teyidi kendi çalışma pratiğimizdir. Tesis adı, marka ve rakam kullanılmamıştır.",
    },
    "hizmet:makasli-platform-kiralama": {
        h1: "Üç Vardiyalı Tekstil Üretiminde Makaslı Platform Kiralama",
        giris:
            "Denizli'nin büyük dokuma, örme ve apre tesislerinde üretim genellikle üç vardiya halinde sürer: 07:00-15:00, 15:00-23:00 ve 23:00-07:00. Makaslı platform gerektiren işler — tavan aydınlatma değişimi, havalandırma kanalı temizliği, çatı altı bakım — bu kesintisiz düzende üretim hattını durdurmadan yapılmalı; makinenin salonun ortasına girip bir tezgahın önünde durması, o tezgahta çalışan operatörün işini doğrudan etkiler. Bu yüzden makaslı platform kiralamayı tek başına bir makine teslimi değil, vardiya programına oturan bir iş planı olarak ele alıyoruz: hangi vardiyada hangi bölümün nispeten sakin olduğunu, vardiya devir teslim saatinde kaç dakikalık bir boşluk oluştuğunu ve gece vardiyasında sahada kimin bulunacağını önceden sorarız. Bu sayfada, üç vardiyalı tekstil üretiminde makaslı platform kiralamanın vardiya bazlı planlama, gürültü/vibrasyon kısıtı ve iş emri takibi boyutlarını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Vardiya devir teslim penceresinde çalışma",
                metin:
                    "Vardiya değişim saatlerinde (07:00, 15:00, 23:00 civarı) tezgahlar birkaç dakikalığına durur ve salon nispeten boşalır; bu 15-20 dakikalık pencere, makaslı platformun bir tezgah sırasına girip kısa bir müdahale yapması için en uygun zamandır. Uzun süren işler için bu pencere yetmez, bu yüzden işin süresini önceden sorar, tek pencerede bitmeyecekse hangi vardiyanın en düşük üretim yoğunluğuna sahip olduğunu vardiya amirinden öğrenip ona göre planlarız.",
            },
            {
                baslik: "Gece vardiyasında erişim ve gürültü kısıtı",
                metin:
                    "23:00-07:00 vardiyasında salon aydınlatması genellikle daha düşük tutulur ve tesiste gündüze göre daha az personel bulunur; bu hem makinenin manevra alanı bulmasını hem de bir sorun çıktığında yardım istemeyi zorlaştırabilir. Gece vardiyasında çalışacaksak, sahada bizi karşılayacak bir yetkilinin adını ve iletişim bilgisini önceden alır, aydınlatmanın yetersiz olduğu bölümler için kendi taşınabilir aydınlatmamızı hazır bulundururuz.",
            },
            {
                baslik: "Vardiya amiriyle randevu koordinasyonu",
                metin:
                    "Üç vardiyalı bir tesiste işi onaylayan kişi genellikle vardiyaya göre değişir; gündüz vardiyasında görüştüğümüz yetkili, gece vardiyasında sahada olmayabilir. Bu yüzden randevuyu hangi vardiya amiriyle netleştirdiğimizi kayıt altına alır, iş devredilirse yeni vardiya amirine de aynı bilgiyi (giriş noktası, çalışılacak bölüm, tahmini süre) iletiriz; bu devir bilgisi eksik kalırsa makine sahada beklerken kimse işi onaylayamaz.",
            },
            {
                baslik: "Üretim hattını durdurmadan kapalı mekan çalışması",
                metin:
                    "Dokuma ve örme salonlarında tezgah sıraları arası dar olabilir, tavan yüksekliği apre veya boyahane bölümlerine göre değişir. Salonun tavan yüksekliğini ve tezgah aralığını önceden sorar, dar geçitlerde manevra yapabilecek kompakt bir makaslı platform öneririz; aksi halde makine sıraya giremez ve iş, üretim durdurulmadan tamamlanamaz.",
            },
            {
                baslik: "Vardiya bazlı iş emri takibi",
                metin:
                    "Bir iş tek vardiyada bitmeyip ikinci vardiyaya sarkarsa, hangi bölümün tamamlandığı, hangi bölümün kaldığı bilgisi bir sonraki vardiyaya sözlü değil yazılı olarak aktarılmalı. Bu yüzden çok bölümlü işlerde basit bir devir notu tutar, ikinci vardiyanın kaldığımız yerden devam etmesini sağlarız; bu, aynı işin baştan tekrar anlatılmasından kaynaklanan zaman kaybını önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Vardiyaya göre çalışma uygunluğu",
                paragraflar: [
                    "Üç vardiyalı bir tekstil tesisinde makaslı platform işleri için vardiyaya göre uygunluk ve kısıtları aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Vardiya", "Üretim yoğunluğu", "Kısıt", "Önerilen iş tipi"],
                    satirlar: [
                        ["07:00-15:00 (gündüz)", "Yüksek", "Tezgah trafiği yoğun", "Kısa, tek pencerelik müdahaleler"],
                        ["15:00-23:00 (akşam)", "Orta-yüksek", "Vardiya değişimi 23:00'e yakın", "Devir teslim öncesi planlanan işler"],
                        ["23:00-07:00 (gece)", "Orta", "Düşük aydınlatma, az personel", "Önceden onaylı, yetkili eşliğinde işler"],
                        ["Vardiya arası (15-20 dk)", "Düşük", "Süre kısıtlı", "Hızlı, tek noktalı müdahaleler"],
                    ],
                },
            },
            {
                baslik: "Vardiya amiriyle randevunun netleştirilmesi",
                paragraflar: [
                    "Üç vardiyalı tesislerde işi onaylayan kişi vardiyaya göre değiştiği için, randevuyu hangi vardiya amiriyle kurduğumuzu ve hangi vardiyada çalışacağımızı net biçimde kayıt altına alırız.",
                    "İş bir vardiyada bitmezse, devam eden vardiyanın amirine aynı bilgiyi (bölüm, süre, kalan iş) iletiriz; bu iletişim eksik kalırsa makine sahada onay beklerken durabilir.",
                ],
            },
            {
                baslik: "Gece vardiyasında aydınlatma ve personel azlığı",
                paragraflar: [
                    "Gece vardiyasında salon aydınlatması gündüze göre daha düşük tutulabilir ve tesiste daha az personel bulunur; bu, hem makinenin manevra alanını görmesini hem de bir sorunla karşılaşıldığında hızlı yardım almayı zorlaştırabilir.",
                    "Bu koşullara karşı, gece vardiyasında çalışacağımız işlerde taşınabilir aydınlatma hazır bulundurur, sahada bizi karşılayacak yetkilinin iletişim bilgisini önceden alırız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üç vardiyalı bir tesiste hangi vardiyada çalışmanızı önerirsiniz?",
                cevap:
                    "Kesin bir kural yok; bunu işin süresine ve tesisin hangi vardiyada nispeten daha az yoğun olduğuna göre belirleriz. Kısa, tek pencerelik işler için vardiya devir teslim saatindeki 15-20 dakikalık boşluk yeterli olabilir; uzun süren işler için vardiya amirinden en düşük üretim yoğunluğuna sahip vardiyayı sorar, ona göre planlarız.",
            },
            {
                soru: "Gece vardiyasında çalışmak ek bir ücret ya da koşul gerektirir mi?",
                cevap:
                    "Gece vardiyasında çalışmak, aydınlatma ve personel azlığı nedeniyle bazı ek hazırlıklar gerektirebilir — taşınabilir aydınlatma, sahada bizi karşılayacak bir yetkilinin belirlenmesi gibi. Bu hazırlıkları talep aşamasında konuşur, gerekiyorsa önceden planlarız; sürpriz bir ek ücretle karşılaşmamanız için bu detayları teklif aşamasında netleştiririz.",
            },
            {
                soru: "İşimiz tek vardiyada bitmezse ne olur?",
                cevap:
                    "İş devam eden vardiyaya sarkarsa, hangi bölümün tamamlandığı ve hangi bölümün kaldığı bilgisini bir devir notuyla bir sonraki vardiyaya aktarırız; böylece yeni vardiya, işi baştan anlatmaya gerek kalmadan kaldığımız yerden devam edebilir. Bu devir bilgisinin eksik kalması, hem zaman kaybına hem de aynı işin iki kez anlatılmasına yol açar.",
            },
            {
                soru: "Salonumuzda tezgah sıraları dar, makine buraya girebilir mi?",
                cevap:
                    "Çoğu zaman evet, ama tavan yüksekliğini ve tezgah aralığını önceden bilmemiz gerekir. Dar geçitlerde manevra yapabilecek kompakt bir makaslı platform öneririz; ölçüler aşırı darsa bunu size baştan söyler, alternatif bir makine sınıfı ya da farklı bir erişim noktası öneririz.",
            },
            {
                soru: "Vardiya amiri değişirse randevu bilgisi kaybolur mu?",
                cevap:
                    "Kaybolmaması için randevuyu hangi vardiya amiriyle kurduğumuzu kayıt altına alır, iş bir sonraki vardiyaya sarkarsa aynı bilgiyi yeni amire de iletiriz. Bu iletişim adımını atlamak, makinenin sahada onay beklerken durmasına neden olabilir; bu yüzden bu adımı her zaman uygularız.",
            },
            {
                soru: "Vardiya değişim saatinde makine üretim alanına engel olur mu?",
                cevap:
                    "Amacımız tam tersi — vardiya değişim penceresini, salonun zaten nispeten boşaldığı bir zaman dilimi olarak kullanmak. Bu pencere dışında, örneğin gündüz vardiyasının en yoğun saatinde çalışmak istemeyiz; işin süresine göre en uygun pencereyi vardiya amiriyle birlikte belirleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-15. Denizli tekstil sanayisinin üç vardiyalı çalışma düzeni (07:00-15:00 / 15:00-23:00 / 23:00-07:00) ve vardiya devir teslim uygulaması kamuya açık iş güvenliği ve sektörel bilgidir. Vardiya amiriyle randevu koordinasyonu ve devir notu tutma kendi çalışma pratiğimizdir. Tesis adı, marka ve rakam kullanılmamıştır.",
    },
    "hizmet:manlift-kiralama": {
        h1: "Mermer Ocağı ve Fabrikasında Vardiya Planlı Manlift Kiralama",
        giris:
            "Denizli'nin mermer ocak ve fabrikalarında çalışma düzeni tekstildeki üç vardiyadan farklıdır: çoğu tesis gündüz ağırlıklı tek uzun vardiya (07:00-19:00 gibi) ya da gündüz/gece olmak üzere iki vardiya halinde çalışır. Manlift gerektiren işler — blok istif alanlarında yükseklik erişimi, kesim tesisi çatı ve aydınlatma bakımı, açık saha cephe işleri — açık havada, forklift ve vinç trafiğinin yoğun olduğu bir sahada yapılır. Bu koşullar tekstil salonlarındaki kapalı mekan planlamasından farklı bir dikkat gerektirir: gündüz vardiyasında forklift ve blok taşıma trafiğiyle çakışmamak, gece vardiyası varsa yetersiz aydınlatmaya karşı önlem almak, mermer tozunun zemin ve makine üzerindeki etkisini hesaba katmak. Bu sayfada, mermer ocağı ve fabrikasında manlift kiralamanın vardiya bazlı saha trafiği, gece aydınlatması ve toz/zemin koşulları boyutlarını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Gündüz vardiyasında forklift ve blok taşıma trafiğiyle koordinasyon",
                metin:
                    "Mermer ocağı ve fabrikasında gündüz vardiyası, blok taşıma, forklift ve vinç hareketinin en yoğun olduğu dönemdir. Manliftin bu trafiğin kesiştiği bir güzergahta durması hem kendi manevrasını hem de blok taşıma işini yavaşlatabilir. Bu yüzden çalışacağımız noktayı ve saat aralığını, sahadaki forklift/vinç trafiğinin nispeten azaldığı bir zaman dilimine denk getirmeye çalışır, bunu saha yetkilisiyle önceden netleştiririz.",
            },
            {
                baslik: "Gece vardiyasında aydınlatma ve görüş koşulları",
                metin:
                    "Gece vardiyası uygulayan tesislerde saha aydınlatması, gündüze göre sınırlı olabilir; bu, hem manliftin yükseklik erişimi sırasında zemin ve çevre görüşünü hem de operatörün blok yığınlarına olan mesafeyi doğru değerlendirmesini etkiler. Gece çalışacağımız işlerde saha aydınlatmasının yeterliliğini önceden sorar, gerekiyorsa kendi taşınabilir aydınlatmamızı hazırlarız.",
            },
            {
                baslik: "Vardiyalar arası geçiş penceresinde sevkiyat",
                metin:
                    "İki vardiyalı çalışan tesislerde gündüz ve gece vardiyası arasındaki geçiş, genellikle kısa bir teslim-devir süresine sıkışır. Manlift sevkiyatını bu dar pencereye değil, vardiyanın başında ya da saha trafiğinin göreli sakin olduğu bir saate planlarız; aksi halde makine, vardiya değişiminin karmaşasında sahaya giriş için beklemek zorunda kalabilir.",
            },
            {
                baslik: "Mermer tozu ve zemin kayganlığının etkisi",
                metin:
                    "Kesim ve işleme alanlarına yakın sahalarda mermer tozu, özellikle nemli havada zemini kayganlaştırabilir; bu durum manliftin destek ayaklarının sağlam basmasını ve tekerlek tutuşunu etkileyebilir. Toz yoğun bir bölgede çalışacaksak, zemin durumunu önceden sorar, gerekirse zemin temizliği ya da destek plakası talep ederiz.",
            },
            {
                baslik: "Açık sahada hava koşullarının vardiya planlamasına etkisi",
                metin:
                    "Açık saha bir mermer ocağında rüzgar, yağış gibi hava koşulları, kapalı bir tekstil salonundan farklı olarak doğrudan çalışma güvenliğini etkiler. Özellikle yüksek rüzgarda manlift kullanımı riskli hale gelebilir; bu yüzden hava durumu elverişsizse, hangi vardiyada koşulların düzeleceğini saha yetkilisiyle birlikte değerlendirir, işi gerekirse erteleriz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Vardiyaya göre saha koşulları",
                paragraflar: [
                    "Mermer ocağı ve fabrikasında gündüz ve gece vardiyalarının manlift çalışması açısından farklı koşullarını aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["Vardiya", "Işık durumu", "Saha trafiği", "Önerilen önlem"],
                    satirlar: [
                        ["Gündüz (07:00-19:00 civarı)", "Doğal ışık, yeterli", "Forklift/vinç yoğun", "Trafiğin azaldığı saat dilimini seçmek"],
                        ["Gece (varsa)", "Sınırlı, tesis aydınlatmasına bağlı", "Düşük-orta", "Taşınabilir aydınlatma hazır bulundurmak"],
                        ["Vardiya geçiş penceresi", "Değişken", "Yoğun, kısa süreli", "Sevkiyatı bu pencereye denk getirmemek"],
                        ["Yağışlı/rüzgarlı gün", "Doğal ışık düşük", "Trafiğe bağlı", "İşi ertelemek ya da rüzgar geçene kadar beklemek"],
                    ],
                },
            },
            {
                baslik: "Blok taşıma trafiğiyle çakışmayan randevu",
                paragraflar: [
                    "Gündüz vardiyasında blok taşıma ve forklift hareketi sahanın büyük bölümünü işgal edebilir; manliftin bu trafikle aynı anda aynı güzergahta olması hem kendi işimizi hem de saha operasyonunu yavaşlatır.",
                    "Bu nedenle çalışma noktamızı ve saatimizi saha yetkilisiyle önceden konuşur, trafiğin nispeten sakinleştiği bir dilimi tercih ederiz; bu koordinasyon, hem sevkiyat süresini kısaltır hem de sahadaki diğer ekiplerin işini aksatmaz.",
                ],
            },
            {
                baslik: "Toz ve nem koşullarında zemin değerlendirmesi",
                paragraflar: [
                    "Kesim ve işleme alanlarına yakın bölgelerde biriken mermer tozu, nemli havada kayganlaşarak destek ayaklarının tutuşunu zayıflatabilir; bu, kapalı bir tekstil salonundaki düz beton zeminden farklı bir risktir.",
                    "Toz yoğun bir bölgede çalışacağımız bildirildiğinde, zemin durumunu telefonda ya da fotoğrafla önceden değerlendirir, gerekiyorsa zemin temizliği veya destek plakası talep ederiz; bu ön değerlendirme, sahada beklenmedik bir gecikmeyi önler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ocağımızda gece vardiyası var, manlift gece de çalışabilir mi?",
                cevap:
                    "Çalışabilir, ancak saha aydınlatmasının yeterli olup olmadığını önceden sormamız gerekir. Aydınlatma sınırlıysa kendi taşınabilir aydınlatmamızı hazırlarız; aydınlatma hiç yoksa ya da operatör görüş açısından güvenli çalışamayacağımızı düşünürsek, bunu size baştan söyler, gündüz vardiyasına kaydırmayı öneririz.",
            },
            {
                soru: "Gündüz vardiyasında forklift trafiği çok yoğun, manlift bu trafiğe engel olur mu?",
                cevap:
                    "Amacımız tam tersi — çalışma noktamızı ve saatimizi, forklift ve blok taşıma trafiğinin nispeten azaldığı bir zaman dilimine denk getirmek. Bunu saha yetkilisiyle önceden konuşur, mümkünse trafiğin yoğun olduğu güzergahlardan kaçınan bir konumlandırma yaparız.",
            },
            {
                soru: "Vardiya değişim saatinde sevkiyat yapabilir misiniz?",
                cevap:
                    "Genellikle tercih etmeyiz, çünkü vardiya geçiş penceresi kısa ve sahada trafik karmaşık olabilir. Sevkiyatı vardiyanın başına ya da trafiğin göreli sakin olduğu bir saate planlarız; bu, hem makinenin sahaya girişini kolaylaştırır hem de vardiya değişiminin karmaşasından etkilenmesini önler.",
            },
            {
                soru: "Kesim alanına yakın çalışacağız, mermer tozu makineye zarar verir mi?",
                cevap:
                    "Doğrudan zarar riski düşük, ama toz nemli havada zemini kayganlaştırarak destek ayaklarının tutuşunu etkileyebilir. Bu bölgede çalışacağımızı bildiğimizde zemin durumunu önceden sorar, gerekirse zemin temizliği ya da destek plakası talep ederiz.",
            },
            {
                soru: "Rüzgarlı bir günde manlift kullanımı güvenli mi?",
                cevap:
                    "Açık sahada yüksek rüzgar, manlift kullanımını riskli hale getirebilir. Hava durumu elverişsizse bunu size baştan söyler, saha yetkilisiyle birlikte hangi vardiyada ya da günde koşulların düzeleceğini değerlendirir, gerekirse işi erteleriz; güvenlik konusunda taviz vermeyiz.",
            },
            {
                soru: "Tesisimiz tek vardiya çalışıyor, planlama farklı mı olur?",
                cevap:
                    "Tek vardiyalı bir tesiste vardiyalar arası geçiş penceresi sorunu yaşanmaz, bu yüzden planlama daha çok gün içindeki saha trafiğine (blok taşıma, forklift yoğunluğu) göre şekillenir. Çalışma saatini, trafiğin nispeten sakinleştiği bir dilime denk getirmeye çalışır, bunu saha yetkilisiyle netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-15. Denizli mermer sanayisinde ocak ve fabrikaların gündüz ağırlıklı veya gündüz/gece iki vardiyalı çalışma düzeni kamuya açık sektörel bilgidir. Blok taşıma trafiğiyle koordinasyon, gece aydınlatma önlemi ve zemin değerlendirmesi kendi çalışma pratiğimizdir. Tesis adı, marka ve rakam kullanılmamıştır.",
    },
};
