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
};
