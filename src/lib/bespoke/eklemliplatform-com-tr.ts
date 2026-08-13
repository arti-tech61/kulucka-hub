// ═══════════════════════════════════════════════════════════════════════════
// eklemliplatform.com.tr — ELLE YAZILMIŞ İÇERİK
//
// Profil: ULUSAL TANITIM SAYFASI (bölgesel değil, kavramsal). Eklemli platform
// nedir, makaslıdan farkı, hangi işlerde gerekli olduğu — Türkiye genelinde
// hizmet sunan bir marka sayfası niteliğinde, tek ama UZUN sayfa.
//
// ⚠️ Diğer eklemli-temalı dosyayla (ankaraeklemliplatform-com.ts) KONU AİLESİ
// kesişir; O dosya OSTİM'in dar-alan/zarf-diyagramı sahasına odaklanır, BU
// sayfa ise genel/ulusal düzeyde "eklemli nedir, ne işe yarar, makaslıdan
// farkı nedir" sorusuna cevap verir — hedef kitle ve bakış açısı farklıdır
// (biri saha vakası, biri kavramsal tanıtım). Cümle ve tablo düzeyinde tekrar
// yoktur.
//
// Simetri (bu sayfa için genişletilmiş): giriş → 8 madde → 4 ek bölüm
// (ilkinde tablo) → 8 uzun SSS. Hedef ~1500 kelime.
// Yazım: 2026-08-13. Yalnızca kamuya açık/genel doğrulanabilir teknik bilgi;
// marka, tesis adı ve rakam uydurulmamıştır.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const EKLEMLIPLATFORM_COM_TR: Record<string, BespokeIcerik> = {
    "bolge:turkiye-geneli": {
        h1: "Eklemli Platform Nedir? Ne Zaman Gereklidir, Nasıl Kiralanır?",
        giris:
            "Yüksekte çalışma ekipmanları arasında en çok karıştırılan iki sınıf makaslı ve eklemli platformlardır; ikisi de kullanıcıyı yükseğe taşır ama çalışma mantıkları temelden farklıdır ve bu fark, doğru makineyi seçmeyi doğrudan etkiler. Makaslı platform, adından da anlaşılacağı gibi yalnızca dikey doğrultuda, makas mekanizmasıyla yükselir; hedefe düz bir çıkışla ulaşılabiliyorsa en pratik ve en ekonomik çözümdür. Eklemli platform ise bomunun birden fazla noktadan katlanabilmesi (jib/dirsek eklemleri) sayesinde hem dikey hem yatay hem de yukarı-öne doğru bir erişim eğrisi çizebilir; bu özelliği onu 'engelin üzerinden veya arasından hedefe ulaşmak' gerektiğinde vazgeçilmez kılar. Bu sayfa, eklemli platformun ne olduğunu, makaslı sınıftan somut olarak nerede ayrıldığını, hangi iş tiplerinde zorunlu hâle geldiğini ve Türkiye genelinde bu sınıfı kiralarken nelere dikkat edilmesi gerektiğini kapsamlı biçimde anlatır. Amaç, doğru makineyi seçmek isteyen bir saha yöneticisinin ya da işletme sahibinin, teknik terimlere boğulmadan net bir karar verebilmesini sağlamaktır.",
        maddeler: [
            {
                baslik: "Eklemli platform teknik olarak ne anlama gelir",
                metin:
                    "Eklemli platform (bazı kaynaklarda 'örümcek platform' veya bom tipi platform olarak da anılır), sepetin bağlı olduğu bomun tek parça değil, iki veya daha fazla kolun mafsallı biçimde birbirine bağlanmasından oluştuğu bir yapıdır. Bu mafsallı yapı, bomun aşağı-yukarı hareketinin yanında kendi üzerinde katlanmasına da izin verir; sonuç olarak sepet, makinenin park noktasının doğrudan üzerinde değil, önünde, yanında ya da bir engelin arkasında konumlanabilir. Bu hareket serbestisi, çalışma zarfı (working envelope) adı verilen ve her yükseklikte ulaşılabilir yatay mesafeyi gösteren bir eğriyle tarif edilir; eklemli sınıfın asıl gücü, maksimum yüksekliği değil bu eğrinin biçimidir.",
            },
            {
                baslik: "Makaslı platformdan somut farkları",
                metin:
                    "Makaslı platform dikey bir çizgi üzerinde hareket eder; sepet tabanı yalnızca yukarı-aşağı gider ve yatay erişim, sepet korkuluğunun dışına elle uzanmakla sınırlıdır. Eklemli platform ise bomu kırarak hem yükselir hem yatay/çapraz mesafe kat eder; bu nedenle hedefin tam altına park edilemediği durumlarda tek makul seçenektir. Buna karşılık makaslı sınıf, sepet tabanı alanı daha geniş olduğu ve genellikle daha yüksek taşıma kapasitesine sahip olduğu için, birden fazla kişinin veya ağır malzemenin birlikte çalıştığı düz-çıkışlı işlerde eklemliye göre daha verimlidir. Doğru seçim, hangi sınıfın 'daha iyi' olduğuna değil, sahanın erişim geometrisine bağlıdır.",
            },
            {
                baslik: "Ne zaman eklemli platform zorunlu hâle gelir",
                metin:
                    "Üç durum eklemli platformu neredeyse zorunlu kılar: birincisi, hedefin önünde sabit bir engel varsa (örneğin bir sundurma, boru hattı, ağaç dalı veya başka bir yapı elemanı) ve makine bu engelin altına veya yanına park etmek zorundaysa; ikincisi, park edilebilecek alan hedefin tam altında değil, birkaç metre uzağındaysa; üçüncüsü, hedefin kendisi bir çıkıntının altında veya bir cephenin iç köşesinde kalıyorsa. Bu üç senaryonun ortak noktası, düz bir dikey çıkışın fiziksel olarak mümkün olmamasıdır — makaslı platform bu senaryolarda basitçe hedefe ulaşamaz.",
            },
            {
                baslik: "İç mekân ve dış mekân eklemli modeller arasındaki fark",
                metin:
                    "Eklemli platformlar güç kaynağına göre iki ana gruba ayrılır: akülü/elektrikli iç mekân modelleri ve dizel/hibrit dış mekân modelleri. İç mekân modelleri daha kompakt şaseye, sıfır egzoz emisyonuna ve genellikle daha dar dönüş yarıçapına sahiptir; kapalı alanlarda, atölye içinde veya asansör boşluğu gibi dar geçitlerde tercih edilir. Dış mekân modelleri ise daha büyük tekerlek/palet sistemi, daha yüksek zemin toleransı ve daha uzun erişim mesafesi sunar; açık sahada, düzensiz zeminde veya rüzgâra maruz yüksek noktalarda kullanılır. Doğru modelin seçimi, çalışma zemininin türü ve ortamın kapalı ya da açık olmasına göre belirlenir.",
            },
            {
                baslik: "Zarf diyagramı olmadan doğru makine seçilemez",
                metin:
                    "Eklemli platform seçiminde en sık yapılan hata, yalnızca 'kaç metre çıkıyor' sorusuna bakmaktır; oysa asıl belirleyici, o yükseklikte ne kadar yatay mesafeye ulaşabildiğidir. Zarf diyagramı, her yükseklik kademesinde maksimum yatay erişimi gösterir ve genellikle maksimum yükseklik ile maksimum yatay erişim aynı anda elde edilemez — biri artarken diğeri azalır. Doğru seçim için üç ölçü gerekir: makinenin park edeceği noktanın hedefe olan yatay ve dikey mesafesi, aradaki engelin boyutları ve hedefin kendisinin konumu. Bu üç ölçü zarf diyagramına işlenerek makinenin gerçekten yeterli olup olmadığı hesaplanır; tahmine dayalı seçim, sahada makinenin hedefe ulaşamaması riskini taşır.",
            },
            {
                baslik: "Dar alan ve manevra kabiliyeti",
                metin:
                    "Eklemli platformların çoğu, aynı erişim yüksekliğindeki teleskopik bom modellerine göre daha kısa şaseye ve daha dar dönüş yarıçapına sahiptir; bu da onları dar sokak, avlu, iç mekân koridoru veya sıkışık şantiye gibi alanlarda tercih edilen sınıf yapar. Ancak dar alan avantajı, park pozisyonunun doğru seçilmesine bağlıdır: makinenin dönüş yarıçapı, park sırasında arkada bırakacağı taşma payı (tail swing) ve giriş-çıkış rotası önceden değerlendirilmelidir. Aksi hâlde makine dar alana girse bile manevra sırasında çevredeki sabit yapılarla veya diğer ekipmanlarla çakışma riski oluşur.",
            },
            {
                baslik: "Taşıma kapasitesi ve sepet ekipmanı",
                metin:
                    "Eklemli platformlarda sepet taşıma kapasitesi, aynı yükseklik sınıfındaki makaslı modellere göre genellikle daha sınırlıdır; bu, bomun mafsallı yapısının taşıyabileceği toplam ağırlığın fiziksel bir sonucudur. İş planlaması yapılırken sepette bulunacak kişi sayısı, taşınacak malzeme ve ekipman ağırlığı (kaynak makinesi, boya ekipmanı, el aletleri) toplanarak makinenin kapasite sınırıyla karşılaştırılmalıdır. Kapasite aşımı hem güvenlik hem de makinenin dengesini etkileyen ciddi bir risktir; belirsiz durumlarda kapasite tablosu üreticiden teyit edilmelidir.",
            },
            {
                baslik: "Operatör yeterliliği ve güvenli kullanım",
                metin:
                    "Eklemli platformun çok eksenli hareket kabiliyeti, makaslı platforma göre daha fazla operatör dikkati ve deneyimi gerektirir; bomun aynı anda birden fazla eklemden hareket etmesi, mesafe ve çarpışma riskini makaslı sınıfa göre daha karmaşık hâle getirir. Operatörün ilgili ekipman sınıfı için yetkilendirilmiş olması ve düşme koruma ekipmanının (tam vücut kemer sistemi, sepet içi bağlantı noktası) doğru kullanılması, mevzuatın da öngördüğü temel güvenlik koşuludur. Elektrik hattı yakınında çalışılıyorsa güvenli mesafe kuralları eklemli platformun geniş hareket alanı nedeniyle daha da önem kazanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Eklemli platform ile makaslı platformun karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, iki sınıf arasındaki temel farkları özetler; hangi sınıfın seçileceği sahanın erişim geometrisine göre belirlenmelidir.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Eklemli platform", "Makaslı platform"],
                    satirlar: [
                        ["Hareket yönü", "Dikey + yatay + engel aşma", "Yalnızca dikey"],
                        ["Engelin üzerinden/arkasından erişim", "Mümkün (bom kırılarak)", "Mümkün değil"],
                        ["Sepet taban alanı", "Daha dar", "Daha geniş"],
                        ["Taşıma kapasitesi", "Genellikle daha düşük", "Genellikle daha yüksek"],
                        ["Dar alanda manevra", "Güçlü (kısa şase, dar dönüş)", "Sınırlı"],
                        ["Tipik kullanım", "Cephe, tesisat, düzensiz erişim", "Düz çıkışlı, geniş alan işleri"],
                    ],
                },
            },
            {
                baslik: "Hangi sektörlerde eklemli platform yaygın kullanılır",
                paragraflar: [
                    "Eklemli platform, erişim geometrisinin karmaşık olduğu hemen her sektörde karşımıza çıkar. İnşaat ve cephe işlerinde bina girinti-çıkıntıları, balkon altları ve iç köşeler; sanayi tesislerinde boru hattı, kanal ve çelik konstrüksiyon üzerindeki bakım noktaları; ticari yapılarda tabela, aydınlatma ve klima ünitesi bakımı; peyzaj ve ağaçlandırılmış alanlarda dal budama gibi işler bu sınıfın tipik kullanım alanlarıdır. Ortak nokta, hedefin doğrudan altına park edilememesi ve aradaki engelin bir şekilde aşılması gerekliliğidir.",
                    "Kapalı alan işlerinde (fabrika içi, depo, atölye) akülü iç mekân modelleri tercih edilir; bu modeller egzoz emisyonu üretmediği için havalandırması sınırlı alanlarda güvenle kullanılabilir. Açık sahada ise dizel veya hibrit modeller, daha uzun erişim ve daha yüksek zemin toleransı sundukları için öne çıkar.",
                ],
            },
            {
                baslik: "Eklemli platform kiralarken doğru soru sırası",
                paragraflar: [
                    "Doğru makineyi seçmek isteyen bir saha yöneticisi, kiralama talebini şu sırayla netleştirmelidir: önce hedefin yüksekliği ve konumu, sonra makinenin park edebileceği alanın hedefe olan yatay mesafesi, ardından aradaki varsa engelin boyutları, son olarak sepette taşınacak kişi ve malzeme ağırlığı. Bu dört bilgi eksiksiz paylaşıldığında, zarf diyagramı üzerinden doğru sınıf ve model hızlıca belirlenebilir. Eksik bilgiyle verilen kararlar, sahada makinenin yetersiz kalması veya gereğinden büyük ve pahalı bir sınıfın seçilmesi riskini taşır.",
                    "Türkiye genelinde hizmet veren bir kiralama sürecinde, bu bilgilerin fotoğraf ve ölçülerle birlikte önceden paylaşılması, makinenin doğru sınıfta ve zamanında sahaya ulaşmasını sağlar; keşif aşamasında atlanan bir detay, teslimat gününde makine değişikliği gibi gecikmelere yol açabilir.",
                ],
            },
            {
                baslik: "Güvenlik ve mevzuat çerçevesi",
                paragraflar: [
                    "İş ekipmanlarının kullanımında geçerli olan periyodik kontrol yükümlülüğü, eklemli platformlar için de aynen geçerlidir; makinenin güncel periyodik kontrol belgesi olmadan sahada kullanılması hem yasal hem operasyonel bir risktir. Operatörün ilgili sınıf için yetkilendirilmiş olması, düşme koruma ekipmanının sepet içinde doğru bağlantı noktasına takılması ve kapasite sınırlarının aşılmaması, sahadaki her eklemli platform operasyonunun temel şartlarıdır. Bu şartlar makaslı sınıf için de geçerlidir, ancak eklemli platformun çok eksenli hareket serbestisi, çevresel farkındalığın (çarpışma, elektrik hattı, geçiş yolu) daha yüksek tutulmasını gerektirir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Eklemli platform ile teleskopik bom platform arasındaki fark nedir?",
                cevap:
                    "Teleskopik bom, tek parça bir kolun içeriye-dışarıya uzayıp kısalmasıyla çalışır ve genellikle eklemli platformdan daha uzun yatay erişim sunar, ama bomun tek doğrultuda hareket etmesi nedeniyle engelin etrafından dolaşma esnekliği sınırlıdır. Eklemli platform ise birden fazla mafsal sayesinde bomu farklı açılarda kırabildiği için, engelin üzerinden veya bir köşenin arkasından erişim gerektiren işlerde daha uygundur. Kısacası teleskopik bom 'daha uzağa', eklemli bom 'daha karmaşık bir rotayla' erişir; seçim, sahanın engel yapısına göre yapılmalıdır.",
            },
            {
                soru: "Eklemli platform hangi yüzeylerde kullanılabilir?",
                cevap:
                    "Model tipine göre değişir: iç mekân akülü modeller genellikle düz, sert zeminlerde (beton, epoksi kaplı atölye zemini) kullanılmak üzere tasarlanmıştır ve tekerlek izi bırakmayan versiyonları mevcuttur. Dış mekân dizel/hibrit modeller ise daha yüksek zemin toleransına sahiptir ve hafif eğimli veya düzensiz açık saha zeminlerinde çalışabilir. Zemin taşıma gücü ve eğim açısı, her iki durumda da makine yerleştirilmeden önce kontrol edilmelidir; yumuşak veya oturmaya müsait zeminlerde ek önlem (plaka, destek) gerekebilir.",
            },
            {
                soru: "Eklemli platformun taşıma kapasitesi neden makaslıdan düşüktür?",
                cevap:
                    "Bunun nedeni yapısal mekaniktir: makaslı platformda yük, makas mekanizmasının dikey doğrultuda simetrik dağılan kuvvetiyle taşınırken, eklemli platformda yük bomun uç noktasına, birkaç mafsal üzerinden aktarılır. Mafsallı bir yapı, aynı ağırlığı taşıyabilmek için daha güçlü ve dolayısıyla daha ağır bir gövde gerektirir; üretici bu dengeyi sağlarken genellikle kapasiteyi belirli bir sınırda tutmayı tercih eder. Bu nedenle ağır malzeme taşınacak işlerde, erişim mümkünse makaslı sınıf daha uygun olabilir.",
            },
            {
                soru: "Dar bir sokaktan eklemli platform geçirebilir miyiz?",
                cevap:
                    "Çoğu zaman evet, ama bu 'çoğu zaman' ifadesi makinenin şase genişliği, dönüş yarıçapı ve varsa üzerinden geçilecek eşik/basamak yüksekliğiyle sınırlıdır. Kompakt iç mekân modelleri standart bir kapı veya dar geçit genişliğine uygun tasarlanmıştır, ama her modelin ölçüleri farklıdır. Kesin cevap için sokağın/geçidin en dar noktasının ölçüsü ve varsa yükseklik kısıtı (tabela, kablo) önceden paylaşılmalıdır.",
            },
            {
                soru: "Eklemli platformda düşme koruma ekipmanı zorunlu mudur?",
                cevap:
                    "Evet, sepet içinde çalışan personelin tam vücut kemer sistemini sepetin belirlenmiş bağlantı noktasına takması, ekipman türünden bağımsız olarak yüksekte çalışmanın temel güvenlik gereğidir. Eklemli platformda bomun çok eksenli hareketi, ani yön değişimlerinde sepet içinde dengesizlik riskini makaslı sınıfa göre biraz daha artırabilir; bu nedenle bağlantı noktasının doğru kullanılması ve kemerin sürekli takılı kalması özellikle önemlidir.",
            },
            {
                soru: "Elektrik hattı yakınında eklemli platform kullanılabilir mi?",
                cevap:
                    "Kullanılabilir, ancak güvenli mesafe kurallarına tavizsiz uyulması şartıyla. Eklemli platformun bomu farklı açılarda hareket edebildiği için, operatörün hattan güvenli mesafeyi her an koruyabilmesi, makaslı platforma göre daha fazla dikkat ve deneyim gerektirir. Hat gerilimine göre belirlenen minimum güvenli mesafe önceden netleştirilmeli, mümkünse hat işletmecisiyle koordinasyon sağlanmalı ve iş, bu mesafe hesaba katılarak planlanmalıdır.",
            },
            {
                soru: "İç mekân ve dış mekân eklemli modelleri karıştırmak sorun yaratır mı?",
                cevap:
                    "Evet, ciddi sorun yaratabilir. Dizel bir dış mekân modelini kapalı, havalandırması sınırlı bir alanda kullanmak egzoz emisyonu nedeniyle güvenlik riski oluşturur; akülü bir iç mekân modelini ise düzensiz açık saha zemininde kullanmak hem performans yetersizliğine hem de devrilme riskine yol açabilir. Doğru model seçimi, çalışma ortamının kapalı mı açık mı olduğu ve zemin koşulları netleştirilerek yapılmalıdır.",
            },
            {
                soru: "Zarf diyagramını kendim okuyamıyorum, ne yapmalıyım?",
                cevap:
                    "Zarf diyagramını yorumlamak teknik bilgi gerektirir ve çoğu kullanıcı için beklenmez; bunun yerine hedefin yüksekliği, park noktasının hedefe yatay mesafesi ve varsa engelin ölçüleri fotoğraf ve ölçülerle paylaşıldığında, doğru sınıf ve model bu bilgilere dayanarak belirlenir. Belirsizlik varsa keşif talep edilmesi, sahada makinenin yetersiz kalması riskini ortadan kaldırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Eklemli platform ile makaslı platform arasındaki teknik farklar (bom mekaniği, zarf diyagramı, kapasite dengesi), periyodik kontrol yükümlülüğü ve düşme koruma zorunluluğu sektör geneli bilinen mevzuat ve mühendislik bilgisidir; tesis adı, marka ve rakam uydurulmamıştır.",
    },
};
