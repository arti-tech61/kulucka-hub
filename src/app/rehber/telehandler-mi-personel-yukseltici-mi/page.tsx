import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

const SORULAR = [
    {
        q: "Telehandler ile personel yükseltici platform arasındaki temel fark nedir?",
        a: "Telehandler (teleskopik yükleyici) öncelikle yük taşımak için tasarlanmıştır: paletli malzemeyi yüksekteki bir noktaya ulaştırır. Eklemli veya teleskopik personel yükseltici ise çalışanı korkuluklu platform içinde çalışma noktasına konumlandırır. Telehandler üzerinde insan kaldırma ancak üreticinin onayladığı makine-aparat konfigürasyonu ve geçerli saha kurallarıyla değerlendirilmelidir.",
    },
    {
        q: "Hangi işte telehandler seçilmeli?",
        a: "Malzemenin yüksek rafa, çatıya veya iskele üzerine taşınması ana işse telehandler doğru makinedir: tuğla/palet çıkarma, çatı kaplama malzemesi besleme, prefabrik montaj lojistiği. Aynı makinede çatal yerine kova, vinç kancası gibi aparatlar da kullanılabilir.",
    },
    {
        q: "Hangi işte eklemli veya teleskopik platform seçilmeli?",
        a: "İş yüksekte çalışmayı gerektiriyorsa — cephe kaynağı, tesisat, boya, cam montajı veya bakım gibi — erişim geometrisine göre eklemli ya da teleskopik personel yükseltici değerlendirilir. Personel korkuluklu platformda çalışır ve kumandaya doğrudan erişir.",
    },
    {
        q: "Sepetli telehandler platform yerine geçer mi?",
        a: "Sınırlı olarak. İnsan taşıma sepeti takılmış telehandler yalnız üreticinin onayladığı konfigürasyonda ve yük tablosuna uyularak kullanılabilir; sepetten kumanda çoğu modelde yoktur, bu da hareket hâlinde çalışmayı kısıtlar. Sürekli yüksekte çalışma işlerinde gerçek platform hem daha güvenli hem daha verimlidir.",
    },
    {
        q: "Maliyet tarafında nasıl karşılaştırmalı?",
        a: "Kiralama bedelleri bölgeye, kapasiteye ve süreye göre değişir. Karşılaştırmada önce işin ana faaliyeti belirlenmelidir: yük taşımak mı, personeli çalışma noktasına ulaştırmak mı? Fiyat karşılaştırması ancak uygun makine sınıfları belirlendikten ve güncel yazılı teklifler alındıktan sonra anlamlıdır.",
    },
    {
        q: "Telehandler operatörü ile platform operatörünün belgesi aynı mı?",
        a: "Hayır, farklı iş ekipmanı sınıfları farklı yeterlilikler gerektirir. Telehandler bir kaldırma/taşıma makinesi, personel yükseltici ise bir yüksekte çalışma ekipmanıdır. Operatörün hangi belgeye sahip olması gerektiği, kullanılan makine sınıfına, göreve ve işverenin prosedürüne göre belirlenir; güncel şartlar yetkili İSG birimi ve resmî kaynaklardan doğrulanmalıdır.",
    },
    {
        q: "Telehandler bir forklift midir?",
        a: "İkisi de yük taşır ama aynı değildir. Forklift, düz zeminde ve genellikle depo içinde palet istifler; teleskopik bomu yoktur. Telehandler ise uzayan bomuyla yükü ileri ve yukarı, örneğin iskele üstüne veya çatıya ulaştırabilir ve arazi zemininde çalışabilir. Forklift, telehandler ve personel yükseltici üç ayrı sınıftır ve birbirinin yerine kullanılmamalıdır.",
    },
    {
        q: "Aynı işte hem yük hem personel varsa ne yapmalı?",
        a: "Çoğu gerçek projede iki faaliyet birlikte bulunur: malzemeyi yükseğe çıkarmak ve orada personel çalıştırmak. Doğru yaklaşım, tek makineyi zorlamak yerine iş kalemlerini ayırmak ve her biri için uygun makineyi getirmektir — malzeme için telehandler, çalışma için personel yükseltici. Onaysız sepetle telehandler'ı personel yükselticiye çevirmeye çalışmak ciddi bir güvenlik riskidir.",
    },
    {
        q: "Makaslı platform bu karşılaştırmanın neresinde?",
        a: "Çalışma noktasının tam altına makine konulabiliyor ve zemin düz ve sağlamsa, dikey erişim için makaslı platform çoğu zaman en pratik ve ekonomik personel yükselticidir. Eklemli ve teleskopik modeller, arada engel olduğunda veya noktaya uzaktan erişmek gerektiğinde devreye girer. Yani personel erişiminde önce makaslının uygunluğu değerlendirilir, geometri elvermezse eklemli/teleskopiğe geçilir.",
    },
];

