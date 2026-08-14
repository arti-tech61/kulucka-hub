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

    // ═══════════════════════════════════════════════════════════════════
    // 11 STANDART HİZMET SAYFASI — eksen: "eklemli platform makine seçimi
    // ve danışmanlık". Her sayfa, ilgili hizmet konusunu ele alırken
    // eklemli (akrobat kollu) platformun o iş için neden doğru/yanlış
    // makine sınıfı olduğunu tartışır. Ulusal ölçekte, şehre bağlanmadan;
    // farklı sektör senaryoları (fabrika çatısı, AVM cephesi, ağaç/tesisat
    // üstü, kapalı depo, enerji hattı, şantiye) kullanılır. Kardeş
    // domainler (istanbul/ankara/bursa eklemli platform) şehir-vaka
    // odaklıdır; bu sayfalar kavramsal seçim mantığına odaklanır — cümle
    // ve tablo düzeyinde tekrar yoktur.
    // ═══════════════════════════════════════════════════════════════════

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Örümcek Platform mu Eklemli mi? Dar Geçit ve Hassas Zeminde Doğru Seçim",
        giris:
            "Sepetli/örümcek platform, eklemli platformun küçültülmüş versiyonu değil, farklı bir problemi çözmek için tasarlanmış ayrı bir makine sınıfıdır; bu domainin danışmanlık yaklaşımı iki sınıf arasındaki sınırı net çizmekten geçer. Eklemli platform, bomunun kırılma kabiliyetiyle bir engelin üzerinden veya yanından hedefe ulaşır, ama bu kabiliyetin bir bedeli vardır — şasesi tekerlekli ve göreceli olarak geniştir, zemine dağıtılmış ama yine de belirli bir noktasal yük bindirir. Örümcek platform ise paletli ayaklarını açıp kapatabilen, kendi üzerinde katlanıp bir kapı veya merdiven boşluğundan geçirilebilen, zemine ayarlanabilir noktalardan yük veren bir sistemdir. Türkiye genelinde karşılaştığımız tipik ayrışma şudur: hedef, standart bir eklemlinin şasesinin giremeyeceği kadar dar bir geçidin arkasındaysa — tarihi bina içi, dar depo koridoru, asma katlı bir atriyum, ağaç ve peyzaj arasından geçen bir bahçe yolu — veya zemin hassas ya da taşıma kapasitesi sınırlıysa (parke, seramik, ahşap döşeme, asma kat) örümcek platform devreye girer. Bu sayfa, hangi sahada hangi sınıfın doğru olduğunu, karar kriterlerini ve iki makinenin birbirini nasıl tamamladığını anlatır.",
        maddeler: [
            {
                baslik: "Şase genişliği ve geçiş darlığı",
                metin:
                    "Standart bir eklemli platformun şasesi, çoğu iç mekân kapısından ve dar koridordan geçecek şekilde tasarlanmamıştır; kompakt iç mekân modelleri bile belirli bir minimum genişliğin altına inemez. Örümcek platform ise ayaklarını daraltarak bir kapı genişliğine sığabilir, içeri girdikten sonra ayaklarını yeniden açarak dengesini kurar. Karar noktası basittir: geçidin en dar yerinin ölçüsü, düşünülen eklemli modelin şase genişliğinden dar mı geniş mi? Dar ise örümcek, geniş ise eklemli tercih edilir — burada 'daha güçlü makine daha iyi' varsayımı geçerli değildir.",
            },
            {
                baslik: "Zemin yük dağılımı: geniş şase karşısında ayarlanabilir ayak",
                metin:
                    "Eklemli platformun tekerlekli şasesi, ağırlığını belirli bir iz üzerinden zemine aktarır; bu, çoğu beton veya asfalt zeminde sorun yaratmaz ama parke, seramik kaplama, ahşap döşeme veya taşıma kapasitesi belgelenmemiş bir asma katta çizilme, çatlama veya aşırı yükleme riski doğurabilir. Örümcek platformun ayarlanabilir ayakları, yükü daha geniş ve kontrol edilebilir noktalara dağıtabilir; bazı modellerde ayak altına koruyucu tampon da eklenir. Hassas zeminli işlerde bu fark, makine seçimini doğrudan belirler.",
            },
            {
                baslik: "Katlanabilirlik ve taşınabilirlik",
                metin:
                    "Örümcek platform, kendi motoruyla veya küçük bir vinç/transpalet yardımıyla dar bir koridordan içeri alınıp hedefin yakınında yeniden açılabilir; bazı kompakt modeller elle bile manevra edilebilir hâle gelir. Eklemli platform bu düzeyde bir taşınabilirliğe sahip değildir — kendi tekerlekleriyle veya bir nakliye aracıyla sahaya girer, dar bir geçidin ötesine taşınamaz. İçeriye 'sokulması' gereken işlerde bu fark belirleyicidir.",
            },
            {
                baslik: "Ne zaman eklemli yeterli, örümcek gereksiz",
                metin:
                    "Geçit ve zemin sorun değilse örümcek platform tercih edilmemelidir — kapasitesi genellikle daha düşüktür, kurulumu (ayak açma, dengeleme) zaman alır ve kiralama maliyeti çoğu zaman eklemliden yüksektir. Standart bir kapıdan geçen, beton zeminde çalışan bir iş için örümcek platform önermemiz, gereksiz bir maliyet ve süre kaybı olur; bu durumlarda dürüstçe eklemli veya makaslı sınıfı öneririz.",
            },
            {
                baslik: "Kapasite ve çalışma süresi farkı",
                metin:
                    "Örümcek platformların sepet kapasitesi (kişi + malzeme ağırlığı) genellikle eklemli sınıfın altındadır; bu, ağır malzeme taşınan işlerde ek bir kısıt oluşturur. Kurulum-söküm süresi de (ayakların açılıp dengelenmesi) eklemliye göre daha uzundur, bu yüzden çok kısa süreli tek noktalık işlerde bile bu süre projeye dahil edilmelidir. Kapasite ve süre dengesi, keşif aşamasında iş listesiyle birlikte değerlendirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Senaryo bazlı sınıf seçimi",
                paragraflar: [
                    "Ulusal ölçekte en sık karşılaştığımız beş senaryo ve önerdiğimiz makine sınıfı aşağıdadır; her satır, geçit/zemin durumuna göre karar mantığını özetler.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Geçit / zemin durumu", "Önerilen sınıf", "Neden"],
                    satirlar: [
                        ["Tarihi bina iç avlusu", "Dar kapı, hassas taş zemin", "Örümcek platform", "Şase geçmiyor, zemin noktasal yük istemiyor"],
                        ["Fabrika holü, standart kapı", "Geniş kapı, beton zemin", "Eklemli platform", "Geçit ve zemin sorun değil, kapasite avantajı eklemlide"],
                        ["Ofis asma katı, parke döşeme", "Standart kapı, hassas zemin", "Örümcek platform (ayarlanabilir ayak)", "Zemin yükü dağıtılmalı"],
                        ["Ağaç/tesisat üstü bahçe yolu", "Dar patika, düzensiz zemin", "Örümcek platform (paletli)", "Şase dar patikaya sığmıyor"],
                        ["AVM iç galerisi, geniş koridor", "Geniş geçit, beton/seramik zemin", "Eklemli platform", "Geçit yeterli, kapasite eklemlide daha yüksek"],
                    ],
                },
            },
            {
                baslik: "Taşıma ve kurulum lojistiği",
                paragraflar: [
                    "Örümcek platformun sahaya girişi, eklemliden farklı bir lojistik gerektirir: makine önce en dar noktaya kadar katlanmış hâlde taşınır, ardından uygun bir noktada yeniden açılır ve dengelenir. Bu süreç için geçidin yalnızca genişliği değil, dönüş açısı ve varsa eşik/basamak yüksekliği de önceden ölçülmelidir — bir merdiven boşluğundan geçirilecekse basamak sayısı ve dönüş sahanlığı ölçüsü ayrıca paylaşılmalıdır.",
                    "Kurulum sonrası ayakların dengelenmesi, zemin eğimine göre süre alabilir; bu süre, iş programına dahil edilmelidir. Eklemli platformda böyle bir kurulum adımı yoktur, makine doğrudan çalışmaya başlar — bu da iki sınıf arasındaki süre farkının bir parçasıdır.",
                ],
            },
            {
                baslik: "Maliyet ve süre dengesi",
                paragraflar: [
                    "Örümcek platform kiralaması, benzer yükseklikteki bir eklemliye göre genellikle daha yüksek birim maliyet taşır — hem makinenin kendisi hem kurulum süresi bu farkı oluşturur. Bu nedenle örümcek platformu yalnızca gerçekten gerekli olduğu (geçit veya zemin kısıtı olan) işlerde öneriyoruz; geçit ve zemin sorun değilse maliyeti daha düşük eklemli sınıfın önerilmesi, saha yöneticisinin bütçesini korur.",
                    "Bazı projelerde iki sınıf birlikte kullanılır: örümcek platform dar bir iç mekân bölümünü, eklemli platform aynı sahanın geniş dış cephesini karşılar. Bu tür karma planlama, keşif aşamasında tüm iş kalemleri gözden geçirilerek yapılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Örümcek platform her dar alanda mı gereklidir?",
                cevap:
                    "Hayır. Dar alan tek başına örümcek platform gerektirmez — belirleyici olan, geçidin en dar noktasının düşünülen eklemli modelin şase genişliğinden dar olup olmadığıdır. Birçok 'dar' görünen alan, kompakt iç mekân eklemli modelinin şasesine yeterince geniştir. Bu yüzden karar vermeden önce geçidin gerçek ölçüsünü ve düşünülen eklemli modelin şase genişliğini karşılaştırırız.",
            },
            {
                soru: "Zemin hassaslığını nasıl belirliyoruz?",
                cevap:
                    "Zemin kaplama türü (parke, seramik, ahşap, epoksi beton), varsa asma kat taşıma kapasitesi belgesi ve zeminde önceden görülmüş çatlak/deformasyon bilgisi birlikte değerlendirilir. Kesin bir taşıma kapasitesi rakamı verilmemişse, temkinli davranıp ayarlanabilir ayaklı örümcek platformu öneririz; bu, riski müşteri lehine yönetmenin bir yoludur.",
            },
            {
                soru: "Örümcek platformun kapasitesi eklemliden neden düşük?",
                cevap:
                    "Örümcek platformun tasarım önceliği taşınabilirlik ve dar geçitten geçebilmektir; bu öncelik, şase ve bom yapısını daha hafif ve kompakt tutmayı gerektirir, bu da sepet kapasitesini eklemli sınıfa göre sınırlar. Kapasite, tasarımın bir sonucu değil, taşınabilirlik hedefinin doğal bedelidir.",
            },
            {
                soru: "İki makineyi aynı projede birlikte kullanabilir miyiz?",
                cevap:
                    "Evet, karma planlama sık uygulanan bir yöntemdir. Bir binanın dar iç mekân bölümü örümcek platformla, geniş dış cephesi veya avlusu eklemli platformla karşılanabilir. Bu tür planlama, iş kalemlerinin tümü keşifte netleştirilerek, hangi bölümün hangi makineyle yapılacağı önceden belirlenerek yürütülür.",
            },
            {
                soru: "Örümcek platform hangi iç mekânlarda kullanılmaz?",
                cevap:
                    "Yüksek kapasiteli malzeme taşıma gereken (ağır çelik parça, çok sayıda ekipman) işlerde örümcek platformun kapasite sınırı yetersiz kalabilir; bu tür işlerde geçit yeterince genişse eklemli veya makaslı sınıf tercih edilir. Ayrıca kurulum için gerekli minimum alan bile yoksa (ayakların açılamayacağı kadar dar bir cep) örümcek platform da çözüm olmaz, o durumda farklı bir erişim yöntemi (iskele, halat erişimi) değerlendirilmelidir.",
            },
            {
                soru: "Karar sürecinde hangi ölçüleri paylaşmalıyız?",
                cevap:
                    "Geçidin en dar noktasının genişliği ve yüksekliği, varsa dönüş sahanlığı ölçüsü, zemin kaplama türü ve hedefin konumu (fotoğrafla birlikte) yeterlidir. Bu bilgiler üzerinden hem geçit hem zemin hem kapasite kriterini birlikte değerlendirip doğru sınıfı öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Örümcek/sepetli platformun şase-zemin yükü avantajları ve eklemliye göre kapasite farkı genel mühendislik bilgisidir; marka, tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Eklemli Platform Nakliye ve Teslimatı: Makine Sınıfı Seçimini Etkileyen Lojistik Kısıtlar",
        giris:
            "Eklemli platformun sahaya nasıl ulaşacağı, çoğu zaman makine seçiminin kendisi kadar belirleyici bir kısıttır ve bu domainde nakliye-teslimat hizmetini bağımsız bir konu olarak değil, doğru makine sınıfını seçme sürecinin bir parçası olarak ele alıyoruz. Yüksek metrajlı, dizel tahrikli bir eklemli platform, ağırlığı ve boyutları nedeniyle düşük yükleyici (low-bed) veya özel bir taşıma aracı gerektirir; bu aracın sahaya girebilmesi için yol genişliği, kavşak dönüş yarıçapı ve varsa yükseklik kısıtı (köprü, kablo, tabela) önceden kontrol edilmelidir. Kompakt akülü bir model ise daha küçük bir araçla, bazen standart bir kamyonla taşınabilir ve şehir içi dar sokaklara daha kolay girer. Bu fark, bazı projelerde makine seçimini doğrudan etkiler: teorik olarak en uygun bom sınıfı bir yükseklik-erişim hesabından çıksa bile, o sınıfın nakliye aracı sahaya giremiyorsa, ya alternatif bir teslimat noktası bulunur ya da nakliyesi daha kolay bir alt sınıf değerlendirilir. Bu sayfa, eklemli platform nakliye-teslimat sürecinin nasıl planlandığını ve bu planlamanın makine seçimiyle nasıl iç içe geçtiğini anlatır.",
        maddeler: [
            {
                baslik: "Ağırlık ve boyut sınıfına göre araç seçimi",
                metin:
                    "Kompakt akülü eklemli modeller görece hafif ve dar olduğu için standart bir kamyonla veya küçük bir römorkla taşınabilir; yüksek metrajlı dizel modeller ise ağırlıkları nedeniyle düşük yükleyici gerektirir ve bu araçların dönüş yarıçapı, park için ihtiyaç duyduğu alan standart bir kamyondan belirgin şekilde fazladır. Nakliye aracının sınıfı, teslimat güzergâhının kısıtlarıyla birlikte önceden değerlendirilmelidir.",
            },
            {
                baslik: "Güzergâh kısıtları: yol genişliği, dönüş, yükseklik",
                metin:
                    "Bir düşük yükleyici her sokağa veya şantiye girişine giremez; dar kavşaklar, keskin dönüşler ve alçak köprü/kablo gibi yükseklik kısıtları güzergâh üzerinde önceden kontrol edilmelidir. Bazı teslimatlarda araç ana yola kadar gelir, makine son yüz metreyi kendi motoruyla veya küçük bir çekiciyle tamamlar; bu, özellikle şehir merkezi ve organize sanayi bölgesi gibi dar sokak dokusuna sahip alanlarda sık uygulanan bir çözümdür.",
            },
            {
                baslik: "Teslim noktası koşulu: indirme alanı ve zemin",
                metin:
                    "Makinenin araçtan indirilebilmesi için yeterli düz ve sağlam bir alan gerekir; rampanın indiği zemin yumuşak veya eğimliyse indirme sırasında devrilme riski oluşabilir. Şantiye veya tesis girişinde bu alan önceden belirlenmeli, gerekiyorsa geçici bir platform veya takoz düzeni hazırlanmalıdır. İndirme noktası ile çalışma noktası arasındaki mesafe de ayrı bir zaman kalemi olarak plana eklenir.",
            },
            {
                baslik: "Zaman penceresi: trafik, vardiya, saha kabul saati",
                metin:
                    "Şehir içi teslimatlarda büyük bir aracın gündüz yoğun trafiğinde ilerlemesi hem süre hem risk açısından verimsizdir; bu nedenle teslimat çoğunlukla erken sabah veya trafiğin düşük olduğu saatlere kaydırılır. Fabrika ve organize sanayi sahalarında ise zaman penceresi trafikten çok tesisin kendi vardiya programına ve saha kabul prosedürüne bağlıdır — kantar geçişi, güvenlik kontrolü ve vardiya değişim saatleri teslimat planına dahil edilmelidir.",
            },
            {
                baslik: "Nakliye kısıtı makine seçimini nasıl değiştirir",
                metin:
                    "Bazı projelerde yükseklik-erişim hesabı en uygun sınıf olarak yüksek metrajlı dizel bir eklemli platform gösterse de, o sınıfın nakliye aracı sahaya giremiyorsa (dar giriş, zayıf zemin, yükseklik kısıtı) alternatif değerlendirilir: ya farklı bir teslimat/indirme noktası bulunup makine son mesafeyi kendi motoruyla tamamlar, ya da nakliyesi daha kolay, benzer erişimi sağlayan bir alt sınıf model değerlendirilir. Bu, makine seçiminin yalnızca çalışma zarfına değil, sahaya ulaşabilirliğe de bağlı olduğunu gösterir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sektör bazlı tipik teslimat kısıtları",
                paragraflar: [
                    "Farklı sektör sahalarında teslimat sürecini belirleyen tipik kısıtlar ve bu kısıtların makine/araç seçimine etkisi aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Tipik kısıt", "Etkilediği karar"],
                    satirlar: [
                        ["Şehir merkezi AVM cephesi", "Dar sokak, gündüz trafiği", "Teslimat saati gece/erken sabaha kaydırılır"],
                        ["Fabrika/organize sanayi", "Kantar, vardiya programı, kapı kontrolü", "Teslimat vardiya programına bağlanır"],
                        ["Kapalı depo, dar koridor", "Yükleme rampası genişliği", "Kompakt model + küçük araç seçilir"],
                        ["Enerji hattı çevresi kırsal saha", "Toprak yol, zayıf zemin", "Dizel 4x4 model + takviyeli indirme alanı"],
                        ["Şantiye, henüz yol yapılmamış saha", "Geçici erişim yolu, eğim", "Nakliye planı şantiye şefliğiyle koordine edilir"],
                    ],
                },
            },
            {
                baslik: "Teslimat öncesi paylaşılması gereken bilgiler",
                paragraflar: [
                    "Sahaya en uygun nakliye planını kurabilmek için teslimat noktasının fotoğrafı, giriş yolunun genişliği ve varsa yükseklik kısıtı, indirme alanının zemin türü ve tesisin varsa vardiya/güvenlik prosedürü önceden paylaşılmalıdır. Bu bilgiler eksik olduğunda, sahaya ulaşan aracın geri dönmesi veya makinenin uygunsuz bir noktaya indirilmesi riski doğar.",
                    "Özellikle daha önce hiç ağır araç girmemiş bir sahada (yeni açılan şantiye, kırsal enerji hattı işi), giriş yolunun taşıma kapasitesi görsel olarak değerlendirilmeli, gerekirse önceden bir keşif turu yapılmalıdır.",
                ],
            },
            {
                baslik: "Geri teslim ve sahadan çıkış planı",
                paragraflar: [
                    "İş bittiğinde makinenin sahadan çıkışı da aynı titizlikle planlanmalıdır; özellikle çok noktalı veya uzun süreli işlerde giriş anındaki zemin/hava koşulları ile çıkış anındakiler farklı olabilir (yağış sonrası yumuşayan toprak saha gibi). Çıkış planı, girişte kullanılan güzergâh ve zaman penceresiyle aynı mantıkla, teslim tarihi netleşince yeniden teyit edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Eklemli platformun nakliyesi neden makaslıya göre farklı planlanır?",
                cevap:
                    "Fark, çoğunlukla makinenin kendisinden değil sınıfına bağlı ağırlık ve boyuttan gelir; ama eklemli platformlarda bom yapısı nedeniyle taşıma sırasında ek sabitleme noktalarına dikkat edilmesi gerekebilir. Asıl planlama, hangi sınıf makinenin hangi araçla taşınacağı ve o aracın güzergâhı geçip geçemeyeceği üzerine kuruludur; bu, sınıf ne olursa olsun aynı mantıkla yürütülür.",
            },
            {
                soru: "Nakliye aracı sahaya giremezse ne oluyor?",
                cevap:
                    "Önce alternatif bir indirme noktası aranır — araç ana yola kadar gelir, makine son mesafeyi kendi motoruyla tamamlar. Bu da mümkün değilse, benzer erişim performansını sağlayan ama nakliyesi daha kolay bir alt sınıf model değerlendirilir. Bu senaryo genellikle teslimattan önce, güzergâh bilgisi paylaşıldığında tespit edilir; sahaya vardıktan sonra fark edilmesi istenmeyen bir durumdur, bu yüzden ölçü ve fotoğraf paylaşımını önceden isteriz.",
            },
            {
                soru: "Teslimat saatini kim belirliyor, biz mi siz mi?",
                cevap:
                    "İkisi birlikte belirler. Trafik ve güzergâh kısıtları bizim değerlendirmemizle netleşir, ama tesisin vardiya programı, güvenlik kontrolü veya kantar geçiş saatleri müşterinin paylaştığı bilgiye bağlıdır. Nihai zaman penceresi, iki tarafın kısıtlarının kesiştiği aralıkta belirlenir.",
            },
            {
                soru: "İndirme alanının zemini yeterince sağlam mı, nasıl anlarız?",
                cevap:
                    "Kesin bir taşıma kapasitesi ölçümü olmadığında, zeminin görünür durumu (kuru/ıslak, sıkışmış/gevşek, önceki araç izleri) ve varsa geçmişte benzer ağırlıkta araç geçip geçmediği bilgisiyle temkinli bir değerlendirme yapılır. Şüpheli durumlarda geçici takviye (metal plaka, kalas) önerilir veya indirme noktası değiştirilir.",
            },
            {
                soru: "Kırsal veya enerji hattı gibi yol altyapısı zayıf sahalarda teslimat mümkün mü?",
                cevap:
                    "Genellikle evet, ama planlama şehir içi teslimattan farklı ilerler — toprak yolun taşıma kapasitesi, yağış sonrası durumu ve varsa geçici erişim yolu ihtiyacı önceden değerlendirilmelidir. Bu tür sahalarda dizel 4x4 tahrikli bir taşıma veya çekici aracı gerekebilir; net karar, güzergâh fotoğrafları paylaşıldığında verilir.",
            },
            {
                soru: "Aynı projede birden fazla noktaya teslimat yapılacaksa süre nasıl hesaplanır?",
                cevap:
                    "Her nokta için ayrı bir güzergâh ve zaman penceresi değerlendirilir; noktalar arası mesafe, her sahanın kendi giriş kısıtı ve varsa vardiya programı toplam süreye eklenir. Çok noktalı teslimatlarda genellikle bir sıralama planı yapılır — en kısıtlı erişimli nokta önce mi sonra mı ele alınacağına göre güzergâh optimize edilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Ağır vasıta nakliye planlaması, güzergâh/zemin kısıtları ve teslimat zaman penceresi genel lojistik ve saha güvenliği bilgisidir; tesis adı, marka ve rakam uydurulmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Forklift mi Eklemli Platform mu? Yatay Yük Taşıma ile Yükseğe Erişim Farkı",
        giris:
            "Forklift-istifleme ve eklemli platform, sık sık aynı sepette değerlendirilen ama aslında birbirini ikame etmeyen iki farklı makine sınıfıdır; bu domainin danışmanlık yaklaşımı bu ayrımı netleştirmekten geçer. Forklift, yükü yerden alıp belirli bir yüksekliğe düz bir çatal hareketiyle kaldırıp raf veya istif noktasına yerleştirmek için tasarlanmıştır — hareketi dikeydir ve yatay erişim kabiliyeti yoktur. Eklemli platform ise bir kişiyi (ve sınırlı bir malzemeyi) bomunun kırılma kabiliyetiyle hem dikey hem yatay hem de bir engelin arkasına taşıyabilir, ama bir forklift gibi ağır yük istifleme kapasitesine sahip değildir. İki makinenin karıştığı tipik durum, bir sahada hem yük taşıma hem yükseğe erişim ihtiyacı aynı anda olduğunda ortaya çıkar — örneğin bir depo kurulumunda hem raf üzerine malzeme istiflenir hem tavan aydınlatması monte edilir. Bu iki iş, iki farklı makineyle yürütülür; birini diğerinin yerine kullanmaya çalışmak hem verimsiz hem güvensizdir. Bu sayfa, forklift-istifleme hizmetinin bu domainde nerede anlamlı olduğunu, eklemli platformla nasıl bir arada çalıştığını ve ikisinin karıştırılmaması gereken sınırlarını anlatır.",
        maddeler: [
            {
                baslik: "Forklift: dikey yük taşımanın makinesi",
                metin:
                    "Forklift, çatalları üzerindeki yükü düz bir dikey hat boyunca kaldırıp indirir; raf sistemine palet yerleştirme, kamyon yükleme-boşaltma ve saha içi malzeme taşıma bu makinenin asıl işidir. Yatay erişim kabiliyeti yoktur — bir engelin arkasına veya bir cephe girintisine ulaşamaz. İş, düz bir yükleme-indirme hareketiyse forklift doğru araçtır.",
            },
            {
                baslik: "Eklemli platform: kişiyi taşıyan, engeli aşan makine",
                metin:
                    "Eklemli platform bir insanı ve sınırlı bir malzemeyi (el aletleri, küçük parçalar) taşır, ana işlevi kişiyi çalışma noktasına güvenli biçimde götürmektir. Bom kırılımı sayesinde bir engelin üzerinden veya çevresinden dolaşarak hedefe ulaşabilir ama forklift gibi ağır palet istifleme kapasitesine sahip değildir. İş, bir kişinin belirli bir noktaya erişip orada çalışması ise (montaj, bakım, kurulum) eklemli platform doğru araçtır.",
            },
            {
                baslik: "İki makinenin aynı sahada birlikte çalışması",
                metin:
                    "Bir depo kurulumu veya fabrika iç düzenlemesi projesinde forklift raf/malzeme istiflemesini yürütürken, eklemli veya makaslı platform aynı sahada tavan aydınlatması, tesisat veya çatı altı işlerini yürütür. İki makine farklı iş kalemlerini paralel yürütür; aynı anda aynı koridorda çalışıyorsa trafik planı ve güvenlik mesafesi önceden netleştirilir.",
            },
            {
                baslik: "Forkliftin eklemli platform yerine kullanılamayacağı durumlar",
                metin:
                    "Forklift üzerine sabitlenmiş bir sepetle kişi taşımak, standart bir uygulama değildir ve pek çok sahada güvenlik kuralları buna izin vermez; forklift kişi taşımaya değil yük taşımaya göre tasarlanmıştır, dengeleme ve düşme koruma sistemleri farklıdır. Bir kişinin yükseğe çıkması gerekiyorsa, bu iş her zaman uygun bir platform sınıfıyla (eklemli, makaslı, örümcek) yürütülmelidir.",
            },
            {
                baslik: "Eklemli platformun ağır yük istifleme yerine kullanılamayacağı durumlar",
                metin:
                    "Eklemli platformun sepet kapasitesi, forklift çatalının kaldırma kapasitesiyle kıyaslanamayacak kadar düşüktür; birden fazla paletlik yükü aynı anda taşımak veya raf sistemine sistematik istifleme yapmak eklemli platformun işi değildir. Bu tür bir talep geldiğinde forklift veya uygun bir istif makinesi önerilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş tipine göre makine seçimi",
                paragraflar: [
                    "Sahada karşılaşılan tipik iş tipleri ve bunlara karşılık gelen doğru makine sınıfı aşağıda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Doğru makine", "Neden"],
                    satirlar: [
                        ["Raf sistemine palet yerleştirme", "Forklift / istif makinesi", "Dikey düz yük taşıma"],
                        ["Tavan aydınlatma montajı", "Eklemli platform", "Kişi taşıma + yatay/engel aşan erişim"],
                        ["Depo tavan tesisatı, boru hattı bakımı", "Eklemli veya makaslı platform", "Kişi taşıma, hassas konumlama"],
                        ["Kamyon yükleme-boşaltma", "Forklift", "Ağır yük, tekrarlanan dikey hareket"],
                        ["Çelik konstrüksiyon montaj noktasına erişim", "Eklemli platform", "Kişi taşıma + bom ile engel aşma"],
                    ],
                },
            },
            {
                baslik: "Aynı sahada iki makinenin trafik planı",
                paragraflar: [
                    "Forklift ve eklemli platform aynı depo veya fabrika koridorunda paralel çalışacaksa, güvenlik mesafesi ve geçiş önceliği önceden netleştirilir; forkliftin ağır yük taşırken ani manevra yapması, platform çalışanının dikkatini bölebilir. Bu nedenle iki ekip arasında saha koordinasyonu (kim hangi koridoru ne zaman kullanacak) proje başında belirlenir.",
                    "Çok katlı raf sistemlerinde, forklift raf arasında hareket ederken eklemli platform genellikle koridorun üst kısmında (tavan işleri) çalışır; bu doğal bir dikey ayrışma sağlar ama yine de göz teması ve iletişim protokolü gerekir.",
                ],
            },
            {
                baslik: "Karma talep geldiğinde yaklaşımımız",
                paragraflar: [
                    "Bir müşteri 'hem istifleme hem yükseğe erişim' dediğinde, önce iki işi ayrı ayrı tanımlarız — hangi iş kalemi yük taşıma, hangisi kişi taşıma. Bu ayrım netleşmeden tek bir makineyle her ikisini çözmeye çalışmak, ya güvenlik riski ya da verimsizlik doğurur. Netleştikten sonra iki makine de aynı teklife dahil edilebilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forklifte sepet takıp kişi taşınabilir mi?",
                cevap:
                    "Önermiyoruz. Forklift, kişi taşımak için tasarlanmış dengeleme ve düşme koruma sistemlerine sahip değildir; bu tür bir uygulama pek çok sahada iş güvenliği kuralına aykırıdır. Kişi yükseğe çıkacaksa, bunun için tasarlanmış bir eklemli, makaslı veya örümcek platform kullanılmalıdır.",
            },
            {
                soru: "Eklemli platformla palet taşınabilir mi?",
                cevap:
                    "Sınırlı miktarda, sepet kapasitesi dahilinde küçük malzeme taşınabilir ama bir palet yükü taşımak eklemli platformun kapasitesini genellikle aşar. Palet düzeyinde yük taşıma her zaman forklift veya uygun bir istif makinesiyle yapılmalıdır.",
            },
            {
                soru: "Bir depo kurulum projesinde iki makineyi de kiralamak zorunda mıyız?",
                cevap:
                    "Projede hem yük istifleme hem yükseğe erişim işi varsa, evet — iki farklı işi tek makineyle güvenli biçimde çözmek mümkün değildir. Ama sadece istifleme veya sadece yükseğe erişim ihtiyacı varsa, yalnızca ilgili makine kiralanır; gereksiz ikinci makine önerilmez.",
            },
            {
                soru: "Forklift ve eklemli platform aynı anda aynı koridorda çalışabilir mi?",
                cevap:
                    "Uygun bir güvenlik mesafesi ve koordinasyon planıyla evet, ama önerilen yaklaşım iş kalemlerini zaman veya alan olarak ayırmaktır — forklift bir koridoru bitirdikten sonra platform aynı koridora geçebilir. Aynı anda çalışma gerekiyorsa, saha başında net bir iletişim protokolü kurulur.",
            },
            {
                soru: "Forklift istifleme hizmeti bu sitede neden sınırlı bir yer tutuyor?",
                cevap:
                    "Çünkü ana uzmanlık alanımız kişi taşıyan yükseğe erişim ekipmanlarıdır (eklemli, makaslı, örümcek platform). Forklift-istifleme, genellikle bir platform projesiyle birlikte gelen tamamlayıcı bir hizmettir; bağımsız yoğun forklift operasyonu talep eden işlerde, ihtiyaca göre yönlendirme yaparız.",
            },
            {
                soru: "Hangi bilgileri paylaşırsak doğru makineyi öneririz?",
                cevap:
                    "İşin yük taşıma mı kişi taşıma mı olduğunu, yaklaşık yük ağırlığını veya hedef yüksekliği, varsa engel durumunu ve zemin tipini paylaşmanız yeterlidir. Bu bilgilerle hangi iş kaleminin forklift, hangisinin eklemli platform gerektirdiğini netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift ve eklemli platformun kapasite/hareket farkı, kişi taşıma güvenlik kuralları genel iş ekipmanı ve iş güvenliği bilgisidir; marka, tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Eklemli Platform (Boom) Kiralama: Ulusal Ölçekte Makine Seçim Danışmanlığı",
        giris:
            "Eklemli platform (boom) kiralama, bu domainin ana hizmetidir ve yaklaşımımız yalnızca 'hangi metrajda makine var' sorusuna değil, 'bu iş için eklemli gerçekten doğru sınıf mı' sorusuna cevap vermeye dayanır. Bomunun birden fazla noktadan kırılabilmesi, eklemli platformu düz çıkışın yetmediği her sahada (bir engelin üzerinden, arkasından veya yanından hedefe ulaşmak gerektiğinde) vazgeçilmez kılar; ama bu kabiliyet her işte gerekli değildir ve gereksiz yere eklemli önermek, hem maliyeti hem kurulum süresini artırır. Ulusal ölçekte karşılaştığımız sahalar birbirinden çok farklıdır — bir fabrika çatısının saçak arkası, bir AVM cephesinin girintili-çıkıntılı elemanları, bir ağacın veya tesisatın üzerinden aşarak ulaşılması gereken bir nokta, kapalı bir depo veya sanayi holünün dar koridoru, bir enerji hattının çevresi, henüz iskele kurulmamış bir şantiye — ama hepsinde ortak soru aynıdır: hedefin altı 'dolu' mu (bir engel, çıkıntı, iletken hat, dar geçit var mı) yoksa 'boş' mu? Dolu ise eklemli, boş ise çoğu zaman daha ekonomik olan makaslı veya teleskopik sınıf yeterlidir. Bu sayfa, eklemli platformun teknik seçim mantığını, model sınıflarını ve karar sürecini baştan sona anlatır.",
        maddeler: [
            {
                baslik: "Eklemli seçiminin ilk sorusu: hedefin altı dolu mu",
                metin:
                    "Bir eklemli platform önerisine başlamadan önce sorduğumuz ilk soru, hedefin tam altına veya doğrudan önüne bir makine park edilip düz bir çıkışla ulaşılıp ulaşılamayacağıdır. Ulaşılabiliyorsa (boş, düz bir zemin, hedefin üstünde) makaslı veya teleskopik sınıf genellikle daha ekonomik ve daha geniş sepetli bir çözümdür. Ulaşılamıyorsa — araya bir çatı saçağı, cephe girintisi, ağaç dalı, boru hattı veya bina köşesi giriyorsa — bomun kırılma kabiliyeti tek pratik çözüm hâline gelir.",
            },
            {
                baslik: "Zarf diyagramı: metraj değil erişim eğrisi",
                metin:
                    "Eklemli platform seçiminde 'kaç metre' sorusu tek başına yeterli bilgi vermez; asıl belirleyici, her yükseklikte makinenin ulaşabildiği yatay mesafeyi gösteren çalışma zarfı (working envelope) diyagramıdır. Bom yükseldikçe yatay erişim daralır, alçaldıkça genişler — bu yüzden park noktasının hedefe olan yatay-düşey mesafesi, aradaki engelin ölçüleri ve hedefin kotu birlikte bu diyagrama işaretlenerek doğru sınıf belirlenir.",
            },
            {
                baslik: "Bom sınıfları: kompakt, orta, yüksek metraj",
                metin:
                    "Eklemli platformlar kaba hatlarıyla üç sınıfta değerlendirilir. Kompakt sınıf, dar iç mekân ve dar avlu işlerinin makinesidir; çoğu kapıdan ve dar geçitten geçebilir. Orta sınıf, çok katlı sanayi yapıları ve AVM cephelerindeki tipik erişim işlerinin bandıdır. Yüksek metrajlı sınıf, genellikle dizel 4x4 tahrikli, ağır sanayi holleri ve geniş dış sahalarda kullanılır. Hangi sınıfın gerektiği zarf diyagramı hesabından çıkar, 'daha büyüğü daha güvenlidir' varsayımı geçerli değildir.",
            },
            {
                baslik: "Tahrik tipi: akülü, dizel, 4x4",
                metin:
                    "Tahrik seçimi zemine ve ortama göre yapılır. Akülü modeller sert-düz zeminde (beton fabrika içi, iç mekân) sessiz ve emisyonsuz çalışır ama yumuşak veya eğimli zeminde tırmanma-denge sınırı düşüktür. Dizel 4x4 modeller stabilize, engebeli veya hafif eğimli dış sahalarda (şantiye, tarım/silo sahası, enerji hattı çevresi) arazi lastikleri ve şasi dengeleme sistemiyle çalışır; egzoz nedeniyle kapalı alanda tercih edilmez.",
            },
            {
                baslik: "Ne zaman eklemli önerilmez, dürüstçe alternatif gösterilir",
                metin:
                    "Hedefin altı boşsa, zemin düzse ve sepette birden fazla kişi veya ağır malzeme taşınacaksa makaslı platform hem daha ekonomik hem daha geniş sepetli bir çözümdür; bu durumda eklemli önermeyiz. Benzer biçimde, çok dar bir geçit varsa eklemlinin şasesi girmeyebilir, bu durumda örümcek platform değerlendirilir. Doğru sınıfı önermek, en pahalı makineyi satmaktan değil, işin geometrisine uygun makineyi bulmaktan geçer.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sektör senaryosu ve önerilen makine sınıfı",
                paragraflar: [
                    "Ulusal ölçekte farklı sektörlerden gelen tipik senaryolar ve bunlara karşılık gelen önerilen eklemli sınıfı aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Erişim engeli", "Önerilen sınıf", "Neden"],
                    satirlar: [
                        ["Fabrika çatı saçağı arkası", "Saçak çıkıntısı", "Orta sınıf akülü/dizel eklemli", "Bom, saçağın altından değil üzerinden dolaşarak ulaşır"],
                        ["AVM cephesi girinti-çıkıntı", "Cephe elemanları", "Orta-yüksek sınıf eklemli", "Zarf diyagramı, çıkıntıyı aşan açı gerektirir"],
                        ["Ağaç/tesisat üstünden aşma", "Dal, kablo, boru hattı", "Kompakt-orta eklemli", "Hassas açılı yaklaşım, düz bomla mümkün değil"],
                        ["Kapalı depo dar koridor", "Raf, dar geçit", "Kompakt akülü eklemli veya örümcek", "Şase, koridora ve tavan yüksekliğine uygun olmalı"],
                        ["Enerji hattı çevresi", "İletken hat, güvenli mesafe", "Dizel 4x4 eklemli (mesafe hesaplı)", "Hat mesafesini koruyacak açıdan erişim gerekir"],
                    ],
                },
            },
            {
                baslik: "Keşif ölçü seti: doğru sınıfı belirleyen dört veri",
                paragraflar: [
                    "Bir eklemli platform işinin keşfi dört veri ister: park noktasının hedefe olan yatay-düşey mesafesi, aşılacak engelin yüksekliği ve derinliği, hedefin yerden kotu ve tümünü gösteren bir saha fotoğrafı. Bu set zarf diyagramına işaretlenerek makinenin ulaşıp ulaşamayacağı önceden kesinleştirilir.",
                    "Zemin tipi ve varsa eğim bilgisi de bu sete eklenir — tahrik tipi seçimi bu bilgiye bağlıdır. Belirsizlik varsa, sahaya yanlış makinenin gitmesini önlemek için keşif turu önerilir.",
                ],
            },
            {
                baslik: "Bom güvenliği ve periyodik kontrol",
                paragraflar: [
                    "Eklemli platformda bomun çok eksenli hareketi nedeniyle tam vücut kemeri ve kısa lanyard kullanımı EN 280 standardı gereği zorunludur; bu, iç mekân işlerinde bile geçerlidir. Elektrik hattı yakınında çalışırken bomun iletken gövdesi nedeniyle güvenli mesafe kuralına tavizsiz uyulur. Makinelerin periyodik kontrol (muayene) kayıtları güncel tutulur ve talep hâlinde paylaşılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Eklemli platform ile teleskopik platform arasındaki fark nedir?",
                cevap:
                    "Teleskopik platform bomu tek parça hâlinde uzar, düz bir açıyla yükselir; eklemli platform ise bomu birden fazla noktadan kırarak hem dikey hem yatay hem de bir engelin arkasına doğru erişim eğrisi çizer. Hedefin altı boşsa ve düz bir çıkış yetiyorsa teleskopik genellikle daha yüksek metraja ve kapasiteye ulaşabildiği için tercih edilir; hedefin altı doluysa eklemli tek pratik çözümdür.",
            },
            {
                soru: "Hangi metrajda eklemli platform önerirsiniz, bunu nasıl belirliyorsunuz?",
                cevap:
                    "Metraj, tek başına hedef yüksekliğinden değil, zarf diyagramı hesabından çıkar — park noktasının hedefe yatay-düşey mesafesi ve aradaki engelin ölçüleri birlikte değerlendirilir. Bu bilgileri fotoğrafla paylaştığınızda, hem ulaşan hem sahaya sığan model sınıfını netleştiririz.",
            },
            {
                soru: "Dizel mi akülü mü eklemli platform almalıyım?",
                cevap:
                    "Bu, zemin ve ortam koşuluna bağlıdır. Kapalı, sert-düz zeminli bir alanda akülü model sessiz ve emisyonsuz çalışır; açık, engebeli veya eğimli bir dış sahada dizel 4x4 model gereklidir çünkü akülü modelin tırmanma-denge sınırı bu tür zeminlerde yetersiz kalabilir. Karışık sahalarda (bir kısmı kapalı bir kısmı açık) iki fazlı bir plan kurulabilir.",
            },
            {
                soru: "Eklemli platform yerine makaslı önerdiğiniz oluyor mu?",
                cevap:
                    "Evet, sık sık. Hedefin altı boşsa, zemin düzse ve sepette geniş çalışma alanına ihtiyaç varsa makaslı platform hem daha ekonomik hem daha kapasiteli bir çözümdür. Eklemli her işin makinesi değildir; doğru sınıfı önermek, sahanın gerçek geometrisine bakmaktan geçer.",
            },
            {
                soru: "Elektrik hattı yakınında eklemli platform güvenli mi?",
                cevap:
                    "Güvenli mesafe planıyla evet. Bom iletken gövdedir; hat enerjisiz kılınabiliyorsa iş rahat planlanır, kılınamıyorsa hattın gerilim sınıfına göre tanımlı güvenli mesafe korunacak açıdan erişim geometrisi kurulur. Mesafenin sağlanamadığı işte risk alınmaz, geometri yeniden değerlendirilir.",
            },
            {
                soru: "Sahamızın tam olarak hangi sektöre ait olduğunu belirtmesek de teklif alabilir miyiz?",
                cevap:
                    "Evet — makine seçimi sektörden çok sahanın geometrisine (engel, zemin, hedef kotu) bağlıdır. Fabrika, AVM, kırsal saha veya şantiye fark etmeksizin, park noktası-hedef mesafesi ve engel ölçüleriyle birlikte fotoğraf paylaşıldığında doğru sınıfı belirleyip teklif oluştururuz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Zarf diyagramı, bom sınıfları, tahrik tipi ayrımı ve EN 280 düşme koruma kuralları genel mühendislik ve mevzuat bilgisidir; marka, tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "İç Mekân ve Depo İçi Platform Kiralamada Eklemli Sınıfın Yeri",
        giris:
            "İç mekân ve depo içi işlerde eklemli platform, her zaman ilk akla gelen sınıf değildir — kapalı hacimde egzoz gerektirmeyen akülü tahrik zorunludur ve çoğu iç mekân işi düz bir çıkışla çözülebildiği için makaslı platform genellikle daha ekonomik ve daha geniş sepetli bir alternatiftir. Ama bazı iç mekân senaryolarında eklemli platform yine de tek doğru sınıf hâline gelir: bir depo raf sisteminin arkasına, bir üretim hattının üzerinden dolaşarak bir boru hattına, ya da bir asma tavan-tesisat bölümünün girintili bir köşesine ulaşmak gerektiğinde, düz bir makaslı çıkışı yetmez ve bomun kırılma kabiliyeti devreye girer. Bu domain, iç mekân platform danışmanlığını bu ayrım üzerinden yürütür: önce işin gerçekten bir engel aşımı mı yoksa düz bir yükseklik erişimi mi olduğu netleştirilir, ardından buna göre akülü eklemli veya akülü makaslı sınıfı önerilir. Bu sayfa, kapalı hacimdeki farklı sektör senaryolarında (fabrika içi, depo, hastane, ofis) hangi durumda eklemli platformun gerekli olduğunu ve hangi durumda gereksiz olduğunu anlatır.",
        maddeler: [
            {
                baslik: "Kapalı hacimde tahrik zorunluluğu: akülü",
                metin:
                    "İç mekânda egzoz emisyonu üreten bir dizel makine kullanmak, havalandırma yetersizse ciddi bir sağlık riski oluşturur; bu nedenle iç mekân işlerinde akülü (elektrikli) tahrikli modeller zorunludur. Bu kural, eklemli veya makaslı fark etmeksizin her iç mekân işi için geçerlidir. Akülü modellerin şarj süresi ve çalışma süresi, uzun vardiyalı işlerde önceden planlanmalıdır.",
            },
            {
                baslik: "Ne zaman düz makaslı çıkış yeterli",
                metin:
                    "Hedefin tam altına park edilip düz bir çıkışla ulaşılabiliyorsa (örneğin bir depo tavanının açık bir bölümü, bir hangar iç yüzeyi) akülü makaslı platform hem daha geniş sepetli hem daha ekonomik bir çözümdür. Bu domainde eklemli platformu her iç mekân işine önermeyiz; makaslının yeterli olduğu işlerde dürüstçe makaslı önerilir.",
            },
            {
                baslik: "Ne zaman iç mekân eklemli zorunlu hâle gelir",
                metin:
                    "Raf sisteminin arkasına, bir üretim hattının veya makine parkının üzerinden dolaşarak bir noktaya, ya da bir asma tavanın girintili köşesine ulaşmak gerektiğinde, bomun kırılma kabiliyeti tek çözümdür — makaslı platform bu tür bir engeli aşamaz. Kompakt iç mekân eklemli modeller, bu tür işler için düşük kapalı yükseklikte ve dar şasede tasarlanmıştır.",
            },
            {
                baslik: "Kapı-koridor ölçümü: ilk adım",
                metin:
                    "İç mekâna girecek her makine için önce kapı genişliği-yüksekliği ve koridor dönüş ölçüsü kontrol edilmelidir; bu ölçüm yapılmadan makine sahaya gönderilmez. Kompakt eklemli modellerin şase genişliği çoğu standart kapıdan geçecek şekilde tasarlanmıştır, ama her modelin ölçüsü farklıdır — kesin cevap, kapı ölçüsü paylaşıldığında verilir.",
            },
            {
                baslik: "Zemin koruma ve komşu faaliyetle çakışmama",
                metin:
                    "İç mekân işlerinde zemin genellikle hassas kaplamalıdır (epoksi, seramik, ahşap); tekerlek izini önlemek için koruma örtüsü veya tampon kullanılabilir. Ayrıca aynı hacimde devam eden başka bir faaliyet (üretim hattı, depolama operasyonu) varsa, platformun çalışma alanı bu faaliyetle çakışmayacak şekilde önceden koordine edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekân senaryosu ve doğru sınıf",
                paragraflar: [
                    "Farklı iç mekân senaryolarında eklemli mi makaslı mı gerektiğini gösteren tipik örnekler aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Engel durumu", "Önerilen sınıf", "Neden"],
                    satirlar: [
                        ["Depo tavanı açık bölüm aydınlatması", "Engel yok, düz çıkış", "Akülü makaslı", "Daha ekonomik, geniş sepet"],
                        ["Raf sistemi arkasına boru bakımı", "Raf engeli", "Akülü eklemli", "Bom rafın arkasına dolanarak ulaşır"],
                        ["Üretim hattı üzerinden tesisat", "Hat engeli", "Kompakt akülü eklemli", "Hattın üzerinden aşarak erişim"],
                        ["Hastane koridoru tavan işi", "Dar koridor, hassas zemin", "Kompakt eklemli veya örümcek", "Şase dar koridora uygun olmalı"],
                        ["Ofis asma tavan-tesisat", "Girintili köşe", "Kompakt akülü eklemli", "Köşeye açılı yaklaşım gerekir"],
                    ],
                },
            },
            {
                baslik: "Şarj ve çalışma süresi planlaması",
                paragraflar: [
                    "Akülü modellerin çalışma süresi şarj durumuna bağlıdır; uzun vardiyalı veya çok günlü işlerde şarj noktasının sahada bulunup bulunmadığı önceden netleştirilmelidir. Bazı projelerde vardiya arası şarj planı kurularak kesintisiz çalışma sağlanır.",
                    "Kısa süreli tek noktalık işlerde bu bir sorun oluşturmaz, ama çok noktalı bir iç mekân bakım turunda (bkz. çok noktalı rota bakım hizmeti) şarj süresi iş programının bir parçası olarak ele alınmalıdır.",
                ],
            },
            {
                baslik: "İç mekân işlerinde güvenlik özel maddeleri",
                paragraflar: [
                    "İç mekânda çalışan personelin dışında, aynı hacimde devam eden operasyon (forklift trafiği, üretim hattı, hasta/ziyaretçi geçişi gibi hassas ortamlar) varsa, platformun çalışma alanı bariyerlenir ve geçiş güzergâhı önceden belirlenir. Egzozsuz tahrik zorunluluğu ve zemin koruma, iç mekân işlerinin sabit güvenlik maddeleridir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İç mekânda dizel eklemli platform kullanılabilir mi?",
                cevap:
                    "Hayır, havalandırması yeterli olmayan kapalı bir hacimde dizel makine kullanmak egzoz emisyonu nedeniyle sağlık riski oluşturur. İç mekân işlerinde her zaman akülü (elektrikli) tahrikli model kullanılır; bu kural sınıf fark etmeksizin geçerlidir.",
            },
            {
                soru: "İç mekânda her zaman eklemli mi gerekir?",
                cevap:
                    "Hayır, tam tersine çoğu iç mekân işi düz bir çıkışla çözülür ve bu durumda akülü makaslı platform hem daha ekonomik hem daha geniş sepetlidir. Eklemli platform, ancak bir engelin (raf, üretim hattı, girintili köşe) arkasına ulaşmak gerektiğinde önerilir.",
            },
            {
                soru: "Makinenin kapıdan geçip geçmeyeceğini nasıl anlarız?",
                cevap:
                    "Kapı genişliği-yüksekliği ve koridor dönüş ölçüsünü paylaşmanız yeterlidir; düşündüğümüz modelin şase ölçüsüyle karşılaştırıp kesin cevap veririz. Ölçü paylaşılmadan bir modelin sahaya gönderilmesi, sığmama riski taşır.",
            },
            {
                soru: "Zeminimiz hassas (epoksi/parke), platform zarar verir mi?",
                cevap:
                    "Doğru koruma önlemiyle hayır — tekerlek izi ve nokta yükü riskini azaltmak için koruma örtüsü veya tampon kullanılabilir. Zeminin taşıma kapasitesi belirsizse, ayarlanabilir ayaklı örümcek platform gibi alternatif bir sınıf da değerlendirilebilir.",
            },
            {
                soru: "Aynı hacimde devam eden üretim varken çalışabilir miyiz?",
                cevap:
                    "Genellikle evet, ama platformun çalışma alanı ile üretim/operasyon alanı arasında bariyer ve geçiş güzergâhı önceden koordine edilmelidir. Bu koordinasyon, tesis yönetimiyle birlikte iş başlamadan netleştirilir.",
            },
            {
                soru: "Şarj süresi işimizi keser mi?",
                cevap:
                    "Kısa süreli tek noktalık işlerde genellikle sorun oluşturmaz; uzun vardiyalı veya çok günlü işlerde şarj noktası ve vardiya arası şarj planı önceden kurulur. Sahada şarj imkânı olup olmadığını paylaşmanız, doğru planı kurmamıza yardımcı olur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kapalı hacimde egzozsuz tahrik zorunluluğu ve akülü/dizel ayrımı genel iş güvenliği ve mühendislik bilgisidir; tesis adı, marka ve rakam uydurulmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Çelik Konstrüksiyon Montajında Eklemli Platform: Montaj Sırasına Göre Makine Seçimi",
        giris:
            "Çelik konstrüksiyon montajı, ulusal ölçekte fabrika çatısı yapımından şantiye iskelet montajına kadar geniş bir yelpazede karşımıza çıkar ve bu işlerde eklemli platform, montajın hangi aşamasında olduğuna göre gerekli ya da gereksiz hâle gelebilir. Montajın erken aşamasında (henüz kolon-kiriş birleşimleri tamamlanmamışken) saha genellikle açık ve engelsizdir, bu durumda düz çıkışlı makaslı veya teleskopik platform yeterli olabilir. Montaj ilerledikçe (aşık, çapraz bağlantı, cephe kaplama dönemine geçildikçe) kurulmakta olan iskeletin kendisi bir engele dönüşür — kaynak veya cıvata yapılacak nokta, artık dışarıdan düz bir çıkışla değil, çelik elemanların arasından dolaşarak ulaşılabilecek bir konuma gelir. Bu noktada eklemli platformun bom kırılımı, montaj ekibini doğru açıdan ve doğru mesafeden hedefe taşıyan tek pratik çözüme dönüşür. Vinç operasyonuyla eş zamanlı çalışıldığı için platformun konumlandırılması da vinç kilitleme penceresine göre planlanır. Bu sayfa, çelik konstrüksiyon montajının farklı aşamalarında eklemli platformun rolünü ve montaj sırasıyla ilişkisini anlatır.",
        maddeler: [
            {
                baslik: "Montaj aşamasına göre makine ihtiyacı değişir",
                metin:
                    "Kolon dikme ve ana kiriş montajı gibi erken aşamalarda saha genellikle açık, çelik iskelet henüz seyrektir; bu aşamada düz çıkışlı makaslı veya teleskopik platform çoğu zaman yeterlidir. Aşık montajı, çapraz bağlantı ve cephe kaplama gibi ileri aşamalarda ise kurulu iskelet elemanları arasından dolaşmak gerekir, bu da eklemli platformu gerekli kılar. Doğru planlama, montaj takviminin hangi aşamasında hangi makinenin gerekeceğini önceden öngörür.",
            },
            {
                baslik: "Kurulu iskelet, kendi engelini yaratır",
                metin:
                    "Montaj ilerledikçe, önceden monte edilmiş kolon-kiriş-aşık elemanları, sonraki montaj noktasına düz erişimi engelleyen fiziksel bir engel hâline gelir. Eklemli platformun bomu, bu elemanların arasından veya üzerinden dolaşarak kaynak/cıvata noktasına hassas bir açıyla yaklaşabilir; bu, montaj sırası ilerledikçe platformun neden vazgeçilmez olduğunu açıklar.",
            },
            {
                baslik: "Vinç koordinasyonu ve kilitleme penceresi",
                metin:
                    "Çelik montaj sahasında vinç ve platform aynı anda çalışır; vinç bir elemanı kaldırıp yerleştirirken platformun o alana girmesi güvenlik riski oluşturur. Bu nedenle platformun çalışma alanı ve zamanlaması, vincin kilitleme (elemanın geçici sabitlenmesi) penceresine göre planlanır — platform genellikle eleman sabitlendikten sonra kaynak/cıvata işi için alana girer.",
            },
            {
                baslik: "Saha tipi: fabrika çatısı, şantiye, sanayi holü",
                metin:
                    "Fabrika çatısı montajında saha genellikle geniş ve açıktır, dizel veya akülü eklemli tercih edilebilir; şantiye ortamında saha komşu yapılara bitişik ve dar olabilir, bu durumda kompakt bir eklemli modeli ve dikkatli bir park planı gerekir; sanayi holü içi montajda ise egzozsuz akülü tahrik zorunludur. Saha tipi, tahrik seçimini doğrudan belirler.",
            },
            {
                baslik: "Model sınıfı: montaj yüksekliği ve erişim açısına göre",
                metin:
                    "Alçak-orta yükseklikli hangar montajlarında kompakt-orta sınıf eklemli genellikle yeterlidir; yüksek çatılı sanayi holü veya çok katlı çelik yapı montajında yüksek metrajlı, genellikle dizel 4x4 model gerekir. Model seçimi, hedef montaj noktasının yüksekliği ve o noktaya erişim açısının zarf diyagramına işaretlenmesiyle netleştirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj aşaması ve önerilen sınıf",
                paragraflar: [
                    "Çelik konstrüksiyon montajının farklı aşamalarında tipik olarak önerdiğimiz makine sınıfı aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Montaj aşaması", "Saha durumu", "Önerilen sınıf", "Neden"],
                    satirlar: [
                        ["Kolon dikme, ana kiriş montajı", "Açık, seyrek engel", "Makaslı veya teleskopik", "Düz çıkış genellikle yeterli"],
                        ["Aşık montajı, çapraz bağlantı", "Kısmi engel (kurulu elemanlar)", "Eklemli platform", "Elemanlar arasından dolaşarak erişim"],
                        ["Cephe kaplama", "Yoğun engel (kaplanmış cephe)", "Eklemli platform", "Cepheye açılı yaklaşım gerekir"],
                        ["Dar şantiye parseli, komşu bina bitişik", "Alan darlığı", "Kompakt eklemli", "Park için dar alan yeterli olmalı"],
                        ["Sanayi holü içi montaj", "Kapalı hacim", "Akülü eklemli", "Egzozsuz tahrik zorunlu"],
                    ],
                },
            },
            {
                baslik: "Vinç-platform trafik planı",
                paragraflar: [
                    "Montaj sahasında vinç ve platformun aynı alanda çalışması, önceden belirlenmiş bir sıra ve bariyerleme gerektirir. Genel kural, vincin elemanı kaldırıp geçici sabitlediği anda platformun alana girmemesidir; eleman sabitlendikten ve vinç halatı serbest bırakıldıktan sonra platform kaynak/cıvata işi için alana yönlendirilir.",
                    "Bu sıralama, şantiye şefliğiyle birlikte günlük montaj programına göre güncellenir; program değiştikçe platformun park ve erişim planı da yeniden gözden geçirilir.",
                ],
            },
            {
                baslik: "Montaj sırası değiştikçe makine ihtiyacının güncellenmesi",
                paragraflar: [
                    "Çelik montaj projeleri genellikle çok günlü sürer ve montaj sırası ilerledikçe hangi noktanın hangi makineyle erişileceği değişir. Bu nedenle uzun süreli montaj projelerinde tek bir makine kararı yerine, montaj takvimine göre güncellenen bir makine planı önerilir — erken aşamada makaslı, ileri aşamada eklemliye geçiş gibi.",
                ],
            },
        ],
        sss: [
            {
                soru: "Montajın her aşamasında eklemli platform mu gerekir?",
                cevap:
                    "Hayır. Erken aşamada (kolon-kiriş montajı) saha genellikle açık ve düz çıkışlıdır, bu durumda makaslı veya teleskopik platform daha ekonomiktir. Eklemli platform, montaj ilerleyip kurulu elemanlar kendi engelini oluşturduğunda (aşık, çapraz bağlantı, cephe kaplama) gerekli hâle gelir.",
            },
            {
                soru: "Vinç çalışırken platform aynı alanda olabilir mi?",
                cevap:
                    "Vinç bir elemanı kaldırıp yerleştirdiği anda platformun o alana girmesi güvenlik riski oluşturur; bu nedenle platform, eleman geçici sabitlendikten ve vinç halatı serbest bırakıldıktan sonra alana yönlendirilir. Bu sıralama şantiye şefliğiyle koordine edilir.",
            },
            {
                soru: "Dar bir şantiye parselinde eklemli platform çalışabilir mi?",
                cevap:
                    "Genellikle evet, kompakt sınıf bir model ve dikkatli bir park planıyla. Komşu binaya bitişik dar parsellerde bomun kuyruk taşması (dönüş sırasında şase arkasının savrulması) özellikle dikkat edilmesi gereken bir risktir; park pozisyonu bu payı hesaba katarak seçilir.",
            },
            {
                soru: "Sanayi holü içinde çelik montaj yaparken dizel makine kullanabilir miyiz?",
                cevap:
                    "Havalandırma yeterli olmadığı sürece hayır — kapalı hacimde dizel egzoz emisyonu sağlık riski oluşturur, bu nedenle iç mekân çelik montajında akülü tahrikli model kullanılır. Havalandırması iyi, yarı açık bir hangar ise saha bazında ayrıca değerlendirilir.",
            },
            {
                soru: "Uzun süren bir montaj projesinde tek bir makine yeterli mi?",
                cevap:
                    "Çoğu zaman hayır — montaj sırası ilerledikçe erişim geometrisi değişir, erken aşamada yeterli olan makaslı platform ileri aşamada eklemli platforma dönüşme ihtiyacı doğurabilir. Uzun projelerde montaj takvimine göre güncellenen bir makine planı öneririz.",
            },
            {
                soru: "Platform operatörünün kaynak/montaj ekibiyle nasıl koordine olması gerekir?",
                cevap:
                    "Platform operatörü, sepetteki montaj personeliyle sürekli iletişim hâlinde çalışır; hangi noktaya, hangi açıyla yaklaşılacağı montaj ekibiyle birlikte kararlaştırılır. Vinç operatörüyle de eş zamanlı bir iletişim protokolü kurulur, özellikle eleman kaldırma anlarında platformun konumu netleştirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çelik konstrüksiyon montaj sırası, vinç-platform koordinasyonu ve kapalı hacim egzoz kuralları genel şantiye iş güvenliği bilgisidir; tesis adı, marka ve rakam uydurulmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarım ve Silo Sahalarında Eklemli Platform: Zemin ve Erişim Geometrisi",
        giris:
            "Tarım ve silo sahaları, eklemli platform seçiminin iki kritik değişkeninin (zemin kapasitesi ve erişim geometrisi) aynı anda zorlayıcı olduğu bir saha tipidir. Zemin tarafında toprak, çim, sıkıştırılmamış dolgu veya hasat sonrası yumuşamış tarla yüzeyi, standart akülü modellerin tırmanma-denge sınırını zorlar; bu nedenle bu sahalarda dizel 4x4 arazi tipi tahrik genellikle zorunlu hâle gelir. Erişim geometrisi tarafında ise silo, kurutma tesisi veya ahır gibi yapıların boru hattı, konveyör, çatı kirişi veya destek ayağı gibi elemanları düz bir çıkışı engelleyebilir — bu durumda eklemli platformun bom kırılımı devreye girer. Ama her tarım/silo işi eklemli gerektirmez: bir siloya dışarıdan, engelsiz bir açıdan yaklaşılabiliyorsa dizel teleskopik veya makaslı sınıf da yeterli olabilir. Bu sayfa, tarım ve silo sahalarında hangi durumda eklemli platformun gerekli olduğunu, zemin değerlendirmesinin nasıl yapıldığını ve mevsimsel zemin değişiminin karar sürecine nasıl dahil edildiğini anlatır.",
        maddeler: [
            {
                baslik: "Zemin tipi: toprak, çim, dolgu, hasat sonrası tarla",
                metin:
                    "Kırsal sahalarda zemin, kentsel beton zeminden çok farklı davranır — kuru toprak sağlam görünse de yağış sonrası hızla yumuşayabilir, hasat sonrası tarla yüzeyi düzensiz ve gevşek olabilir. Bu değişkenlik, akülü modellerin sert-düz zemin varsayımını geçersiz kılar; dizel 4x4 arazi lastikli tahrik, bu tür değişken zeminde güvenli çalışmanın ön koşuludur.",
            },
            {
                baslik: "Silo ve kurutma tesisi elemanları: erişimi engelleyen unsurlar",
                metin:
                    "Silo gövdesinin destek ayakları, konveyör hattı, boru bağlantıları ve çatı kirişleri, düz bir teleskopik çıkışın hedefe ulaşmasını engelleyebilir. Bu tür elemanların arasından veya üzerinden dolaşarak bakım/montaj noktasına ulaşmak gerektiğinde eklemli platformun bom kırılımı gereklidir; elemanların konumu ve ölçüsü keşifte netleştirilir.",
            },
            {
                baslik: "Ne zaman eklemli gerekmez: açık dış cephe erişimi",
                metin:
                    "Silonun dışarıdan, engelsiz bir açıdan erişilebilen düz bir cephesi varsa (örneğin silo gövdesinin açık bir yüzü) dizel teleskopik veya makaslı platform yeterli ve daha ekonomik olabilir. Eklemli platform, yalnızca gerçek bir engel aşımı gerektiğinde önerilir.",
            },
            {
                baslik: "Mevsimsel zemin değişimi ve önceden planlama",
                metin:
                    "Aynı tarım sahası, yaz kuru toprağında sağlam, kış veya yağış sonrası çamurlu olabilir; bu nedenle iş tarihine yakın bir zemin durumu teyidi önemlidir. Hasat dönemi öncesi/sonrası farklı zemin koşulları, iş planına dahil edilir ve gerekirse dizel 4x4 modelin arazi lastiği yeterli görülmezse geçici bir yol takviyesi (kalas, plaka) değerlendirilir.",
            },
            {
                baslik: "Ahır ve tarımsal yapı içi işlerde egzoz kısıtı",
                metin:
                    "Ahır veya kapalı tarımsal depolama yapılarının içinde (hayvan barınağı, kapalı depo) dizel makinenin egzozu hem hayvan sağlığı hem çalışan güvenliği açısından risklidir; bu tür kapalı hacimlerde akülü model tercih edilir, ama akülü modelin bu sahalarda genellikle düzensiz iç zemine (gübre birikintisi, düzensiz döşeme) karşı dikkatli konumlandırılması gerekir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tarım/silo sahası senaryosu ve önerilen sınıf",
                paragraflar: [
                    "Farklı tarım ve silo sahası senaryolarında zemin ve erişim durumuna göre önerdiğimiz makine sınıfı aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Zemin durumu", "Erişim durumu", "Önerilen sınıf"],
                    satirlar: [
                        ["Silo dış cephe, açık tarla", "Kuru toprak/çim", "Engelsiz düz cephe", "Dizel teleskopik veya makaslı"],
                        ["Silo destek ayakları arası bakım", "Kuru-orta toprak", "Ayak/konveyör engeli", "Dizel 4x4 eklemli"],
                        ["Hasat sonrası tarla, düzensiz zemin", "Yumuşak, düzensiz", "Değişken", "Dizel 4x4 arazi tipi (eklemli veya teleskopik)"],
                        ["Kapalı ahır/depo içi", "Düzensiz iç zemin", "Kısmi engel", "Akülü eklemli, dikkatli konumlandırma"],
                        ["Kurutma tesisi boru hattı bakımı", "Beton/sıkıştırılmış zemin", "Boru hattı engeli", "Akülü veya dizel eklemli (zemine göre)"],
                    ],
                },
            },
            {
                baslik: "Zemin teyidi ve önceden fotoğraf paylaşımı",
                paragraflar: [
                    "Kırsal sahalarda zemin durumu iş tarihine yakın değişebileceği için, keşif fotoğrafının iş tarihine mümkün olduğunca yakın çekilmesi önerilir. Yağış sonrası veya don çözülme dönemlerinde zemin görünürden daha yumuşak olabilir; bu tür dönemlerde ek bir teyit istenir.",
                    "Geçmişte benzer ağırlıkta bir aracın (traktör, kamyon) o sahaya girip girmediği bilgisi de zemin taşıma kapasitesi hakkında faydalı bir gösterge olarak değerlendirilir.",
                ],
            },
            {
                baslik: "Geçici yol takviyesi ne zaman gerekir",
                paragraflar: [
                    "Zeminin dizel 4x4 modelin arazi lastiğiyle bile güvenli taşınamayacağı kadar yumuşak olduğu durumlarda (bataklık benzeri, çok yağışlı dönem sonrası tarla), geçici bir yol takviyesi (kalas, çelik plaka) önerilir. Bu, ek bir maliyet kalemidir ve önceden keşifte tespit edilip müşteriyle paylaşılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tarım sahasında akülü model kullanılabilir mi?",
                cevap:
                    "Zemin sert-düz ve kuru ise (örneğin beton bir kurutma tesisi zemini) evet, ama açık toprak veya çim zeminde akülü modelin tırmanma-denge sınırı yetersiz kalabilir. Kapalı ahır/depo içinde egzoz kısıtı nedeniyle akülü zorunludur, bu durumda iç zeminin düzensizliğine karşı dikkatli konumlandırma yapılır.",
            },
            {
                soru: "Hasat sonrası tarla zemininde çalışmak güvenli mi?",
                cevap:
                    "Zeminin güncel durumuna bağlı — hasat sonrası tarla genellikle düzensiz ve bazen yumuşaktır, dizel 4x4 arazi tipi tahrik gerekir. İş tarihine yakın bir zemin fotoğrafı veya kısa açıklama paylaşırsanız, o dönem koşuluna göre doğru tahrik tipini öneririz.",
            },
            {
                soru: "Silo bakımı için mutlaka eklemli platform mu gerekir?",
                cevap:
                    "Hayır. Silonun dışarıdan engelsiz erişilen bir cephesi varsa dizel teleskopik veya makaslı platform yeterli ve daha ekonomiktir. Eklemli, ancak destek ayağı, konveyör veya boru hattı gibi bir engelin arkasına ulaşmak gerektiğinde önerilir.",
            },
            {
                soru: "Zemin taşıma kapasitesini biz nasıl belirleyeceğiz?",
                cevap:
                    "Kesin bir ölçüm genellikle yoktur; zeminin görünür durumu, geçmişte benzer ağırlıkta araç geçip geçmediği ve varsa yağış geçmişi birlikte değerlendirilir. Şüpheli durumlarda temkinli yaklaşıp dizel 4x4 model veya geçici yol takviyesi öneririz.",
            },
            {
                soru: "Ahırda veya kapalı depoda dizel makine hiç kullanılamaz mı?",
                cevap:
                    "Havalandırma yeterliyse ve süre kısaysa bazı istisnai durumlarda değerlendirilebilir, ama genel kural egzozsuz tahriktir — hayvan sağlığı ve çalışan güvenliği açısından akülü model tercih edilir. Havalandırma durumunu paylaşırsanız saha bazında değerlendiririz.",
            },
            {
                soru: "Kış aylarında donmuş zeminde çalışmak sorun yaratır mı?",
                cevap:
                    "Donmuş, sert zemin genellikle iyi taşıma kapasitesi sunar, ama çözülme dönemi (gün içi ısınma) zemini beklenmedik biçimde yumuşatabilir. Bu dönemlerde iş saatinin zeminin en sert olduğu saatlere (sabah erken) planlanması önerilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kırsal zemin değişkenliği, dizel 4x4 arazi tipi tahrik gerekliliği ve kapalı tarımsal yapılarda egzoz kısıtı genel mühendislik ve saha güvenliği bilgisidir; tesis adı, marka ve rakam uydurulmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Enerji Hattı ve Aydınlatma Bakımında Eklemli Platform: Güvenli Mesafe Odaklı Seçim",
        giris:
            "Enerji ve aydınlatma bakım işlerinde eklemli platform seçimi, çoğu diğer sektörden farklı bir öncelik sırasına sahiptir: burada belirleyici olan yalnızca yükseklik veya engel değil, iletken bir hatta güvenli mesafeyi koruyarak erişim sağlamaktır. Bir aydınlatma direği, trafo binası çevresi veya enerji nakil hattı yakınındaki bir bakım noktasına ulaşırken, düz bir teleskopik çıkış bazen hattı gerektiğinden yakın bir açıdan geçer; eklemli platformun bom kırılımı, aynı hedefe farklı bir açıdan, hatla arasında güvenli mesafeyi koruyarak yaklaşmayı mümkün kılar. Bu, eklemli platformu enerji sahalarında sık tercih edilen bir sınıf yapar, ama otomatik bir kural değildir — hat enerjisiz kılınabiliyorsa veya hedefe hattan tamamen uzak bir açıdan ulaşılabiliyorsa, daha ekonomik bir teleskopik veya makaslı sınıf da yeterli olabilir. Bu sayfa, enerji ve aydınlatma bakım işlerinde makine seçiminin güvenli mesafe etrafında nasıl kurulduğunu, hangi durumlarda eklemli platformun gerekli hâle geldiğini ve saha koordinasyonunun nasıl yapıldığını anlatır.",
        maddeler: [
            {
                baslik: "Güvenli mesafe: karar sürecinin merkezi",
                metin:
                    "Bir enerji hattı yakınında çalışırken, hattın gerilim sınıfına göre tanımlı bir güvenli mesafe korunmalıdır; bu mesafe, platformun herhangi bir noktasının (bom, sepet, operatör) hatta bu değerin altına yaklaşmaması anlamına gelir. Makine seçimi ve erişim açısı, bu mesafeyi her an koruyacak şekilde planlanır — bu, enerji sahalarında diğer sektörlerden farklı olarak ilk ve en öncelikli kriterdir.",
            },
            {
                baslik: "Hat enerjisiz kılınabiliyorsa süreç sadeleşir",
                metin:
                    "Bakım öncesi hat, ilgili işletmeciyle koordinasyonla enerjisiz kılınabiliyorsa, güvenli mesafe kısıtı ortadan kalkar ve makine seçimi standart yükseklik-erişim mantığıyla (hedefin altı dolu mu boş mu) yapılabilir. Bu durumda eklemli platform yalnızca fiziksel bir engel varsa gerekir, hat mesafesi artık belirleyici değildir.",
            },
            {
                baslik: "Hat enerjili kalıyorsa eklemli platform genellikle gerekli",
                metin:
                    "Hat enerjisiz kılınamıyorsa (sürekli işletmede kalan bir enerji nakil hattı veya trafo çevresi gibi), hedefe düz bir açıyla değil, hattan güvenli mesafeyi koruyan bir açıyla yaklaşmak gerekir; bu, çoğu zaman bomun kırılma kabiliyetini gerektirir. Erişim açısı, zarf diyagramı üzerinde hem hedefe ulaşacak hem hatla arasındaki mesafeyi koruyacak şekilde hesaplanır.",
            },
            {
                baslik: "Aydınlatma direği ve tabela bakımında tipik erişim",
                metin:
                    "Yol veya saha aydınlatma direği bakımı genellikle düz bir dikey erişimle çözülür ve bu işlerde çoğu zaman teleskopik veya makaslı platform yeterlidir; ama direk, bir orta refüj, trafik akışı veya başka bir engelin (ağaç, tabela) arkasındaysa, eklemli platformun bom kırılımı devreye girer. Karar, direğin konumuna ve çevresindeki engellere göre değişir.",
            },
            {
                baslik: "Operatör deneyimi: enerji sahalarında ek dikkat",
                metin:
                    "Enerji hattı yakınında çalışan operatörün, bomun çok eksenli hareketi sırasında güvenli mesafeyi her an koruyabilmesi, standart bir işten daha fazla dikkat ve deneyim gerektirir. Bu tür işlerde operatörlü kiralama (operatörsüz değil) genellikle önerilir; operatör, hat mesafesini sürekli izleyerek çalışır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Enerji/aydınlatma senaryosu ve önerilen yaklaşım",
                paragraflar: [
                    "Farklı enerji ve aydınlatma bakım senaryolarında güvenli mesafe durumuna göre önerdiğimiz yaklaşım aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Senaryo", "Hat durumu", "Önerilen sınıf", "Neden"],
                    satirlar: [
                        ["Yol aydınlatma direği, engelsiz erişim", "Enerjili, direk hattan uzak", "Teleskopik/makaslı", "Düz erişim mesafeyi zaten koruyor"],
                        ["Trafo çevresi bakım noktası", "Enerjili, dar erişim", "Eklemli platform", "Açılı yaklaşım mesafeyi korur"],
                        ["Enerji nakil hattı altı saha çalışması", "Enerjili, sürekli işletim", "Eklemli platform (mesafe hesaplı)", "Hat kaçınılmaz, açı hesabı şart"],
                        ["Planlı kesinti sonrası bakım", "Enerjisiz", "Standart yükseklik-erişim mantığı", "Mesafe kısıtı ortadan kalkar"],
                        ["Tabela/reklam panosu aydınlatması", "Enerjili, alçak hat", "Duruma göre eklemli veya teleskopik", "Panonun konumuna bağlı"],
                    ],
                },
            },
            {
                baslik: "İşletmeci koordinasyonu ve planlı kesinti",
                paragraflar: [
                    "Mümkün olan işlerde, ilgili enerji işletmecisiyle önceden koordinasyon sağlanarak hattın geçici olarak enerjisiz kılınması talep edilir; bu, hem işi basitleştirir hem güvenlik riskini büyük ölçüde azaltır. Planlı kesinti mümkün değilse, iş enerjili hat varsayımıyla ve tam güvenli mesafe hesabıyla planlanır.",
                    "Kesinti planlaması, işletmecinin kendi prosedürüne bağlı olduğu için süre alabilir; bu süre, proje takvimine önceden dahil edilmelidir.",
                ],
            },
            {
                baslik: "Hava koşulu ve enerji sahası çalışması",
                paragraflar: [
                    "Enerji hattı yakınında rüzgârlı veya yağışlı havada çalışmak, güvenli mesafenin korunmasını daha da zorlaştırır; bu tür işlerde hava koşulu bakım takviminin bir parçası olarak değerlendirilir ve gerekirse iş ertelenir. Açık saha aydınlatma direği bakımlarında bu değerlendirme özellikle önemlidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Enerji hattı yakınında hangi durumlarda eklemli platform gerekir?",
                cevap:
                    "Hat enerjisiz kılınamıyorsa ve hedefe düz bir açıyla yaklaşmak hattan güvenli mesafeyi ihlal ediyorsa, eklemli platformun bom kırılımı hattan uzak bir açıdan aynı hedefe ulaşmayı sağlar. Hat enerjisiz kılınabiliyorsa veya hedef zaten hattan uzaksa, daha ekonomik bir teleskopik veya makaslı sınıf yeterli olabilir.",
            },
            {
                soru: "Güvenli mesafeyi kim belirliyor?",
                cevap:
                    "Güvenli mesafe, hattın gerilim sınıfına göre tanımlanmış standart değerlere dayanır; bu değer, ilgili enerji işletmecisiyle koordinasyonla teyit edilir. Erişim geometrisi, bu mesafeyi her an koruyacak şekilde planlanır.",
            },
            {
                soru: "Hat enerjisiz kılınmadan çalışmak mümkün mü?",
                cevap:
                    "Güvenli mesafe tavizsiz korunabiliyorsa mümkündür, ama bu, erişim açısını sınırlar ve genellikle eklemli platform gerektirir. Mesafenin sağlanamadığı bir işi almayız; risk almaya değmez, bu durumda planlı kesinti veya farklı bir yaklaşım açısı aranır.",
            },
            {
                soru: "Aydınlatma direği bakımı için özel bir makine mi gerekir?",
                cevap:
                    "Genellikle hayır, çoğu direk bakımı düz bir dikey erişimle çözülür ve teleskopik veya makaslı platform yeterlidir. Direk bir engelin (refüj, ağaç, tabela) arkasındaysa eklemli platform değerlendirilir; direğin konumu ve çevresi keşifte netleştirilir.",
            },
            {
                soru: "Bu tür işlerde operatörsüz kiralama mümkün mü?",
                cevap:
                    "Genel olarak önermiyoruz — enerji hattı yakınında güvenli mesafeyi sürekli izleyerek çalışmak deneyim gerektirir, bu nedenle operatörlü kiralama tercih edilir. Operatörsüz kiralama, ancak hat tamamen enerjisiz kılınmış ve engel bulunmayan basit işlerde değerlendirilebilir.",
            },
            {
                soru: "Rüzgârlı havada enerji hattı yakınında çalışılabilir mi?",
                cevap:
                    "Rüzgâr, bomun konumunu ve dolayısıyla güvenli mesafeyi etkileyebileceği için, belirli bir rüzgâr hızının üzerinde bu tür işler ertelenir. Hava koşulu, bakım takviminin bir parçası olarak değerlendirilir ve gerekirse iş programı esnetilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Enerji hattı güvenli mesafe kuralları ve bom-hat mesafe ilişkisi genel elektrik iş güvenliği ve mühendislik bilgisidir; tesis adı, marka ve rakam uydurulmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Operatörlü / Operatörsüz Eklemli Platform Kiralama: Karar Neye Bağlı?",
        giris:
            "Eklemli platformun operatörlü mü operatörsüz mü kiralanacağı kararı, makaslı platforma göre daha dar bir alanda verilir çünkü eklemli sınıfın çok eksenli bom hareketi, makaslının basit dikey hareketine göre daha fazla deneyim ve dikkat gerektirir. Operatörsüz kiralama, çalışanın kendi eğitim/sertifikasyonuna sahip olduğu, işin görece basit (düz erişim, engelsiz saha, düşük risk) olduğu durumlarda değerlendirilir. Operatörlü kiralama ise dar alan manevrası, elektrik hattı yakınlığı, karmaşık zarf diyagramı hesabı gerektiren işler veya çalışanın eklemli sınıfta yeterli deneyime sahip olmadığı durumlarda önerilir — burada operatör, yalnızca makineyi süren değil, güvenli mesafe ve erişim açısını sürekli değerlendiren bir teknik karar vericidir. Bu domainin danışmanlık yaklaşımı, bu kararı işin risk profiline göre dürüstçe yönlendirmektir: düşük riskli bir işte gereksiz yere operatörlü kiralamayı dayatmayız, yüksek riskli bir işte ise operatörsüz seçeneği önermeyiz. Bu sayfa, hangi kriterlerin bu kararı belirlediğini anlatır.",
        maddeler: [
            {
                baslik: "Sertifikasyon: operatörsüz kiralamanın ön koşulu",
                metin:
                    "Operatörsüz kiralama, çalışanın ilgili ekipman sınıfı için geçerli bir eğitim/sertifikasyon belgesine sahip olmasını gerektirir; bu belge olmadan operatörsüz kiralama yapılmaz. Sertifikasyon, makinenin temel kullanımını kapsar ama eklemli sınıfın karmaşık bom hareketini güvenle yönetmek için ayrıca deneyim gerekir — belge tek başına yeterli güvence değildir.",
            },
            {
                baslik: "İş karmaşıklığı: düz erişim mi, çok eksenli manevra mı",
                metin:
                    "Hedefin altı boş, erişim düz ve engelsizse, deneyimli bir sertifikalı çalışan operatörsüz güvenle çalışabilir. Ama iş, bir engelin etrafından dolaşan, birden fazla eksende manevra gerektiren bir erişimse, operatörlü kiralama önerilir — bu tür işlerde deneyimsiz bir kullanıcının bom hareketini yanlış değerlendirmesi, hem makineye hem çevredeki yapıya zarar riski taşır.",
            },
            {
                baslik: "Risk faktörleri: elektrik hattı, dar alan, yüksek metraj",
                metin:
                    "Elektrik hattı yakınlığı, dar alan manevrası (kuyruk taşması riski) ve yüksek metrajlı işlerde zarf diyagramı hesabının hatasız yapılması gerekliliği, operatörlü kiralamayı güçlü biçimde öne çıkaran üç faktördür. Bu faktörlerden biri veya birden fazlası varsa, çalışan sertifikalı olsa bile operatörlü kiralamayı öneririz.",
            },
            {
                baslik: "Operatörlü kiralamada sorumluluk paylaşımı",
                metin:
                    "Operatörlü kiralamada, makinenin güvenli kullanımı ve erişim kararları operatörün sorumluluğundadır; sepetteki çalışan ise kendi işini (montaj, bakım, kaynak) yürütür. Bu net sorumluluk ayrımı, özellikle karmaşık veya riskli işlerde iki tarafın da kendi uzmanlık alanına odaklanmasını sağlar.",
            },
            {
                baslik: "Kısa süreli basit işlerde operatörsüz avantajı",
                metin:
                    "Tek noktalı, düz erişimli, kısa süreli bir işte (örneğin bir tavan lambası değişimi) operatörsüz kiralama hem daha ekonomik hem daha esnektir — çalışan kendi programına göre makineyi kullanabilir. Bu tür işlerde operatörlü kiralamayı zorunlu kılmak gereksiz maliyet yaratır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Karar kriterleri özeti",
                paragraflar: [
                    "Operatörlü/operatörsüz kararını etkileyen kriterler ve bu kriterlere göre önerimiz aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Kriter", "Durum", "Öneri"],
                    satirlar: [
                        ["Erişim geometrisi", "Düz, engelsiz", "Operatörsüz (sertifikalıysa)"],
                        ["Erişim geometrisi", "Çok eksenli, engelli", "Operatörlü"],
                        ["Elektrik hattı yakınlığı", "Var, enerjili", "Operatörlü"],
                        ["Alan durumu", "Dar, dönüş kısıtlı", "Operatörlü"],
                        ["İş süresi/karmaşıklığı", "Kısa, tek nokta, basit", "Operatörsüz (sertifikalıysa)"],
                    ],
                },
            },
            {
                baslik: "Sertifikasyon belgesi kontrolü",
                paragraflar: [
                    "Operatörsüz kiralama talep edildiğinde, çalışanın ilgili sınıf için geçerli eğitim belgesi teslimat öncesi kontrol edilir. Belge yoksa veya süresi geçmişse operatörsüz kiralama yapılmaz; bu, hem yasal hem güvenlik gereğidir.",
                    "Sertifikasyonu olan ama eklemli sınıfta sınırlı deneyimi olan çalışanlar için, teslimat sırasında kısa bir saha brifingi (makinenin özel kontrolleri, bom hareket sınırları) sunulur.",
                ],
            },
            {
                baslik: "Operatörlü kiralamanın maliyet-güvenlik dengesi",
                paragraflar: [
                    "Operatörlü kiralama, ek bir maliyet kalemi getirir ama riskli işlerde bu maliyet, olası bir kaza veya hasar riskine karşı makul bir yatırımdır. Karar verirken işin risk profilini dürüstçe değerlendirir, gereksiz yere operatörlü kiralama dayatmadan, gerçekten riskli işlerde de operatörsüz seçeneği önermeyiz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sertifikam varsa her eklemli işi operatörsüz yapabilir miyim?",
                cevap:
                    "Sertifikasyon ön koşuldur ama tek başına yeterli değildir — iş karmaşık bir erişim geometrisi, elektrik hattı yakınlığı veya dar alan manevrası içeriyorsa, sertifikalı olsanız bile operatörlü kiralamayı öneririz. Basit, düz erişimli işlerde sertifikasyon genellikle yeterlidir.",
            },
            {
                soru: "Operatörlü kiralamada operatör kararları biz mi veriyoruz?",
                cevap:
                    "Makinenin güvenli kullanımı ve erişim açısı operatörün sorumluluğundadır; sepetteki çalışan kendi işini (montaj, bakım) yönlendirir ama makineyi nasıl konumlandıracağına operatör karar verir. Bu net sorumluluk ayrımı, güvenliği artırır.",
            },
            {
                soru: "Kısa süreli bir iş için operatörlü kiralamak zorunlu mu?",
                cevap:
                    "Hayır, iş düşük riskliyse (düz erişim, engelsiz, kısa süreli) ve çalışan sertifikalıysa operatörsüz kiralama daha ekonomik ve esnek bir seçenektir. Operatörlü kiralamayı yalnızca risk faktörleri (hat, dar alan, karmaşık erişim) varsa öneriyoruz.",
            },
            {
                soru: "Sertifikasyon belgesi olmayan bir çalışan için ne yapabiliriz?",
                cevap:
                    "Bu durumda operatörlü kiralama zorunludur; makineyi bizim operatörümüz kullanır, sepetteki çalışan yalnızca kendi işini yürütür. Belge olmadan operatörsüz kiralama yapılmaz.",
            },
            {
                soru: "Operatörlü kiralama fiyatı ne kadar daha fazla?",
                cevap:
                    "Operatör hizmeti ek bir maliyet kalemidir; net fark, iş süresi ve sınıfa göre değişir. Riskli işlerde bu maliyeti, olası hasar veya kaza riskine karşı makul bir yatırım olarak değerlendirmenizi öneririz.",
            },
            {
                soru: "Operatörsüz kiralamada sorumluluk kime aittir?",
                cevap:
                    "Makinenin sertifikalı çalışan tarafından güvenli kullanımı, kiralayan tarafın sorumluluğundadır; biz makinenin teknik durumunu ve periyodik kontrolünün güncel olmasını garanti ederiz. Bu ayrım, kiralama sözleşmesinde netleştirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Operatörlü/operatörsüz kiralama kriterleri, sertifikasyon gerekliliği ve risk faktörleri genel iş güvenliği ve ekipman kiralama pratiğidir; tesis adı, marka ve rakam uydurulmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Çok Noktalı Rota Bakımında Eklemli Platform: Nokta Bazlı Sınıf Seçimi",
        giris:
            "Çok noktalı bakım rotaları — bir fabrika kompleksinin farklı bölümlerindeki aydınlatma bakımı, bir tesisin dağınık binalarındaki tesisat kontrolü veya bir güzergâh boyunca sıralı direk/tabela bakımı — eklemli platform seçiminde tek bir kararın değil, her nokta için ayrı bir değerlendirmenin gerektiği bir saha tipidir. Bir rotadaki noktalardan biri düz bir çıkışla erişilebilirken, bir sonraki nokta bir engelin arkasında olabilir; bu durumda tüm rota boyunca tek bir eklemli platform kullanmak bazen en pratik çözümdür (her noktada uygun), bazen de gereksizdir (çoğu nokta düz erişimli, tek nokta için eklemli taşımak verimsiz). Bu domainin yaklaşımı, rotayı tek bir makine kararına indirgemeden, önce her noktanın erişim profilini çıkarmak, ardından rotanın tamamını en az makine değişimiyle karşılayacak sınıfı belirlemektir. Bu sayfa, çok noktalı rota bakımında makine seçiminin nasıl planlandığını ve nokta sırasının iş süresine etkisini anlatır.",
        maddeler: [
            {
                baslik: "Her nokta için ayrı erişim profili çıkarma",
                metin:
                    "Rota planlamasının ilk adımı, her bakım noktasının erişim profilini (düz mü engelli mi, zemin tipi, tavan/açık hava) ayrı ayrı listelemektir. Bir noktanın engelli olması, tüm rotanın eklemli gerektirdiği anlamına gelmez; ama rotadaki en az bir nokta engelliyse ve rotanın tamamı tek makineyle yürütülecekse, o tek engelli nokta genellikle sınıf kararını belirler.",
            },
            {
                baslik: "Tek makineyle rota mı, nokta bazlı makine değişimi mi",
                metin:
                    "Rotadaki noktaların çoğu engelliyse (fabrika kompleksinde birden fazla saçak/boru hattı bakımı gibi), tek bir eklemli platformla tüm rotayı yürütmek en verimli seçimdir. Rotadaki tek bir nokta engelliyse ve diğerleri düzse, o tek nokta için ayrı bir örümcek veya kompakt eklemli çözüm, diğer noktalar için ise daha ekonomik makaslı/teleskopik kullanmak daha verimli olabilir — bu, nokta sayısı ve mesafeye göre değerlendirilir.",
            },
            {
                baslik: "Noktalar arası mesafe ve taşıma süresi",
                metin:
                    "Bir rotadaki noktalar arası mesafe, özellikle geniş bir fabrika kompleksi veya güzergâh boyunca sıralı direk bakımında ciddi bir zaman kalemidir. Makine kendi motoruyla noktalar arası hareket edebiliyorsa (dizel/akülü tahrik yeterliyse) bu süre azalır; noktalar birbirinden çok uzaksa ayrı bir nakliye gerekebilir, bu da rota süresine eklenir.",
            },
            {
                baslik: "Akülü modelde şarj süresinin rota programına etkisi",
                metin:
                    "Çok noktalı bir rotada akülü eklemli model kullanılıyorsa, şarj süresi rota programının bir parçası olarak planlanmalıdır — uzun bir rota, tek şarjla tamamlanamayabilir. Bu durumda ya sahada şarj imkânı sağlanır ya da dizel/hibrit bir model değerlendirilir.",
            },
            {
                baslik: "Rota sırasının erişim riskine göre optimize edilmesi",
                metin:
                    "Rotadaki noktalar, yalnızca mesafeye göre değil erişim riskine göre de sıralanabilir — örneğin elektrik hattı yakınındaki bir nokta, operatörün henüz yorulmadığı günün erken saatine planlanabilir. Bu tür bir sıralama, özellikle çok günlü rotalarda güvenlik ve verimlilik açısından fayda sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Rota tipi ve makine planlama yaklaşımı",
                paragraflar: [
                    "Farklı çok noktalı rota tiplerinde tipik makine planlama yaklaşımımız aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Rota tipi", "Nokta profili", "Yaklaşım"],
                    satirlar: [
                        ["Fabrika kompleksi çok bina aydınlatma bakımı", "Çoğu nokta engelli (saçak, boru hattı)", "Tek eklemli platform, rota boyunca"],
                        ["Güzergâh boyunca aydınlatma direği bakımı", "Çoğu nokta düz erişimli", "Teleskopik/makaslı, istisnai noktada eklemli takviye"],
                        ["Dağınık tesis tesisat kontrolü", "Karışık profil", "Nokta bazlı değerlendirme, gerekirse iki makine"],
                        ["Şantiye çok cepheli çelik montaj rotası", "Montaj aşamasına göre değişken", "Aşamaya göre güncellenen makine planı"],
                        ["Enerji hattı boyunca çok direkli bakım", "Tüm noktalar hat yakınlığı riski taşıyor", "Operatörlü eklemli, tüm rota boyunca"],
                    ],
                },
            },
            {
                baslik: "Nokta listesi ve keşif verisi toplama",
                paragraflar: [
                    "Çok noktalı bir rota planlanırken, her noktanın kısa bir erişim notu (düz/engelli, zemin, tahmini süre) ve mümkünse bir fotoğrafla listelenmesi, doğru makine planını hızlandırır. Bu liste, rotanın tamamı için tek mi yoksa nokta bazlı mı bir çözüm gerektiğini önceden ortaya koyar.",
                    "Nokta sayısı fazlaysa, benzer erişim profiline sahip noktalar gruplanarak (tüm düz noktalar bir grup, tüm engelli noktalar başka bir grup) rota daha verimli sıralanabilir.",
                ],
            },
            {
                baslik: "Çok günlü rotalarda makine kalış süresi",
                paragraflar: [
                    "Rota birden fazla günü kapsıyorsa, makinenin sahada mı kalacağı yoksa her gün mü teslim-iade edileceği önceden netleştirilmelidir; sahada kalış, taşıma süresini azaltır ama güvenlik/park sorumluluğu gerektirir. Bu karar, rota süresi ve tesisin güvenlik imkânlarına göre birlikte değerlendirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Rotadaki tek bir nokta engelliyse tüm rota için eklemli mi almalıyız?",
                cevap:
                    "Zorunlu değil — nokta sayısı ve mesafeye bağlı bir verimlilik hesabıdır. Rotanın çoğu düz erişimliyse, o tek engelli nokta için ayrı bir kompakt/örümcek çözüm, diğer noktalar için daha ekonomik makaslı kullanmak daha verimli olabilir. Nokta listesini paylaşırsanız bu hesabı birlikte yaparız.",
            },
            {
                soru: "Noktalar arası taşıma süresini kim hesaplıyor?",
                cevap:
                    "Nokta listesi ve aralarındaki mesafe paylaşıldığında, makinenin kendi motoruyla mı yoksa ayrı bir nakliyeyle mi hareket edeceğini değerlendirip toplam rota süresini biz hesaplarız. Bu hesap, rota teklifinin bir parçasıdır.",
            },
            {
                soru: "Akülü model uzun bir rotayı tek şarjla tamamlayabilir mi?",
                cevap:
                    "Rotanın uzunluğuna ve iş yoğunluğuna bağlı — kısa-orta rotalarda genellikle yeterlidir, uzun rotalarda sahada şarj imkânı gerekebilir veya dizel model değerlendirilir. Rota süresini ve sahada şarj imkânını paylaşırsanız doğru tahrik tipini öneririz.",
            },
            {
                soru: "Rota sırasını biz mi belirliyoruz, siz mi öneriyorsunuz?",
                cevap:
                    "Birlikte belirleriz — tesisin kendi operasyonel öncelikleri (hangi bina/nokta önce bakım ister) sizin belirlediğiniz, ama erişim riski ve makine verimliliği açısından sıralama önerisi bizim sunduğumuz bir süreçtir.",
            },
            {
                soru: "Çok günlü bir rotada makine her gün geri mi alınıyor?",
                cevap:
                    "Bu, sizin tercihinize ve tesisin güvenlik imkânlarına bağlı — makine sahada güvenli bir park alanında kalabiliyorsa, her gün taşıma süresinden tasarruf edilir. Güvenli park imkânı yoksa, günlük teslim-iade daha uygun olabilir.",
            },
            {
                soru: "Enerji hattı boyunca çok direkli bir bakım rotası için ne öneriyorsunuz?",
                cevap:
                    "Tüm noktalar hat yakınlığı riski taşıdığı için, rota boyunca operatörlü eklemli platform öneriyoruz — her noktada güvenli mesafenin sürekli izlenmesi gerekir. Rota sırası, mümkünse operatörün henüz yorulmadığı saatlere göre planlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çok noktalı bakım rotası planlaması, nokta bazlı erişim değerlendirmesi genel saha operasyon yönetimi bilgisidir; tesis adı, marka ve rakam uydurulmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Zor Zemin ve Arazide Eklemli Platform: Tahrik Tipi ve Erişim Açısı Birlikte Değerlendirilir",
        giris:
            "Zor zemin ve arazi koşullarında eklemli platform seçimi, iki değişkenin aynı anda çözülmesini gerektirir: zeminin taşıma kapasitesi ve erişim geometrisi. Standart akülü modeller, sert-düz zemin varsayımıyla tasarlandığı için engebeli, eğimli, stabilize veya yumuşak zeminde tırmanma-denge sınırına hızla ulaşır; bu tür sahalarda dizel 4x4 arazi tipi tahrik, arazi lastikleri ve şasi dengeleme sistemiyle güvenli çalışmanın ön koşuludur. Ama zor zemin, tek başına eklemli platform gerektirmez — zemin zorlu olsa bile hedefin altı boş ve düz bir çıkışla erişilebiliyorsa, dizel 4x4 teleskopik veya makaslı sınıf da yeterli olabilir. Eklemli platform, zor zemine ek olarak bir erişim engeli (kayalık çıkıntı, ağaç, eğimli yapı elemanı) da varsa gerekli hâle gelir. Bu sayfa, zor zemin ve arazi koşullarında tahrik tipi seçiminin nasıl yapıldığını, hangi durumda eklemli platformun ek bir gereklilik olduğunu ve park pozisyonu güvenliğinin nasıl planlandığını anlatır.",
        maddeler: [
            {
                baslik: "Zemin sertliği ve eğim: tahrik tipini belirleyen ilk kriter",
                metin:
                    "Zeminin sertliği (kuru sıkışmış toprak, ıslak yumuşak toprak, stabilize dolgu, kayalık) ve eğim derecesi, hangi tahrik tipinin güvenli çalışacağını belirler. Akülü modeller genellikle küçük eğim toleranslarına sahiptir ve yumuşak zeminde tırmanma gücü sınırlıdır; dizel 4x4 modeller daha yüksek eğim ve daha zorlu zemin koşullarında çalışacak şekilde tasarlanmıştır. Zemin ve eğim bilgisi olmadan doğru tahrik tipi önerilemez.",
            },
            {
                baslik: "Zor zemin tek başına eklemli gerektirmez",
                metin:
                    "Bir arazi işinin zorluğu zeminden kaynaklanıyorsa ama erişim düzse (hedefin altına park edilip düz bir çıkışla ulaşılabiliyorsa), dizel 4x4 teleskopik veya makaslı platform yeterlidir ve genellikle daha ekonomiktir. Eklemli platformu yalnızca zemin zorluğuna dayanarak önermeyiz; erişim geometrisi ayrıca değerlendirilir.",
            },
            {
                baslik: "Zemin zorluğu ile erişim engeli birlikte olduğunda eklemli gerekir",
                metin:
                    "Bir kayalık çıkıntının arkasına, eğimli bir yapı elemanının üzerinden veya doğal bir engelin (kaya bloğu, ağaç, eğimli set) çevresinden dolaşarak ulaşmak gerektiğinde, zor zemine ek olarak bomun kırılma kabiliyeti de gereklidir. Bu durumda dizel 4x4 eklemli platform, hem zemini hem erişim engelini birlikte çözen tek sınıftır.",
            },
            {
                baslik: "Park pozisyonu ve devrilme riski yönetimi",
                metin:
                    "Eğimli veya düzensiz zeminde park pozisyonu seçilirken, makinenin kendi sınırları (izin verilen maksimum eğim) içinde kalınması gerekir; bu sınır aşıldığında makine güvenlik kilidiyle çalışmayı durdurur. Park noktası seçilirken zemin fotoğrafı ve varsa eğim ölçüsü paylaşılması, doğru pozisyonun önceden belirlenmesini sağlar.",
            },
            {
                baslik: "Islak/yağış sonrası zemin değişimi",
                metin:
                    "Kuru görünen bir zemin, yağış sonrası hızla yumuşayabilir ve önceden değerlendirilen taşıma kapasitesi geçersiz hâle gelebilir. Bu nedenle iş tarihine yakın hava durumu ve zemin teyidi önemlidir; şüpheli durumlarda geçici bir yol takviyesi (kalas, plaka) veya iş tarihinin ertelenmesi değerlendirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin/erişim kombinasyonu ve önerilen sınıf",
                paragraflar: [
                    "Zor zemin ve arazi koşullarında zemin durumu ile erişim durumunun kombinasyonuna göre önerdiğimiz sınıf aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["Zemin durumu", "Erişim durumu", "Önerilen sınıf", "Neden"],
                    satirlar: [
                        ["Stabilize/engebeli, düz erişim", "Engelsiz", "Dizel 4x4 teleskopik/makaslı", "Zemin zorlu ama erişim basit"],
                        ["Stabilize/engebeli, engelli erişim", "Kayalık/doğal engel", "Dizel 4x4 eklemli", "Zemin ve erişim birlikte zorlu"],
                        ["Yumuşak/ıslak zemin, düz erişim", "Engelsiz", "Dizel 4x4 (takviye gerekebilir)", "Taşıma kapasitesi öncelikli"],
                        ["Eğimli şantiye yolu, engelli erişim", "Eğimli yapı elemanı", "Dizel 4x4 eklemli", "Eğim + engel birlikte çözülmeli"],
                        ["Kuru sert toprak, düz erişim", "Engelsiz", "Akülü veya dizel teleskopik/makaslı", "Standart tahrik yeterli olabilir"],
                    ],
                },
            },
            {
                baslik: "Zemin teyit süreci",
                paragraflar: [
                    "Zor zemin işlerinde, keşif fotoğrafının iş tarihine mümkün olduğunca yakın çekilmesi, zemin durumunun güncel değerlendirilmesini sağlar. Zeminin geçmişte benzer ağırlıkta bir araç taşıyıp taşımadığı bilgisi de faydalı bir referans noktasıdır.",
                    "Şüpheli zeminlerde, sahaya gitmeden önce kısa bir keşif turu önerilir; bu, yanlış tahrik tipiyle sahaya gidip geri dönme riskini önler.",
                ],
            },
            {
                baslik: "Eğim sınırı aşıldığında makine neden çalışmayı durdurur",
                paragraflar: [
                    "Modern platformlarda eğim algılama sistemi, makine izin verilen maksimum eğimi aştığında otomatik olarak çalışmayı durdurur; bu, devrilme riskine karşı bir güvenlik önlemidir. Bu kilitlenme bir arıza değil, tasarım gereği bir güvenlik tepkisidir — park pozisyonu, bu sınırın içinde kalacak şekilde önceden seçilmelidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Zor zeminde her zaman eklemli platform mu gerekir?",
                cevap:
                    "Hayır. Zemin zorlu olsa bile erişim düzse (hedefin altına park edilip düz çıkışla ulaşılabiliyorsa) dizel 4x4 teleskopik veya makaslı platform yeterlidir. Eklemli platform, zemin zorluğuna ek olarak bir erişim engeli de varsa gerekli hâle gelir.",
            },
            {
                soru: "Akülü model hiçbir zaman zor zeminde kullanılamaz mı?",
                cevap:
                    "Zeminin sertliğine ve eğimine bağlı — hafif engebeli, kuru ve sert bir zeminde bazı akülü modeller çalışabilir, ama genel kural budur: zemin belirsizse veya belirgin şekilde yumuşak/eğimliyse dizel 4x4 arazi tipi tahrik daha güvenlidir. Zemin fotoğrafı paylaşırsanız net değerlendirme yaparız.",
            },
            {
                soru: "Yağış sonrası zemin durumu değişirse ne olur?",
                cevap:
                    "İş tarihine yakın bir zemin teyidi önerilir; kuru görünen bir zemin yağış sonrası hızla yumuşayabilir. Şüpheli durumlarda iş tarihi öncesi bir keşif turu veya geçici yol takviyesi değerlendirilir, gerekirse iş programı esnetilir.",
            },
            {
                soru: "Makine eğim sınırına ulaştığında ne oluyor?",
                cevap:
                    "Eğim algılama sistemi devreye girer ve makine otomatik olarak çalışmayı durdurur; bu bir güvenlik önlemidir, arıza değildir. Bu durumla karşılaşmamak için park pozisyonu, makinenin izin verilen eğim sınırı içinde kalacak şekilde önceden seçilir.",
            },
            {
                soru: "Kayalık veya doğal engelli bir arazide çalışabilir miyiz?",
                cevap:
                    "Genellikle evet, dizel 4x4 eklemli platformla — bom kırılımı kayalık çıkıntı veya doğal engelin çevresinden dolaşarak hedefe ulaşmayı sağlar. Engelin ölçüsü ve zeminin sertliği keşifte netleştirilerek doğru model belirlenir.",
            },
            {
                soru: "Zemin taşıma kapasitesini kesin olarak nasıl öğrenebiliriz?",
                cevap:
                    "Çoğu sahada kesin bir mühendislik ölçümü bulunmaz; zeminin görünür durumu, geçmiş araç trafiği ve hava geçmişi birlikte değerlendirilerek temkinli bir karar verilir. Kritik projelerde ayrıca bir zemin etüdü önerilebilir, ama bu genellikle küçük-orta ölçekli işlerde gerekmez.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Arazi tipi tahrik, eğim algılama sistemi ve zemin taşıma kapasitesi değerlendirmesi genel mühendislik ve saha güvenliği bilgisidir; tesis adı, marka ve rakam uydurulmamıştır.",
    },

    // ═══════════════════════════════════════════════════════════════════
    // 2 YENİ ULUSAL/KAVRAMSAL KONU (2026-08-14) — "makaslı platform nedir"
    // ve "manlift terimi nedir" sözlük/tanım sayfaları. Bu sayfa ailesinin
    // ULUSAL formatına sadık kalınır (bölgesel değil). Kardeş dalgadaki 7
    // domain aynı 2 konuyu bölgesel/vaka temelli işler; bu ikisi ise
    // doğrudan tanım/terminoloji sorusuna cevap veren ayrı bir açıdan
    // yazılmıştır — cümle ve tablo düzeyinde tekrar yoktur.
    // ═══════════════════════════════════════════════════════════════════

    "hizmet:makasli-platform-kiralama": {
        h1: "Makaslı Platform Nedir? Eklemliden Farkı ve Doğru Tercih Kriterleri",
        giris:
            "Makaslı platform, adını çalışma prensibinden alan ve X şeklinde birbirine bağlı metal kollardan oluşan bir mekanizmayla sepeti dikey doğrultuda yukarı taşıyan yüksekte çalışma ekipmanıdır. Bu makas mekanizması açılıp kapanırken sepet, yalnızca tek bir eksende — yukarı ve aşağı — hareket eder; ne öne ne yana ne de bir engelin üzerinden dolanarak ilerleyebilir. Bu sadelik, aslında makaslı sınıfın en büyük gücüdür: mekanizma az sayıda hareketli eklem içerdiği için hem daha geniş bir sepet tabanı taşıyabilir hem de aynı yükseklik sınıfındaki eklemli veya teleskopik modellere göre genellikle daha yüksek taşıma kapasitesi sunar. Bu sayfa, makaslı platformun teknik olarak ne olduğunu, eklemli platformdan (bomlu/mafsallı sınıf) somut olarak nerede ayrıştığını, hangi iş tiplerinde doğru tercih olduğunu ve Türkiye genelinde bu sınıfı değerlendirirken hangi ölçütlerin öne çıktığını ulusal ölçekte, kavramsal bir çerçevede ele alır. Amaç, 'bana yükseklik ekipmanı lazım' diyen bir saha yöneticisinin, iki temel sınıf arasında hangisinin kendi işine uyduğunu teknik jargona boğulmadan anlayabilmesidir.",
        maddeler: [
            {
                baslik: "Makas mekanizması teknik olarak nasıl çalışır",
                metin:
                    "Makaslı platformun taşıyıcı gövdesi, birbirine çapraz pimlerle bağlanmış çelik kollardan oluşur; hidrolik veya elektrikli bir güç ünitesi bu kolları açtıkça sepet dikey olarak yükselir, kollar kapandıkça sepet iner. Bu yapı, yükü sepetin tüm tabanına eşit biçimde dağıtan simetrik bir kuvvet aktarımı sağlar — bu da makaslı sınıfın neden aynı yükseklikteki bomlu modellere göre daha yüksek kapasiteye sahip olabildiğini açıklar. Mekanizmanın tek eksende çalışması, tasarımı basitleştirir ve bakım maliyetini de görece düşük tutar.",
            },
            {
                baslik: "Eklemli platformdan somut farkı",
                metin:
                    "Eklemli (bomlu/mafsallı) platform, bomunu birden fazla noktadan kırarak hem dikey hem yatay hem de bir engelin üzerinden erişim sağlayabilir; makaslı platform ise bu esnekliğe sahip değildir, yalnızca sepetin doğrudan altındaki noktaya dikey bir çıkışla ulaşabilir. Bu fark, seçim kararını da belirler: hedefin tam altına park edilebiliyorsa ve aradaki mesafe düz bir dikey çıkışla aşılabiliyorsa makaslı platform hem daha ekonomik hem de daha yüksek kapasiteli bir çözümdür; hedefin önünde bir engel varsa veya park noktası hedefin tam altında değilse eklemli sınıf gerekir.",
            },
            {
                baslik: "Sepet tabanı ve kapasite avantajı",
                metin:
                    "Makaslı platformların sepet tabanı, eklemli modellere göre belirgin ölçüde daha geniştir; bu da aynı anda birden fazla kişinin veya hacimli malzemenin (boru, panel, ekipman kutusu) sepette taşınabilmesini sağlar. Kapasite avantajı özellikle ekip hâlinde çalışılan, malzeme sepette taşınarak yukarı çıkarılan işlerde belirleyici olur; tek kişilik kısa süreli müdahalelerde bu fark daha az önemlidir.",
            },
            {
                baslik: "İç mekân ve dış mekân makaslı modeller",
                metin:
                    "Akülü/elektrikli makaslı modeller sıfır egzoz emisyonu ürettiği için kapalı alanlarda, atölye içinde veya mağaza/AVM gibi halka açık iç mekânlarda tercih edilir; bazı modellerin tekerlek izi bırakmayan lastik seçenekleri de vardır. Dizel veya hibrit dış mekân modelleri ise daha yüksek zemin toleransına, daha büyük tekerlek sistemine ve genellikle daha yüksek erişim sınıflarına sahiptir; açık şantiye, dış cephe veya düzensiz zeminli sahalarda kullanılır. Doğru model, çalışma ortamının kapalı mı açık mı olduğuna ve zemin türüne göre belirlenir.",
            },
            {
                baslik: "Makaslı platform hangi işlerde doğru tercih değildir",
                metin:
                    "Makaslı platform, hedefin önünde sabit bir engel bulunduğunda (çıkıntı, boru hattı, ağaç dalı, bir yapı elemanının altı) veya makinenin park edebileceği alan hedefin tam altında değil birkaç metre uzağındaysa fiziksel olarak yetersiz kalır — bu senaryolarda dikey bir çıkış hedefe ulaştırmaz. Böyle durumlarda eklemli veya teleskopik bom sınıfı değerlendirilmelidir; makaslı platformu zorlayarak kullanmaya çalışmak hem verimsizdir hem de güvenlik riski oluşturur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Makaslı platform ile eklemli platformun karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, iki sınıfın temel farklarını özetler; doğru seçim sahanın erişim geometrisine ve taşınacak yük/kişi sayısına göre yapılmalıdır.",
                ],
                tablo: {
                    basliklar: ["Özellik", "Makaslı platform", "Eklemli platform"],
                    satirlar: [
                        ["Hareket yönü", "Yalnızca dikey", "Dikey + yatay + engel aşma"],
                        ["Engelin üzerinden/arkasından erişim", "Mümkün değil", "Mümkün (bom kırılarak)"],
                        ["Sepet taban alanı", "Daha geniş", "Daha dar"],
                        ["Taşıma kapasitesi", "Genellikle daha yüksek", "Genellikle daha düşük"],
                        ["Maliyet (aynı yükseklik sınıfında)", "Genellikle daha ekonomik", "Genellikle daha yüksek"],
                        ["Tipik kullanım", "Düz çıkışlı, geniş alan işleri", "Cephe, tesisat, düzensiz erişim"],
                    ],
                },
            },
            {
                baslik: "Hangi sektörlerde makaslı platform yaygın kullanılır",
                paragraflar: [
                    "Makaslı platform, hedefin doğrudan üzerinde ve düz bir çıkışla erişilebilir olduğu hemen her sektörde tercih edilir. Depo ve lojistik tesislerinde raf sistemi montajı ve bakımı, üretim tesislerinde tavan aydınlatma ve havalandırma kanalı işleri, ticari yapılarda tavan/tesisat bakımı, etkinlik ve fuar alanlarında dekor-tesisat kurulumu bu sınıfın tipik kullanım alanlarıdır. Ortak nokta, sepetin hedefin tam altına konumlanabilmesi ve birden fazla kişi ya da malzemenin birlikte taşınması gerekliliğidir.",
                    "Kapalı alan işlerinde akülü modeller, açık sahada ise dizel/hibrit modeller öne çıkar; zemin türü (beton, epoksi, açık saha toprağı) ve tavan/çalışma yüksekliği, model seçiminde belirleyici iki temel veridir.",
                ],
            },
            {
                baslik: "Makaslı platform kiralarken doğru soru sırası",
                paragraflar: [
                    "Doğru makineyi seçmek isteyen bir saha yöneticisi, kiralama talebini şu sırayla netleştirmelidir: önce hedefin yüksekliği, sonra hedefin tam altına park edilip edilemeyeceği, ardından sepette aynı anda kaç kişi ve ne kadar malzeme taşınacağı, son olarak zeminin türü (kapalı beton mu açık saha mı). Bu dört bilgi netleştiğinde makaslı sınıfın yeterli olup olmadığı hızlıca belirlenir; hedefin altına park edilemiyorsa doğrudan eklemli sınıfa yönlendirilir.",
                    "Türkiye genelinde hizmet veren bir kiralama sürecinde bu bilgilerin önceden paylaşılması, doğru sınıfın ilk seferde belirlenmesini ve teslimat gününde makine değişikliği gibi gecikmelerin önüne geçilmesini sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Makaslı platform ile eklemli platform arasında hangisi daha ucuzdur?",
                cevap:
                    "Aynı çalışma yüksekliği sınıfında genellikle makaslı platform daha ekonomiktir; mekanizması daha az karmaşık olduğu için hem üretim hem işletme maliyeti daha düşüktür. Ancak bu fark yalnızca erişim geometrisi düz bir dikey çıkışa uygunsa geçerlidir — eklemli platform gerektiren bir işte makaslı denemek fiyat avantajı sağlamaz, çünkü makine hedefe ulaşamaz.",
            },
            {
                soru: "Makaslı platform kaç kişi taşıyabilir?",
                cevap:
                    "Bu, modelin kapasite sınıfına göre değişir; geniş sepet tabanı sayesinde makaslı modeller genellikle birden fazla kişinin ve malzemenin birlikte taşınmasına izin verir. Kesin kapasite, kiralanacak modelin teknik veri sayfasında belirtilir ve sepette taşınacak toplam ağırlık (kişi + malzeme + ekipman) bu sınırla karşılaştırılarak planlanmalıdır.",
            },
            {
                soru: "Makaslı platform dış mekânda kullanılabilir mi?",
                cevap:
                    "Evet, dizel veya hibrit dış mekân modelleri açık sahada, hafif eğimli veya düzensiz zeminlerde kullanılmak üzere tasarlanmıştır. Akülü iç mekân modelleri ise düz, sert zeminler için tasarlandığından açık sahada zemin toleransı ve tırmanma gücü yetersiz kalabilir; doğru model seçimi çalışma ortamına göre yapılmalıdır.",
            },
            {
                soru: "Makaslı platform bir engelin arkasındaki hedefe ulaşabilir mi?",
                cevap:
                    "Hayır, makaslı platform yalnızca dikey doğrultuda hareket eder ve sepet, makinenin park noktasının doğrudan üzerinde kalır. Hedefin önünde bir engel varsa veya park noktası hedefin tam altında değilse, bu iş için eklemli veya teleskopik bom sınıfı gereklidir.",
            },
            {
                soru: "Makaslı platform ile teleskopik bom platform aynı şey mi?",
                cevap:
                    "Hayır, farklı sınıflardır. Makaslı platform makas mekanizmasıyla yalnızca dikey hareket ederken, teleskopik bom platform tek parça bir kolun içeri-dışarı uzamasıyla hem dikey hem de belirli bir yatay mesafeye erişebilir. Teleskopik bom, makaslıya göre daha uzun yatay erişim sunar ama sepet tabanı genellikle daha dardır ve maliyeti daha yüksektir.",
            },
            {
                soru: "İç mekân zemininde makaslı platform iz bırakır mı?",
                cevap:
                    "Standart siyah lastikli modeller hassas zeminlerde (parlatılmış beton, epoksi, seramik) iz bırakabilir; bu risk, iz bırakmayan (beyaz dolgu) lastikli modellerle ortadan kaldırılır. Hassas bir iç mekân zemininde çalışılacaksa, kiralama talebinde bu bilginin belirtilmesi doğru lastik tipinin seçilmesini sağlar.",
            },
            {
                soru: "Makaslı platform için operatör belgesi gerekli mi?",
                cevap:
                    "Evet, yüksekte çalışma ekipmanlarının tamamında olduğu gibi makaslı platformu kullanacak operatörün ilgili ekipman sınıfı için yetkilendirilmiş olması ve düşme koruma ekipmanının (tam vücut kemer sistemi) sepet içinde doğru bağlantı noktasına takılması gerekir. Bu, mevzuatın da öngördüğü temel güvenlik koşuludur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Makas mekanizmasının çalışma prensibi, kapasite/sepet tabanı dengesi ve makaslı-eklemli sınıf karşılaştırması sektör geneli bilinen mühendislik bilgisidir; tesis adı, marka ve rakam uydurulmamıştır.",
    },

    "hizmet:manlift-kiralama": {
        h1: "Manlift Nedir? Terimin Kapsamı, Alt Sınıfları ve Doğru Terim Nasıl Seçilir",
        giris:
            "\"Manlift\" günlük dilde çok yaygın kullanılan ama teknik olarak tek bir makine sınıfını değil, yükseğe insan taşıyan tüm platform ailesini kapsayan şemsiye bir terimdir. Bir saha yöneticisi 'manlift lazım' dediğinde, aslında kastettiği makine makaslı, eklemli, teleskopik veya örümcek/sepetli sınıflardan biri olabilir — ve bu dört alt sınıf birbirinden hem çalışma prensibi hem de doğru kullanım alanı bakımından belirgin şekilde farklıdır. Bu terim karışıklığı, kiralama sürecinde yanlış makinenin talep edilmesine ve sahada makinenin hedefe ulaşamamasına yol açabilir; bu nedenle 'manlift' kelimesinin arkasındaki gerçek ihtiyacı netleştirmek, doğru makineyi bulmanın ilk adımıdır. Bu sayfa, manlift teriminin kapsamını, hangi alt sınıfların bu şemsiye altında yer aldığını, her birinin çalışma mantığını ve bir kiralama talebinde 'manlift' yerine hangi teknik terimin kullanılması gerektiğini Türkiye genelinde geçerli, ulusal bir sözlük/rehber yaklaşımıyla anlatır. Amaç, terim karmaşasını ortadan kaldırıp saha ihtiyacını doğru teknik karşılığa oturtmaktır.",
        maddeler: [
            {
                baslik: "\"Manlift\" kelimesi teknik olarak neyi ifade eder",
                metin:
                    "Manlift terimi, İngilizce 'man' (insan) ve 'lift' (kaldırmak) kelimelerinin birleşiminden gelir ve kelime anlamı olarak 'insan yükseltme ekipmanı' demektir; teknik şartnamelerde veya üretici kataloglarında bu genişlikte bir sınıf adı olarak nadiren geçer, ama günlük saha dilinde neredeyse tüm yüksekte çalışma platformları için kullanılır. Bu genişlik, terimin kendisini yararlı bir başlangıç noktası ama yetersiz bir sipariş tanımı yapar — 'manlift' demek, hangi alt sınıfın gerektiğini belirtmez.",
            },
            {
                baslik: "Manlift şemsiyesi altındaki dört ana alt sınıf",
                metin:
                    "Manlift üst başlığı altında dört temel alt sınıf yer alır: makaslı platform (yalnızca dikey hareket, geniş sepet tabanı), eklemli/bomlu platform (mafsallı bom, engel aşma kabiliyeti), teleskopik bom platform (tek parça uzayan kol, en uzun yatay erişim) ve örümcek/sepetli platform (paletli, dar geçitlerden geçebilen kompakt sistem). Her alt sınıf farklı bir erişim problemine çözüm üretir; 'manlift' talebinde bulunurken hangi problemin çözülmesi gerektiği netleştirilmelidir.",
            },
            {
                baslik: "Doğru terimi seçmek için sorulması gereken ilk soru",
                metin:
                    "Manlift talebini doğru alt sınıfa dönüştürmenin ilk adımı şu sorudur: hedefin tam altına park edilebiliyor mu, yoksa aradaki mesafe veya bir engel dikey bir çıkışı engelliyor mu? Park edilebiliyorsa makaslı sınıf genellikle yeterlidir; engel veya mesafe varsa eklemli ya da teleskopik sınıf gerekir. İkinci soru geçiş genişliğidir — dar bir kapı, koridor veya merdiven boşluğundan geçilmesi gerekiyorsa örümcek/sepetli sınıf devreye girer.",
            },
            {
                baslik: "Alt sınıflar arasında güç kaynağı ayrımı da vardır",
                metin:
                    "Dört alt sınıfın her biri kendi içinde akülü/elektrikli ve dizel/hibrit versiyonlara ayrılır. Akülü versiyonlar sıfır egzoz emisyonu ürettiği için kapalı alanda tercih edilirken, dizel/hibrit versiyonlar açık sahada daha yüksek zemin toleransı ve genellikle daha uzun erişim mesafesi sunar. 'Manlift' talebinde bu ayrım da netleştirilmezse, kapalı alan için dizel bir makine ya da açık düzensiz saha için akülü bir makine önerilme riski oluşur.",
            },
            {
                baslik: "Terim karışıklığının sahada yol açtığı somut sorun",
                metin:
                    "Bir saha yöneticisi 'manlift' diyerek talepte bulunduğunda ve karşı taraf bunu varsayılan olarak en yaygın sınıfa (örneğin makaslı) çevirdiğinde, eğer sahada aslında bir engel aşımı gerekiyorsa makine sahaya ulaştığında hedefe erişemez. Bu, hem zaman hem maliyet kaybına yol açar. Terim karışıklığını önlemenin en güvenilir yolu, 'manlift' kelimesi yerine hedefin konumu, park noktasının hedefe göre konumu ve varsa engel bilgisini paylaşmaktır; doğru alt sınıf bu bilgilerden çıkarılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Manlift alt sınıflarının karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, 'manlift' şemsiyesi altındaki dört alt sınıfı temel özellikleriyle karşılaştırır; doğru alt sınıf seçimi hedefin konumu, erişim engeli ve geçiş genişliğine göre yapılmalıdır.",
                ],
                tablo: {
                    basliklar: ["Alt sınıf", "Hareket biçimi", "Güçlü olduğu durum", "Sınırı"],
                    satirlar: [
                        ["Makaslı platform", "Yalnızca dikey", "Düz çıkış, geniş sepet/yük ihtiyacı", "Engel aşamaz"],
                        ["Eklemli/bomlu platform", "Dikey + yatay + engel aşma", "Engelin üzerinden/arkasından erişim", "Kapasite ve sepet alanı sınırlı"],
                        ["Teleskopik bom platform", "Dikey + uzun yatay erişim", "Uzak mesafeli tek noktaya erişim", "Dar alanda manevra zorluğu"],
                        ["Örümcek/sepetli platform", "Katlanabilir, paletli", "Dar geçit, hassas zemin", "Erişim mesafesi ve kapasite düşük"],
                    ],
                },
            },
            {
                baslik: "\"Manlift\" yerine hangi teknik terim kullanılmalı",
                paragraflar: [
                    "Bir kiralama talebinde 'manlift' kelimesi yerine, mümkünse doğrudan alt sınıf adı (makaslı platform, eklemli platform, teleskopik bom, örümcek platform) kullanılmalıdır. Bu mümkün değilse, en azından hedefin yüksekliği, park noktasının hedefe olan mesafesi, varsa engelin türü ve çalışma ortamının kapalı mı açık mı olduğu bilgisi paylaşılmalıdır — bu dört veri, doğru alt sınıfı belirlemek için yeterlidir.",
                    "Türkiye genelinde saha dilinde 'manlift', 'platform', 'yüksekte çalışma aracı' gibi terimler sıklıkla birbirinin yerine kullanılır; bu terimlerin hiçbiri tek başına bir sipariş tanımı oluşturmaz, sadece bir başlangıç noktasıdır.",
                ],
            },
            {
                baslik: "Manlift teriminin kullanıldığı tipik sektörler",
                paragraflar: [
                    "'Manlift' kelimesi en sık inşaat, bakım-onarım, tesisat, aydınlatma ve etkinlik/dekor kurulumu gibi işlerde saha dilinde geçer; bu sektörlerin ortak noktası, işin başında hangi alt sınıfın gerektiğinin net olmayabilmesidir. Bu nedenle talebin ilk aşamasında hedefin fotoğrafı ve konumu paylaşıldığında, 'manlift' talebi doğru alt sınıfa hızlıca dönüştürülebilir ve sahaya doğru makine ilk seferde gönderilebilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Manlift ile platform aynı şey mi?",
                cevap:
                    "Günlük dilde çoğunlukla evet, ikisi birbirinin yerine kullanılır. Ama teknik olarak 'manlift', insan yükseltme amaçlı tüm platform ailesini kapsayan genel bir terimdir; 'platform' kelimesi de benzer şekilde geniş kullanılır. Asıl belirleyici olan, hangi alt sınıfın (makaslı, eklemli, teleskopik, örümcek) gerektiğidir — bu, terimin kendisinden değil, sahanın erişim ihtiyacından çıkarılır.",
            },
            {
                soru: "\"Manlift kiralamak istiyorum\" dediğimde bana hangi makine gelir?",
                cevap:
                    "Bu, talebi alan tarafın varsayımına bağlıdır ve bu belirsizlik yanlış makine gelmesine yol açabilir. Doğru sonuç almak için 'manlift' yerine hedefin yüksekliği, park noktasının hedefe mesafesi, varsa engel bilgisi ve çalışma ortamının kapalı/açık olduğu paylaşılmalıdır; bu bilgiler doğru alt sınıfı netleştirir.",
            },
            {
                soru: "Forklift de bir manlift midir?",
                cevap:
                    "Hayır. Forklift, temel işlevi yük kaldırma ve taşıma olan ayrı bir ekipman sınıfıdır; insan taşımak üzere tasarlanmamıştır ve sepet güvenlik sistemleri içermez. 'Manlift' terimi yalnızca insan taşımak üzere tasarlanmış, sepetli/platformlu yüksekte çalışma ekipmanlarını kapsar.",
            },
            {
                soru: "Örümcek platform da bir manlift alt sınıfı mıdır?",
                cevap:
                    "Evet, örümcek/sepetli platform manlift şemsiyesinin dört ana alt sınıfından biridir. Paletli ayaklarını açıp kapatabilen, dar geçitlerden (kapı, merdiven boşluğu) geçirilebilen ve zemine noktasal olarak ayarlanabilir yük veren kompakt bir sistemdir; hassas zemin veya dar alan gerektiren işlerde tercih edilir.",
            },
            {
                soru: "Hangi manlift alt sınıfının bana uygun olduğunu nasıl anlarım?",
                cevap:
                    "İki temel soru yeterlidir: hedefin tam altına park edilebiliyor mu (evetse makaslı, hayırsa eklemli/teleskopik), ve makinenin dar bir geçitten geçmesi gerekiyor mu (gerekiyorsa örümcek platform değerlendirilir). Bu sorulara net cevap verilemiyorsa, hedefin fotoğrafı ve konum bilgisiyle birlikte bir keşif talep edilmesi en güvenilir yoldur.",
            },
            {
                soru: "Teleskopik bom da manlift kapsamına girer mi?",
                cevap:
                    "Evet, teleskopik bom platform da manlift şemsiyesinin alt sınıflarından biridir. Tek parça bir kolun içeri-dışarı uzamasıyla çalışır ve genellikle diğer alt sınıflara göre en uzun yatay erişimi sunar; uzak mesafeli tek bir hedefe ulaşmak gerektiğinde tercih edilir, ama dar alanlarda manevra kabiliyeti sınırlıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Manlift teriminin kapsamı ve dört alt sınıfın (makaslı, eklemli, teleskopik, örümcek) çalışma prensibi karşılaştırması genel sektör terminolojisi ve mühendislik bilgisidir; tesis adı, marka ve rakam uydurulmamıştır.",
    },
};
