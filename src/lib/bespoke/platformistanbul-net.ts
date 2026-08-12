// ═══════════════════════════════════════════════════════════════════════════
// platformistanbul.net — ELLE YAZILMIŞ İÇERİK
//
// Profil: İstanbul'da BÖLGESEL HUB MODELİYLE manlift, platform, forklift ve
// telehandler kiralama. Açı: iki yaka / dev ölçek problemi, bölge
// hub'larından hızlı sevkiyat, çok makine tipi karması, megakent trafiği ve
// köprü-tünel geçiş planlaması, kurumsal proje tedariki.
//
// ⚠️ İstanbul için yazılan İLK elle içerik. Şehir bilgisi doğrulanabilir
// olduğu sürece özgürce kullanılır; tesis adı, rakam, istatistik uydurulmaz.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Sayfalar arası cümle/kalıp tekrarı YASAK.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const PLATFORMISTANBUL_NET: Record<string, BespokeIcerik> = {
    "bolge:ikitelli": {
        h1: "İkitelli OSB'de Manlift, Forklift ve Platform Kiralama",
        giris:
            "İkitelli, Türkiye'nin en büyük organize sanayi bölgelerinden birine ev sahipliği yapar ve bu büyüklük, klasik OSB'lerden farklı bir dokuyla gelir: tek tek dev fabrikalar yerine, onlarca sanayi sitesine bölünmüş binlerce küçük ve orta ölçekli işletme. Tekstilden metal işlemeye, matbaadan mobilyaya uzanan bu yoğun doku, ekipman talebini de kendine benzetir — burada aranan çoğu zaman tek büyük makine değil, dar site sokaklarına girebilen kompakt platform, atölye kapısından geçen forklift ve kısa süreli ama sık tekrarlanan kiralama düzenidir. Avrupa yakası hub'ımızın İkitelli'ye yakın konumu, bu sık-kısa talep ritmine cevap vermemizin altyapısıdır: makine bölgeden çıkar, aynı gün sahada olur ve küçük işletme, büyük firma nakliye maliyetine katlanmadan doğru ekipmanı kullanır.",
        maddeler: [
            {
                baslik: "Sanayi sitesi dokusunda kompakt sınıf",
                metin:
                    "İkitelli'nin sanayi siteleri, blok araları ve rampalı iç yollarıyla geniş şasili makineye yer bırakmaz: dar dönüşler, kapı önü yükleme alanları ve katlı atölye düzeni, kompakt sınıfı zorunlu kılar. Dar şaseli akülü eklemliler ve mini makaslılar, site içi elektrik-tabela-cephe işlerinin standart araçlarıdır; forklift tarafında ise alçak asansör kapılarından geçebilen triplex asansörlü modeller öne çıkar. Keşifte ilk ölçülen şey makine değil, sitenin geçit genişlikleridir.",
            },
            {
                baslik: "Çok sektörlü talebin makine karması",
                metin:
                    "Aynı sokakta tekstil deposu, metal atölyesi ve matbaa yan yana çalışır ve her biri farklı ekipman ister: kumaş balyası istifleyen işletme forklift, çatı aydınlatmasını yenileyen komşusu makaslı platform, cephesine tabela asan üçüncüsü eklemli manlift arar. Hub modelimiz bu karmayı tek turda çözer — aynı bölgeye giden araç, birden fazla işletmenin farklı makinelerini taşır ve nakliye gideri sokak ölçeğinde bölüşülür.",
            },
            {
                baslik: "Kısa süreli kiralamada hub yakınlığının değeri",
                metin:
                    "Küçük işletmenin işi çoğunlukla saatlik-günlüktür: bir vinç motoru değişimi, bir raf düzeltmesi, bir tabela montajı. Bu ölçekte nakliyenin payı büyür ve uzaktan gelen makine, işin kendisinden pahalıya oturur. Avrupa yakası hub'ının İkitelli aksındaki konumu bu denklemi düzeltir: kısa mesafe, düşük nakliye, aynı gün teslim. Günlük kiralamanın İkitelli'de gerçekten ekonomik olmasının sırrı makine fiyatı değil, mesafe matematiğidir.",
            },
            {
                baslik: "Katlı atölye binalarında yük ve erişim",
                metin:
                    "Bölgedeki işyerlerinin önemli kısmı katlı sanayi binalarında çalışır ve bu düzen iki soruyu birlikte getirir: üst kata malzeme nasıl çıkar, ortak alanların yüksek noktalarına nasıl erişilir. Yük tarafında forklift ve rampa düzeni, erişim tarafında bina içi ortak boşluklarda çalışabilen akülü dikey platformlar devrededir. Kat döşemesinin taşıma kapasitesi her iki planın da ön koşuludur ve site yönetiminden alınan bilgiyle doğrulanır.",
            },
            {
                baslik: "Basın Ekspres aksı ve sevkiyat penceresi",
                metin:
                    "İkitelli'nin çevresindeki ana arterler günün büyük kısmında yüklüdür; sevkiyat planı bu gerçeğe göre kurulur. Sabah erken ve akşam geç saat teslimatları, hem yol süresini kısaltır hem sitenin kapı önü trafiğine denk gelmez. Aynı siteye birden fazla teslimat varsa tek araçta birleştirilir. Bölge hub'ından çıkan araç ana arterlere kısa bağlantıyla ulaştığı için, trafik dalgalanması teslim saatini şehir dışından gelen araçlara kıyasla çok daha az oynatır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İkitelli iş tiplerinde makine seçim tablosu",
                paragraflar: [
                    "Sanayi sitesi ölçeğindeki yaygın işler ve uygun ekipman sınıfları aşağıdadır. Geçit ölçüsü sütunu, bu bölgede seçimin asıl belirleyicisidir.",
                ],
                tablo: {
                    basliklar: ["İş", "Ekipman", "Kritik ölçü", "Süre profili"],
                    satirlar: [
                        ["Atölye içi istif", "Akülü forklift / istif makinesi", "Kapı ve asansör geçidi", "Günlük-haftalık"],
                        ["Site içi tabela-cephe", "Dar şaseli akülü eklemli", "Sokak genişliği", "Saatlik-günlük"],
                        ["Çatı altı elektrik-aydınlatma", "Mini makaslı", "Kat yüksekliği", "Günlük"],
                        ["Depo raf işleri", "Makaslı + iz bırakmayan lastik", "Koridor genişliği", "Günlük"],
                        ["Ortak alan bakımı", "Dikey akülü platform", "Bina içi boşluk", "Saatlik"],
                    ],
                },
            },
            {
                baslik: "Sokak kümeleme: küçük işletmenin büyük avantajı",
                paragraflar: [
                    "İkitelli ölçeğinde en etkili maliyet aracı, komşu işletmelerin taleplerini aynı güne toplamaktır. Bir sanayi sitesinde üç işletmenin üç ayrı günde makine çağırması, üç ayrı nakliye demektir; aynı taleplerin tek güne dizilmesi hâlinde araç bir kez gelir, makineler sırayla veya paralel çalışır ve fark doğrudan faturaya yansır. Site yönetimleri ve esnaf kooperatifleri üzerinden dönemsel ortak günler kurgulamak, bu modelin kurumsallaşmış hâlidir.",
                    "Kümelemenin ikinci getirisi süre esnekliğidir: sokakta zaten bulunan makine, gün içinde çıkan küçük ek işlere (yarım saatlik bir bağlantı, kısa bir kontrol) ek nakliye olmadan cevap verir. Bu esneklik, plansız işlerin sık olduğu küçük işletme ritmine özellikle uyar.",
                ],
            },
            {
                baslik: "Dar alanda güvenlik düzeni",
                paragraflar: [
                    "Sanayi sitesi sokakları yaşayan alanlardır: yaya, el arabası, servis aracı ve yükleme trafiği aynı şeridi paylaşır. Platform çalışmasında bu hareketlilik, çalışma alanının fiziksel olarak ayrılmasını zorunlu kılar — bariyer hattı, yönlendirme ve gerektiğinde kısa süreli sokak daraltma, site yönetimiyle koordine edilir. Bom hareketleri komşu cephelerin üzerine taşmayacak biçimde planlanır; dar dokuda bom ucunun salınım payı, açık sahadakinden daha sıkı hesaplanır.",
                    "Forklift tarafında ise atölye içi yaya ayrımı esastır: çalışma sırasında geçiş koridorları işaretlenir ve operatör brifingi, sitenin kendi trafik alışkanlıklarını hesaba katar. Küçük alan, küçük risk demek değildir — düzen, alanın darlığıyla orantılı sıkılaşır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemiz sanayi sitesinin üçüncü katında; makine buraya nasıl çıkar?",
                cevap:
                    "İki yoldan biriyle: bina yük asansörü makineyi taşıyabiliyorsa (kapasite ve kabin ölçüsü doğrulanarak) kompakt akülü modeller katta çalışır; asansör yetmiyorsa iş, malzemenin rampadan forkliftle kata beslenmesi ve kat içinde daha küçük ekipmanla ilerlenmesi biçiminde bölünür. Keşifte asansör etiket bilgisi ve kapı ölçüleri fotoğraflanır — bu iki veri, cevabı telefonda bile netleştirir. Kat döşemesinin yükü de site yönetiminden teyit edilir; şüpheli döşemede makine kata çıkarılmaz.",
            },
            {
                soru: "Sadece iki saatlik bir tabela işimiz var; günlük kira ödemek zorunda mıyız?",
                cevap:
                    "İkitelli'de çoğu zaman hayır — bölge hub'ının yakınlığı, kısa işleri aynı güne dizilen turlarla ekonomik kılar: makineniz sokağınızdaki veya komşu sitedeki başka işlerle aynı araca biner, nakliye bölüşülür ve iki saatlik iş gerçekten iki saatlik maliyetle biter. Bunun koşulu tarih esnekliğidir; 'bu hafta içinde olsun' diyebiliyorsanız ilk uygun tura yerleşirsiniz. Sabit tarihli acil işlerde tekil sevkiyat da yapılır, fark teklifte açıkça görünür.",
            },
            {
                soru: "Hem forklift hem platform lazım; iki ayrı firmayla mı çalışmalıyız?",
                cevap:
                    "Gerek yok — filo karması tam da bu ihtiyaç için kurulu: depo düzenlemenizde istif forklifti, aynı hafta çatı aydınlatmanızda makaslı platform, tek sözleşme ve tek muhatapla planlanır. İki makinenin aynı sahada çakıştığı günlerde çalışma alanları ayrılır ve sıra planı keşifte çizilir. Tek firma düzeninin görünmeyen getirisi de vardır: iki makinenin nakliyesi birleşir ve arıza-değişim gibi durumlarda tek telefon yeter.",
            },
            {
                soru: "Site sokağımız çok dar; makine sığmazsa ne olur?",
                cevap:
                    "Sığmama durumu keşifte, sahaya makine gitmeden çözülür: sokak genişliği, köşe dönüş yarıçapı ve kapı önü alanı fotoğraf-ölçü ile alınır, filodan geçebilen en geniş kapasiteli model seçilir. Hiçbir model geçemiyorsa alternatifler dürüstçe sunulur — işin sokak ağzından uzun bomlu makineyle alınması, daha küçük ekipmanla kademeli çalışma veya farklı erişim yöntemi. 'Bir şekilde sokarız' yaklaşımı listede yoktur; sıkışan makine, sizin sokağınızı da bizim günümüzü de kilitler.",
            },
            {
                soru: "Elektrikçiyiz, ayda birkaç kez farklı sitelerde kısa işlerimiz oluyor; her seferinde teklif mi isteyeceğiz?",
                cevap:
                    "Daha iyisi var: dönemsel çerçeve düzeni. Aylık iş ritminiz belli olduğunda birim şartlar bir kez konuşulur, sonraki her iş tek mesajla düşer — site adı, iş tipi, tarih esnekliği. Talepleriniz bölge turlarına yerleştirilir ve kısa işleriniz tur ekonomisinden yararlanır. Zanaatkâr ve taşeron ekipler için bu düzen, hem fiyat öngörüsü hem hız sağlar; İkitelli gibi yoğun dokuda en sık çalıştığımız model budur.",
            },
            {
                soru: "Makineyi hafta sonu da kullanabilir miyiz? Sitede hafta sonu daha sakin oluyor.",
                cevap:
                    "Kullanabilirsiniz ve bu çoğu zaman akıllıca bir tercihtir: hafta sonu site trafiği seyrekleşir, sokak çalışması bariyer düzenini daha rahat kurar ve komşu işletmelerin yükleme trafiğiyle çakışma azalır. Cuma teslim - pazartesi iade düzeni, iki tam sakin gün kazandırır. Dikkat edilecek tek nokta site yönetiminin hafta sonu kurallarıdır (kapı saatleri, güvenlik kaydı); bunlar plana önceden eklenir ve operatörlü işlerde hafta sonu vardiyası baştan netleştirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. İkitelli OSB'nin Türkiye'nin en büyük organize sanayi bölgelerinden biri olduğu ve çok sektörlü sanayi sitesi dokusu kamuya açık bilgidir; tur-kümeleme ve çerçeve düzeni firma pratiğidir.",
    },

    "bolge:basaksehir": {
        h1: "Başakşehir'de Platform ve Telehandler Kiralama",
        giris:
            "Başakşehir, İstanbul'un planlı büyüyen yüzüdür: geniş bulvarlı yeni konut bölgeleri, Kayaşehir'in devam eden etapları, büyük sağlık kampüsü ve bu dokuyu besleyen ticari-sosyal donatılar. Buradaki ekipman talebi bu yüzden iki ana koldan akar — bir yanda aktif şantiyelerin telehandler ve dizel arazi tipi platform ihtiyacı, diğer yanda tamamlanmış sitelerin ve kurumsal yapıların bakım-onarım işleri için akülü sınıf. İlçenin görece yeni yapı stoku, eski kent dokusunun dar sokak problemini büyük ölçüde ortadan kaldırır; asıl planlama konusu erişim değil, şantiye takvimiyle site yaşamının aynı mahallede yan yana yürümesidir. Avrupa yakası hub'ımızdan Başakşehir aksına sevkiyat, çevre yolu bağlantılarıyla kısa süreye iner ve etaplı projelerin değişken temposuna makine parkı bu yakınlıktan beslenerek uyum sağlar.",
        maddeler: [
            {
                baslik: "Şantiye sahalarında telehandler'ın rolü",
                metin:
                    "Etaplı konut projelerinde malzemenin kat aralarına ve blok önlerine beslenmesi, işin damarıdır ve telehandler bu damarın makinesidir: teleskopik bomuyla paleti yüksek kota uzatır, arazi lastikleriyle stabilize edilmemiş saha yollarında ilerler ve ataşman değişimiyle (çatal, kova, jib) tek gövdeden birden fazla iş çıkarır. Kaba yapıdan ince işe geçiş döneminde telehandler yükü azalır, akülü platform yükü artar — kiralama planı bu eğriyi izler.",
            },
            {
                baslik: "Yeni sitelerde yönetim dönemi işleri",
                metin:
                    "Teslim edilen sitelerin ilk yılları yoğun bir ayar dönemidir: cephe kontrolleri, ortak alan aydınlatması, otopark tesisatı, peyzaj direkleri ve tabela-yönlendirme sistemleri. Bu işlerin ekipmanı akülü eklemli ve makaslı sınıftır; site içi yollar yeni ve düzgün olduğu için makine dolaşımı rahattır, asıl koordinasyon sakin yaşamıyla kurulur — duyuru, park düzeni, gürültü penceresi. Otopark üstü çalışmalarda döşeme kapasitesi projeden teyit edilir.",
            },
            {
                baslik: "Sağlık kampüsü ve büyük kurum yapıları",
                metin:
                    "İlçedeki büyük sağlık yerleşkesi ve kamu yapıları, kurumsal tedarik profilinin adresidir: yüklenici kayıt süreçleri, bölüm bazlı çalışma pencereleri ve iç mekânda hijyen-sessizlik şartları. Bu sahalarda iz bırakmayan lastikli akülü modeller iç işleri, dizel sınıf ise dış saha kalemlerini üstlenir. Geniş yerleşkelerde günün verimi rota planından çıkar: hangi blok hangi saatte, hangi kapıdan giriş — bu üçlü, keşif dosyasının ilk sayfasıdır.",
            },
            {
                baslik: "Ticari donatılarda yüksek hacim işleri",
                metin:
                    "Bölgenin alışveriş merkezleri, okul kampüsleri ve spor tesisleri, yüksek tavanlı iç hacim işleri üretir: atrium aydınlatması, havalandırma kanalları, asma tavan ve cam yüzey erişimi. Bu hacimlerde akülü eklemli platformların kırılımlı erişimi, sabit engellerin (merdiven, korkuluk, dekoratif elemanlar) üzerinden çalışmayı mümkün kılar. İşletme saatleri dışı çalışma esastır; gece vardiyası planı, makinenin akü kapasitesiyle birlikte kurulur.",
            },
            {
                baslik: "Etap teslimlerinde yoğunluk yönetimi",
                metin:
                    "Konut projelerinde etap teslim dönemleri, ekipman talebini aynı haftalara yığar: birden fazla blokta eş zamanlı son kat işleri, çevre düzenlemesi ve kontrol kalemleri. Hub modeli bu yığılmayı iki araçla karşılar: bölge parkındaki makine çeşitliliği (aynı hafta üç makaslı, iki eklemli, bir telehandler tek projeye verilebilir) ve önden bildirimle rezervasyon. Teslim takvimini önceden paylaşan proje, yoğun haftasında makine kuyruğuna girmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Başakşehir'de proje evresi ve ekipman eşleşmesi",
                paragraflar: [
                    "İlçedeki tipik proje evreleri ve her evrenin ekipman ağırlığı aşağıdadır. Evre geçişlerinde kiralama karması da değişir; tabloyu takvim planında kullanın.",
                ],
                tablo: {
                    basliklar: ["Evre", "Ana ekipman", "Destek ekipman", "Not"],
                    satirlar: [
                        ["Kaba yapı", "Telehandler", "Dizel arazi platformu", "Saha yolu koşulları belirleyici"],
                        ["İnce iş / cephe", "Dizel eklemli", "Makaslı", "Cephe iskele planıyla koordineli"],
                        ["Teslim öncesi kontrol", "Akülü makaslı", "Dikey platform", "İç mekân, iz bırakmayan lastik"],
                        ["Site yönetim dönemi", "Akülü eklemli", "—", "Sakin koordinasyonu esas"],
                        ["Kurum yerleşkeleri", "Akülü iç + dizel dış", "Forklift (depo)", "Kayıt-refakat süreci önden"],
                    ],
                },
            },
            {
                baslik: "Şantiye ile site yan yana: çift rejimli mahalle",
                paragraflar: [
                    "Başakşehir'in ayırt edici planlama gerçeği, aktif şantiyeyle oturulan sitenin aynı mahalleyi paylaşmasıdır. Bu komşuluk, ekipman operasyonuna somut kurallar getirir: şantiyeye giden ağır nakliye, site servis saatleriyle çakıştırılmaz; toz ve gürültü üreten dış işler okul-mesai ritmine göre pencerelenir; yol kenarı makine parkı, yaya güzergâhlarını kesmeyecek noktalara alınır. Tek plan iki rejimi birden gözetir ve şikâyet üretmeyen şantiye, ilçe pratiğinde en hızlı ilerleyen şantiyedir.",
                    "Aynı gerçeğin ticari yüzü de vardır: şantiye için gelen makine parkı, komşu sitenin bakım kalemlerine ek sevkiyat olmadan hizmet verebilir. Proje ve yönetim taleplerini aynı bölge planında birleştirmek, iki tarafın da maliyetini düşürür.",
                ],
            },
            {
                baslik: "Kurumsal tedarikte evrak ve süreç hazırlığı",
                paragraflar: [
                    "İlçenin büyük kurum yapılarında iş, makineden önce evrakla başlar: operatör belgeleri, makine periyodik kontrol raporları, sigorta kayıtları ve yüklenici tanımlamaları. Bu setin standart ve güncel tutulması, kurum kapısında gün kaybetmemenin tek yoludur. İlk kayıttan sonra tekrar işleri hızlı döner; bu yüzden kurumsal müşterilerde ilk işin planına evrak günü ayrıca yazılır ve sonraki işler bu yatırımın üzerinden akar.",
                    "Aynı hazırlık, denetim tarafında da karşılık bulur: hangi makinenin hangi raporla sahada olduğu kayıtlıdır ve kurum iç denetimlerinde ekipman dosyası dakikalar içinde sunulur. Kurumsal proje tedarikinde güven, bu dosya düzeninin görünür hâlidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Projemiz üç etaplı; her etapta ayrı ayrı mı kiralayacağız?",
                cevap:
                    "Tek çerçeve sözleşmeyle üç etabı da kapsamak daha akıllıcadır: etap takvimi paylaşılır, her evrenin ekipman karması önden planlanır ve makineler evre geçişlerinde değişir — kaba yapıda telehandler ağırlıklı park, ince işte akülü sınıfa döner. Çerçevenin getirisi yalnız fiyat değildir: yoğun teslim haftalarınız için makine rezervasyonu önden yapılır ve etap sıkışmasında kuyruk beklemezsiniz. Etap planınızı paylaşın; karma ve takvim önerisiyle dönelim.",
            },
            {
                soru: "Telehandler'ı platform yerine kullanabilir miyiz? Sepet ataşmanı takılıyor diye duyduk.",
                cevap:
                    "Sepet ataşmanlı telehandler kullanımı mümkündür ama doğru uygulamayla: ataşman makineyle uyumlu ve sertifikalı olmalı, personel taşıma fonksiyonu üreticinin onayladığı konfigürasyonda kurulmalı ve operatör bu kullanım için eğitimli olmalıdır. Yine de ilkemiz şudur: sürekli personel erişimi gerektiren işlerde asıl makine platformdur — telehandler'ın sepeti, malzeme beslemeyle iç içe geçen kısa erişim işleri için pratik bir tamamlayıcıdır. Keşifte iş profilinize göre dürüst öneri yapılır.",
            },
            {
                soru: "Sitemiz yeni teslim edildi, cephe kontrolü ve aydınlatma işleri birikti; nereden başlamalıyız?",
                cevap:
                    "Tek paketle: birikmiş kalemler (cephe kontrol turu, ortak alan aydınlatması, otopark tesisatı, peyzaj direkleri) listelenir, tek kiralama döneminde sıraya dizilir ve makine bir kez gelip tüm listeyi bitirir. Sakinlere duyuru ve park düzeni yönetimle bir kez kurulur. Bu paket yaklaşımı, kalem kalem çağrılan makinenin toplamından belirgin ucuzdur ve site yaşamını bir kez rahatsız eder. Yönetim takviminize yılda bir-iki bakım paketi yazmak, uzun vadeli en ekonomik düzendir.",
            },
            {
                soru: "Sağlık yerleşkesinde çalışacağız; süreç ne kadar sürer?",
                cevap:
                    "İlk işte evrak süreci gerçekçi planlanmalıdır: yüklenici kaydı, operatör ve makine belgelerinin kurum sistemine tanımlanması ve çalışma izin pencerelerinin netleşmesi zaman alır — bu yüzden ilk işin takvimine evrak payı açıkça yazılır. Belge setimiz kurum formatlarına hazır olduğu için süreç bizim tarafımızda beklemez. Kayıt tamamlandıktan sonra tekrar işleri hızlıdır: pencere tanımlı, ekipman dosyası sistemde, refakat düzeni kurulu. Kurumsal işte yavaş olan ilk kapıdır, sonrası akar.",
            },
            {
                soru: "Şantiyemiz oturulan sitenin bitişiğinde; şikâyet almadan nasıl çalışırız?",
                cevap:
                    "Pencere ve güzergâh disipliniyle: ağır nakliye site servis saatlerinin dışına alınır, gürültülü kalemler gündüz ortasına yazılır (erken sabah ve akşam değil), makine parkı yaya yollarını kesmeyen noktalara kurulur ve toz üreten işlerde sulama-örtü önlemi standarttır. Site yönetimine haftalık kısa bilgilendirme, şikâyetin en ucuz sigortasıdır. Bu düzen bir miktar planlama emeği ister ama karşılığı somuttur: durdurulmayan, gerginlik üretmeyen ve takviminde ilerleyen bir saha.",
            },
            {
                soru: "AVM'mizde gece çalışması gerekiyor; akü bütün vardiyaya yeter mi?",
                cevap:
                    "Doğru planla yeter: gece penceresinin süresi, işin kot ve hareket yoğunluğu üzerinden akü tüketimi öngörülür; gerekirse vardiya ortası şarj molası plana yazılır veya ikinci makineyle dönüşümlü düzen kurulur. Mağaza kapanışından açılışa uzanan pencerede kritik olan akü kadar lojistiktir: makinenin geceden yerleştirilmesi, servis koridorlarından geçiş ölçüleri ve sabah teslim öncesi alan temizliği. Bu üçü keşifte netleşir; gece işi sürprizsiz biter.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Başakşehir'in planlı konut gelişimi, Kayaşehir etapları ve büyük sağlık yerleşkesi kamuya açık bilgidir; evre-karma planı ve çift rejim düzeni firma pratiğidir.",
    },

    "bolge:tuzla": {
        h1: "Tuzla'da Manlift, Telehandler ve Platform Kiralama",
        giris:
            "Tuzla, Anadolu yakasının sanayi kimliğini iki güçlü karakterle taşır: Türkiye gemi inşa sektörünün yoğunlaştığı tersaneler bölgesi ve deri, kimya, mermer, boya gibi ihtisas alanlarında örgütlenmiş organize sanayi bölgeleri kuşağı. Bu ikili yapı, ekipman talebini ağır sanayi tarafına çeker — yüksek bomlu dizel manliftler, arazi tipi makaslılar, ağır tonajlı forkliftler ve tersane sahalarının vazgeçilmezi telehandler. Deniz kenarında çalışmanın korozyon gerçeği, ağır yüklerin zemin baskısı ve büyük çelik yapıların etrafında manevra gereği, buradaki makine seçimini kent işlerinden tamamen ayırır. Anadolu yakası hub'ımız bu kuşağın taleplerine kısa mesafeden cevap verir; sevkiyatın kısalığı, tersane ve OSB ritminin plansız çıkan acil işlerinde asıl farkı yaratır.",
        maddeler: [
            {
                baslik: "Tersane sahalarında yüksek bom ihtiyacı",
                metin:
                    "Gemi gövdesi, blok montaj alanı ve kızak çevresi, kara yapılarından farklı bir erişim geometrisi sunar: hedefler yüksek, yüzeyler eğrisel ve çalışma noktaları sürekli değişkendir. Bu geometri, uzun erişimli dizel eklemli ve teleskopik manliftleri tersanenin standart ekipmanı yapar — raspa-boya, kaynak kontrol, iskele destek ve donatım işleri bom sepetinden yürür. Makine trafiği, tersanenin kendi vinç ve taşıma düzeniyle koordineli planlanır.",
            },
            {
                baslik: "Deniz atmosferinde ekipman dayanımı",
                metin:
                    "Kıyı sahasında konaklayan makine, tuz yüklü nemin sürekli baskısı altındadır ve bakım düzeni buna göre sıkılaşır: bom pimleri, hidrolik silindir yüzeyleri, elektrik panoları ve konnektör noktaları periyodik kontrol listesinin başındadır. Uzun dönemli tersane kiralamalarında bakım aralıkları kısaltılır ve iade sonrası tuzdan arındırma yıkaması uygulanır. Bu disiplin kiracıya tek şey olarak yansır: kıyıda da makine durmaz.",
            },
            {
                baslik: "İhtisas OSB'lerinde sektöre özgü koşullar",
                metin:
                    "Bölgenin ihtisas OSB'leri, her biri kendi çalışma şartını getirir: kimya tesislerinde patlayıcı ortam sınıflandırması ve izin sistemleri ekipman seçimini belirler, deri işletmelerinde nem ve kimyasal buhar makine elektroniği için hesaba katılır, mermer tesislerinde toz ve ağır blok trafiği zemin planını şekillendirir. Keşif bu kuşakta yalnız ölçü almaz; tesisin emniyet prosedürünü okur ve makine-operatör düzenini o prosedürün içine yerleştirir.",
            },
            {
                baslik: "Ağır yük tarafında forklift ve telehandler",
                metin:
                    "Çelik profil, sac paket, mermer blok ve fıçılı kimyasal — bölgenin yük profili ağırdır ve istif tarafı yüksek tonajlı dizel forkliftlerle döner. Telehandler ise iki dünyanın kesişimini alır: hem yükü uzatır hem bozuk saha zemininde ilerler; tersane geri sahaları ve açık stok alanları bu makinenin doğal ortamıdır. Yük kaldırma planlarında ağırlık merkezi ve ataşman uyumu, tonaj kadar önemlidir ve teslimatta operatörle birlikte doğrulanır.",
            },
            {
                baslik: "Sahil aksında rüzgâr ve dış saha planı",
                metin:
                    "Marmara kıyısının açık sahalarında yüksek kot işleri rüzgâr penceresine tabidir: sepet anemometre ölçümü esastır ve geniş yüzeyli malzeme taşınan kalemlerde etkin limit, makine sertifika değerinin altına çekilir. Tersane ve liman geri sahası gibi perdesiz alanlarda gün planı, yüksek işleri sakin saatlere yazar; kapalı atölye ve hangar işleri rüzgârdan bağımsız dolgu kalemleridir. Bu ikili liste düzeni, kıyı sahasında gün kaybını önleyen temel araçtır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tuzla sanayi kuşağında saha tipi ve ekipman tablosu",
                paragraflar: [
                    "Bölgenin saha tipleri, karakteristik koşulları ve uygun ekipman sınıfları aşağıdadır. Koşul sütunu, bu kuşakta makine sütunundan önce okunmalıdır.",
                ],
                tablo: {
                    basliklar: ["Saha", "Belirleyici koşul", "Ekipman", "Ek gereklilik"],
                    satirlar: [
                        ["Tersane blok sahası", "Yüksek-eğrisel hedefler", "Dizel eklemli / teleskopik", "Vinç trafiği koordinasyonu"],
                        ["Kimya OSB tesisi", "Ex-proof gereksinimi olabilir", "Tesise göre seçim", "İzin sistemi + prosedür uyumu"],
                        ["Mermer tesisi", "Toz + ağır blok trafiği", "Yüksek tonaj forklift", "Filtre-bakım sıklaştırma"],
                        ["Açık stok sahası", "Bozuk zemin", "Telehandler", "Ağırlık merkezi doğrulama"],
                        ["Kapalı üretim holü", "Emisyon yasağı", "Akülü makaslı/eklemli", "İz bırakmayan lastik"],
                    ],
                },
            },
            {
                baslik: "Tersane ritmine uyum: teslim takviminin makinesi",
                paragraflar: [
                    "Gemi inşa ve bakım-onarım işleri, teslim tarihine kilitli yürür ve gecikmenin maliyeti büyüktür. Bu ritimde ekipman tedarikçisinin görevi, tersanenin planına esneklikle eşlik etmektir: iş yoğunlaşınca ek makinenin hızla sahaya alınması, iş bitince fazla makinenin bekletilmeden çekilmesi ve vardiya değişimlerine uyan teslim saatleri. Anadolu yakası hub'ının kısa mesafesi bu esnekliğin fiziksel koşuludur — uzaktan yönetilen filo, tersane temposuna yetişemez.",
                    "Uzun dönemli işlerde ise konaklama modeli devreye girer: makine sahada kalır, bakım yerinde yapılır ve kullanım günleri üzerinden şeffaf takip yürür. İki modelin karması — çekirdek makineler konaklamalı, tepe yükü turlu — tersane ölçeğinde en verimli kurgudur.",
                ],
            },
            {
                baslik: "Ağır sanayide zemin ve stabilite disiplini",
                paragraflar: [
                    "Bölge sahalarının zemini aldatıcı çeşitlilik gösterir: betonarme saha ile sıkıştırılmış dolgu yan yana, yer yer ray hatları, ızgara kanallar ve gömülü altyapı. Yüksek kot çalışmasında makinenin duruş noktası bu haritaya göre seçilir — kapak ve kanal üzerine ayak basılmaz, dolgu kesimlerde yük dağıtım plakası kullanılır ve şüpheli noktada çalışma başlatılmaz. Tersane sahalarında ayrıca kızak eğimleri ve deniz tarafı şevleri, park planının kırmızı çizgileridir.",
                    "Forklift ve telehandler tarafında disiplinin adı yük tablosudur: bom uzadıkça düşen kapasite, ağır sanayi yüklerinde ihlale tahammülsüzdür. Operatör brifinglerimizde bölgeye özgü vaka örnekleri kullanılır ve tablo dışı kaldırma, hangi gerekçeyle istenirse istensin reddedilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tersanede üç aylık bir donatım işimiz var; makineyi bu süre boyunca sahada tutabilir miyiz?",
                cevap:
                    "Tutabilirsiniz — konaklamalı uzun dönem kiralama tam bu iş için vardır: makine sahanızda kalır, periyodik bakımı yerinde ve tersane çalışma düzeninize uygun saatlerde yapılır, kıyı koşulları nedeniyle bakım aralıkları sıklaştırılır. Üç aylık blokta birim maliyet, günlük kiralamanın belirgin altına iner. İş yoğunluğunuz dalgalanıyorsa karma model önerilir: çekirdek makine konaklar, yoğun haftalarda ek makine kısa süreli katılır. Donatım programınızla birlikte plan çıkaralım.",
            },
            {
                soru: "Kimya tesisimizde çalışma izni sistemi var; makineniz ve operatörünüz buna uyar mı?",
                cevap:
                    "Uyar — ihtisas OSB'lerinde çalışmanın ön şartı zaten budur: iş öncesi tesisinizin izin prosedürü (sıcak çalışma, yüksekte çalışma, kapalı alan) incelenir, operatör belgeleri ve makine kontrol raporları izin sistemine tanımlanır ve saha brifinginize ekibimiz katılır. Patlayıcı ortam sınıflı bölümlerde standart makine kullanılmaz; bu bölgeler keşifte netleştirilir ve iş, tesisinizin emniyet birimiyle ortak planlanır. Prosedür uyumu bizde ek hizmet değil, işin tanımıdır.",
            },
            {
                soru: "Gemi bordasında raspa-boya işi için hangi makine doğru?",
                cevap:
                    "Borda geometrisine göre karar verilir: düz ve yüksek kesimlerde teleskopik bomun uzun düz erişimi hızlıdır; kıç ve baş formlarının eğrisel yüzeylerinde eklemli bomun kırılımı, sepeti yüzeye paralel konumlandırmayı kolaylaştırır. Çoğu borda işinde ikisi birlikte çalışır — teleskopik geniş orta kesimi tarar, eklemli form bölgelerini alır. Raspa-boya özelinde rüzgâr ve püskürtme sürüklenmesi plana girer; komşu blok ve araçların korunması için pencere ve yön planı kurulur.",
            },
            {
                soru: "Mermer bloklarını istiflemek için forklift lazım ama sahamızın zemini bozuk; ne önerirsiniz?",
                cevap:
                    "İki yollu değerlendirme yaparız: zemin bozukluğu yüzeysel ise (çukur, gevşek üst tabaka) arazi tipi dizel forklift yeterli olabilir; taşıma kapasitesi düşük veya engebe belirginse telehandler doğru makinedir — arazi lastikleri ve dört teker çekişiyle bozuk sahada güvenle ilerler, bom uzatmasıyla istif yüksekliği kazanır. Mermer özelinde yük ağırlığı ve blok ölçüleri net verilmelidir; ağırlık merkezine göre ataşman ve kapasite doğrulaması teslimatta birlikte yapılır. Saha fotoğrafı ve blok tonajıyla keşif, cevabı kesinleştirir.",
            },
            {
                soru: "Acil bir arıza için birkaç saat içinde makine gelebilir mi?",
                cevap:
                    "Anadolu yakası hub'ının varlık nedeni budur: bölge parkında hazır bekleyen makine, Tuzla aksına kısa mesafeden sevk edilir ve şehir dışından veya karşı yakadan gelen alternatiflerin katlanacağı köprü-trafik belirsizliği devreden çıkar. Aciliyet bildirilirken üç bilgi hızlandırır: işin kotu, saha tipi (tersane, OSB, açık stok) ve varsa tesis giriş prosedürü. Park durumuna göre gerçekçi varış saati verilir — 'hemen geliyoruz' yerine tutulan saat sözü, acil işin asıl ihtiyacıdır.",
            },
            {
                soru: "Deniz kenarında uzun süre kalan makinede arıza riski artmaz mı? Bu bizim sorumluluğumuza mı yazılır?",
                cevap:
                    "Korozyon baskısı gerçektir ama yönetimi bizim işimizdir: kıyı konaklamalı makinelerde bakım takvimi baştan sıklaştırılır, kritik noktalar (pimler, silindir yüzeyleri, panolar) periyodik kontrole alınır ve bu düzenin maliyeti kiralama şartlarında baştan görünür — sonradan sürpriz kalem çıkmaz. Sizden beklenen tek katkı, mümkünse gece parkı için korunaklı alan göstermektir. Normal kullanım içindeki iklim etkisi kiracıya yazılmaz; sorumluluk ayrımı sözleşmede açıkça tanımlıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Tuzla'nın tersaneler bölgesi kimliği ve deri-kimya-mermer ihtisas OSB kuşağı kamuya açık bilgidir; konaklama-karma modeli ve bakım sıklaştırma düzeni firma pratiğidir.",
    },

    "bolge:pendik": {
        h1: "Pendik'te Platform, Forklift ve Manlift Kiralama",
        giris:
            "Pendik, Anadolu yakasının ulaşım kapısıdır: Sabiha Gökçen Havalimanı'nın hemen komşuluğu, Kurtköy aksında büyüyen sanayi ve teknoloji yerleşkeleri, sahilde marina ve feribot bağlantısı, iç kesimde ise lojistik ve üretim tesislerinin karışık dokusu. Havalimanı çevresinin çekim gücü, ilçeye kargo-lojistik yatırımlarını ve teknoloji odaklı üretim tesislerini toplamıştır; ekipman talebi de bu profili izler — depo içi makaslı ve forklift işleri, tesis cephe ve saha aydınlatması, hangar-antrepo yüksek kot erişimi ve teknoloji binalarının hassas iç mekân kalemleri. Anadolu yakası hub'ımızın Pendik aksına erişimi hem sahil yolundan hem otoyol bağlantısından kısadır; havalimanı ekosisteminin saat hassasiyeti yüksek işlerinde bu çift güzergâh, teslim saatini trafiğe karşı sigortalar.",
        maddeler: [
            {
                baslik: "Havalimanı çevresi lojistik tesislerinde çalışma",
                metin:
                    "Kargo ve lojistik tesislerinin işleri saat disipliniyle yürür: operasyon pencereleri dardır, sevkiyat akışı kesintiye toleranssızdır ve makine çalışması bu akışın boşluklarına yerleştirilir. Antrepo içi raf-aydınlatma-sprinkler kalemleri akülü makaslılarla gece veya düşük tempolu saatlerde çalışılır; dış saha ve rampa işleri operasyon yoğunluğunun dışına yazılır. Havalimanı güvenlik alanına komşu sahalarda giriş prosedürleri plana önceden eklenir.",
            },
            {
                baslik: "Kurtköy aksında teknoloji ve üretim yerleşkeleri",
                metin:
                    "Kurtköy çevresinde yoğunlaşan teknoloji yerleşkeleri ve modern üretim tesisleri, kaliteli iç mekân işleri üretir: temiz üretim alanlarında iz bırakmayan lastikli akülü modeller, hassas cihaz ortamlarında düşük titreşimli çalışma düzeni ve tesis kurallarına uyumlu sessiz vardiyalar. Bu profilde makinenin yaşı ve bakım durumu görünür bir kalite göstergesidir; kurumsal tesislere giden ekipman, tesisin kendi standardını taşıyacak durumda seçilir.",
            },
            {
                baslik: "Sahil hattı ve marina çevresi işleri",
                metin:
                    "Pendik sahili, kent yüzü işlerini üretir: sahil tesislerinin cephe-tabela kalemleri, marina çevresi aydınlatma ve direk işleri, feribot terminali çevresindeki yapıların bakım ihtiyacı. Deniz kenarında yüksek kot çalışması rüzgâr ölçümüyle planlanır ve yaya yoğun sahil bandında çalışma alanı ayrımı sıkı kurulur. Bu işler tipik olarak kısa sürelidir ve bölge turlarına dizilerek ekonomik hâle gelir.",
            },
            {
                baslik: "Karışık sanayi dokusunda esnek makine planı",
                metin:
                    "İlçenin iç kesimlerinde irili ufaklı üretim tesisleri, depolar ve atölyeler karışık bir doku oluşturur ve talep çeşitliliği yüksektir: bir gün çelik konstrüksiyon montajı için dizel eklemli, ertesi gün depo düzenlemesi için forklift, sonraki hafta çatı onarımı için makaslı. Hub parkının çok tipli yapısı bu çeşitliliği tek kaynaktan karşılar; müşteri tarafında ekipman ihtiyacı hangi tipte çıkarsa çıksın muhatap değişmez.",
            },
            {
                baslik: "Çift güzergâh avantajıyla sevkiyat güvencesi",
                metin:
                    "Pendik'e ulaşım iki bağımsız akstan mümkündür: sahil yolu ve otoyol bağlantıları. Sevkiyat planında bu çiftlik bilinçli kullanılır — trafik verisine göre güzergâh sabah seçilir, kritik saatli teslimatlarda yedek rota hazır tutulur. Havalimanı çevresinin trafik dalgalanması belirli saatlerde sertleşir; teslim saatleri bu dalgaların dışına yazılır. Saat sözünün tutulması, lojistik müşterisinin bizden ilk beklentisidir ve rota planı bu sözün arkasındaki mekanizmadır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Pendik'te tesis tipi ve çalışma penceresi tablosu",
                paragraflar: [
                    "İlçedeki tesis tiplerinin karakteristik pencere kısıtları ve ekipman eşleşmesi aşağıdadır. Pencere sütunu, bu bölgede planın başlangıç noktasıdır.",
                ],
                tablo: {
                    basliklar: ["Tesis", "Pencere kısıtı", "Ekipman", "Not"],
                    satirlar: [
                        ["Kargo-lojistik antreposu", "Operasyon boşlukları / gece", "Akülü makaslı", "Sevkiyat akışı kesilmez"],
                        ["Teknoloji yerleşkesi", "Tesis kuralları", "Akülü eklemli, iz bırakmayan", "Sessiz-temiz çalışma"],
                        ["Üretim tesisi", "Vardiya araları", "Tip işe göre", "Hat duruşuyla koordineli"],
                        ["Sahil-marina yapıları", "Rüzgâr + yaya yoğunluğu", "Eklemli manlift", "Tur kümelemesine uygun"],
                        ["Açık saha-konstrüksiyon", "Hava koşulu", "Dizel eklemli / telehandler", "Zemin kontrolü önden"],
                    ],
                },
            },
            {
                baslik: "Saat hassasiyeti yüksek işlerde teslim disiplini",
                paragraflar: [
                    "Havalimanı ekosistemindeki tesislerin ortak dili dakikliktir: operasyon penceresi kaçarsa iş günlerce ileri atabilir. Teslim disiplinimiz bu dile göre kurulmuştur — makine, pencereden önce sahada hazır bekler; operatörlü işlerde brifing pencere açılmadan tamamlanır; iade, tesisin akışını kesmeyecek saatte planlanır. Pencere kaymalarına karşı kural basittir: tesisin operasyonu beklemez, biz bekleriz.",
                    "Bu disiplinin fiyatlandırması da şeffaftır: bekleme payı gereken işlerde bu pay baştan konuşulur, gizli kalem olarak sonradan çıkmaz. Lojistik müşterilerimizle uzun süreli çalışmanın temeli, bu iki netliğin toplamıdır.",
                ],
            },
            {
                baslik: "Bölge turu modeli: kısa işlerin Pendik ekonomisi",
                paragraflar: [
                    "Sahil bandı ve iç dokudaki kısa süreli işler — tabela, cephe kontrolü, tekil aydınlatma, küçük montaj — tek başına çağrılan makineyle pahalı, bölge turuyla ekonomiktir: aynı aksta birden fazla iş aynı güne dizilir, makine gün boyu ilçe içinde kısa mesafeler katarak listeyi bitirir ve nakliye gideri işler arasında paylaşılır. Tarih esnekliği olan talepler ilk uygun tura yerleşir; sabit tarihli işler ise turun çapasını oluşturur.",
                    "Turun görünmeyen faydası tanışıklıktır: düzenli geçilen aksta tesislerin giriş düzenleri, saha koşulları ve iletişim kişileri bilinir hâle gelir ve her yeni iş, sıfırdan keşif maliyeti taşımadan planlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Antrepomuzda gece 02:00-06:00 arası çalışılabilir; bu pencereye makine ve operatör gelir mi?",
                cevap:
                    "Gelir — lojistik tesislerin gece pencereleri bizim için istisna değil düzendir: makine akşamdan tesise alınır ve pencere açıldığında çalışmaya hazırdır, operatör vardiyası gece planına göre kurulur, iş pencere kapanmadan toparlanır ve sabah operasyonunuz makinesiz-bariyersiz alan devralır. Gece işinin kritik hazırlığı gündüzden yapılır: çalışma noktaları, elektrik erişimi ve güvenlik kayıtları önceden netleştirilir ki dar pencere hazırlıkla harcanmasın.",
            },
            {
                soru: "Teknoloji binamızda hassas cihazlar var; makine çalışması bunlara zarar verir mi?",
                cevap:
                    "Doğru düzenle vermez: hassas ortam işlerinde akülü ekipman kullanılır (emisyon ve gürültü yok), iz bırakmayan lastik ve gerektiğinde zemin koruma serimi uygulanır, titreşim üreten kalemler cihaz alanlarından uzak pencerelere yazılır ve makinenin geçiş rotası tesis yetkilinizle birlikte çizilir. Cihaz hassasiyet bilgisini keşifte alırız — hangi alanda ne var, hangi saatte ne çalışabilir — ve plan bu haritaya oturur. Tesis kurallarınız bizim çalışma talimatımız olur.",
            },
            {
                soru: "Havalimanına yakın sahamız güvenlik bölgesinde; ek prosedür gerekir mi?",
                cevap:
                    "Sahanın statüsüne göre değişir ve keşifte netleştirilir: güvenlik alanına komşu tesislerde giriş kayıtları, araç-personel bildirimleri ve bazı durumlarda yükseklik çalışması bildirimleri gerekebilir. Bu süreçleri tesis yönetiminizle birlikte yürütürüz; belge setimiz (operatör, makine, sigorta) bildirim formatlarına hazırdır. Planlama açısından tek etkisi süredir: prosedürlü sahalarda ilk iş, bildirim payıyla takvimlenir ve sonraki işler kurulu düzen üzerinden hızlanır.",
            },
            {
                soru: "Marina yakınındaki restoranımızın tabela ve tente işi var; sahil kalabalığında bu nasıl yapılır?",
                cevap:
                    "Saat ve alan yönetimiyle: sahil bandının yaya yoğunluğu sabah erken saatlerde düşüktür ve kısa işler bu dilime yazılır, çalışma alanı bariyerle net ayrılır, bom hareketi yaya aksının üzerinden geçmeyecek biçimde planlanır. Deniz kenarı olduğu için rüzgâr ölçümü kısa işte bile yapılır — tente gibi geniş yüzeyli malzeme, yelken etkisi taşır. Bu tip işler bölge turuna dizildiğinde maliyet de düşer; sahil aksındaki diğer işletmelerle aynı sabaha denk gelmek en ekonomik senaryodur.",
            },
            {
                soru: "Üretim hattımız hafta içi durmuyor; çatı işini nasıl planlarız?",
                cevap:
                    "Hat akışını kesmeyen üç seçenek vardır: hafta sonu bloğu (en yaygın), günlük vardiya araları (kısa kalemler için) veya hattın planlı bakım duruşuyla eşzamanlı çalışma (en verimli). Çatı işinin niteliğine göre seçim yapılır — uzun süreli kaplama işi hafta sonu bloklarına, kısa tesisat kalemleri vardiya aralarına uyar. Dış çatı çalışmasında hava koşulu payı takvime eklenir. Bakım duruş takviminizi paylaşırsanız, çatı işini o pencereye kilitleyip üretim kaybını sıfırlarız.",
            },
            {
                soru: "Farklı tarihlerde forklift, makaslı ve eklemli gerekecek; toplu anlaşma mümkün mü?",
                cevap:
                    "Mümkün ve önerilen budur: dönem boyunca çıkacak ihtiyaçlar (tip, tahmini süre, tahmini tarih) kabaca listelenir, birim şartlar tek çerçevede bağlanır ve her makine kendi tarihinde tek bildirimle gelir. Çerçevenin size getirisi üçlüdür: fiyat öngörüsü, öncelikli rezervasyon ve tek muhatap. Bize getirisi ise planlamadır — bölge parkı sizin dönem ihtiyacınızı bilerek yönetilir. Tahmin tutmazsa sorun değil; çerçeve, taahhüt değil öncelik düzenidir ve kullanmadığınız kalem fatura üretmez.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Sabiha Gökçen Havalimanı komşuluğu, Kurtköy teknoloji-sanayi aksı ve sahil-marina dokusu kamuya açık bilgidir; pencere disiplini ve çerçeve modeli firma pratiğidir.",
    },

    "bolge:gebze": {
        h1: "Gebze'de Manlift, Forklift ve Platform Kiralama",
        giris:
            "Gebze, İstanbul ile Kocaeli arasındaki sanayi kuşağının ağırlık merkezidir: D-100 ve TEM'in taşıdığı çift otoyol aksı, çevresinde organize sanayi bölgeleri, serbest bölge ve Türkiye'nin en yoğun lojistik depo stoklarından birini toplamıştır. Bu yoğunluk, ekipman kiralamada kendine özgü bir pazar yaratır: antrepo ve dağıtım merkezlerinin bitmeyen iç işleri, üretim tesislerinin bakım-yatırım kalemleri, yeni depo inşaatlarının şantiye dönemi ihtiyaçları ve hepsinin ortasında kesintisiz akan ağır nakliye trafiği. Hub modelimizin doğu kanadı bu kuşağa hizmet için konumlanmıştır; İstanbul içinden çıkıp trafik dalgasıyla boğuşan sevkiyat yerine, kuşağın kendi içinden kısa mesafeli teslimat — Gebze ölçeğinde farkı yaratan, makineden önce bu coğrafi kurgudur.",
        maddeler: [
            {
                baslik: "Dağıtım merkezlerinde yüksek raf işleri",
                metin:
                    "Modern dağıtım merkezlerinin raf sistemleri 10-12 metre bandına uzanır ve bu kotta süren işler — raf montaj ve revizyonu, aydınlatma armatürleri, sprinkler hatları, sensör ve kamera sistemleri — akülü makaslı sınıfın sahasıdır. Dar koridorlu sistemlerde makine genişliği koridor ölçüsüyle eşleştirilir; epoksi zeminlerde iz bırakmayan lastik standarttır. Depo operasyonu sürerken çalışılacaksa koridor bazlı kapama planı kurulur ve iş, operasyonun düşük tempolu saatlerine dizilir.",
            },
            {
                baslik: "Üretim tesislerinde bakım ve yatırım kalemleri",
                metin:
                    "Kuşaktaki fabrikaların ekipman talebi iki karakterde gelir: rutin bakım (vinç yolu kontrolleri, çatı altı tesisat, aydınlatma yenileme) ve yatırım projeleri (yeni hat montajı, makine yerleşimi, hol genişletme). Bakım tarafı kısa-tekrarlı kiralamayla, yatırım tarafı proje süreli blok kiralamayla döner. Yatırım projelerinde platform ve forklift genellikle birlikte çalışır — hat parçaları forkliftle taşınır, bağlantı-hizalama platformdan yapılır — ve iki makinenin senkron planı iş süresini belirgin kısaltır.",
            },
            {
                baslik: "Yeni depo inşaatlarında şantiye dönemi",
                metin:
                    "Bölgede depo yapımı süreklidir ve şantiye evresi kendi ekipman profilini ister: çelik konstrüksiyon montajında yüksek erişimli dizel eklemliler, panel-çatı kaplamada iki makine ile senkron çalışma, saha altyapısında telehandler. Stabilize saha yollarında arazi tipi şasi ve dolgu lastik esastır. Yapı tamamlanıp zemin atıldıktan sonra ekipman karması akülü sınıfa evrilir; tek projede bu geçişin planlı yönetimi, gereksiz makine değişim maliyetini önler.",
            },
            {
                baslik: "Çift otoyol aksında nakliye planlaması",
                metin:
                    "D-100 ve TEM, kuşağın iki ana damarıdır ve ikisinin de yoğun saatleri vardır; makine sevkiyatı bu ritmi okuyarak planlanır. Kuşak içi kısa mesafeler saatten bağımsız rahat akar — asıl planlama, İstanbul yönünden veya yönüne yapılan geçişlerde gerekir ve bu geçişler mümkünse taleple değil önceden konumlanmayla çözülür: makine, işin çıkacağı bölgenin parkında zaten bekliyor olur. Hub modelinin özü budur; sevkiyat sorunu, sevkiyat başlamadan çözülür.",
            },
            {
                baslik: "OSB ve serbest bölge giriş düzenleri",
                metin:
                    "Kuşaktaki organize bölgelerin ve serbest bölgenin giriş prosedürleri birbirinden farklıdır: araç kaydı, personel bildirimi, bazı bölgelerde ekipman evrak kontrolü. Bu düzenler bilinmeden yapılan sevkiyat, kapıda saat kaybeder. Düzenli çalıştığımız bölgelerin prosedürleri kayıtlıdır ve yeni tesise ilk sevkiyat, giriş sürecinin önden kapatılmasıyla planlanır. Serbest bölge işlerinde ekipmanın giriş-çıkış kayıtları ayrıca titiz tutulur; bölge mevzuatının gereği budur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gebze kuşağında iş ailesi ve kiralama modeli tablosu",
                paragraflar: [
                    "Kuşağın üç ana iş ailesi, uygun kiralama modeli ve tipik ekipman düzeni aşağıdadır.",
                ],
                tablo: {
                    basliklar: ["İş ailesi", "Kiralama modeli", "Tipik ekipman", "Planlama anahtarı"],
                    satirlar: [
                        ["Depo içi rutin işler", "Günlük-haftalık", "Akülü makaslı", "Operasyon saatleri"],
                        ["Fabrika bakım kalemleri", "Kısa-tekrarlı", "Makaslı + eklemli", "Vardiya-duruş takvimi"],
                        ["Yatırım-hat montajı", "Proje süreli blok", "Platform + forklift senkron", "Proje fazları"],
                        ["Depo inşaatı", "Evre bazlı", "Dizel eklemli + telehandler", "Kaba-ince geçişi"],
                        ["Serbest bölge işleri", "İşe göre", "Tip işe göre", "Giriş-çıkış kayıtları"],
                    ],
                },
            },
            {
                baslik: "Depo yoğunluğunun yarattığı planlama fırsatı",
                paragraflar: [
                    "Aynı aksta onlarca deponun sıralandığı bir coğrafyada, tek tek tesislere tekil sevkiyat yapmak israftır. Düzenimiz bunun tersini kurar: aks bazlı günler tanımlanır, aynı gün aynı akstaki birden fazla tesisin işleri sıraya dizilir ve makine gün boyunca kısa mesafelerle tesisleri gezer. Tesis yöneticileri açısından pratik sonuç şudur: tarih esnekliği tanınan işler belirgin ucuzlar, sabit tarihli işler ise turun çapası olarak tam saatinde yapılır.",
                    "Bu düzenin bir üst versiyonu, komşu tesislerin ortak dönemsel planıdır: aynı sitede veya aynı cadde üzerindeki depoların yıllık bakım kalemlerini (aydınlatma turu, sprinkler kontrolü, kapı-rampa bakımı) ortak haftalara toplamak, kuşak ölçeğinde en düşük birim maliyeti üretir.",
                ],
            },
            {
                baslik: "Kurumsal tedarik zincirine eklemlenme",
                paragraflar: [
                    "Kuşaktaki büyük tesislerin çoğu, tedarikçilerini kurumsal süreçlerle yönetir: satın alma onayları, sözleşme şartları, İSG ön değerlendirmeleri ve performans takibi. Bu süreçlere hazır olmak, kuşakta çalışmanın giriş biletidir — belge setinin güncelliği, sigorta kapsamlarının netliği, operatör yeterliliklerinin kayıtlılığı ve faturalama düzeninin kurumsal formatlara uyumu. Tedarikçi değerlendirme formlarında istenen verilerin hazır dosyada tutulması, onay süreçlerini haftalardan günlere indirir.",
                    "Uzun vadeli hedefimiz her tesiste 'onaylı tedarikçi' statüsüdür: bir kez kurulan kayıt, sonraki her işi tek sipariş satırına indirger ve iki tarafın da işlem maliyeti erir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Depomuz 7/24 çalışıyor; raf aydınlatması nasıl yenilenir?",
                cevap:
                    "Koridor bazlı kapama planıyla: tüm depo durmaz, yalnızca çalışılan koridor geçici kapatılır ve operasyon komşu koridorlardan akmaya devam eder. İş, operasyonunuzun en düşük tempolu saatlerine (tesise göre gece veya sabah erken) yazılır, akülü makaslı sessiz çalışır ve her koridor bittiğinde anında operasyona iade edilir. WMS-vardiya yöneticinizle kurulan sıra planı, hangi koridorun hangi gece alınacağını haftalık netleştirir. Bu modelle büyük depolarda aydınlatma yenileme, operasyon kaybı sıfırla tamamlanır.",
            },
            {
                soru: "Yeni hat montajımız altı hafta sürecek; platform ve forklifti ayrı ayrı mı kiralamalıyız?",
                cevap:
                    "Birlikte, tek proje bloğunda kiralamak hem ucuz hem verimlidir: iki makine aynı sözleşmede, proje süresine blok fiyatla bağlanır ve senkron çalışma planı kurulur — forklift hat parçasını konuma taşır, platform bağlantı-hizalama işini alır, sıra çakışmaları önden çizilir. Altı haftalık blokta birim maliyet, parça parça günlük kiralamanın belirgin altındadır. Proje uzarsa uzatma şartları baştan bellidir; kısalırsa erken iade düzenlemesi uygulanır. Montaj programınızla plan çıkaralım.",
            },
            {
                soru: "Serbest bölgedeki tesisimize makine sokmak sorun olur mu?",
                cevap:
                    "Sorun olmaz ama süreç ister: serbest bölgeye giren ekipman kayıt altına alınır, giriş-çıkış belgeleri düzenlenir ve kalış süresi izlenir — bu bizim tarafımızdan yürütülen rutin bir süreçtir ve mevzuata uygun dosyalanır. Sizin tarafınızda gereken, tesis yetkilinizin bölge yönetimiyle giriş onayını başlatmasıdır. İlk işte süreç payı takvime eklenir; kayıt düzeni kurulduktan sonra tekrar sevkiyatlar hızlanır. Bölge deneyimimiz olduğu için evrak seti formatlara hazırdır.",
            },
            {
                soru: "Çelik konstrüksiyon depomuz yükseliyor; montaj için kaç makine gerekir?",
                cevap:
                    "Tipik çelik montaj düzeni iki yüksek erişimli eklemli ile kurulur: kiriş-aşık bağlantılarında iki nokta eş zamanlı tutulur ve montaj hızı tek makineli düzenin çok üzerine çıkar; panel-kaplama evresinde de aynı çift, cephe hattında senkron ilerler. Saha beslemesi için üçüncü ekipman olarak telehandler eklenir. Kesin sayı, yapı ölçüsü ve montaj programınıza bağlıdır — proje çiziminizle keşif, makine sayısını ve süre tahminini netleştirir. Stabilize saha yollarınızın durumu da bu keşfin parçasıdır.",
            },
            {
                soru: "İstanbul'dan mı geliyorsunuz? Trafik teslimatı geciktirir mi?",
                cevap:
                    "Hayır — modelin özü tam olarak bu soruya cevaptır: Gebze kuşağına hizmet, İstanbul içinden yola çıkan araçlarla değil, kuşağın kendi bölge parkından yapılır. Kuşak içi mesafeler kısadır ve otoyol dalgalanmasından görece bağımsızdır; teslim saatleri bu yüzden dar aralıkla verilebilir. İstanbul yakalarıyla kuşak arasında makine kaydırma gerektiğinde bu geçişler gece-erken sabah pencerelerinde, talep gelmeden önce yapılır. Sizin gördüğünüz sonuç, saatinde kapınızda duran makinedir.",
            },
            {
                soru: "Tedarikçi onay sürecimiz uzun; bu süreçte işlerimiz nasıl yürür?",
                cevap:
                    "İki paralel hatla: onay süreci için istenen belgeler (sigorta, İSG, operatör yeterlilikleri, referanslar) ilk gün eksiksiz teslim edilir ve süreç sizin tarafınızda beklemeden ilerler; bu sırada acil işleriniz, kurumunuzun geçici tedarikçi veya tekil sipariş prosedürü üzerinden karşılanır — çoğu kurumsal satın alma sisteminde bu esneklik vardır. Onay tamamlandığında geçmiş işler de kayda bağlanır. Değerlendirme formlarınızı doldurmak bizim için rutindir; süreci uzatan taraf olmayız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Gebze'nin D-100/TEM aksındaki sanayi-lojistik yoğunluğu ve serbest bölge varlığı kamuya açık bilgidir; koridor kapama, senkron montaj ve aks günü modelleri firma pratiğidir.",
    },

    "bolge:gosb": {
        h1: "GOSB'de Platform ve Manlift Kiralama",
        giris:
            "Gebze Organize Sanayi Bölgesi, sanayi kuşağının planlı ve kurumsal yüzüdür: geniş parseller üzerinde modern üretim tesisleri, düzenli iç yol ağı, tanımlı altyapı ve ağırlıklı olarak kurumsal ölçekte firmalar. Bu profil, ekipman kiralamayı da kendine benzetir — burada iş, telefonla çağrılan makineden çok, planlı bakım takvimlerine, yatırım projelerine ve tedarikçi yönetim sistemlerine eklemlenmiş bir hizmet olarak yürür. Tesisler yüksek tavanlı üretim holleri, otomasyon hatları ve nitelikli teknik kadrolarla çalışır; ekipmandan bekledikleri de aynı standarttır: bakımlı makine, belgeli operatör, tanımlı süreç. Hub modelimiz GOSB'e iki şey taşır: bölge parkından kısa mesafeli hızlı sevkiyat ve kurumsal tedarik süreçlerinin gerektirdiği evrak-kayıt olgunluğu.",
        maddeler: [
            {
                baslik: "Yüksek tavanlı üretim hollerinde erişim",
                metin:
                    "Modern üretim hollerinin tavan bandı, vinç yolları, havalandırma santralleri, aydınlatma hatları ve yangın algılama sistemlerini taşır; bu katmana erişim akülü eklemli ve makaslı platformlarla sağlanır. Hol içinde çalışmanın belirleyicisi üretim düzenidir: hat üstü kalemler duruş pencerelerine, hat dışı kalemler üretim sürerken ayrılmış koridorlara yazılır. Otomasyon ekipmanının hassasiyeti, makine geçiş rotalarının tesis mühendisliğiyle birlikte çizilmesini gerektirir.",
            },
            {
                baslik: "Planlı bakım takvimlerine eklemlenme",
                metin:
                    "Kurumsal tesislerin bakımı takvimlidir: yıllık duruşlar, dönemsel kontroller, mevsimsel hazırlıklar. Ekipman tedariki bu takvime aylar öncesinden bağlanır — duruş haftasında hangi makinelerin hangi hollerde olacağı, hangi ekiplerin hangi sırayla çalışacağı önceden planlanır ve duruşun her saati doludur. Bizim rolümüz bu planın ekipman ayağını garanti etmektir: rezervasyon kesindir, yedek makine payı tanımlıdır ve duruş sabahı park sahada hazırdır.",
            },
            {
                baslik: "Cephe, çatı ve saha altyapısı işleri",
                metin:
                    "Geniş parselli tesislerin dış kalemleri kendi ölçeğinde gelir: uzun fabrika cepheleri, geniş çatı yüzeylerinin kenar-baca-ışıklık hatları, saha aydınlatma direkleri ve çevre güvenlik sistemleri. Dış işlerde dizel eklemli ve teleskopik sınıf devrededir; cephe hattında kademeli konum değiştiren makine düzeni uzun yüzeylerde verimi belirler. Rüzgâr ölçümü açık sahada standarttır ve geniş malzeme taşınan kalemler sakin pencerelere planlanır.",
            },
            {
                baslik: "Tedarikçi yönetim sistemleriyle uyum",
                metin:
                    "GOSB ölçeğindeki firmalar tedarikçilerini sistemle yönetir: onay süreçleri, İSG ön koşulları, saha giriş eğitimleri ve performans skorları. Bu sistemlere uyum, hizmetin görünmez ama belirleyici katmanıdır — belge setinin formatlara hazırlığı, operatörlerin tesis giriş eğitimlerine katılımı, iş izin sistemlerinin (yüksekte çalışma, sıcak iş) prosedürlerine hâkimiyet. Sistemle uyumlu tedarikçi, kurumsal tesiste hız demektir; uyumsuz tedarikçi kapıda bekler.",
            },
            {
                baslik: "Proje yatırımlarında dönemsel ekipman parkı",
                metin:
                    "Tesis büyütme, yeni hat kurulumu ve otomasyon yatırımları, aylar süren proje dönemleri boyunca çok makineli park ister: montaj ekiplerinin platformları, malzeme akışının forkliftleri, dış saha işlerinin dizel sınıfı. Proje süreli blok kiralama bu dönemlerin modelidir — park, proje fazlarına göre büyür ve küçülür, faz geçişlerinde makine değişimi planlıdır ve tek sözleşme tüm parkı yönetir. Proje yöneticisinin muhatabı tektir; ekipman koordinasyon yükü bizim tarafımızda kalır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "GOSB tesislerinde iş kalemi ve süreç tablosu",
                paragraflar: [
                    "Kurumsal tesis işlerinin tipik kalemleri, süreç gereksinimleri ve ekipman düzeni aşağıdadır. Süreç sütunu, bu bölgede takvimin gerçek belirleyicisidir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Süreç gereksinimi", "Ekipman", "Zamanlama"],
                    satirlar: [
                        ["Hol içi tavan katmanı", "İş izni + rota onayı", "Akülü eklemli/makaslı", "Duruş veya ayrılmış koridor"],
                        ["Yıllık duruş paketi", "Aylar önceden rezervasyon", "Çok makineli park", "Duruş haftası"],
                        ["Cephe-çatı kalemleri", "Yüksekte çalışma izni", "Dizel eklemli/teleskopik", "Hava penceresi"],
                        ["Saha altyapısı", "Saha giriş eğitimi", "Dizel sınıf + telehandler", "Üretimden bağımsız"],
                        ["Yatırım projeleri", "Tedarikçi onayı + blok plan", "Proje parkı", "Faz takvimi"],
                    ],
                },
            },
            {
                baslik: "Duruş haftası: yılın en planlı beş günü",
                paragraflar: [
                    "Kurumsal tesisin yıllık duruşu, ekipman tedarikçisi için yılın en kritik sınavıdır: onlarca iş kalemi, birden fazla ekip ve sayılı gün. Hazırlığımız duruştan haftalar önce başlar — kalem listesi üzerinden makine-saat planı çıkarılır, hangi holde hangi makinenin hangi ekiple çalışacağı saat bazında çizilir, yedek makine duruş boyunca bölge parkında rezerve tutulur ve arıza senaryosunun cevabı önceden bellidir. Duruş sabahı park yerleşmiş, operatörler brifingden geçmiş olur.",
                    "Bu hazırlığın ölçülebilir karşılığı, duruşun plan dışı uzamamasıdır. Üretim kaybının saatlik maliyeti düşünüldüğünde, ekipman planındaki titizlik duruş bütçesinin en ucuz sigortasıdır.",
                ],
            },
            {
                baslik: "Uzun dönemli tesis ortaklığı modeli",
                paragraflar: [
                    "GOSB profilindeki tesislerle en verimli çalışma biçimi, işlem bazlı değil dönem bazlı ilişkidir: yıllık çerçeve içinde rutin bakım kalemleri, duruş paketi ve plansız ihtiyaçlar tek düzende yönetilir. Çerçevenin tesise getirisi net fiyat öngörüsü, öncelikli makine erişimi ve sıfırlanmış işlem maliyetidir; bize getirisi ise öngörülebilir talep planıdır — bölge parkının kompozisyonu, çerçeveli tesislerin yıllık ritmine göre kurulur.",
                    "Bu karşılıklılık, hub modelinin kurumsal ayağıdır: park yatırımı talebi bilinen bölgeye yapılır ve tesis, ihtiyaç anında makineyi beklemez. İlişki derinleştikçe keşif maliyeti de erir — tesisin holleri, prosedürleri ve ekipleri bilinir hâle gelir ve her yeni iş, kurulu bilginin üzerine eklenir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yıllık duruşumuz eylülde; ekipman rezervasyonunu ne zaman yapmalıyız?",
                cevap:
                    "Kalem listeniz netleştiği an — ideal olarak duruştan en az birkaç ay önce: erken rezervasyon, istediğiniz makine tiplerinin duruş haftanıza kilitlenmesini ve yedek makine payının ayrılmasını garantiler. Duruş dönemleri bölgede çakışabilir (birçok tesis benzer ayları seçer) ve geç kalan talepler park kısıtına takılabilir. Rezervasyonla birlikte makine-saat planını da çıkarırız: hangi kalem hangi gün, hangi holde, hangi makineyle. Bu plan, duruş programınızın ekipman ayağını baştan kapatır.",
            },
            {
                soru: "Üretimi durdurmadan tavan aydınlatmasını LED'e çevirebilir miyiz?",
                cevap:
                    "Çoğu holde evet — koridor bazlı ilerlemeyle: üretim hattının üzerine denk gelmeyen bölümler, hat çalışırken ayrılmış koridorlarda dönüştürülür; hat üstü armatürler ise kısa duruş pencerelerine (vardiya arası, hafta sonu) yazılır. Akülü platformlar emisyonsuz ve sessiz çalıştığı için üretim ortamında sorun üretmez. Kritik hazırlık rota onayıdır: makinenin hol içi geçiş yolu, otomasyon ekipmanına ve malzeme akışına çarpmayacak biçimde tesis mühendisliğinizle çizilir. Armatür sayısı ve hol planıyla süre tahmini verilir.",
            },
            {
                soru: "İSG şartlarımız sıkı; operatörleriniz tesis eğitimlerine katılır mı?",
                cevap:
                    "Katılır — bu bizim için ek yük değil standart süreçtir: operatörler tesisinizin saha giriş eğitimini alır, iş izin sistemlerinize (yüksekte çalışma, sıcak iş, kapalı alan) uygun çalışır ve tesis İSG biriminizin denetimlerine açıktır. Belgeler (operatör yeterlilikleri, makine periyodik kontrolleri, sigortalar) formatlarınıza uygun dosyada teslim edilir. Sıkı İSG şartı bizim açımızdan olumlu göstergedir: kurallı tesiste iş, belirsizlik olmadan yürür ve iki tarafın standardı birbirini yükseltir.",
            },
            {
                soru: "Cephemiz 200 metreden uzun; boya-bakım işi kaç gün sürer?",
                cevap:
                    "Süre üç değişkenden çıkar: cephe yüksekliği ve yüzey işlem tipi, kullanılacak makine düzeni (tek makine kademeli mi, iki makine senkron mu) ve hava penceresi payı. Uzun cephelerde iki makineli senkron düzen, süreyi tek makineye göre neredeyse yarılar ve toplam maliyeti çoğu zaman düşürür — makine gideri artar ama ekip günü ve iskele-hazırlık tekrarı azalır. Rüzgâr ve yağış payı mevsime göre eklenir. Cephe ölçüleri ve işlem detayıyla keşif, gün sayısını ve iki düzenin maliyet karşılaştırmasını netleştirir.",
            },
            {
                soru: "Yeni hat yatırımımız sekiz ay sürecek; bu süreçte ekipman ihtiyacı sürekli değişecek. Nasıl yönetilir?",
                cevap:
                    "Proje parkı modeliyle: sözleşme, sabit makine listesi yerine faz bazlı esnek park tanımlar — temel-altyapı fazında telehandler ve dizel sınıf, montaj fazında platform yoğun park, devreye alma fazında küçülmüş akülü çekirdek. Faz geçişlerinde makine değişimi planlı yapılır, gereksiz makine sahada bekletilmez ve park kompozisyonu proje yöneticinizle aylık gözden geçirilir. Tek sözleşme, tek muhatap, değişken park: sekiz aylık projenin ekipman koordinasyon yükü bizim tarafta kalır, sizin tarafta tek sipariş satırı kalır.",
            },
            {
                soru: "Tesisimizde daha önce kiralık makineyle küçük bir hasar yaşandı; sorumluluk düzeniniz nasıl?",
                cevap:
                    "Baştan yazılı netlikle: teslimatta makine, fotoğraflı durum kaydıyla devredilir; operatörlü işlerde operasyon sorumluluğu bizim operatörümüzde ve sigorta kapsamındadır; operatörsüz kiralamada kullanım sorumluluğu ve kapsam ayrımı sözleşmede kalem kalem tanımlıdır. Tesis içi hasar senaryoları (ürün, ekipman, altyapı) sigorta kapsamlarıyla eşleştirilir ve kapsam dışı kalan gri alan bırakılmaz. Hasar anında süreç de tanımlıdır: tutanak, fotoğraf, bildirim, çözüm takvimi. Geçmiş deneyiminizdeki belirsizlik, doğru sözleşmeyle bir daha yaşanmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. GOSB'nin planlı-kurumsal tesis profili kamuya açık bilgidir; duruş hazırlığı, proje parkı ve çerçeve ortaklık modelleri firma pratiğidir.",
    },

    "bolge:tosb": {
        h1: "TOSB'de Manlift, Platform ve Forklift Kiralama",
        giris:
            "TOSB, otomotiv yan sanayine adanmış ihtisas organize sanayi bölgesi olarak kuşağın en özel karakterli adreslerinden biridir: burada üretim, ana sanayinin tam zamanında teslimat disiplinine kilitlidir ve bu disiplin, tesis içindeki her faaliyeti — ekipman kiralamayı da — kendi kurallarına bağlar. Pres hollerinden kalıphanelere, kaynak-montaj hatlarından boyahane çevrelerine uzanan üretim ortamları, hem hassas hem duraksız çalışır; ekipman ihtiyacı da bu ortamların bakım pencerelerine, model geçişi dönemlerine ve denetim hazırlıklarına göre şekillenir. Bizim buradaki işimiz, otomotiv temposunun dilini konuşan bir tedarik düzeni sunmaktır: dakik teslimat, vardiya planına saygılı çalışma, belgesi eksiksiz operatör ve üretimi hiçbir koşulda riske atmayan iş kurgusu.",
        maddeler: [
            {
                baslik: "Üretim hattı üzerinde çalışmanın kuralları",
                metin:
                    "Otomotiv tedarik zincirinde hat duruşunun maliyeti dakikayla ölçülür ve hat üstü ekipman çalışması buna göre kurgulanır: iş, planlı duruş pencerelerine veya vardiya boşluklarına yazılır, makine ve ekip pencere açılmadan önce konumlanmış olur, işin pencereye sığmayan kısmı zorlanmaz — bir sonraki pencereye bölünür. Hat çevresindeki robotik ve konveyör sistemleri, makine manevra planının sabit kısıtlarıdır ve rota, üretim mühendisliğiyle birlikte çizilir.",
            },
            {
                baslik: "Pres ve kalıp hollerinde ağır ortam işleri",
                metin:
                    "Pres holleri yüksek tavanlı, ağır trafikli ve titreşimli ortamlardır: vinç yolları, enerji hatları ve havalandırma sistemleri üst katmanda yoğunlaşır. Bu katmana erişimde akülü eklemli platformlar, pres duruş pencerelerinde çalışır; zemindeki kalıp trafiğiyle çakışma, saha sorumlusuyla kurulan sıra planıyla önlenir. Kalıp bakım alanlarında forklift ihtiyacı da sık gelir — ağır kalıp taşımada tonaj ve ağırlık merkezi doğrulaması, bu ortamın vazgeçilmez disiplinidir.",
            },
            {
                baslik: "Boyahane ve hassas proses çevreleri",
                metin:
                    "Boyahane çevresi, ekipman çalışmasının en kurallı sahasıdır: toz taşınımı boya kalitesini doğrudan bozar, bazı bölümler patlayıcı ortam sınıfındadır ve giriş-çıkış hijyen prosedürlerine bağlıdır. Bu çevrelerdeki işler tesis prosedürünün içinden planlanır — uygun sınıf ekipman seçimi, tekerlek temizliği, örtü-koruma önlemleri ve prosesin durduğu pencereler. Prosedür maliyeti işin süresine yansır ve baştan şeffaf konuşulur; boyahane çevresinde kestirme yol yoktur.",
            },
            {
                baslik: "Model geçişi ve devreye alma dönemleri",
                metin:
                    "Yan sanayi tesislerinin en yoğun ekipman dönemleri model geçişleridir: hat revizyonları, yeni fikstür montajları, robot hücresi kurulumları ve deneme üretim hazırlıkları kısa takvime sıkışır. Bu dönemlerde çok makineli park kısa süreli ama yoğun kullanılır — platformlar montaj noktalarında, forkliftler ekipman taşımada eş zamanlı çalışır. Geçiş takviminin önceden paylaşılması, parkın o haftalara rezerve edilmesini sağlar; otomotiv takvimi kaymaya toleranssızdır ve rezervasyon bu gerçeğe göre kesin tutulur.",
            },
            {
                baslik: "Denetim ve müşteri ziyareti hazırlıkları",
                metin:
                    "Ana sanayi denetimleri ve müşteri ziyaretleri öncesinde tesisler görsel ve teknik hazırlık yapar: aydınlatma tamamlama, tabela-işaretleme yenileme, yüksek nokta temizlik erişimi ve saha düzenlemeleri. Bu işler kısa sürelidir ama tarihi kesindir — ziyaret günü ertelenemez. Kesin tarihli kısa işler için hub yakınlığı belirleyicidir: makine bölge parkından günübirlik gelir, iş biter, saha ziyarete hazır teslim edilir. Hazırlık kalemlerini tek güne toplamak, bu işlerin standart ekonomisidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "TOSB tesislerinde ortam tipi ve çalışma kuralı tablosu",
                paragraflar: [
                    "Otomotiv yan sanayi tesislerindeki ortam tipleri ve her birinin ekipman çalışma kuralı aşağıdadır. Kural sütunu pazarlık konusu değildir; plan bu kuralların içinde kurulur.",
                ],
                tablo: {
                    basliklar: ["Ortam", "Belirleyici kural", "Ekipman", "Pencere"],
                    satirlar: [
                        ["Montaj hattı üstü", "Duruş penceresi zorunlu", "Akülü eklemli", "Planlı duruş / vardiya arası"],
                        ["Pres holü", "Kalıp trafiğiyle sıra planı", "Akülü platform + forklift", "Pres duruşları"],
                        ["Boyahane çevresi", "Toz + Ex-proof prosedürü", "Tesis onaylı sınıf", "Proses duruşu"],
                        ["Kalıphane", "Ağır yük disiplini", "Yüksek tonaj forklift", "Gün içi planlı"],
                        ["Dış saha-çatı", "Hava koşulu", "Dizel eklemli", "Üretimden bağımsız"],
                    ],
                },
            },
            {
                baslik: "Tam zamanında teslimatın ekipman karşılığı",
                paragraflar: [
                    "Otomotiv zincirinde çalışan tesis, tedarikçisinden kendi disiplinini bekler ve biz bu beklentiyi hizmetin tanımı sayarız: teslim saati dakikayla verilir ve tutulur, operatör vardiya başlamadan sahada olur, makine arızasında değişim süresi tanımlıdır ve pencere kaybettirmez, iş bitiminde saha üretime hazır teslim edilir. Bu standardın arkasındaki mekanizma bölge parkıdır — kısa mesafe, dar zaman aralığına gerçekçi taahhüt vermeyi mümkün kılar.",
                    "Aynı disiplinin kayıt yüzü de vardır: her işin saat bazlı kaydı tutulur ve tesisin kendi raporlama sistemine veri sağlanabilir. Otomotiv kültüründe ölçülmeyen iş yapılmamış sayılır; ekipman hizmetinin de ölçülebilir olması bu kültüre uyumun gereğidir.",
                ],
            },
            {
                baslik: "Vardiya düzenine gömülü çalışma planı",
                paragraflar: [
                    "Üç vardiyalı tesislerde ekipman işinin doğal yuvası vardiya geçiş boşlukları ve hafta sonu duruşlarıdır. Planlama bu yuvaları haftalık üretim programından okur: hangi hat hangi gece duruyor, hangi hafta sonu bakım var, hangi vardiya düşük tempolu. İş kalemleri bu haritaya dağıtılır ve büyük kalemler (tavan katmanı yenileme, hol aydınlatması) birden fazla pencereye bölünerek üretim kaybı sıfırda tutulur.",
                    "Bölünmüş çalışmanın koşulu, her pencerede işin güvenli bir ara noktada bırakılmasıdır: yarım kalan bağlantı, askıda malzeme veya kapatılmamış alan bırakılmaz. Pencere kapanırken saha, üretimin devralacağı temizlikte teslim edilir — bu kural, bölünmüş işin üretimle barışık yaşamasının tek yoludur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hattımız yılda iki kez planlı duruş yapıyor; tavan işlerini bu duruşlara nasıl sığdırırız?",
                cevap:
                    "Kalem-pencere eşleştirmesiyle: duruş öncesinde tavan katmanı işleri listelenir (aydınlatma, tesisat, havalandırma, vinç yolu), her kalemin makine-saat ihtiyacı çıkarılır ve duruş süresine sığan küme önceliklendirilir — sığmayan kalemler vardiya boşluklarına veya bir sonraki duruşa yazılır. Duruş sabahı makineler yerleşmiş, ekipler brifingli başlar; duruşun her saati iş üretir. Bu planlama duruştan haftalar önce yapılmalıdır; duruş takviminizi paylaştığınız an hazırlık başlar.",
            },
            {
                soru: "Boyahanemizin çevresinde aydınlatma yenilenecek; standart makineyle yapılabilir mi?",
                cevap:
                    "Bölümün sınıfına bağlıdır ve keşif bunu netleştirir: patlayıcı ortam sınıfındaki bölümlerde standart ekipman kullanılamaz ve iş, tesisinizin Ex-proof prosedürüne uygun çözümle planlanır; sınıf dışı çevre bölümlerde ise akülü platform, toz önlemleriyle (tekerlek temizliği, örtü-koruma, prosesin durduğu pencere) çalışabilir. Boya kalitesi riski nedeniyle bu çevrede aceleci iş kabul etmeyiz — prosedürün süresi neyse takvim odur ve bu netlik, boyahane sorumlunuzun da tercih ettiği dildir.",
            },
            {
                soru: "Model geçişimiz altı haftalık; bu dönemde kaç makine gerekeceğini şimdiden bilemiyoruz. Nasıl anlaşırız?",
                cevap:
                    "Esnek park rezervasyonuyla: geçiş takviminiz üzerinden tahmini park (örneğin çekirdek platformlar artı değişken forklift ihtiyacı) tanımlanır, çekirdek makineler döneme kesin rezerve edilir ve değişken kısım için bölge parkından öncelikli erişim hakkı bağlanır — ihtiyaç çıktığında makine kısa bildirimle gelir, çıkmazsa fatura üretmez. Otomotiv geçiş dönemlerinin belirsizliği bizim için bilinen bir çalışma koşuludur; model, kesinliği sizden istemek yerine esnekliği bizden vermek üzerine kuruludur.",
            },
            {
                soru: "Ana sanayi denetimimiz on gün sonra; birikmiş saha işlerini yetiştirebilir miyiz?",
                cevap:
                    "Yetiştirilir — kesin tarihli hazırlık işi bizim sık koştuğumuz parkurdur: kalem listesi (aydınlatma eksikleri, işaretleme, yüksek nokta temizliği, saha düzeni) hızla çıkarılır, işler bir-iki güne kümelenir ve makine bölge parkından günübirlik gelir. On günlük ufukta kritik olan başlama hızıdır; listeyi bugün paylaşırsanız plan yarın kurulur ve denetimden önce tamponlu bitirilir. Denetim gününe iş bırakmak riskli olduğundan, takvim her zaman en az bir gün yedekle kurulur.",
            },
            {
                soru: "Kalıp taşıma için forklift kiralayacağız; kalıplarımız çok ağır, neye dikkat etmeliyiz?",
                cevap:
                    "Üç doğrulamaya: kalıbın gerçek ağırlığı (etiket veya tartım — tahmin değil), ağırlık merkezinin konumu (kalıp geometrisi simetrik olmayabilir) ve taşıma yolu zemin kapasitesi. Bu üçü netleşince uygun tonaj ve çatal konfigürasyonu seçilir; sınırda kalan yüklerde bir üst tonaj tercih edilir çünkü yük tablosu ihlali otomotiv sahasında kabul edilemez risktir. Operatörlü kiralamada kalıp taşıma deneyimi olan operatör görevlendirilir. Kalıp listenizle (ağırlık-ölçü) keşif, makine seçimini kesinleştirir.",
            },
            {
                soru: "Gece vardiyasında çalışacaksınız; tesisimizin güvenlik ve kayıt düzeni gece de işliyor mu sizin tarafta?",
                cevap:
                    "İşler — gece işi, gündüz işinin ışığı kısılmış hâli değildir bizde ayrı bir prosedürdür: gece vardiyası operatörleri önceden bildirilir ve tesis giriş kayıtlarına işlenir, iş izinleri gece pencereleri için ayrıca alınır, saat bazlı iş kaydı gece de tutulur ve sabah vardiya devrine yazılı durum notu bırakılır. Tesis güvenlik biriminizin gece protokolü neyse ona uyulur. Gece işinin görünmez riski iletişim kopukluğudur; durum notu ve devir düzeni bu riski kapatır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. TOSB'nin otomotiv yan sanayi ihtisas OSB'si kimliği kamuya açık bilgidir; pencere-kalem eşleştirme, esnek park ve gece devir düzeni firma pratiğidir.",
    },

    "bolge:dilovasi": {
        h1: "Dilovası'nda Manlift, Telehandler ve Forklift Kiralama",
        giris:
            "Dilovası, sanayi kuşağının en ağır tonlu durağıdır: metal, kimya, boya ve enerji ağırlıklı tesislerin yoğunlaştığı organize sanayi bölgeleri, liman geri sahasıyla iç içe çalışır ve buradaki ekipman talebi, hafif kent işlerinin tam karşı kutbunda durur. Yüksek çelik konstrüksiyonlar, tank ve silo yapıları, ağır yük trafiği, tozlu ve zorlu saha zeminleri — bu koşullar makine seçimini dizel arazi sınıfına, yüksek tonaja ve dayanıklılığa çeker. Deniz yakınlığının korozyon etkisi ile sanayi ortamının toz-kimyasal yükü üst üste biner ve bakım disiplinini buradaki hizmetin merkezine koyar. Hub modelimizin bu aksdaki karşılığı nettir: ağır sanayinin plansız çıkan acil ihtiyaçlarına kısa mesafeden, sahanın dilini bilen ekipman ve operatörle cevap vermek.",
        maddeler: [
            {
                baslik: "Ağır sanayi tesislerinde yüksek kot erişimi",
                metin:
                    "Metal ve enerji tesislerinin dikey yapıları — çelik konstrüksiyon katmanları, boru köprüleri, tank-silo grupları, baca çevreleri — uzun erişimli dizel eklemli ve teleskopik manliftlerin sahasıdır. Bu yapılarda erişim geometrisi karmaşıktır: hedefe çoğu zaman düz hatla değil, boru ve konstrüksiyon engellerinin arasından ulaşılır ve eklemli bomun kırılımı burada belirleyici olur. Sıcak yüzeyler, buhar hatları ve enerji altyapısı, çalışma rotasının sabit kısıtları olarak keşifte haritalanır.",
            },
            {
                baslik: "Zorlu zeminlerde arazi sınıfı ekipman",
                metin:
                    "Bölge sahalarının zemini ekipmanı sınar: sıkıştırılmış dolgu, cüruf sahaları, ağır araç izleriyle bozulmuş beton ve yağış sonrası çamurlaşan açık stok alanları. Bu koşullarda arazi tipi dizel makineler, dört teker çekiş ve dolgu lastikle çalışır; telehandler, bozuk zeminde hem yük hem erişim işini tek gövdede toplar. Duruş noktası seçimi ve yük dağıtım plakası kullanımı, ağır sahada rutin değil hayati disiplindir — açık stok alanında devrilmenin telafisi yoktur.",
            },
            {
                baslik: "Kimya ve boya tesislerinde prosedürlü çalışma",
                metin:
                    "Bölgenin kimya ve boya tesisleri, ekipman çalışmasını izin sistemlerine bağlar: patlayıcı ortam sınıflandırması, sıcak iş prosedürleri, kişisel koruyucu gereksinimleri ve acil durum düzenleri. Bu tesislerde iş, prosedürün dışında değil içinde planlanır — hangi bölümde hangi sınıf ekipman, hangi izinle, hangi refakatle. Operatörlerimiz sanayi tesisi prosedür kültürüne alışkındır ve tesis İSG birimiyle kurulan ilk toplantı, işin gerçek başlangıç noktasıdır.",
            },
            {
                baslik: "Liman geri sahasında yük ve istif işleri",
                metin:
                    "Liman komşuluğu, bölgeye yoğun bir yük hareketi katar: konteyner geri sahası operasyonları, açık stok alanları, ağır malzeme elleçleme ve depolama tesisleri. Bu hatta forklift talebi yüksek tonaja, telehandler talebi uzatma-istif kombinasyonuna yoğunlaşır. Yük profili ağır ve düzensizdir (bobin, profil, kasa, big-bag) ve ataşman çeşitliliği — rulo tutucu, uzatma çatalı, kova — makine kadar önem taşır. İstif planlarında zemin kapasitesi ve devrilme güvenliği birlikte hesaplanır.",
            },
            {
                baslik: "Toz, kimyasal ve tuz üçgeninde bakım düzeni",
                metin:
                    "Dilovası sahalarında konaklayan makine, üç aşındırıcının kesişiminde çalışır: sanayi tozu filtreleri ve hareketli aksamı zorlar, kimyasal buhar boyayı ve contaları yıpratır, deniz yakınlığının tuzu metal yüzeyleri işler. Bakım düzeni bu üçgene göre kurulur — filtre değişim aralıkları kısalır, yağlama noktaları sık kontrol edilir, uzun konaklamalarda ara bakım sahada yapılır. Bu maliyet baştan fiyatlandırmaya yazılır; ağır sahada ucuz görünen bakımsız makine, en pahalı seçenektir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Dilovası sahalarında koşul ve ekipman eşleşme tablosu",
                paragraflar: [
                    "Ağır sanayi koşullarının ekipman seçimine etkisi aşağıdadır. Bu bölgede tablo sağdan sola okunmalıdır: önce koşul, sonra makine.",
                ],
                tablo: {
                    basliklar: ["Koşul", "Ekipman cevabı", "Ek önlem", "Tipik saha"],
                    satirlar: [
                        ["Engelli dikey erişim", "Dizel eklemli, uzun erişim", "Rota haritalama", "Çelik konstrüksiyon, boru köprüsü"],
                        ["Bozuk-yumuşak zemin", "Arazi tipi 4x4 + telehandler", "Yük dağıtım plakası", "Açık stok, dolgu saha"],
                        ["Ex-proof bölge", "Tesis onaylı sınıf", "İzin sistemi uyumu", "Kimya-boya tesisleri"],
                        ["Ağır-düzensiz yük", "Yüksek tonaj forklift", "Ataşman çeşitliliği", "Liman geri sahası"],
                        ["Toz-kimyasal-tuz", "Sıklaştırılmış bakım", "Saha içi ara bakım", "Tüm bölge konaklamaları"],
                    ],
                },
            },
            {
                baslik: "Ağır sahada operatör faktörü",
                paragraflar: [
                    "Bu bölgede makine kadar operatör de seçilir: ağır sanayi sahası, kent işinden farklı bir tecrübe ister — konstrüksiyon arasında bom yürütme, prosedürlü tesiste izin disiplini, ağır yükte tablo hassasiyeti ve zor zeminde duruş sezgisi. Operatör görevlendirmelerinde saha tipi esas alınır; ağır sanayi parkuruna, o parkurda pişmiş operatör gider. Operatörsüz kiralamada ise teslimat brifingi genişletilir: makinenin sahanıza özgü riskleri, sınırları ve günlük kontrol listesi ekibinize aktarılır.",
                    "Bu seçiciliğin nedeni tecrübeyle sabittir: ağır sahada küçük operatör hatası büyük sonuç doğurur ve doğru operatör, sahadaki en etkili güvenlik ekipmanıdır.",
                ],
            },
            {
                baslik: "Acil arıza müdahalesinde bölge parkının rolü",
                paragraflar: [
                    "Ağır sanayi tesislerinde plansız duruş pahalıdır ve arıza kaynaklı ekipman ihtiyacı saat toleransıyla gelir: bir konveyör hattının üst bağlantısı, bir tank vanasının erişimi, bir aydınlatma direğinin devrilme riski. Bölge parkının bu aksa yakınlığı, acil taleplerin gerçekçi saat sözüyle karşılanmasını sağlar — makine uzaktan yola çıkmaz, kuşağın içinden gelir. Acil müdahalede istenen üç bilgi standarttır: erişim kotu ve engel durumu, saha zemini, tesis giriş prosedürü.",
                    "Acil işin ikinci yarısı da planlıdır: müdahale biten iş, kalıcı çözüm gerektiriyorsa (tekrarlayan arıza, yapısal sorun) takip işi planlı pencereye yazılır ve aynı saha bilgisiyle, keşif tekrarına gerek kalmadan yürütülür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Çelik konstrüksiyonumuzun ara katmanındaki boru hattına erişim gerekiyor; düz bomlu makine ulaşamadı. Çözüm nedir?",
                cevap:
                    "Eklemli bomun kırılım kabiliyeti tam bu problem içindir: teleskopik düz hatta uzarken, eklemli bom konstrüksiyon elemanlarının üzerinden veya arasından kırılarak hedefe iner — ara katman, boru arkası ve engel gerisi erişimlerin standart çözümüdür. Keşifte erişim rotası üç boyutlu düşünülür: hangi açıklıktan girilecek, bom hangi noktada kırılacak, sepet hedefe hangi yönden yaklaşacak. Konstrüksiyon çiziminiz veya birkaç saha fotoğrafı, uygun erişim sınıfını ve makine konumunu netleştirir.",
            },
            {
                soru: "Sahamız yağmurdan sonra çamura dönüyor; makine çalışabilir mi?",
                cevap:
                    "Koşula göre evet, ama dürüst değerlendirmeyle: arazi tipi 4x4 makineler ve telehandler, çamurlu sahada ilerleyebilir; asıl soru ilerleme değil duruş güvenliğidir — yumuşamış zeminde yüksek kot çalışması, yük dağıtım plakasız yapılmaz ve plakayla bile şüpheli noktada çalışma reddedilir. Pratik öneri şudur: yağış sonrası kritik işleri bir-iki gün öteleyip zemini oturtmak, çoğu zaman plakalı zorlamadan hızlı sonuç verir. Acil işlerde saha fotoğrafıyla o günkü gerçek durum değerlendirilir ve karar birlikte verilir.",
            },
            {
                soru: "Tesisimiz Ex-proof bölge içeriyor; hangi işleri sizinle yapabiliriz?",
                cevap:
                    "Ayrımı birlikte çizeriz: patlayıcı ortam sınıfı dışındaki bölümlerde (idari yapılar, sınıf dışı holler, açık saha) standart dizel-akülü park tüm işleri karşılar; sınıflı bölümlerde ise iş, tesisinizin onayladığı ekipman ve prosedürle planlanır — gerektiğinde uygun sınıf ekipman tedariki araştırılır veya iş, prosesin durduğu ve bölgenin sınıf dışına alındığı bakım pencerelerine yazılır. Bu ikinci yol, pratikte en sık kullanılan çözümdür. Bölge sınıflandırma planınız keşfin ilk belgesidir.",
            },
            {
                soru: "Bobin ve profil istifi için forklift lazım; standart çatalla olur mu?",
                cevap:
                    "Çoğu zaman olmaz ve zorlamak tehlikelidir: bobin yükü rulo tutucu ataşman ister (çatalla taşınan bobin hem hasar görür hem kayma riski taşır), uzun profiller ise yük dengesine göre uzatma çatalı veya çift makine koordinasyonu gerektirebilir. Doğru kurgu yük listenizden çıkar: bobin çapı-ağırlığı, profil boyu-tonajı ve istif yüksekliği. Bu verilerle ataşman-makine eşleşmesi yapılır ve operatörlü kiralamada yük tipine alışkın operatör görevlendirilir. Ağır-düzensiz yükte ataşman, makinenin yarısıdır.",
            },
            {
                soru: "Gece tesisimizde acil bir durum çıkarsa ulaşabilir miyiz?",
                cevap:
                    "Acil hattımız bunun içindir: gece bildirilen talep, bölge parkının durumuna göre gerçekçi varış saatiyle cevaplanır ve ağır sanayi acilinde önceliklendirme uygulanır — güvenlik riski taşıyan durumlar (devrilme riski, askıda yük, kritik sistem arızası) sıranın başına alınır. Gece müdahalesinde tesisinizin gece giriş protokolü belirleyicidir; düzenli çalıştığımız tesislerde bu protokoller kayıtlı olduğundan gece girişi vakit kaybettirmez. İlk kez çalışacağımız tesislerde ise gündüz kurulan bir tanışma keşfi, gecenin sigortasıdır.",
            },
            {
                soru: "Uzun dönem kiralamada bakımı kim üstlenir? Sahamız makineyi hırpalıyor.",
                cevap:
                    "Periyodik bakım bizdedir ve ağır saha koşulu bakım planına baştan işlenir: filtre-yağlama aralıkları sahanıza göre kısaltılır, ara bakımlar tesisinizde yapılır ve bakım duruşları çalışma planınızla çakışmayacak saatlere yazılır. Kullanıcı tarafına düşen, günlük kontrol listesi ve anormallik bildirimidir — erken bildirilen küçük sorun, büyük duruşu önler. Hırpalayıcı saha gerçeği fiyatlandırmada şeffaf yer alır; karşılığında aldığınız taahhüt nettir: bakım kaynaklı sürpriz fatura ve uzun makine duruşu yaşamazsınız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Dilovası'nın metal-kimya-enerji ağırlıklı OSB dokusu ve liman geri sahası komşuluğu kamuya açık bilgidir; operatör eşleştirme, acil önceliklendirme ve bakım sıklaştırma düzenleri firma pratiğidir.",
    },

    "bolge:mahmutbey": {
        h1: "Mahmutbey'de Platform ve Forklift Kiralama",
        giris:
            "Mahmutbey, Avrupa yakasının kent içi lojistik ve tekstil kuşağının düğüm noktasında durur: TEM bağlantılarının kavşağındaki konumu, çevresine dağıtım depoları, tekstil-konfeksiyon işletmeleri ve toptan ticaret tesislerini toplamıştır. Bu doku, şehir dışı lojistik bölgelerinden önemli bir farkla ayrılır — burada depo, kentin içindedir: dar servis yolları, karışık araç-yaya trafiği, komşu parsellerle bitişik düzen ve günün büyük kısmında yüklü arterler. Ekipman operasyonu bu kent içi gerçeğe göre kurulur: sevkiyat saat penceresiyle planlanır, makine sahada verimli saatlere sıkıştırılır ve kısa mesafeli hub sevkiyatı, trafiğin çalınan zamanını geri kazandırır. Tekstil yükünün kendine özgü istif düzeni ile depo yapılarının yüksek raf işleri, buradaki makine karmasının iki ana eksenidir.",
        maddeler: [
            {
                baslik: "Kent içi depo kuşağında çalışma düzeni",
                metin:
                    "Mahmutbey aksındaki depolar, şehir dışındaki benzerlerinden daha sıkışık parsellerde çalışır: manevra alanları dar, rampa önleri kısa, komşu tesisle mesafe az. Makine operasyonu bu ölçülere göre seçilir — dar alanda dönebilen kompakt makaslılar, kısa şaseli forkliftler ve dikey platformlar öne çıkar. Dış saha çalışmasında komşu parsel sınırları bom planına işlenir; kent içi depo kuşağında 'bizim saha' ile 'komşunun sahası' arasındaki çizgi, açık arazidekinden çok daha yakındır.",
            },
            {
                baslik: "Tekstil yükünün istif karakteri",
                metin:
                    "Tekstil ve konfeksiyon yükü kendine özgüdür: balya ve rulo formunda gelir, hacimli ama görece hafiftir, nem ve kirlenmeye duyarlıdır ve sezon dönüşlerinde depo doluluk oranı sert dalgalanır. Forklift tarafında bu profil, yüksek istif kabiliyetini ve temiz çalışmayı öne çıkarır — hidrolik kaçağı olan makine tekstil deposuna giremez. Sezon dönüşlerinin yoğun istif haftaları, kiralama takviminin öngörülebilir tepe noktalarıdır ve önden rezervasyonla yönetilir.",
            },
            {
                baslik: "Raf ve asma kat sistemlerinde erişim",
                metin:
                    "Bölge depolarının iç yapısı raf sistemleri ve asma katlarla yoğun kullanılır; tavan altı işler — aydınlatma, yangın algılama, havalandırma kanalları, kamera altyapısı — bu yapının aralarından erişim ister. Akülü makaslılar ana koridorlarda, dar aralıklarda ise dikey platformlar çalışır. Asma kat altı alçak hacimlerde makine yüksekliği kritikleşir: katlanır korkuluklu alçak modeller, standart makinenin giremediği hacimlere girer. Keşifte iç yapı ölçüleri bu yüzden en az kotlar kadar önemlidir.",
            },
            {
                baslik: "TEM kavşağı konumunun sevkiyat değeri",
                metin:
                    "Mahmutbey'in kavşak konumu, hub sevkiyatının bu aksta özellikle hızlı çalışmasını sağlar: bölge parkından çıkan araç, ana artere kısa bağlantıyla ulaşır ve ilçe içi dağılım dakikalarla ölçülür. Trafik dalgası planlamada yine hesaba katılır — sabah ve akşam tepe saatleri sevkiyata kapalı pencere sayılır, teslimatlar erken sabah veya gün ortasına yazılır. Kavşak yakınlığının müşteriye yansıyan hâli basittir: aynı gün talep, çoğu zaman aynı gün teslim.",
            },
            {
                baslik: "Toptan ticaret tesislerinde karma ihtiyaçlar",
                metin:
                    "Aksın toptan ticaret ve showroom yapıları, depo işleriyle kent işlerini aynı çatı altında birleştirir: arka tarafta istif ve raf düzeni, ön tarafta cephe-tabela-vitrin kalemleri. Bu ikili yapı tek kiralamada iki makine tipini yan yana getirir — içeride forklift veya makaslı, dışarıda kompakt eklemli. Cadde cephesindeki çalışmalar yaya ve araç trafiğine göre pencerelenir; kent içi cephe işinde bariyer düzeni ve kısa süreli park organizasyonu, işin makine kadar önemli parçasıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mahmutbey depo işlerinde makine seçim tablosu",
                paragraflar: [
                    "Kent içi depo kuşağının tipik işleri ve makine eşleşmesi aşağıdadır. Kısıt sütunu, bu aksta seçimin belirleyicisidir.",
                ],
                tablo: {
                    basliklar: ["İş", "Belirleyici kısıt", "Makine", "Pencere"],
                    satirlar: [
                        ["Yüksek raf istifi", "Koridor genişliği", "Kısa şaseli forklift", "Operasyon boşlukları"],
                        ["Tavan altı tesisat", "Raf-asma kat aralıkları", "Makaslı / dikey platform", "Gece veya düşük tempo"],
                        ["Asma kat altı işler", "Alçak tavan", "Katlanır korkuluklu alçak model", "Gün içi"],
                        ["Cadde cephesi kalemleri", "Yaya-araç trafiği", "Kompakt eklemli", "Sabah erken"],
                        ["Sezon istif yoğunluğu", "Depo doluluk dalgası", "Ek forklift takviyesi", "Önden rezervasyon"],
                    ],
                },
            },
            {
                baslik: "Sezon dönüşü: tekstil aksının öngörülebilir zirvesi",
                paragraflar: [
                    "Tekstil-konfeksiyon zincirinin yılı sezonlarla akar ve sezon dönüşü haftaları depo operasyonunu zirveye taşır: çıkan koleksiyon toplanır, giren koleksiyon istiflenir ve depo, kısa sürede iki kat iş üretir. Bu haftalarda ek forklift ve istif ekipmanı talebi aks genelinde eş zamanlı yükselir — geç kalan talep, parkın o haftaki kısıtına takılır. Düzenli müşterilerimizle sezon takvimi önceden konuşulur ve takviye makineler dönüş haftalarına rezerve edilir.",
                    "Aynı zirve, ertelenebilir işlerin de haritasını çizer: tavan-tesisat gibi operasyonu yavaşlatan kalemler sezon dönüşü haftalarından bilinçli uzaklaştırılır ve sakin dönemlere yazılır. Depo yöneticisiyle kurulan yıllık ritim planı, hem zirveyi hem sakini doğru makine düzeniyle karşılar.",
                ],
            },
            {
                baslik: "Kent içi sahada komşuluk ve trafik yönetimi",
                paragraflar: [
                    "Kent içi depo kuşağında operasyonun görünmeyen maliyeti, çevreyle sürtüşmedir: komşu parselin rampasını kapatan makine, cadde trafiğini yavaşlatan nakliye aracı veya yaya kaldırımına taşan çalışma alanı, işin kendisinden büyük sorun üretebilir. Düzenimiz bu sürtüşmeleri baştan yok etmek üzerine kuruludur — nakliye aracının bekleme noktası önceden belirlenir, indirme-bindirme dar pencerede tamamlanır, dış çalışmalarda bariyer alanı kaldırım işgalini asgaride tutar ve gerektiğinde kısa süreli izin süreçleri yürütülür.",
                    "Komşu tesislerle ilişki de planın parçasıdır: rampa önü çalışmalarda komşunun sevkiyat saatleri sorulur ve çakışma önlenir. Kent içinde iyi komşuluk, operasyon sürekliliğinin sessiz koşuludur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Depomuzun tavan işleri var ama operasyon gündüz hiç durmuyor; nasıl ilerleriz?",
                cevap:
                    "Gece ve bölge bazlı ilerlemeyle: tavan kalemleri (aydınlatma, algılama, kanal) depo bölgelerine ayrılır, her gece bir bölge çalışılır ve sabah operasyon tam kapasite devralır. Akülü makaslı gece sessiz çalışır; raf aralarına sığmayan noktalar için dikey platform eklenir. Gündüz zorunlu kalemler (elektrik kesintisi gerektiren bağlantılar gibi) operasyonunuzun en sakin dilimine, sizinle seçilen saate yazılır. Bölge planını depo yerleşim krokiniz üzerinden birlikte çıkarırız; toplam süre ve gece sayısı baştan bellidir.",
            },
            {
                soru: "Sezon dönüşünde iki hafta boyunca ekstra forklift gerekiyor; her sezon yeniden mi anlaşacağız?",
                cevap:
                    "Gerek yok — yıllık ritim anlaşması tam bunun için: sezon dönüş haftalarınız takvime işlenir, takviye makine sayısı ve süresi önden tanımlanır ve her dönüşte makineler otomatik rezerve gelir — sizin tarafınızda tek teyit mesajı kalır. Bu düzenin fiyat avantajı da vardır: öngörülebilir talep, spot talepten iyi şartla fiyatlanır. Dönüş tarihleri yıl içinde kayarsa sorun değil; rezervasyon, takviminizdeki güncellemeyle birlikte kayar. Tekstil aksında en yaygın çalışma modelimiz budur.",
            },
            {
                soru: "Asma katımızın altı 3 metre bile değil; buraya makine girer mi?",
                cevap:
                    "Girer — alçak tavan, bu kuşakta sık çözdüğümüz bir problemdir: katlanır korkuluklu alçak makaslılar ve kompakt dikey platformlar, standart makinenin giremediği alçak hacimlerde çalışmak için tasarlanmıştır; korkuluk katlanmış geçiş yüksekliği bazı modellerde 2 metrenin altına iner. Kritik ölçüler üçtür: geçiş yüksekliği (en alçak nokta), çalışma yüksekliği ihtiyacı ve zemin-kapı genişliği. Bu üç ölçüyü paylaştığınızda uygun model netleşir; asma kat altı aydınlatma ve tesisat işleri bu sınıfla rutin biter.",
            },
            {
                soru: "Cadde üzerindeki mağazamızın tabelası değişecek; belediye izni gerekir mi?",
                cevap:
                    "Duruma göre — ve süreci biz yönetiriz: çalışma tamamen kendi parselinizde kalıyorsa çoğu zaman izin gerekmez, makine veya bariyer alanı kaldırım-yol işgali doğuruyorsa kısa süreli işgaliye süreci gerekebilir. Keşifte çalışma alanı çizilir ve izin ihtiyacı netleşir; gerekiyorsa başvuru evrakı hazırlanır ve iş, izin penceresine planlanır. Kent içi cephe işinde en pratik pencere sabah erken saattir: trafik seyrek, yaya az, iş hızlı biter — çoğu tabela değişimi tek sabaha sığar.",
            },
            {
                soru: "Hem depoda forklift hem showroom cephesinde platform işimiz var; aynı gün olur mu?",
                cevap:
                    "Olur ve en ekonomik kurgu budur: iki makine aynı sevkiyatla gelir, cephe işi sabah erken pencerede platformla bitirilir, forklift gün boyu depo düzenlemesinde çalışır ve iade tek araçla yapılır. Nakliye bir kez ödenir, koordinasyon tek muhataptan yürür. Planlamada tek dikkat noktası ekip eşleşmesidir: cephe işinin montaj ekibiyle depo işinin vardiyası aynı güne hazırsa kurgu kusursuz işler. Tarihinizi ve iki işin kapsamını iletin; tek günlük birleşik plan çıkaralım.",
            },
            {
                soru: "Rampamız komşu tesisle ortak kullanılıyor; makine teslimatı sorun yaratır mı?",
                cevap:
                    "Yaratmaz — ortak alan koordinasyonu planın standart maddesidir: teslimat saati, komşu tesisin sevkiyat yoğunluğu sorularak seçilir, indirme işlemi rampayı en kısa süre meşgul edecek biçimde kurgulanır (araç konumu ve indirme sırası önceden planlanır) ve gerekirse teslimat, iki tesisin de sakin olduğu erken saate alınır. Makinenin saha içi park yeri de rampa akışını kesmeyecek noktadan seçilir. Ortak kullanım bilgisini talep aşamasında vermeniz yeterli; gerisi sevkiyat planının işidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Mahmutbey'in TEM kavşağı konumu ve lojistik-tekstil ağırlıklı doku kamuya açık bilgidir; yıllık ritim anlaşması, gece bölge planı ve ortak alan koordinasyonu firma pratiğidir.",
    },

    "bolge:istanbul-geneli": {
        h1: "İstanbul Genelinde Bölgesel Hub Modeliyle Makine Kiralama",
        giris:
            "İstanbul'da iş makinesi kiralamanın asıl problemi makine değil, coğrafyadır: iki kıtaya yayılmış, boğazla bölünmüş, günde milyonlarca aracın hareket ettiği bir megakentte 'depodan sahaya makine göndermek' basit bir nakliye işi olmaktan çıkar. Tek merkezli klasik modelde makine, kentin bir ucundan diğerine saatler süren ve trafiğe göre öngörülemeyen yolculuklar yapar; teslim saati sözü zayıflar, nakliye maliyeti kabarır ve acil işler karşılanamaz hâle gelir. Bölgesel hub modeli bu problemin yapısal cevabıdır: makine parkı tek merkezde değil, kentin iş üreten bölgelerine dağıtılmış hub'larda konumlanır — Avrupa yakasının sanayi ve lojistik aksları, Anadolu yakasının tersane-havalimanı-sanayi hattı ve doğudaki Gebze kuşağı. Talep hangi bölgeden gelirse, makine o bölgenin parkından çıkar; boğaz geçişi, trafik dalgası ve uzun yol, müşterinin problemi olmaktan çıkar.",
        maddeler: [
            {
                baslik: "İki yaka gerçeği ve geçiş planlaması",
                metin:
                    "Yakalar arası ağır araç geçişi, İstanbul'un en kritik lojistik denklemidir: köprülerin ağır vasıta kuralları ve saat kısıtları, geçişi her an mümkün bir rutin olmaktan çıkarır ve plansız yaka değiştirme, teslimatı saatlerce sarkıtabilir. Hub modeli bu denklemi taleple değil stokla çözer: her yakanın parkı kendi talebini karşılayacak biçimde kurulur ve yaka geçişleri, müşteri talebi geldiğinde değil park dengelemesi gerektiğinde — gece ve düşük trafik pencerelerinde, planlı olarak — yapılır.",
            },
            {
                baslik: "Bölge parkı kompozisyonunun mantığı",
                metin:
                    "Her hub'ın makine karması, bölgesinin iş profilini yansıtır: lojistik ağırlıklı bölgelerde akülü makaslı ve forklift yoğun park, ağır sanayi akslarında dizel eklemli ve telehandler ağırlığı, kent merkezli akslarda kompakt sınıf. Bu kompozisyon sabit değildir — mevsimlik talep desenleri (sezon dönüşleri, duruş dönemleri, inşaat temposu) izlenir ve park, talebin önüne geçecek biçimde dönemsel ayarlanır. Doğru kompozisyon, 'makine var ama yanlış tip' problemini kökten önler.",
            },
            {
                baslik: "Çok makine tipli tek tedarik hattı",
                metin:
                    "Megakent ölçeğindeki işler nadiren tek makine tipiyle biter: bir tesis projesi aynı ay içinde manlift, forklift ve telehandler isteyebilir; bir zincir işletme, farklı ilçelerdeki şubeleri için eş zamanlı platform talep edebilir. Filo yapımız bu çok tipliliği tek sözleşme ve tek muhatapla karşılar — tip fark etmeksizin talep aynı hatta düşer, en yakın hub'ın parkından karşılanır ve koordinasyon yükü müşteri tarafına geçmez. Kurumsal tedarikte bu tekillik, işlem maliyetini görünür biçimde düşürür.",
            },
            {
                baslik: "Trafik verisiyle çalışan sevkiyat düzeni",
                metin:
                    "İstanbul trafiği kaotik görünür ama desenlidir: tepe saatler, okul dönemleri, hava koşulu etkileri ve arter bazlı yoğunluk ritimleri büyük ölçüde öngörülebilirdir. Sevkiyat düzenimiz bu desenleri okur — teslimatlar tepe saatlerin dışına yazılır, güzergâhlar günün verisine göre seçilir ve kritik saatli işlerde makine, pencereden önce bölgeye alınıp yakında bekletilir. Kısa hub mesafeleri bu esnekliğin temelidir; on kilometrelik sevkiyatın planı, altmış kilometrelik yolculuğun kumarından her zaman güçlüdür.",
            },
            {
                baslik: "Kurumsal ve çok şubeli müşteri yönetimi",
                metin:
                    "Kentin genelinde operasyon yürüten kurumsal müşteriler — zincir marketler, banka şube ağları, telekom saha ekipleri, tesis yönetim şirketleri — ekipman ihtiyacını ilçe ilçe değil, ağ olarak yönetmek ister. Hub modeli bu ihtiyaca doğal uyum sağlar: tüm şubelerin talepleri tek çerçeve sözleşmede toplanır, her talep kendi bölgesinin hub'ından karşılanır ve raporlama (hangi şube, hangi iş, hangi maliyet) merkezî olarak sunulur. Ağ ölçeğinde birim maliyet, tekil taleplerin toplamının belirgin altına iner.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tek merkez ve bölgesel hub karşılaştırması",
                paragraflar: [
                    "İki modelin İstanbul koşullarındaki farkı aşağıdadır. Fark, makinede değil coğrafyanın yönetiminde doğar.",
                ],
                tablo: {
                    basliklar: ["Ölçüt", "Tek merkezli model", "Bölgesel hub modeli"],
                    satirlar: [
                        ["Teslim süresi", "Trafiğe bağlı, öngörüsü zayıf", "Kısa mesafe, dar aralıklı söz"],
                        ["Yaka geçişi", "Talep anında, kısıtlara takılır", "Planlı, gece penceresinde"],
                        ["Nakliye maliyeti", "Mesafeyle büyür", "Bölge içi, düşük ve öngörülebilir"],
                        ["Acil talep", "Çoğu zaman karşılanamaz", "Bölge parkından saatli cevap"],
                        ["Makine tipi uyumu", "Merkez stoku ne verirse", "Bölge profiline göre kurulmuş park"],
                    ],
                },
            },
            {
                baslik: "Megakentte acil işin anatomisi",
                paragraflar: [
                    "Acil ekipman talebinin İstanbul'daki gerçek düşmanı mesafedir: arızalanan bir sistem, devrilme riski taşıyan bir yapı elemanı veya durmuş bir operasyon, saat toleransıyla makine ister ve kent trafiğinde uzaktan gelen makine bu toleransı tüketir. Hub modelinin acil protokolü üç adımda çalışır: talep, konuma göre en yakın hub'a düşer; park durumu anında görünür ve gerçekçi varış saati verilir; makine bölge içi kısa güzergâhtan sahaya iner. Verilen saatin tutulması, modelin en somut sınavıdır ve model bu sınav için tasarlanmıştır.",
                    "Acil kapasitesinin korunması da bilinçli bir tercihtir: bölge parkları hiçbir zaman yüzde yüz doluluğa bağlanmaz; plansız talebe ayrılan pay, hub modelinin sigorta primidir.",
                ],
            },
            {
                baslik: "Kentin iş haritasını okumak: hub'ların yerleşim mantığı",
                paragraflar: [
                    "Hub yerleşimi rastgele değildir; kentin iş üretim haritasından çıkar: Avrupa yakasında organize sanayi ve lojistik aksları ile kent içi depo kuşakları, Anadolu yakasında tersane bölgesi, havalimanı çevresi ve sanayi hattı, doğuda ise İstanbul'la iç içe çalışan Gebze sanayi kuşağı. Her hub, kendi hinterlandının sektör dokusunu tanır — hangi bölgede hangi iş tipi, hangi mevsimde hangi talep — ve bu tanışıklık, keşiften teslimata her adımı hızlandırır.",
                    "Model büyüdükçe harita da incelir: yoğunlaşan talep yeni hub noktasını işaret eder ve park, kentin değişen iş coğrafyasını izler. İstanbul sabit bir şehir değildir; ona hizmet eden modelin de sabit olmaması gerekir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Şirketimizin iki yakada da tesisleri var; hangi tesise hangi depodan makine gelir?",
                cevap:
                    "Her tesise kendi yakasının hub'ından: Avrupa yakasındaki tesisleriniz Avrupa parkından, Anadolu yakasındakiler Anadolu parkından, Gebze kuşağındakiler doğu parkından karşılanır — hiçbir makineniz boğaz geçişi beklemez. Sizin tarafınızda bu dağılım görünmezdir: tek sözleşme, tek talep hattı, tek raporlama. Eş zamanlı çok tesisli işlerde (örneğin tüm tesislerde aynı hafta denetim hazırlığı) her hub kendi bölgesini paralel çalışır ve iş, tek merkezli modelin asla yetişemeyeceği takvimde biter.",
            },
            {
                soru: "Köprüden ağır makine geçirmek sorun değil mi? Bunun maliyeti bize yansır mı?",
                cevap:
                    "Modelin özü bu maliyeti ortadan kaldırmaktır: yakalar arası makine hareketi rutin operasyonun parçası değildir — her yakanın parkı kendi talebini karşılar ve geçişler yalnızca park dengelemesi için, planlı ve düşük trafik pencerelerinde yapılır. Dolayısıyla standart kiralamada size köprü geçişi kaynaklı ek maliyet veya gecikme yansımaz. İstisnai durumlarda (bölge parkında bulunmayan özel bir makinenin diğer yakadan getirilmesi) durum ve varsa maliyet farkı teklifte açıkça yazılır; sürpriz kalem çıkmaz.",
            },
            {
                soru: "Zincir mağara ağımız için yılda yüzlerce küçük iş çıkıyor; bunları tek tek mi talep edeceğiz?",
                cevap:
                    "Hayır — ağ sözleşmesi bu hacim için tasarlandı: şube listeniz sisteme tanımlanır, her iş tek satırlık taleple açılır (şube, iş tipi, tarih esnekliği), talep otomatik olarak şubenin bölge hub'ına yönlenir ve aynı bölgedeki işler turlara kümelenerek maliyet düşürülür. Aylık raporda hangi şubede ne yapıldığı, maliyetiyle birlikte tek tabloda görünür. Yüzlerce işin koordinasyonu sizin ekibinizin değil modelin yüküdür; sizin tarafta kalan, talep satırını yazmak ve raporu okumaktır.",
            },
            {
                soru: "Acil durumda gerçekçi varış süresi nedir?",
                cevap:
                    "Dürüst cevap: sabit bir rakam yoktur, mekanizma vardır — talebiniz konumunuza en yakın hub'a düşer, o anki park ve trafik durumuna göre size net bir varış saati söylenir ve o saat tutulur. Bölge içi mesafeler kısa olduğu için bu saat, tek merkezli modelin 'trafiğe göre değişir' belirsizliğinden yapısal olarak iyidir. Aciliyet bildirirken konum, iş tipi ve erişim kotu bilgisi süreci hızlandırır. Saat sözü verilirken iyimserlik değil gerçekçilik esastır; acil işte tutulmayan söz, hiç verilmemiş sözden kötüdür.",
            },
            {
                soru: "Uzun süreli bir proje için farklı dönemlerde farklı makineler gerekecek; hub modeli buna nasıl yardım eder?",
                cevap:
                    "İki mekanizmayla: birincisi, proje sahanıza en yakın hub'ın parkı proje takviminize göre önden planlanır — hangi ay hangi makineler, rezervasyonla bağlanır; ikincisi, dönem geçişlerinde makine değişimi bölge içi kısa mesafeyle yapılır, yani giden makine ile gelen makine arasında günlerce boşluk oluşmaz. Tek merkezli modelde her makine değişimi bir uzun yol operasyonudur; hub modelinde aynı değişim, bölge içi bir güncellemedir. Proje takviminizi paylaşın; dönem-makine planını çıkaralım.",
            },
            {
                soru: "Bu model fiyata nasıl yansıyor? Bölgesel park tutmak pahalı bir yapı değil mi?",
                cevap:
                    "Tersine — modelin ekonomisi müşteri lehine çalışır: nakliye mesafeleri kısaldığı için sevkiyat maliyeti düşer, turlu kümeleme kısa işlerin birim maliyetini iyileştirir, bölge parkının doğru kompozisyonu 'yanlış makine gitti, geri dönüp değişti' kayıplarını yok eder ve tutulan teslim saatleri sizin ekip-vinç-taşeron planlarınızın boşa beklemesini önler. Fiyat listesinde görünmeyen bu son kalem çoğu zaman en büyüğüdür: İstanbul'da bekleyen ekip, ödenen ama çalışmayan paradır. Model, tam da o beklemeyi satın alınmaz kılar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. İstanbul'un iki yakalı coğrafyası, köprü ağır vasıta kısıtları ve bölgesel sanayi-lojistik dağılımı kamuya açık bilgidir; hub yerleşimi, park kompozisyonu, ağ sözleşmesi ve acil protokolü firma pratiğidir.",
    },
};
