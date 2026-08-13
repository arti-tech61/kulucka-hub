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
};
