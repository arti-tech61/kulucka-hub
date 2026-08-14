// ═══════════════════════════════════════════════════════════════════════════
// bozuyukplatform.org — ELLE YAZILMIŞ İÇERİK
//
// Profil: Depo ve sevkiyat operasyonlarına özel FORKLİFT AĞIRLIKLI platform
// kiralama. Açı: FORKLİFT+PLATFORM KARMA HİZMET — depo-lojistik tesislerinde
// ikili ihtiyaç (yükleme için forklift + tavan-raf erişimi için platform),
// tek firmadan iki makine tipi almanın koordinasyon avantajı, sevkiyat
// rampası çevresinde forklift ve platformun ortak çalışması, aynı sahada
// eşzamanlı iş güvenliği (koridor ayrımı, çarpışma riski yönetimi).
//
// ⚠️ Bozüyük/Bilecik depo-lojistik konusu bilecikplatform.com'da (raf montajı,
// konveyör devreye alma, OSB proje fazları — TEK makine/platform perspektifi)
// ve bozuyukplatform.net.tr'de (OSB yönetimi, çok sektörlü koordinasyon)
// başka mercekle işlendi. Bu dosyanın merceği İKİ MAKİNE TİPİNİN BİRLİKTE
// ÇALIŞMASI'dır; o dosyalarla ve birbirleriyle cümle/tablo/SSS örtüşmesi
// YASAK.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca doğrulanabilir bilgi; tesis/marka/rakam uydurulmadı.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const BOZUYUKPLATFORM_ORG: Record<string, BespokeIcerik> = {
    "bolge:bozuyuk-depo-ve-lojistik-sevkiyat-bolgesi": {
        h1: "Bozüyük'te Depo ve Sevkiyat Tesislerine Forklift ve Platform Birlikte Kiralama",
        giris:
            "Bir depo ya da sevkiyat tesisinde yüksek erişim ihtiyacını tek bir makine tipiyle karşılamaya çalışmak, çoğu zaman işin yarısını görür. Forklift, paletli yükü yerden alıp raf gözüne yerleştirir; ama raf traversinin bağlantısını kontrol etmek, tavan aydınlatmasını değiştirmek ya da sevkiyat kapısının üstündeki mekanizmaya bakmak forkliftin işi değildir — bunun için sepetli bir platform gerekir. Bozüyük'teki depo ve lojistik tesislerinin çoğunda bu iki ihtiyaç aynı anda, aynı hafta içinde ortaya çıkar ve genellikle iki ayrı tedarikçiden karşılanır: biri forklift getirir, diğeri platform. Biz bu ayrımı ortadan kaldırıyoruz — aynı tesise, aynı programda hem forklift hem platform sağlıyor, ikisinin sahada birbirine karışmadan çalışmasını da bizim sorumluluğumuza alıyoruz. Bu sayfa, bu ikili hizmetin Bozüyük'teki depo-lojistik bölgesinde nasıl kurulduğunu anlatıyor.",
        maddeler: [
            {
                baslik: "İki makinenin tek teklifte buluşması",
                metin:
                    "Bir depo işletmesi forklift ve platformu ayrı tedarikçilerden aldığında, iki ayrı sözleşme, iki ayrı teslim tarihi ve iki ayrı sahada koordinasyon sorumluluğu ortaya çıkar. Biz bu ihtiyacı tek bir teklifte birleştiriyoruz: işletmenin listesindeki forklift gerektiren kalemler ile platform gerektiren kalemler ayrı ayrı fiyatlanır ama tek bir sözleşmede toplanır ve iki makine aynı sevkiyatla, aynı gün sahaya gelir. Bu, işletmenin iki ayrı tedarikçiyle ayrı ayrı program kurma yükünü ortadan kaldırıyor.",
            },
            {
                baslik: "Yükleme ile tavan erişiminin gün içinde sıralanması",
                metin:
                    "Bir depoda forklift ve platform genellikle farklı işleri, ama aynı hacmi paylaşır. Gün planını kurarken önce forkliftin yoğun çalışacağı saatleri belirler, platform işlerini bu saatlerin dışına ya da forkliftin çalışmadığı koridorlara yerleştiririz. Örneğin sabah saatlerinde yoğun sevkiyat varsa forklift o saatlerde aktif olur, platform aynı saatte forkliftin kullanmadığı bir koridorda raf üstü kontrolüne başlar; öğleden sonra roller yer değiştirebilir. Bu sıralama, iki makinenin birbirini beklemeden ilerlemesini sağlıyor.",
            },
            {
                baslik: "Sevkiyat rampası çevresinde ortak çalışma alanı",
                metin:
                    "Sevkiyat rampası, bir depodaki en yoğun paylaşılan alandır: forklift araçları yükler-boşaltırken, rampa üstündeki kapı mekanizması, aydınlatma ve tabela sistemleri düzenli platform bakımı ister. Bu bölgede iki makineyi aynı anda çalıştırmak yerine, rampayı geçici olarak forklift trafiğine kapatıp platform işini hızlıca bitirmeyi ya da rampa sayısı birden fazlaysa bir rampayı platforma, diğerlerini forklifte ayırmayı tercih ediyoruz. Hangi yöntemin uygulanacağı, o günkü sevkiyat yoğunluğuna bağlı ve bunu depo sorumlusuyla birlikte kararlaştırıyoruz.",
            },
            {
                baslik: "Aynı sahada eşzamanlı çalışmanın güvenlik çerçevesi",
                metin:
                    "Forklift ve platformun aynı hacimde eşzamanlı çalışması, doğru ayrılmadığında ciddi bir çarpışma riski taşır — platformun destek ayakları ya da sepeti, forkliftin görüş açısının dışında kalabilir. Bizim kuralımız nettir: iki makine aynı koridorda aynı anda bulunmaz. Çalışma alanları fiziksel olarak ayrılır, forkliftin kullanacağı koridor ile platformun konumlandığı koridor arasında en az bir boş koridor bırakılır ya da geçici bariyerle sınırlanır. Bu ayrım sahaya girmeden önce, tek bir yerleşim planı üzerinde çizilir.",
            },
            {
                baslik: "Operatörler arası iletişim",
                metin:
                    "İki farklı makinenin operatörü aynı hacimde çalışırken, aralarındaki iletişim yazılı bir kurala bağlanmadığında sözlü uyarılar zamanla gevşer. Bizim uygulamamız, forklift ve platform operatörlerinin çalışma öncesinde birbirinin güzergâhını bilmesi ve bir makine konum değiştireceğinde diğerine haber vermesidir. Aynı firmadan geldikleri için bu iletişim, iki ayrı tedarikçinin operatörleri arasında kurulmaya çalışılan iletişimden daha hızlı ve daha güvenilir işliyor — ortak bir sahada, ortak bir prosedürle hareket ediyorlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Depo işlerinde forklift mi platform mu, yoksa ikisi mi",
                paragraflar: [
                    "Bozüyük'teki depo ve sevkiyat tesislerinde en sık karşılaştığımız iş tiplerini ve hangi makine kombinasyonunu önerdiğimizi aşağıda topladık.",
                ],
                tablo: {
                    basliklar: ["İş", "Forklift ihtiyacı", "Platform ihtiyacı", "Önerilen kurgu"],
                    satirlar: [
                        ["Palet yerleştirme", "Doğrudan", "Yok", "Yalnız forklift"],
                        ["Raf travers bağlantı kontrolü", "Yok", "Doğrudan", "Yalnız platform"],
                        ["Yeni raf sistemi montajı", "Alt kademe taşıma", "Üst kademe montaj", "İkisi birlikte, dilimli"],
                        ["Rampa kapı-aydınlatma bakımı", "Yok, ama trafik var", "Doğrudan", "Platform + rampa ayrımı"],
                        ["Hasar sonrası raf değişimi", "Malzeme taşıma", "Üst bağlantı işi", "İkisi birlikte, eşzamanlı değil"],
                    ],
                },
            },
            {
                baslik: "Tek tedarikçiden almanın somut karşılığı",
                paragraflar: [
                    "İki makineyi ayrı tedarikçilerden almanın en büyük görünmeyen maliyeti koordinasyon zamanıdır — depo sorumlusunun iki ayrı firmayla ayrı ayrı program kurması, ikisinin sahaya aynı gün gelmesini sağlaması ve ikisi arasındaki güvenlik ayrımını kendi başına yönetmesi gerekir. Tek tedarikçiden aldığınızda bu koordinasyon yükü bize geçer: iki makinenin gün planını biz kurarız, birbirlerine göre nerede duracaklarını biz belirleriz, sahadaki tek muhatap biz oluruz.",
                    "Bunun maliyete yansıyan tarafı da var: iki ayrı sevkiyat yerine tek sevkiyatla iki makineyi getirdiğimizde, taşıma payı bölünüyor. Bu fark küçük işlerde daha belirgin oluyor, çünkü sevkiyat payı toplam maliyetin görece büyük bir kısmını oluşturuyor.",
                ],
            },
            {
                baslik: "İki makinenin farklı zemin ve manevra ihtiyacı",
                paragraflar: [
                    "Forklift ve platform, aynı depoda çalışsa da zeminden farklı şeyler ister. Forklift sürekli hareket eder ve manevra genişliği ister; platform ise çoğu zaman bir noktada sabitlenir ve destek ayaklarının açılacağı düz bir alan ister. Aynı koridoru paylaşan iki makine için bu farkı önceden planlamak gerekiyor — platform bir noktada dururken forkliftin o noktayı geçici olarak dolanması, ya da forklift işini bitirene kadar platformun beklemesi gibi.",
                    "Bu planlamayı yaparken depo sorumlusundan istediğimiz tek şey, o günkü sevkiyat yoğunluğunun tahmini saatleridir. Bu bilgiyle iki makinenin gün içindeki hareketini, birbirini engellemeyecek şekilde önceden sıralıyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forklift ve platformu neden ayrı ayrı değil de birlikte teklif ediyorsunuz?",
                cevap:
                    "Çünkü depo işlerinin büyük bölümünde ikisi de gerekiyor ve ayrı ayrı alındığında koordinasyon yükü işletmeye kalıyor. Biz iki makineyi tek bir listeye yazıp tek bir sevkiyatla sahaya getirdiğimizde, hem taşıma payı bölünüyor hem de ikisinin gün içindeki sırasını biz kuruyoruz — sizin iki ayrı firmayla ayrı ayrı program kurmanıza gerek kalmıyor. İsterseniz yalnızca birini de kiralayabilirsiniz, ikisini birlikte almak zorunlu değil; ama ikisi de gerekiyorsa birlikte almak hem daha hızlı hem daha ucuz çıkıyor.",
            },
            {
                soru: "İki makine aynı depoda aynı anda çalışırken çarpışma riski nasıl önleniyor?",
                cevap:
                    "Temel kuralımız, iki makinenin aynı koridorda aynı anda bulunmamasıdır. Sahaya girmeden önce tek bir yerleşim planı çıkarır, forkliftin kullanacağı güzergâh ile platformun konumlanacağı koridoru fiziksel olarak ayırırız — aralarında en az bir boş koridor bırakır ya da geçici bariyer kullanırız. Operatörler aynı firmadan geldiği için birbirlerinin güzergâhını bilir ve konum değiştirdiklerinde önceden haber verirler. Bu ayrım, iki ayrı tedarikçinin operatörleri arasında kurulmaya çalışılan iletişimden daha hızlı işliyor çünkü ortak bir prosedürle hareket ediyorlar.",
            },
            {
                soru: "Sevkiyat rampamız gün boyu yoğun; platform işini ne zaman yapabiliriz?",
                cevap:
                    "İki yöntem uyguluyoruz. Birden fazla rampanız varsa, bir rampayı geçici olarak platform işine ayırıp diğerlerini forklift trafiğine açık bırakırız; bu, sevkiyatı tamamen durdurmadan platform işinin ilerlemesini sağlar. Tek rampanız varsa, platform işini sevkiyatın en seyrek olduğu saatlere — genellikle vardiya değişimi ya da öğle arası — sıkıştırırız. Hangi yöntemin sizin için uygun olduğunu, rampa sayınızı ve sevkiyat yoğunluğunuzu öğrendiğimizde birlikte kararlaştırırız.",
            },
            {
                soru: "Yeni raf sistemi kuruyoruz; forklift ve platform aynı anda mı çalışacak?",
                cevap:
                    "Genellikle eşzamanlı değil, dilimli çalışırız. Raf montajında alt kademe ayak ve travers montajı forkliftle desteklenen malzeme taşımayı gerektirirken, üst kademe bağlantılar platform ister; biz bu iki işi aynı dilimde değil, sıralı yürütürüz — bir dilimde alt kademe forkliftle tamamlanır, makine o dilimden çekilir, ardından platform üst kademeyi bitirir. Bu sıralama hem güvenlik hem de verimlilik açısından ikisini aynı anda aynı gözde çalıştırmaktan daha iyi sonuç veriyor.",
            },
            {
                soru: "İki makinenin operatörleri farklı firmalardan gelirse ne fark eder?",
                cevap:
                    "Fark, iletişimin hızında ortaya çıkıyor. Aynı firmadan gelen iki operatör, ortak bir sahada ortak bir prosedürle hareket eder ve birbirlerinin güzergâhını bilir; konum değiştireceklerinde önceden haber verirler çünkü aynı ekibin parçasıdırlar. Farklı firmalardan gelen operatörler arasında bu iletişim genellikle depo sorumlusu üzerinden dolaylı kurulur ve bu, sahada gecikme ya da yanlış anlaşılma riskini artırır. Bizim tek firmadan sağladığımız hizmette bu aracı katman ortadan kalkıyor.",
            },
            {
                soru: "Sadece platform kiralamak istiyoruz, forklift gerekmiyor. Yine de sizinle çalışabilir miyiz?",
                cevap:
                    "Elbette, ikisini birlikte almak zorunlu değil. Depo işlerinin bir kısmı yalnızca platform gerektirir — raf üstü kontrol, tavan aydınlatması, sprinkler bakımı gibi — ve bu işlerde forklift getirmemizin bir anlamı yok. Siz yalnızca platform ihtiyacınızı bildirdiğinizde, biz de yalnızca platform teklifi hazırlarız. İkili hizmetimiz, ihtiyacınız her ikisi de olduğunda devreye giren bir seçenek, zorunlu bir paket değil.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Depo ve sevkiyat tesislerinde forklift ve platformun farklı işlevlere hizmet ettiği ve genellikle ayrı tedarikçilerden temin edildiği sektör genel bilgisidir; tek teklifte birleştirme, koridor ayrımı ve operatörler arası koordinasyon firma saha pratiğidir. Tesis adı ve rakam verilmemiştir.",
    },

    "bolge:bilecik": {
        h1: "Bilecik'te Depo Tesislerine Forklift ve Platform Karma Hizmet",
        giris:
            "Bilecik il merkezi ve çevresindeki depo yapıları, çoğunlukla orta ölçeklidir ve bu ölçekte forklift ile platformu ayrı ayrı tedarik etmek, büyük bir depoya göre orantısız bir yük oluşturur — iki ayrı firmayla iki ayrı görüşme, iki ayrı teslim takvimi, küçük bir işletme için gereğinden fazla organizasyon demektir. Bilecik'teki depo işletmelerine verdiğimiz hizmette bu yükü tek elden karşılıyoruz: forklift gerektiren yükleme-boşaltma ve malzeme taşıma işleri ile platform gerektiren yüksek erişim işlerini aynı görüşmede, aynı teklifte topluyoruz. Bu sayfa, il merkezindeki orta ölçekli depo işletmelerinin bu karma ihtiyacını nasıl karşıladığımızı anlatıyor.",
        maddeler: [
            {
                baslik: "Orta ölçekli depoda tek elden ihtiyaç tespiti",
                metin:
                    "Küçük ve orta ölçekli bir depo işletmesi, kendi ihtiyacının forklift mi platform mu gerektirdiğini her zaman net ayıramaz — bir raf montajı talebinde hem alt kademe taşıma hem üst kademe bağlantı olduğunu fark etmemiş olabilir. Keşif sırasında bu ayrımı biz yapıyoruz: işletmenin listesindeki her kalemi gözden geçirip hangisinin forklift, hangisinin platform, hangisinin ikisini birden gerektirdiğini belirliyor ve teklife bu ayrımla yansıtıyoruz. Bu, işletmenin yanlış makine talep edip günü kaybetmesini önlüyor.",
            },
            {
                baslik: "Küçük depoda ardışık kullanım",
                metin:
                    "İl merkezindeki depoların çoğu, büyük lojistik merkezlerine göre daha dar hacimlere sahiptir ve bu, iki makinenin aynı anda çalışmasını hem güvenlik hem pratiklik açısından zorlaştırır. Bu ölçekte tercih ettiğimiz yöntem ardışık kullanımdır: önce forklift gelir, taşıma ve yerleştirme işlerini bitirir, ayrılır; ardından platform gelir, yüksek erişim işlerini tamamlar. İki makine aynı sevkiyatla gelse de sahada aynı anda bulunmaz — bu, dar hacimde manevra sıkışıklığını ortadan kaldırıyor.",
            },
            {
                baslik: "Karma yapı stoğunda değişen ihtiyaç",
                metin:
                    "Bilecik merkezindeki depolama alanları yalnızca klasik lojistik depolarından ibaret değildir — soğuk hava depoları, kuru gıda ambarları ve ticari işletmelerin kendi stok alanları da benzer bir karma ihtiyaç üretir. Soğuk hava deposunda forklift kullanımı düşük sıcaklığa uygun ekipman gerektirirken, platform işleri genellikle depo dışındaki ön alanda ya da giriş bölümünde yoğunlaşır. Bu farkı bildiğimiz için, depo tipine göre hangi makinenin nerede ve nasıl çalışacağını önceden planlıyoruz.",
            },
            {
                baslik: "Tekil taleplerde ikili hizmetin ekonomisi",
                metin:
                    "Küçük bir depo işletmesinin yılda birkaç kez ihtiyaç duyduğu forklift ve platform işlerini ayrı ayrı çağırmak, her seferinde ayrı bir sevkiyat maliyeti demektir. Bunun yerine işletmenin birikmiş kalemlerini — bir raf düzenlemesi, bir aydınlatma bakımı, bir tabela montajı — tek bir günde, tek bir sevkiyatla iki makineyle birlikte bitirmeyi öneriyoruz. Bu, hem sevkiyat payını böler hem de işletmenin yıl içinde birden fazla kez makine beklemesini önler.",
            },
            {
                baslik: "İl merkezinde tek muhatap avantajı",
                metin:
                    "İki farklı makine iki farklı firmadan geldiğinde, bir sorun çıktığında hangi firmanın sorumlu olduğunu ayırmak zaman alır. Bizim ikili hizmetimizde muhatap tektir — hem forklift hem platform işiyle ilgili herhangi bir konu aynı kişiye, aynı numaraya iletilir. Bu, özellikle iki makinenin işinin iç içe geçtiği durumlarda — örneğin bir raf montajında forkliftin taşıdığı malzemenin platformla monte edilmesi gerektiğinde — sorumluluk karmaşasını ortadan kaldırıyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bilecik'te depo tipine göre makine kurgusu",
                paragraflar: [
                    "İl merkezindeki farklı depo tiplerinde hangi makine kombinasyonunu ve hangi kullanım sırasını önerdiğimiz aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Depo tipi", "Baskın ihtiyaç", "İkincil ihtiyaç", "Kullanım sırası"],
                    satirlar: [
                        ["Klasik lojistik deposu", "Forklift", "Platform", "Ardışık, forklift önce"],
                        ["Soğuk hava deposu", "Forklift (özel ekipman)", "Platform (dış alan)", "Ayrı bölgelerde eşzamanlı"],
                        ["Kuru gıda ambarı", "Platform", "Forklift", "Ardışık, platform önce"],
                        ["Ticari işletme stok alanı", "Platform", "Yok", "Yalnız platform"],
                        ["Yeni depo iç montajı", "İkisi de yoğun", "—", "Dilimli, sıralı"],
                    ],
                },
            },
            {
                baslik: "Dar hacimde ardışık kullanımın mantığı",
                paragraflar: [
                    "Küçük ve orta ölçekli depolarda iki makineyi aynı anda çalıştırmak, manevra alanının kısıtlı olması nedeniyle çoğu zaman verimsizdir — biri diğerinin geçiş yolunu kapatır, ikisi birbirine göre sürekli konum değiştirmek zorunda kalır. Ardışık kullanımda bu sorun yaşanmaz: her makine kendi işini tam manevra özgürlüğüyle yapar, diğerinin geldiği anda ise saha tamamen ona ayrılmış olur.",
                    "Bunun bedeli, toplam sahada geçirilen sürenin bir miktar uzamasıdır — çünkü iki makine art arda çalışır, eşzamanlı değil. Ancak dar hacimde eşzamanlı çalışmanın getireceği manevra kaybı ve güvenlik riski, bu ek süreden daha pahalıya gelir; bu yüzden küçük depolarda ardışık kullanımı öneriyoruz.",
                ],
            },
            {
                baslik: "İşletmenin listesini önceden netleştirmenin faydası",
                paragraflar: [
                    "İkili hizmetin verimli çalışması için işletmenin elindeki bütün kalemleri — forklift gerektirsin gerektirmesin — tek bir listede önceden bize iletmesi önemlidir. Bu liste üzerinden hangi kalemin hangi makineyi gerektirdiğini biz ayırırız ve günün akışını buna göre kurarız. Liste eksik geldiğinde, sahada fark edilen ek bir ihtiyaç günün akışını bozabilir — örneğin platform işi sırasında forklift gerektiren bir kalem fark edilirse, bu ya günün sonuna eklenir ya da ayrı bir güne kayar.",
                    "Bu yüzden ilk görüşmede işletmeden istediğimiz şey basit: aklınıza gelen her kalemi, ne kadar küçük olursa olsun, listeye yazın. Hangi makineyi gerektirdiğine biz karar veririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Depomuz küçük; forklift ve platformu aynı anda içeri sokmak mantıklı mı?",
                cevap:
                    "Küçük ve orta ölçekli depolarda genellikle önermediğimiz bir düzen bu. Dar hacimde iki makine aynı anda manevra yapmaya çalıştığında biri diğerinin yolunu kapatır ve verim düşer. Bunun yerine ardışık kullanım öneriyoruz: önce forklift gelir, taşıma işlerini bitirir ve ayrılır; ardından platform gelir, yüksek erişim işlerini tam manevra özgürlüğüyle tamamlar. İki makine aynı sevkiyatla gelse de sahada aynı anda bulunmaz, bu da güvenliği ve hızı artırır.",
            },
            {
                soru: "Hangi işimizin forklift, hangisinin platform gerektirdiğini bilmiyoruz. Nasıl karar veriyoruz?",
                cevap:
                    "Bu ayrımı sizin yapmanız gerekmiyor, biz keşifte yapıyoruz. İşletmenizin elindeki bütün kalemleri — küçük büyük fark etmez — bir listede bize iletirseniz, her birini gözden geçirip hangisinin forklift, hangisinin platform, hangisinin ikisini birden gerektirdiğini belirleriz. Bazı kalemler, örneğin bir raf montajı, her ikisini de gerektirebilir; bu durumda hangi kısmın hangi makineyle yapılacağını da açıkça ayırıp teklife yazarız.",
            },
            {
                soru: "Soğuk hava deposunda forklift ve platform birlikte çalışabiliyor mu?",
                cevap:
                    "Çalışabiliyor ama farklı bölgelerde eşzamanlı olarak. Soğuk hava deposunda forklift, düşük sıcaklığa uygun özel ekipmanla depo içinde çalışırken, platform işleri genellikle depo dışındaki ön alanda ya da giriş-yükleme bölümünde yoğunlaşır — bu iki alan zaten fiziksel olarak ayrıdır. Depo içinde her iki makinenin de gerektiği bir iş varsa, düşük sıcaklıkta geçirilen süreyi kısaltmak için işleri sıraya koyar ve mümkün olduğunca hızlı tamamlarız.",
            },
            {
                soru: "Yılda birkaç kez ihtiyacımız oluyor; her seferinde ayrı ayrı mı çağırmalıyız?",
                cevap:
                    "Gerekmiyor, ve bunu önermiyoruz. Yıl içinde biriken küçük kalemlerinizi — bir raf düzenlemesi, bir aydınlatma bakımı, bir tabela montajı — tek bir listede toplayıp bize iletirseniz, hepsini tek bir sevkiyatla, forklift ve platformu birlikte getirerek tek günde bitiririz. Bu, her seferinde ayrı ayrı çağırmaktan hem daha ucuz hem daha az organizasyon yükü demek. Talebiniz büyüdükçe listeyi genişletebilir, küçük kalınca da tek seferde bitirebiliriz.",
            },
            {
                soru: "İki makineyle ilgili bir sorun çıkarsa kiminle görüşüyoruz?",
                cevap:
                    "Tek bir muhatapla — hem forklift hem platform işinizle ilgili herhangi bir konuyu aynı kişiye, aynı numaraya iletirsiniz. İki makine iki ayrı firmadan gelseydi, bir sorunun hangi firmanın sorumluluğunda olduğunu ayırmak zaman alırdı; özellikle işlerin iç içe geçtiği durumlarda — forkliftin taşıdığı malzemenin platformla monte edilmesi gibi — bu karmaşa büyürdü. Bizde bu ayrım yapılmıyor, sorumluluk tek elde.",
            },
            {
                soru: "Yalnızca bir kez, tek bir işimiz için forklift lazım; platforma ihtiyacımız yok. Yine de hizmet alabilir miyiz?",
                cevap:
                    "Elbette. İkili hizmet, ihtiyacınız her ikisini de kapsadığında devreye giren bir seçenek, zorunlu bir paket değil. Yalnızca forklift ya da yalnızca platform istediğinizde de aynı standartta hizmet veriyoruz; teklifiniz yalnızca talep ettiğiniz makine üzerinden hazırlanır. İleride ikinci bir ihtiyacınız çıkarsa, o zaman ikili hizmete geçmek her zaman mümkün.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bilecik merkezindeki depo yapı stoğunun orta ölçekli ve karma (lojistik, soğuk hava, gıda ambarı) olması genel gözleme dayalı bilgidir; ardışık kullanım modeli ve tek liste-tek keşif yaklaşımı firma saha pratiğidir. Tesis adı ve rakam verilmemiştir.",
    },

    "bolge:bilecik-osb": {
        h1: "Bilecik OSB'de Yeni Depo Projelerine Forklift ve Platform Birlikte",
        giris:
            "Bilecik OSB'de yükselen yeni depo yapıları, kabuk kapandığı andan itibaren forklift ve platformu aynı anda, yoğun biçimde talep eder: raf sistemi hem alt kademe taşımayla hem üst kademe montajla kurulur, mamul veya hammadde henüz depoya girmeden önce forklift operatörleri koridorları öğrenmeye başlar, platform ise tavan altındaki aydınlatma ve tesisat kalemlerini bitirmeye çalışır. Bu OSB'deki yeni depo projelerinde gördüğümüz en büyük verimsizlik kaynağı, iki makinenin farklı tedarikçilerden gelip sahada birbirinin programını bilmeden çalışmasıdır. Biz burada tek bir yerleşim planıyla ilerliyoruz: forklift ve platformun hangi dilimde, hangi koridorda, hangi sırayla çalışacağı proje başında birlikte çıkarılıyor ve bu plan proje boyunca güncellenerek kullanılıyor.",
        maddeler: [
            {
                baslik: "Yeni depoda dilim bazlı ortak plan",
                metin:
                    "Yeni bir depo projesinde hacmi aks numaralarına göre dilimlere ayırırız ve her dilimde forklift ile platformun hangi sırayla çalışacağını baştan yazarız: önce forklift dilime girer, ayak ve alt travers malzemesini yerine taşır; forklift dilimden çıktıktan sonra platform aynı dilime girer, üst travers ve tavan altı kalemlerini tamamlar. Bir dilim bitmeden bir sonrakine geçilmez, böylece iki makine hiçbir zaman aynı dilimde aynı anda bulunmaz.",
            },
            {
                baslik: "Montaj ekipleriyle ortak zaman çizelgesi",
                metin:
                    "OSB'deki yeni depo projelerinde forklift ve platformun yanı sıra raf montaj ekibi, elektrik ekibi ve mekanik taşeron da aynı hacimde çalışır. İki makinemizin planını bu ekiplerin kendi zaman çizelgesinden bağımsız kurmuyoruz — proje yöneticisiyle birlikte tek bir haftalık çizelge çıkarır, hangi ekibin hangi dilimde ne zaman çalışacağını bu çizelgeye göre belirleriz. Bu, forklift ve platformun montaj ekibini beklemesini ya da montaj ekibinin makineleri beklemesini en aza indiriyor.",
            },
            {
                baslik: "OSB içi malzeme trafiğiyle koordinasyon",
                metin:
                    "Yeni depo inşaatı sürerken OSB içindeki malzeme trafiği de yoğundur — raf parçaları, panel malzemesi ve inşaat ekipmanı sürekli giriş yapar. Forkliftimiz bu trafiğin bir parçası olarak çalışırken, platform genellikle sabit bir noktada durur. İkisinin aynı giriş güzergâhını kullanması gerektiğinde, platform işini malzeme trafiğinin en az olduğu saatlere kaydırırız; bu, forkliftin manevra alanını platformla paylaşmak zorunda kalmasını önlüyor.",
            },
            {
                baslik: "Devreye alma döneminde ikili hazır bulunma",
                metin:
                    "Depo montajının son aşamasında, yani devreye alma döneminde, ihtiyaç kısa süreli ve öngörülemez hâle gelir: bir raf gözünün son kontrolü için forklift, bir sensörün ayarı için platform aynı gün içinde birkaç kez çağrılabilir. Bu dönemde iki makineyi de sahada hazır bulundurmayı öneriyoruz — çağrı üzerine gelen makine, devreye alma takvimini her seferinde geriye atar. Sahada bekleyen iki makine, bu dönemin ritmine en uygun kurgu oluyor.",
            },
            {
                baslik: "Proje sonunda tek teslim raporu",
                metin:
                    "Proje bittiğinde forklift ve platformun yaptığı işleri ayrı ayrı değil, tek bir raporda topluyoruz — hangi dilimde hangi makinenin ne zaman çalıştığı, hangi kalemin tamamlandığı tek bir belgede yer alıyor. Bu, iki ayrı tedarikçiden gelen iki ayrı raporu birleştirme yükünü işletmeden alıyor ve proje sonunda tek bir kaynaktan geriye dönük bakabilme imkânı sağlıyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yeni depo projesinde faz-makine eşleşmesi",
                paragraflar: [
                    "Bilecik OSB'deki yeni depo projelerinde fazların tipik sırası ve her fazda forklift-platform kombinasyonunun nasıl kurgulandığı aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Faz", "Forklift rolü", "Platform rolü", "Eşzamanlılık"],
                    satirlar: [
                        ["Kabuk bitişi", "Malzeme taşıma", "Askı-konsol montajı", "Dilimli, ardışık"],
                        ["Raf ayak-travers", "Alt kademe taşıma", "Üst kademe bağlantı", "Dilimli, ardışık"],
                        ["Tesisat katmanı", "Malzeme taşıma", "Sprinkler-kablo tavası", "Dilimli, ardışık"],
                        ["Devreye alma", "Nokta atışı çağrı", "Nokta atışı çağrı", "İkisi de sahada hazır"],
                        ["Teslim", "—", "—", "Tek rapor"],
                    ],
                },
            },
            {
                baslik: "Dilim planının proje başında çizilmesi",
                paragraflar: [
                    "Yeni depo projelerinde en çok karşılaştığımız hata, yüksek erişim planlamasının kabuk bittikten sonra, aceleyle yapılmasıdır. Bizim önerimiz, dilim planını proje daha inşaat aşamasındayken, raf firması ve elektrik ekibiyle birlikte oturup çizmektir. Bu plan bir kez çıkarıldığında, forklift ve platformun hangi sırayla hangi dilime gireceği tüm proje boyunca referans noktası olur ve her hafta yeniden tartışılmaz.",
                    "Erken çizilen bir plan, aynı zamanda hangi haftada kaç makineye ihtiyaç duyulacağını da önceden gösteriyor — bu, işletmenin bütçesini ve nakliye programını daha isabetli kurmasını sağlıyor.",
                ],
            },
            {
                baslik: "OSB'de tek tedarikçinin projeye kattığı hız",
                paragraflar: [
                    "OSB'deki yeni depo projelerinde zaman baskısı yüksektir — çoğu proje belirli bir sevkiyat sezonuna yetişmek için yapılır. İki makineyi tek tedarikçiden almanın en somut faydası bu baskı altında ortaya çıkıyor: forklift ve platform arasındaki geçiş, iki ayrı firma arasında haberleşme beklemeden, bizim kendi içimizdeki tek bir koordinasyonla yürüyor. Bir dilimde forklift işini bitirdiği anda platform aynı dilime girebiliyor, çünkü ikisi de bizim programımızın parçası.",
                    "Bu hız farkı, projenin tamamında birkaç günlük bir kazanca dönüşebiliyor — özellikle devreye alma dönemine yaklaşırken bu birkaç gün, teslim tarihini tutturmak ile kaçırmak arasındaki fark olabiliyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Raf montaj firması kendi ekipmanını getiriyor; sizin forklift-platform hizmetiniz onunla çakışır mı?",
                cevap:
                    "Çakışmaz, tamamlayıcı olur. Raf montaj firmaları genellikle alt kademe için kendi ekipmanını getirir; bizim forklift ve platformumuz, onların kapsamadığı üst kademe montajı ve genel malzeme taşımayı üstlenir. Proje başında raf firmasının ekipman listesini görürsek, kendi planımızı buna göre kurar, gereksiz bir örtüşme oluşturmayız. İki tarafın çalışması aynı dilim planına göre sıralanır, böylece kimse birbirinin işini beklemez.",
            },
            {
                soru: "Forklift ve platform aynı dilime aynı anda girmiyor diyorsunuz; bu süreyi uzatmıyor mu?",
                cevap:
                    "Dilim başına baktığınızda evet, biraz uzatıyor — ama proje bütününde tam tersi bir etki yaratıyor. Ardışık çalışma, iki makinenin birbirinin manevra alanına girmesini önlüyor ve bu, sahada yaşanabilecek gecikme ile güvenlik riskini ortadan kaldırıyor. Ayrıca dilim planı önceden çizildiği için makineler dilimden dilime beklemeden geçiyor; toplamda, eşzamanlı ama plansız çalışmaya göre daha hızlı ilerliyoruz.",
            },
            {
                soru: "Devreye alma döneminde iki makineyi de sahada tutmak pahalı olmaz mı?",
                cevap:
                    "Bu dönemde makinelerin çoğu zaman beklediği doğru, ama bekledikleri anlarda değil ihtiyaç duyulduğu anlarda değerli oldukları unutulmamalı. Çağrı üzerine gelen bir makinede her seferinde yeni bir nakliye ve yeni bir gecikme var; sahada hazır bulunan makinede ise devreye alma ekibi istediği saatte sensör ayarını yapabiliyor. Süre belirsizse dönemi kısa tutup uzatma seçeneğini yazılı bırakıyoruz; belirsizliği cezalandıran bir sözleşme kurmuyoruz.",
            },
            {
                soru: "Proje sonunda tek rapor almak bize ne kazandırıyor?",
                cevap:
                    "İki ayrı tedarikçiden gelen iki ayrı raporu kendi başınıza birleştirmek zorunda kalmıyorsunuz; hangi dilimde hangi işin ne zaman yapıldığı tek bir belgede, kronolojik sırayla yer alıyor. Bu, ileride bir garanti ya da tespit konusu çıktığında hangi işin hangi tarihte, hangi makineyle yapıldığını tek kaynaktan doğrulamanızı sağlıyor. Ayrıca proje sonrası bir bakım programı kurmak istediğinizde, bu rapor bize de referans oluyor.",
            },
            {
                soru: "OSB'deki malzeme trafiği yoğun; forkliftimiz dışarıdan gelen araçlarla çakışır mı?",
                cevap:
                    "Bu riski en aza indirmek için platform işlerini malzeme trafiğinin en yoğun olduğu saatlerin dışına planlıyoruz, forklift ise zaten sahanın kendi malzeme akışının bir parçası olarak çalışıyor. Trafiğin OSB'nin genel giriş-çıkış saatlerine bağlı olduğu durumlarda, projeye özgü bir program çıkarıp forkliftin güzergâhını bu saatlere göre ayarlıyoruz. Sahadaki diğer araçlarla iletişim, proje yöneticisi üzerinden koordine ediliyor.",
            },
            {
                soru: "İki makineyi de tek firmadan almanın maliyeti, ayrı ayrı almaktan daha mı düşük?",
                cevap:
                    "Genellikle evet, çünkü tek sevkiyatla iki makine geldiğinde taşıma payı bölünüyor ve koordinasyon için ayrıca harcanan zaman ortadan kalkıyor. Ancak bunu size rakamla göstermeden söylemeyi tercih etmiyoruz — teklif hazırlarken iki makineyi ayrı ayrı fiyatlandırıp birlikte alma durumundaki toplamı da yan yana gösteriyoruz, karşılaştırmayı siz yapabiliyorsunuz. Projenin büyüklüğüne göre bu fark küçük ya da belirgin olabilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bilecik OSB'de yeni depo projelerinin kabuk-iç montaj-devreye alma fazlarıyla ilerlemesi genel sektör bilgisidir; dilim bazlı ortak plan, tek teslim raporu ve iki makine fiyat karşılaştırması firma saha pratiğidir. Tesis adı ve rakam verilmemiştir.",
    },

    "bolge:sogut": {
        h1: "Söğüt'te Depo ve İstif Alanlarına Forklift ve Platform Karma Hizmet",
        giris:
            "Söğüt'teki depolama yapıları, büyük lojistik merkezlerinden çok, üretim tesislerinin kendi mamul veya hammadde stoklarını tuttuğu daha küçük ölçekli istif alanlarıdır ve bu ölçekte forklift ile platform ihtiyacı birbirinden ayrı düşünülmez — aynı işletme, aynı hafta içinde hem paletli malzeme taşımaya hem de yüksek raf ya da tavan bakımına ihtiyaç duyar. Söğüt'teki işletmelere verdiğimiz hizmette bu ikiliği tek bir ziyarette birleştiriyoruz: bölgeye giden makine seferi, hem forklift hem platform gerektiren kalemleri aynı güne, aynı sahaya taşıyor. Bu sayfa, küçük ölçekli istif alanlarında bu ikili hizmetin nasıl işlediğini anlatıyor.",
        maddeler: [
            {
                baslik: "Küçük istif alanında ikili ihtiyacın tespiti",
                metin:
                    "Söğüt'teki işletmelerin çoğu, kendi istif alanının forklift mi platform mu gerektirdiğini net biçimde ayırt edemez — bir raf hasarının hem malzeme taşımayı hem üst bağlantı kontrolünü gerektirdiğini fark etmemiş olabilir. Talebi aldığımızda önce fotoğraf ya da kısa bir açıklama isteriz; bu bilgiyle hangi makinenin gerekli olduğunu belirler, gerekiyorsa ikisini de teklife yazarız. Küçük ölçekte bu ön değerlendirme, yanlış makineyle gidip günü kaybetmemizi önlüyor.",
            },
            {
                baslik: "Tek seferde iki makinenin taşınması",
                metin:
                    "Söğüt, bölgedeki sefer düzenimizin bir parçası olduğu için forklift ve platform ihtiyacı olan bir işletme, ikisini de aynı sefer içinde alabiliyor. İki makine aynı taşıma aracıyla ya da art arda gelen iki araçla sahaya ulaşır ve işletmenin listesindeki kalemler, hangi makineyi gerektirdiğine göre sıralanır. Bu, bölgedeki küçük işletmelerin iki ayrı sevkiyat bedeli ödemesini önlüyor.",
            },
            {
                baslik: "Dar sahalarda sıralı kullanım zorunluluğu",
                metin:
                    "Söğüt'teki istif alanlarının çoğu dar ve düzensiz zeminlidir; bu, iki makinenin aynı anda çalışmasını neredeyse imkânsız kılar. Bu koşullarda kesin kuralımız sıralı kullanımdır: forklift önce gelir, taşıma işlerini bitirir ve alanı boşaltır; platform ardından gelir, kalan işleri tamamlar. Bu sıralama, dar sahada manevra çakışmasını tamamen ortadan kaldırıyor ve her makinenin kendi işini tam kapasiteyle yapmasını sağlıyor.",
            },
            {
                baslik: "Zemin farkının iki makineye etkisi",
                metin:
                    "Söğüt'teki bazı istif alanlarında zemin beton, bazılarında ise sıkıştırılmış toprak ya da stabilizedir. Forklift bu zeminlerde farklı lastik ve denge gereksinimleri taşırken, platformun destek ayakları için ayrıca yük dağıtım plakası gerekebilir. İki makineyi aynı sahaya gönderirken, zemin durumunu önceden değerlendirip her ikisi için de uygun hazırlığı — plaka, arazi tipi lastik gibi — birlikte planlıyoruz.",
            },
            {
                baslik: "Küçük işletmenin yıllık ihtiyacını biriktirmesi",
                metin:
                    "Söğüt'teki küçük işletmelerin yıllık forklift-platform ihtiyacı genellikle birkaç günü geçmez. Bu ölçekte en verimli yöntem, işletmenin yıl içindeki bütün ihtiyacını — bir raf düzenlemesi, bir tavan bakımı, birkaç saatlik bir malzeme taşıma işi — tek bir listede biriktirip bölgeye giden sefere eklemesidir. Bu, hem sevkiyat payını böler hem de işletmenin makineyi tek seferde iki iş için kullanmasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Söğüt'te istif alanı tipine göre makine ihtiyacı",
                paragraflar: [
                    "Söğüt'teki farklı istif alanı tiplerinde hangi makinenin baskın olduğu ve kullanım sırası aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Alan tipi", "Baskın makine", "İkincil makine", "Kullanım sırası"],
                    satirlar: [
                        ["Hammadde istif alanı", "Forklift", "Platform (nadiren)", "Forklift önce"],
                        ["Mamul depolama", "Forklift", "Platform (raf üstü)", "Forklift önce"],
                        ["Çatı-üst kot bakımı", "Platform", "Yok", "Yalnız platform"],
                        ["Yeni raf kurulumu", "İkisi de", "—", "Sıralı, forklift önce"],
                        ["Rampa-giriş çevresi", "Platform", "Forklift (nadiren)", "Platform önce"],
                    ],
                },
            },
            {
                baslik: "Sıralı kullanımın dar sahada zorunlu olması",
                paragraflar: [
                    "Büyük bir lojistik merkezinde iki makine farklı koridorlarda eşzamanlı çalışabilirken, Söğüt'teki dar istif alanlarında bu ayrım fiziksel olarak mümkün olmuyor — saha, iki makinenin aynı anda manevra yapmasına yetecek genişlikte değil. Bu yüzden burada eşzamanlı çalışma bir tercih değil, zemin ölçüsünün dayattığı bir sonuç; sıralı kullanım dışında bir seçenek genellikle yok.",
                    "Bu kısıt, işin toplam süresini bir miktar uzatsa da, dar bir sahada iki makineyi aynı anda çalıştırmaya zorlamanın getireceği risk bunun kat kat üzerinde. Bu yüzden dar sahalarda sıralı kullanımdan taviz vermiyoruz.",
                ],
            },
            {
                baslik: "Bölge seferine eklenen küçük işlerin ekonomisi",
                paragraflar: [
                    "Söğüt'teki küçük işletmelerin talebi, bölgeye zaten planlanmış bir sefere eklendiğinde sevkiyat payı ciddi biçimde düşüyor. Bir işletmenin yalnız birkaç saatlik bir forklift işi için ayrı sevkiyat yaptırması, işin kendisinden pahalıya gelebilirken, aynı işi bölge seferine eklediğimizde bu oran tersine dönüyor.",
                    "Bu yüzden Söğüt'teki işletmelere önerimiz, talebi son ana bırakmadan erkenden bildirmeleridir; bu, talebin bir sonraki bölge seferine yetişmesini ve sevkiyat payının bölünmesini sağlıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "İstif alanımız dar; forklift ve platform aynı gün gelirse birbirine engel olur mu?",
                cevap:
                    "Aynı sahada aynı anda çalışmazlar, bu yüzden engellemezler. Dar sahalarda kesin kuralımız sıralı kullanımdır: forklift önce gelir, işini bitirip alanı boşaltır; platform ardından gelir. İki makine aynı gün sahanıza gelebilir ama sırayla çalışır, bu da manevra çakışmasını ortadan kaldırır. Toplam sahada geçirilen süre biraz uzasa da, bu güvenli ve pratik olan yöntem.",
            },
            {
                soru: "Hangi makineye ihtiyacımız olduğunu tam bilmiyoruz; sadece durumu anlatsak yeter mi?",
                cevap:
                    "Yeter. Fotoğraf ya da kısa bir açıklama gönderdiğinizde, hangi makinenin gerekli olduğunu biz belirleriz — bazı işler hem forklift hem platform gerektirebilir, biz bunu ayırıp teklife yansıtırız. Küçük ölçekli işletmelerde bu ayrımı önceden yapmak, yanlış makineyle gidip günü kaybetmemizi önlüyor; bu yüzden ilk aramada kesin bir makine talebi beklemiyoruz, durumu anlatmanız yeterli.",
            },
            {
                soru: "Zeminimiz toprak, hem forklift hem platform çalışabilir mi?",
                cevap:
                    "Çoğunlukla evet, ama ikisi için de ayrı hazırlık gerekebilir. Forklift toprak zeminde arazi tipi lastikle çalışabilir, platformun destek ayakları içinse yük dağıtım plakası koyarız. İki makineyi aynı sahaya gönderirken zemin durumunu önceden değerlendirir, her ikisi için de uygun hazırlığı birlikte planlarız. Zeminin fotoğrafı ve yağış sonrası durumu bize bu kararı verdiriyor.",
            },
            {
                soru: "Yılda bir-iki kez ihtiyacımız oluyor; her seferinde ayrı mı çağırmalıyız?",
                cevap:
                    "Gerekmiyor. Yıl içindeki bütün ihtiyacınızı — bir raf düzenlemesi, bir tavan bakımı, birkaç saatlik bir taşıma işi — tek bir listede biriktirip bölgeye giden bir sonraki sefere eklemenizi öneririz. Bu, hem sevkiyat payını böler hem de tek seferde iki işi birden bitirmenizi sağlar. Talebinizi erken bildirmeniz, bir sonraki sefere yetişme ihtimalinizi artırır.",
            },
            {
                soru: "Raf hasarımız var; malzeme taşıma ile üst bağlantı kontrolü aynı anda mı yapılıyor?",
                cevap:
                    "Hayır, sıralı yapılır. Önce forklift hasarlı bölgedeki malzemeyi taşır ve gözü boşaltır; forklift alandan çıktıktan sonra platform gelir, üst travers ve bağlantı kontrolünü tamamlar. Bu sıralama, iki makinenin aynı dar alanda çakışmasını önlüyor. İki iş de aynı ziyarette bitirilir, sadece art arda değil eşzamanlı değil.",
            },
            {
                soru: "Bölge seferini kaçırırsak ne oluyor, tekil sevkiyat pahalı mı?",
                cevap:
                    "Tekil sevkiyat mümkün ama sevkiyat payı toplamın içinde daha büyük görünür, bunu saklamıyoruz. Bir sonraki bölge seferini bekleyebiliyorsanız, o sefere eklenmek belirgin şekilde daha uygun çıkar. Aciliyetiniz varsa da hizmet veririz, sadece maliyet farkını önceden açıkça gösteririz; karar sizindir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Söğüt'teki depolama yapılarının büyük lojistik merkezlerinden farklı, üretim tesislerine bağlı küçük ölçekli istif alanları olması genel gözleme dayalı bilgidir; sıralı kullanım zorunluluğu ve bölge seferine ekleme yaklaşımı firma saha pratiğidir. İşletme adı ve rakam verilmemiştir.",
    },

    "bolge:pazaryeri": {
        h1: "Pazaryeri'nde Küçük Ölçekli Depolara Forklift ve Platform Birlikte",
        giris:
            "Pazaryeri'ndeki depolama ihtiyacı, ilçenin genel sanayi ölçeğine uygun biçimde küçüktür — tek bir işletmenin yıllık forklift ya da platform ihtiyacı genellikle birkaç saatlik birkaç işten ibarettir. Bu ölçekte iki makineyi ayrı ayrı çağırmak, ihtiyacın kendisinden daha büyük bir organizasyon yükü yaratır. Biz Pazaryeri'ndeki işletmelere, bölgeye düzenlediğimiz seferler içinde forklift ve platform ihtiyacını birlikte taşıyarak hizmet veriyoruz; bu sayfa, en küçük ölçekli talebin bile bu ikili hizmetten nasıl yararlanabildiğini anlatıyor.",
        maddeler: [
            {
                baslik: "Küçük ölçekte ikili talebin sefer içinde birleştirilmesi",
                metin:
                    "Pazaryeri'ndeki bir işletmenin hem forklift hem platform ihtiyacı olduğunda, bu iki talebi ayrı ayrı değil, bölgeye giden aynı sefere birlikte ekliyoruz. Sefer günü, iki makine art arda aynı adrese gelir; forklift önce gelir, taşıma işini bitirir, ardından platform gelir. İşletmenin tek yapması gereken, ihtiyacını bize önceden bildirmek — geri kalan koordinasyonu biz kuruyoruz.",
            },
            {
                baslik: "Tarımsal depolama yapılarında ikili ihtiyaç",
                metin:
                    "İlçedeki tarımsal depolama yapılarında forklift genellikle ürün çuvalları ya da paletlerin taşınmasında, platform ise çatı ve havalandırma bakımında kullanılır. Bu iki ihtiyaç aynı yapıda, ama farklı zamanlarda ortaya çıkar — biri hasat döneminde yoğunlaşırken diğeri mevsim geçişlerinde. Aynı sefere iki talebi de eklediğimizde, işletme her iki ihtiyacını da tek bir ziyarette karşılamış oluyor.",
            },
            {
                baslik: "Küçük imalathanelerde malzeme ve erişim ihtiyacının ayrılması",
                metin:
                    "İlçedeki küçük imalathanelerde forklift, hammadde ya da yarı mamul taşımada kullanılırken, platform tavan altı aydınlatma ve havalandırma bakımında devreye girer. Bu iki ihtiyaç genellikle aynı işletmede farklı zamanlarda talep edilir, ama biriktirildiğinde tek seferde birleştirilebilir. Biz işletmeye, elindeki bütün kalemleri tek listede toplamasını öneriyoruz ki hangi makinenin ne zaman geleceğini biz planlayabilelim.",
            },
            {
                baslik: "Tek sefer içinde iki makinenin sıralanması",
                metin:
                    "Pazaryeri'ne giden bir sefer içinde birden fazla adres varsa, her adresteki forklift ve platform ihtiyacını güzergâha göre sıralarız. Bir adreste yalnızca forklift, bir diğerinde yalnızca platform, üçüncüsünde ikisi de gerekebilir — biz bu karışık talebi tek bir güne, tek bir güzergâha sığdırırız. Bu, ilçedeki her işletmenin ayrı ayrı sevkiyat organize etmesini önlüyor.",
            },
            {
                baslik: "İkili hizmetin küçük ölçekte fiyat şeffaflığı",
                metin:
                    "Küçük ölçekli bir işletme için forklift ve platformu birlikte almanın maliyet avantajını açıkça göstermeyi önemsiyoruz. Tek başına bir forklift işi için sevkiyat payı, tek başına bir platform işi için ayrı bir sevkiyat payından daha ucuza gelmez; ikisi birleştirildiğinde tek sevkiyat payı ikisine bölünür. Teklifte bu iki senaryoyu yan yana gösteriyoruz, işletme farkı kendi gözüyle görebiliyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Pazaryeri'nde ikili talebin sefer içi dağılımı",
                paragraflar: [
                    "İlçedeki tipik forklift-platform kombinasyonlarını ve sefer içindeki yerleşimini aşağıda özetledik.",
                ],
                tablo: {
                    basliklar: ["İşletme tipi", "Forklift kullanımı", "Platform kullanımı", "Sefer içi sıra"],
                    satirlar: [
                        ["Tarımsal depolama", "Ürün-palet taşıma", "Çatı-havalandırma", "Mevsime göre ayrı"],
                        ["Küçük imalathane", "Hammadde taşıma", "Tavan altı bakım", "Aynı ziyarette ardışık"],
                        ["Küçük depo", "Yükleme-boşaltma", "Raf üstü kontrol", "Aynı ziyarette ardışık"],
                        ["Yeni yapı kabuğu", "Malzeme taşıma", "Yüksek montaj", "Aynı ziyarette ardışık"],
                        ["Tek makine yeterli iş", "—", "—", "Tek makine, tek sefer"],
                    ],
                },
            },
            {
                baslik: "Küçük ölçekte iki makineyi bir araya getirmenin pratik faydası",
                paragraflar: [
                    "Pazaryeri gibi küçük ölçekli bir ilçede, iki ayrı makineyi iki ayrı zamanda çağırmanın en büyük dezavantajı, aynı hazırlığın iki kez tekrarlanmasıdır — sahaya giriş, zemin değerlendirmesi, güvenlik talimatı gibi adımlar her seferinde yeniden yapılır. İki makineyi aynı sefere eklediğimizde bu hazırlık bir kez yapılır ve her iki makine de aynı temel bilgiyle sahaya girer.",
                    "Bu, özellikle ilk kez çalıştığımız işletmelerde zaman kazandıran bir yöntem; sahayı bir kez tanıyoruz, iki makineye de aynı bilgiyi aktarıyoruz.",
                ],
            },
            {
                baslik: "İlçede biriken talebin ikili sefere dönüşmesi",
                paragraflar: [
                    "Pazaryeri'ndeki talep biriktirme modelimiz, yalnızca tek tip makineye özgü değil — bölgede biriken forklift ve platform taleplerinin ikisi de aynı havuzda toplanır ve sefer düzenlendiğinde ikisi birden bölgeye gider. Bu, bölgedeki bazı işletmelerin yalnızca forklift, bazılarının yalnızca platform, bazılarının ise ikisini birden talep ettiği bir günü tek bir sevkiyatla karşılamamızı sağlıyor.",
                    "İşletmelerin bu modelden en çok yararlanması için, talebini büyüklüğüne bakmadan erken bildirmesini öneriyoruz; erken bildirilen bir talep, bir sonraki sefere kesin olarak yerleşiyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hem forklift hem platform lazım ama ikisi de küçük işler. Ayrı ayrı mı istememiz gerekiyor?",
                cevap:
                    "Ayrı ayrı istemenize gerek yok, ikisini birden tek talep olarak bildirin. Biz bu iki ihtiyacı bölgeye giden aynı sefere ekler, aynı gün art arda sahanıza getiririz — önce forklift, işini bitirdikten sonra platform. Bu, ayrı ayrı çağırmaktan hem daha ucuz hem daha az organizasyon gerektiriyor. Tek yapmanız gereken, elinizdeki kalemleri tek listede bize iletmek.",
            },
            {
                soru: "Tarımsal deposunda hem hasat döneminde forklift hem mevsim geçişinde çatı bakımı lazım oluyor. Bunları nasıl planlıyorsunuz?",
                cevap:
                    "Bu iki ihtiyaç genellikle farklı zamanlarda ortaya çıktığı için ayrı sefer taleplerine dönüşüyor, ama ikisini de bölgedeki mevcut sefer takvimimize göre planlıyoruz. Hasat dönemi yaklaşırken forklift ihtiyacınızı, mevsim geçişinde ise platform ihtiyacınızı önceden bildirirseniz, her ikisini de bölgeye giden bir sonraki uygun sefere yerleştiririz. İkisini aynı anda talep etmeniz gerekmiyor, her biri kendi zamanında planlanabilir.",
            },
            {
                soru: "İlk kez çalışıyoruz, iki makineyi aynı sefere eklemek sahaya giriş açısından fark yaratır mı?",
                cevap:
                    "Evet, olumlu yönde fark yaratıyor. İki makineyi ayrı zamanlarda çağırsaydınız, sahaya giriş ve zemin değerlendirmesi gibi hazırlık adımları iki kez tekrarlanırdı. Aynı sefere eklediğimizde bu hazırlığı bir kez yapıyoruz ve iki makine de aynı temel bilgiyle sahanıza giriyor. İlk ziyaretimizde topladığımız bilgi, sonraki taleplerinizde de bize referans oluyor.",
            },
            {
                soru: "Bölgedeki sefer ne zaman geliyor, tarih verebilir misiniz?",
                cevap:
                    "Kesin tarih yerine bir pencere veririz; sefer, bölgede biriken toplam talebe göre planlanır ve pencere içinde kesinleştiğinde makul bir süre önce teyit ederiz. Talebinizi erken bildirirseniz, bir sonraki pencereye yerleşme ihtimaliniz artar. Aciliyetiniz varsa pencereyi beklemeden tekil sevkiyat da yaparız, bu durumda maliyet farkını baştan gösteririz.",
            },
            {
                soru: "İki makineyi birlikte almanın maliyet avantajını nasıl görebiliriz?",
                cevap:
                    "Teklifte iki senaryoyu yan yana gösteriyoruz: forklift ve platformu ayrı ayrı, tek başına sevkiyatla aldığınızdaki toplam maliyet ile ikisini birlikte, tek sevkiyatla aldığınızdaki toplam maliyet. Sevkiyat payı ikinci senaryoda bölündüğü için fark genellikle belirgin oluyor, özellikle küçük ölçekli işlerde. Kararı bu iki rakamı görerek siz veriyorsunuz.",
            },
            {
                soru: "Küçük imalathanemizde sadece bir kez, tek bir iş için ihtiyaç oldu. Yine de bu modelden yararlanabilir miyiz?",
                cevap:
                    "Evet, tek seferlik bir talebiniz de olsa bölgedeki mevcut sefere ekleyebiliriz; işinizin hangi makineyi gerektirdiğini biz belirler, uygun bir seferin tarihini size söyleriz. Tek seferlik olması, ikili hizmetten yararlanmanıza engel değil — asıl belirleyici olan, talebin bölgeye giden bir seferle örtüşüp örtüşmediği ve tarihinizin ne kadar esnek olduğu.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Pazaryeri'nin küçük ölçekli sanayi ve tarımsal depolama yapısı genel bilgidir; sefer içi forklift-platform birleştirmesi ve talep havuzu yaklaşımı firma saha pratiğidir. İşletme adı ve rakam verilmemiştir.",
    },

    "bolge:eskisehir-osb-cevre-ili": {
        h1: "Eskişehir'e Bozüyük'ten Forklift ve Platform Birlikte Kiralama",
        giris:
            "Eskişehir'deki depolama ve lojistik tesisleri, Bozüyük'teki muadillerine göre daha büyük ölçekli olma eğilimindedir ve bu ölçekte forklift-platform ikili ihtiyacı daha sık, daha yoğun ortaya çıkar. Bozüyük'ten Eskişehir'e verdiğimiz hizmette bu ikili ihtiyacı, komşu il seferi modelimizin bir parçası olarak taşıyoruz — bölgeye giden sefer, hem forklift hem platform gerektiren tesisleri aynı programda birleştiriyor. Bu sayfa, komşu ildeki büyük ölçekli depo tesislerinde iki makinenin birlikte nasıl çalıştığını anlatıyor.",
        maddeler: [
            {
                baslik: "Büyük ölçekli depoda ikili ihtiyacın yoğunluğu",
                metin:
                    "Eskişehir'deki büyük lojistik tesislerinde forklift ve platform ihtiyacı, Bozüyük'teki küçük ölçekli işletmelere göre çok daha sık ve daha uzun süreli ortaya çıkar — yeni bir depo montajında haftalarca, mevcut bir tesisin bakım döneminde ise günlerce iki makine birden gerekebilir. Bu ölçekte iki makineyi ayrı ayrı komşu ilden getirmek, sevkiyat payını iki katına çıkarır; biz bu yüzden büyük ölçekli talepleri baştan ikili paket olarak planlıyoruz.",
            },
            {
                baslik: "Komşu il seferinde iki makinenin birlikte taşınması",
                metin:
                    "Eskişehir'e giden bir sefer düzenlediğimizde, forklift ve platform aynı taşıma organizasyonuyla, aynı gün sahaya ulaşıyor. Bu, tek makine gönderdiğimiz seferlere göre biraz daha fazla lojistik planlama gerektiriyor, ama sonuçta işletmenin iki ayrı komşu il seferini beklemesini önlüyor — ihtiyacı olan her iki makine de aynı anda sahada oluyor.",
            },
            {
                baslik: "Büyük hacimde eşzamanlı bölgesel ayrım",
                metin:
                    "Eskişehir'deki büyük depo hacimlerinde, Bozüyük'teki dar sahaların aksine, forklift ve platform genellikle aynı anda ama farklı bölgelerde çalışabilir — biri raf koridorunda malzeme taşırken diğeri tesisin başka bir ucunda tavan altı bakımı yapabilir. Bu eşzamanlılık, sahanın büyüklüğü sayesinde mümkün oluyor; biz yine de iki makinenin güzergâhlarının kesişmediğinden emin olmak için proje başında bir yerleşim planı çıkarıyoruz.",
            },
            {
                baslik: "Uzun süreli projelerde ikili sahada kalış",
                metin:
                    "Haftalarca sürecek bir depo projesinde, iki makineyi de proje boyunca Eskişehir'de bırakmak, her ikisi için de günlük gidiş-dönüş yapmaktan hem daha ucuz hem daha verimlidir. Bu düzende periyodik bakımı bölgeye yaptığımız planlı seferlerle yürütürüz; iki makinenin bakım günü aynı sefere denk getirilir, böylece bakım için de ayrı bir yolculuk gerekmez.",
            },
            {
                baslik: "Komşu ilde iki makinenin ortak raporlanması",
                metin:
                    "Eskişehir'deki bir projede forklift ve platformun yaptığı işleri tek bir raporda topluyoruz; bu, mesafe nedeniyle sahaya sık gidemeyen proje yöneticisinin, iki makinenin durumunu tek kaynaktan takip edebilmesini sağlıyor. Rapor düzenli aralıklarla, genellikle her sefer sonunda güncellenir ve işletmeyle paylaşılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Eskişehir'de proje büyüklüğüne göre ikili model",
                paragraflar: [
                    "Eskişehir'deki depo-lojistik projelerinde büyüklüğe göre uyguladığımız forklift-platform kurgusu aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Proje büyüklüğü", "Model", "Bölgesel ayrım", "Bakım kurgusu"],
                    satirlar: [
                        ["Tekil, kısa", "Tek sefer, ikisi birlikte", "Ardışık", "Sefer sonu"],
                        ["Birkaç gün", "Blok çalışma", "Ardışık ya da eşzamanlı", "Proje sonunda"],
                        ["Haftalar", "Sahada kalıcı ikili", "Eşzamanlı, ayrı bölge", "Planlı sefer"],
                        ["Aylar", "Dönem sözleşmesi", "Eşzamanlı, ayrı bölge", "Dönem takvimine bağlı"],
                        ["Devreye alma", "İkisi de hazır bulunma", "Çağrı üzerine", "Dönem sonuna ertelenebilir"],
                    ],
                },
            },
            {
                baslik: "Büyük sahada eşzamanlı çalışmanın koşulu",
                paragraflar: [
                    "Eskişehir'deki büyük depo hacimlerinde forklift ve platformun aynı anda farklı bölgelerde çalışabilmesi, sahanın genişliği kadar iyi bir yerleşim planına da bağlıdır. Proje başında hacmi bölgelere ayırır, her makinenin hangi bölgede, hangi güzergâhta çalışacağını yazılı hâle getiririz. Bu plan olmadan büyük bir sahada bile iki makine zaman zaman aynı güzergâha girebilir; planla bu risk baştan ortadan kalkıyor.",
                    "Yerleşim planı proje ilerledikçe güncellenir — bir bölge tamamlandığında makineler bir sonraki bölgeye kaydırılır ve güncel plan ilgili taraflara bildirilir.",
                ],
            },
            {
                baslik: "Komşu ilde ikili hizmetin maliyet mantığı",
                paragraflar: [
                    "İki makineyi Bozüyük'ten ayrı ayrı Eskişehir'e göndermek, sevkiyat payını iki kat ödemek anlamına gelir. Aynı sefer içinde birlikte gönderildiklerinde bu pay bölünüyor ve proje süresi uzadıkça bu bölünmüş payın toplam maliyet içindeki oranı küçülüyor. Kısa ve tek seferlik ihtiyaçlarda bu fark daha belirgin hissediliyor; uzun projelerde ise sevkiyat payı zaten toplam maliyetin küçük bir parçası hâline geliyor.",
                    "Teklif hazırlarken bu iki senaryoyu — ayrı sevkiyat ile birlikte sevkiyat — yan yana gösteriyor, kararı işletmeye bırakıyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Eskişehir'deki depomuz büyük; forklift ve platform aynı anda farklı yerlerde çalışabilir mi?",
                cevap:
                    "Büyük hacimlerde genellikle evet, Bozüyük'teki küçük sahaların aksine burada iki makine aynı anda ama farklı bölgelerde çalışabilir. Bunun için proje başında sahayı bölgelere ayırır, her makinenin hangi bölgede çalışacağını yazılı bir yerleşim planına döküyoruz. Bu plan sayesinde iki makinenin güzergâhı büyük bir sahada bile kesişmiyor.",
            },
            {
                soru: "İki makineyi Bozüyük'ten aynı anda mı gönderiyorsunuz, yoksa ayrı mı?",
                cevap:
                    "Aynı sefer içinde, aynı gün göndermeyi tercih ediyoruz — bu hem sevkiyat payını böler hem de işletmenin iki ayrı seferi beklemesini önler. Projenin büyüklüğüne göre bazen forklift biraz önce, platform biraz sonra sahaya ulaşabilir, ama bu genellikle aynı gün içinde gerçekleşen küçük bir zaman farkıdır, ayrı bir sefer değil.",
            },
            {
                soru: "Proje haftalarca sürecek; iki makine de sahada mı kalıyor?",
                cevap:
                    "Uzun süreli projelerde evet, ikisini de sahada bırakmayı öneriyoruz. Her iki makine için günlük gidiş-dönüş yapmak hem pahalı hem verimsiz olur; sahada kalan makineler proje takvimine göre esnek çalışır. Periyodik bakımlarını bölgeye yaptığımız planlı seferlerle yürütürüz ve mümkünse iki makinenin bakım gününü aynı sefere denk getiririz.",
            },
            {
                soru: "İki makinenin durumu hakkında düzenli bilgi alabilir miyiz?",
                cevap:
                    "Evet, düzenli aralıklarla — genellikle her sefer sonunda — tek bir raporla iki makinenin de yaptığı işleri bildiriyoruz. Bu, mesafe nedeniyle sahaya sık gidemeyen proje yöneticisinin durumu tek kaynaktan takip edebilmesini sağlıyor. Raporda hangi makinenin hangi bölgede, ne zaman çalıştığı ayrı ayrı belirtiliyor.",
            },
            {
                soru: "Sadece kısa bir iş için ihtiyacımız var; ikisini birlikte almak zorunda mıyız?",
                cevap:
                    "Hayır, zorunlu değil. Yalnızca forklift ya da yalnızca platform istediğinizde de hizmet veriyoruz, teklifiniz yalnızca talep ettiğiniz makine üzerinden hazırlanır. İkisi birlikte gerektiğinde birlikte almak maliyet açısından avantajlı oluyor, ama ihtiyacınız tek makineyle sınırlıysa bunu size söyleriz, gereksiz ikinci makine önermeyiz.",
            },
            {
                soru: "Komşu ilden gelen forklift ve platformun standardı Bozüyük'tekiyle aynı mı?",
                cevap:
                    "Evet, aynı. Eskişehir'e giden her iki makine de Bozüyük'te teslim ettiğimizle aynı kontrol sürecinden geçer, aynı belgelerle çıkar. Mesafenin standardı gevşetmesine izin vermiyoruz; bu, iki makineli bir proje için de tek makineli bir iş için de geçerli, değişmeyen bir kural.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Eskişehir'deki lojistik tesislerinin Bozüyük'teki muadillerine göre daha büyük ölçekli olması genel gözleme dayalı bilgidir; büyük sahada bölgesel ayrım planı ve ikili sevkiyat mantığı firma saha pratiğidir. Tesis adı ve rakam verilmemiştir.",
    },

    "bolge:inegol-osb-bursa-cevre-ili": {
        h1: "İnegöl'e Bozüyük'ten Mobilya Deposu İçin Forklift ve Platform Birlikte",
        giris:
            "İnegöl'deki mobilya ve mamul depoları, seramik ambarlarından farklı bir yük profiline sahiptir: ürün hacimli ama görece hafiftir, çeşit sayısı yüksektir ve raf düzeni sık değişir. Bu profil, forklift ve platform ihtiyacını da farklı bir dengeyle ortaya çıkarır — forklift, hacimli ama hafif ürünleri sık sık yer değiştirirken, platform bu değişken raf düzeninin üst kademe bağlantılarını takip eder. Bozüyük'ten İnegöl'e verdiğimiz ikili hizmette bu dengeyi mobilya sektörünün kendi ritmine göre kuruyoruz. Bu sayfa, mobilya deposu bağlamında forklift-platform karma hizmetin nasıl işlediğini anlatıyor.",
        maddeler: [
            {
                baslik: "Hacimli ama hafif ürünün forklift kullanımına etkisi",
                metin:
                    "Mobilya ve panel ürünleri, seramik gibi ağır paletli ürünlerden farklı bir taşıma ihtiyacı doğurur — yük daha hafif ama daha hacimlidir, bu yüzden forklift manevrası genellikle koridor genişliğiyle sınırlanır, kapasiteyle değil. İnegöl'deki depolarda forklift seçimini bu yüzden yük ağırlığından çok koridor ölçüsüne göre yapıyoruz; dar koridorlu depolarda daha kompakt gövdeli forklift tercih ediyoruz.",
            },
            {
                baslik: "Sık değişen raf düzeninde platformun rolü",
                metin:
                    "Mobilya deposunda ürün çeşitliliği yüksek olduğu için raf düzeni sabit kalmaz, düzenli aralıklarla yeniden yapılandırılır. Bu, platformun burada tek seferlik değil tekrar eden bir ihtiyaç olması demektir — her düzenleme, üst kademe travers ve bağlantıların yeniden kontrolünü gerektirir. Forklift bu düzenlemede alt kademeyi taşırken, platform üst kademeyi bitirir; ikisi birbirini takip eden ama ayrı işlerdir.",
            },
            {
                baslik: "Ahşap tozu ortamında iki makinenin ayrı kuralları",
                metin:
                    "İnegöl'deki mobilya tesislerinde ahşap tozunun yanıcı olması, forklift ve platform için farklı önlemler gerektirir. Forklift için asıl mesele statik elektrik ve motor kaynaklı kıvılcım riskinin düşük tutulmasıdır; platform içinse üst kotta yapılan herhangi bir kaynak veya kesme işleminin toz birikimi olan bölgelerde izne bağlı olmasıdır. İki makineyi aynı sahaya gönderirken bu iki ayrı kural setini operatörlerimize ayrı ayrı hatırlatıyoruz.",
            },
            {
                baslik: "Boyahane çevresinde forklift-platform sınırlaması",
                metin:
                    "Boya ve vernik bölümlerinin çevresinde forklift trafiği genellikle sınırlıdır çünkü bu alanlar hem dar hem de solvent buharı riski taşır; platform işleri ise bu bölgede üretim durduktan sonra planlanır. İki makineyi aynı projede kullansak da, boyahane çevresinde ikisinin de aynı anda bulunmasını istemeyiz — forklift bu bölgeye yalnızca üretim durduğunda ve kısa süreliğine girer, platform işini bitirmeden forklift geri dönmez.",
            },
            {
                baslik: "Mobilya deposunda tekrar eden düzenleme programı",
                metin:
                    "Raf düzeninin sık değişmesi nedeniyle, İnegöl'deki mobilya depolarına tek seferlik değil, tekrar eden bir program öneriyoruz: yılın belirli dönemlerinde forklift ve platformu birlikte göndererek, birikmiş düzenleme ihtiyaçlarını toplu olarak karşılıyoruz. Bu, her düzenleme ihtiyacında ayrı ayrı çağrı yapmaktan hem daha ucuz hem daha az kesintili.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mobilya deposunda forklift-platform iş bölümü",
                paragraflar: [
                    "İnegöl'deki mobilya depolarında forklift ve platformun hangi işlerde nasıl bölüşüldüğü aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["İş", "Forklift rolü", "Platform rolü", "Toz-kıvılcım notu"],
                    satirlar: [
                        ["Ürün yerleştirme", "Doğrudan taşıma", "Yok", "Standart"],
                        ["Raf düzeni değişimi", "Alt kademe taşıma", "Üst kademe bağlantı", "Standart"],
                        ["Boyahane çevre işi", "Sınırlı, kısa giriş", "Üretim durduktan sonra", "Kıvılcım izinli"],
                        ["Atölye tavan hattı", "Malzeme taşıma", "Doğrudan erişim", "Kıvılcım izinli"],
                        ["Mamul deposu genel bakım", "Destek taşıma", "Doğrudan erişim", "Standart"],
                    ],
                },
            },
            {
                baslik: "Koridor ölçüsünün forklift seçimine etkisi",
                paragraflar: [
                    "Mobilya depolarında koridor genişliği, ürün çeşitliliğine ve raf tipine göre standart lojistik depolardan farklı kurulabilir; bazı depolarda geniş ürünler için daha geniş koridor, bazılarında ise yer tasarrufu için dar koridor tercih edilir. Biz İnegöl'deki her depoya gitmeden önce koridor ölçüsünü sorar, forklift sınıfını buna göre önceden belirleriz — sahada koridora sığmayan bir makineyle karşılaşmak, günü baştan kaybetmek demektir.",
                    "Platform seçiminde ise koridor genişliğinden çok tavan yüksekliği ve raf üstü erişim mesafesi belirleyicidir; bu iki ölçüyü ayrı ayrı topluyor, iki makineyi de kendi kriterine göre seçiyoruz.",
                ],
            },
            {
                baslik: "Tekrar eden düzenleme programının kurulması",
                paragraflar: [
                    "Mobilya deposunda raf düzeninin sık değişmesi, bakımı tek seferlik değil dönemsel bir ihtiyaç hâline getiriyor. İnegöl'deki müşterilerimizle bu yüzden genellikle yıllık bir çerçeve kuruyoruz — hangi dönemde forklift-platform ikilisinin bölgeye geleceği önceden belirleniyor ve o dönemde biriken bütün düzenleme talepleri tek seferde karşılanıyor.",
                    "Bu programın işletmeye kazandırdığı şey, her düzenleme ihtiyacında yeniden pazarlık yapmak zorunda kalmamasıdır; dönem başında belirlenen çerçeve, yıl boyunca referans olarak kullanılıyor ve gerektiğinde küçük ayarlamalarla güncelleniyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Mobilya deposunda forklift seçimi neye göre yapılıyor, yük ağırlığına mı?",
                cevap:
                    "Genellikle hayır, çünkü mobilya ürünleri hacimli ama görece hafif olduğu için asıl belirleyici koridor genişliğidir. Dar koridorlu bir depoda kompakt gövdeli bir forklift tercih ederiz, geniş koridorlu bir depoda ise standart sınıf yeterli olur. Depo koridor ölçüsünü önceden sorarız; bu bilgi olmadan sahaya gidip koridora sığmayan bir makineyle karşılaşmak istemeyiz.",
            },
            {
                soru: "Raf düzenimiz sık değişiyor; her seferinde ayrı ayrı mı çağırmalıyız?",
                cevap:
                    "Önerimiz hayır. Raf düzeninin sık değiştiği mobilya depolarında, tek seferlik çağrılar yerine dönemsel bir program kurmanızı öneriyoruz — yılın belirli dönemlerinde forklift ve platformu birlikte gönderip, o döneme kadar biriken bütün düzenleme ihtiyaçlarını tek seferde karşılıyoruz. Bu, her düzenlemede ayrı ayrı çağrı yapmaktan hem daha ucuz hem daha az kesintili.",
            },
            {
                soru: "Boyahane çevresinde forklift ve platform aynı anda çalışabiliyor mu?",
                cevap:
                    "Hayır, istemiyoruz. Boyahane çevresi hem dar hem solvent buharı riski taşıdığı için forklift bu bölgeye yalnızca üretim durduğunda ve kısa süreliğine girer; platform işini bitirmeden forklift geri dönmez. Bu ayrım, solvent buharı bulunan bir ortamda iki makinenin birbirine yakın çalışmasının getireceği riski önlüyor.",
            },
            {
                soru: "Atölyemizde ahşap tozu yoğun; forklift için ayrı bir önlem var mı?",
                cevap:
                    "Var. Forklift için asıl mesele statik elektrik ve motor kaynaklı kıvılcım riskinin düşük tutulmasıdır; bu, platformun üst kotta kaynak-kesme gibi işlemler için aldığı izin sürecinden farklı bir önlem setidir. İki makineyi aynı sahaya gönderirken operatörlerimize bu iki ayrı kural setini ayrı ayrı hatırlatıyoruz, birini diğerine karıştırmıyoruz.",
            },
            {
                soru: "Dönemsel program kurarsak, ara dönemde acil bir ihtiyaç çıkarsa ne oluyor?",
                cevap:
                    "Dönemsel program, ara dönemdeki acil talepleri engellemez — beklenmeyen bir ihtiyaç çıkarsa, dönem programını beklemeden ayrı bir çıkış planlarız, bunu her zaman bir seçenek olarak tutuyoruz. Fark şu: dönem programına giren düzenli ihtiyaçlar toplu ve daha ucuz karşılanırken, ara dönemdeki acil talepler tekil olarak fiyatlanır. Bu iki senaryoyu size baştan açık şekilde gösteririz.",
            },
            {
                soru: "Bozüyük'ten gelen ekip mobilya sektörünün kendine özgü kurallarını biliyor mu?",
                cevap:
                    "Asıl birikimimiz Bozüyük'teki seramik ve depo işlerinde olsa da, İnegöl'e düzenli sefer düzenlediğimiz için mobilya sektörünün kendine özgü kurallarını — koridor ölçüsünün forklift seçimine etkisi, ahşap tozunun getirdiği kıvılcım önlemleri, boyahane çevresindeki sınırlama gibi — öğrenmiş durumdayız. Tesisinize özgü bir kural varsa keşifte sorar, ona göre planlarız; varsayımla değil, öğrendiğimizle çalışıyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. İnegöl'ün mobilya-ahşap işleme ağırlıklı sanayi kimliği ve mobilya ürünlerinin hacimli-hafif taşıma karakteri kamuya açık genel bilgidir; koridor bazlı forklift seçimi, boyahane çevre sınırlaması ve dönemsel düzenleme programı firma saha pratiğidir. Tesis adı ve rakam verilmemiştir.",
    },
    "bolge:bozuyuk-kucuk-sanayi-sitesi": {
        h1: "Bozüyük Küçük Sanayi Sitesinde Yükleme, Boşaltma ve Raf İşleri İçin Karma Makine Planı",
        giris:
            "Bozüyük Küçük Sanayi Sitesi için bu kaydın dar konusu, dükkân kapısında mal kabulü ile içerideki raf erişimini aynı iş emri içinde fakat farklı makine görevleri olarak yönetmektir. Çatı, oluk ve dış cepheye eklemli erişim B4'ün; mobilya atölyesindeki temiz tavan aksına makaslı erişim ise B9'un konusudur ve burada tekrarlanmaz. Bu sayfada forklift paletli ya da uygun taşıma birimine alınmış malzemeyi araçtan güvenli kabul noktasına indirir, zeminde taşır ve yalnız yetkili raf operasyonunda yükü konumlandırır. Platform ise insanın raf etiketi, koruyucu, bağlantı, işaretleme veya raf üstündeki erişilebilir teknik noktaya ulaşmasını sağlar; yük kaldırma aracı olmaz. Belirli bir işletmenin raf yüksekliği, ürün çeşidi, kapasitesi veya günlük araç sayısı hakkında iddia kurulmaz. Gerçek talep öncesinde araç yanaşma alanı, kapı açıklığı, zemin, koridor, raf durumu, yük bilgisi ve yaya hareketi doğrulanır. İki makinenin tek pakette gelmesi aynı koridorda eşzamanlı çalışabilecekleri anlamına gelmez. İş, kabul hücresi, malzeme yerleştirme dilimi, personel erişimi ve saha teslimi olarak sıralanır. Böylece küçük sanayi sitesindeki kısa mal kabul penceresi aceleye dönüşmeden, yükün ve çalışanın görev sınırları görünür kalır.",
        maddeler: [
            {
                baslik: "Araçtan indirmeyi tanımlı kabul hücresinde yapmak",
                metin:
                    "Taşıyıcı gelmeden önce yanaşma yönü, indirme tarafı ve geçici kabul alanı işletmeyle belirlenir. Ortak site yolu, komşu dükkân girişi veya acil geçiş forkliftin çalışma alanı sayılmaz. Araç sabitlenmeden, sürücüyle iletişim kurulmadan ve yükün ambalajı gözlenmeden çatallar yük altına girmez. Ağırlık merkezi, palet durumu ve kaldırma noktası yük sahibinden alınan bilgiyle değerlendirilir. Hasarlı ya da dengesiz birim sırf trafiği açmak için kaldırılmaz. İndirilen malzeme doğrudan bilinmeyen raf gözüne gönderilmez; önce ayrılmış kabul hücresinde sayım ve durum kontrolü yapılır. Platform bu sırada hücreye girmez, personel yük altında bulunmaz.",
            },
            {
                baslik: "Forklift rotasını raf koridorundan önce doğrulamak",
                metin:
                    "Kapıdan hedef rafa uzanan rota genişlik, dönüş, tavan açıklığı, kolon, eşik, gider kapağı ve yaya geçişi bakımından yürünür. Forkliftin nominal kaldırma kabiliyeti tek seçim ölçütü değildir; gerçek yük merkezi, erişilecek seviye, ataşman, zemin ve üretici tablosu birlikte ele alınır. Koridor geçici stokla daralmışsa malzeme işletme tarafından kaldırılır; operatör paleti raf ya da duvar arasında sürükleyerek boşluk yaratmaz. Raf gözünün taşıma uygunluğu ve yerleştirme kararı işletmenin yetkili sorumlusundadır. Forklift yalnız açılmış rotada hareket eder, kör dönüşlerde saha iletişimi kullanılır ve park edildiğinde çatallar güvenli konuma indirilir.",
            },
            {
                baslik: "Raf işi içinde yük ve insan görevini ayırmak",
                metin:
                    "Paletin rafa alınması forklift görevidir; travers bağlantısını, etiketi, koruyucuyu veya erişilebilir teknik ayrıntıyı kontrol etmek ise uygun platformla personel erişimi gerektirir. İnsan forklift çatalı, palet veya doğaçlama sepet üzerinde yükseltilmez. Platform korkuluğuna yük bağlanmaz ve sepet raf gözüne malzeme itmek için kullanılmaz. Önce forklift ilgili malzemeyi yerleştirip koridoru terk eder, ardından yük hareketi durdurulur ve platformun çalışma hücresi açılır. Personel kontrolü tamamladıktan, sepet indikten ve bariyer devredildikten sonra forklift yeni dilime döner. Bu sıra iki ekipmanın birbirinin görüş alanına girmesini önler.",
            },
            {
                baslik: "KSS ortak yolunu kısa ve görünür pencerelerle korumak",
                metin:
                    "Dükkân önü alanı işletmenin özel avlusu gibi kabul edilmez; komşu araç, müşteri ve yaya akışı çalışma hücresine yaklaşabilir. Yükleme penceresi önceden duyurulur, koniler yalnız makinenin çevresine değil aracın kapladığı alan ile dönüş zarfına göre yerleştirilir. Geçiş bütünüyle ayrılamıyorsa işletme kontrollü duruş uygular veya işi daha uygun zamana alır. Forklift yük taşırken platform parkta ve enerjisi güvenli durumda kalır. Platform yükseldiğinde forklift anahtarıyla birlikte belirlenmiş bekleme noktasına çekilir. Hücreler arasında geçiş sözlü tahminle değil, sorumluların açık devriyle yapılır.",
            },
            {
                baslik: "Paket sevkiyatı iki ayrı kabul kaydıyla kapatmak",
                metin:
                    "Forklift ile platform aynı programda gönderilse bile makine kabulü birleşik bir göz atma işlemi değildir. Her ünitenin görünür durumu, kumandası, güvenlik donanımı, lastiği, enerji veya yakıt koşulu ve kullanım sınırı ayrı kayda alınır. Operatör yetkileri de makine türüne göre doğrulanır. Gün sonunda forkliftin taşıdığı birimler işletme listesiyle, platformla tamamlanan erişim noktaları ise iş kartıyla karşılaştırılır. Açık kalan palet, hasarlı ambalaj ya da tamamlanmamış raf kontrolü kendi başlığında yazılır. İki ekipmanın aynı faturada bulunması sorumluluk ve teslim izlerini birbirine karıştırmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "KSS yükleme ve raf akışında görev matrisi",
                paragraflar: [
                    "Bu tablo belirli bir dükkânın envanteri değildir; saha doğrulamasında işi doğru makineye ve doğru sıraya bağlamak için kullanılan genel ayrımı gösterir.",
                ],
                tablo: {
                    basliklar: ["İş adımı", "Forklift görevi", "Platform görevi", "Geçiş koşulu"],
                    satirlar: [
                        ["Araç kabulü", "Uygun yükü indirmek", "Yok", "Araç sabit ve alan ayrılmış"],
                        ["Geçici istif", "Birimi kabul hücresine taşımak", "Yok", "Yük durumu kaydedilmiş"],
                        ["Rafa yerleştirme", "Yetkili göze yük konumlamak", "Beklemede", "Koridor insansız"],
                        ["Raf üstü kontrol", "Koridor dışında", "Personel erişimi", "Yük hareketi durmuş"],
                        ["Alan teslimi", "Çatalları indirip çıkmak", "Sepeti indirip çıkmak", "İki kayıt kapanmış"],
                    ],
                },
            },
            {
                baslik: "Tek saha krokisinde iki hareket zarfı çizmek",
                paragraflar: [
                    "Keşif krokisinde taşıyıcının yanaşması, forkliftin dönüşü, geçici kabul hücresi, hedef raf koridoru ve platformun park noktası ayrı renklerle işaretlenir. Rafın yalnız önden görünüşü yeterli değildir; zemindeki kapaklar, kolonlar, kapı kanadı ve yaya çıkışı da kayda girer. Forkliftin sürekli hareket eden zarfı ile platformun yükseldiğinde oluşan sabit çalışma hacmi üst üste düşüyorsa eşzamanlı plan iptal edilir.",
                    "Kroki çalışma günü yeniden doğrulanır, çünkü dükkân önündeki araç ve geçici stok değişebilir. Yeni engel güvenli dönüşü bozuyorsa rota doğaçlama daraltılmaz. Malzeme kaldırılır, alternatif hücre açılır veya program sırası değiştirilir. Bu yöntem makineyi sahaya sığdırmaya değil, yük ile personelin birbirinden ayrıldığı uygulanabilir bir iş akışı kurmaya yarar.",
                ],
            },
            {
                baslik: "Dilimin kapanışı ve sonraki dükkâna geçiş",
                paragraflar: [
                    "Her raf diliminde önce yük yerleşiminin işletme sorumlusu tarafından kabulü alınır. Ardından gerekliyse platform hücresi açılır; bağlantı, etiket veya koruma kontrolü tamamlanır. Alet ve sökülen parça sayılır, platform indirilir, bariyer ancak alan güvenli biçimde boşaldığında kaldırılır. Açık konu varsa raf gözü ve sebebiyle yazılır; tamamlanmamış iş bitmiş gibi devredilmez.",
                    "Aynı gün başka dükkâna geçilecekse makinelerin temizliği, görünür hasar kontrolü ve taşıma sabitlemesi yeniden yapılır. Önceki işletmenin yük bilgisi veya yerleşim kararı sonraki iş için varsayım oluşturmaz. Yeni adres kendi kapı, zemin ve raf dosyasıyla kabul edilir. Böylece ortak sevkiyat ekonomisi, birbirinden farklı KSS işlerini tek bir genel reçeteye dönüştürmez.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forklift ile platform raf koridorunda aynı anda çalışabilir mi?",
                cevap:
                    "Aynı koridorda ve kesişen hareket zarflarında çalıştırılmaz. Forklift yükü yetkili göze yerleştirir, çatallarını güvenli konuma indirir ve belirlenmiş bekleme alanına çıkar. Yük hareketi durduktan sonra platform hücresi devralır ve personel erişim işi başlar. Platform tamamen indikten, aletler sayıldıktan ve bariyer devredildikten sonra forklift yeniden girebilir. Fiziksel olarak bağımsız koridorlar varsa paralel çalışma tesis risk değerlendirmesiyle ayrıca ele alınır; yalnız zaman kazanmak için iki makine yan yana bırakılmaz.",
            },
            {
                soru: "Platform sepetinden paleti rafa itebilir miyiz?",
                cevap:
                    "Hayır. Platform personel ile izin verilen küçük el aletlerini erişim noktasına taşır; palet yerleştirme veya yük elleçleme ekipmanı değildir. Sepete yük bağlamak, korkuluk dışına parça uzatmak ya da sepeti palete dayamak kabul edilmez. Paletli malzeme uygun forklift, yük bilgisi ve yetkili raf kararıyla konumlandırılır. Personelin üst bağlantı veya etiket işi varsa yük sabitlendikten ve forklift koridoru terk ettikten sonra ayrı platform diliminde tamamlanır.",
            },
            {
                soru: "Dükkân önündeki ortak yol açıkken araç boşaltılabilir mi?",
                cevap:
                    "Yalnız taşıyıcının, forklift dönüş zarfının ve düşebilecek yük alanının trafikten fiziksel olarak ayrılabildiği koşulda kontrollü plan kurulabilir. Birkaç koni koymak yeterli değildir. Komşu girişleri, yaya çıkışları ve acil geçiş gözden geçirilir; işletmeler önceden bilgilendirilir. Ayrım kurulamıyorsa ilgili kesit kısa süre kontrollü kapatılır veya mal kabulü daha uygun pencereye taşınır. Araç sabitlenmeden ve sürücüyle açık iletişim kurulmadan indirme başlamaz.",
            },
            {
                soru: "Hangi forkliftin uygun olduğuna nasıl karar veriyorsunuz?",
                cevap:
                    "Yükün doğrulanmış kütlesi, ağırlık merkezi, taşıma biriminin durumu, kaldırma seviyesi, ataşman, koridor genişliği, dönüş ve zemin birlikte incelenir. Yalnız en ağır görünen yüke veya katalogdaki tek kapasite değerine bakılmaz; üreticinin yük tablosu esas alınır. Kapı ve rota ölçüleri fotoğrafla desteklenir. Bilgi eksikse yük kaldırılmaz, işletmeden belge veya saha doğrulaması istenir. Rafın taşıma uygunluğunu ise makine sağlayıcısı değil işletmenin yetkili sorumlusu belirler.",
            },
            {
                soru: "Bu hizmet çatı, cephe veya mobilya tavan bakımını da kapsıyor mu?",
                cevap:
                    "Bu kayıt onları kapsamaz. Buradaki kapsam araçtan mal kabulü, zeminde güvenli taşıma, yetkili raf gözüne yerleştirme ve raf çevresindeki personel erişimidir. Çatı ile dış cephe eklemli platform geometrisi ayrı B4 içeriğinde; mobilya atölyesinin düz iç tavan aksındaki makaslı kullanım ise B9 içeriğinde ele alınır. Gerçek talepte bu işlerden biri de varsa bağımsız hedef, makine sınıfı ve çalışma penceresi hazırlanır; yükleme-raf paketine sessizce eklenmez.",
            },
            {
                soru: "İki makineyi birlikte istemek her işte daha ekonomik midir?",
                cevap:
                    "Hayır. İş listesi yalnız palet indirme ve zemin taşımadan oluşuyorsa platform göndermek; yalnız raf üstü personel erişimi varsa forklift göndermek gereksiz olabilir. Paket ancak iki ayrı görevin de doğrulandığı, saha sırasının kurulabildiği ve taşıma planının buna uygun olduğu durumda değerlendirilir. Teklifte her makinenin görevi, kullanım dönemi ve teslim koşulu ayrı görünür. Ekonomik karar yalnız sevkiyat sayısına değil, hazır işlerin güvenle kapanmasına ve bekleme riskine göre verilir.",
            },
        ],
        kaynak:
            "Özgün kayıt 2026-08-13 tarihinde hazırlandı. Bozüyük Küçük Sanayi Sitesi adı uygulama belgesinin genel coğrafi çapasıdır; belirli dükkân, raf sistemi, yük, kapasite, araç sayısı veya işletme verisi kullanılmamıştır. Yük kabul hücresi, forklift-platform görev ayrımı ve dilimli saha devri sektör geneli uygulama çerçevesidir. Çatı-cephe ile mobilya iç tavan temaları kapsam dışıdır.",
    },
    "bolge:sakarya-cevre-ili": {
        h1: "Bozüyük'ten Sakarya Yönündeki Depolara Forklift ve Platform Paket Sevki",
        giris:
            "Sakarya çevre ili kaydında B11'in konusu otoyol üzerindeki metal işleme bakım penceresi veya terminal-liman akışına tek platform entegrasyonu değildir. Buradaki mercek, komşu il yönündeki doğrulanmış bir depo talebinde forklift ile personel yükseltme platformunun ortak sevkiyat dosyasında buluşmasıdır. Belirli depo, güzergâh, mesafe, liman, terminal, yük hacmi, araç sayısı veya kapasite hakkında iddia kurulmaz. Talep sahibi iki iş listesini ayrı verir: forkliftin yürüteceği palet kabulü, zemin taşıması ve uygun raf yerleştirmesi; platformun yürüteceği raf üstü işaretleme, aydınlatma, koruyucu veya teknik erişim kalemleri. Ortak paket, makinelerin birbirinin yerine kullanılması ya da aynı çalışma hücresine birlikte sokulması anlamına gelmez. Sevkiyat öncesinde her ünitenin taşıma biçimi, indirme alanı, operatörü, enerji gereksinimi ve geri alma koşulu ayrı doğrulanır. Depoya varışta da iki bağımsız kabul yapılır. Gün planı yük hareketi ile yüksek erişimi dilimlere ayırır, sahadaki tek koordinasyon çizelgesi bu iki görevin çakışmasını engeller. Böylece çevre ile yapılan paket sevk, yalnız nakliye kolaylığı değil, depo içinde görev sınırlarını koruyan ölçülebilir bir teslim modeli olur.",
        maddeler: [
            {
                baslik: "İki makine için ayrı taşıma ve indirme dosyası kurmak",
                metin:
                    "Forklift ile platformun ölçüsü, kütlesi, sabitleme noktası ve taşıma gereksinimi aynı kabul edilmez. Nakliye düzeni uygun taşıyıcı kapasitesi ve üretici talimatıyla hazırlanır; tek araçta taşınabilecekleri peşinen varsayılmaz. Depodaki giriş kapısı, ağır araç dönüşü, indirme yüzeyi ve saha irtibatı iki ünite için kontrol edilir. Varış bildirimi ortak olabilir, ancak indirme sırayla ve ayrılmış alanda yapılır. Bir makine taşıyıcıdan alınırken diğeri sahada dolaştırılmaz. İndirme sonrasında görünür kontrol tamamlanır, hasar veya eksik varsa işe başlamadan kayda girer.",
            },
            {
                baslik: "Depo talebini forklift ve platform listelerine bölmek",
                metin:
                    "İş emrindeki her kalem, yük mü yoksa insan erişimi mi gerektirdiğine göre sınıflandırılır. Palet indirme, zeminde taşıma ve raf yerleşimi uygun forklift görevidir. Raf etiketi, üst bağlantı gözlemi, armatür, kamera veya benzeri personel işi uygun platformla yürütülür. Forklift çatalında insan yükseltilmez; platform sepetinde palet taşınmaz. Bir kalem iki makineyi gerektiriyorsa sıra yazılır: malzeme konumlanır, forklift çıkar, yük güvenli hâle getirilir ve platform hücresi açılır. Belirsiz kalem keşfe bırakılır, sevkiyat günü operatöre doğaçlama görev verilmez.",
            },
            {
                baslik: "Paket varışını depo kabul kapasitesine bağlamak",
                metin:
                    "İki ünitenin aynı dönemde gelmesi depo kapısında iki kat alan bulunacağı anlamına gelmez. İşletme kabul alanında hangi makinenin önce indirileceğini, diğerinin nerede güvenle bekleyeceğini ve yük araçlarının hangi rotayı kullanacağını belirler. Planlanmış hücre hazır değilse taşıyıcı rastgele rampaya alınmaz. Forklift, platform indirmesi için yük veya çekici taşımak amacıyla kullanılmaz; her boşaltma uygun yöntemle yapılır. Kabul tamamlanınca makineler görev alanlarına ayrı rotalardan ya da sırayla geçirilir. Bu disiplin ortak sevkiyatı depo girişinde yeni bir sıkışıklığa dönüştürmez.",
            },
            {
                baslik: "Vardiya çizelgesinde kesişmeyen çalışma dilimleri açmak",
                metin:
                    "Forklift yoğun mal kabulü ve raf beslemesini yürütürken platformun bomu veya sepeti aynı koridora açılmaz. Depo planı koridor, saat ve sorumlu bilgisiyle dilimlenir. Fiziksel olarak ayrılmış hacimler varsa paralel iş ayrıca değerlendirilebilir; görüşün zayıf olduğu, yaya trafiğinin sürdüğü veya hareket zarflarının kesiştiği yerde sıra zorunludur. Dilim devrinde forklift park edilir, çatallar indirilir ve anahtar kontrolü sağlanır. Platform ancak bariyer ile alt alan teslim edildikten sonra yükselir. Değişiklik gerektiğinde iki operatör ve depo sorumlusu aynı çizelgeyi günceller.",
            },
            {
                baslik: "Dönüşü tek çağrı değil iki kapanışla planlamak",
                metin:
                    "Forklift işi platformdan önce bitebilir veya yüksek erişim kalemleri malzeme hazırlığı nedeniyle ertelenebilir. Bu yüzden geri alma kararı yalnız ilk makinenin boş kalmasına bakılarak verilmez. Her ünitenin açık işi, temizlik durumu, şarj ya da yakıt koşulu, görünür hasarı ve yükleme alanı ayrı doğrulanır. Ortak taşıma uygulanacaksa ikisinin de kapanış saati ile taşıyıcı uygunluğu eşleştirilir; gereksiz bekleme oluşuyorsa ayrı dönüş seçeneği değerlendirilir. Makine, işletme teslimi tamamlanmadan yalnız nakliye fırsatı doğdu diye sahadan çıkarılmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sakarya depo paketinde sevk ve görev tablosu",
                paragraflar: [
                    "Aşağıdaki çerçeve herhangi bir Sakarya deposuna ilişkin tesis verisi değildir; gerçek talepte iki makinenin ortak programını kurmak için genel karar noktalarını gösterir.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Forklift dosyası", "Platform dosyası", "Ortak karar"],
                    satirlar: [
                        ["Sevk öncesi", "Yük ve ataşman", "Hedef ve erişim", "Taşıma düzeni"],
                        ["Saha kabulü", "İndirme ve rota", "İndirme ve park", "Sıralı hücre"],
                        ["Depo işi", "Palet hareketi", "Personel erişimi", "Kesişmeyen dilim"],
                        ["Ara teslim", "Raf yerleşim kaydı", "Teknik nokta kaydı", "Sorumlu onayı"],
                        ["Geri alma", "Ayrı durum kontrolü", "Ayrı durum kontrolü", "Taşıyıcı eşleşmesi"],
                    ],
                },
            },
            {
                baslik: "Paket teklifini sahadaki görev sınırına çevirmek",
                paragraflar: [
                    "Teklifte forklift ve platform ayrı satırlarda; makine sınıfı, görev, çalışma dönemi, operatör düzeni ve taşıma koşuluyla görünür. Paket ifadesi, her iki makinenin her işi yapacağı belirsiz bir hizmet başlığına dönüşmez. Depo yük listesini ve yüksek erişim hedeflerini fotoğraf, ölçü ve saha kuralıyla paylaşır. Eksik bilgi için koşullu seçenek yazılır, doğrulanmamış kapasite veya erişim sözü verilmez.",
                    "Program değiştiğinde yeni iş doğru listeye eklenir. Yeni palet hareketi platform süresine, yeni tavan hedefi forklift süresine yazılmaz. İlave görev makine uygunluğunu veya dönüşü etkiliyorsa teklif ve çizelge güncellenir. Bu şeffaflık ortak sevkiyatın faydasını korurken kapsamın sahada sessizce büyümesini önler.",
                ],
            },
            {
                baslik: "Depoda ortak koordinasyon, bağımsız teknik teslim",
                paragraflar: [
                    "Günlük koordinasyon toplantısında aktif koridorlar, mal kabulü, platform hücreleri, yaya rotaları ve bekleme alanları tek plan üzerinde görülür. Buna karşılık teknik kontrol formları makineye özgüdür. Forklift operatörü yük ve hareket kaydını, platform operatörü erişim noktası ve alt alan kaydını kapatır. Depo sorumlusu her iki devri kendi yetkisi içinde onaylar.",
                    "İş sonunda koridorlarda ambalaj, alet veya sökülen parça bırakılmaz. Makineler temiz ve güvenli park konumuna alınır; şarj bağlantısı ya da yakıt işlemi işletmenin belirlediği alanda yapılır. Taşıyıcı gelmeden sabitleme hazırlığı ve çıkış yolu kontrol edilir. Ortak çıkış yapılacaksa sıra önceden belirlenir, diğer depo araçlarının hareketiyle çakışan doğaçlama yükleme yapılmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forklift ve platform mutlaka aynı taşıyıcıyla mı gönderilir?",
                cevap:
                    "Hayır. Her makinenin ölçüsü, kütlesi, sabitleme yöntemi ve yürürlükteki taşıma koşulları değerlendirilir. Uygun ve mevzuata uyumlu bir ortak taşıma düzeni kurulabiliyorsa seçenek olarak planlanabilir; aksi durumda ayrı araçlar aynı kabul programına bağlanır. Paket hizmetin özü tek taşıyıcı değil, görev ve saha koordinasyonudur. Depodaki indirme alanı da iki ünitenin sırayla güvenle kabul edilebilmesine uygun olmalıdır. Taşıma kararı doğrulanmış makine bilgisi olmadan verilmez.",
            },
            {
                soru: "Paket hizmet terminal veya liman sahasında da geçerli mi?",
                cevap:
                    "Bu kayıt terminal ya da liman operasyonunu anlatmaz. B11'in sınırı, Sakarya yönündeki doğrulanmış depo talebine forklift ve platform görevlerini birlikte sevk etmektir. Terminal kapı randevusu, liman yönlü araç akışı ve aktarma hücresi B7'nin ayrı merceğidir. Gerçek adres bu tür özel bir saha ise işletmenin kuralları, trafik modeli ve gerekli ekipman baştan ayrıca değerlendirilir; depo paketi koşulları otomatik olarak taşınmaz.",
            },
            {
                soru: "Bu sayfadaki sevkiyat TEM üzerindeki metal bakım penceresini kapsıyor mu?",
                cevap:
                    "Hayır. Otoyol penceresiyle metal işleme tesisine manlift yetiştirme, sıcak iş ve vinç yolu ayrımı B6'nın bağımsız konusudur. Burada belirli yol, süre veya metal tesisi varsayılmadan iki farklı makinenin depo görevlerine hazırlanması ele alınır. Güncel güzergâh ve yol koşulu taşıma sırasında elbette yetkili kaynaklardan kontrol edilir, fakat içerik bir TEM süresi ya da metal bakım vaadi kurmaz. Talep metal tesisi bakımıysa ayrı saha dosyası gerekir.",
            },
            {
                soru: "Forklift operatörü platformu, platform operatörü forklifti kullanabilir mi?",
                cevap:
                    "Yalnız ilgili makine için gerekli yetkinliği, işletme kabulünü ve görevlendirmeyi ayrı ayrı taşıyan kişi o ünitenin operatörü olabilir. Bir makinede yetkili olmak diğerinde otomatik yetki sağlamaz. Paket programda operatör isimleri ve görevleri vardiya öncesinde doğrulanır. Devir gerekiyorsa sözlü rica yeterli değildir; yetkinlik ve saha prosedürü yeniden kontrol edilir. Makine anahtarları kontrol altında tutulur ve kullanım kayıtları birbirinden ayrı korunur.",
            },
            {
                soru: "Depoda hangi işler iki makineyi birlikte gerektirir?",
                cevap:
                    "Örneğin uygun paletli malzemenin kabul edilip yetkili raf gözüne yerleştirilmesi forklift, ardından raf üstündeki etiket, koruyucu veya erişilebilir bağlantının personelce kontrolü platform gerektirebilir. Ancak bu örnek her depo için ihtiyaç iddiası değildir. İşletme gerçek listesini verir; yük, raf ve hedef geometrisi incelenir. Yalnız bir makineyle güvenle kapanan iş için gereksiz paket önerilmez. İki görev varsa bile aynı anda değil, hareket zarfları ayrılmış dilimlerle yürütülür.",
            },
            {
                soru: "Makineler farklı günlerde biterse geri alma nasıl yapılır?",
                cevap:
                    "Her ünitenin açık işleri ve sonraki rezervasyonu ayrı izlenir. Erken biten makinenin güvenli park, enerji ve yetkisiz erişim koşulu uygunsa ortak dönüşü beklemesi değerlendirilebilir; bekleme işletmeye veya programa yük getiriyorsa ayrı taşıma planlanabilir. Karar sözleşmedeki koşul, taşıyıcı uygunluğu ve depo kabul-çıkış düzeniyle verilir. Her durumda durum kontrolü, temizlik, teknik teslim ve yükleme alanı hazırlığı tamamlanmadan geri alma başlamaz.",
            },
        ],
        kaynak:
            "Bu özgün içerik 2026-08-13 tarihinde oluşturuldu. Sakarya yalnız uygulama belgesindeki çevre il çapasıdır; belirli depo, terminal, liman, metal tesisi, güzergâh, mesafe, süre, yük, kapasite veya araç adedi ileri sürülmemiştir. Forklift-platform görev ayrımı, bağımsız kabul ve ortak depo çizelgesi sektör genelindeki planlama ilkeleridir. TEM-metal bakım ve terminal-liman temaları kapsam dışıdır.",
    },
    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Bozüyük'te TOKİ Toplu Konut Şantiyesinde Dar Blok Aralarına Sepetli Örümcek Platform",
        giris:
            "TOKİ toplu konut projelerinin inşaat aşaması bittiğinde bile şantiye sahası hemen sıradan bir mahalle görünümüne kavuşmaz: bloklar arası servis yolları henüz asfaltlanmamış, çevre düzenlemesi tamamlanmamış, bazı bloklar arasındaki mesafe ise proje planında öngörülenden dar kalmıştır, çünkü kalıp iskelesi, malzeme istifi veya geçici şantiye bariyeri o aralığı fiilen daraltmıştır. Aynı darlık, blokların iç avlularında ve henüz teslim edilmemiş dairelerin merdiven boşluklarına açılan dar geçitlerde de karşımıza çıkar. Standart bir makaslı ya da teleskopik platform bu aralıklara giremediğinde iş durmaz; sepetli örümcek platform, ayaklarını nokta nokta açabilme ve parça hâlinde dar bir kapıdan taşınabilme özelliğiyle blok arası dış cephe işini ya da avlu içi bir aydınlatma direği montajını mümkün kılar. Bu sayfada, Bozüyük'teki toplu konut şantiyelerinde bu makine sınıfını hangi darlık senaryolarında ve nasıl bir hazırlıkla devreye aldığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Blok arası servis yolunun kalıp iskelesiyle daralması",
                metin:
                    "Yeni bloğun dış cephesinde kalıp iskelesi kurulu olduğu sürece, iki blok arasındaki servis yolu projede öngörülen genişlikte kalmaz; iskele borusu ve platform ayakları yolun bir kısmını işgal eder. Bu daralmış aralıkta komşu bloğun kendi cephe işini yürütmek gerektiğinde standart makine geçemez. Örümcek platform, ayaklarını iskele hattına paralel açarak bu daralmış şeritte çalışabilir; montaj öncesi iskelenin ayak izleri ile bizim ayak açıklığımızın çakışıp çakışmadığı şantiye şefiyle birlikte yerinde kontrol edilir.",
            },
            {
                baslik: "Henüz asfaltlanmamış blok içi avlu",
                metin:
                    "İnşaat aşamasındaki bir toplu konut adasında blok içi avlu genellikle en son düzenlenen alandır; zemin sıkıştırılmış hafriyat toprağı ya da kaba dolgu durumundadır ve avluyu çevreleyen bloklar arasında dönüş payı sınırlıdır. Avlu içi bir aydınlatma direği ya da ortak alan tavan işi için standart platformun bu zeminde manevra yapması güçtür. Örümcek platform parça hâlinde avluya taşınıp orada monte edilebildiği için hem dönüş payı sorununu hem de zemin taşıma kapasitesi sınırını aşan bir çözüm sunar; zemin sağlamlığı montaj öncesi mutlaka test edilir.",
            },
            {
                baslik: "Teslim öncesi daire ve merdiven boşluğu darlığı",
                metin:
                    "Bazı bloklarda üst kat pencereleri ya da balkon üstü detayları, bina içindeki dar bir merdiven boşluğundan geçirilecek bir makineyle iç taraftan ele alınmak zorunda kalabilir — özellikle dış cepheye erişimin başka bir blok tarafından engellendiği köşe dairelerde. Bu durumda örümcek platform parçalara ayrılıp merdivenden taşınır, ilgili katta yeniden monte edilir. Kapı ve merdiven sahanlığı ölçüleri montaj kararından önce netleştirilir, çünkü taşıma genişliği makinenin en dar parçasıyla sınırlıdır.",
            },
            {
                baslik: "Şantiye trafiğiyle paylaşılan dar geçit",
                metin:
                    "Toplu konut şantiyelerinde aynı dar geçitten hem malzeme taşıyan forklift hem de personel servis aracı geçer; bu geçitte sabit duran bir platform trafiği kilitleyebilir. Örümcek platformun ayak izinin standart makineye göre daha küçük olması, geçidin bir kenarında iş yaparken diğer tarafın açık kalmasına imkân tanır. Çalışma saatleri, şantiyenin malzeme teslim programıyla önceden eşleştirilir ki geçit iki taraf için de tıkanmasın.",
            },
            {
                baslik: "Örümcek platform mu, standart makaslı mı: şantiyede karar sınırı",
                metin:
                    "Blok arası yol henüz kalıp iskelesiyle daralmamışsa ya da avlu düzenlemesi tamamlanıp zemin sertleşmişse standart makaslı platform hem daha hızlı kurulur hem daha ekonomiktir. Örümcek platform yalnızca geçit genişliği, zemin taşıma kapasitesi ya da dönüş payı standart makineyi geçirmediğinde gündeme gelir. Şantiye şefiyle yapılan ön keşifte bu üç ölçü birlikte değerlendirilir ve gereksiz montaj süresi maliyeti önlenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "TOKİ şantiyesinde dar erişim senaryoları",
                paragraflar: [
                    "Bozüyük'teki toplu konut şantiyelerinde karşılaştığımız darlık türlerini ve belirleyici ölçüyü aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Ortam", "Darlık kaynağı", "Kritik ölçü", "Ek koordinasyon"],
                    satirlar: [
                        ["Blok arası servis yolu", "Kalıp iskelesi ayak izi", "Kalan yol genişliği", "Şantiye şefiyle iskele planı"],
                        ["Blok içi avlu", "Sıkıştırılmamış hafriyat zemini", "Zemin taşıma kapasitesi", "Zemin test raporu"],
                        ["Merdiven boşluğu / kat içi", "Dar sahanlık, dar kapı", "Taşıma genişliği", "Kat planı ölçüsü"],
                        ["Şantiye ana geçidi", "Malzeme trafiği", "Ayak izi - geçit payı", "Teslim programıyla saat eşleme"],
                        ["Köşe blok cephesi", "Komşu bloğun engellemesi", "Yatay yaklaşım mesafesi", "Cephe iskele takvimi"],
                    ],
                },
            },
            {
                baslik: "Montaj süresinin şantiye programına etkisi",
                paragraflar: [
                    "Örümcek platformun parça hâlinde taşınıp yeniden monte edilmesi, standart bir makinenin doğrudan sürülüp çalışmaya başlamasına göre belirgin ölçüde daha uzun sürer. Toplu konut şantiyesinde bu süre farkı, günlük iş programı sıkı planlanmışsa dikkate alınması gereken bir kalemdir; bu yüzden montaj süresini her zaman teklifte ayrı gösteririz.",
                    "Şantiye şefiyle koordinasyonda, örümcek platformun kurulacağı noktanın diğer taşeronların o gün kullanacağı bir alanla çakışmadığını önceden teyit ederiz. Aksi hâlde montaj tamamlandıktan sonra alanın boşaltılması istenebilir ve iş baştan planlanmak zorunda kalır.",
                ],
            },
            {
                baslik: "Zemin ve iskele durumunun keşifte kontrolü",
                paragraflar: [
                    "İnşaat aşamasındaki bir alanda zemin, tamamlanmış bir tesisteki gibi standart beton değildir; sıkıştırma derecesi bölgeden bölgeye değişebilir. Montaj öncesi ayakların basacağı noktalarda görsel kontrol yapılır, gerekiyorsa şantiyenin zemin etüdünden veya saha mühendisinden onay istenir.",
                    "Kalıp iskelesi kurulu bir cephede çalışılacaksa iskele sorumlusuyla ayak açıklığımızın iskele hattıyla çakışmadığı ayrıca teyit edilir; iskeleye hiçbir bağlantı ya da yük bindirilmez, örümcek platform bağımsız bir yapı olarak durur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Blok arası yolumuz kalıp iskelesi yüzünden daralmış; örümcek platform buraya sığar mı?",
                cevap:
                    "Büyük olasılıkla evet, ancak önce kalan yol genişliğini ve iskelenin ayak izini birlikte ölçmemiz gerekir. İskeleye hiçbir yük bindirmeden, kalan şeride paralel ayak açarak çalışabiliriz. Ölçüleri ve mümkünse iskele planının bir fotoğrafını paylaşırsanız montajın mümkün olup olmadığını ve süresini net söyleriz; kesin karar yerinde keşifle verilir.",
            },
            {
                soru: "Avlumuz henüz asfaltlanmadı, zemin gevşek; platform bu zeminde çalışabilir mi?",
                cevap:
                    "Zeminin taşıma kapasitesine bağlı. Sıkıştırılmamış dolgu zeminde standart tekerlekli bir makine batabilir ya da dengesini kaybedebilir; bu durumda örümcek platformun ayak plakaları daha küçük bir iz üzerinde daha kontrollü dağılım sağlar, ama yine de zeminin belirli bir sağlamlığa sahip olması gerekir. Montaj öncesi zemini gözle ve gerekirse basit bir sıkıştırma kontrolüyle değerlendiririz; şüpheli durumda şantiye mühendisinden onay isteriz.",
            },
            {
                soru: "Merdivenden taşınıp kat içinde monte edilebiliyor mu, kapı ölçümüz dar olabilir?",
                cevap:
                    "Evet, örümcek platform parçalara ayrılıp dar bir kapıdan taşınabilir; ancak en dar parçanın ölçüsü kapı ve merdiven sahanlığının genişliğinden büyükse taşıma mümkün olmaz. Bu yüzden montaj kararından önce kapı, sahanlık ve varsa merdiven dönüş açısını netleştirmenizi isteriz; ölçüleri paylaşırsanız uygunluğu keşif yapmadan da ön değerlendirebiliriz.",
            },
            {
                soru: "Şantiyede malzeme trafiği yoğun; çalışma saatlerimiz nasıl belirleniyor?",
                cevap:
                    "Şantiye şefinden o günkü malzeme teslim ve forklift trafiği programını alır, çalışmamızı bu programın boşluklarına yerleştiririz. Geçit tamamen kapanmıyor, yalnızca bir kenarı kullanılıyor; buna rağmen yoğun teslim saatlerinde iş durdurulup trafik açık tutulur. Bu koordinasyon için şantiye şefiyle önceden telefonla ya da yerinde kısa bir görüşme yeterlidir.",
            },
            {
                soru: "Köşe dairemizin cephesine komşu blok yüzünden ulaşılamıyor; ne öneriyorsunuz?",
                cevap:
                    "Önce dışarıdan bir yaklaşım açısı olup olmadığını, örneğin komşu bloğun cephesinden değil yan boşluktan bir hat bulunup bulunmadığını değerlendiririz. Dışarıdan hiçbir açı yoksa iç taraftan merdiven yoluyla parça taşıma ve kat içi montaj seçeneğine geçilir. Hangi yöntemin uygun olduğu yerinde keşifle, blokların birbirine göre konumu görülerek karara bağlanır.",
            },
            {
                soru: "Örümcek platformun montaj süresi işin maliyetini çok mu artırıyor?",
                cevap:
                    "Standart makineye göre kurulum belirgin ölçüde daha uzun sürer ve bu süre teklifte ayrı bir kalem olarak görünür. Ama alternatif genellikle iskele kurmak ya da işi ertelemektir; bunların kendi maliyeti ve zaman kaybı vardır. Standart makinenin geçip geçemeyeceğini önce netleştiririz, geçebiliyorsa örümcek platform önerilmez; geçemiyorsa montaj süresini bilerek karar vermeniz için baştan söyleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. TOKİ toplu konut projelerinin inşaat aşamasında blok arası yolların ve avluların henüz tamamlanmamış olması, iskele kurulumunun geçici alan daralttığı genel inşaat pratiğidir (kamuya açık genel bilgi). Ayak açıklığı hesabı ve montaj süresi değerlendirmesi firma saha pratiğidir. Belirli proje adı, blok sayısı veya rakam kullanılmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Bozüyük'te TOKİ Şantiyesine ve Hazır Beton Santraline Makine Nakliye ve Teslimat Hizmeti",
        giris:
            "Bir toplu konut şantiyesinde ya da hazır beton santralinde platform veya forklift talebi doğduğunda, işin gerçek başlangıç noktası makinenin sahaya sağ salim ve doğru zamanda ulaşmasıdır. Şantiye içi teslimat, sıradan bir adrese yapılan teslimattan farklıdır: giriş kapısında güvenlik kaydı, şantiye şefinin yönlendirdiği bir indirme noktası, henüz sıkıştırılmamış zeminler ve aynı anda hareket eden beton mikserleri, kamyonlar ve iş makineleri vardır. Hazır beton santralinde ise indirme noktası genellikle silo ve konveyör hattının hemen yakınıdır ve o hat hiç durmadan çalışmaya devam eder. Nakliye ve teslimat hizmetimiz, makinenin taşınmasından ibaret değildir; şantiyenin ya da santralin o günkü trafik ve güvenlik kurallarına göre indirme noktasını, saatini ve güzergâhını önceden planlamaktır. Bu sayfada Bozüyük'teki bu iki saha tipine teslimatı nasıl kurguladığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Şantiye giriş kapısı ve güvenlik kaydı",
                metin:
                    "TOKİ toplu konut şantiyelerinin çoğunda ana giriş kapısında araç ve personel kaydı tutulur, bazen taşıyıcı aracın plakası önceden bildirilmesi istenir. Bu kayıt süreci teslimat saatini uzatabileceği için taşıyıcının kapıya varış saatini şantiye şefiyle önceden paylaşırız; kayıt bekleme süresi programa dahil edilmezse ilk iş gecikmeyle başlar. Giriş sonrası indirme noktasına kadar olan iç güzergâh da şantiye trafiğine göre şantiye şefinden alınır, tahmini bir yol izlenmez.",
            },
            {
                baslik: "Hazır beton santralinde konveyör hattı yakınında indirme",
                metin:
                    "Santraldeki indirme noktası genellikle silo, konveyör bandı ya da yükleme hunisinin hemen çevresindedir ve bu hat üretim sırasında durmaz. Taşıyıcı aracın konveyör hattına ya da yükleme koridoruna araç geçişini engellemeyecek bir noktaya park etmesi gerekir; bu nokta santral yetkilisiyle teslimattan önce netleştirilir. İndirme sırasında hattın çalışır durumda kalması hem üretim sürekliliği hem de güvenlik açısından önceden konuşulan bir konudur.",
            },
            {
                baslik: "Henüz sıkıştırılmamış şantiye zemininde indirme noktası",
                metin:
                    "İnşaat aşamasındaki bir alanda taşıyıcının indirme rampasını indireceği zemin her zaman sağlam beton değildir; sıkıştırılmış hafriyat ya da kaba dolgu olabilir. Bu durumda rampa altına destek plakası konur, indirme öncesi zemin gözle kontrol edilir. Zeminin taşıma kapasitesi şüpheliyse indirme noktası şantiye şefiyle birlikte daha sağlam bir alana kaydırılır; riskli bir zeminde ısrar edilmez.",
            },
            {
                baslik: "Aynı anda hareket eden beton mikseri ve iş makineleri",
                metin:
                    "Şantiye ve santral sahalarında aynı anda birden fazla ağır araç hareket eder — beton mikseri, kamyon, forklift, bazen vinç. Bizim taşıyıcımızın indirme yaptığı süre boyunca bu trafiğin bir kısmı geçici olarak durdurulur ya da yönlendirilir; bu koordinasyonu şantiye ya da santral trafik sorumlusuyla önceden kurarız. Trafik yoğun saatlerde teslimat mümkünse daha sakin bir dilime kaydırılır.",
            },
            {
                baslik: "Teslim sonrası makinenin çalışma noktasına sevki",
                metin:
                    "Makine indirildikten sonra kendi gücüyle ya da kısa bir yükleme ile çalışacağı noktaya götürülür; bu son metre genellikle indirme noktasından farklıdır ve şantiye içi dar bir geçitten geçmeyi gerektirebilir. Bu son sevkiyat, teslimat planının parçası olarak baştan hesaplanır; aksi hâlde makine sahada duruyor ama çalışma noktasına ulaşamıyor olabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Şantiye ve santral teslimatında dikkat noktaları",
                paragraflar: [
                    "Toplu konut şantiyesi ile hazır beton santralinin teslimat koşulları farklı risk noktaları taşır; bunları aşağıdaki tabloda ayırdık.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Baskın risk", "İndirme noktası kararı", "Ek koordinasyon"],
                    satirlar: [
                        ["TOKİ şantiyesi ana kapı", "Güvenlik kaydı gecikmesi", "Şantiye şefi yönlendirmesi", "Plaka önceden bildirim"],
                        ["Şantiye iç alan", "Sıkıştırılmamış zemin", "Zemin kontrolüyle seçim", "Destek plakası"],
                        ["Beton santrali konveyör çevresi", "Sürekli çalışan hat", "Hat dışı park noktası", "Santral yetkilisi onayı"],
                        ["Şantiye trafik koridoru", "Mikser/kamyon yoğunluğu", "Sakin saat dilimi", "Trafik sorumlusu koordinasyonu"],
                        ["Çalışma noktasına son sevkiyat", "Dar geçit", "Baştan planlanmış güzergâh", "Şantiye şefi eşliği"],
                    ],
                },
            },
            {
                baslik: "Teslimat saatinin şantiye programıyla eşleşmesi",
                paragraflar: [
                    "Şantiyeler genellikle günün belirli saatlerinde malzeme kabulüne yoğunlaşır; bu saatlere denk gelen bir teslimat, giriş kapısında uzun bekleme anlamına gelebilir. Mümkün olduğunda teslimat saatini şantiyenin daha sakin olduğu bir dilime, örneğin öğleden sonranın ilk saatlerine planlarız.",
                    "Hazır beton santralinde ise üretim programı, o günkü döküm siparişlerine göre değişir; santral yetkilisiyle teslimat saatini görüşürken o günkü döküm yoğunluğunu da sorarız, çünkü yoğun bir döküm saatinde konveyör hattına yakın park etmek mümkün olmayabilir.",
                ],
            },
            {
                baslik: "Teslimat öncesi bizden istenen bilgiler",
                paragraflar: [
                    "Sağlıklı bir teslimat planı için şantiye ya da santral adresinin yanında giriş kapısı prosedürü, varsa gerekli evrak, indirme noktasının yaklaşık konumu ve o gün sahada aktif olacak diğer araç trafiği hakkında bilgi isteriz. Bu bilgiler ne kadar erken paylaşılırsa güzergâh ve saat planı o kadar netleşir.",
                    "Bilgi eksik geldiğinde teslimat günü sahada beklenmedik bir kısıtla karşılaşma riski artar; bu yüzden özellikle ilk kez çalıştığımız şantiyelerde teslimattan önce kısa bir telefon görüşmesini tercih ederiz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Şantiyemizin giriş kapısında araç kaydı zaman alıyor; bu bekleme teslimat saatimizi etkiler mi?",
                cevap:
                    "Etkileyebilir, bu yüzden taşıyıcının kapıya varış saatini ve plakasını önceden şantiye şefiyle paylaşırız ki kayıt işlemi mümkün olduğunca hızlı tamamlansın. Kayıt süresini teslimat planına dahil ederiz; yani sizinle konuştuğumuz saat, kapıdan içeri giriş değil, indirme noktasına varış saatidir. Kapıdaki prosedürü önceden bildirirseniz planlama daha net olur.",
            },
            {
                soru: "Beton santralimizin konveyör hattı hiç durmuyor; teslimat sırasında hattı etkiler misiniz?",
                cevap:
                    "Hedefimiz hattı hiç etkilememek. Taşıyıcı aracı konveyör ve yükleme koridorunun dışında, santral yetkilisinin gösterdiği bir noktaya park ettiririz; indirme bu noktadan yapılır ve hat kesintisiz çalışmaya devam eder. Santral yetkilisiyle önceden hangi noktanın uygun olduğunu görüşmeden teslimat planlamayız.",
            },
            {
                soru: "Şantiye zeminimiz henüz sıkıştırılmadı, taşıyıcı rampası batabilir mi?",
                cevap:
                    "Riski önceden görmek için indirme noktasını teslimattan önce gözle değerlendiririz; şüpheli zeminde rampa altına destek plakası koyar veya daha sağlam bir noktaya kaydırırız. Zeminin taşıma kapasitesi net değilse şantiye şefinden veya saha mühendisinden bilgi isteriz; riskli bir zeminde ısrarla indirme yapılmaz.",
            },
            {
                soru: "Aynı gün sahada beton mikseri de olacak, çakışma yaşanır mı?",
                cevap:
                    "Bu tür çakışmaları önlemek için trafik sorumlusuyla önceden koordinasyon kurarız; teslimatımızı mikser trafiğinin en yoğun olmadığı bir dilime yerleştirmeye çalışırız. Çakışma kaçınılmazsa kısa bir bekleme süresi kabul edilir, ama bu süre baştan planlanır, sahada doğaçlama beklenmez.",
            },
            {
                soru: "Makine indirildikten sonra çalışacağı noktaya kendi mi gidiyor, yoksa siz mi götürüyorsunuz?",
                cevap:
                    "Genellikle makine kendi gücüyle ya da kısa bir refakatle çalışma noktasına götürülür; bu son sevkiyatı teslimat planının parçası olarak baştan hesaplarız, özellikle güzergâh dar bir geçitten geçiyorsa. Şantiye şefinin eşliğinde yapılan bu son adım, teslimatın tamamlanmış sayılması için gerekli bir aşamadır.",
            },
            {
                soru: "İlk kez sizinle çalışıyoruz, teslimat için bizden ne bekliyorsunuz?",
                cevap:
                    "Giriş kapısı prosedürünüzü, varsa gerekli evrakı, indirme noktasının yaklaşık yerini ve o gün sahada aktif olacak diğer araç trafiğini önceden bilmek isteriz. İlk teslimatlarda kısa bir telefon görüşmesiyle bu bilgileri netleştiririz; böylece sahada sürpriz kısıtla karşılaşma riski azalır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Şantiye giriş güvenlik kaydı ve hazır beton santrallerinde konveyör hattının kesintisiz çalışması sektör genelinde bilinen genel saha pratiğidir. Teslimat planlama ve zemin kontrolü firma saha pratiğidir. Belirli şantiye adı, santral markası veya rakam kullanılmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Bozüyük'te TOKİ Şantiyesi Malzeme Deposunda Forklift ve İstifleme Kiralama",
        giris:
            "Bir toplu konut şantiyesinin malzeme deposu, tamamlanmış bir depo binasından çok farklı işler: tuğla ve blok paletleri açık havada, bazen üzeri örtülü bir alanda istiflenir, demir donatı demetleri boyuna göre ayrılmış hâlde yan yana durur, kalıp panelleri kullanım sırasına göre gruplanır ve çimento torbaları nem almayacak bir zeminde tutulur. Bu malzeme çeşitliliği, tek bir istifleme kalıbıyla çalışılamayacağı anlamına gelir — bir palet tuğla ile bir demet donatı çeliğinin ağırlık merkezi, kaldırma noktası ve istifleme yüksekliği aynı değildir. Forklift hizmetimiz bu çeşitliliği gözeterek kurgulanır: hangi malzemenin hangi çatalla, hangi hızda ve hangi istif düzeninde taşınacağı şantiye deposunun kendi düzenine göre belirlenir. Bu sayfada Bozüyük'teki toplu konut şantiyelerinin malzeme deposunda forklift kullanımını nasıl planladığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Tuğla ve blok paletlerinin açık alan istiflemesi",
                metin:
                    "Tuğla ve gazbeton blok paletleri genellikle açık şantiye alanında, zemin sertliği ve drenajı yeterli bir bölgede istiflenir. İstif yüksekliği paletin kendi taşıma kapasitesine ve zeminin sağlamlığına göre sınırlanır; aşırı yüksek istif hem devrilme riski taşır hem de forklift çatalının üst paleti indirirken görüş açısını kapatır. İstif düzeni, şantiyenin günlük tüketim sırasına göre kurulur — en yakın kullanılacak malzeme erişilebilir kenarda tutulur.",
            },
            {
                baslik: "Demir donatı demetlerinin taşınması ve istiflenmesi",
                metin:
                    "Donatı demetleri uzun ve esnek olduğu için forklift çatalıyla taşınırken denge merkezi paletli bir yükten farklıdır; demet ortadan değil, ağırlık merkezine yakın bir noktadan kaldırılır ve taşıma sırasında uç sarkması kontrol edilir. İstifleme sahasında demetler çapına ve boyuna göre ayrı gruplanır, çünkü şantiyedeki demir bükümü ve kesim ekibi doğru çapı hızlı bulabilmelidir. Demet bağlarının taşıma sırasında gevşememesi için kaldırma öncesi bağ durumu kontrol edilir.",
            },
            {
                baslik: "Kalıp panellerinin kullanım sırasına göre gruplanması",
                metin:
                    "Kalıp iskelesi ve panel sistemleri, bloğun hangi katının döküleceğine göre belirli bir sırayla sahaya taşınır; depoda rastgele istiflenmiş bir panel yığını, doğru parçayı bulmak için zaman kaybettirir. Forklift operasyonunda panel grupları, şantiyenin döküm takvimine göre önceden belirlenen bir sırayla depoda tutulur ve her grup ayrı bir bölgeye yerleştirilir. Panellerin kenar profili hassas olduğu için çatal genişliği ve kaldırma noktası panel üreticisinin önerdiği aralığa göre ayarlanır.",
            },
            {
                baslik: "Çimento ve kuru harç torbalarının nem kontrolü",
                metin:
                    "Çimento torbaları nemden en çok etkilenen malzeme grubudur; bu yüzden istif alanı zeminden yükseltilmiş bir palet üzerinde ve mümkünse üzeri örtülü bir bölgede kurulur. Forklift bu alanda çalışırken istif yüksekliğini torbanın kendi dayanım sınırının altında tutar, çünkü aşırı yüklenmiş bir torba istifi alt sıradaki torbaları ezip malzemeyi kullanılamaz hâle getirebilir. Yağışlı dönemlerde istif alanı önceden şantiye şefiyle birlikte gözden geçirilir.",
            },
            {
                baslik: "Şantiye içi malzeme sevkiyatının kata göre planlanması",
                metin:
                    "Malzeme depodan çıkıp bloğun ilgili katına ya da döküm noktasına ulaşana kadar forklift, şantiye içindeki dar ve zaman zaman değişen bir güzergâh kullanır. Bu güzergâh günlük olarak şantiye şefinden teyit edilir, çünkü bir önceki gün açık olan bir yol o gün yeni bir hafriyat ya da kalıp kurulumuyla kapanmış olabilir. Sevkiyat sırası, o günkü döküm ya da montaj programına göre önceden belirlenir; malzeme rastgele değil, ihtiyaç sırasına göre taşınır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Şantiye malzeme deposunda istifleme türleri",
                paragraflar: [
                    "Bozüyük'teki toplu konut şantiyelerinin malzeme deposunda karşılaştığımız başlıca malzeme gruplarını ve istifleme yaklaşımını aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Malzeme grubu", "Baskın risk", "İstif yaklaşımı", "Ek dikkat"],
                    satirlar: [
                        ["Tuğla / gazbeton blok", "Devrilme, görüş kapanması", "Tüketim sırasına göre kenar istif", "Zemin sertliği kontrolü"],
                        ["Demir donatı demeti", "Uç sarkması, denge kayması", "Çap/boy grupları hâlinde", "Bağ durumu kontrolü"],
                        ["Kalıp paneli", "Kenar hasarı, karışma", "Döküm sırasına göre bölge", "Üretici kaldırma noktası"],
                        ["Çimento / kuru harç", "Nem, ezilme", "Yükseltilmiş, örtülü istif", "Yükseklik sınırı"],
                        ["Karma şantiye sevkiyatı", "Değişken güzergâh", "Günlük şantiye şefi teyidi", "İhtiyaç sırasına göre taşıma"],
                    ],
                },
            },
            {
                baslik: "Operatör deneyiminin malzeme çeşitliliğindeki rolü",
                paragraflar: [
                    "Bir şantiye deposunda tek bir gün içinde tuğla paleti, demir demeti ve kalıp paneli art arda taşınabilir; her biri farklı bir kaldırma tekniği gerektirir. Operatörlerimiz bu geçişi malzeme değiştikçe çatal aralığını, kaldırma hızını ve istif noktasını yeniden değerlendirerek yönetir; aynı sabit ayarla her malzemeyi taşımaya çalışmak hasar ya da devrilme riskini artırır.",
                    "Yeni bir şantiyede ilk günler operatör, depo düzenini ve şantiye şefinin öncelik sırasını öğrenmeye ayrılır; bu tanışma süreci sonraki günlerdeki akışı belirgin şekilde hızlandırır.",
                ],
            },
            {
                baslik: "Şantiye deposunda güvenlik önceliği",
                paragraflar: [
                    "Malzeme deposu, şantiyenin en yoğun yaya-araç trafiğinin yaşandığı alanlardan biridir; forklift her manevrada görüş açısını kontrol eder ve yaya geçişinin yoğun olduğu saatlerde hızını düşürür. İstif yüksekliği, hem malzeme dayanımı hem de operatörün üst sırayı güvenli görebilmesi için sınırlanır.",
                    "Depo düzeni zaman zaman şantiye programına göre değişir; yeni bir malzeme grubu geldiğinde ya da bir bölge boşaltıldığında güncel yerleşim şantiye şefiyle birlikte gözden geçirilir, eski düzene göre hareket edilmez.",
                ],
            },
        ],
        sss: [
            {
                soru: "Depomuzda hem tuğla hem demir hem kalıp paneli var; aynı forklift hepsini taşıyabilir mi?",
                cevap:
                    "Evet, ama her malzeme grubu için çatal ayarı ve kaldırma tekniği ayrı değerlendirilir. Tuğla paletinde standart çatal aralığı yeterliyken demir demetinde ağırlık merkezine göre kaldırma noktası, kalıp panelinde ise üreticinin önerdiği kaldırma aralığı esas alınır. Operatörlerimiz bu geçişi malzeme değiştikçe yeniden ayarlayarak yapar; sabit bir ayarla her malzemeyi taşımaya çalışmayız.",
            },
            {
                soru: "İstif yüksekliğimizi kim belirliyor, bizim tercihimiz mi geçerli?",
                cevap:
                    "İstif yüksekliği malzemenin kendi dayanım sınırı ve zeminin taşıma kapasitesiyle belirlenir; şantiyenin alan kısıtı da bir etken olabilir ama güvenlik sınırının üzerine çıkılmaz. Sizin tercih ettiğiniz bir düzen varsa bunu değerlendiririz, ancak aşırı yüksek istif önerisi karşısında güvenli üst sınırı net olarak söyleriz ve gerekçesini paylaşırız.",
            },
            {
                soru: "Demir donatı demetlerimiz uzun, taşırken sarkma yaşanır mı?",
                cevap:
                    "Uzun demetlerde belirli bir sarkma doğaldır ve kaldırma noktası buna göre seçilir; amaç sarkmayı sıfırlamak değil, kontrollü ve öngörülebilir tutmaktır. Demet bağlarının sağlam olması bu kontrolün ön koşuludur; bağı gevşek görünen bir demeti taşımadan önce bağlamayı yeniler ya da şantiyeden bağ yenilemesini isteriz.",
            },
            {
                soru: "Kalıp panellerimiz döküm sırasına göre karışmasın istiyoruz, bunu nasıl sağlıyorsunuz?",
                cevap:
                    "Şantiye şefinden döküm takvimini alır, panel gruplarını bu takvime göre ayrı bölgelere yerleştiririz. Her grup kendi bölgesinde kalır ve bir sonraki döküme kadar karıştırılmaz; yeni panel geldiğinde hangi gruba ekleneceği şantiye şefiyle birlikte belirlenir. Bu düzen, döküm günü doğru paneli aramakla vakit kaybetmenizi önler.",
            },
            {
                soru: "Çimento torbalarımız yağmurdan etkileniyor, forklift bu konuda ne yapabilir?",
                cevap:
                    "Forklift kendisi bir kuruma çözümü sunmaz, ama istif düzeninin nem riskini azaltacak şekilde kurulmasına katkı sağlar: torbalar zeminden yükseltilmiş palet üzerine, mümkünse örtülü bir bölgeye istiflenir ve yükseklik torbaların ezilmesine yol açmayacak şekilde sınırlanır. Örtü ve drenaj konusundaki asıl önlem şantiyenin kendi depolama düzenine aittir, biz bu düzene uygun istifleme yaparız.",
            },
            {
                soru: "Şantiye içi güzergâhımız her gün değişiyor, bu bir sorun yaratır mı?",
                cevap:
                    "Sorun yaratmaz, çünkü güzergâhı sabit varsaymayız; her gün başında şantiye şefinden o günkü açık yolları teyit ederiz. Bir önceki gün kullanılan bir güzergâh yeni bir hafriyat ya da kalıp kurulumuyla kapanmışsa alternatif hemen belirlenir. Bu günlük teyit, sahada beklenmedik bir tıkanıklıkla karşılaşma riskini önemli ölçüde azaltır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Şantiye malzeme deposunda tuğla, demir donatı, kalıp paneli ve çimento gibi malzeme gruplarının farklı istifleme gerektirmesi inşaat sektöründe genel bilinen bir pratiktir. İstif düzeni ve operatör yaklaşımı firma saha pratiğidir. Belirli şantiye adı veya rakam kullanılmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Bozüyük'te TOKİ Bloklarının Dış Cephesine Eklemli Platform (Boom) Kiralama",
        giris:
            "Bir toplu konut bloğunun dış cephesi, inşaatın son evresinde en yoğun işlerin toplandığı yüzeydir: mantolama panelleri döşenir, boya ve son kat sıva uygulanır, pencere ve balkon korkulukları monte edilir, bazen cephe aydınlatma armatürleri yerleştirilir. Bu işlerin hepsi cepheye dik değil, çoğu zaman farklı açılardan yaklaşılmasını gerektirir — özellikle bir bloğun köşe cephesi komşu bloğa yakınsa ya da bina girişinin üzerindeki saçak standart bir makinenin dik yaklaşımını engelliyorsa. Eklemli bomun bu geometrideki üstünlüğü, dikey yükseldikten sonra dirsekten kırılarak yatay ilerleyebilmesi ve sepeti engelin ötesine, hedefin tam karşısına getirebilmesidir. Bozüyük'teki toplu konut şantiyelerinde dış cephe işlerine eklemli platformu bu nedenle sıkça öneririz: cephe boyunca ilerlerken saçak, giriş kanopisi ya da komşu blok gibi engelleri aşarak çalışmayı kesintisiz sürdürür. Bu sayfada bu makine sınıfını hangi cephe senaryolarında ve nasıl bir planla kullandığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Bina girişi üzerindeki kanopi ve saçağın aşılması",
                metin:
                    "Toplu konut bloklarının çoğunda ana giriş üzerinde öne çıkıntı yapan bir kanopi ya da saçak bulunur; bu çıkıntı, giriş üstündeki cephe bölümüne standart bir makinenin dik yaklaşmasını engeller. Eklemli bom, kanopinin önünde yükselip dirsekten kırılarak sepeti kanopinin üzerinden geçirir ve giriş üstü cepheye ulaşır; kanopiye hiçbir temas ya da yük bindirilmez. Bu manevra öncesi kanopinin projedeki net çıkıntı ölçüsü ve makinenin erişim diyagramı karşılaştırılır.",
            },
            {
                baslik: "Komşu bloğa yakın köşe cephenin dolaylı erişimi",
                metin:
                    "Bir toplu konut adasında bloklar arası mesafe standart olsa da köşe cepheler çoğu zaman komşu bloğun kendisiyle ya da onun kalıp iskelesiyle dar bir açı oluşturur. Böyle bir köşede makineyi cepheye dik konumlandırmak mümkün olmadığında, eklemli bom yandan yaklaşıp dirsekten kırılarak sepeti köşe cepheye açılı olarak getirir. Bu tür işlerde iki blok arasındaki mesafenin hem makinenin park alanı hem de bom hareketinin serbest yayı için yeterli olduğu önceden ölçülür.",
            },
            {
                baslik: "Mantolama ve son kat sıva hattının cephe boyunca ilerlemesi",
                metin:
                    "Mantolama panelleri ya da son kat sıva, cephenin geniş bir yüzeyine sürekli ve eş kalınlıkta uygulanmak zorundadır; bu iş cephe boyunca sürekli bir hareket ister. Eklemli bomla çalışırken makine cephenin bir ucundan başlayıp belirli bir dilim tamamlandıkça bir sonraki konuma kayar; her duruşta sepetin cepheye olan mesafesi aynı tutulur ki uygulama kalınlığı tutarlı kalsın. Pencere boşlukları ve balkon çıkıntıları bu ilerleme sırasında ayrı birer referans noktası olarak kullanılır.",
            },
            {
                baslik: "Balkon korkuluğu ve pencere doğraması montajı",
                metin:
                    "Balkon korkulukları ve pencere doğramaları dıştan monte edilirken hem hassas hizalama hem de montaj sırasında parçanın güvenli tutulması gerekir. Eklemli bomun sepeti, malzemenin dışarıdan doğrudan montaj noktasına yaklaştırılmasına imkân tanır; bu, malzemenin bina içinden pencereden dışarı sarkıtılarak monte edilmesine göre hem daha güvenli hem daha hassas bir yöntemdir. Montaj sırasında sepet kapasitesi malzeme ağırlığı ve personel sayısıyla birlikte hesaplanır.",
            },
            {
                baslik: "Cephe aydınlatma armatürlerinin son kat montajı",
                metin:
                    "Bazı toplu konut projelerinde bina cephesine dekoratif aydınlatma armatürleri ya da güvenlik kamerası konsolları son aşamada monte edilir. Bu noktalar genellikle üst katlarda, cephenin farklı köşelerinde dağınık hâldedir. Eklemli bomla cephe boyunca dolaşarak her noktada kısa bir duruş yapılır, kablo çekimi ve armatür sabitlemesi tamamlanır; tek bir sepet turunda birden fazla nokta kapatılabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "TOKİ bloğu dış cephesinde eklemli bom kullanım noktaları",
                paragraflar: [
                    "Bozüyük'teki toplu konut bloklarının dış cephesinde eklemli bomu değerlendirdiğimiz başlıca senaryoları aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Cephe noktası", "Engel", "Erişim biçimi", "Dikkat kalemi"],
                    satirlar: [
                        ["Giriş üstü kanopi", "Öne çıkıntı", "Kanopi üzerinden aşma", "Kanopiye yük bindirilmez"],
                        ["Köşe cephe", "Komşu blok yakınlığı", "Yandan açılı yaklaşım", "Park alanı ve bom yayı ölçümü"],
                        ["Mantolama hattı", "Sürekli yüzey", "Dilim dilim ilerleme", "Sabit cephe mesafesi"],
                        ["Balkon korkuluğu", "Hassas montaj", "Dışarıdan doğrudan yaklaşma", "Sepet kapasite hesabı"],
                        ["Cephe aydınlatma armatürü", "Dağınık üst kat noktaları", "Tur şeklinde dolaşma", "Tek turda çoklu nokta"],
                    ],
                },
            },
            {
                baslik: "Neden eklemli sınıf, neden teleskopik değil",
                paragraflar: [
                    "Toplu konut bloklarının cephesinde engelsiz, düz bir yaklaşım nadiren mümkündür; kanopi, komşu blok, kalıp iskelesi kalıntısı ya da bina girişindeki geçici rampa gibi unsurlar cepheye dik bir hattı bozar. Teleskopik bom düz bir hat izlediği için bu tür engelleri aşamaz; eklemli bom ise dirsekten kırılarak engelin üzerinden veya yanından dolaşabilir.",
                    "Bu esneklik, aynı makinenin bir günde farklı bloklardaki farklı köşe geometrilerine uyum sağlamasını da kolaylaştırır; şantiyede blok blok dolaşan bir cephe programında makine değiştirmeden ilerlemek zaman kazandırır.",
                ],
            },
            {
                baslik: "Cephe çalışmasında şantiyeyle koordinasyon",
                paragraflar: [
                    "Cephe işleri genellikle mantolama, boya ve doğrama ekipleriyle aynı dönemde yürütülür; bu yüzden makinenin çalışacağı cephe dilimi ile o gün başka bir ekibin kullandığı alan çakışmamalıdır. Şantiye şefiyle günlük olarak hangi cephe biriminin bize ayrıldığı teyit edilir.",
                    "Rüzgârlı günlerde yüksekte çalışan eklemli bom için rüzgâr hızı sınırı gözetilir; sınır aşıldığında iş güvenli koşullara dönene kadar durdurulur. Bu durum şantiye programında bir gecikme kalemi olarak önceden hesaba katılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bloğumuzun girişindeki kanopi cepheye dik yaklaşımı engelliyor, buraya nasıl ulaşıyorsunuz?",
                cevap:
                    "Eklemli bomun tam olarak çözdüğü senaryo bu. Makine kanopinin önünde yükselir, dirsekten kırılıp sepeti kanopinin üzerinden geçirerek giriş üstü cepheye ulaştırır. Kanopiye hiçbir yük bindirilmez. Bunun için kanopinin net çıkıntı ölçüsünü ve makinenin erişim diyagramını karşılaştırmamız gerekir; projedeki ölçüyü paylaşırsanız uygunluğu önceden değerlendirebiliriz.",
            },
            {
                soru: "Köşe dairemizin cephesi komşu bloğa çok yakın, makine buraya sığar mı?",
                cevap:
                    "Sığma durumu iki bloğun arasındaki net mesafeye ve bom hareketinin gerektirdiği yaya bağlıdır. Eklemli bom yandan yaklaşıp açılı bir sepet konumu alabildiği için tam dik bir yaklaşım gerekmez, ama yine de belirli bir park alanı ister. Blok aralığını ölçüp paylaşırsanız uygunluğu netleştiririz; sınırda bir durumsa yerinde keşif yaparız.",
            },
            {
                soru: "Mantolama hattı boyunca uygulama kalınlığının tutarlı olması önemli, bunu nasıl sağlıyorsunuz?",
                cevap:
                    "Cephe boyunca ilerlerken sepetin cepheye olan mesafesini her duruşta sabit tutarız, çünkü kalınlık farkı büyük ölçüde bu mesafenin değişkenliğinden kaynaklanır. Pencere boşlukları ve balkon çıkıntıları referans noktası olarak kullanılır, böylece uygulayıcı ekip her dilimde aynı çalışma mesafesinde durur.",
            },
            {
                soru: "Balkon korkuluklarını dışarıdan mı monte ediyorsunuz, içeriden pencereden mi?",
                cevap:
                    "Dışarıdan, eklemli bomun sepetinden monte etmeyi tercih ederiz; bu yöntem malzemenin pencereden sarkıtılmasına göre hem daha güvenli hem daha hassas hizalama sağlar. Sepet kapasitesini malzeme ağırlığı ve montaj yapacak personel sayısına göre önceden hesaplarız; ağır bir korkuluk grubu için gerekirse iş iki aşamaya bölünür.",
            },
            {
                soru: "Aynı gün birden fazla blokta cephe işi var, tek makineyle yetişir mi?",
                cevap:
                    "Bloklar birbirine yakınsa ve iş dilimleri kısa tutulduysa evet, aynı gün birkaç blok dolaşılabilir. Ancak her blok kendi cephe geometrisiyle farklı bir yaklaşım isteyebilir; bu yüzden günlük programı şantiye şefiyle birlikte önceden sıralarız ve hangi bloğun hangi saatte ele alınacağını netleştiririz.",
            },
            {
                soru: "Rüzgârlı bir günde cephe çalışması durur mu, bu şantiye programını nasıl etkiler?",
                cevap:
                    "Evet, belirli bir rüzgâr hızının üzerinde yüksekte çalışma güvenli değildir ve iş durdurulur. Bu durumu şantiye programında önceden bir risk kalemi olarak paylaşırız ki beklenmedik bir gecikme sürpriz olmasın. Rüzgâr geçtiğinde iş kaldığı noktadan devam eder; kayıp süre mümkün olduğunca sonraki günlere yayılarak telafi edilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Toplu konut bloklarında mantolama, cephe boyası, balkon korkuluğu ve pencere doğraması montajının inşaatın son evresinde yapılması genel inşaat sıralamasıdır (kamuya açık bilgi). Eklemli bomun engel aşma yaklaşımı ve rüzgâr sınırı firma saha pratiğidir. Belirli proje adı veya rakam kullanılmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Bozüyük'te TOKİ Bloğu Ortak Alanlarında ve Şantiye Malzeme Deposunda İç Mekân Platform Kiralama",
        giris:
            "Bir toplu konut bloğunun teslim öncesi son işleri, dış cepheden içeri taşınır: merdiven boşluğunun tavan boyası, ortak koridorların aydınlatma armatürleri, otopark ya da sığınak katının tesisat askıları, bina girişinin tavan kaplaması. Bu işlerin ortak noktası, açık şantiye alanından farklı olarak tavan yüksekliğinin sabit ve genellikle standart bir kat yüksekliğinde olması, zeminin ise düz betonla sınırlı bir alan olmasıdır. Aynı iç mekân mantığı, şantiyenin kapalı ya da yarı kapalı malzeme deposunda da geçerlidir — depo içindeki raf sistemi ya da üst kat aydınlatmasına erişim, dışarıdaki geniş şantiye trafiğinden ayrı, dar ve düzenli bir alanda yürütülür. Bu iki ortamda da akülü makaslı platform, sessiz çalışması ve dar koridorlarda manevra kolaylığıyla en uygun makine sınıfı olur. Bu sayfada Bozüyük'teki toplu konut projelerinin ortak alanlarında ve malzeme deposunda iç mekân platform kullanımını nasıl planladığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Merdiven boşluğu ve ortak koridor tavan işleri",
                metin:
                    "Merdiven boşlukları, kat yüksekliğinin merdiven kolu boyunca değiştiği, standart bir salon tavanından farklı bir geometriye sahiptir. Boya ve tavan kaplaması işlerinde makine, merdiven sahanlıklarının genişliğine göre konumlandırılır ve her sahanlıktan erişilebilen bölüm ayrı ele alınır. Ortak koridorlarda ise tavan yüksekliği sabittir ve makine koridor boyunca düz bir hatta ilerler; koridor genişliği makinenin şase ölçüsüyle önceden karşılaştırılır.",
            },
            {
                baslik: "Bina girişi ve ortak alan aydınlatma armatürleri",
                metin:
                    "Bina girişinin tavanı, teslim öncesi son kontrol edilen ve genellikle en görünür alanlardan biridir; aydınlatma armatürlerinin montajı ve tavan kaplamasının son rötuşu burada bir arada yapılabilir. Giriş alanı çoğunlukla dar olduğu için makine, kapı genişliği ve varsa dönüş payı önceden ölçülerek seçilir; giriş kapısından içeri girmesi mümkün olmayan bir makine için daha küçük bir model tercih edilir.",
            },
            {
                baslik: "Otopark ve sığınak katı tesisat askıları",
                metin:
                    "Blokların bodrum katlarındaki otopark ya da sığınak alanları, tavan boyunca uzanan sıhhi tesisat, yangın hattı ve elektrik kablo tavası gibi elemanlarla doludur. Bu katlarda tavan yüksekliği genellikle üst katlardan daha düşüktür ve kolonlar arası mesafe standart bir platformun manevra alanını sınırlayabilir. Askı kontrolü ve bağlantı sıkılaştırması için makine kolonlar arasında dikkatli ilerletilir, her duruşta o bölgedeki hatlar birlikte kontrol edilir.",
            },
            {
                baslik: "Şantiye malzeme deposunun kapalı bölümünde raf ve üst kat erişimi",
                metin:
                    "Bazı şantiyelerde hassas malzemeler — elektrik malzemesi, tesisat armatürü, iç mekân doğraması — kapalı bir depo bölümünde raf sistemine yerleştirilir. Bu depoda üst raf gözüne erişim ya da tavan aydınlatmasının bakımı gerektiğinde forkliftin geniş manevra alanına ihtiyacı olmayan, dar koridorlarda hassas duran bir platform tercih edilir. Raf aralığı ve koridor genişliği depo düzenine göre önceden ölçülür.",
            },
            {
                baslik: "İş programının diğer iç mekân ekipleriyle paylaşılması",
                metin:
                    "İç mekân işleri genellikle boya, elektrik ve mekanik tesisat ekipleriyle aynı katta, hatta aynı gün yürütülür. Platformun çalışacağı koridor ya da alan, o gün başka bir ekibin kullandığı bölümle çakışmamalıdır; bu yüzden günlük çalışma programı şantiye şefiyle koordine edilir ve hangi katın hangi bölümünün bize ayrıldığı önceden netleştirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "TOKİ bloğu ve şantiye deposunda iç mekân çalışma alanları",
                paragraflar: [
                    "Toplu konut bloklarında ve şantiye deposunda karşılaştığımız iç mekân çalışma alanlarını ve dikkat kalemlerini aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Alan", "Baskın kısıt", "Makine tercihi", "Ek dikkat"],
                    satirlar: [
                        ["Merdiven boşluğu", "Değişken kat yüksekliği", "Sahanlığa göre konumlandırma", "Sahanlık genişliği ölçümü"],
                        ["Bina girişi", "Dar kapı, görünürlük", "Küçük şaseli model", "Kapı genişliği kontrolü"],
                        ["Otopark / sığınak katı", "Düşük tavan, kolon aralığı", "Kolonlar arası dikkatli ilerleme", "Tesisat hattı kontrolü"],
                        ["Ortak koridor", "Sabit ama sınırlı genişlik", "Düz hat ilerleme", "Şase - koridor karşılaştırması"],
                        ["Kapalı malzeme deposu", "Dar raf koridoru", "Hassas manevralı platform", "Raf aralığı ölçümü"],
                    ],
                },
            },
            {
                baslik: "Akülü makinenin kapalı alanlarda tercih edilme nedeni",
                paragraflar: [
                    "Merdiven boşluğu ve ortak koridor gibi kapalı hacimlerde motor gazı biriktiren bir makine kullanmak, havalandırması sınırlı bir alanda risk oluşturur. Akülü makaslı platform bu riski taşımaz ve aynı zamanda sessiz çalıştığı için teslim öncesi kontrol yapan diğer ekiplerin işini de bölmez.",
                    "Bataryanın çalışma süresi boyunca yeterli olup olmadığı, günün planlanan iş yüküne göre önceden değerlendirilir; uzun süren bir kat programında şarj molası şantiye programına dahil edilir.",
                ],
            },
            {
                baslik: "Teslim öncesi kontrolle çakışmama",
                paragraflar: [
                    "Toplu konut bloklarının teslim öncesi son haftalarında ortak alanlarda sık sık kontrol ve temizlik ekipleri de çalışır. Platformun kullanacağı koridor ya da giriş alanı, bu kontrol ekipleriyle aynı saatte kullanılmaya çalışılmaz; günlük program şantiye şefiyle önceden paylaşılır.",
                    "İş bittiğinde alan, üzerinde alet ya da malzeme bırakılmadan teslim edilir; teslim öncesi son kontrolü yapacak ekip için ortak alanın temiz ve boş bulunması önemlidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Merdiven boşluğumuzun tavanı katlara göre farklı yükseklikte, tek makineyle mi çalışıyorsunuz?",
                cevap:
                    "Evet, ancak makinenin konumu her sahanlıkta yeniden ayarlanır. Merdiven boşluğunun geometrisi standart bir salon gibi düz değildir; bu yüzden her sahanlıktan erişilebilen bölüm ayrı ele alınır ve makine adım adım ilerletilir. Sahanlık genişliğini ve kat yüksekliğini önceden ölçüp paylaşırsanız uygun modeli net söyleriz.",
            },
            {
                soru: "Bina girişimizin kapısı dar, platform içeri girebilir mi?",
                cevap:
                    "Kapı genişliği belirleyici ölçüdür; standart bir makaslı platform giremiyorsa daha küçük şaseli bir model değerlendirilir. Kapı ölçüsünü ve varsa içerideki dönüş payını paylaşırsanız uygun modeli önceden netleştirebiliriz. Giren bir model bulunamazsa alternatif erişim yöntemini birlikte değerlendiririz.",
            },
            {
                soru: "Otopark katımızın tavanı alçak, kolonlar da sık; platform bu katta çalışabilir mi?",
                cevap:
                    "Genellikle evet, ancak kolon aralığı ve tavan yüksekliği makinenin manevra alanını belirler. Bu tür katlarda makineyi kolonlar arasında dikkatli ilerletir, her duruşta o bölgedeki tesisat hatlarını birlikte kontrol ederiz. Kolon aralığını ve tavan yüksekliğini paylaşırsanız uygunluğu keşif yapmadan da ön değerlendirebiliriz.",
            },
            {
                soru: "Depomuzdaki raf koridorları dar, forklift yerine platform mu öneriyorsunuz?",
                cevap:
                    "Raf üstü erişim ya da tavan aydınlatması bakımı için evet, dar koridorlarda hassas manevra yapan bir platform forklifte göre daha uygun olur. Forklift, malzeme kaldırma ve indirme gibi farklı bir iş için ayrı değerlendirilir. Hangi işin hangi makineyi gerektirdiğini deponun günlük ihtiyaç listesine göre birlikte netleştiririz.",
            },
            {
                soru: "Aynı katta boya ekibi de çalışıyor, platform onların işini böler mi?",
                cevap:
                    "Bölmemesi için günlük çalışma programını şantiye şefiyle önceden koordine ederiz; hangi bölümün hangi saatte bize ayrıldığı netleşir. Akülü makine sessiz çalıştığı için gürültü açısından da diğer ekiplerin işini bölme riski düşüktür, ancak alan paylaşımı yine de önceden planlanır.",
            },
            {
                soru: "Teslim öncesi kontrol haftasında iç mekân işlerini yetiştirebilir misiniz?",
                cevap:
                    "Teslim takvimini şantiye şefinden önceden alır, iç mekân işlerini bu takvime göre sıralarız. Yoğun bir haftada birden fazla kat ya da ortak alan aynı gün içinde ele alınabilir, yeter ki günlük program erkenden netleşsin. Son dakika talep edilen işlerde de mümkün olduğunca esnek davranırız, ama planlı bir program her zaman daha güvenli sonuç verir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Toplu konut bloklarında teslim öncesi ortak alan ve merdiven boşluğu işlerinin son aşamada yapılması genel inşaat sıralamasıdır (kamuya açık bilgi). Akülü makine tercihi ve alan koordinasyonu firma saha pratiğidir. Belirli proje adı veya rakam kullanılmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Bozüyük'te Yeni TOKİ Bloğunun Çelik İskele ve Kalıp Sistemi Montajına Platform Desteği",
        giris:
            "Bir toplu konut bloğunun kaba inşaatı, göründüğünden daha fazla çelik ve montaj işi barındırır: kalıp iskele sisteminin kat kat kurulması, tırabzan ve güvenlik korkuluklarının montajı, bazen ortak alanlardaki çelik taşıyıcı elemanların ya da merdiven kafeslerinin yerine oturtulması. Bu işlerin çoğu, betonarme dökümüyle eş zamanlı ya da hemen ardından, kat yüksekliği arttıkça daha da erişimi zorlaşan bir sırada ilerler. Platform desteğimiz burada iskelenin ya da kalıp sisteminin yerini almaz — montaj ekibinin elemanı hedef noktaya taşırken ya da bağlantıyı sıkarken güvenli ve stabil bir çalışma yüksekliğinde durmasını sağlar. Bozüyük'teki toplu konut şantiyelerinde bu desteği kat yüksekliği arttıkça nasıl yeniden planladığımızı ve iskele sistemiyle nasıl çakışmadan çalıştığımızı bu sayfada anlatıyoruz.",
        maddeler: [
            {
                baslik: "Kalıp iskele sisteminin kat kat kurulumuna destek",
                metin:
                    "Kalıp iskelesi bir kat tamamlandıkça bir üst kata taşınır ve bu taşıma sırasında bazı bağlantı ve dikey eleman montajları yerden değil, o katın kotundan yapılmak zorundadır. Platform, iskele elemanının bağlantı noktasına yakın ama iskeleye temas etmeyen bir konumda durur; montaj ekibi elemanı platform sepetinden değil, kendi iskele platformundan monte eder, bizim makinemiz malzemeyi o noktaya taşıyan ya da ek gözlem sağlayan araçtır. İskeleyle çakışma olmaması için montaj öncesi iskele kurulum planı görülür.",
            },
            {
                baslik: "Tırabzan ve güvenlik korkuluğu montajı",
                metin:
                    "Merdiven kolu ve balkon kenarlarındaki tırabzan-korkuluk montajı, kat döşemesi tamamlandıktan hemen sonra yapılan bir iştir ve genellikle kalıcı bir güvenlik önlemi devreye girene kadar açık kenar riski taşır. Platform, açık kenara güvenli bir mesafeden yaklaşarak montaj ekibinin elemanı yerine oturtmasına ve kaynak ya da cıvata bağlantısını tamamlamasına imkân tanır; bu sırada platformun kendisi açık kenara çok yakın konumlandırılmaz, güvenli bir çalışma mesafesi korunur.",
            },
            {
                baslik: "Ortak alan çelik taşıyıcı ve merdiven kafesi montajı",
                metin:
                    "Bazı bloklarda otopark girişi üstü ya da ortak sosyal alan çatısı gibi bölümlerde hafif çelik taşıyıcı sistemler kullanılır; bu elemanların yerine oturtulması ve bağlantı noktalarının sıkılması için sabit bir çalışma yüksekliği gerekir. Platform, elemanın ağırlığına göre değil montaj hassasiyetine göre seçilir — ağır elemanın kaldırılması vinç ya da forkliftin işidir, platform montaj ekibinin bağlantı noktasında durmasını sağlar.",
            },
            {
                baslik: "Kat yüksekliği arttıkça erişimin yeniden planlanması",
                metin:
                    "Bir blok üç kattan on kata çıkarken çalışma yüksekliği de aynı oranda artar ve her yeni kat, önceki kattan farklı bir makine sınıfı gerektirebilir. Alt katlarda yeterli olan bir makaslı platform, üst katlarda teleskopik ya da eklemli bir sınıfa geçişi gerektirebilir. Bu geçiş şantiyenin inşaat programına göre önceden planlanır; kat yükseldikçe makine değişimi son ana bırakılmaz, bir sonraki katın kotu belli olduğunda hangi sınıfın gerekeceği netleştirilir.",
            },
            {
                baslik: "Betonarme döküm programıyla eş zamanlı koordinasyon",
                metin:
                    "Kalıp ve iskele montajı genellikle döküm programına sıkı bağlıdır; bir katın kalıbı belirli bir tarihte hazır olmalıdır ki döküm o tarihte yapılabilsin. Platform desteğimiz bu takvime göre planlanır ve montaj ekibinin ihtiyaç duyduğu günlerde sahada hazır bulunur. Döküm günü platformun çalışma alanı, beton pompası ve mikser trafiğiyle çakışmayacak şekilde önceden ayrı tutulur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çelik-kalıp montaj aşamalarında platform kullanımı",
                paragraflar: [
                    "Yeni bir TOKİ bloğunun kaba inşaat sürecinde platformu değerlendirdiğimiz başlıca aşamaları aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Aşama", "İş", "Platformun rolü", "Ek dikkat"],
                    satirlar: [
                        ["Kalıp iskele kurulumu", "Kat kat yükselme", "Malzeme taşıma / gözlem", "İskeleyle temas edilmez"],
                        ["Tırabzan-korkuluk", "Açık kenar montajı", "Güvenli mesafeden yaklaşım", "Kenara çok yakın durulmaz"],
                        ["Ortak alan çelik taşıyıcı", "Bağlantı sıkma", "Sabit çalışma yüksekliği", "Ağır kaldırma vinç/forklift işi"],
                        ["Kat yükselmesi", "Erişim sınıfı değişimi", "Önceden planlı geçiş", "Kot bazlı sınıf seçimi"],
                        ["Döküm günü", "Beton pompa/mikser trafiği", "Ayrı çalışma alanı", "Takvime göre planlama"],
                    ],
                },
            },
            {
                baslik: "Platformun iskele sisteminin yerini almadığı",
                paragraflar: [
                    "Kalıp iskelesi ve platform iki farklı işlevdir: iskele kalıcı bir kalıp taşıyıcı sistemdir, platform ise personelin geçici olarak bir noktaya erişmesini sağlayan hareketli bir araçtır. Platformu iskele yerine kalıp taşıyıcı olarak kullanmayız ve iskeleye herhangi bir yük ya da bağlantı vermeyiz.",
                    "Bu ayrım özellikle yeni çalıştığımız şantiyelerde önceden netleştirilir, çünkü bazı ekipler platformu iskelenin bir uzantısı gibi kullanmayı isteyebilir; biz bu talebi güvenlik gerekçesiyle kabul etmeyiz ve alternatif bir erişim planı öneririz.",
                ],
            },
            {
                baslik: "Kat yükseldikçe makine sınıfı geçiş kararı",
                paragraflar: [
                    "Şantiyenin inşaat programında her katın tahmini tamamlanma tarihi genellikle bellidir; biz bu programı önceden alır, hangi kattan itibaren makine sınıfının değişmesi gerektiğini hesaplarız. Örneğin alt katlarda yeterli olan bir makaslı platform, kat yüksekliği belirli bir sınırı aştığında teleskopik ya da eklemli sınıfa devredilir.",
                    "Bu geçişi son ana bırakmamak, hem makine tedarik süresini rahatlatır hem de şantiyenin montaj programında bekleme yaşamasını önler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kalıp iskelemizin kurulumuna platform destek verebilir mi, yoksa iskele kendi başına mı kurulur?",
                cevap:
                    "İskele kendi montaj yöntemiyle kurulur; platformun rolü malzemeyi taşımak ya da montaj ekibine ayrı bir gözlem noktası sağlamaktır. Platform iskeleye hiçbir bağlantı ya da yük vermez, iki sistem birbirinden bağımsız durur. Bu ayrımı montaj başlamadan önce şantiye şefiyle birlikte netleştiririz.",
            },
            {
                soru: "Açık kenardaki tırabzan montajında platform ne kadar yakın durabiliyor?",
                cevap:
                    "Güvenli bir çalışma mesafesi korunur; platform açık kenara bitişik değil, montaj ekibinin elemanı rahatça yerine oturtabileceği ama düşme riskini artırmayacak bir aralıkta konumlandırılır. Kesin mesafe, kenarın yüksekliğine ve rüzgâr koşullarına göre keşifte belirlenir.",
            },
            {
                soru: "Ortak alan çatısındaki çelik taşıyıcıyı platform mu kaldırıyor?",
                cevap:
                    "Hayır, ağır çelik elemanların kaldırılması vinç ya da forkliftin işidir. Platformun rolü, eleman yerine oturtulduktan sonra bağlantı noktasında montaj ekibinin sabit ve güvenli bir yükseklikte durmasını sağlamaktır. Hangi işin hangi makineyi gerektirdiğini montaj planına göre önceden ayırırız.",
            },
            {
                soru: "Bina yükseldikçe aynı platformla mı devam ediyorsunuz, yoksa makine mi değişiyor?",
                cevap:
                    "Kat yüksekliği belirli bir sınırı aştığında makine sınıfı değişir; alt katlarda yeterli olan bir makaslı platform üst katlarda teleskopik ya da eklemli sınıfa devredilebilir. Bu geçişi şantiyenin inşaat programına göre önceden planlarız, son ana bırakmayız.",
            },
            {
                soru: "Döküm günü platform sahada olabilir mi, beton pompasıyla çakışma olur mu?",
                cevap:
                    "Döküm günü platformun çalışma alanını beton pompası ve mikser trafiğinden ayrı tutarız; ikisi aynı anda aynı bölgede çalışmaz. Döküm programını önceden bildirdiğinizde platform işini o güne denk gelmeyecek şekilde ya da farklı bir cephede planlarız.",
            },
            {
                soru: "Platformu geçici iskele yerine kullanabilir miyiz, daha hızlı olur mu?",
                cevap:
                    "Bunu önermeyiz. Platform kalıcı bir kalıp taşıyıcı sistem değildir ve iskelenin yerini almaya çalışmak güvenlik açısından riskli bir kısayoldur. Hız kazanmak istiyorsanız montaj sırasını ve makine erişim planını birlikte optimize ederiz; bu, güvenliği bozmadan işi hızlandırmanın daha sağlıklı yoludur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kalıp iskele sisteminin kat kat kurulması ve tırabzan-korkuluk montajının açık kenar riski taşıması inşaat sektöründe genel bilinen bir pratiktir (kamuya açık bilgi). Platform-iskele ayrımı ve kat bazlı makine sınıfı geçişi firma saha pratiğidir. Belirli proje adı veya rakam kullanılmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Bozüyük'te Hazır Beton Santrali Silo ve Konveyör Bakımına Platform Kiralama",
        giris:
            "Hazır beton santralinin en yüksek ve en az erişilebilir noktaları, çimento ve agrega silolarıdır. Bu silolar, üretim hattının kalbi olduğu için nadiren durdurulur ve durdurulduğunda bile bakım penceresi kısadır; silo gövdesinin dışındaki merdiven ya da sabit platform çoğu zaman yalnızca belirli noktalara erişim sağlar, gövdenin tamamına ya da konveyör bandının üst hattına ulaşmaz. Aynı santralde agrega bunker üstü ve konveyör köprüsü gibi bölümler de benzer bir erişim sorununu taşır — dar, yüksek ve genellikle toz birikimine açık alanlardır. Platform kiralama hizmetimiz, bu noktalara sabit bir yapı kurmadan, ihtiyaç anında dışarıdan yaklaşan bir çözüm sunar. Bu sayfada Bozüyük'teki hazır beton santralinde silo ve konveyör hattı bakımını nasıl planladığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Çimento silosu gövdesi ve üst kapak kontrolü",
                metin:
                    "Çimento silosunun gövdesi çevresinde seviye göstergesi, hava filtresi ve basınç tahliye valfi gibi elemanlar bulunur; bunların çoğu gövdenin farklı yüksekliklerinde dağılmıştır. Platform, silo çevresinde kademe kademe dolaşarak her kottaki elemana ayrı ayrı yaklaşır; gövdeye herhangi bir bağlantı ya da yük verilmez. Silonun üst kapağına erişim gerektiğinde ise tepe kotu ve makinenin erişim yüksekliği önceden karşılaştırılır.",
            },
            {
                baslik: "Agrega bunkeri üstü ve besleme ağzı bakımı",
                metin:
                    "Agrega bunkerinin üst kısmı, malzeme dökümü sırasında oluşan toz ve nem nedeniyle zamanla besleme ağzında birikinti oluşabilen bir bölgedir. Bakım için bunker üstüne erişim gerektiğinde platform, bunkerin bir kenarından yaklaşarak besleme ağzının çevresini kontrol eder; bunker içine hiçbir aşamada girilmez, çalışma dışarıdan yapılır. Bu iş öncesi bunker besleme hattının durdurulduğu ve kilitlendiği teyit edilir.",
            },
            {
                baslik: "Konveyör bandı üst hattı ve köprü geçişleri",
                metin:
                    "Konveyör bandı, silodan karıştırma ünitesine malzemeyi taşıyan ve genellikle yerden yüksek bir köprü üzerinde uzanan hattır. Bant üzerindeki makara, kayış gerginliği ve toz kapağı gibi elemanların kontrolü için platform, köprü boyunca ilerleyerek her bölümde durur; banda basılmaz, kontrol dışarıdan sepetten yapılır. Bant çalışır durumdayken bu bölgede çalışılmaz, kontrol öncesi hattın durdurulduğu teyit edilir.",
            },
            {
                baslik: "Toz filtre ünitesi ve baca gövdesi çevresi",
                metin:
                    "Santraldeki toz filtre üniteleri, silo dolum ve boşaltım sırasında oluşan tozu tutmak için silonun üstünde ya da yanında konumlanır. Bu ünitelerin filtre elemanı değişimi ve gövde bağlantı kontrolü için platform, ünitenin çevresinde dönerek her tarafına erişir. Filtre üniteleri genellikle dar bir alanda birden fazla boru ve kanalla çevrili olduğu için makinenin park noktası bu boru hattına göre önceden belirlenir.",
            },
            {
                baslik: "Bakım penceresinin üretim programıyla eşleştirilmesi",
                metin:
                    "Hazır beton santralinde üretim genellikle günün belirli saatlerinde yoğunlaşır ve silo ile konveyör hattı bu saatlerde durdurulamaz. Bakım işini planlarken santral yetkilisinden o günkü döküm programını alır, çalışmamızı üretimin en sakin olduğu dilime yerleştiririz. Acil bir arıza dışında, üretim devam ederken silo ya da konveyör hattına yaklaşılmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hazır beton santralinde platform erişim noktaları",
                paragraflar: [
                    "Bozüyük'teki hazır beton santralinde platformla ele aldığımız başlıca noktaları ve dikkat kalemlerini aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Nokta", "Baskın koşul", "Erişim biçimi", "Ek dikkat"],
                    satirlar: [
                        ["Çimento silosu gövdesi", "Yükseklik, dağınık eleman", "Kademeli çevre dolaşımı", "Gövdeye yük bindirilmez"],
                        ["Agrega bunkeri üstü", "Toz, nem birikintisi", "Kenardan dış erişim", "Besleme hattı kilitleme"],
                        ["Konveyör bandı üst hattı", "Yükseklik, hareketli bant", "Köprü boyunca dış erişim", "Bant durdurma teyidi"],
                        ["Toz filtre ünitesi", "Dar boru-kanal çevresi", "Ünite etrafında dönüş", "Boru hattına göre park"],
                        ["Baca gövdesi çevresi", "Yükseklik ve rüzgâr", "Yandan yanaşma", "Rüzgâr eşiği ölçümü"],
                    ],
                },
            },
            {
                baslik: "Sabit merdiven yerine platform tercihinin nedeni",
                paragraflar: [
                    "Silolardaki sabit merdiven ve dar sahanlıklar genellikle yalnızca belirli noktalara erişim sağlayacak şekilde tasarlanmıştır; gövdenin çepeçevre kontrolü ya da konveyör köprüsünün tüm hattı bu sabit yapıyla kapsanmaz. Platform, gövdenin ya da hattın herhangi bir noktasına dışarıdan doğrudan yaklaşabildiği için sabit yapının kapsamadığı bölgeleri tamamlar.",
                    "Ayrıca sabit merdivenle uzun bir tırmanış gerektiren işlerde platform, personel yorgunluğunu azaltıp aynı sürede daha fazla noktanın kontrol edilmesine imkân tanır.",
                ],
            },
            {
                baslik: "Üretim durmadan çalışma sınırı",
                paragraflar: [
                    "Silo ve konveyör hattı üretimin doğrudan parçası olduğu için, hat çalışır durumdayken bu bölgeye yaklaşmayız; acil bir sızıntı ya da güvenlik riski dışında bakım işi üretim durduğunda başlar. Santral yetkilisiyle hangi saatlerde hattın durdurulabileceği önceden konuşulur.",
                    "Beklenmedik bir arıza durumunda ise santralin kendi güvenlik prosedürüne göre hattın kilitlenip kilitlenmediği teyit edilmeden çalışmaya başlanmaz; bu, hem personelin hem ekipmanın güvenliği için değişmez bir kuraldır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Çimento silomuzun gövdesindeki basınç valfi kontrol edilecek, sabit merdivenimiz oraya ulaşmıyor; platform bunu çözer mi?",
                cevap:
                    "Genellikle evet. Platform silonun çevresinde kademe kademe dolaşarak sabit merdivenin ulaşmadığı kotlara doğrudan yaklaşabilir. Gövdeye hiçbir bağlantı ya da yük vermeden dışarıdan çalışırız. Valfin gövde üzerindeki tam konumunu ve silonun toplam yüksekliğini paylaşırsanız uygun makine sınıfını net söyleriz.",
            },
            {
                soru: "Agrega bunkerimizin besleme ağzında birikinti var, temizlik için bunker içine mi giriliyor?",
                cevap:
                    "Hayır, çalışma bunkerin dışından, kenardan yaklaşarak yapılır; bunker içine girilmez. Bu iş öncesi besleme hattının durdurulduğu ve kilitlendiği santral yetkilisiyle teyit edilir. Birikinti ağırsa bunun ayrı bir temizlik ekibi gerektirip gerektirmediği de birlikte değerlendirilir; platform yalnızca erişimi sağlar.",
            },
            {
                soru: "Konveyör bandımız üretim saatleri dışında ne zaman durur, bakımı buna göre mi planlıyorsunuz?",
                cevap:
                    "Evet, santral yetkilisinden o günkü döküm programını alır, bakımı üretimin en sakin olduğu ya da hattın planlı durduğu dilime yerleştiririz. Bant çalışır durumdayken bu bölgeye yaklaşmayız; acil bir durum dışında hattın durdurulduğu teyit edilmeden iş başlamaz.",
            },
            {
                soru: "Toz filtre ünitemizin etrafı boru ve kanallarla dolu, platform buraya park edebilir mi?",
                cevap:
                    "Boru hattının düzenine bağlı; makinenin park noktası bu hatlara göre önceden belirlenir ve gerekirse birkaç farklı açıdan yaklaşım denenir. Filtre ünitesinin tam konumunu ve çevresindeki boru yerleşimini paylaşırsanız uygunluğu keşif öncesi değerlendirebiliriz.",
            },
            {
                soru: "Baca gövdesi çevresinde rüzgârlı günlerde çalışabiliyor musunuz?",
                cevap:
                    "Belirli bir rüzgâr hızının üzerinde yüksekte çalışma güvenli değildir ve iş ertelenir. Rüzgâr eşiğini çalışma öncesi ölçer, sınır aşılmışsa hava koşulu uygun hâle gelene kadar bekleriz. Bu durumu santral programına önceden bir risk kalemi olarak bildiririz.",
            },
            {
                soru: "Sabit merdivenimiz varken neden platform öneriyorsunuz?",
                cevap:
                    "Sabit merdiven genellikle yalnızca belirli noktalara erişim sağlar; gövdenin çepeçevre kontrolü ya da konveyör köprüsünün tüm hattı bu yapıyla kapsanmaz. Platform, gövdenin veya hattın herhangi bir noktasına dışarıdan doğrudan yaklaşabildiği için sabit yapının erişemediği bölgeleri tamamlar; sabit merdivenin yerini almaz, onu tamamlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Hazır beton santrallerinde çimento silosu, agrega bunkeri ve konveyör hattının üretim sırasında sürekli çalışması ve bakımın üretim durduğunda yapılması sektör genelinde bilinen genel saha pratiğidir. Erişim yöntemi ve kilitleme teyidi firma saha pratiğidir. Belirli santral adı, marka veya rakam kullanılmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Bozüyük'te TOKİ Toplu Konut Sokak Aydınlatması ve Şantiye Enerji Hattı Bakımına Platform Kiralama",
        giris:
            "Bir toplu konut adasının enerji altyapısı, bloklar tamamlanmadan çok önce şekillenmeye başlar: şantiye elektrik direkleri geçici aydınlatmayı sağlar, sokak aydınlatma direkleri kalıcı ağın parçası olarak dikilir, trafo çevresindeki hat bağlantıları ve bazen bir bloğun dış cephesine monte edilen aydınlatma armatürleri aynı dönemde tamamlanır. Bu enerji hattının bakımı, şantiyenin farklı evrelerinde farklı ihtiyaç doğurur — inşaat sürerken geçici direklerin bakımı ayrı, teslim öncesi kalıcı sokak aydınlatmasının devreye alınması ayrı bir iştir. Platform hizmetimiz bu iki evreyi de kapsar: direk tepesindeki armatüre, hat bağlantı noktasına ya da trafo çevresindeki yüksek kotlu bir elemana güvenli ve sabit bir yükseklikten yaklaşmayı sağlar. Bu sayfada Bozüyük'teki toplu konut şantiyesinde enerji ve aydınlatma bakımını nasıl planladığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Şantiye geçici aydınlatma direklerinin bakımı",
                metin:
                    "İnşaat süresince şantiyeyi aydınlatan geçici direkler, kalıcı sokak aydınlatmasından farklı olarak sık sık yer değiştirebilir ve bazen şantiye trafiğinin yoğun olduğu bir noktaya çok yakın durur. Bu direklerin armatür değişimi ya da kablo kontrolü için platform, direğin hemen yanına park edilir; sepet direğe temas etmeden armatürün hizasına getirilir. Direğin konumu şantiye programına göre değişebildiği için her bakım öncesi güncel yeri şantiye şefinden teyit edilir.",
            },
            {
                baslik: "Kalıcı sokak aydınlatma direklerinin devreye alınması",
                metin:
                    "Toplu konut adasının kalıcı sokak aydınlatması, teslim öncesi son aşamalarda devreye alınır ve bu süreçte armatür montajı, hat bağlantısı ve varsa fotosel ayarı tek tek her direkte tamamlanır. Direkler bir sokak boyunca sıralı olduğu için platform bu hat boyunca ilerler, her direkte kısa bir duruş yapılır. Devreye alma öncesi hattın enerjisiz olduğu elektrik ekibiyle teyit edilir; enerjili bir hatta armatür montajı yapılmaz.",
            },
            {
                baslik: "Trafo çevresindeki yüksek kotlu hat bağlantıları",
                metin:
                    "Bazı toplu konut projelerinde trafo merkezi ya da dağıtım panosu çevresinde yüksek kotlu hat bağlantıları bulunur; bu noktalara erişim özel bir dikkat gerektirir çünkü enerji hattı çalışır durumda olabilir. Bu tür işlerde platform yalnızca elektrik ekibinin yetkilendirdiği, hattın kesin olarak enerjisiz olduğu teyit edilmiş noktalarda kullanılır; enerjili bir hatta hiçbir koşulda yaklaşılmaz.",
            },
            {
                baslik: "Blok dış cephesindeki dekoratif aydınlatma armatürleri",
                metin:
                    "Bazı bloklarda dış cepheye dekoratif aydınlatma armatürü ya da güvenlik kamerası konsolu son aşamada monte edilir; bu noktalar genellikle cephenin farklı köşelerinde dağınık hâldedir. Bu iş cephe erişimi gerektirdiği için genellikle eklemli ya da teleskopik bir sınıfla yapılır; ihtiyaç, cephenin geometrisine göre bu sayfadaki genel aydınlatma bakımından ayrı olarak değerlendirilir.",
            },
            {
                baslik: "Aydınlatma bakımının şantiye ve teslim takvimiyle eşleşmesi",
                metin:
                    "Şantiye geçici aydınlatması inşaat sürdükçe düzenli bakım ister, kalıcı sokak aydınlatması ise genellikle tek seferlik bir devreye alma sürecidir ve teslim tarihine yakın sıkı bir takvime bağlıdır. Bu iki farklı ritim, platform programımızda ayrı ayrı planlanır; teslim öncesi yoğun dönemde kalıcı aydınlatma işine öncelik verilir, geçici direk bakımı ise şantiyenin genel programına yayılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Enerji ve aydınlatma bakımında evreler",
                paragraflar: [
                    "Toplu konut şantiyesinde enerji ve aydınlatma bakımını hangi evrede nasıl ele aldığımızı aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Evre", "Eleman", "Erişim biçimi", "Ek dikkat"],
                    satirlar: [
                        ["İnşaat sırasında", "Geçici şantiye direği", "Direk yanından yaklaşım", "Güncel konum teyidi"],
                        ["Teslim öncesi", "Kalıcı sokak aydınlatması", "Sokak boyunca sıralı ilerleme", "Enerjisiz hat teyidi"],
                        ["Trafo çevresi", "Yüksek kotlu hat bağlantısı", "Yetkili teyidiyle erişim", "Enerjili hatta yaklaşılmaz"],
                        ["Cephe montajı", "Dekoratif armatür/kamera", "Eklemli/teleskopik erişim", "Cephe geometrisine göre ayrı planlama"],
                        ["Genel program", "Karma bakım", "Şantiye/teslim takvimine göre öncelik", "İki ritmin ayrı planlanması"],
                    ],
                },
            },
            {
                baslik: "Enerjili hatta yaklaşmama kuralı",
                paragraflar: [
                    "Aydınlatma ve enerji hattı bakımında en temel kuralımız, hattın enerjisiz ve kilitli olduğu teyit edilmeden hiçbir montaj ya da kontrol işine başlamamaktır. Bu teyit sözlü bir bilgi değil, şantiyenin elektrik ekibinden alınan açık bir onaydır.",
                    "Teyit alınamadığı ya da hattın durumu belirsiz kaldığı durumlarda iş, teyit netleşene kadar ertelenir; bu bekleme süresi şantiye programında bir risk kalemi olarak baştan paylaşılır.",
                ],
            },
            {
                baslik: "Sokak aydınlatmasının sıralı devreye alınması",
                paragraflar: [
                    "Kalıcı sokak aydınlatması genellikle bir sokak ya da ada boyunca sıralı devreye alınır; bu sıralama, elektrik ekibinin hat kontrolünü kolaylaştırdığı için platform programımız da aynı sırayı takip eder. Bir direkte iş bitmeden bir sonrakine geçilmez, böylece hangi direğin tamamlandığı net izlenir.",
                    "Devreye alma sürecinde bir direkte beklenmedik bir arıza (örneğin hatalı kablo bağlantısı) tespit edilirse, o direk işaretlenip elektrik ekibine bildirilir ve sıra bir sonraki direğe geçer; arızalı direk daha sonra ayrı ele alınır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Şantiye aydınlatma direklerimiz sık sık yer değiştiriyor, bakım programı nasıl işliyor?",
                cevap:
                    "Her bakım öncesi direklerin güncel konumunu şantiye şefinden teyit ederiz, sabit bir listeye göre hareket etmeyiz. Direğin o günkü yerine göre platform konumlandırılır ve sepet direğe temas etmeden armatürün hizasına getirilir. Konum değişikliği sık oluyorsa haftalık kısa bir güncelleme talep ederiz.",
            },
            {
                soru: "Kalıcı sokak aydınlatmasını devreye alırken hattın enerjisiz olduğundan nasıl emin oluyorsunuz?",
                cevap:
                    "Şantiyenin elektrik ekibinden açık bir teyit alırız; bu teyit sözlü bir bilgi değil, hattın kesin olarak enerjisiz ve kilitli olduğuna dair bir onaydır. Teyit alınmadan hiçbir armatür montajına ya da bağlantı kontrolüne başlamayız. Teyit gecikirse iş, teyit gelene kadar bekletilir.",
            },
            {
                soru: "Trafo çevresindeki hat bağlantısına platformla yaklaşabiliyor musunuz?",
                cevap:
                    "Yalnızca elektrik ekibinin hattın kesin olarak enerjisiz olduğunu teyit ettiği noktalarda ve yetkilendirilmiş şekilde. Enerjili bir hatta hiçbir koşulda yaklaşmayız; trafo çevresi genel aydınlatma bakımından ayrı, daha sıkı bir yetki ve teyit süreci gerektiren bir alandır.",
            },
            {
                soru: "Blok cephesindeki dekoratif aydınlatmayı da bu hizmetle mi yapıyorsunuz?",
                cevap:
                    "Cephedeki dekoratif armatür ve kamera konsolu montajı genellikle cephenin geometrisine göre eklemli ya da teleskopik bir makine gerektirir; bu iş cephe erişimi kapsamında ayrı değerlendirilir. Sokak ve şantiye aydınlatması ile cephe montajını aynı sayfada karıştırmayız, ama ikisini de planlayabiliriz.",
            },
            {
                soru: "Teslim tarihine yakın çok sayıda direk devreye alınacak, tek makineyle yetişir mi?",
                cevap:
                    "Direk sayısına ve teslim takvimine bağlı; sokak boyunca sıralı ilerleyerek günde belirli bir sayıda direği tamamlarız. Takvim sıkıysa program erkenden paylaşılmalı ki gerekirse ek makine ya da uzatılmış çalışma saati değerlendirilsin. Son dakika yoğun taleplerde elimizden geleni yaparız ama erken planlama daha güvenli sonuç verir.",
            },
            {
                soru: "Bir direkte arıza bulursanız ne yapıyorsunuz, işi durduruyor musunuz?",
                cevap:
                    "Arızalı direği işaretleyip elektrik ekibine bildiririz ve sıradaki direğe geçeriz; genel devreye alma programı durmaz. Arızalı direk, elektrik ekibi sorunu çözdükten sonra ayrı bir ziyarette ele alınır. Bu yaklaşım, tek bir arızanın tüm sokağın programını kilitlemesini önler.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Toplu konut projelerinde şantiye geçici aydınlatması ve kalıcı sokak aydınlatmasının teslim öncesi devreye alınması genel inşaat pratiğidir (kamuya açık bilgi). Enerjisiz hat teyidi ve sıralı devreye alma firma saha pratiğidir. Belirli proje adı veya rakam kullanılmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Bozüyük'te TOKİ Şantiyesinde Operatörlü / Operatörsüz Platform Kiralama Kararı",
        giris:
            "Bir toplu konut şantiyesinde platform operatörlü mü operatörsüz mü kiralanmalı sorusunun cevabı, sahanın o anki yoğunluğuna göre değişir. Şantiyenin kaba inşaat aşamasında aynı anda onlarca kişi ve araç hareket ederken, güvenli manevra için sahayı iyi tanıyan bir operatörün makineyi yönetmesi büyük fark yaratır; buna karşılık teslim öncesi sakin bir dönemde, tek bir blokta kısa süreli bir iç mekân işinde eğitimli personeliyle operatörsüz çalışmak daha esnek olabilir. Bu kararı biz şantiyenin genel yoğunluğuna, işin süresine ve kimin makineyi kullanacağına bakarak birlikte veririz. Bu sayfada Bozüyük'teki toplu konut şantiyelerinde operatörlü ve operatörsüz kiralama arasındaki farkı ve kararı nasıl verdiğimizi anlatıyoruz.",
        maddeler: [
            {
                baslik: "Kaba inşaat aşamasında yoğun saha trafiği",
                metin:
                    "Kaba inşaat sürerken şantiyede aynı anda beton mikseri, forklift, vinç ve çok sayıda personel hareket eder; bu yoğunlukta platformu yöneten kişinin hem makineyi hem de çevresindeki trafiği aynı anda okuyabilmesi gerekir. Bu aşamada operatörlü kiralamayı öneririz, çünkü bizim operatörümüz sahanın günlük değişen düzenine, günlük teyit edilen güzergâhlara ve diğer araçların hareket alışkanlıklarına daha hızlı adapte olur.",
            },
            {
                baslik: "Teslim öncesi sakin dönemde iç mekân işleri",
                metin:
                    "Teslim öncesi dönemde, özellikle tek bir blokta ya da tek bir katta yürütülen kısa süreli iç mekân işlerinde saha trafiği görece sakinleşmiştir. Bu tür işlerde işletmenin ya da taşeronun kendi eğitimli personeli, sertifikasını ve kullanım yetkisini belgelediği sürece operatörsüz kiralamayı değerlendirebilir. Karar, işin süresine ve o anki saha yoğunluğuna göre verilir; sabit bir kural olarak her zaman operatörsüz önerilmez.",
            },
            {
                baslik: "Cephe ve yüksek kotta operatör deneyiminin ağırlığı",
                metin:
                    "Dış cephe işlerinde, özellikle eklemli bomla engelli bir geometride çalışılırken operatör deneyimi belirleyici olur; kanopi üzerinden aşma, komşu bloğa yakın köşe manevrası gibi işler standart bir eğitimin ötesinde saha pratiği gerektirir. Bu tür işlerde operatörsüz kiralama önerilmez, çünkü hata payı hem personel güvenliği hem de bina cephesi için yüksektir.",
            },
            {
                baslik: "Şantiye şefinin günlük programına operatörün adaptasyonu",
                metin:
                    "Operatörlü kiralamada makineyi kullanan kişi bizim personelimiz olduğu için şantiye şefinin günlük değişen talimatlarına, güzergâh kısıtlarına ve öncelik sırasına doğrudan uyum sağlar. Operatörsüz kiralamada ise bu adaptasyonu işletmenin kendi personeli üstlenir; bu durumda şantiye şefiyle günlük koordinasyonun kimin sorumluluğunda olduğu baştan netleştirilir.",
            },
            {
                baslik: "Sertifika ve yetki belgesinin operatörsüz kiralamada kontrolü",
                metin:
                    "Operatörsüz kiralamada makineyi kullanacak kişinin geçerli operatör sertifikası ve o makine sınıfı için kullanım yetkisi teslimattan önce kontrol edilir. Bu belge eksikse makine operatörsüz teslim edilmez; gerekirse geçici olarak operatörlü seçeneğe geçilir. Bu kontrol, hem yasal sorumluluk hem de saha güvenliği açısından atlanmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Şantiye evresine göre operatörlü/operatörsüz karar tablosu",
                paragraflar: [
                    "Toplu konut şantiyesinin farklı evrelerinde operatörlü ya da operatörsüz kiralamayı hangi kritere göre önerdiğimizi aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Evre / iş tipi", "Saha yoğunluğu", "Önerilen seçenek", "Belirleyici kriter"],
                    satirlar: [
                        ["Kaba inşaat, genel şantiye", "Yüksek", "Operatörlü", "Trafik ve güzergâh karmaşıklığı"],
                        ["Teslim öncesi, tek blok iç mekân", "Düşük", "Operatörsüz değerlendirilebilir", "İşin süresi, personel sertifikası"],
                        ["Dış cephe, engelli erişim", "Değişken", "Operatörlü", "Manevra hassasiyeti"],
                        ["Malzeme deposu forklift", "Orta-yüksek", "Operatörlü", "Malzeme çeşitliliği"],
                        ["Kısa süreli tek nokta iç iş", "Düşük", "Operatörsüz değerlendirilebilir", "Yetki belgesi kontrolü"],
                    ],
                },
            },
            {
                baslik: "Kararın işletmeyle birlikte verilmesi",
                paragraflar: [
                    "Operatörlü ya da operatörsüz kiralama kararını tek taraflı vermeyiz; işin süresini, şantiyenin o anki yoğunluğunu ve işletmenin kendi personel kapasitesini birlikte değerlendiririz. Bazı işletmeler kısa işlerde maliyet avantajı için operatörsüz tercih eder, biz de sertifika ve saha koşulu uygunsa bu tercihi destekleriz.",
                    "Ancak yoğun trafikli ya da yüksek riskli bir iş için operatörsüz talep gelirse gerekçemizi açıkça paylaşır ve operatörlü seçeneği öneririz; nihai karar işletmenindir ama risk değerlendirmesini net söylemek bizim sorumluluğumuzdur.",
                ],
            },
            {
                baslik: "Operatör değişiminin şantiye ortasında yapılması",
                paragraflar: [
                    "Bazı durumlarda şantiye başında operatörsüz başlayan bir kiralama, saha yoğunluğu arttıkça operatörlü seçeneğe geçebilir — örneğin iç mekân işinden dış cephe işine geçildiğinde. Bu geçiş, işin doğası değiştiğinde şantiye şefiyle birlikte yeniden değerlendirilir.",
                    "Tersi yönde bir geçiş de mümkündür: yoğun bir dönem sona erip iş sakin bir iç mekân aşamasına döndüğünde, sertifikalı personel varsa operatörsüz seçeneğe geçilebilir. Bu esneklik, sözleşme başında karşılıklı konuşulur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Şantiyemizde kaba inşaat sürüyor, operatörsüz kiralama alabilir miyiz?",
                cevap:
                    "Kaba inşaat aşamasında saha trafiği genellikle yoğun olduğu için operatörlü kiralamayı öneririz; bizim operatörümüz günlük değişen güzergâh ve trafik düzenine daha hızlı adapte olur. Personelinizin sertifikası ve deneyimi güçlüyse yine de talebinizi değerlendiririz, ama risk değerlendirmesini önce sizinle paylaşırız.",
            },
            {
                soru: "Operatörsüz kiralama için hangi belgeleri görmek istiyorsunuz?",
                cevap:
                    "Makineyi kullanacak kişinin geçerli operatör sertifikasını ve o makine sınıfı için kullanım yetkisini teslimattan önce kontrol ederiz. Belge eksikse makineyi operatörsüz teslim etmeyiz; gerekirse geçici olarak operatörlü seçeneğe geçeriz. Bu kontrol her operatörsüz kiralamada değişmeden uygulanır.",
            },
            {
                soru: "Cephe işinde operatörsüz kiralama neden önerilmiyor?",
                cevap:
                    "Dış cephede, özellikle eklemli bomla engelli bir geometride çalışırken manevra hassasiyeti standart bir eğitimin ötesinde saha pratiği ister. Kanopi üzerinden aşma ya da komşu bloğa yakın köşe manevrası gibi işlerde hata payı hem personel güvenliği hem bina cephesi açısından yüksektir; bu yüzden bu tür işlerde operatörlü kiralama öneririz.",
            },
            {
                soru: "İş sırasında operatörsüzden operatörlüye geçebiliyor muyuz?",
                cevap:
                    "Evet, işin doğası değiştiğinde bu geçiş değerlendirilir — örneğin sakin bir iç mekân işinden yoğun bir dış cephe işine geçildiğinde. Şantiye şefiyle durumu konuşur, gerekiyorsa operatörümüzü devreye sokarız. Bu esneklik sözleşme başında karşılıklı netleştirilir.",
            },
            {
                soru: "Operatörünüz şantiyenin günlük değişen kurallarına nasıl uyum sağlıyor?",
                cevap:
                    "Operatörümüz her sabah şantiye şefinden o günkü açık güzergâhları, öncelik sırasını ve varsa özel kısıtları alır; bu bilgiye göre günün planını yapar. Şantiyede sık çalıştığımız durumlarda operatör sahayı zaten tanıdığı için adaptasyon daha da hızlanır.",
            },
            {
                soru: "Malzeme deposunda forklift için operatörlü mü operatörsüz mü öneriyorsunuz?",
                cevap:
                    "Depoda malzeme çeşitliliği yüksekse (tuğla, demir, kalıp paneli gibi farklı kaldırma teknikleri gerektiren malzemeler) operatörlü kiralamayı öneririz, çünkü operatörümüz bu geçişi malzeme değiştikçe deneyimle yönetir. Tek tip, düşük riskli malzeme taşınan sabit bir depo düzeninde operatörsüz seçenek de değerlendirilebilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Toplu konut şantiyelerinde inşaat evresine göre saha trafiği yoğunluğunun değişmesi genel inşaat gözlemidir. Operatör sertifika kontrolü ve operatörlü/operatörsüz karar kriterleri firma saha pratiğidir. Belirli proje adı veya rakam kullanılmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Bozüyük'te Birden Fazla TOKİ Bloğu Arasında Çok Noktalı Rota Bakım Platformu",
        giris:
            "Bir toplu konut adası genellikle tek bir blok değil, birden fazla bloktan oluşur ve bu blokların bakım ihtiyacı aynı haftaya, hatta aynı güne denk gelebilir — bir blokta dış cephe aydınlatması, bir başkasında ortak alan tesisatı, üçüncüsünde giriş kanopisi kontrolü. Bu tür işleri her blok için ayrı bir sefer olarak planlamak yerine, aynı gün içinde bir rota üzerinde sıralı olarak ele almak hem makinenin boşta geçirdiği süreyi azaltır hem de şantiye genelinde daha öngörülebilir bir program sunar. Çok noktalı rota bakım hizmetimiz, birden fazla bloğun küçük ölçekli bakım taleplerini tek bir güzergâhta birleştirir. Bu sayfada Bozüyük'teki toplu konut adasında bu rotayı nasıl kurguladığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Blok sırasının şantiye içi mesafeye göre kurgulanması",
                metin:
                    "Rota planlarken önce blokların birbirine olan mesafesini ve aralarındaki geçit genişliğini değerlendiririz; amaç makinenin bir bloktan diğerine en kısa ve en az engelli hatta geçmesidir. Bir bloktaki iş tamamlanmadan bir sonraki bloğa geçilmez, ama her bloktaki iş süresi önceden tahmin edilip güne yayılır. Bu sıralama, şantiye şefinin o günkü diğer trafik programıyla da çakışmayacak şekilde ayarlanır.",
            },
            {
                baslik: "Her blokta farklı iş tipinin aynı günde toplanması",
                metin:
                    "Bir blokta dış cephe aydınlatması, komşu blokta ortak alan tavan boyası, üçüncü blokta giriş kanopisi kontrolü gibi farklı iş tipleri aynı günde toplanabilir; bu durumda makine sınıfı sabit kalmıyorsa (örneğin biri eklemli bom biri makaslı platform gerektiriyorsa) günün planı iki farklı makine ya da iki ayrı sefer olarak ayrılır. Tek makineyle karşılanabilen benzer işler ise aynı rotada birleştirilir.",
            },
            {
                baslik: "Blok yöneticileri ya da şantiye şefiyle koordinasyon",
                metin:
                    "Birden fazla bloğu kapsayan bir rotada, her bloğun kendi sorumlusu ya da genel şantiye şefi ayrı ayrı bilgilendirilir; hangi bloğun günün hangi saatinde ele alınacağı önceden paylaşılır. Bu, bir bloktaki sorumlunun makineyi beklerken diğerinin habersiz kalmasını önler ve her blokta işin başlamasından önce ilgili kişinin sahada hazır bulunmasını sağlar.",
            },
            {
                baslik: "Küçük ölçekli işlerin tek seferde toplanmasının avantajı",
                metin:
                    "Tek bir bloktaki küçük ölçekli bir bakım işi için makineyi ayrıca sevk etmek, iş süresine göre orantısız bir nakliye maliyeti yaratabilir. Çok noktalı rota, bu küçük işleri aynı güne toplayarak nakliye maliyetini birden fazla iş arasında paylaştırır. Ancak her işin gerçekten aynı güne sığıp sığmadığı, iş sürelerinin gerçekçi tahminiyle önceden kontrol edilir; sıkışık bir program son bloğu mağdur etmemelidir.",
            },
            {
                baslik: "Rota içinde beklenmedik gecikmenin yönetimi",
                metin:
                    "Bir blokta beklenenden uzun süren bir iş, rotanın geri kalanını geciktirebilir. Bu riski azaltmak için her blok için tahmini süreye küçük bir tampon payı eklenir; gecikme bu payı aşarsa rotadaki sıradaki blok önceden bilgilendirilir ve gerekirse o bloğun işi bir sonraki güne kaydırılır. Rotanın son bloğu mağdur olmasın diye günün ilk saatlerine en belirsiz süreli iş konmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çok bloklu rota planlamasında dikkat kalemleri",
                paragraflar: [
                    "Bozüyük'teki toplu konut adasında birden fazla bloğu kapsayan bir rotayı kurgularken değerlendirdiğimiz kalemleri aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Soru", "Karar kriteri", "Ek dikkat"],
                    satirlar: [
                        ["Blok sırası", "Hangi blok önce?", "Şantiye içi mesafe ve geçit genişliği", "Şantiye şefi trafik programı"],
                        ["Makine tipi", "Aynı makineyle mi karşılanıyor?", "İş tipi benzerliği", "Farklıysa ayrı sefer"],
                        ["Bloklar arası bilgilendirme", "Kim ne zaman haberdar?", "Önceden paylaşılan saat programı", "Sorumlu kişi sahada hazır"],
                        ["Süre tahmini", "Gerçekçi mi?", "Geçmiş benzer iş verisi", "Tampon süre payı"],
                        ["Gecikme yönetimi", "Sıradaki blok etkilenir mi?", "Önceden bilgilendirme", "Gerekirse ertesi güne kaydırma"],
                    ],
                },
            },
            {
                baslik: "Rotanın şantiye genel programıyla eşleşmesi",
                paragraflar: [
                    "Çok noktalı rota, şantiyenin genel inşaat ve teslim programından bağımsız kurgulanmaz; hangi bloğun hangi haftada teslim öncesi kontrole gireceği bilgisi rotanın önceliğini belirler. Teslim tarihine yakın bir blok, rotada öne alınır.",
                    "Bu önceliklendirme şantiye şefiyle haftalık olarak gözden geçirilir; teslim takviminde bir değişiklik olduğunda rota da buna göre yeniden sıralanır.",
                ],
            },
            {
                baslik: "Küçük işlerin toplanmasında maliyet şeffaflığı",
                paragraflar: [
                    "Birden fazla bloğu kapsayan bir rotada her bloğun payına düşen maliyeti ayrı ayrı gösteririz; tek bir toplu fatura yerine hangi bloğun hangi işi için ne kadar süre ve kaynak kullanıldığı görünür olur. Bu, birden fazla blok yöneticisinin aynı hizmeti paylaştığı durumlarda şeffaflık sağlar.",
                    "Rota planlaması öncesi hangi blokların bu paylaşıma dahil olacağı ve maliyet dağılımının nasıl yapılacağı yazılı olarak netleştirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üç ayrı blokta küçük işlerimiz var, tek günde hepsini bitirebilir misiniz?",
                cevap:
                    "Blokların birbirine mesafesine ve her işin tahmini süresine bağlı; genellikle mümkündür ama önce her iş için gerçekçi bir süre tahmini yapıp güne sığıp sığmadığını kontrol ederiz. Sıkışık bir programda son bloğu mağdur etmemek için tampon süre payı ekleriz. İşlerin listesini paylaşırsanız rota önerimizi netleştiririz.",
            },
            {
                soru: "Bloklardan biri farklı bir makine sınıfı gerektiriyor, bu rotayı bozar mı?",
                cevap:
                    "Bozmaz ama planı değiştirir; farklı makine sınıfı gerektiren bir iş varsa günün planı iki farklı makine ya da iki ayrı sefer olarak ayrılır. Bu durumu önceden bilirsek maliyet ve zaman planlamasını buna göre netleştiririz; sürprizle karşılaşmamak için işlerin makine ihtiyacını baştan sorarız.",
            },
            {
                soru: "Bir blokta iş uzarsa diğer bloklar ne olur?",
                cevap:
                    "Her blok için tahmini süreye küçük bir tampon payı ekleriz; gecikme bu payı aşarsa sıradaki bloğun sorumlusunu önceden bilgilendirir, gerekirse o bloğun işini bir sonraki güne kaydırırız. Amacımız son bloğu habersiz bırakmamak ve programı şeffaf tutmaktır.",
            },
            {
                soru: "Her blok yöneticisi ayrı fatura mı alıyor, yoksa tek fatura mı?",
                cevap:
                    "Bu, işletmenizin tercihine göre düzenlenebilir; ancak hangi yöntem seçilirse seçilsin, her bloğun payına düşen süre ve kaynak kullanımını ayrı ayrı gösteririz. Rota planlaması öncesi maliyet dağılımının nasıl yapılacağını yazılı olarak netleştiririz.",
            },
            {
                soru: "Rota sırası neye göre belirleniyor, en yakın blok mu önce?",
                cevap:
                    "Şantiye içi mesafe önemli bir kriter ama tek kriter değil; teslim tarihine yakın bir blok varsa o öne alınır. Şantiye şefiyle haftalık olarak önceliklendirmeyi gözden geçirir, teslim takviminde değişiklik olduğunda rotayı yeniden sıralarız.",
            },
            {
                soru: "Aynı gün başka bir taşeronun trafiğiyle çakışırsak ne oluyor?",
                cevap:
                    "Rota planlamasını şantiye şefinin o günkü genel trafik programıyla önceden karşılaştırırız; çakışma riski görülürse rotayı ya da saat dilimini değiştiririz. Sahada beklenmedik bir çakışma çıkarsa şantiye şefiyle birlikte anlık bir çözüm bulunur, ama bunu önceden minimize etmeye çalışırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Toplu konut adalarının birden fazla bloktan oluşması ve küçük ölçekli bakım işlerinin farklı bloklarda aynı döneme denk gelmesi genel şantiye gözlemidir. Rota planlama ve maliyet paylaşımı firma saha pratiğidir. Belirli proje adı veya rakam kullanılmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Bozüyük'te Hafriyat Aşamasındaki TOKİ Şantiyesinde Zor Zemin ve Arazi Platform Kiralama",
        giris:
            "Bir toplu konut projesinin en zor erişim koşulları, çoğu zaman inşaatın en başında, henüz hiçbir yol asfaltlanmamışken ortaya çıkar. Hafriyat aşamasındaki bir şantiye sahası düzensiz, yer yer gevşek dolgu, yer yer sert kaya parçalı bir zemin sunar; kalıcı servis yolları henüz yapılmamıştır ve makinelerin geçtiği güzergâh her gün hafriyat ilerledikçe değişebilir. Bu koşullarda standart tekerlekli bir platform ya batma ya da devrilme riski taşır. Zor zemin ve arazi platform hizmetimiz, bu erken aşamada bile — örneğin geçici bir aydınlatma direği ya da erken dönem bir ölçüm noktası için — güvenli erişim sağlamayı amaçlar. Bu sayfada Bozüyük'teki TOKİ şantiyesinin hafriyat aşamasında zor zemin koşullarını nasıl değerlendirdiğimizi anlatıyoruz.",
        maddeler: [
            {
                baslik: "Hafriyat sonrası düzensiz ve sıkıştırılmamış zemin",
                metin:
                    "Hafriyat tamamlandıktan hemen sonra, dolgu ya da kazı alanının zemini henüz sıkıştırılmamış olabilir; bu zeminde standart tekerlekli bir makinenin ağırlığı altında yerel çökmeler oluşabilir. Bu tür alanlarda makinenin park edeceği nokta önceden gözle değerlendirilir, gerekirse yük dağıtım plakası kullanılır. Zeminin taşıma kapasitesi net değilse şantiyenin zemin etüt raporundan ya da saha mühendisinden bilgi istenir.",
            },
            {
                baslik: "Henüz asfaltlanmamış servis yolu ve güzergâh değişkenliği",
                metin:
                    "Hafriyat ilerledikçe şantiye içi güzergâh sık sık değişir; dün açık olan bir yol bugün yeni bir kazı ya da toprak yığınıyla kapanmış olabilir. Bu yüzden her çalışma günü öncesinde güncel güzergâh şantiye şefinden teyit edilir; bir önceki günün planına göre hareket edilmez. Güzergâhın eğimi ve genişliği, makinenin geçiş kapasitesiyle önceden karşılaştırılır.",
            },
            {
                baslik: "Eğimli ve engebeli arazi bölümlerinde erişim",
                metin:
                    "Bazı parsellerde doğal arazi eğimi, hafriyatla tam olarak düzeltilene kadar belirgin bir engebe taşır. Bu bölümlerde arazi tipi platform, geniş ve dengeli tekerlek tabanıyla eğimli zeminde daha kontrollü ilerler; yine de üreticinin belirttiği maksimum eğim sınırının üzerinde çalışılmaz. Eğim ölçümü çalışma öncesi yapılır, sınır aşılıyorsa alternatif bir yaklaşım noktası aranır.",
            },
            {
                baslik: "Erken dönem geçici aydınlatma ve ölçüm noktası erişimi",
                metin:
                    "İnşaat henüz başlamamış ya da yeni başlamışken bile şantiyede geçici aydınlatma direği bakımı ya da zemin ölçüm noktalarına erişim gerekebilir. Bu erken dönemde saha henüz düzenli bir yol ağına kavuşmadığı için her erişim, o günkü zemin durumuna göre ayrı değerlendirilir; sabit bir güzergâh varsayılmaz.",
            },
            {
                baslik: "Yağışlı dönemde zeminin ek risk taşıması",
                metin:
                    "Hafriyat aşamasındaki zemin, yağış sonrası taşıma kapasitesini hızla kaybedebilir; kuru günde geçilebilen bir alan yağmurdan sonra çamurlaşarak geçilemez hâle gelebilir. Yağışlı dönemlerde çalışma öncesi zemin durumu yeniden değerlendirilir, gerekirse iş hava koşulu düzelene kadar ertelenir. Bu erteleme riski şantiye programına önceden bir kalem olarak bildirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hafriyat aşamasında zemin risk türleri",
                paragraflar: [
                    "Bozüyük'teki TOKİ şantiyesinin hafriyat aşamasında karşılaştığımız zemin risklerini ve yaklaşımımızı aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Zemin durumu", "Risk", "Yaklaşım", "Ek dikkat"],
                    satirlar: [
                        ["Sıkıştırılmamış dolgu", "Yerel çökme", "Yük dağıtım plakası", "Zemin etüt kontrolü"],
                        ["Değişken güzergâh", "Kapanmış yol", "Günlük teyit", "Sabit plana güvenilmez"],
                        ["Eğimli/engebeli arazi", "Devrilme", "Eğim sınırı ölçümü", "Üretici sınırına uyum"],
                        ["Erken dönem düzensiz saha", "Sabit yol yokluğu", "Günlük ayrı değerlendirme", "Sabit güzergâh varsayılmaz"],
                        ["Yağış sonrası zemin", "Çamurlaşma", "Yeniden değerlendirme", "Gerekirse erteleme"],
                    ],
                },
            },
            {
                baslik: "Standart tekerlekli yerine arazi tipi tercih kriteri",
                paragraflar: [
                    "Hafriyat aşaması bitip zemin sıkıştırılıp servis yolları asfaltlandığında standart tekerlekli platform yeterli ve daha ekonomik olur; arazi tipi platform yalnızca zeminin sıkıştırılmamış, engebeli ya da güzergâhın değişken olduğu erken evrede gündeme gelir. Şantiyenin hangi aşamada olduğu, makine seçiminde ilk sorduğumuz sorudur.",
                    "Bu ayrım gereksiz maliyet önler: sıkıştırılmış, düz bir zeminde arazi tipi platform kiralamak, standart makineye göre daha yavaş ve daha maliyetli bir çözüm olur.",
                ],
            },
            {
                baslik: "Zemin şüphesinde çalışmayı erteleme kuralı",
                paragraflar: [
                    "Zeminin taşıma kapasitesi konusunda net bir bilgi yoksa ya da gözle değerlendirme yetersiz kalıyorsa, riskli bir zeminde ısrarla çalışmayız; şantiye mühendisinden ek bilgi isteriz ya da zemin sağlamlaşana kadar bekleriz. Bu erteleme kararı, makinenin devrilme riskiyle karşılaştırıldığında her zaman daha ucuz bir seçenektir.",
                    "Şantiye şefiyle bu bekleme sürecinin programa etkisini önceden konuşuruz ki gecikme sürpriz olmasın.",
                ],
            },
        ],
        sss: [
            {
                soru: "Şantiyemizin zemini henüz sıkıştırılmadı, platform bu zeminde çalışabilir mi?",
                cevap:
                    "Zeminin taşıma kapasitesine bağlı; sıkıştırılmamış dolgu zeminde standart tekerlekli bir makine yerel çökme riski taşıyabilir. Bu durumda yük dağıtım plakası kullanır ya da arazi tipi platformu değerlendiririz. Zemin durumunu net bilmiyorsak şantiyenin zemin etüt raporundan ya da saha mühendisinden bilgi isteriz; şüpheli zeminde ısrar etmeyiz.",
            },
            {
                soru: "Güzergâhımız her gün hafriyatla değişiyor, bu bir sorun mu?",
                cevap:
                    "Sorun yaratmaz, çünkü güzergâhı sabit varsaymayız; her çalışma günü öncesinde güncel yolu şantiye şefinden teyit ederiz. Bir önceki günün planına göre hareket etmeyiz. Bu günlük teyit, kapanmış bir yola beklenmedik şekilde girmemizi önler.",
            },
            {
                soru: "Parselimiz eğimli, platform devrilme riski taşır mı?",
                cevap:
                    "Eğim, üreticinin belirttiği maksimum sınırın altında kaldığı sürece arazi tipi platform bu zeminde kontrollü ilerler. Çalışma öncesi eğimi ölçer, sınır aşılıyorsa alternatif bir yaklaşım noktası ararız; sınırın üzerinde ısrarla çalışmayız. Parselin eğim durumunu paylaşırsanız uygunluğu önceden değerlendirebiliriz.",
            },
            {
                soru: "İnşaat henüz başlamadı ama geçici aydınlatma direğimize erişim lazım, bu erken dönemde hizmet veriyor musunuz?",
                cevap:
                    "Evet, erken dönemde de hizmet veririz; ancak bu aşamada sabit bir güzergâh olmadığı için her erişimi o günkü zemin durumuna göre ayrı değerlendiririz. Direğin konumunu ve o günkü saha durumunu şantiye şefinden alarak makineyi buna göre yönlendiririz.",
            },
            {
                soru: "Yağmurdan sonra zemin çamurlaşıyor, iş ertelenir mi?",
                cevap:
                    "Gerekirse evet. Yağış sonrası zemin taşıma kapasitesini hızla kaybedebilir; çalışma öncesi zemini yeniden değerlendirir, riskli görürsek hava koşulu düzelene kadar bekleriz. Bu erteleme riskini şantiye programına önceden bir kalem olarak bildiririz ki gecikme sürpriz olmasın.",
            },
            {
                soru: "Zemin sıkıştırılıp yollar asfaltlandıktan sonra hâlâ arazi tipi platform mu kullanıyorsunuz?",
                cevap:
                    "Hayır, zemin sıkıştırılıp servis yolları düzenli hâle geldiğinde standart tekerlekli platforma geçeriz; bu hem daha hızlı hem daha ekonomiktir. Arazi tipi platform yalnızca zeminin sıkıştırılmamış ya da engebeli olduğu erken evrede gündeme gelir. Şantiyenin hangi aşamada olduğunu bize bildirdiğinizde doğru makine sınıfını öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İnşaat hafriyat aşamasında zeminin henüz sıkıştırılmamış olması ve servis yollarının asfaltlanmamış olması genel inşaat pratiğidir (kamuya açık bilgi). Zemin değerlendirme ve erteleme kuralı firma saha pratiğidir. Belirli proje adı veya rakam kullanılmamıştır.",
    },
};
