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

    "bolge:esenyurt": {
        h1: "Esenyurt'a İkitelli Hub'ından Sevkiyat Penceresi ve Rota Planı",
        giris:
            "Esenyurt'a makine göndermek, üç hub'lı modelimizde tek bir soruyla başlar: hangi güzergâh, hangi saatte, hangi trafik yükünü taşıyor? İlçe, Avrupa yakası hub'ımızın (İkitelli) doğrudan hizmet alanında yer alır ve aradaki mesafe kent içi standartlara göre kısa sayılsa da, güzergâhın kendine özgü bir davranışı vardır — TEM bağlantılı ana arterler gün içinde iki ayrı yoğunluk dalgası üretir ve bu dalgalar arasındaki boşluk, sevkiyat ekibimizin planladığı asıl pencere olur. Diğer iki hub'ımız — Tuzla ve Gebze — bu ilçeye normal koşulda hizmet vermez; onlardan çıkan bir sevkiyat, boğaz veya uzun kent içi mesafe anlamına gelir ve bu yalnızca İkitelli parkının tükendiği istisnai anlarda devreye girer. Bu sayfa, Esenyurt'a giden bir makinenin hangi hub'dan çıktığını, o hub'dan çıkışın neden zaman kazandırdığını ve sevkiyat penceresinin nasıl kurulduğunu — fiyat değil, saat ve rota üzerinden — anlatır.",
        maddeler: [
            {
                baslik: "İkitelli'den Esenyurt'a güzergâh mantığı",
                metin:
                    "İki bölge arasındaki bağlantı, kent içi standartlara göre kısa bir mesafedir ama 'kısa' ile 'hızlı' aynı şey değildir — güzergâh üzerindeki kavşak yoğunluğu, günün belirli saatlerinde bu kısa mesafeyi uzun bir bekleyişe çevirebilir. Sevkiyat ekibimiz bu güzergâhı günlük olarak izler ve iki alternatif rota arasında o günkü duruma göre seçim yapar; tek bir sabit rotaya bağlı kalmak, trafik anlık değiştiğinde teslim saatini riske atar. Rota seçimi, makine yola çıkmadan önce son kez teyit edilir.",
            },
            {
                baslik: "Sevkiyat penceresinin iki ucu: sabah ve öğleden sonra",
                metin:
                    "Gün içinde iki dilim, İkitelli'den Esenyurt'a çıkışta belirgin biçimde avantajlıdır: sabah erken saatler ve öğleden sonranın ilk yarısı. Bu iki dilimde ana güzergâh henüz yoğunlaşmamış veya öğle yoğunluğunu atlatmış olur ve makine, kavşaklarda beklemeden sahaya ulaşır. Akşam saatlerine denk gelen teslimatlar ise plan dışına itilir; zorunlu kalınmadıkça bu dilime teslimat yazılmaz. Talep sabah bildirildiğinde, aynı günün ilk penceresine yerleşme ihtimali en yüksektir.",
            },
            {
                baslik: "Diğer iki hub'dan Esenyurt'a çıkış: istisna kuralı",
                metin:
                    "Tuzla ve Gebze parkları Esenyurt'a normalde makine göndermez; bu iki hub'ın hinterlandı coğrafi olarak başka yöndedir ve buradan çıkan bir araç, boğaz geçişi veya kent içi uzun mesafe kat eder. Bu kural yalnızca İkitelli parkının o an dolu olduğu ve talebin ertelenemeyecek kadar acil olduğu durumlarda esner — o zaman bile önce parktaki dengeleme imkânı (başka bir işten erken dönen makine) aranır, sonra diğer yakadan çekme değerlendirilir. Bu sıralama, gereksiz köprü trafiğinin önüne geçer ve maliyet katmadan çözüm üretir.",
            },
            {
                baslik: "Aynı güne düşen birden fazla Esenyurt talebi",
                metin:
                    "İkitelli hub'ının Esenyurt'a yakınlığı, aynı güne denk gelen birden fazla talebi tek sevkiyat turunda birleştirmeyi mümkün kılar: ilçenin farklı mahallelerindeki işler, coğrafi olarak yakın oldukları için aynı aracın güzergâhına art arda dizilebilir. Bu birleştirme yalnızca ekonomik değil, hızlıdır da — ikinci ve üçüncü teslimat, ilk teslimatın hemen ardından, ayrı bir sevkiyat turu beklemeden gerçekleşir. Talep sırasında 'bu hafta içinde uygun bir gün' esnekliği bildirilirse, bu kümelenmeden en çok yararlanan talep sizinki olur.",
            },
            {
                baslik: "İade sevkiyatında hub'a dönüş rotası",
                metin:
                    "Sevkiyat planlaması yalnız gidişi değil dönüşü de kapsar: iş biten makine İkitelli parkına ne zaman ve hangi rotayla döneceğine göre, o park diğer Esenyurt taleplerine ne zaman müsait olacağını bilir. İade saati net bildirilmeyen bir iş, parkın kapasite hesabında belirsizlik yaratır ve bu belirsizlik zincirleme olarak sonraki taleplerin teslim saatini etkileyebilir. Bu yüzden her sevkiyat teklifinde iade penceresi de gidiş penceresi kadar açık yazılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Esenyurt sevkiyatında üç hub karşılaştırması",
                paragraflar: [
                    "Esenyurt'a hizmet açısından üç hub'ın konumu ve rotası aşağıda karşılaştırılmıştır. Normal koşulda yalnız ilk satır işler; diğer ikisi istisnai durum içindir.",
                ],
                tablo: {
                    basliklar: ["Hub", "Esenyurt'a rota karakteri", "Kullanım durumu", "Sevkiyat penceresi"],
                    satirlar: [
                        ["İkitelli (Avrupa yakası)", "Doğrudan kara bağlantısı, kısa aks", "Standart, birincil kaynak", "Sabah erken + öğleden sonra ilk yarısı"],
                        ["Tuzla (Anadolu yakası)", "Köprü/tünel geçişi gerektirir", "Yalnız İkitelli dolu olduğunda", "Köprü trafiği dışı saatler"],
                        ["Gebze (doğu kuşağı)", "Kent içi uzun mesafe", "Ancak son çare, önceden planlı", "Gece / erken sabah geçişi"],
                    ],
                },
            },
            {
                baslik: "Trafik verisiyle çalışan bir sevkiyat ekibi",
                paragraflar: [
                    "Esenyurt aksındaki günlük trafik davranışı sabit değildir; okul dönemi, resmi tatil öncesi ve hafta içi-hafta sonu farkı, iyi bilinen dalgayı bile kaydırabilir. Sevkiyat ekibimiz bu yüzden rota kararını bir gün önceden değil, sevkiyat sabahı son bir kez teyit ederek verir. Bu son dakika teyidi, teklifte yazılan pencerenin gerçekten tutulmasının arkasındaki mekanizmadır — sabit bir kural değil, güncellenen bir gözlemdir.",
                    "Aynı disiplin dönüş yolculuğu için de geçerlidir: makinenin işi bittiği saatte trafik durumu yeniden değerlendirilir ve dönüş rotası buna göre seçilir. Gidiş ve dönüş aynı güzergâhı kullanmak zorunda değildir.",
                ],
            },
            {
                baslik: "Talebin erken bildirilmesinin sevkiyat üzerindeki etkisi",
                paragraflar: [
                    "Bir Esenyurt talebinin sevkiyat gününden önce bildirilmesi, tek başına makinenin varlığından daha çok şeyi etkiler: erken bildirim, o günün İkitelli çıkışlı turuna hangi sırada gireceğinizi belirler ve size en uygun pencereyi seçme şansı verir. Aynı gün bildirilen acil talepler de karşılanır ama sıralamada geriye düşer ve pencere seçeneği daralır — bu, kapasite yetersizliğinden değil, önceden planlanmış turların zaten yola çıkmış olmasından kaynaklanır.",
                    "Sonuç olarak, sevkiyat penceresi konusunda en fazla kontrolü, en erken bildirilen talep elinde tutar; bu basit kural, ilçedeki tüm mahalleler için aynı şekilde işler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Esenyurt'taki işimize hangi hub'dan makine geliyor, biz nasıl bilebiliriz?",
                cevap:
                    "Teklif aşamasında bu bilgi zaten yazılıdır: standart bir Esenyurt talebi İkitelli hub'ından karşılanır ve teklifte hangi parktan çıkacağı, tahmini sevkiyat penceresi ve güzergâh notu birlikte belirtilir. İstisnai bir durumda (İkitelli parkının dolu olması gibi) farklı bir hub devreye girerse, bu durum ve varsa ek süre etkisi size ayrıca söylenir — sessizce değiştirilmez. Sorarsanız, sevkiyatı hangi aracın hangi rotadan yaptığı bilgisi de paylaşılır.",
            },
            {
                soru: "Sabah 8'de teslim istiyoruz, bu mümkün mü?",
                cevap:
                    "Genelde evet ve aslında önerdiğimiz saat dilimlerinden biri budur — sabah erken pencere, güzergâhın henüz yoğunlaşmadığı ve İkitelli parkının günün ilk turunu çıkardığı zamandır. Kesin saat için tek koşul, önceki günden bildirim yapılmasıdır; sabah turu bir gece önceden planlanır ve son dakika talepler bu turun dışında kalabilir. Aynı gün 8'den önce bildirilen taleplerde ise gerçekçi bir saat, o sabahki park durumuna göre verilir.",
            },
            {
                soru: "İşimiz öğleden sonra 15:00'te başlıyor; bu saat trafiğe takılır mı?",
                cevap:
                    "15:00 civarı genelde öğleden sonranın ilk yarısına denk düşer ve bu dilim, İkitelli-Esenyurt aksında akşam yoğunluğundan önceki görece rahat kısımdır — ama kesin cevap sevkiyat gününün trafik gözlemine bağlıdır. Teklif aşamasında bu saat için gerçekçi bir teslim penceresi verilir; eğer o gün beklenmedik bir yoğunluk varsa (kaza, yol çalışması) sevkiyat ekibi sizi önceden bilgilendirir ve alternatif saat önerir. Sürpriz gecikme yerine önceden haber verilen gecikme tercih edilir.",
            },
            {
                soru: "Mahallemizde aynı hafta iki ayrı işimiz var; ikisini birlikte mi planlamalıyız?",
                cevap:
                    "Kesinlikle önerilir — İkitelli hub'ının Esenyurt'a yakınlığı, aynı bölgedeki birden fazla talebin tek sevkiyat turunda birleşmesine izin verir. İki işi aynı haftaya, mümkünse aynı güne bildirirseniz, sevkiyat ekibi bunları art arda güzergâha diziyor ve ikinci teslimat, ilk teslimatın hemen ardından geliyor. Bu hem sizin için hem bizim için daha az sevkiyat turu, daha kısa bekleme demektir. Talep bildirirken ikinci işi de belirtmeniz yeterli.",
            },
            {
                soru: "Makine işimiz bitince ne zaman geri alınıyor, biz mi haber vermeliyiz?",
                cevap:
                    "İkisi birlikte işler: iş süresi teklifte baştan belirlenir ve tahmini iade saati plana yazılır, ama işin erken bitmesi veya uzaması durumunda haber vermeniz süreci hızlandırır. Erken biten bir iş bildirildiğinde, makine İkitelli parkına daha erken döner ve o parktaki başka bir Esenyurt talebine daha hızlı yönlenebilir — yani erken haber, yalnızca sizin değil bölgedeki diğer taleplerin de lehinedir. İade saati hiç bildirilmezse, plan baştaki tahmine göre yürütülür.",
            },
            {
                soru: "Acil bir arızamız var, hemen makine gelebilir mi?",
                cevap:
                    "İkitelli hub'ının Esenyurt'a yakınlığı tam olarak bu tür durumlar için avantaj sağlar: bölge parkında hazır bekleyen bir makine varsa, kısa mesafe sayesinde diğer iki hub'a göre çok daha hızlı sahaya ulaşır. Talep alındığında önce İkitelli park durumu kontrol edilir ve size gerçekçi bir varış saati söylenir; 'hemen yola çıktı' değil, 'şu saatte orada olur' cevabı verilir. Park o an müsait değilse, dengeleme veya diğer hub seçenekleri değerlendirilir ve size dürüstçe süre farkı bildirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Esenyurt'un İstanbul'un Avrupa yakası ilçelerinden biri olduğu ve TEM bağlantılı ana arterlerin gün içi yoğunluk değişimi kamuya açık bilgidir; hub tahsisi, sevkiyat penceresi ve tur kümeleme firma pratiğidir.",
    },

    "bolge:dudullu-osb": {
        h1: "Dudullu OSB'ye Tuzla Hub'ından Sevkiyat Rotası",
        giris:
            "Dudullu OSB'ye giden bir makinenin hikâyesi, üç hub'lı modelimizde net bir rota sorusuyla başlar: Anadolu yakası hub'ımız olan Tuzla'dan çıkan bir sevkiyat, hangi güzergâhı kullanır ve bu güzergâh günün hangi saatinde en hızlıdır? Dudullu, Anadolu yakasının iç kesiminde, Tuzla'daki sanayi-tersane hattından belirli bir mesafede yer alır ve aradaki bağlantı, Tuzla'nın kıyı aksından OSB'nin iç sanayi dokusuna geçişi içerir — bu geçiş, kıyı yoluyla iç yol ağının kesiştiği noktalarda kendine özgü bir trafik davranışı taşır. Diğer iki hub'ımız — İkitelli ve Gebze — Dudullu'ya normal koşulda hizmet vermez: İkitelli'den çıkan bir araç boğazı geçmek zorunda kalır, Gebze'den çıkan araç ise kent içi uzun bir mesafe kat eder. Bu sayfa, Tuzla'dan Dudullu OSB'ye giden tek bir sevkiyatın rotasının nasıl planlandığını, hangi saatlerin avantajlı olduğunu ve teslim sözünün nasıl korunduğunu anlatır.",
        maddeler: [
            {
                baslik: "Tuzla'dan Dudullu'ya güzergâh seçimi",
                metin:
                    "Tuzla hub'ından çıkan bir sevkiyat için Dudullu OSB'ye iki alternatif güzergâh değerlendirilir: kıyı aksını takip edip iç bağlantı yollarından OSB'ye giren rota ve ana kara yolu üzerinden daha kuzeyden dolanan rota. İkisi arasındaki seçim, o günkü trafik yoğunluğuna göre sevkiyat sabahı yapılır — sabit bir 'her zaman bu rota' kuralı yoktur, çünkü iki rotanın da darboğaz noktaları gün içinde yer değiştirebilir. Rota kararı, makine Tuzla parkından çıkmadan hemen önce netleşir.",
            },
            {
                baslik: "OSB'nin vardiya girişleriyle çakışmayan teslim saati",
                metin:
                    "Dudullu OSB'nin iç yolları, vardiya giriş-çıkış saatlerinde kendi trafiğini üretir; bu saatlere denk gelen bir teslimat, OSB'nin ana kapısından çıkışta beklemeye girer ve teslim süresi güzergâhtan değil bu son yüz metreden uzar. Sevkiyat planımız bu yüzden vardiya geçiş saatlerini teslim penceresinin dışında tutar — makine ya vardiya başlamadan önce OSB içine girer ya da geçiş yoğunluğu bittikten sonra. Bu ince ayar, Tuzla'dan çıkışın hızlı olmasının OSB kapısında boşa gitmesini önler.",
            },
            {
                baslik: "Diğer hub'lardan Dudullu'ya sevkiyat: istisna ve maliyeti",
                metin:
                    "İkitelli veya Gebze parkından Dudullu'ya bir makine gönderilmesi, yalnızca Tuzla parkının o an tükendiği durumlarda gündeme gelir. İkitelli'den çıkan sevkiyat köprü veya tünel geçişini, Gebze'den çıkan sevkiyat ise otoyol üzerinden uzun bir kent içi mesafeyi gerektirir; her iki durumda da süre ve rota farkı teklifte açıkça yazılır ve bu istisna sessizce standart fiyata gizlenmez. Öncelik her zaman Tuzla parkında dengeleme imkânı aramaktır — başka bir işten erken dönen makinenin Dudullu'ya yönlendirilmesi, diğer yakadan çekmekten daha hızlı ve daha ucuzdur.",
            },
            {
                baslik: "OSB içi birden fazla tesise tek turda sevkiyat",
                metin:
                    "Dudullu OSB'nin planlı iç yol ağı, aynı güne denk gelen birden fazla teslimatın tek turda birleşmesini kolaylaştırır: OSB kapısından bir kez giren araç, farklı parsellerdeki birkaç tesise sırayla uğrayabilir. Bu, kapı önü bekleme ve giriş prosedürünün yalnız bir kez yaşanması anlamına gelir — her tesis için ayrı bir OSB girişi yapılmaz. Aynı hafta içinde OSB'de birden fazla tesisten talep geldiğinde, sevkiyat ekibi bunları otomatik olarak aynı tura yerleştirmeye çalışır.",
            },
            {
                baslik: "Rota planında geri dönüş ve park müsaitliği",
                metin:
                    "Tuzla parkının Dudullu'ya bir sonraki sevkiyatı ne zaman yapabileceği, önceki makinenin ne zaman ve hangi rotayla geri döndüğüne bağlıdır. Bu yüzden her sevkiyat planı, gidiş rotası kadar net bir dönüş rotası da içerir; iade saati belirsiz bırakılan bir iş, Tuzla parkının OSB'ye yönelik sonraki kapasitesini de belirsizleştirir. Rota planlaması, tek yönlü değil çift yönlü bir hesaptır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Dudullu OSB sevkiyatında üç hub karşılaştırması",
                paragraflar: [
                    "Dudullu OSB'ye hizmet açısından üç hub'ın rota karakteri aşağıda karşılaştırılmıştır. Standart sevkiyat yalnız ilk satırdan yürür.",
                ],
                tablo: {
                    basliklar: ["Hub", "Dudullu'ya rota karakteri", "Kullanım durumu", "Kritik nokta"],
                    satirlar: [
                        ["Tuzla (Anadolu yakası)", "Kıyı aksından iç bağlantıya geçiş", "Standart, birincil kaynak", "OSB vardiya giriş-çıkış saatleri"],
                        ["İkitelli (Avrupa yakası)", "Köprü/tünel geçişi gerektirir", "Yalnız Tuzla dolu olduğunda", "Köprü trafiği + OSB girişi"],
                        ["Gebze (doğu kuşağı)", "Otoyol üzerinden uzun kent içi mesafe", "Ancak son çare, önceden planlı", "Otoyol yoğunluğu + OSB girişi"],
                    ],
                },
            },
            {
                baslik: "OSB kapısı: rotanın görünmeyen son adımı",
                paragraflar: [
                    "Dudullu OSB'ye giden her sevkiyatın gerçek darboğazı çoğu zaman açık yolda değil, OSB'nin kendi giriş kapısındadır — ziyaretçi-araç kaydı, güvenlik kontrolü ve iç yönlendirme, güzergâhın en hızlı geçtiği kısmından sonra ek süre ekleyebilir. Sevkiyat ekibimiz bu son adımı ayrı bir aşama olarak planlar: OSB'ye giriş için gereken bilgiler (araç plakası, sürücü kimliği, varsa tesis onayı) sevkiyat başlamadan önce hazırlanır ki kapıda beklenen süre en aza insin.",
                    "Bu hazırlık, ilk sevkiyattan sonra hızlanır — OSB'nin kendi kayıt formatı bir kez tanındığında, sonraki teslimatlar için aynı süreç daha az sürtünmeyle işler.",
                ],
            },
            {
                baslik: "Tuzla parkının Dudullu'ya ayrılan kapasitesi",
                paragraflar: [
                    "Tuzla hub'ı yalnız Dudullu'ya değil, tersane bölgesi ve çevresindeki ihtisas OSB'lerine de hizmet verir; bu yüzden Dudullu'ya yönelik sevkiyat, parkın genel kapasitesiyle birlikte planlanır. Talep yoğunluğunun arttığı dönemlerde (örneğin tersanede eş zamanlı büyük bir iş varken) Dudullu'ya ayrılan pay geçici olarak daralabilir; bu durumda sevkiyat ekibi gerçekçi bir teslim penceresi verir ve gecikme riskini önceden bildirir.",
                    "Düzenli ve tekrar eden Dudullu taleplerinde, talep takviminin önceden paylaşılması, bu tür dönemsel daralmalara karşı en etkili önlemdir; park, bilinen talebi bilinmeyen talebe göre önceliklendirebilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Dudullu OSB'ye hangi hub'dan makine geliyor?",
                cevap:
                    "Standart olarak Tuzla hub'ından — Anadolu yakası parkımız, kıyı aksından OSB'nin iç bağlantı yollarına geçen bir rotayla sevkiyat yapar. Teklifte bu bilgi ve tahmini sevkiyat süresi birlikte yazılır. Tuzla parkının o an dolu olduğu istisnai durumlarda İkitelli veya Gebze devreye girebilir; bu durumda süre farkı ve gerekçesi size açıkça bildirilir, sessiz bir değişiklik yapılmaz.",
            },
            {
                soru: "Vardiya değişim saatimizde teslimat alırsak sorun olur mu?",
                cevap:
                    "Bu saatlerde teslimat almanızı önermeyiz ve teklifimiz zaten bu saatleri dışarıda bırakır — vardiya giriş-çıkış saatlerinde OSB'nin ana kapısı kendi trafiğini üretir ve makineniz güzergâhta değil kapı önünde bekler. Sevkiyat penceresi, vardiya geçişinden önceki veya sonraki sakin dilime yerleştirilir. Vardiya saatlerinizi bildirirseniz, bu dilimler teklifte otomatik olarak dışlanır.",
            },
            {
                soru: "OSB içinde iki ayrı parselimiz var, ikisine de aynı gün mü teslimat yapılır?",
                cevap:
                    "Genellikle evet ve bu bizim de tercih ettiğimiz senaryodur — OSB kapısından bir kez giren araç, iki parseli sırayla dolaşabilir ve giriş prosedürü tek seferde yaşanır. İki talebi aynı hafta, mümkünse aynı gün bildirirseniz, sevkiyat ekibi bunları tek tura yerleştirmeye çalışır. Parseller arası mesafe ve sıralama, OSB'nin iç yol haritasına göre planlanır.",
            },
            {
                soru: "OSB'ye giriş için önceden bir kayıt yaptırmamız gerekiyor mu?",
                cevap:
                    "Tesisinizin kendi giriş prosedürüne bağlıdır ve bu bilgiyi keşif aşamasında sizden alırız. Araç plakası, sürücü kimlik bilgisi ve varsa tesis onay numarası gibi gerekli veriler sevkiyattan önce hazırlanır ki kapıda ek bekleme çıkmasın. İlk sevkiyattan sonra bu süreç bizim tarafımızda kayıtlı kalır ve sonraki teslimatlarda tekrar sıfırdan sorulmaz.",
            },
            {
                soru: "Tersanede yoğun bir dönem varsa bizim sevkiyatımız gecikir mi?",
                cevap:
                    "Tuzla parkı birden fazla bölgeye hizmet verdiği için, tersanede eş zamanlı büyük bir iş yaşandığında Dudullu'ya ayrılan kapasite geçici olarak daralabilir. Böyle bir durumda size gerçekçi bir teslim penceresi verilir ve olası gecikme önceden söylenir — son ana kadar beklenmez. Düzenli talebiniz varsa, aylık ihtiyaç takviminizi önceden paylaşmanız, park planlamasında önceliklenmenizi kolaylaştırır.",
            },
            {
                soru: "Acil bir arıza çıkarsa Tuzla'dan Dudullu'ya ne kadar sürede makine gelir?",
                cevap:
                    "Kesin bir rakam vermeyiz çünkü o anki park durumu ve OSB giriş yoğunluğu belirleyicidir, ama Tuzla'nın Anadolu yakası içindeki konumu, İkitelli veya Gebze'den gelecek bir alternatife göre yapısal olarak daha hızlıdır. Talebiniz alındığında önce Tuzla park durumu kontrol edilir ve size net bir varış saati söylenir; bu saat verilirken güzergâh ve OSB kapısı birlikte hesaba katılır, yalnızca yol süresi değil.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Dudullu OSB'nin Ümraniye'deki konumu ve Tuzla'nın Anadolu yakası sanayi-tersane hattındaki yeri kamuya açık bilgidir; rota seçimi, vardiya penceresi ve OSB giriş hazırlığı firma pratiğidir.",
    },

    "bolge:arnavutkoy": {
        h1: "Arnavutköy'de Havalimanı Lojistik Aksına Hub Planlaması",
        giris:
            "Arnavutköy, İstanbul Havalimanı'nın bulunduğu bölgeye komşuluğuyla, kentin en hızlı değişen lojistik aksadlarından birinin parçası hâline geldi: havalimanı çevresinde büyüyen kargo-lojistik yatırımları, yeni sanayi parselleri ve bu yatırımları besleyen inşaat-altyapı işleri, ilçeye kendine özgü bir ekipman talebi getiriyor. Üç hub'lı modelimizde bu bölgeye en yakın kaynak Avrupa yakası hub'ımız olan İkitelli'dir; aradaki mesafe, havalimanı çevresindeki gelişmekte olan yol bağlantıları üzerinden kat edilir ve bu bağlantıların olgunlaşma düzeyi, bölgenin diğer daha yerleşik ilçelerine göre sevkiyat planını farklı kılar. Bu sayfa, havalimanı lojistik aksının Arnavutköy tarafındaki ekipman ihtiyacını, hangi hub'ın buraya nasıl hizmet verdiğini ve bölgenin gelişmekte olan yapısının sevkiyat planına ne kattığını anlatır — burada anlatılan coğrafi yakınlık kamuya açık bir gerçektir, herhangi bir tesisin içinde konumlandığımız iddiası değildir.",
        maddeler: [
            {
                baslik: "Havalimanı çevresinde büyüyen lojistik dokusu",
                metin:
                    "İstanbul Havalimanı'nın çekim gücü, çevresine kargo, depo ve dağıtım merkezi yatırımlarını topluyor ve bu yatırımların çoğu hâlâ inşaat veya genişleme aşamasında. Bu evre, klasik bir yerleşik sanayi bölgesinden farklı bir ekipman profili üretir: şantiye dönemi telehandler ve dizel arazi tipi platform talebi, henüz asfaltlanmamış saha yollarında çalışabilen ekipman ihtiyacı ve yeni tamamlanan tesislerin ilk donanım-montaj işleri. Arnavutköy tarafındaki talep, bu üç kategorinin karışımıdır ve zaman içinde yerleşik bir OSB dokusuna evrilecek gibi görünüyor.",
            },
            {
                baslik: "Gelişmekte olan yol ağında sevkiyat planı",
                metin:
                    "Bölgenin yol bağlantıları hâlâ tamamlanma sürecinde ve bu durum, sabit bir güzergâh varsayımını riskli kılar — bir ay önce kullanılan rota, yeni bir bağlantı yolu açıldığında veya bir kesim çalışmaya kapandığında geçerliliğini yitirebilir. Sevkiyat ekibimiz bu yüzden Arnavutköy taleplerinde güzergâhı her seferinde güncel olarak doğrular ve sabit bir 'her zaman böyle gidilir' kuralına güvenmez. Bu, bölgenin olgunlaşmamış altyapısının doğal bir sonucudur ve zamanla yerleşik bölgelerdeki gibi öngörülebilir hâle gelecektir.",
            },
            {
                baslik: "İkitelli hub'ından Arnavutköy'e mesafe gerçeği",
                metin:
                    "Avrupa yakası hub'ımız, ilçenin diğer bazı yerleşik bölgelerine göre Arnavutköy'e biraz daha uzak sayılabilir; bu mesafe farkı, sevkiyat teklifinde dürüstçe yansıtılır. Bununla birlikte, diğer iki hub'ımıza (Tuzla ve Gebze) kıyasla İkitelli hâlâ en yakın kaynaktır — Anadolu yakasından bir sevkiyat, boğaz geçişine ek olarak kentin kuzeybatı ucuna uzun bir mesafe daha kat etmek zorunda kalır. Bu yüzden Arnavutköy talepleri normal koşulda yalnızca İkitelli parkından karşılanır.",
            },
            {
                baslik: "İnşaat dönemi ile tamamlanmış tesis dönemi arasındaki geçiş",
                metin:
                    "Bölgedeki bir tesisin inşaat aşamasından işletme aşamasına geçişi, ekipman ihtiyacını da değiştirir: kaba yapı döneminde ağırlıklı telehandler ve arazi tipi platform kullanılırken, tesis tamamlandıkça iç mekân bakım-onarım işleri için akülü sınıf devreye girer. Bu geçiş dönemini önceden bilen bir müşteri, sevkiyat planını da buna göre önceden konuşabilir — hangi ayda hangi ekipman sınıfına geçileceği, keşifte birlikte kabaca çizilir.",
            },
            {
                baslik: "Bölgenin büyüme hızına uyum sağlayan park kararı",
                metin:
                    "Havalimanı çevresi lojistik yatırımlarının hızı, bölgedeki talebi de hızla artırabilir; bu ihtimale karşı İkitelli parkının Arnavutköy'e ayırdığı kapasite, sabit değil izlenen bir büyüklüktür. Talep arttıkça bölgeye ayrılan park payı gözden geçirilir; bu, bölgenin gelişimine ekipman tedarikinin geride kalmaması için gerekli bir esnekliktir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Arnavutköy'de proje evresi ve ekipman eşleşmesi",
                paragraflar: [
                    "Havalimanı lojistik aksındaki tipik proje evreleri ve bu evrelere uygun ekipman kategorileri aşağıdadır. Bölgenin gelişmekte olan yapısı nedeniyle evreler arası geçiş hızlı olabilir.",
                ],
                tablo: {
                    basliklar: ["Evre", "Ana ekipman", "Saha koşulu", "Not"],
                    satirlar: [
                        ["Şantiye / kaba yapı", "Telehandler, arazi tipi platform", "Asfaltsız/düzensiz zemin", "Zemin keşfi önden yapılır"],
                        ["Altyapı-donanım kurulumu", "Dizel eklemli, forklift", "Kısmen tamamlanmış saha", "Erişim değişken olabilir"],
                        ["İlk işletme dönemi", "Akülü makaslı/eklemli", "Tamamlanmış iç mekân", "İz bırakmayan lastik"],
                        ["Yerleşik bakım dönemi", "Akülü sınıf ağırlıklı", "Standart iç saha", "Yerleşik OSB dokusuna yakınsar"],
                    ],
                },
            },
            {
                baslik: "Coğrafi yakınlık ile hizmet iddiası arasındaki fark",
                paragraflar: [
                    "İstanbul Havalimanı'na yakınlık, herkesçe doğrulanabilir bir coğrafi gerçektir ve bu sayfa bu gerçeği tarif eder — ama bu, havalimanı işletmesiyle bir bağlantımız veya havalimanı sahası içinde bir varlığımız olduğu anlamına gelmez. İkitelli hub'ımız, Arnavutköy dahil Avrupa yakasının kuzey kesimine hizmet veren bölgesel parkımızdır ve buradan çıkan sevkiyat, kamuya açık kara yolu ağını kullanır. Bu ayrımı net tutmak, hem doğru beklenti kurmak hem de teklifin gerçek kapsamını göstermek içindir.",
                    "Sevkiyat planlaması bu gerçeğe göre kurulur: mesafe ve güzergâh üzerinden konuşuruz, iddia edilmemiş bir yakınlık üzerinden değil.",
                ],
            },
            {
                baslik: "Yeni gelişen bölgede keşfin ağırlığı artar",
                paragraflar: [
                    "Yerleşik bir sanayi bölgesinde keşif genelde kısa sürer çünkü saha koşulları bilinir ve tekrar eder; Arnavutköy'ün havalimanı aksı gibi hızlı değişen bir bölgede ise her keşif, o anki saha durumunu yeniden doğrulamak zorundadır — bir ay önceki fotoğraf güncelliğini yitirmiş olabilir. Bu yüzden bölgedeki talepler için keşif adımı atlanmaz veya kısaltılmaz; zemin durumu, geçici yol kapamaları ve erişim noktaları her seferinde teyit edilir.",
                    "Bu ek özen, sevkiyat süresine küçük bir pay olarak yansır ama karşılığında sahaya yanlış ekipmanla gidip geri dönme riskini ortadan kaldırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hangi hub bize hizmet veriyor, sizin havalimanı içinde bir deponuz mu var?",
                cevap:
                    "Hayır — havalimanı sahası içinde veya işletmesiyle bağlantılı bir tesisimiz yok; size hizmet veren, Avrupa yakası bölgesel parkımız İkitelli hub'ıdır. Buradan çıkan sevkiyat, herkesin kullandığı kamuya açık kara yolu ağıyla bölgenize ulaşır. Havalimanına coğrafi yakınlığınız, sevkiyat mesafesini kısaltan bir avantajdır ama bu, tesis içi bir konumlanma anlamına gelmez; teklifte de bu ayrım net yazılır.",
            },
            {
                soru: "Sahamız henüz yeni açılıyor, yollar tam bitmemiş; makine gelebilir mi?",
                cevap:
                    "Genellikle gelir ama önce bir doğrulama gerekir: keşifte mevcut erişim yolunun genişliği, zemin durumu ve varsa geçici kapamalar fotoğraflanır ve bu bilgiye göre uygun makine sınıfı seçilir. Asfaltsız veya düzensiz zeminde arazi tipi lastikli modeller tercih edilir. Yol durumu makine geçişine hiç uygun değilse, bu durum dürüstçe söylenir ve alternatif (daha küçük ekipman, kademeli erişim) birlikte değerlendirilir.",
            },
            {
                soru: "Bölgemizdeki yollar sık değişiyor, her seferinde yeniden mi anlatmamız gerekiyor?",
                cevap:
                    "Anlatmanıza gerek kalmadan da güncel bilgiyi biz takip ederiz ama sizin güncel bir bilgi paylaşmanız süreci hızlandırır. Sevkiyat ekibimiz Arnavutköy taleplerinde güzergâhı her seferinde güncel olarak doğrular; bir önceki sevkiyattaki rota bilgisine körü körüne güvenilmez. Sahanıza yeni bir giriş noktası açıldıysa veya eski bir yol kapandıysa, bu bilgiyi talep sırasında iletmeniz, keşif adımını kısaltabilir.",
            },
            {
                soru: "Şu an şantiyedeyiz ama birkaç ay sonra işletmeye geçeceğiz; ekipman ihtiyacımız nasıl değişir?",
                cevap:
                    "Kaba yapı döneminde ağırlıklı olarak telehandler ve arazi tipi platform kullanılırken, işletmeye geçtikten sonra ihtiyaç akülü makaslı ve eklemli sınıfa kayar — iç mekân bakım-onarım işleri bu sınıfla yürür. Bu geçişi önceden bilmemiz, park planımızda size ayıracağımız kapasiteyi doğru zamanlamamıza yardımcı olur; kaba tarihlerinizi paylaşırsanız, evreye göre kabaca bir ekipman takvimi çıkarabiliriz.",
            },
            {
                soru: "Bölgede talep hızla artıyor, ileride kapasite bulamama riski var mı?",
                cevap:
                    "İkitelli parkının Arnavutköy'e ayırdığı kapasite sabit bir büyüklük değil, izlenen ve gerektiğinde büyütülen bir paydır. Bölgedeki lojistik yatırımların hızı bilindiği için bu kapasite dönemsel olarak gözden geçirilir. Düzenli veya öngörülebilir talebi olan müşterilerin, ihtiyaç takvimini önceden paylaşması, kapasite planlamasında öncelik kazanmalarını sağlar — beklenmedik talep karşılanamaz demek değildir ama önceden bilinen talep her zaman daha güvenli planlanır.",
            },
            {
                soru: "Acil bir ihtiyacımız çıkarsa hangi hub'dan ne kadar sürede makine gelir?",
                cevap:
                    "Normal koşulda İkitelli hub'ından — bölgenin diğer iki hub'a (Tuzla, Gebze) göre en yakın kaynağı budur. Kesin bir süre vermeyiz çünkü o anki park durumu ve bölgenin o günkü yol durumu belirleyicidir, ama talebiniz alındığında bu iki veri hızla kontrol edilir ve size gerçekçi bir varış saati söylenir. Sahanızın erişim noktası ve varsa güvenlik/giriş prosedürü bilgisi, bu süreyi netleştirmeye yardımcı olur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. İstanbul Havalimanı'nın Arnavutköy'e komşu konumu ve çevresindeki lojistik yatırım yoğunluğu kamuya açık bilgidir; tesis içi konumlanma iddia edilmez. Hub tahsisi ve güzergâh doğrulama pratiği firma pratiğidir.",
    },

    "bolge:catalca": {
        h1: "Çatalca'ya Sevkiyat: İstanbul'un En Uzak İlçesinde Hub Gerçekleri",
        giris:
            "Çatalca, İstanbul'un Avrupa yakasındaki en batı ve en geniş ilçelerinden biridir ve bu coğrafi konum, kentin diğer ilçelerine kıyasla farklı bir sevkiyat gerçeği doğurur: üç hub'lı modelimizdeki hiçbir hub, Çatalca'ya kent içi bir mesafeden hizmet vermez — en yakın kaynağımız olan İkitelli hub'ından bile aradaki mesafe, ilçenin kırsal ve yarı kırsal dokusuyla birleşince, kent merkezi ilçelerine göre daha uzun bir sevkiyat süresi anlamına gelir. Bu sayfanın amacı bu gerçeği gizlemek değil, tam tersine açıkça ortaya koymaktır: Çatalca'ya makine göndermek mümkündür ve düzenli yapılır, ama süre beklentisi kent merkezindeki bir ilçeyle aynı kalıba oturtulamaz. Üç hub arasında hangisinin Çatalca'ya en yakın olduğunu, bu mesafenin sevkiyat planına nasıl yansıdığını ve uzun mesafeli bir teslimatın nasıl güvenilir kılındığını burada anlatıyoruz.",
        maddeler: [
            {
                baslik: "Üç hub arasında Çatalca'ya en yakın olan",
                metin:
                    "Coğrafi olarak üç hub'ımız arasında İkitelli, Avrupa yakasında konumlandığı için Çatalca'ya en yakın kaynaktır; Tuzla ve Gebze ise Anadolu yakasında yer aldıkları için buradan bir sevkiyat hem boğaz geçişini hem de kentin bir ucundan diğerine uzanan ek bir mesafeyi gerektirir. Bu yüzden Çatalca talepleri normal koşulda yalnızca İkitelli parkından karşılanır; diğer iki hub, ancak İkitelli'nin tükendiği ve alternatif bulunamayan istisnai durumlarda değerlendirilir, o zaman da süre farkı açıkça bildirilir.",
            },
            {
                baslik: "Kent içi mesafe ile kırsal mesafe arasındaki fark",
                metin:
                    "İkitelli'den Çatalca'ya olan mesafe, kent içi bir ilçeye göre saf kilometre olarak daha uzun olsa da, asıl fark yol karakterinde yatar: güzergâhın büyük kısmı şehir içi kesintili trafik yerine, daha az kesintili ama daha uzun süren bir yol karakterine sahiptir. Bu iki tip mesafe farklı davranır — kent içi kısa mesafe trafik yoğunluğuna göre büyük ölçüde değişkenken, kırsala uzanan uzun mesafe daha öngörülebilir ama başlangıçta daha yüksek bir taban süre taşır. Sevkiyat teklifinde bu taban süre dürüstçe yazılır.",
            },
            {
                baslik: "Çatalca'nın geniş ve dağınık yerleşim dokusu",
                metin:
                    "İlçe, İstanbul'un en geniş yüz ölçümlü ilçelerinden biridir ve yerleşim merkezi, çevresindeki köy ve mahallelere dağılmış bir doku oluşturur. Bu dağınıklık, sevkiyat planlamasında ek bir değişken getirir: aynı 'Çatalca' talebi, ilçe merkezine mi yoksa uzak bir köye mi gittiğine göre önemli ölçüde farklı bir mesafe kat edebilir. Bu yüzden Çatalca talebi alındığında ilk sorulan bilgilerden biri tam konumdur — ilçe adı tek başına süre tahmini için yeterli değildir.",
            },
            {
                baslik: "Uzun mesafeli sevkiyatta plan disiplini",
                metin:
                    "Kent içi kısa mesafeli bir sevkiyatta plan değişikliği görece ucuza mal olur; Çatalca gibi uzak bir hedefte ise bir plan hatası (yanlış makine, eksik bilgi, iptal edilen randevu) çok daha pahalıya oturur çünkü aracın geri dönüp tekrar gitmesi ciddi bir süre demektir. Bu yüzden Çatalca sevkiyatlarında keşif ve teyit adımları normalden daha titiz yürütülür — makine yola çıkmadan önce saha bilgisi, erişim durumu ve teslim alacak kişi bilgisi son kez doğrulanır.",
            },
            {
                baslik: "Düzenli Çatalca talebinde randevu bloklama",
                metin:
                    "İlçedeki düzenli veya tekrar eden bir iş için (örneğin bir tesisin periyodik bakım kalemi), sevkiyat mesafesinin uzunluğu, önceden randevu bloklamayı özellikle değerli kılar. Tarih önceden belirlendiğinde, o güne özel bir sevkiyat turu ayrılır ve son dakika bir başka talep bu turu bozmaz. Plansız, aynı gün bildirilen bir Çatalca talebi de karşılanır ama uzun mesafe nedeniyle varış saati, önceden planlanmış bir taleple aynı kesinlikte verilemez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çatalca sevkiyatında üç hub karşılaştırması",
                paragraflar: [
                    "Çatalca'ya hizmet açısından üç hub'ın konumu aşağıda karşılaştırılmıştır. Mesafe rakamları verilmemiştir; sütunlar kategorik bir karşılaştırma sunar.",
                ],
                tablo: {
                    basliklar: ["Hub", "Yaka", "Çatalca'ya göreli mesafe", "Kullanım durumu"],
                    satirlar: [
                        ["İkitelli (Avrupa yakası)", "Aynı yaka", "En yakın seçenek", "Standart, birincil kaynak"],
                        ["Tuzla (Anadolu yakası)", "Karşı yaka", "En uzak seçenek", "Yalnız istisnai durumda"],
                        ["Gebze (doğu kuşağı)", "Karşı yaka, daha uzak", "En uzak seçenek", "Yalnız istisnai durumda"],
                    ],
                },
            },
            {
                baslik: "Dürüst süre beklentisi kurmak",
                paragraflar: [
                    "Çatalca gibi uzak bir ilçede en sık karşılaştığımız sorun, süre beklentisinin kent merkezindeki bir ilçeyle karıştırılmasıdır — 'İkitelli'den bir saatte gelir' varsayımı, Çatalca için genelde gerçekçi değildir. Bu yüzden ilk temasta ilçenin coğrafi konumu ve buna bağlı taban süre açıkça konuşulur; teklif bu gerçekçi süre üzerine kurulur, sonradan 'yol uzun sürdü' gerekçesiyle revize edilmez.",
                    "Bu dürüstlüğün karşılığı, sözü verilen sürenin gerçekten tutulmasıdır — beklenti baştan doğru kurulduğu için, teslim de o beklentiyle örtüşür.",
                ],
            },
            {
                baslik: "Uzak ilçede keşfin değeri kentin merkezinden daha yüksektir",
                paragraflar: [
                    "Kent merkezindeki bir ilçede keşif eksikliği, hızlı bir düzeltmeyle telafi edilebilir çünkü ikinci bir sevkiyat kısa sürer. Çatalca'da ise bu telafi maliyeti yüksektir — yanlış giden bir makinenin geri dönüp doğrusuyla değişmesi, kent içi bir hataya göre çok daha fazla zaman yer. Bu yüzden Çatalca taleplerinde keşif verisi (tam konum, erişim yolu, saha zemini, teslim alacak kişi) ilk temas anında eksiksiz toplanır; 'sahada hallederiz' yaklaşımı bu mesafede risklidir.",
                    "Tekrar eden müşterilerde bu veri kayıtlı tutulur ve her yeni talep, sıfırdan keşif yerine bu kayıt üzerinden hızla teyit edilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Çatalca'ya gerçekten makine gönderiyor musunuz, yoksa çok mu uzak?",
                cevap:
                    "Gönderiyoruz ve düzenli olarak yapıyoruz — uzaklık, hizmeti imkânsız kılan değil, planlamayı farklılaştıran bir etken. İkitelli hub'ımız, üç hub arasında Çatalca'ya en yakın kaynak olduğu için standart olarak buradan sevkiyat yapılır. Tek fark, süre beklentisinin kent merkezindeki bir ilçeye göre daha uzun taban süre içermesidir ve bu, teklif aşamasında açıkça söylenir.",
            },
            {
                soru: "Neden Tuzla veya Gebze'den değil de İkitelli'den geliyor?",
                cevap:
                    "Çünkü coğrafi olarak İkitelli, Avrupa yakasında olduğu için Çatalca'ya diğer iki hub'dan daha yakındır — Tuzla ve Gebze Anadolu yakasında yer alır ve oradan bir sevkiyat hem boğaz geçişini hem ek bir uzun mesafeyi gerektirir. Bu yüzden Çatalca'ya normal koşulda yalnızca İkitelli'den sevkiyat yapılır; diğer iki hub yalnızca İkitelli parkının tükendiği istisnai durumlarda ve süre farkı açıkça bildirilerek devreye girer.",
            },
            {
                soru: "İlçe merkezinde değil, uzak bir köydeyiz; bu süreyi değiştirir mi?",
                cevap:
                    "Evet, değiştirebilir — Çatalca'nın geniş ve dağınık yerleşim dokusu nedeniyle 'Çatalca' tek başına yeterli bir konum bilgisi değildir. Talep alındığında tam konum sorulur ve süre tahmini buna göre verilir; ilçe merkezine yakın bir nokta ile uzak bir köy arasında belirgin fark olabilir. Doğru bir tahmin için ilk temasta konum bilgisini mümkün olduğunca net paylaşmanız önerilir.",
            },
            {
                soru: "Randevu saatini kesin verebilir misiniz, yoksa geniş bir aralık mı?",
                cevap:
                    "Önceden bildirilen düzenli taleplerde kesin bir saat penceresi verilir — o güne özel bir sevkiyat turu ayrılır ve bu tur başka bir taleple bozulmaz. Aynı gün bildirilen plansız taleplerde ise, uzun mesafe nedeniyle pencere biraz daha geniş tutulur çünkü aracın o anki konumu ve park durumu süreyi etkiler. Kesinlik istiyorsanız, mümkün olduğunca önceden bildirim yapmanız en etkili yöntemdir.",
            },
            {
                soru: "Sahamızın erişim yolu dar/toprak; bu Çatalca'da sorun olur mu?",
                cevap:
                    "İlçenin kırsal-yarı kırsal dokusu düşünüldüğünde bu durum sık karşılaştığımız bir profildir ve keşifte özellikle sorulur — erişim yolunun genişliği, zemin türü ve mevsimsel durumu (yağmur sonrası toprak yol gibi) fotoğraf ve tarifle doğrulanır. Standart makine geçemeyecekse, arazi tipi lastikli alternatif veya kademeli erişim planı birlikte değerlendirilir. Bu bilgiyi talep sırasında paylaşmanız, doğru makinenin ilk seferde gönderilmesini sağlar.",
            },
            {
                soru: "Acil bir arızamız olursa Çatalca'ya ne kadar sürede makine ulaşır?",
                cevap:
                    "Dürüst cevap şudur: kent merkezindeki bir ilçeye göre daha uzun bir taban süre vardır ve bunu gizlemeyiz. Talebiniz alındığında İkitelli park durumu kontrol edilir, tam konumunuz sorulur ve bu iki veriye göre gerçekçi bir varış saati söylenir. Mesafe kısaltılamaz ama belirsizlik kısaltılabilir — verilen saat, iyimser bir tahmin değil, güzergâh ve park durumuna göre hesaplanmış bir sözdür ve tutulur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Çatalca'nın İstanbul'un Avrupa yakasındaki en batı ve geniş yüz ölçümlü ilçelerinden biri olduğu, kırsal-yarı kırsal dokusu kamuya açık bilgidir; hub tahsisi ve süre dürüstlüğü firma pratiğidir.",
    },

    // ── HİZMET SAYFALARI — 3-HUB SEVKİYAT MODELİ ODAKLI ─────────────────
    // Domain profili: İkitelli (Avrupa yakası, merkez OSB), Tuzla (Anadolu
    // yakası, tersane/ihtisas OSB kuşağı) ve Gebze (Anadolu yakası doğu,
    // D-100/TEM sanayi-lojistik kuşağı) hub'larından koordineli sevkiyat.
    // Her sayfa bu üçlü hub kimliğine somut biçimde bağlanır; jenerik
    // "her yerde hizmet veririz" ifadesi yasaktır.

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Sepetli / Örümcek Platform Kiralama — Üç Hub'dan Dar Alan Erişimi",
        giris:
            "Örümcek platform (paletli, uzaktan kumandalı, katlanır bomlu kompakt sepetli makine) çoğu iş için değil, tam olarak belirli bir sorun için tercih edilir: standart makaslı veya eklemli platformun geçemediği kapı, merdiven veya asansör darlığından geçip iç mekânda yeniden açılabilmesi. Üç hub'ımızın kapsadığı coğrafyada bu sorun üç farklı yüzle karşımıza çıkar — İkitelli'nin sanayi sitelerinde dar merdivenli katlı atölyeler, Tuzla'nın tersane ve OSB idari binalarındaki asansör-koridor darlıkları, Gebze kuşağının depo ve fabrika ofis bloklarındaki ışıklık-cam tavan işleri. Örümcek platformun paletli hareketi zemine düşük nokta yükü bindirir, bu da parke, seramik veya cilalı mermer gibi hassas zeminlerde onu diğer sınıflardan ayıran asıl özelliktir. Hangi hub'dan hangi model gönderileceği, işin geçtiği kapı genişliği, kat sayısı ve zemin türüne göre keşifte netleşir; üç hub'ın stok karması birbirinden farklı olduğu için bazen komşu hub'dan destek gerekebilir.",
        maddeler: [
            {
                baslik: "Dar geçit ve merdivenden geçiş — İkitelli site dokusu",
                metin:
                    "İkitelli'nin katlı sanayi sitelerinde asansör her zaman büyük makineyi taşımaz; örümcek platform katlanmış hâlde dar kapı ve merdiven sahanlıklarından geçip iç mekânda tekrar açılabilir. Bu özellik, üst kat atölyelerindeki tavan ve tesisat işlerinde forklift-rampa kombinasyonuna alternatif oluşturur. Geçit ölçüsü, kapı yüksekliği ve merdiven dönüş açısı, keşifte fotoğrafla doğrulanan üç temel veridir.",
            },
            {
                baslik: "Zemin yükü hassasiyeti — cilalı ve hassas yüzeyler",
                metin:
                    "Standart tekerlekli platformların nokta yükü, cilalı mermer veya epoksi kaplı zeminlerde iz veya çatlak riski taşıyabilir; örümcek platformun paletleri yükü geniş bir yüzeye yayarak bu riski düşürür. Ofis lobisi, showroom veya idari bina zemin işlerinde bu fark, makine seçimini doğrudan belirler. Hassas zeminlerde ayrıca koruma örtüsü serilmesi de standart uygulamadır.",
            },
            {
                baslik: "Tuzla'da idari bina ve ofis atriumları",
                metin:
                    "Tersane ve OSB idari binalarının çoğu, üretim sahasından ayrı, cam cepheli ve yüksek tavanlı ofis-atrium bölümlerine sahiptir; bu bölümlerde aydınlatma armatürü değişimi veya cam yüzey bakımı gibi işler, üretim sahasının ağır ekipman düzeninden farklı, hassas bir yaklaşım ister. Örümcek platform, ofis mobilyası ve zemin kaplamasına zarar vermeden bu işleri üstlenir; Tuzla hub'ının parkında bu iş için ayrılmış kompakt modeller bulunur.",
            },
            {
                baslik: "Gebze kuşağında depo ofis blokları ve ışıklık çalışması",
                metin:
                    "Lojistik depo ve fabrika komplekslerinin idari blokları, genellikle üretim-depo hacminden ayrı, standart kat yüksekliğinde binalardır; buradaki ışıklık, tavan aydınlatması veya cam çatı bakımı işleri örümcek platformun tipik alanıdır. Gebze hub'ının depo yoğun bölgesinde bu tip talep, ana depo hacmindeki makaslı-eklemli işlerden ayrı bir hat olarak planlanır ve genelde küçük ölçekli, kısa süreli olur.",
            },
            {
                baslik: "Hub'lar arası model dağılımı ve destek mantığı",
                metin:
                    "Örümcek platform, üç hub'ın da parkında bulunan ama düşük hacimli bir sınıftır; talebin yoğunlaştığı hub'da model yetersiz kalırsa komşu hub'dan kısa sürede destek sağlanır. Bu dağıtım kararı, işin geçtiği geçit ölçüsü ve zemin hassasiyeti verisiyle birlikte, hangi hub'ın o anki uygun modeli boşta tuttuğuna bakılarak verilir — üç hub'lı yapının esnekliği, tek depoya göre bu tip niş taleplerde daha hızlı çözüm üretir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş tipine göre örümcek platform ve hub eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, tipik iş senaryolarını, en yakın hub'ı ve zemin notunu birlikte gösterir. Geçit ölçüsü her senaryoda ayrıca doğrulanır.",
                ],
                tablo: {
                    basliklar: ["İş senaryosu", "En yakın hub", "Kritik ölçü", "Zemin notu"],
                    satirlar: [
                        ["Sanayi sitesi üst kat atölyesi", "İkitelli", "Merdiven/kapı genişliği", "Standart beton"],
                        ["Tersane idari bina atriumu", "Tuzla", "Asansör-koridor darlığı", "Cilalı/hassas"],
                        ["Depo ofis bloğu ışıklık", "Gebze", "Kat yüksekliği", "Ofis zemin kaplaması"],
                        ["OSB showroom/lobi işi", "En yakın hub", "Kapı-döner kapı ölçüsü", "Mermer/parke"],
                        ["Cam çatı iç yüzey bakımı", "En yakın hub", "Erişim açısı", "Koruma örtüsü gerekir"],
                    ],
                },
            },
            {
                baslik: "Paletli hareketin sağladığı pratik avantaj",
                paragraflar: [
                    "Örümcek platformun düşük ağırlığı ve geniş yük dağıtımı, yalnızca zemin koruması değil, taşıma lojistiği açısından da avantaj sağlar: makine parçalı olarak dar kapılardan sokulup iç mekânda birleştirilebilir, bu da klasik makaslı-eklemli sınıfın giremediği yapılarda çözüm üretir. Uzaktan kumanda özelliği, operatörün sepetin dışından da makineyi konumlandırabilmesini sağlar; bu, dar koridorlarda manevra güvenliğini artırır.",
                ],
            },
            {
                baslik: "Uzaktan kumanda ve dar alan güvenlik disiplini",
                paragraflar: [
                    "Dar iç mekânda çalışan örümcek platformda güvenlik disiplini iki katmanlıdır: sepet içi operatör iş sırasında standart emniyet ekipmanını kullanır, makinenin konumlandırma aşamasında ise ikinci kişi uzaktan kumandayla dışarıdan yönlendirme yapabilir. Bina içi yaya trafiğinin sürdüğü ofis ve idari binalarda çalışma alanı geçici olarak işaretlenir; iş bitince alan anında normal kullanıma açılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Örümcek platform standart bina asansörüne sığar mı?",
                cevap:
                    "Çoğu modelde evet — makine katlanmış taşıma konumundayken standart yük asansörü ölçülerinin çoğuna girer; ancak kesin cevap asansör kabin ölçüsü ve kapasitesiyle makinenin katlı-hâl ölçüsünün karşılaştırılmasına bağlıdır. Keşifte asansör etiket bilgisi (kapasite, kabin ölçüsü) istenir ve buna göre uygun model belirlenir. Asansör yetersizse merdivenden manuel taşıma alternatifi değerlendirilir; bu durumda makinenin ağırlığı ve merdiven dönüş açısı belirleyicidir.",
            },
            {
                soru: "Dar merdivenli bir binada üst kata çıkabilir mi?",
                cevap:
                    "Bazı kompakt modeller merdivenden manuel olarak taşınabilir ve katta yeniden monte edilebilir; bu, ağırlığa ve merdiven genişliği-dönüş açısına bağlı bir keşif konusudur. Genel kural şudur: merdiven sahanlığı makinenin en dar ölçüsünden geniş olmalı ve taşıma için yeterli personel bulunmalıdır. Bu iş fiyatlandırması, standart teslimattan farklıdır çünkü ek işçilik gerektirir; keşifte bu fark açıkça belirtilir.",
            },
            {
                soru: "Cilalı mermer zeminde kullanınca iz bırakır mı?",
                cevap:
                    "Doğru lastik ve koruma önlemiyle bırakmaz — örümcek platformların paletleri genellikle iz bırakmayan kauçuk kaplıdır ve nokta yükü geniş yüzeye yayılır, ancak hassas zeminlerde ek koruma örtüsü serilmesi standart uygulamamızdır. Zemin türü ve hassasiyeti keşifte önceden sorulur; showroom veya lobi gibi görsel açıdan kritik alanlarda bu koruma hiçbir zaman atlanmaz.",
            },
            {
                soru: "Bölgemize hangi hub'dan gönderiliyor, buna kim karar veriyor?",
                cevap:
                    "Karar iki veriye bakılarak verilir: işin bulunduğu ilçenin coğrafi olarak hangi hub'a en yakın olduğu ve o hub'ın o gün için uygun örümcek platform modelinin boşta olup olmadığı. İkitelli hub'ı Avrupa yakasını, Tuzla ve Gebze hub'ları Anadolu yakasının farklı kesimlerini kapsar. Model boşta değilse komşu hub'dan kısa sürede destek sağlanır; bu durumda süre farkı talep alınırken açıkça bildirilir.",
            },
            {
                soru: "Cam çatı veya ışıklık üzerinde çalışırken düşme riski nasıl yönetiliyor?",
                cevap:
                    "Cam yüzey üzeri çalışmada sepetin kendi emniyet sistemine ek olarak, çalışma alanının altına geçici işaretleme ve gerekiyorsa koruma önlemi eklenir; operatör, cam yüzeyin taşıma kapasitesini bilerek ve sepeti cam üzerine değil çevresine konumlandırarak çalışır. İş öncesi yapı sahibinden veya yönetiminden cam yüzeyin statik durumu hakkında bilgi alınması, planın ilk adımıdır — bu bilgi olmadan cam üstü yakın çalışma başlatılmaz.",
            },
            {
                soru: "Sadece birkaç saatlik bir iç mekân işimiz var, örümcek platform kiralamak pahalı mı?",
                cevap:
                    "Niş bir sınıf olduğu için birim fiyatı standart makaslıdan farklıdır, ama kısa süreli işlerde bölge turlarına dizilme imkânı burada da geçerlidir: aynı hub bölgesinde aynı gün başka bir kısa iç mekân talebi varsa nakliye paylaşılır. Tarih esnekliğiniz varsa bu ekonomiden yararlanırsınız; sabit tarihli acil işlerde tekil sevkiyat maliyeti teklifte açıkça görünür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Örümcek/sepetli platformun paletli-katlanır-uzaktan kumandalı teknik yapısı kamuya açık ürün bilgisidir; hub dağıtım ve destek mantığı firma pratiğidir.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Üç Hub'lu Sevkiyat Modeli: İkitelli, Tuzla ve Gebze'den Koordineli Nakliye",
        giris:
            "İstanbul'da tek bir merkezi depodan şehrin tamamına makine göndermek, kâğıt üzerinde basit görünse de sahada iki gerçekle çarpışır: şehir iki yakaya bölünmüştür ve köprü-tünel geçişleri günün belirli saatlerinde ciddi gecikme üretir; ayrıca metropol o kadar geniştir ki tek noktadan çıkan bir aracın en uzak ilçeye ulaşması saatler alabilir. Bu iki gerçeğe karşı kurduğumuz çözüm, tek büyük depo yerine üç bölgesel hub'dır: İkitelli hub'ı Avrupa yakasının merkezi sanayi dokusuna, Tuzla hub'ı Anadolu yakasının güneyindeki tersane ve ihtisas OSB kuşağına, Gebze hub'ı ise Anadolu yakasının doğusundaki D-100/TEM sanayi-lojistik kuşağına konumlanmıştır. Bir talep geldiğinde ilk soru 'İstanbul'da nerede' değil, 'hangi hub'a coğrafi olarak en yakın ve boğaz geçişi gerektirmeden ulaşılabilir' sorusudur — sevkiyat kararı bu mantıkla verilir ve sonuç, şehir dışından tek araçla gelen modele göre belirgin biçimde daha kısa ve öngörülebilir teslim süreleridir.",
        maddeler: [
            {
                baslik: "Üç hub'ın coğrafi mantığı ve neden tek depo yetmez",
                metin:
                    "Tek merkezi depo modelinde her sevkiyat, depodan çıkıp şehrin trafik dokusunun tamamını göğüslemek zorunda kalır — Avrupa yakasındaki bir depodan Anadolu yakasına, veya tam tersi, her seferinde köprü ya da tünel geçişi demektir. Üç hub'lı yapı bu zorunluluğu ortadan kaldırır: her hub kendi yakasındaki veya kendi kuşağındaki talebi, boğaz geçişine ihtiyaç duymadan karşılar. Yalnızca hub'ın kendi bölgesinde park yetersiz kaldığında komşu hub'dan destek gerekir ve bu istisnai durumdur, kural değildir.",
            },
            {
                baslik: "İlçe-hub eşleşmesi nasıl kurulur",
                metin:
                    "Her ilçe, coğrafi konumuna göre bir birincil hub'a atanmıştır: Avrupa yakasındaki ilçeler (İkitelli çevresi, Başakşehir, Esenyurt, Arnavutköy, Mahmutbey ve uzak batıda Çatalca) İkitelli hub'ından; Anadolu yakasının güneyi (Tuzla, Pendik ve çevresi) Tuzla hub'ından; Anadolu yakasının doğusu (Gebze kuşağı, GOSB, TOSB, Dilovası) Gebze hub'ından beslenir. Bu eşleşme sabit bir kural değil, güncel trafik ve park verisine göre gerektiğinde esneyen bir varsayılan düzendir.",
            },
            {
                baslik: "Boğaz geçişinden kaçınma prensibi",
                metin:
                    "Köprü ve tünel geçişleri, İstanbul'da sevkiyat süresini en çok belirsizleştiren etkendir — aynı mesafe, geçiş saatine göre yarım saat ile iki saat arasında değişebilir. Üç hub'lı yapının temel tasarım ilkesi, her talebin mümkün olduğunca kendi yakasındaki hub'dan karşılanmasıdır; bu sayede sevkiyat süresi, öngörülemez köprü trafiğine değil, kendi bölgesi içindeki daha istikrarlı yol koşullarına bağlı kalır.",
            },
            {
                baslik: "Talep alındığında sevkiyat kararı nasıl verilir",
                metin:
                    "Bir talep geldiğinde önce işin bulunduğu ilçe ve o ilçenin birincil hub'ı belirlenir, ardından o hub'ın parkında uygun makine ve o gün için uygun sevkiyat penceresi kontrol edilir. Süre tahmini bu iki veriye göre verilir — hub'dan işin adresine olan mesafe ve o saatteki güzergâh yoğunluğu. Talep, aynı hub bölgesindeki başka bir talebe yakın tarihliyse, ikisi aynı tura dizilerek nakliye paylaşılır.",
            },
            {
                baslik: "İstisnai durumlar: hub parkı yetersizse",
                metin:
                    "Bir hub'ın parkı o gün için doluysa veya talep edilen makine tipi o hub'da yoksa, komşu hub'dan destek sağlanır. Bu durumda süre farkı, teklif aşamasında açıkça belirtilir — 'normalde bu bölgeye şu kadar sürede gelir, bugün komşu hub'dan geldiği için şu kadar daha uzun sürecek' biçiminde. Sürprizle karşılaşmamak için bu bilgi talep alınırken, sahaya araç çıkmadan önce paylaşılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hub, kapsama alanı ve tipik sevkiyat süresi",
                paragraflar: [
                    "Aşağıdaki tablo, üç hub'ın kapsadığı ilçe gruplarını ve ana ulaşım akslarını özetler. Süre bandı, hub'a olan mesafeye göre değişir ve kesin teslim saati her talepte ayrıca hesaplanır.",
                ],
                tablo: {
                    basliklar: ["Hub", "Yaka / kuşak", "Kapsadığı bölge örnekleri", "Ana ulaşım aksı"],
                    satirlar: [
                        ["İkitelli", "Avrupa yakası, merkez", "İkitelli, Başakşehir, Esenyurt, Mahmutbey, Arnavutköy, Çatalca", "Basın Ekspres, TEM"],
                        ["Tuzla", "Anadolu yakası, güney", "Tuzla, Pendik, Dudullu OSB çevresi", "Sahil yolu, D-100"],
                        ["Gebze", "Anadolu yakası, doğu / Kocaeli kuşağı", "Gebze, GOSB, TOSB, Dilovası", "D-100, TEM"],
                    ],
                },
            },
            {
                baslik: "Mega kent trafiğinde sevkiyat penceresi planlaması",
                paragraflar: [
                    "Her hub'ın kendi bölgesi içinde de trafik dalgalanması vardır; sevkiyat planı bu dalgalanmayı hesaba katar. Sabah erken ve akşam geç saat teslimatları, hem yol süresini kısaltır hem teslim noktasının kendi kapı-önü trafiğine denk gelmez. Aynı bölgeye birden fazla teslimat varsa, mümkün olduğunca tek turda birleştirilir; bu hem nakliye maliyetini hem trafik maruziyetini azaltır.",
                    "Planlı talepler için sevkiyat penceresi önceden ayrılır ve o pencere başka bir talebe verilmez; plansız-acil taleplerde ise hub'ın o anki park durumuna göre gerçekçi bir varış aralığı bildirilir.",
                ],
            },
            {
                baslik: "Acil talep ile planlı talep süreçlerinin farkı",
                paragraflar: [
                    "Planlı taleplerde süreç önceden işler: iş tarihi, adres ve makine tipi bilindiği için ilgili hub'da yer ayrılır ve sevkiyat günü sürprizsiz geçer. Acil taleplerde ise öncelik, en yakın hub'ın o anki park durumunu hızla kontrol edip gerçekçi bir varış saati vermektir — iyimser bir söz yerine, güzergâh ve trafik verisine dayanan bir tahmin paylaşılır.",
                    "İki süreç de aynı hub mantığından beslenir; fark, bilgiye ne kadar önceden sahip olunduğudur. Tarih esnekliği bildiren müşteriler, planlı sürecin ekonomisinden (tur birleştirme) yararlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bölgemize hangi hub'dan makine geleceğine nasıl karar veriliyor?",
                cevap:
                    "İşin bulunduğu ilçenin coğrafi konumuna göre: Avrupa yakasındaysanız normalde İkitelli hub'ından, Anadolu yakasının güneyindeyseniz Tuzla hub'ından, doğusundaysanız Gebze hub'ından sevkiyat yapılır. Bu atama, boğaz geçişi gerektirmeyen en kısa güzergâhı önceliklendirir. İlgili hub'ın parkı o gün yetersizse komşu hub'dan destek sağlanır ve bu durumda süre farkı açıkça bildirilir.",
            },
            {
                soru: "Karşı yakadan da makine gelebilir mi, yoksa kesinlikle kendi yakamdaki hub'dan mı gelir?",
                cevap:
                    "Standart kural kendi yakanızdaki hub'dan sevkiyattır çünkü bu, boğaz trafiğinden bağımsız ve öngörülebilir sonuç verir. Ancak istisnai durumlarda — birincil hub'ın parkı doluysa veya özel bir makine tipi yalnızca karşı yakadaki hub'da varsa — karşı yakadan sevkiyat da yapılır. Bu durumda süre farkı ve köprü-tünel trafiğine bağlı belirsizlik, teklif aşamasında açıkça söylenir; gizli kalem olarak sonradan çıkmaz.",
            },
            {
                soru: "Teslim süresi tahminleri ne kadar güvenilir?",
                cevap:
                    "Tahmin, hub'dan adresinize olan gerçek mesafe ve o saatteki güzergâh yoğunluğu verisiyle verilir; 'yakındır, hemen gelir' gibi genel ifadeler kullanılmaz. Planlı taleplerde bu tahmin, önceden ayrılan sevkiyat penceresiyle örtüşür ve yüksek doğrulukla tutulur. Acil taleplerde ise hub'ın o anki park durumu değişken olduğu için aralık biraz daha geniş verilir, ama yine gerçek veriye dayanır, iyimser tahmine değil.",
            },
            {
                soru: "Aynı gün birden fazla ilçeye teslimatımız olacak, bu mümkün mü?",
                cevap:
                    "Mümkün ve üç hub'lı yapı tam olarak bunun için tasarlandı: her teslimat, coğrafi olarak en yakın hub'dan bağımsız biçimde planlanır — örneğin aynı gün hem İkitelli hem Gebze bölgesine teslimat gerekiyorsa, ikisi ayrı hub'lardan eş zamanlı olarak yola çıkar, tek merkezi depodan sırayla gönderilen modele göre toplam süre belirgin kısalır. Talep listenizi paylaşırsanız hangi teslimatın hangi hub'dan çıkacağı önceden netleştirilir.",
            },
            {
                soru: "Bize en yakın hub'ın parkı doluysa ne olur, işimiz gecikir mi?",
                cevap:
                    "Öncelikle komşu hub'ın uygun makinesi olup olmadığına bakılır; varsa oradan destek sağlanır ve bu durumda süre farkı size baştan bildirilir, gizlenmez. İkinci seçenek, aynı hub içinde tarihinizde esneklik varsa sizi bir sonraki uygun sevkiyat turuna yerleştirmektir — bu genelde en ekonomik çözümdür. Hangi seçeneğin sizin için daha uygun olduğu, aciliyet durumunuza göre birlikte değerlendirilir.",
            },
            {
                soru: "Acil bir arıza durumunda en hızlı hangi hub devreye girer?",
                cevap:
                    "İşin bulunduğu ilçeye coğrafi olarak en yakın hub, park durumu uygunsa devreye girer — bu üç hub'lı yapının en somut faydasıdır, çünkü tek merkezi depo modeline göre ortalama mesafe önemli ölçüde kısalır. Acil talep bildirilirken işin tam konumu ve kotu paylaşılırsa, en yakın hub'ın park durumu hızla kontrol edilip gerçekçi bir varış saati verilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İstanbul'un iki yakaya bölünmüş coğrafyası, köprü-tünel geçiş trafiği ve şehrin büyük ölçeği kamuya açık bilgidir; üç hub'lı sevkiyat atama modeli firma pratiğidir.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Forklift ve İstif Makinesi Kiralama — Hub Depolarından Sevkiyat",
        giris:
            "Forklift talebi, üç hub'ımızın kapsadığı bölgelerde birbirinden oldukça farklı üç profil çizer: İkitelli'nin sanayi sitelerinde katlı atölyelere giren kompakt akülü modeller, Tuzla'nın tersane ve ağır sanayi kuşağında çelik profil ile mermer blok taşıyan yüksek tonajlı dizel forkliftler, Gebze kuşağının lojistik depolarında ise yüksek raf koridorlarında çalışan dar şaseli modeller. Her hub, kendi bölgesinin baskın iş profiline göre bir forklift karması tutar; bu yüzden 'forklift kiralamak' tek bir standart hizmet değil, hangi hub'dan hangi sınıfın geldiğine bağlı, işin niteliğine göre şekillenen bir karardır. İstifleme işinin süresi de bölgeye göre değişir — sanayi sitesinde saatlik-günlük kısa işler yaygınken, lojistik depoda haftalık-aylık daha uzun soluklu kiralamalar öne çıkar.",
        maddeler: [
            {
                baslik: "İkitelli'de kompakt akülü forklift ve triplex asansör",
                metin:
                    "İkitelli'nin katlı sanayi sitelerinde forklift, geniş şasili değil dar şaseli ve triplex asansörlü (alçak asansör kapılarından geçebilen) modeller biçiminde talep edilir. Atölye içi istif, kumaş balyası veya metal parça taşıma gibi işler, günlük-haftalık kısa süreli kiralamalarla yürür ve keşifte önce asansör-kapı ölçüsü doğrulanır, sonra forklift kapasitesi belirlenir.",
            },
            {
                baslik: "Tuzla'da yüksek tonajlı dizel forklift",
                metin:
                    "Tersane ve ihtisas OSB kuşağının yük profili ağırdır — çelik profil, sac paket, mermer blok, fıçılı kimyasal — ve bu yükler yüksek tonajlı dizel forkliftlerle taşınır. Açık stok sahalarında bozuk zemin sık görülen bir sorundur; zemin engebeliyse forklift yerine arazi tipi telehandler önerilir. Ağır yüklerde ağırlık merkezi ve ataşman uyumu, tonaj kadar belirleyicidir.",
            },
            {
                baslik: "Gebze kuşağında yüksek raf ve dar koridor mantığı",
                metin:
                    "Lojistik depo ve dağıtım merkezlerinin raf sistemleri yüksek kotlara uzanır ve koridorlar dardır; bu ortamda forklift seçimi koridor genişliği ve raf yüksekliğiyle doğrudan ilişkilidir. Epoksi zeminlerde iz bırakmayan lastik tercih edilir ve operasyon sürerken çalışılacaksa koridor bazlı planlama yapılır — tüm depo değil, yalnızca ilgili koridor geçici olarak ayrılır.",
            },
            {
                baslik: "Hub'lar arası tonaj ve tip farkının doğru hub'a yönlendirilmesi",
                metin:
                    "Bir talep geldiğinde forklift tipi kadar hangi hub'ın o tipte makineyi stoklu tuttuğu da belirleyicidir: ağır tonajlı bir talep Tuzla veya Gebze hub'ına, kompakt dar şaseli bir talep İkitelli hub'ına yönlendirilir. İşin coğrafi konumu ile ihtiyaç duyulan forklift sınıfı çakışmıyorsa (örneğin İkitelli bölgesinde ağır tonaj gerekiyorsa) komşu hub'dan destek sağlanır ve bu durum süre tahminine yansıtılır.",
            },
            {
                baslik: "Kısa süreli istif işlerinde tur ekonomisi",
                metin:
                    "Sanayi sitesi ve OSB dokusunda kısa süreli forklift ihtiyaçları (yarım günlük boşaltma, birkaç saatlik istif düzeltmesi) tek başına pahalıdır; aynı hub bölgesindeki başka taleplerle aynı güne dizildiğinde nakliye maliyeti paylaşılır. Tarih esnekliği olan talepler bu ekonomiden yararlanır; sabit tarihli acil işlerde tekil sevkiyat da yapılır ve fark teklifte görünür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hub, tipik forklift sınıfı ve iş profili",
                paragraflar: [
                    "Aşağıdaki tablo, üç hub'ın forklift parkındaki ağırlıklı sınıfı ve tipik iş profilini gösterir; bu bir katılık değil, bölgenin baskın talebini yansıtan varsayılan karmadır.",
                ],
                tablo: {
                    basliklar: ["Hub", "Ağırlıklı sınıf", "Tipik iş", "Kritik ölçü"],
                    satirlar: [
                        ["İkitelli", "Kompakt akülü, triplex asansör", "Atölye içi istif", "Kapı-asansör geçidi"],
                        ["Tuzla", "Yüksek tonajlı dizel", "Çelik/mermer/kimyasal yük", "Ağırlık merkezi, zemin"],
                        ["Gebze", "Dar şaseli, yüksek raf uyumlu", "Depo koridor istifi", "Koridor genişliği"],
                    ],
                },
            },
            {
                baslik: "Zemin ve lastik seçimi",
                paragraflar: [
                    "İç mekân depo ve atölye işlerinde iz bırakmayan lastik standarttır; dış saha ve açık stok alanlarında ise dolgu veya pnömatik lastik, zemin türüne göre seçilir. Bozuk veya engebeli zeminde forklift yerine arazi tipi telehandler önerisi, keşifte dürüstçe yapılır — yanlış ekipmanla zorlanmış bir iş, hem makineye hem işe zarar verir.",
                ],
            },
            {
                baslik: "Operatör belgesi ve güvenlik brifingi",
                paragraflar: [
                    "Operatörlü forklift kiralamada belge kontrolü ve saha brifingi standart adımdır: operatör yeterlilik belgesi doğrulanır, sahanın kendi trafik düzeni (yaya geçişleri, diğer araçlar) brifinge dahil edilir. Depo içi işlerde yaya-araç ayrımı, çalışma sırasında işaretlenen koridorlarla sağlanır; ağır sanayi sahalarında ise yük tablosu dışı kaldırma kesinlikle reddedilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemiz üst katta, forklift oraya nasıl çıkar?",
                cevap:
                    "Bina yük asansörünün kapasitesi ve kabin ölçüsü yeterliyse kompakt akülü forklift asansörle katta çalışabilir; yetmiyorsa iş, malzemenin rampadan forkliftle kata beslenmesi biçiminde planlanır. Keşifte asansör etiket bilgisi ve kapı ölçüleri doğrulanır; bu iki veri, hangi modelin uygun olduğunu netleştirir.",
            },
            {
                soru: "Ağır bir mermer blok yükümüz var, hangi hub'dan forklift gelir?",
                cevap:
                    "Ağır tonajlı yükler için normalde Tuzla veya Gebze hub'ının parkındaki yüksek tonajlı dizel modeller yönlendirilir; işin İkitelli bölgesinde olması durumunda bile ağır tonaj gerekiyorsa komşu hub'dan destek sağlanır. Blok ağırlığı ve zemin durumu keşifte netleştirilir; zemin bozuksa telehandler alternatifi de değerlendirilir.",
            },
            {
                soru: "Depo koridorlarımız dar, standart forklift dönemez; ne öneriyorsunuz?",
                cevap:
                    "Koridor genişliği önceden ölçülür ve dar şaseli, yüksek raf uyumlu modeller önerilir; bu sınıf özellikle Gebze kuşağındaki lojistik depo talebine göre hub parkında hazır tutulur. Koridor ölçüsü fotoğraf ve rakamla keşifte doğrulanır; hiçbir model geçemiyorsa alternatif çözüm (kademeli taşıma, daha küçük ekipman) dürüstçe sunulur.",
            },
            {
                soru: "Sadece birkaç saatlik boşaltma işimiz var, günlük ücret mi ödeyeceğiz?",
                cevap:
                    "Hub bölgenizde aynı güne dizilebilecek başka bir talep varsa hayır — kısa işler bölge turlarına yerleştirilerek nakliye paylaşılır ve maliyet gerçek iş süresine yaklaşır. Bu tarih esnekliği gerektirir; sabit tarihli acil işlerde tekil sevkiyat maliyeti teklifte açıkça görünür.",
            },
            {
                soru: "Operatörlü mü yoksa kendi operatörümüzle mi çalışmalıyız?",
                cevap:
                    "İki seçenek de mümkündür; operatörlü kiralamada operatör belgesi ve saha brifingi bizim tarafımızdan yürütülür, kendi operatörünüzle çalışırsanız makine teslimi öncesi belge kontrolü sizinle birlikte yapılır. Ağır tonajlı veya dar koridorlu işlerde, sahaya aşina hub operatörüyle çalışmak genelde daha hızlı sonuç verir.",
            },
            {
                soru: "Zeminimiz bozuk, forklift oraya girebilir mi?",
                cevap:
                    "Zemin bozukluğu yüzeyselse arazi tipi dizel forklift yeterli olabilir; engebe belirginse forklift yerine dört teker çekişli telehandler önerilir — bozuk sahada güvenle ilerler ve bom uzatmasıyla istif yüksekliği de kazandırır. Saha fotoğrafı ve yük ağırlığı paylaşılırsa keşif, doğru ekipmanı netleştirir; yanlış ekipmanla zorlama önerilmez.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bölgelerin sanayi/lojistik profil farkları (İkitelli sanayi sitesi, Tuzla ağır sanayi, Gebze lojistik depo) kamuya açık bilgidir; hub-forklift eşleşmesi firma pratiğidir.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Eklemli Platform (Boom Lift) Kiralama — Üç Hub'ın Dağıtım Mantığı",
        giris:
            "Eklemli platformun makaslıdan ayrılan asıl özelliği, bomun kırılımlı hareketiyle bir engelin üzerinden veya yanından dolaşarak sepeti hedefe taşıyabilmesidir — düz yukarı çıkan makaslının aksine, eklemli bom yatayda da uzanır. Bu özellik, üç hub'ımızın bölgelerinde farklı biçimlerde işe yarar: İkitelli'nin dar sanayi sitesi sokaklarında dar şaseli akülü eklemliler cephe-tabela işlerini üstlenir, Tuzla'nın tersane sahalarında dizel eklemliler gemi bordasının eğrisel yüzeylerine sepeti paralel konumlandırır, Gebze kuşağının depo ve fabrika hollerinde ise raf-vinç yolu gibi sabit engellerin üzerinden erişim sağlar. Hangi hub'dan hangi eklemli sınıfın (akülü mü dizel mi, dar şaseli mi geniş erişimli mi) gönderileceği, işin geçtiği engel tipine ve iç-dış mekân ayrımına göre belirlenir; üç hub'ın parkı bu çeşitliliği farklı ağırlıklarla taşır.",
        maddeler: [
            {
                baslik: "Eklemli bomun kırılımlı erişim avantajı",
                metin:
                    "Düz teleskopik bom, hedefe doğrudan çizgisel erişir; eklemli bom ise dirsek noktalarından kırılarak bir engelin üzerinden aşabilir veya altından dolaşabilir. Bu, sabit engellerin (merdiven boşluğu, korkuluk, boru hattı, çıkma cephe elemanı) bulunduğu sahalarda düz bomun giremediği noktalara ulaşmayı sağlar. Karar, işin geçtiği güzergâhın düz mü kırılımlı mı erişim gerektirdiğine bakılarak keşifte verilir.",
            },
            {
                baslik: "İkitelli'de site içi tabela-cephe dar şaseli eklemli",
                metin:
                    "Sanayi sitesi sokaklarının darlığı, geniş şasili dizel eklemliye yer bırakmaz; dar şaseli akülü modeller burada standarttır. Tabela montajı, cephe kontrolü ve elektrik-aydınlatma işleri, sokak genişliğine göre seçilen bu sınıfla yürür; sokağın köşe dönüş yarıçapı, keşifte makine geçmeden önce ölçülür.",
            },
            {
                baslik: "Tuzla'da tersane borda ve eğrisel yüzey erişimi",
                metin:
                    "Gemi bordasının kıç ve baş formları eğrisel yüzeyler üretir ve bu yüzeylerde eklemli bomun kırılımı, sepeti yüzeye paralel konumlandırmayı kolaylaştırır — düz teleskopik bom, eğrisel formda sepeti istenen açıda tutamaz. Raspa-boya, kaynak kontrol ve donatım işlerinde eklemli sınıf, tersanenin standart tercihidir; rüzgâr ölçümü kıyı sahasında her işte yapılır.",
            },
            {
                baslik: "Gebze kuşağında depo-fabrika holü içi ve dış saha eklemli",
                metin:
                    "Lojistik depo ve üretim tesislerinin iç hacimlerinde raf sistemleri ve vinç yolları gibi sabit engeller bulunur; akülü eklemli bu engellerin üzerinden veya arasından erişim sağlar. Dış saha işlerinde (çatı, cephe, dış aydınlatma) ise dizel eklemli tercih edilir. Hangi güç tipinin seçileceği, işin iç mi dış mekânda olduğuna ve emisyon kısıtına göre belirlenir.",
            },
            {
                baslik: "Hub kapasite dengesi ve komşu hub desteği",
                metin:
                    "Eklemli platform, üç hub'ın da parkında bulunan yaygın bir sınıftır ama talep yoğunluğu bölgeye göre dalgalanır — örneğin Tuzla'da tersane teslim dönemlerinde talep tepe yapar. Bir hub'ın parkı yetersiz kaldığında komşu hub'dan kısa sürede model kayması yapılır; bu, üç hub'lı yapının tek depoya göre sağladığı esnekliktir ve süre farkı talep alınırken bildirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hub, iş tipi ve eklemli sınıf tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, üç hub'ın tipik eklemli platform kullanım senaryolarını ve güç tipi tercihini gösterir.",
                ],
                tablo: {
                    basliklar: ["Hub", "Tipik iş", "Sınıf", "Güç tipi tercihi"],
                    satirlar: [
                        ["İkitelli", "Site içi tabela-cephe", "Dar şaseli eklemli", "Akülü"],
                        ["Tuzla", "Tersane borda erişimi", "Uzun erişimli eklemli", "Dizel"],
                        ["Gebze", "Depo/fabrika holü içi", "Kompakt eklemli", "Akülü"],
                        ["Gebze", "Dış saha çatı-cephe", "Standart eklemli", "Dizel"],
                    ],
                },
            },
            {
                baslik: "Dizel ve akülü eklemli arasındaki seçim mantığı",
                paragraflar: [
                    "İç mekânda emisyon ve gürültü kısıtı akülü sınıfı zorunlu kılar; dış sahada ise akü kapasitesinin sınırlı çalışma süresi ve dizelin daha yüksek tork-erişim kombinasyonu, seçimi dizel yönüne çevirebilir. Karma işlerde (hem iç hem dış mekân geçişi olan büyük tesisler) her iki tip aynı projede farklı evrelerde kullanılabilir; bu geçiş, keşifte önceden planlanır.",
                ],
            },
            {
                baslik: "Bom açı ve erişim planlama disiplini",
                paragraflar: [
                    "Eklemli bomun kırılım noktaları, keşifte üç boyutlu olarak düşünülür — yatay uzanım, dikey kot ve dönüş açısı birlikte hesaplanır. Dar dokuda bom ucunun salınım payı, açık sahadakinden daha sıkı planlanır; komşu yapı veya makinelere temas riski, çalışma öncesi bariyer ve yönlendirmeyle önlenir. Tersane gibi vinç trafiğinin yoğun olduğu sahalarda bom hareketleri, saha vinç planıyla koordineli yürütülür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Eklemli mi teleskopik mi seçmeliyiz, aramızdaki fark ne?",
                cevap:
                    "Fark erişim geometrisinde: teleskopik bom düz ve uzun bir çizgide hedefe gider, eklemli bom ise dirsek noktalarından kırılarak bir engelin üzerinden veya yanından dolaşabilir. Hedefe engelsiz düz erişim varsa teleskopik daha hızlıdır; hedefle aranızda korkuluk, boru hattı veya eğrisel yüzey gibi bir engel varsa eklemli gereklidir. Keşifte güzergâh üzerindeki engeller değerlendirilip doğru sınıf önerilir.",
            },
            {
                soru: "Site sokağımız dar, geniş şasili eklemli sığar mı?",
                cevap:
                    "Sığmayabilir — bu yüzden dar dokuda dar şaseli akülü eklemli sınıf tercih edilir. Sokak genişliği ve köşe dönüş yarıçapı keşifte ölçülür; hiçbir model geçemiyorsa alternatif erişim yöntemi (sokak ağzından uzun bomlu makine veya kademeli çalışma) dürüstçe sunulur. 'Sığar herhalde' varsayımıyla makine gönderilmez, ölçü önceden doğrulanır.",
            },
            {
                soru: "Tersanede gemi bordasında hangi eklemli doğru?",
                cevap:
                    "Borda formuna göre değişir: düz yüksek kesimlerde uzun erişimli dizel eklemli hızlı sonuç verir, kıç-baş formlarının eğrisel yüzeylerinde ise kırılım noktası daha fazla olan modeller sepeti yüzeye paralel tutmayı kolaylaştırır. Çoğu iş her ikisinin birlikte kullanılmasıyla tamamlanır. Rüzgâr ölçümü, kıyı sahasında her işte standart adımdır.",
            },
            {
                soru: "Depomuzda raf sistemi çok yüksek, eklemli buraya girebilir mi?",
                cevap:
                    "Koridor genişliği ve raf yüksekliği birlikte değerlendirilir; kompakt akülü eklemli modeller dar koridorlarda çalışabilecek şekilde seçilir. Raf üstü işlerde rafın kendi yüksekliği hesaba katılır ve makine, koridor arasına güvenle girecek şase genişliğiyle belirlenir. Operasyon sürerken çalışılacaksa koridor bazlı kapama planı yapılır.",
            },
            {
                soru: "Dış saha çatı işimiz var ama emisyon kısıtımız yok, dizel mi akülü mü daha uygun?",
                cevap:
                    "Dış sahada ve emisyon kısıtı yoksa dizel genelde daha verimlidir çünkü akü kapasitesi sınırı olmadan uzun ve sürekli çalışma sağlar, ayrıca daha yüksek tork sunar. Akülü tercih edilecekse gün içi şarj molası planlanmalıdır. İşin süresi ve günlük çalışma temposu paylaşılırsa, doğru güç tipi keşifte netleştirilir.",
            },
            {
                soru: "Bölgemizde eklemli platform yoksa nasıl gönderiyorsunuz?",
                cevap:
                    "Önce işin bulunduğu ilçenin birincil hub'ında uygun model kontrol edilir; yoksa komşu hub'dan destek sağlanır. Bu durumda süre farkı, talep alınırken açıkça bildirilir — sahaya araç çıkmadan önce netleşir. Talep yoğunluğunun dalgalandığı dönemlerde (örneğin tersane teslim haftalarında) bu destek mekanizması sık kullanılır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platformun kırılımlı erişim özelliği ve dizel-akülü ayrımı kamuya açık teknik bilgidir; hub-sınıf eşleşmesi firma pratiğidir.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "İç Mekan Depo Platformu Kiralama — Hub Depolarının Kendi İşleri",
        giris:
            "Üç hub'ımızın her biri kendi bölgesindeki depo yapılarına hizmet verirken, o depoların kendi iç işleri de düzenli bir talep kalemidir — raf montajı, aydınlatma yenileme, sprinkler hattı bakımı, sensör-kamera kurulumu gibi kalemler, İkitelli'nin sanayi sitesi atölyelerinden Tuzla'nın ihtisas OSB depolarına, Gebze kuşağının büyük lojistik dağıtım merkezlerine kadar benzer bir mantıkla ama farklı ölçekte tekrarlanır. İç mekân depo işinin ortak paydası, çalışma sırasında operasyonun tamamen durdurulamamasıdır — depo genelde kısmen veya tamamen aktif kalırken makine, koridor bazlı bir plan içinde ilerler. Akülü güç tipi ve iz bırakmayan lastik, üç hub'ın da depo işlerinde standart tercihtir; farklılaşan nokta, depo ölçeğine ve operasyon yoğunluğuna göre çalışma penceresinin nasıl kurulduğudur.",
        maddeler: [
            {
                baslik: "Akülü zorunluluğu — emisyon ve gürültü",
                metin:
                    "Kapalı depo hacminde dizel makinenin egzoz emisyonu havalandırma sistemine yük bindirir ve çoğu tesiste kapalı alanda dizel kullanımı zaten yasaktır; akülü platform bu yüzden iç mekân depo işlerinin standart seçimidir. Akülü modelin sessiz çalışması, operasyon devam ederken yapılan işlerde ayrı bir avantaj sağlar — gürültü, komşu koridordaki çalışanları rahatsız etmez.",
            },
            {
                baslik: "İz bırakmayan lastik ve zemin koruma",
                metin:
                    "Depo zeminleri çoğunlukla epoksi veya perdahlı betondur ve standart siyah lastik bu yüzeylerde iz bırakır; iz bırakmayan (beyaz dolgu) lastikli modeller bu yüzden depo işlerinde tercih edilir. Yükleme rampası çevresindeki kot farkları ve çukur önleme sistemi, keşifte ayrıca kontrol edilir; hassas zeminlerde ek koruma önlemi de uygulanabilir.",
            },
            {
                baslik: "Operasyon kesintisiz depo — gece ve düşük tempo pencere planı",
                metin:
                    "7/24 çalışan lojistik depolarda tüm operasyonu durdurmak mümkün değildir; bu yüzden iş, operasyonun en düşük tempolu saatlerine (genelde gece veya sabah erken) yazılır ve yalnızca çalışılan koridor geçici olarak kapatılır. Komşu koridorlar akmaya devam eder ve her koridor bittiğinde anında operasyona iade edilir. Bu koridor bazlı sıra planı, depo yönetimiyle önceden netleştirilir.",
            },
            {
                baslik: "Koridor ve dar geçit ölçü uyumu",
                metin:
                    "Modern depo koridorları, forklift ve reach truck trafiğine göre dar tutulmuş olabilir; platform seçiminde şase genişliği bu koridor ölçüsüyle karşılaştırılır. Raf üstü işlerde rafın kendi yüksekliği de hesaba katılır — sepetin hedefin biraz altında kaldığı unutulmamalı, çalışma yüksekliği hedef kotun üzerinde seçilir.",
            },
            {
                baslik: "Hub'a göre depo tipi farkı",
                metin:
                    "İkitelli'deki depo işleri genelde sanayi sitesi atölyelerinin küçük ölçekli iç mekân kalemleridir; Tuzla'daki ihtisas OSB depolarında sektöre özgü koşullar (kimya, deri, mermer) devreye girer; Gebze kuşağındaki büyük lojistik dağıtım merkezlerinde ise yüksek raf ve geniş koridor ölçeğinde işler görülür. Her hub, kendi bölgesindeki bu ölçek farkına uygun makine karmasını tutar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hub, depo tipi ve tipik iş tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, üç hub'ın bölgesindeki tipik depo işlerini ve ekipman tercihini özetler.",
                ],
                tablo: {
                    basliklar: ["Hub", "Depo tipi", "Tipik iş", "Ekipman"],
                    satirlar: [
                        ["İkitelli", "Sanayi sitesi atölye deposu", "Raf-aydınlatma küçük ölçek", "Akülü makaslı"],
                        ["Tuzla", "İhtisas OSB deposu", "Sektöre özgü koşullu işler", "Akülü makaslı/eklemli"],
                        ["Gebze", "Lojistik dağıtım merkezi", "Yüksek raf-geniş koridor", "Akülü makaslı, dar şaseli"],
                    ],
                },
            },
            {
                baslik: "Gece ve düşük tempo pencere planlaması",
                paragraflar: [
                    "Büyük depolarda aydınlatma veya sprinkler yenileme gibi kapsamlı işler, tek seferde değil haftalık gece pencerelerine bölünerek yürütülür — her gece bir veya birkaç koridor alınır, operasyonun geri kalanı etkilenmez. WMS-vardiya yöneticisiyle kurulan sıra planı, hangi koridorun hangi gece işleneceğini önceden netleştirir; bu model, büyük ölçekli işlerde operasyon kaybını sıfıra indirir.",
                ],
            },
            {
                baslik: "Kısa süreli iç mekân işlerinde tur ekonomisi",
                paragraflar: [
                    "Küçük ölçekli depo işleri (birkaç saatlik sensör montajı, kısa bir aydınlatma kontrolü) tek başına pahalıdır; aynı hub bölgesindeki başka depo taleplerine dizildiğinde nakliye maliyeti paylaşılır. Tarih esnekliği olan talepler bu ekonomiden yararlanır; sabit tarihli acil işlerde tekil sevkiyat maliyeti teklifte açıkça belirtilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Depomuz 7/24 çalışıyor, işi durdurmadan nasıl yapılır?",
                cevap:
                    "Koridor bazlı kapama planıyla: tüm depo durmaz, yalnızca çalışılan koridor geçici kapatılır ve operasyon komşu koridorlardan akmaya devam eder. İş, operasyonun en düşük tempolu saatlerine yazılır, akülü makine sessiz çalışır ve her koridor bittiğinde anında operasyona iade edilir. Sıra planı, depo yönetiminizle haftalık netleştirilir.",
            },
            {
                soru: "Zeminimiz epoksi kaplı, platform iz bırakır mı?",
                cevap:
                    "Standart siyah lastikli makine iz bırakabilir; bu yüzden depo işlerinde iz bırakmayan beyaz dolgu lastikli modeller kullanılır. Bu, keşifte önceden planlanan bir tercihtir, sonradan fark edilen bir sorun değildir. Hassas zeminlerde ek koruma önlemi de değerlendirilebilir.",
            },
            {
                soru: "Koridorlarımız çok dar, standart makaslı sığar mı?",
                cevap:
                    "Koridor genişliği keşifte önceden ölçülür ve şase genişliği bu ölçüyle karşılaştırılır; dar koridorlarda daha ince şaseli modeller tercih edilir. Raf üstü işlerde rafın kendi yüksekliği de hesaba katılır. Sığmama riski varsa, sahaya makine gitmeden alternatif model önerisiyle netleştirilir.",
            },
            {
                soru: "Gece vardiyasında operatör bulabiliyor musunuz?",
                cevap:
                    "Evet, gece pencereli depo işleri düzenli talep ettiğimiz bir kalemdir ve operatör planı buna göre kurulur; vardiya saatleri önceden netleştirilir. Uzun süreli gece işlerinde akü kapasitesi de vardiya süresine göre planlanır, gerekirse vardiya ortası şarj molası eklenir.",
            },
            {
                soru: "Depomuz İkitelli'de küçük ölçekli, Gebze'deki büyük depolarla aynı fiyattan mı kiralıyoruz?",
                cevap:
                    "Hayır — fiyat, makine sınıfı ve iş süresine göre değişir, depo ölçeğinin kendisi doğrudan fiyat belirleyici değildir ama küçük ölçekli işler genelde daha kısa sürede biter ve tur ekonomisinden daha kolay yararlanır. Hangi hub'dan hizmet aldığınız fark etmeksizin, teklif işin kendi kapsamına göre hazırlanır.",
            },
            {
                soru: "Sadece birkaç saatlik bir sensör montajı işimiz var, ekonomik mi?",
                cevap:
                    "Hub bölgenizde aynı güne dizilebilecek başka bir depo talebi varsa evet — kısa işler bölge turlarına yerleştirilerek nakliye paylaşılır. Tarih esnekliğiniz varsa ilk uygun tura yerleştirilirsiniz; sabit tarihli acil işlerde tekil sevkiyat maliyeti teklifte açıkça görünür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Depo işlerinde akülü-iz bırakmayan lastik standardı ve koridor bazlı çalışma yöntemi kamuya açık endüstri pratiğidir; hub-depo tipi eşleşmesi firma pratiğidir.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Çelik Konstrüksiyon Montaj Platformu — İstanbul Geneli Sevkiyat",
        giris:
            "Çelik konstrüksiyon montajı, İstanbul'un her köşesinde farklı ölçekte sürer — yeni depo hollerinin çatı-cephe kaplaması, fabrika hat genişletmelerinin taşıyıcı sistemleri, sanayi sitelerindeki küçük ek yapılar. Bu işlerin ortak özelliği, montaj süresince yüksek erişimli platformun kaldırma vinciyle birlikte senkron çalışmasıdır: vinç profili yerine indirirken, platform bağlantı ve hizalama işini yürütür. Üç hub'ımız, İstanbul genelindeki şantiyelere bu ihtiyacı coğrafi olarak en yakın noktadan karşılar — büyük ölçekli bir projede tek hub'ın parkı yetmezse, birden fazla hub'dan eşzamanlı makine desteği sağlanır. Şantiyenin bulunduğu bölge ne olursa olsun, montaj disiplini aynı kalır: saha zemini önceden değerlendirilir, evre geçişleri (kaba yapıdan ince işe) planlanır ve proje süresince blok kiralama, günlük kiralamaya göre daha ekonomik sonuç verir.",
        maddeler: [
            {
                baslik: "Kaba yapı evresinde dizel eklemli ve teleskopik ihtiyaç",
                metin:
                    "Kaba yapı evresinde çelik profillerin yükseğe montajı, uzun erişimli dizel eklemli ve teleskopik platformlarla yürür. Bu evrede saha henüz düzensiz ve stabilize edilmemiş olabilir; arazi tipi şasi ve dolgu lastik, bu yüzden kaba yapı platformlarının standart özelliğidir. Kiriş-aşık bağlantılarında iki makine eş zamanlı çalışarak montaj hızını artırır.",
            },
            {
                baslik: "İstanbul genelinde şantiye dağılımı ve hub ataması",
                metin:
                    "Bir şantiye, coğrafi konumuna göre en yakın hub'a atanır — Avrupa yakasındaki bir şantiye İkitelli hub'ından, Anadolu yakasının güneyindeki bir şantiye Tuzla hub'ından, doğusundaki bir şantiye Gebze hub'ından beslenir. Bu atama, sevkiyat süresini kısaltmanın yanı sıra, şantiyenin proje süresi boyunca aynı hub'dan düzenli tedarik almasını sağlar — makine değişse bile lojistik güzergâh aynı kalır.",
            },
            {
                baslik: "Büyük projelerde çoklu hub desteği",
                metin:
                    "Büyük ölçekli bir çelik montaj projesi, tek hub'ın günlük park kapasitesini aşabilir; bu durumda birincil hub'a en yakın komşu hub'lardan eşzamanlı makine desteği sağlanır. Proje yöneticisiyle önceden paylaşılan montaj takvimi, hangi haftada kaç makinenin gerekeceğini netleştirir ve bu bilgi, hub'lar arası kapasite planlamasının temelini oluşturur.",
            },
            {
                baslik: "Saha zemini ve stabilize yol koşulları",
                metin:
                    "Şantiye sahaları, tamamlanmış yapılara göre daha değişken zemin koşulları sunar — stabilize edilmemiş toprak, geçici dolgu, ıslak mevsimde çamurlaşan alanlar. Yüksek kot çalışmasında makinenin duruş noktası bu koşullara göre keşifte belirlenir; şüpheli zeminde çalışma başlatılmaz, gerekirse yük dağıtım plakası kullanılır.",
            },
            {
                baslik: "Proje süresince blok kiralama ve evre geçişleri",
                metin:
                    "Çelik konstrüksiyon projeleri genelde haftalar-aylar süren süreçlerdir ve proje süresince tek bir çerçeve sözleşmeyle blok kiralama, günlük kiralamaya göre belirgin ucuzdur. Evre geçişlerinde (kaba yapıdan ince işe, dizel sınıftan akülü sınıfa) makine karması değişir; bu geçiş, proje takvimine göre önceden planlanır ve sahada boşta bekleyen makine olmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj evresi ve ekipman tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, çelik konstrüksiyon projesinin tipik evrelerini ve her evrenin ekipman ağırlığını gösterir.",
                ],
                tablo: {
                    basliklar: ["Evre", "Ana ekipman", "Saha koşulu", "Not"],
                    satirlar: [
                        ["Temel-kaba yapı", "Dizel teleskopik/eklemli", "Stabilize edilmemiş saha", "Vinç trafiğiyle koordineli"],
                        ["Çelik iskelet montajı", "İki eklemli senkron", "Ağır makine trafiği", "Kiriş-aşık bağlantı hızı"],
                        ["Panel-çatı kaplama", "Dizel eklemli", "Yükseklik ağırlıklı", "Rüzgâr penceresi kontrolü"],
                        ["İnce iş-cephe", "Makaslı", "Düzelmiş zemin", "Cephe iskele planıyla uyum"],
                        ["Teslim öncesi kontrol", "Akülü makaslı", "İç mekân", "İz bırakmayan lastik"],
                    ],
                },
            },
            {
                baslik: "Şantiyeler arası makine kaydırma",
                paragraflar: [
                    "Bir şantiyede proje bir evreyi tamamladığında, o evrenin makinesi genelde aynı hub bölgesindeki başka bir şantiyeye kaydırılır — bu, hub'ların kendi bölgesindeki proje takvimlerini birlikte izlemesiyle mümkün olur. Proje yöneticisinin evre bitiş tarihini önceden bildirmesi, bu kaydırmanın sorunsuz yürümesini sağlar ve makinenin boşta bekleme süresini azaltır.",
                ],
            },
            {
                baslik: "İSG ve montaj güvenliği — senkron çalışma disiplini",
                paragraflar: [
                    "Çelik montajda iki makinenin eş zamanlı çalıştığı durumlarda, bom hareketleri birbirine ve vinç trafiğine göre koordineli planlanır; çakışma riski taşıyan hareket önceden belirlenir ve iletişim protokolü (telsiz, işaret) kurulur. Operatör brifingi, sahanın kendi vinç ve malzeme akış düzenini içerir; yük tablosu dışı kaldırma hiçbir gerekçeyle kabul edilmez.",
                ],
            },
        ],
        sss: [
            {
                soru: "Şantiyemiz büyük, aynı anda kaç makine gerekir?",
                cevap:
                    "Tipik çelik montaj düzeni iki yüksek erişimli eklemli ile kurulur — kiriş-aşık bağlantılarında iki nokta eş zamanlı tutulur ve montaj hızı belirgin artar; panel-kaplama evresinde de aynı çift cephe hattında senkron ilerler. Saha beslemesi için üçüncü ekipman olarak telehandler eklenebilir. Kesin sayı yapı ölçüsü ve montaj programınıza bağlıdır; proje çiziminizle keşif bu sayıyı netleştirir.",
            },
            {
                soru: "Şantiyemiz hangi hub'dan hizmet alacak, biz mi seçeceğiz?",
                cevap:
                    "Şantiyenizin bulunduğu ilçenin coğrafi konumu, birincil hub'ı otomatik belirler — bu genelde en kısa sevkiyat süresini verir. Büyük projelerde ihtiyaç birincil hub'ın kapasitesini aşarsa, komşu hub'lardan eşzamanlı destek eklenir; bu durum proje takviminize göre önceden planlanır, siz talep edildiğinde bilgilendirilirsiniz.",
            },
            {
                soru: "Saha zeminimiz henüz stabilize edilmedi, makine oraya girebilir mi?",
                cevap:
                    "Girer ama zemin durumu önceden değerlendirilir — arazi tipi şasi ve dolgu lastikli modeller, stabilize edilmemiş sahalarda standart tercihtir. Şüpheli zeminde (yumuşak dolgu, ıslak alan) çalışma başlatılmaz; gerekirse yük dağıtım plakası kullanılır veya makinenin duruş noktası değiştirilir. Saha fotoğrafı keşif öncesi paylaşılırsa değerlendirme hızlanır.",
            },
            {
                soru: "Projemiz üç ay sürecek, günlük mü yoksa blok mu kiralamalıyız?",
                cevap:
                    "Proje süresince blok kiralama, günlük kiralamaya göre belirgin ucuzdur ve evre geçişlerinde makine karmasının önceden planlanmasını sağlar. Çerçeve sözleşme kurulduğunda, kaba yapıdan ince işe geçişte makine tipi değişir ama sözleşme aynı kalır. Proje takviminizi paylaşırsanız evre bazlı bir plan ve fiyat teklifiyle döneriz.",
            },
            {
                soru: "İki makinenin aynı anda çalışması güvenlik riski yaratır mı?",
                cevap:
                    "Doğru planlamayla artmaz — senkron çalışan iki makinenin bom hareketleri önceden koordine edilir, çakışma riski taşıyan noktalar belirlenir ve operatörler arası iletişim protokolü kurulur. Vinç trafiğinin de sahada olduğu durumlarda, üçlü koordinasyon (iki platform + vinç) saha yöneticisiyle birlikte planlanır. Bu koordinasyon, montaj hızını artıran değil, güvenliği koruyan bir adımdır.",
            },
            {
                soru: "Şantiyemiz İstanbul'un uzak bir ilçesinde, yine de hizmet alabilir miyiz?",
                cevap:
                    "Alabilirsiniz — üç hub'lı yapı İstanbul genelini kapsar, ancak uzak ilçelerde taban sevkiyat süresi kent merkezine göre daha uzun olabilir ve bu, teklif aşamasında açıkça belirtilir. Şantiyenizin konumuna en yakın hub belirlenir ve proje süresince düzenli sevkiyat bu hub üzerinden yürür; uzaklık, hizmeti imkânsız kılmaz, yalnızca süre beklentisini gerçekçi kılar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çelik konstrüksiyon montaj evrelerinin genel iş akışı (kaba yapı-panel-ince iş) kamuya açık inşaat pratiğidir; hub atama ve çoklu hub desteği firma pratiğidir.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarım ve Silo Yapılarında Platform Kiralama",
        giris:
            "Dürüst bir açıklamayla başlamak gerekir: İstanbul, ağırlıklı olarak sanayi ve kentsel bir dokuya sahiptir ve tarımsal üretim veya silo yapıları, ağdaki hizmetlerimizin ana odağı değildir. Buna rağmen, Çatalca ve Arnavutköy gibi şehrin kırsal-yarı kırsal karakterini koruyan ilçelerinde tarımsal depo, ambar ve sınırlı sayıda silo yapısı bulunur ve bu yapıların çatı, cephe veya dış bakım işleri zaman zaman platform ihtiyacı doğurur. Bu talepler, ana iş hacmimizin çok küçük bir kesimini oluşturur; bu yüzden burada büyük bir tarım-silo filosu veya özel bir uzmanlık iddiasında bulunmuyoruz. Coğrafi olarak bu ilçelere en yakın hub İkitelli olduğu için, sevkiyat oradan yapılır ve süre beklentisi, kırsal erişim yollarının kentsel bölgelere göre daha uzun sürebileceği gerçeğiyle birlikte açıkça konuşulur.",
        maddeler: [
            {
                baslik: "Silo ve ambar dış cephe-bakım işleri",
                metin:
                    "Tarımsal depo ve silo yapılarının dış cephe kontrolü, boya yenileme veya çatı bakımı gibi işleri, standart dizel eklemli veya teleskopik platformla yürütülür. Bu yapılar genelde tekil ve dağınık konumlu olduğu için, iş çoğu zaman tek başına planlanır; bölge turlarına dizilme fırsatı, sanayi sitesi yoğunluğundaki kadar sık çıkmaz.",
            },
            {
                baslik: "Tarımsal ambar çatı işleri",
                metin:
                    "Ambar yapılarının çatı kaplaması, tesisat veya aydınlatma işleri, yapının yüksekliğine göre makaslı veya eklemli sınıfla yapılır. Bu yapılar genelde açık ve engebeli arazide bulunduğu için zemin durumu önceden değerlendirilir; standart makine geçemiyorsa arazi tipi model önerilir.",
            },
            {
                baslik: "Kırsal erişim yolu zorluğu",
                metin:
                    "Çatalca ve Arnavutköy'ün kırsal kesimlerinde erişim yolları toprak veya stabilize olabilir ve mevsime göre (özellikle yağmur sonrası) geçilebilirliği değişir. Bu durum keşifte özellikle sorulur; standart makine geçemeyecekse arazi tipi lastikli alternatif değerlendirilir. Bu bilgiyi talep sırasında paylaşmak, doğru makinenin ilk seferde gönderilmesini sağlar.",
            },
            {
                baslik: "Mevsimsel talep — hasat sonrası bakım dönemleri",
                metin:
                    "Tarımsal yapılardaki bakım talebi, hasat sonrası dönemlerde bir miktar yoğunlaşabilir; bu dönem dışında talep düzensiz ve seyrektir. Düzenli bir tur programı kurmak için yeterli hacim oluşmadığından, bu tip işler genelde tekil sevkiyatla planlanır ve tarih esnekliği fiyatı çok değiştirmez.",
            },
            {
                baslik: "İkitelli hub'ının bu ilçelere en yakın kaynak olması",
                metin:
                    "Üç hub içinde İkitelli, coğrafi olarak Çatalca ve Arnavutköy'e en yakın olanıdır; bu yüzden tarımsal yapı talepleri normal koşulda buradan karşılanır. Tuzla veya Gebze hub'ından sevkiyat, yalnızca İkitelli parkının o gün yetersiz kaldığı istisnai durumlarda ve ek süre farkı açıkça bildirilerek gündeme gelir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İlçe, iş tipi ve ekipman tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, tarımsal-kırsal dokunun görüldüğü ilçelerdeki tipik işleri ve ekipman tercihini özetler.",
                ],
                tablo: {
                    basliklar: ["İlçe", "Tipik yapı", "Ekipman", "Erişim notu"],
                    satirlar: [
                        ["Çatalca", "Tarımsal ambar-depo", "Dizel eklemli/makaslı", "Kırsal yol, mevsimsel değişken"],
                        ["Arnavutköy", "Silo-ambar dış cephe", "Dizel eklemli", "Yarı kırsal, kısmen stabilize"],
                        ["Her ikisi", "Çatı bakım işi", "Yapı yüksekliğine göre", "Zemin engebesi keşifte kontrol"],
                    ],
                },
            },
            {
                baslik: "Kırsal yol ve zemin durumunun dürüst değerlendirmesi",
                paragraflar: [
                    "Kırsal erişim yollarında zemin durumu, kentsel sanayi sitesine göre çok daha değişkendir; aynı yol kuru mevsimde sorunsuz geçilirken yağmur sonrası çamurlaşabilir. Bu belirsizlik, keşifte açıkça konuşulur ve mümkünse güncel fotoğraf istenir. Geçilemeyecek durumda olan bir yol için, dürüst cevap 'gidemeyiz' veya 'alternatif erişim gerekir' olabilir; bu durum saklanmaz.",
                ],
            },
            {
                baslik: "Ağdaki yerimizin dürüst tanımı",
                paragraflar: [
                    "Bu ağın ana uzmanlığı İstanbul'un sanayi ve kentsel dokusundaki platform-forklift kiralamasıdır; tarım ve silo yapıları, coğrafi kapsam alanımıza giren ama hacim olarak küçük bir kesimdir. Bu işleri de aynı hub disipliniyle (keşif, süre dürüstlüğü, doğru ekipman seçimi) ele alırız, ancak bu alanda özel bir tarım ekipmanı filomuz veya sektöre özgü ek uzmanlığımız olduğunu iddia etmeyiz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tarım yapılarına gerçekten hizmet veriyor musunuz, yoksa nadiren mi oluyor?",
                cevap:
                    "Nadiren oluyor ve bunu saklamıyoruz — ağımızın ana odağı İstanbul'un sanayi-kentsel dokusudur, tarımsal-silo talepleri Çatalca ve Arnavutköy gibi ilçelerde zaman zaman ortaya çıkan küçük bir kesimdir. Talep geldiğinde aynı ciddiyetle karşılanır ve İkitelli hub'ından sevkiyat yapılır, ancak bu alanda büyük bir hacim veya özel filo iddiasında bulunmuyoruz.",
            },
            {
                soru: "Silomuzun çevresindeki toprak yol makineyi taşır mı?",
                cevap:
                    "Bu, keşifte fotoğraf ve tarifle önceden değerlendirilmesi gereken bir sorudur — toprak yolun genişliği, sertliği ve mevsimsel durumu (özellikle son yağmurdan sonraki hâli) birlikte değerlendirilir. Standart makine geçemeyecekse arazi tipi lastikli alternatif önerilir; hiçbir konfigürasyon geçemiyorsa bu dürüstçe söylenir ve alternatif erişim yöntemi konuşulur.",
            },
            {
                soru: "Hasat sonrası dönemde talep yoğunlaşıyor mu, o zaman makine bulmak zorlaşır mı?",
                cevap:
                    "Hasat sonrası dönemde tarımsal bakım talebi bir miktar artabilir ama bu, ağımızın genel iş hacmine göre küçük kalır; İkitelli hub'ının parkı bu talebi genelde rahatça karşılar. Yine de yoğun bir döneme denk geliyorsanız, tarihinizi mümkün olduğunca önceden bildirmeniz, uygun makinenin rezerve edilmesini kolaylaştırır.",
            },
            {
                soru: "Neden İkitelli'den geliyor, bize daha yakın bir hub yok mu?",
                cevap:
                    "Çatalca ve Arnavutköy, İstanbul'un batısında yer aldığı için üç hub içinde coğrafi olarak en yakın olanı İkitelli'dir; Tuzla ve Gebze hub'ları Anadolu yakasında olduğu için bu ilçelere hem daha uzak hem boğaz geçişi gerektirir. Bu yüzden standart sevkiyat İkitelli'den yapılır; İkitelli parkı yetersizse istisnai olarak diğer hub'lardan destek alınır ve süre farkı bildirilir.",
            },
            {
                soru: "Fiyatınız sanayi bölgelerindeki işlerden farklı mı?",
                cevap:
                    "Temel fiyatlandırma mantığı aynıdır — makine sınıfı ve iş süresine göre belirlenir — ancak tarımsal-kırsal işlerde tur ekonomisinden yararlanma imkânı sanayi sitesi yoğunluğundaki kadar sık çıkmaz, çünkü bu bölgede aynı güne dizilebilecek başka talep bulmak daha zordur. Bu, işin doğasından kaynaklanan bir fark olup gizli bir ek ücret değildir; teklifte açıkça görünür.",
            },
            {
                soru: "Küçük bir silo bakım işi için sizinle çalışmaya değer mi, yoksa çok mu küçük bir iş?",
                cevap:
                    "Değer — iş büyüklüğü ne olursa olsun aynı keşif ve süre dürüstlüğü uygulanır. Küçük bir iş için tekil sevkiyat maliyeti, büyük bir işe göre orantılı olarak daha yüksek görünebilir çünkü paylaşacak bir tur bulunmayabilir; bu maliyet teklifte açıkça gösterilir ve karar size bırakılır. Gizli bir minimum ücret politikası veya reddetme eğilimimiz yoktur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İstanbul'un ağırlıklı sanayi-kentsel dokusu ve Çatalca-Arnavutköy'ün kırsal karakteri kamuya açık coğrafi bilgidir; bu alandaki sınırlı hacim ve hub tahsisi dürüstçe firma pratiği olarak belirtilmiştir.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Enerji Hattı ve Aydınlatma Bakımı için Platform Kiralama",
        giris:
            "Enerji ve aydınlatma bakımı, üç hub'ımızın kapsadığı sanayi bölgelerinin sürekli tekrarlanan bir ihtiyacıdır — OSB sokak aydınlatması, depo çatı-cephe aydınlatması, trafo çevresi bakım işleri ve fabrika içi elektrik hattı kontrolleri, İkitelli'nin sanayi sitelerinden Tuzla'nın ihtisas OSB'lerine, Gebze kuşağının lojistik depolarına kadar benzer bir işçilik gerektirir ama farklı güvenlik koşullarıyla karşımıza çıkar. Enerji hattı yakınında çalışmanın ortak kuralı, güvenlik mesafesinin ve gerilim seviyesinin işe başlamadan önce netleştirilmesidir; bu bilgi olmadan yüksekte enerji hattı yakını çalışma başlatılmaz. Aydınlatma direği bakımı ise genelde çok sayıda direğin aynı sahada bulunması nedeniyle, tek tek değil bölge turu mantığıyla ekonomik hâle gelir — bir OSB'de onlarca direğin yıllık bakımı, tek seferlik değil dönemsel bir program olarak kurgulanır.",
        maddeler: [
            {
                baslik: "OSB sokak aydınlatması",
                metin:
                    "Organize sanayi bölgelerinin sokak aydınlatma direkleri, düzenli aralıklarla bakım-değişim gerektirir ve bu iş, tek bir direk için değil bölgedeki tüm direk listesi için planlanır. Dikey akülü platform veya kompakt makaslı, bu işin standart ekipmanıdır; sokak trafiğinin sürdüğü saatlerde çalışma alanı geçici olarak işaretlenir.",
            },
            {
                baslik: "Depo çatı ve dış cephe aydınlatması",
                metin:
                    "Lojistik depo ve fabrika yapılarının dış cephe ve çatı altı aydınlatması, bina yüksekliğine göre makaslı veya eklemli sınıfla yapılır. İç mekân işlerinde akülü ve iz bırakmayan lastik standarttır; dış cephe işlerinde ise hava koşulu ve rüzgâr, çalışma penceresini belirler.",
            },
            {
                baslik: "Trafo ve enerji tesisi çevresinde güvenlik mesafesi",
                metin:
                    "Trafo merkezi veya yüksek gerilim hattı yakınındaki çalışmalarda güvenlik mesafesi, iş başlamadan önce ilgili kurum veya tesis elektrik sorumlusuyla birlikte netleştirilir. Bu mesafe, makinenin bom veya sepet hareketinin sınırını belirler ve hiçbir gerekçeyle aşılmaz. Enerji kesintisi gerektiren işlerde, kesinti penceresi tesisin operasyon takvimine göre önceden planlanır.",
            },
            {
                baslik: "Gece çalışma pencereleri",
                metin:
                    "Sanayi sitesi ve OSB sokak aydınlatması işleri, gündüz trafiğini kesmemek için genelde gece veya sabah erken saatlere yazılır. Depo içi elektrik-aydınlatma işleri ise operasyonun düşük tempolu saatlerine planlanır. Gece işinde akü kapasitesi ve aydınlatma (makinenin kendi çalışma alanı ışıklandırması) planın parçasıdır.",
            },
            {
                baslik: "Hub bazlı tur ekonomisi — çoklu direk bakımı",
                metin:
                    "Aynı OSB'de veya sanayi sitesinde çok sayıda direğin bakımı gerekiyorsa, bu iş tek turda birleştirilir — makine gün boyu bölge içinde kısa mesafelerle direkten direğe geçer ve nakliye maliyeti tüm liste üzerine yayılır. Bu model, dönemsel bakım programlarına dönüştürülebilir; site yönetimi veya OSB idaresiyle yıllık bir bakım takvimi kurmak, en ekonomik yaklaşımdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hub, iş tipi ve güvenlik notu tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, üç hub bölgesindeki tipik enerji-aydınlatma işlerini ve dikkat edilmesi gereken güvenlik notunu özetler.",
                ],
                tablo: {
                    basliklar: ["Hub", "Tipik iş", "Ekipman", "Güvenlik notu"],
                    satirlar: [
                        ["İkitelli", "Site sokak aydınlatması", "Dikey akülü/kompakt makaslı", "Sokak trafiği ayrımı"],
                        ["Tuzla", "İhtisas OSB enerji hattı", "Tesise göre seçim", "Ex-proof/izin sistemi olabilir"],
                        ["Gebze", "Depo çatı-cephe aydınlatma", "Makaslı/eklemli", "Yükseklik + hava koşulu"],
                    ],
                },
            },
            {
                baslik: "Enerji kesintisi gerektiren işlerin planlanması",
                paragraflar: [
                    "Trafo veya ana pano çevresindeki bazı işler, enerji kesintisi gerektirebilir; bu kesinti tesisin operasyon takvimine göre önceden planlanır ve etkilenen alanlar tesis yönetimine bildirilir. Kesinti penceresi genelde en düşük operasyon yoğunluğuna denk gelen saatlere (gece veya hafta sonu) yazılır ve pencere aşılmadan iş toparlanır.",
                ],
            },
            {
                baslik: "Dönemsel bakım programına geçiş",
                paragraflar: [
                    "Tekil çağrılarla yürütülen aydınlatma-enerji bakımı, zamanla dönemsel bir programa dönüştürülebilir: yıllık veya altı aylık bir takvimde, bölgedeki tüm direk ve aydınlatma noktaları tek seferde planlanır. Bu düzen, tesis yönetimi için hem bütçe öngörüsü hem tekil çağrı yorgunluğunu azaltma sağlar; bizim tarafımızda ise hub parkının önceden ayrılmasını mümkün kılar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Trafo yakınında çalışma yapabiliyor musunuz?",
                cevap:
                    "Yapabiliriz ama güvenlik mesafesi önce netleştirilir — tesisin elektrik sorumlusuyla birlikte, makinenin bom veya sepet hareketinin sınırı belirlenir ve bu sınır çalışma boyunca aşılmaz. Gerekirse enerji kesintisi tesisin operasyon takvimine göre önceden planlanır. Bu tip işlerde keşif, standart bir platform işinden daha detaylı yürütülür.",
            },
            {
                soru: "OSB'mizde onlarca aydınlatma direği var, hepsini tek tek mi çağırmalıyız?",
                cevap:
                    "Hayır, tam tersi önerilir — direk listesi tek seferde planlanır ve makine gün boyu bölge içinde direkten direğe geçerek tüm listeyi bitirir, nakliye maliyeti liste üzerine yayılır. Bu model dönemsel bir bakım programına da dönüştürülebilir; OSB idaresiyle yıllık takvim kurmak, tekrarlayan tekil çağrılardan belirgin ucuzdur.",
            },
            {
                soru: "Gece çalışma zorunlu mu, gündüz yapılamaz mı?",
                cevap:
                    "Gündüz de yapılabilir ama sokak trafiğinin yoğun olduğu OSB ve sanayi sitesi aksında gece veya sabah erken saatler tercih edilir çünkü hem çalışma alanı ayrımı daha kolay kurulur hem trafik kesintiye uğramaz. Depo içi işlerde ise operasyonun düşük tempolu saatleri esas alınır. Tercihiniz varsa keşifte konuşulur ve mümkünse plan buna göre kurulur.",
            },
            {
                soru: "Kimya tesisimizde patlayıcı ortam riski var, standart makine kullanılabilir mi?",
                cevap:
                    "Kullanılamaz — patlayıcı ortam sınıflı bölümlerde standart elektrikli/akülü makine yerine tesisin izin sistemine uygun ekipman gerekir; bu bölgeler keşifte netleştirilir ve iş, tesisin emniyet birimiyle ortak planlanır. Bu tip işlerde operatör de tesisin izin prosedürüne (sıcak çalışma, kapalı alan) tanımlanır.",
            },
            {
                soru: "Enerji kesintisi gerektiren bir işimiz var, üretimimizi ne kadar etkiler?",
                cevap:
                    "Kesinti penceresi, sizin operasyon takviminize göre planlanır — genelde en düşük yoğunluklu saatler (gece veya hafta sonu) tercih edilir ve pencere aşılmadan iş toparlanır. Kesinti süresi ve etkilenecek alanlar önceden netleştirilir; iş sırasında beklenmedik bir uzama olursa bu durum anında bildirilir, sessizce uzatılmaz.",
            },
            {
                soru: "Yıllık bir bakım programı kurmak istiyoruz, nasıl başlarız?",
                cevap:
                    "Bölgenizdeki aydınlatma ve enerji bakım noktalarının kaba bir listesiyle başlanır — kaç direk, kaç panel, hangi sıklıkla bakım isteniyor. Bu bilgiyle yıllık veya altı aylık bir takvim önerisi hazırlanır ve hub parkı bu takvime göre önceden ayrılır. Program kurulduktan sonra her dönem tek bildirimle işler; ilk kurulum bir kez emek ister, sonrası akar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Enerji hattı yakınında güvenlik mesafesi ve izin sistemi gerekliliği kamuya açık İSG pratiğidir; bölge turu ve dönemsel bakım programı firma pratiğidir.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Operatörlü Platform Kiralama — Hub Bazlı Operatör Tahsisi",
        giris:
            "Operatörlü kiralamada makinenin kendisi kadar, o makineyi kullanacak operatörün sahaya aşinalığı da işin hızını belirler; üç hub'lı yapımızın operatörlü hizmette getirdiği fark de tam olarak buradadır — her hub, kendi bölgesinde düzenli çalışan bir operatör kadrosuna sahiptir ve bu operatörler, İkitelli'nin sanayi sitesi dar sokaklarını, Tuzla'nın tersane-OSB güvenlik prosedürlerini veya Gebze kuşağının depo giriş-çıkış düzenlerini tekrar tekrar görerek sahaya aşina hâle gelir. Operatörlü mü operatörsüz mü kiralanacağı kararı, işin karmaşıklığına, çalışma süresine ve müşterinin kendi operatör kapasitesine göre verilir; kısa süreli veya teknik açıdan hassas işlerde operatörlü model, sahada zaman kaybını önler. Vardiya ve gece çalışması gereken işlerde operatör planı, hub'ın kendi kadro düzenine göre önceden kurulur.",
        maddeler: [
            {
                baslik: "Operatörlü vs operatörsüz karar mantığı",
                metin:
                    "Kısa süreli, teknik açıdan hassas veya sahaya ilk kez giren işlerde operatörlü model önerilir — sahaya aşina bir operatör, keşif bilgisini doğrudan uygulamaya taşır ve zaman kaybını önler. Uzun süreli ve müşterinin kendi eğitimli operatörü olan işlerde operatörsüz kiralama daha ekonomik olabilir. Bu karar, keşifte işin niteliğine göre birlikte değerlendirilir.",
            },
            {
                baslik: "Hub bazlı operatör ataması — yerel bilgi avantajı",
                metin:
                    "Bir hub'ın operatörü, o bölgedeki sahaların giriş prosedürlerini, tipik zemin koşullarını ve sık karşılaşılan engelleri (dar sokak, asansör darlığı, güvenlik mesafesi) tekrar tekrar görerek öğrenir. Bu yerel bilgi, ilk kez giden bir operatöre göre saha uyum süresini kısaltır — özellikle Tuzla'nın tersane prosedürleri veya Gebze'nin kurumsal tesis kayıt süreçleri gibi işlem yoğun sahalarda bu fark somut biçimde hissedilir.",
            },
            {
                baslik: "Vardiya ve gece operatör planı",
                metin:
                    "Gece pencereli işlerde (depo operasyon boşlukları, sokak aydınlatması) operatör vardiyası önceden kurulur; bu, standart mesai operatöründen farklı bir planlama gerektirir. Uzun gece işlerinde vardiya ortası mola veya ikinci operatörle dönüşümlü düzen değerlendirilir. Vardiya planı, işin süresine ve hub'ın operatör kapasitesine göre keşifte netleştirilir.",
            },
            {
                baslik: "Belge ve yeterlilik kontrolü",
                metin:
                    "Operatörlü kiralamada operatör yeterlilik belgesi, işe başlamadan önce doğrulanır ve gerektiğinde tesisin kendi kayıt sistemine tanımlanır — özellikle kurumsal tesislerde bu adım zorunludur. Belge setinin güncel tutulması, tekrar işlerde süreci hızlandıran bir yatırımdır; ilk işte belge kaydı bir kez yapılır, sonraki işler bu kayıt üzerinden hızla ilerler.",
            },
            {
                baslik: "Uzun süreli iş vs kısa iş operatör esnekliği",
                metin:
                    "Uzun süreli işlerde (proje bloğu, konaklamalı kiralama) aynı operatör sahada sabit kalır ve sahayla tanışıklık ilerledikçe verim artar. Kısa süreli işlerde ise operatör, hub'ın günlük tur planına göre birden fazla sahayı aynı günde gezebilir — bu, kısa işlerin operatörlü olsa bile ekonomik kalmasını sağlayan mekanizmadır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hub, tipik operatörlü iş ve vardiya tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, üç hub bölgesindeki tipik operatörlü iş profillerini ve vardiya eğilimini özetler.",
                ],
                tablo: {
                    basliklar: ["Hub", "Tipik operatörlü iş", "Vardiya eğilimi", "Belge notu"],
                    satirlar: [
                        ["İkitelli", "Sanayi sitesi kısa işler", "Gündüz, kısa süreli", "Standart"],
                        ["Tuzla", "Tersane-ihtisas OSB işleri", "Vardiyaya göre değişken", "Tesis izin sistemine tanımlama"],
                        ["Gebze", "Kurumsal depo-fabrika işleri", "Gece pencereli olabilir", "Kurumsal kayıt süreci"],
                    ],
                },
            },
            {
                baslik: "Operatörlü modelin kısa işlerde ekonomikliği",
                paragraflar: [
                    "Operatörlü kiralama, tek başına çağrıldığında operatörsüze göre daha yüksek maliyetli görünebilir ama kısa süreli işlerde hub'ın günlük tur planına dizildiğinde bu fark küçülür — aynı operatör, aynı gün birden fazla kısa işi art arda tamamlayabilir. Tarih esnekliği olan talepler bu ekonomiden yararlanır.",
                ],
            },
            {
                baslik: "Kurumsal tesislerde operatör kaydı ve tekrar iş hızı",
                paragraflar: [
                    "Büyük kurumsal tesislerde ilk iş, operatör ve makine belgelerinin tesis sistemine tanımlanmasıyla başlar ve bu süreç zaman alır; bu yüzden ilk işin takvimine belge payı ayrıca eklenir. Kayıt tamamlandıktan sonra aynı operatörle tekrar işler hızlı ilerler çünkü tesis, operatörü ve belge setini zaten tanımaktadır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Operatörlü mü operatörsüz mü kiralamalıyız, karar nasıl verilir?",
                cevap:
                    "İşin süresine, teknik hassasiyetine ve sizin kendi operatör kapasitenize bağlı olarak keşifte birlikte değerlendirilir. Kısa süreli veya sahaya ilk kez giren işlerde operatörlü model, sahaya aşina bir kadronun zaman kaybını önlemesi nedeniyle genelde daha hızlı sonuç verir. Uzun süreli işlerde kendi eğitimli operatörünüz varsa operatörsüz kiralama daha ekonomik olabilir; iki seçenek de teklif aşamasında ayrı ayrı fiyatlandırılır.",
            },
            {
                soru: "Bize atanan operatör bölgeyi tanıyor mu, yoksa her seferinde farklı biri mi geliyor?",
                cevap:
                    "Her hub, kendi bölgesinde düzenli çalışan bir operatör kadrosuna sahiptir; aynı bölgeye tekrar giden operatörler, sahanın giriş prosedürlerini ve tipik koşullarını zamanla öğrenir. Tam olarak aynı operatörün her seferinde gelmesi garanti edilmez ama hub'ın kadro düzeni, sahaya aşina bir operatörün atanma olasılığını artırır; düzenli çalıştığınız işlerde bu tanışıklık talep edilebilir.",
            },
            {
                soru: "Gece vardiyasında operatör bulabiliyor musunuz?",
                cevap:
                    "Evet, gece pencereli işler düzenli talep ettiğimiz bir kalemdir ve operatör vardiyası buna göre önceden planlanır. Uzun gece işlerinde vardiya ortası mola veya ikinci operatörle dönüşümlü düzen değerlendirilir. Vardiya saatlerinizi önceden bildirmeniz, uygun operatörün rezerve edilmesini kolaylaştırır.",
            },
            {
                soru: "Kurumsal tesisimizde operatör kaydı gerekiyor, bu ne kadar sürer?",
                cevap:
                    "İlk işte gerçekçi bir süre payı ayrılmalıdır — operatör ve makine belgelerinin tesis sistemine tanımlanması zaman alabilir. Belge setimiz kurumsal formatlara hazır olduğu için süreç bizim tarafımızda beklemez. Kayıt tamamlandıktan sonra aynı operatörle tekrar işler hızlı ilerler; kurumsal işte yavaş olan ilk kapıdır, sonrası akar.",
            },
            {
                soru: "Kısa süreli bir iş için operatörlü kiralamak pahalı mı?",
                cevap:
                    "Tek başına çağrıldığında evet, operatörsüze göre daha yüksek maliyetli görünebilir; ama hub bölgenizde aynı gün başka kısa işler varsa, aynı operatör bunları art arda tamamlayabilir ve maliyet paylaşılır. Tarih esnekliğiniz varsa bu ekonomiden yararlanırsınız; sabit tarihli acil işlerde tekil operatör maliyeti teklifte açıkça görünür.",
            },
            {
                soru: "Operatörün yeterlilik belgesini görebilir miyiz?",
                cevap:
                    "Elbette — operatör yeterlilik belgesi, işe başlamadan önce sizinle paylaşılabilir ve kurumsal tesislerde zaten tesisin kendi kayıt sistemine tanımlanması standart bir adımdır. Belge güncelliği, bizim tarafımızda düzenli kontrol edilen bir kalemdir; talep ettiğinizde belge kopyası veya kayıt bilgisi işe başlamadan sunulur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Operatörlü kiralamada belge doğrulama ve tesis kayıt süreci genel İSG pratiğidir; hub bazlı operatör ataması ve yerel aşinalık firma pratiğidir.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Çok Noktalı Rota ve Bakım Turları — Üç Hub'ın Sevkiyat Optimizasyonu",
        giris:
            "Üç hub'lı sevkiyat modelinin en somut ekonomik faydası, tekil sevkiyattan değil, çok noktalı rota planlamasından gelir: aynı bölgedeki birden fazla kısa süreli işi tek bir güne ve tek bir turdaki araca dizmek. İkitelli hub'ı, Avrupa yakasındaki sanayi sitelerinde bu modeli günlük olarak uygular — bir sokaktaki üç farklı işletmenin talebi aynı araca biner; Tuzla hub'ı, tersane ve ihtisas OSB kuşağında aynı mantığı proje teslim takvimleriyle senkronlar; Gebze hub'ı ise D-100/TEM aksı boyunca sıralanan onlarca depo ve fabrikayı aks bazlı günlere böler. Tek merkezi depo modelinde bu tip rota optimizasyonu, mesafelerin büyüklüğü nedeniyle mümkün olmaz — üç bölgesel hub, her birinin kendi dar coğrafyasında sık ve kısa turlar kurmasını sağlayarak, hem müşteriye maliyet avantajı hem operasyona daha az boş sevkiyat (boş dönen araç) kazandırır.",
        maddeler: [
            {
                baslik: "Rota kümeleme mantığı",
                metin:
                    "Bir hub'ın günlük rota planı, o gün için bildirilen taleplerin coğrafi yakınlığına göre kümelenmesiyle kurulur — aynı sokak, aynı OSB veya aynı aks üzerindeki talepler tek turda birleştirilir. Kümeleme, yalnızca mesafeyi değil, işlerin sırasını da (hangi işin önce, hangisinin sonra yapılacağı) optimize eder; bu sıralama, aracın gün boyunca kestiği toplam mesafeyi azaltır.",
            },
            {
                baslik: "Hub bazlı gün planı",
                metin:
                    "Her hub, kendi bölgesi için haftalık bir rota takvimi tutar — hangi aksın hangi gün gezileceği, önceden bilinen düzenli müşterilerin talepleriyle şekillenir. Yeni bir talep geldiğinde, bu talebin coğrafi konumu mevcut rota takvimine uyuyorsa ilk uygun güne eklenir; uymuyorsa tekil sevkiyat olarak değerlendirilir ve bu fark fiyata yansır.",
            },
            {
                baslik: "Tarih esnekliğinin ekonomik faydası",
                metin:
                    "Rota modelinin ekonomik faydasından yararlanmanın koşulu tarih esnekliğidir — 'bu hafta içinde olsun' diyebilen bir talep, ilk uygun tura kolayca yerleşir ve nakliye maliyeti paylaşılır. Sabit tarihli acil işlerde ise tekil sevkiyat yapılır ve bu, rota ekonomisinden yararlanamadığı için fiyata farklı yansır; bu fark teklifte açıkça görünür.",
            },
            {
                baslik: "Aynı OSB veya bölgede çoklu müşteri turu",
                metin:
                    "Bir OSB veya sanayi sitesinde birden fazla işletmenin aynı döneme denk gelen talepleri (örneğin yıllık aydınlatma bakımı), site yönetimi veya OSB idaresi üzerinden ortak bir güne toplanabilir. Bu, bireysel işletmelerin ayrı ayrı çağırdığı makinenin toplamından belirgin ucuzdur ve hub'ın rota planlamasını da kolaylaştırır çünkü talep önceden bilinir hâle gelir.",
            },
            {
                baslik: "Üç hub arası koordinasyon — nadir cross-hub rota",
                metin:
                    "Normal koşulda her hub kendi bölgesinde rota kurar ve hub'lar arası geçiş gerekmez; ancak büyük bir müşterinin farklı hub bölgelerinde eşzamanlı talepleri varsa (örneğin hem İkitelli hem Gebze bölgesinde şubesi olan bir firma), iki hub'ın rota takvimleri koordine edilir ve teslimatlar aynı hafta içinde eşzamanlı planlanır. Bu, tek merkezi depo modelinde ayrı ayrı yönetilmesi gereken bir koordinasyonu, hub'lar arası doğrudan iletişimle basitleştirir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hub, tipik rota günü ve ilçe grubu tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, üç hub'ın tipik haftalık rota mantığını ve kapsadığı ilçe gruplarını özetler; kesin gün ataması güncel talep yoğunluğuna göre değişebilir.",
                ],
                tablo: {
                    basliklar: ["Hub", "Tipik rota kümesi", "Örnek iş karması", "Kümeleme temeli"],
                    satirlar: [
                        ["İkitelli", "Sanayi sitesi sokakları", "Tabela, cephe, elektrik işleri", "Sokak/site bazlı"],
                        ["Tuzla", "Tersane + ihtisas OSB kuşağı", "Bakım, donatım, sektörel işler", "Tesis teslim takvimi"],
                        ["Gebze", "D-100/TEM aks depoları", "Aydınlatma, raf, tesisat işleri", "Aks/güzergâh bazlı"],
                    ],
                },
            },
            {
                baslik: "Boş sevkiyatı azaltmanın ekonomisi",
                paragraflar: [
                    "Bir aracın işini bitirip boş dönmesi, hem maliyet hem zaman kaybıdır; çok noktalı rota planlaması bu boşluğu azaltmayı hedefler — mümkün olduğunca, bir işten çıkan araç aynı bölgedeki bir sonraki işe doğrudan yönlenir. Bu optimizasyon, tek merkezi depodan çıkıp tek bir işi yapıp geri dönen modele göre, aynı filo büyüklüğüyle daha fazla iş kapasitesi üretir — fark, müşteriye daha düşük birim maliyet olarak yansır.",
                ],
            },
            {
                baslik: "Düzenli müşterilerde rota tanışıklığının getirisi",
                paragraflar: [
                    "Bir hub'ın rotasına düzenli giren müşterilerde (aynı OSB'de aylık aydınlatma kontrolü, aynı depo grubunda haftalık forklift ihtiyacı) rota tanışıklığı zamanla artar — operatör sahayı, giriş prosedürünü ve tipik iş süresini bilir hâle gelir ve her yeni iş sıfırdan keşif maliyeti taşımaz. Bu tanışıklık, dönemsel çerçeve sözleşmeleriyle daha da güçlenir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Çok noktalı rota tam olarak nasıl işliyor, aracınız gün boyu mu geziyor?",
                cevap:
                    "Evet — bir hub'ın günlük rota planında, aynı bölgedeki birden fazla talep coğrafi yakınlığına göre sıralanır ve tek araç, gün boyunca bu talepleri sırayla tamamlar. Her iş bitiminde araç bir sonraki en yakın işe geçer; bu sıralama, toplam kat edilen mesafeyi ve dolayısıyla nakliye maliyetini azaltır. Sizin talebiniz bu rotaya uyuyorsa maliyet avantajından yararlanırsınız.",
            },
            {
                soru: "Talebimiz rota takvimine uymuyorsa ne olur, hizmet alamaz mıyız?",
                cevap:
                    "Alırsınız — rotaya uymayan talepler tekil sevkiyat olarak değerlendirilir, yalnızca fiyat farkı teklifte açıkça gösterilir. Tarih esnekliğiniz varsa, talebinizi bir sonraki uygun rota gününe yerleştirmeyi önerebiliriz; bu, maliyeti düşürür ama teslim tarihinde birkaç gün esneklik gerektirir. Acil ve sabit tarihli işlerde tekil sevkiyat her zaman mümkündür.",
            },
            {
                soru: "OSB'mizdeki tüm işletmelerin ortak bir bakım günü olabilir mi?",
                cevap:
                    "Olabilir ve önerilen tam olarak budur — OSB idaresi veya site yönetimi üzerinden işletmelerin dönemsel bakım ihtiyaçları (aydınlatma, cephe, tesisat) tek bir haftaya toplanır, hub bu haftaya özel bir rota ayırır ve makine art arda tüm işletmeleri gezer. Bu model, bireysel çağrıların toplamından belirgin ucuzdur; OSB idaresiyle iletişime geçerek bu programı başlatabilirsiniz.",
            },
            {
                soru: "Farklı hub bölgelerinde şubelerimiz var, aynı hafta hizmet alabilir miyiz?",
                cevap:
                    "Alabilirsiniz — bu durumda ilgili hub'lar kendi aralarında koordine olur ve her şubenizdeki iş, o bölgenin hub'ından ama aynı hafta içinde eşzamanlı planlanır. Şube listenizi ve tercih ettiğiniz haftayı paylaşırsanız, hangi işin hangi hub'dan ve hangi günde yapılacağı önceden netleştirilir; tek bir muhatapla tüm şubeler koordine edilir.",
            },
            {
                soru: "Rota planına girmek için ne kadar önceden haber vermeliyiz?",
                cevap:
                    "Ne kadar erken bildirirseniz, rotaya uyma ve maliyet avantajından yararlanma ihtimaliniz o kadar artar; yine de kesin bir asgari süre yoktur, mevcut rota takvimine göre değişir. Düzenli çalıştığınız bir hub varsa, dönemsel ihtiyaçlarınızı önceden paylaşmanız (örneğin aylık bakım takviminiz), rota planına otomatik dahil olmanızı sağlar ve her seferinde yeniden talep etmenize gerek kalmaz.",
            },
            {
                soru: "Rota ekonomisinden yararlanmak kalitede bir fedakarlık gerektiriyor mu?",
                cevap:
                    "Hayır — rota planlaması yalnızca sevkiyat sırasını ve zamanlamasını etkiler, işin kendisinin kalitesini veya makinenin durumunu etkilemez. Aynı keşif, aynı ekipman standardı ve aynı operatör yeterliliği, rotaya dizilmiş bir işte de tekil bir işte de geçerlidir. Fark yalnızca maliyette ve bazen teslim gününde birkaç günlük esneklik ihtiyacındadır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İstanbul'un coğrafi büyüklüğü ve boğaz geçiş kısıtı nedeniyle tek merkezli sevkiyatın verimsizliği kamuya açık lojistik gerçeğidir; çok noktalı rota kümeleme ve hub koordinasyonu firma pratiğidir.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Zor Zemin ve Arazi Tipi Platform Kiralama",
        giris:
            "İstanbul'un kapsadığımız bölgelerinin büyük kısmı sabit zeminli — sanayi sitesi asfaltı, OSB betonu, depo epoksisi — olduğu için, zor zemin veya arazi tipi platform ihtiyacı ağımızın ana talep hacmini oluşturmaz; bunu dürüstçe belirtmek gerekir. Buna rağmen bu ihtiyaç tamamen yok değildir: Tuzla'nın tersane geri sahaları ve açık stok alanlarında, Gebze kuşağının yeni depo şantiyelerinde ve Çatalca-Arnavutköy'ün kırsal erişim yollarında, standart lastikli platformun zorlanacağı bozuk, stabilize edilmemiş veya engebeli zeminlerle karşılaşılır. Bu durumlarda arazi tipi telehandler veya dolgu lastikli dizel makine, standart modelin yerini alır. Bu sayfanın amacı büyük bir arazi tipi filo iddiası değil, bu niş ihtiyacı da aynı keşif ve dürüstlük disipliniyle karşıladığımızı göstermektir.",
        maddeler: [
            {
                baslik: "Açık şantiye ve stabilize edilmemiş saha",
                metin:
                    "Yeni yapılan depo ve fabrika şantiyelerinde saha, kaba yapı evresinde henüz stabilize edilmemiş olabilir; bu durumda arazi tipi şasi ve dolgu lastikli dizel eklemli veya telehandler tercih edilir. Zeminin sertliği ve düzlüğü keşifte önceden değerlendirilir; şüpheli noktada makine duruşu değiştirilir veya yük dağıtım plakası kullanılır.",
            },
            {
                baslik: "Tersane geri sahası bozuk zemin",
                metin:
                    "Tuzla'nın tersane ve liman geri sahaları, açık stok alanları ve perdesiz sahalar, zemin açısından değişken bir doku sunar — betonarme kesimler ile sıkıştırılmış dolgu yan yana bulunabilir. Bu sahalarda telehandler'ın dört teker çekişi ve arazi lastikleri, standart forklift veya platforma göre daha güvenli ilerleme sağlar.",
            },
            {
                baslik: "Kırsal ilçe erişim yolu",
                metin:
                    "Çatalca ve Arnavutköy gibi kırsal-yarı kırsal karakterli ilçelerde, saha erişim yolu toprak veya stabilize olabilir. Bu tip işlerde standart makinenin geçip geçemeyeceği, keşifte fotoğraf ve tarifle önceden değerlendirilir; geçemiyorsa arazi tipi alternatif veya kademeli erişim planı konuşulur.",
            },
            {
                baslik: "Mevsimsel zemin değişimi",
                metin:
                    "Açık saha ve toprak zeminler, mevsime göre farklı geçilebilirlik gösterir — kuru dönemde sorunsuz geçilen bir alan, yağmur sonrası çamurlaşabilir. Bu değişkenlik, özellikle şantiye ve kırsal işlerde talep alınırken açıkça konuşulur; güncel hava durumu ve saha fotoğrafı, doğru ekipman kararını netleştirir.",
            },
            {
                baslik: "Telehandler ve arazi tipi forklift tercihi",
                metin:
                    "Zor zeminde standart forklift veya makaslı platform yerine, dört teker çekişli ve arazi lastikli telehandler genelde daha güvenli sonuç verir — hem yükü uzatabilir hem bozuk zeminde ilerleyebilir. Ağırlık merkezi ve ataşman uyumu, zor zeminde standart sahaya göre daha dikkatli hesaplanır çünkü zemin eğimi denge hesabını etkiler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Saha tipi, zemin durumu ve ekipman tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, zor zemin ihtiyacının görüldüğü tipik saha tiplerini ve ekipman tercihini özetler.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Zemin durumu", "Ekipman", "Ek gereklilik"],
                    satirlar: [
                        ["Yeni şantiye (kaba yapı)", "Stabilize edilmemiş", "Dizel eklemli/telehandler", "Yük dağıtım plakası olabilir"],
                        ["Tersane geri sahası", "Karma/bozuk", "Telehandler", "Ağırlık merkezi doğrulama"],
                        ["Kırsal ilçe sahası", "Toprak/stabilize", "Arazi tipi lastikli", "Mevsimsel durum kontrolü"],
                        ["Açık stok alanı", "Engebeli", "Yüksek tonaj arazi tipi forklift", "Zemin fotoğrafı önden"],
                    ],
                },
            },
            {
                baslik: "Zemin ve stabilite disiplini",
                paragraflar: [
                    "Zor zeminde makinenin duruş noktası, standart sahadaki gibi serbestçe seçilemez — kapak, kanal veya gömülü altyapı üzerine ayak basılmaz, dolgu kesimlerde yük dağıtım plakası kullanılır. Şüpheli noktada çalışma başlatılmaz; bu, hem makinenin hem operatörün güvenliği için istisnasız bir kuraldır.",
                ],
            },
            {
                baslik: "Bu alandaki hacmimizin dürüst tanımı",
                paragraflar: [
                    "Ağımızın ana talep hacmi, İstanbul'un sanayi sitesi, OSB ve depo dokusundaki sabit zeminli işlerden gelir; zor zemin-arazi tipi ihtiyaç bunun küçük bir kesimidir. Bu işleri karşılarken de aynı keşif titizliğini uygularız, ancak bu alanda özel bir ağır arazi tipi ekipman uzmanlığı veya geniş bir filo iddiasında bulunmayız — talep geldiğinde uygun hub'ın parkındaki telehandler veya arazi tipi model değerlendirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Şantiyemizin zemini henüz düzelmedi, platform gönderebilir misiniz?",
                cevap:
                    "Gönderebiliriz ama önce zemin durumu değerlendirilir — arazi tipi şasi ve dolgu lastikli modeller stabilize edilmemiş sahalarda standart tercihtir. Zemin çok yumuşak veya ıslaksa, çalışma başlamadan yük dağıtım plakası kullanılır veya makine duruş noktası değiştirilir. Saha fotoğrafı önceden paylaşılırsa değerlendirme hızlanır.",
            },
            {
                soru: "Tersane geri sahamızın zemini bozuk, forklift yerine ne önerirsiniz?",
                cevap:
                    "Zemin engebesi belirginse telehandler önerilir — dört teker çekişi ve arazi lastikleriyle bozuk sahada standart forklifte göre daha güvenle ilerler, bom uzatmasıyla istif yüksekliği de kazandırır. Yük ağırlığı ve zemin fotoğrafı paylaşılırsa, ağırlık merkezi ve ataşman uyumu keşifte netleştirilir.",
            },
            {
                soru: "Köyümüzdeki yol toprak, makine oraya çıkabilir mi?",
                cevap:
                    "Bu, keşifte önceden değerlendirilmesi gereken bir sorudur — yolun genişliği, sertliği ve mevsimsel durumu birlikte kontrol edilir. Standart makine geçemeyecekse arazi tipi lastikli alternatif önerilir; hiçbir konfigürasyon geçemiyorsa bu dürüstçe söylenir ve alternatif erişim yöntemi konuşulur. 'Bir şekilde çıkarız' yaklaşımı burada uygulanmaz çünkü sıkışan makine hem sizin işinizi hem bizim günümüzü kilitler.",
            },
            {
                soru: "Zor zeminde çalışırken makine devrilme riski var mı?",
                cevap:
                    "Doğru ekipman ve disiplinle bu risk minimize edilir — zemin eğimi ve sertliği keşifte değerlendirilir, makinenin duruş noktası buna göre seçilir ve yük tablosu dışı kaldırma hiçbir gerekçeyle yapılmaz. Şüpheli zeminde çalışma başlatılmaz; bu kural, zor zeminde standart sahaya göre daha sıkı uygulanır çünkü risk marjı daha dardır.",
            },
            {
                soru: "Yağmur sonrası sahamız çamur oldu, planımız bozulur mu?",
                cevap:
                    "Bozulabilir ve bu, açık saha işlerinin dürüst bir gerçeğidir — mevsimsel zemin değişimi, özellikle toprak veya stabilize sahalarda planı etkileyebilir. Bu risk, işin başında konuşulur ve hava durumuna göre esnek bir pencere önerilir; ıslak dönemde çalışma riskli görünüyorsa, güvenli koşul oluşana kadar erteleme dürüstçe önerilir.",
            },
            {
                soru: "Zor zemin işlerinde ekstra ücret çıkıyor mu?",
                cevap:
                    "Bazı durumlarda evet — arazi tipi ekipman veya ek önlem (yük dağıtım plakası, ek keşif) gerektiren işlerde bu, standart zeminli işe göre farklı fiyatlanabilir. Bu fark, teklif aşamasında açıkça gösterilir ve gizli bir kalem olarak sonradan çıkmaz. Zemin fotoğrafını önceden paylaşmanız, doğru teklifin ilk seferde verilmesini sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İstanbul'un ağırlıklı sabit zeminli sanayi-kentsel dokusu ve zor zemin ihtiyacının sınırlı olduğu Tuzla geri saha/kırsal ilçe örnekleri kamuya açık coğrafi bilgidir; bu alandaki sınırlı hacim dürüstçe belirtilmiştir.",
    },
};