export const metadata: Metadata = {
    title: "Telehandler mı, Personel Yükseltici mi?",
    description:
        "Telehandler ile eklemli veya teleskopik personel yükseltici arasındaki farklar: yük taşıma, personel erişimi, güvenlik ve makine seçimi.",
    alternates: { canonical: "https://yuksektecalismarehberi.com/rehber/telehandler-mi-personel-yukseltici-mi" },
    openGraph: {
        title: "Telehandler mı, Personel Yükseltici mi?",
        description:
            "Telehandler ile eklemli veya teleskopik personel yükselticinin kullanım ve güvenlik farklarını karşılaştırın.",
        type: "article",
        locale: "tr_TR",
        url: "https://yuksektecalismarehberi.com/rehber/telehandler-mi-personel-yukseltici-mi",
        images: [{
            url: "https://yuksektecalismarehberi.com/media/saha-hero.png",
            alt: "Telehandler ve personel yükseltici seçim rehberi",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Telehandler mı, Personel Yükseltici mi?",
        description:
            "Telehandler ile eklemli veya teleskopik personel yükselticinin kullanım ve güvenlik farklarını karşılaştırın.",
        images: ["https://yuksektecalismarehberi.com/media/saha-hero.png"],
    },
};

export default function TelehandlerRehberi() {
    const HOST = "yuksektecalismarehberi.com";
    const yol = `https://${HOST}/rehber/telehandler-mi-personel-yukseltici-mi`;
    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: SORULAR.map((s) => ({
            "@type": "Question",
            name: s.q,
            acceptedAnswer: { "@type": "Answer", text: s.a },
        })),
    };
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Telehandler mı, Personel Yükseltici mi?",
        description: "Telehandler ile eklemli veya teleskopik personel yükseltici arasındaki kullanım, güvenlik ve makine seçimi farkları.",
        articleSection: "Makine Seçim Rehberi",
        inLanguage: "tr-TR",
        datePublished: "2026-07-20",
        dateModified: "2026-07-23",
        author: { "@type": "Organization", name: "Yüksekte Çalışma Rehberi", url: `https://${HOST}` },
        publisher: { "@type": "Organization", name: "Yüksekte Çalışma Rehberi", url: `https://${HOST}` },
        mainEntityOfPage: yol,
    };
    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Yüksekte Çalışma Rehberi", item: `https://${HOST}/` },
            { "@type": "ListItem", position: 2, name: "Telehandler mı, Personel Yükseltici mi?", item: yol },
        ],
    };
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-slate-500">
                <ol className="flex flex-wrap items-center gap-2">
                    <li><Link href="/" className="text-blue-700 hover:underline">Yüksekte Çalışma Rehberi</Link></li>
                    <li aria-hidden="true" className="text-slate-400">/</li>
                    <li className="text-slate-700" aria-current="page">Makine Seçim Rehberi</li>
                </ol>
            </nav>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-blue-700">Makine Seçim Rehberi</p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
                Telehandler mı, Personel Yükseltici mi?
            </h1>
            <p className="mt-3 text-sm text-slate-500">
                <time dateTime="2026-07-20">Yayımlandı: 20 Temmuz 2026</time> · <time dateTime="2026-07-23">Güncellendi: 23 Temmuz 2026</time>
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Şantiyede en sık karıştırılan iki makine sınıfını netleştirelim: teleskopik yükleyici
                (telehandler) ile eklemli veya teleskopik personel yükseltici aynı yüksekliğe erişebilir ama aynı iş için
                tasarlanmamıştır. Yanlış seçim hem İSG riski hem gereksiz maliyet üretir.
            </p>

            <div className="mt-8 space-y-4 leading-relaxed text-slate-700">
                <h2 className="text-2xl font-bold text-slate-900">İki makine, iki farklı tasarım felsefesi</h2>
                <p>
                    Telehandler, temelde bir kaldırma ve taşıma makinesidir: uzayan teleskopik bomunun ucundaki çatal,
                    kova veya kancayla malzemeyi ileri ve yukarı, örneğin bir iskele üstüne ya da çatı seviyesine ulaştırır.
                    Ağırlık merkezi, denge ve yük tablosu bu makinenin kalbidir; her erişim mesafesinde taşıyabileceği yük
                    değişir ve operatör bu tabloyu okuyarak çalışır.
                </p>
                <p>
                    Eklemli veya teleskopik personel yükseltici ise insanı çalışma noktasına konumlandırmak için tasarlanmıştır.
                    Çalışan, korkuluklu ve zemin dayanımı test edilmiş bir sepetin içinde durur; kumandaya doğrudan sepetten erişir
                    ve bomu kendi ihtiyacına göre hareket ettirir. Burada tasarımın merkezinde yük değil, sepetteki kişinin güvenli
                    erişimi ve konforu vardır.
                </p>
                <p>
                    Aynı yüksekliğe ulaşan iki makinenin farklı amaçlar için tasarlanmış olması, aralarındaki en kritik ayrımdır.
                    Bir makinenin ulaşabildiği yükseklik, o işi güvenle yapabileceği anlamına gelmez. Doğru soru “kaç metreye
                    çıkıyor?” değil, “bu işin ana faaliyeti yük taşımak mı, yoksa personeli çalıştırmak mı?” sorusudur.
                </p>

                <h2 className="pt-4 text-2xl font-bold text-slate-900">Güvenlik ve mevzuat açısından fark</h2>
                <p>
                    Personel yükseltici, mevzuatın önlem hiyerarşisinde bir toplu koruma çözümü olarak konumlanır: çalışan,
                    korkuluklu platformda çalışır ve düşme riski kaynağında azaltılır. Telehandler ise öncelikle bir yük ekipmanıdır;
                    üzerinde insan kaldırmak istisnai ve koşullu bir kullanımdır.
                </p>
                <p>
                    Bir telehandler’a insan taşıma sepeti takmak, ancak üreticinin o makine–sepet konfigürasyonunu onayladığı, yük
                    tablosuna uyulduğu ve geçerli saha kurallarının sağlandığı durumlarda değerlendirilebilir. Birçok modelde sepetten
                    doğrudan kumanda bulunmaz; bu da hareket hâlinde çalışmayı ve acil durumda sepetteki kişinin makineyi kontrol
                    etmesini kısıtlar. Sürekli yüksekte çalışma işlerinde gerçek personel yükseltici hem daha güvenli hem daha verimlidir.
                </p>
                <p>
                    Telehandler, forklift ve personel yükseltici sınıflarını birbirinin yerine kullanmamak yalnız bir terminoloji
                    tercihi değil, bir güvenlik ilkesidir. Her sınıfın kendi yük tablosu, kendi kullanım kuralları ve kendi operatör
                    yeterlilik beklentisi vardır. “Nasılsa çıkıyor” yaklaşımı, bu makineleri tasarım amaçlarının dışında kullanmaya ve
                    ciddi kazalara yol açar.
                </p>

                <h2 className="pt-4 text-2xl font-bold text-slate-900">Doğru sıralama: önce faaliyet, sonra makine</h2>
                <p>
                    Seçimi kolaylaştıran en pratik yöntem, işi tek bir ana faaliyete indirgemektir. Bir çatı kaplama projesinde
                    malzemeyi çatıya çıkarmak ana faaliyetse telehandler; çatıda kaynak, montaj veya tesisat yapacak personeli
                    güvenle konumlandırmak ana faaliyetse personel yükseltici doğru makinedir. Çoğu gerçek projede iki faaliyet de
                    vardır ve doğru çözüm, tek makineyi zorlamak değil, iş kalemlerini ayırıp her birine uygun makineyi getirmektir.
                </p>
                <p>
                    Bu ayrımı yapmadan verilen kararlar, sahada iki tipik hataya dönüşür. Birincisi, elde telehandler olduğu için
                    personeli onunla yükseltmeye çalışmak: onaysız bir sepetle, sepetten kumanda olmadan, yük tablosu zorlanarak
                    yapılan bu iş ciddi bir İSG riskidir. İkincisi, sadece personel yükseltici kiralayıp ağır malzemeyi elle veya
                    uygunsuz yöntemle yukarı taşımaya çalışmak; bu da hem verim kaybı hem kas-iskelet ve düşme riski üretir.
                </p>
                <p>
                    Maliyet karşılaştırması da ancak doğru makine sınıfları belirlendikten sonra anlam kazanır. İki farklı işi tek
                    makineyle yapmaya çalışıp kaza veya duruş riskini üstlenmek, iki uygun makineyi doğru sürelerle kiralamaktan
                    çoğu zaman daha pahalıdır. Fiyat, güvenli ve verimli çözümün içinde değerlendirilmelidir; tek başına değil.
                </p>
            </div>

            <h2 className="mt-12 text-2xl font-bold text-slate-900">Sık sorulan sorular</h2>
            <div className="mt-6 space-y-8">
                {SORULAR.map((s) => (
                    <section key={s.q}>
                        <h2 className="text-xl font-bold">{s.q}</h2>
                        <p className="mt-2 leading-relaxed text-slate-700">{s.a}</p>
                    </section>
                ))}
            </div>
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold">Özet karar tablosu</h2>
                <ul className="mt-4 space-y-2 text-slate-700">
                    <li><b>Yük taşınacak</b> → telehandler</li>
                    <li><b>İnsan çalışacak</b> → erişime göre eklemli veya teleskopik personel yükseltici</li>
                    <li><b>Düz zemin + dikey erişim</b> → makaslı platform da değerlendirin</li>
                    <li><b>Her ikisi de gerekli</b> → iki ayrı makine; sepetli telehandler yalnız onaylı konfigürasyonda</li>
                </ul>
                <p className="mt-4 text-sm text-slate-500">
                    Bu rehber bilgilendirme amaçlıdır; makine seçiminde üretici yük tablosu ve İSG uzmanınızın
                    değerlendirmesi esastır. Kapasite, erişim ve belge gereksinimleri makineye, modele ve göreve göre
                    değişir; kesin bilgi, teslim edilen makinenin teknik föyü ve yazılı teklif üzerinden doğrulanmalıdır.
                </p>
            </div>
        </main>
    );
}
