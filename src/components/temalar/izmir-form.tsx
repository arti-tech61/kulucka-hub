"use client";

import { useState } from "react";

const ILCELER = ["Aliağa", "Bornova", "Torbalı", "Kemalpaşa", "Çiğli AOSB", "Menemen", "Gaziemir", "Işıkkent"];

// izmir landing hero'sundaki "Hızlı Teklif Al" formu → mailto.
export function IzmirHizliTeklif({ eposta }: { eposta: string }) {
    const [g, setG] = useState({ tip: "Dizel Forklift", ilce: ILCELER[0], tel: "" });
    const sel = "form-select w-full rounded border-2 border-[#121c2a]/20 focus:border-[#f68b1e] focus:ring-0 py-3 text-[#121c2a] bg-[#eceef0]";
    function gonder(e: React.FormEvent) {
        e.preventDefault();
        const govde = `Makine Tipi: ${g.tip}\nİlçe: ${g.ilce}\nTelefon: ${g.tel}`;
        window.location.href = `mailto:${eposta}?subject=${encodeURIComponent("Hızlı Teklif — İzmir Forklift")}&body=${encodeURIComponent(govde)}`;
    }
    return (
        <form className="space-y-4" onSubmit={gonder}>
            <div><label className="block text-[13px] font-semibold text-[#554335] mb-1">Makine Tipi</label>
                <select className={sel} value={g.tip} onChange={(e) => setG({ ...g, tip: e.target.value })}><option>Dizel Forklift</option><option>Akülü Forklift</option><option>Makaslı Platform</option><option>Eklemli Platform</option></select></div>
            <div><label className="block text-[13px] font-semibold text-[#554335] mb-1">İlçe</label>
                <select className={sel} value={g.ilce} onChange={(e) => setG({ ...g, ilce: e.target.value })}>{ILCELER.map((i) => <option key={i}>{i}</option>)}</select></div>
            <div><label className="block text-[13px] font-semibold text-[#554335] mb-1">Telefon</label>
                <input className="w-full rounded border-2 border-[#121c2a]/20 focus:border-[#f68b1e] focus:ring-0 py-3 px-3 bg-[#eceef0]" type="tel" placeholder="05XX XXX XX XX" required value={g.tel} onChange={(e) => setG({ ...g, tel: e.target.value })} /></div>
            <button className="w-full font-semibold bg-[#FBBF24] text-[#121c2a] px-6 py-3 rounded border-2 border-transparent hover:border-[#121c2a] transition-all uppercase shadow-sm" type="submit">Teklif Gönder</button>
        </form>
    );
}

// izmir İletişim ekranı formu → mailto.
export function IzmirIletisimForm({ eposta }: { eposta: string }) {
    const [g, setG] = useState({ ad: "", tel: "", firma: "", mesaj: "" });
    const alan = "w-full rounded border-2 border-[#121c2a]/20 focus:border-[#f68b1e] focus:ring-0 py-3 px-4 bg-[#eceef0] text-[#121c2a]";
    const etiket = "block text-[13px] font-semibold text-[#554335] mb-1";
    function gonder(e: React.FormEvent) {
        e.preventDefault();
        const govde = `Ad Soyad: ${g.ad}\nTelefon: ${g.tel}\nFirma: ${g.firma}\n\nMesaj:\n${g.mesaj}`;
        window.location.href = `mailto:${eposta}?subject=${encodeURIComponent("İletişim — İzmir Forklift")}&body=${encodeURIComponent(govde)}`;
    }
    return (
        <form className="space-y-5" onSubmit={gonder}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div><label className={etiket}>Ad Soyad</label><input className={alan} required type="text" value={g.ad} onChange={(e) => setG({ ...g, ad: e.target.value })} /></div>
                <div><label className={etiket}>Telefon</label><input className={alan} required type="tel" value={g.tel} onChange={(e) => setG({ ...g, tel: e.target.value })} /></div>
            </div>
            <div><label className={etiket}>Firma Adı (Opsiyonel)</label><input className={alan} type="text" value={g.firma} onChange={(e) => setG({ ...g, firma: e.target.value })} /></div>
            <div><label className={etiket}>Mesajınız</label><textarea className={`${alan} resize-none`} rows={4} value={g.mesaj} onChange={(e) => setG({ ...g, mesaj: e.target.value })} /></div>
            <button className="w-full md:w-auto font-semibold bg-[#f68b1e] text-white px-8 py-3 rounded shadow-[0_4px_0_0_#c46e12] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#c46e12] transition-all uppercase flex items-center justify-center gap-2" type="submit">Gönder →</button>
        </form>
    );
}
