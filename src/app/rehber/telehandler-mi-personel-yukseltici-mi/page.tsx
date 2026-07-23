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
    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: SORULAR.map((s) => ({
            "@type": "Question",
            name: s.q,
            acceptedAnswer: { "@type": "Answer", text: s.a },
        })),
    };
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
            <Link href="/" className="text-sm text-slate-500 hover:underline">← Yüksekte Çalışma Rehberi</Link>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-blue-700">Makine Seçim Rehberi</p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
                Telehandler mı, Personel Yükseltici mi?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Şantiyede en sık karıştırılan iki makine sınıfını netleştirelim: teleskopik yükleyici
                (telehandler) ile eklemli veya teleskopik personel yükseltici aynı yüksekliğe erişebilir ama aynı iş için
                tasarlanmamıştır. Yanlış seçim hem İSG riski hem gereksiz maliyet üretir.
            </p>
            <div className="mt-10 space-y-8">
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
                    değerlendirmesi esastır.
                </p>
            </div>
        </main>
    );
}
