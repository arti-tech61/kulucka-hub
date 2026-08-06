import type { SiteIcerik } from "@/lib/siteler";
import { anaSayfaDetayliRehber } from "@/lib/siteler";

// Bespoke temaların hepsinde ortak, nötr stilli "Detaylı Kiralama Rehberi"
// bölümü — ana sayfa SEO içeriği (12 paragraf) burada, katlanabilir olarak
// gösterilir. Her temanın kendi rengiyle çakışmayan nötr gri/beyaz palet
// kullanır, böylece hangi temaya eklenirse eklensin sorunsuz oturur.
export function DetayliRehber({ site }: { site: SiteIcerik }) {
    const rehber = anaSayfaDetayliRehber(site);
    if (!rehber || rehber.length === 0) return null;
    return (
        <section className="mx-auto max-w-4xl px-6 py-12 md:px-8">
            <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer text-xl font-bold text-slate-900">
                    {site.h1} — Detaylı Kiralama Rehberi
                </summary>
                <div className="mt-6 space-y-4 text-slate-600">
                    {rehber.map((p, i) => (
                        <p key={i} className="leading-7">{p}</p>
                    ))}
                </div>
            </details>
        </section>
    );
}
