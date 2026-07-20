import type { Yazi } from "@/lib/yazilar";

export const guvenliKategoriler = ["Mevzuat", "Saha Güvenliği", "Ekipman", "Eğitim", "Sektör"] as const;

export const guvenliYazilar: Yazi[] = [
    {
        slug: "yuksekte-calisma-yonetmeligi-isverenin-yukumlulukleri",
        kategori: "Mevzuat",
        baslik: "Yüksekte Çalışmada İşverenin Yükümlülükleri: Mevzuatın Sahaya Çevirisi",
        ozet: "6331 sayılı Kanun ve İnşaat İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği yüksekte çalışmayı nasıl tanımlıyor, işverenden somut olarak ne istiyor? Maddeleri saha diline çevirdik.",
        tarih: "2026-07-20",
        paragraflar: [
            "Türk mevzuatında yüksekte çalışma, seviye farkı bulunan ve düşme sonucu yaralanma ihtimali olan her çalışmayı kapsar. Yaygın kanının aksine belirli bir metre eşiği yoktur: bir metrelik seviye farkı bile, düşme riski doğuruyorsa yüksekte çalışma sayılır ve aynı yükümlülükleri tetikler.",
            "İşverenin ilk yükümlülüğü işi planlamaktır: çalışma başlamadan önce risk değerlendirmesi yapılmalı, toplu koruma önlemleri (korkuluk, platform, güvenlik ağı) kişisel önlemlere (emniyet kemeri) göre öncelikli olarak değerlendirilmelidir. Mevzuat bu hiyerarşiyi açıkça kurar; kemer, korkuluğun yerine geçmez.",
            "İkinci yükümlülük ekipman seçimidir: yapılan işe uygun, periyodik kontrolü yapılmış ekipman kullanılmalıdır. Yükseltici platformlar için bu, yılda en az bir kez yetkili teknik elemanca yapılan periyodik kontrol ve her vardiya öncesi operatör kontrolü demektir.",
            "Üçüncü yükümlülük eğitimdir: yüksekte çalışacak personele işe özgü eğitim verilmeli, yükseltici platform kullanan operatörlerin belgeleri bulunmalıdır. Eğitim kayıtları denetimde ilk istenen evraklar arasındadır.",
            "Güvenli Yükseliş olarak bu başlıkta yönetmelik değişikliklerini ve Yargıtay'ın iş kazası kararlarından çıkan içtihatları düzenli olarak izleyip sadeleştireceğiz.",
        ],
    },
    {
        slug: "bomlu-platformda-emniyet-kemeri-neden-tartisilmaz",
        kategori: "Saha Güvenliği",
        baslik: "Bomlu Platformda Emniyet Kemeri Neden Tartışılmaz?",
        ozet: "Makaslı platformda korkuluk çoğu durumda yeterliyken bomlu platformda tam vücut kemeri zorunlu. Fırlama etkisi (catapult effect) bu farkın nedeni — mekanizmayı ve doğru bağlantı noktasını anlatıyoruz.",
        tarih: "2026-07-20",
        paragraflar: [
            "Bomlu (eklemli veya teleskopik) platformlarda sepet, uzun bir kaldıraç kolunun ucundadır. Makine bir çukura girdiğinde, bir engelle karşılaştığında ya da ani bir hareket yaptığında bu kol bir mancınık gibi davranır ve sepetteki çalışanı yukarı doğru fırlatabilir. Sektörde 'catapult effect' denen bu mekanizma, korkuluğun koruyamayacağı bir risktir.",
            "Bu nedenle bomlu platformlarda tam vücut emniyet kemeri ve kısa lanyard kullanımı tartışmasız kuraldır: amaç düşmeyi durdurmak değil, çalışanı sepetin içinde tutmaktır. Lanyard uzun seçilirse çalışan sepetten fırladıktan sonra havada sallanır — koruma amacı ortadan kalkar.",
            "Bağlantı noktası da kritiktir: kemer, sepetin korkuluğuna değil, üretici tarafından işaretlenmiş ankraj noktasına bağlanmalıdır. Her sepette bu nokta bulunur ve kullanım kılavuzunda gösterilir.",
            "Makaslı platformlarda ise sepet doğrudan şasinin üzerinde dikey hareket eder; fırlama etkisi yoktur. Bu yüzden korkulukları sağlam ve kapısı kapalı bir makaslı platformda kemer, üretici aksini söylemedikçe zorunlu değildir. İki makine tipi arasındaki bu fark, saha eğitimlerinde en sık yanlış anlatılan konulardan biridir.",
        ],
    },
    {
        slug: "yukseltici-platform-periyodik-kontrol-rehberi",
        kategori: "Ekipman",
        baslik: "Yükseltici Platformda Periyodik Kontrol: Neye, Ne Sıklıkla Bakılır?",
        ozet: "İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği'ne göre kaldırma ekipmanlarının kontrol periyotları, kontrolü kimin yapabileceği ve raporda aranacak başlıklar.",
        tarih: "2026-07-20",
        paragraflar: [
            "Yükseltici platformlar, İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği kapsamında kaldırma ve iletme ekipmanı sayılır. Standartlarda aksi belirtilmedikçe yılda en az bir kez, yetkili makine mühendisi, makine teknikeri veya yüksek teknikeri tarafından periyodik kontrole tabi tutulmaları gerekir.",
            "Periyodik kontrol raporunda şu başlıklar aranmalıdır: yük testi sonucu, hidrolik sistem ve hortum kontrolleri, acil indirme düzeneğinin çalışması, korkuluk ve giriş kapısı kilitleri, denge (tilt) sensörü ve limit anahtarlarının testi.",
            "Yıllık kontrol tek başına yeterli değildir: operatörün her vardiya başında yaptığı günlük kontrol — lastikler, akü/yakıt, kumanda fonksiyonları, acil stop, korkuluklar — kayıt altına alınmalıdır. Ciddi kazaların önemli bölümü, günlük kontrolde yakalanabilecek arızalardan çıkar.",
            "Kiralık makinelerde sorumluluk paylaşımı sözleşmeyle netleştirilmelidir: periyodik kontrol raporunu kiralayan firma sağlar, günlük kontrol ve doğru kullanım kiracının yükümlülüğündedir. Raporun bir kopyasının makineyle birlikte sahada bulunması denetimlerde zaman kazandırır.",
        ],
    },
    {
        slug: "myk-ve-ipaf-operator-belgesi-farklari",
        kategori: "Eğitim",
        baslik: "MYK Belgesi mi, IPAF Kartı mı? Operatör Belgelendirmesinde Yol Haritası",
        ozet: "Türkiye'de yükseltici platform operatörünün hangi belgeye ihtiyacı var? MYK Ulusal Yeterlilik ile uluslararası IPAF eğitiminin kapsamları, geçerlilikleri ve hangi durumda hangisinin arandığı.",
        tarih: "2026-07-20",
        paragraflar: [
            "Türkiye'de tehlikeli ve çok tehlikeli işlerde çalışanların Mesleki Yeterlilik Kurumu (MYK) belgesine sahip olması esastır. Yükseltici platform operatörlüğü için ilgili ulusal yeterlilik üzerinden teorik ve pratik sınavla belge alınır; belge, yetkilendirilmiş belgelendirme kuruluşlarınca düzenlenir.",
            "IPAF (International Powered Access Federation) eğitimi ise uluslararası geçerliliğe sahip bir sektör standardıdır: PAL Card, makine kategorilerine (3a makaslı, 3b bomlu vb.) göre verilir ve beş yıl geçerlidir. Uluslararası projelerde, denetimli büyük şantiyelerde ve yabancı ana yüklenicilerin sahalarında sıkça şart koşulur.",
            "İki belge birbirinin alternatifi değil tamamlayıcısıdır: yasal zorunluluğu MYK karşılar, IPAF ise işverene uluslararası standartta eğitim güvencesi verir. Bütçesi kısıtlı işletmeler için önerilen sıra, önce MYK belgesinin tamamlanması, uluslararası saha gereksinimi doğduğunda IPAF eğitiminin eklenmesidir.",
            "Belgesiz operatör çalıştırmanın sonucu yalnız idari para cezası değildir: kaza hâlinde işverenin kusur oranı artar, sigorta rücu riski doğar. Kiralama sözleşmelerinde 'operatör belgesini kiracı sağlar' maddesi varsa belge kontrolü fiilen kiracının İSG ekibine düşer.",
        ],
    },
    {
        slug: "insaatta-dusme-kazalari-veriler-ve-onlemler",
        kategori: "Sektör",
        baslik: "İnşaatta Ölümlü Kazaların Değişmeyen Birincisi: Yüksekten Düşme",
        ozet: "Resmî istatistiklerde inşaat sektöründeki ölümlü iş kazalarının en büyük payı yüksekten düşmede. Verinin anlattıkları ve düşme kazalarını azalttığı kanıtlanmış dört uygulama.",
        tarih: "2026-07-20",
        paragraflar: [
            "SGK iş kazası istatistiklerinde inşaat, ölümlü kazaların en yoğun görüldüğü sektör; yüksekten düşme ise bu kazaların açık ara en büyük nedeni olarak yıllardır ilk sırada. Tablo yıldan yıla küçük oynamalar gösterse de yapısı değişmiyor: düşmeler çoğunlukla korunmasız döşeme kenarlarından, iskelelerden ve çatılardan yaşanıyor.",
            "Kanıtlanmış birinci önlem, geçici kenar korumasının (korkuluk) projelendirme aşamasında planlanmasıdır: koruma, iş başladıktan sonra 'eklenen' değil, işin metoduna baştan gömülen bir kalem olduğunda uygulanma oranı belirgin artar.",
            "İkincisi, merdiven ve iskele yerine mekanize erişimdir: kısa süreli yüksekte çalışmalarda yükseltici platform kullanımı, hem düşme riskini hem de kas-iskelet yüklenmesini azaltır. Avrupa verileri, platform kullanımının yaygınlaştığı işlerde düşme kaynaklı kayıp gün sayısının düştüğünü gösteriyor.",
            "Üçüncüsü çalışma izin sistemidir: yüksekte çalışma iznini, işi yapan ekipten bağımsız bir yetkilinin onaylaması, atlanmış önlemleri işe başlamadan yakalar. Dördüncüsü ise kısa ve işe özgü eğitim tekrarlarıdır: uzun yıllık eğitimler yerine, o günkü işin risklerine odaklanan beş dakikalık başlangıç konuşmaları (toolbox talk) sahada davranışı daha çok değiştiriyor.",
            "Güvenli Yükseliş bu sayfada sektör istatistiklerini her yayım döneminde güncelleyecek; okuyucularımızın sahadan aktardığı ramak kala vakaları, kimlik bilgisi olmadan derlenip herkesin dersine sunulacak.",
        ],
    },
];
