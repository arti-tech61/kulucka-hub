import Link from "next/link";
import Script from "next/script";
import type { HaberSitesi } from "@/lib/haber-config";

const renkler = {
    red: { vurgu: "text-red-600" },
    amber: { vurgu: "text-amber-600" },
} as const;

// Haber siteleri (izmirsektor.com, guvenliyukselis.com) hub içinden yayınlanır;
// kendi başlık/altbilgi çerçevelerini bu bileşen taşır.
export function HaberCerceve({ site, children }: { site: HaberSitesi; children: React.ReactNode }) {
    const renk = renkler[site.renk];
    return (
        <div className="bg-slate-50">
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
            <Script id="ga-haber" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${site.gaId}');
              document.addEventListener('click', function (e) {
                var a = e.target && e.target.closest ? e.target.closest('a') : null;
                if (!a || !a.href) return;
                if (a.href.indexOf('tel:') === 0) gtag('event', 'telefon_tiklamasi');
                else if (a.href.indexOf('wa.me') !== -1 || a.href.indexOf('api.whatsapp.com') !== -1) gtag('event', 'whatsapp_tiklamasi');
              }, true);
              document.addEventListener('submit', function (e) {
                if (e.target && e.target.tagName === 'FORM') gtag('event', 'generate_lead');
              }, true);
            `}</Script>
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
                    <Link href="/" className="text-2xl font-extrabold tracking-tight">
                        {site.adOn}<span className={renk.vurgu}>{site.adSon}</span>
                    </Link>
                    <p className="hidden text-sm text-slate-500 sm:block">{site.slogan}</p>
                </div>
                <nav aria-label="Yayın menüsü" className="mx-auto flex max-w-4xl flex-wrap gap-4 px-6 pb-4 text-sm">
                    <Link href="/" className="font-semibold text-slate-800">Ana sayfa</Link>
                    <Link href="/hakkimizda" className="text-slate-600 hover:text-slate-900">Hakkımızda</Link>
                    <Link href="/yayin-ilkeleri" className="text-slate-600 hover:text-slate-900">Yayın ilkeleri</Link>
                    <Link href="/iletisim" className="text-slate-600 hover:text-slate-900">İletişim</Link>
                </nav>
            </header>
            {children}
            <footer className="mt-16 border-t border-slate-200 bg-white">
                <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-slate-500">
                    © {new Date().getFullYear()} {site.altBilgi}
                    <span> · </span><Link className="underline" href="/gizlilik-politikasi">Gizlilik</Link>
                    <span> · </span><Link className="underline" href="/kullanim-kosullari">Koşullar</Link>
                </div>
            </footer>
        </div>
    );
}

export function HaberAnaSayfa({ site }: { site: HaberSitesi }) {
    const renk = renkler[site.renk];
    const [manset, ...digerleri] = site.yazilar;
    return (
        <HaberCerceve site={site}>
            <main className="mx-auto max-w-4xl px-6 py-10">
                <nav className="flex flex-wrap gap-2 text-sm">
                    {site.kategoriler.map((k) => (
                        <span key={k} className="rounded-full border border-slate-300 bg-white px-3 py-1 text-slate-600">
                            {k}
                        </span>
                    ))}
                </nav>

                <article className="mt-8">
                    <p className={`text-xs font-bold uppercase tracking-widest ${renk.vurgu}`}>{manset.kategori}</p>
                    <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
                        <Link href={`/yazi/${manset.slug}`} className="hover:underline">{manset.baslik}</Link>
                    </h1>
                    <p className="mt-3 text-lg leading-relaxed text-slate-600">{manset.ozet}</p>
                </article>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                    {digerleri.map((y) => (
                        <article key={y.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <p className={`text-xs font-bold uppercase tracking-widest ${renk.vurgu}`}>{y.kategori}</p>
                            <h2 className="mt-2 text-xl font-bold leading-snug">
                                <Link href={`/yazi/${y.slug}`} className="hover:underline">{y.baslik}</Link>
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">{y.ozet}</p>
                        </article>
                    ))}
                </div>
            </main>
        </HaberCerceve>
    );
}
