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
};
