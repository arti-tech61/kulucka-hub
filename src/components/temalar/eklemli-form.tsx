"use client";

import { useState } from "react";

// eklemli hero "Hızlı Teklif Alın" formu → mailto.
export function EklemliHizliTeklif({ eposta }: { eposta: string }) {
    const [g, setG] = useState({ tip: "Eklemli Platform", yuk: "0 - 10 Metre" });
    const sel = "w-full rounded-lg border border-[#edeef0] bg-[#f8f9fb] py-3 px-3 text-[#191c1e] focus:ring-2 focus:ring-[#3151eb] outline-none";
    function gonder(e: React.FormEvent) {
        e.preventDefault();
        window.location.href = `mailto:${eposta}?subject=${encodeURIComponent("Hızlı Teklif — Eklemli Platform")}&body=${encodeURIComponent(`Makine Tipi: ${g.tip}\nÇalışma Yüksekliği: ${g.yuk}`)}`;
    }
    return (
        <form className="space-y-4" onSubmit={gonder}>
            <div><label className="block text-[13px] font-semibold text-[#444655] mb-1">Makine Tipi</label><select className={sel} value={g.tip} onChange={(e) => setG({ ...g, tip: e.target.value })}><option>Makaslı Platform</option><option>Eklemli Platform</option><option>Forklift</option></select></div>
            <div><label className="block text-[13px] font-semibold text-[#444655] mb-1">Çalışma Yüksekliği</label><select className={sel} value={g.yuk} onChange={(e) => setG({ ...g, yuk: e.target.value })}><option>0 - 10 Metre</option><option>10 - 20 Metre</option><option>20 Metre +</option></select></div>
            <button className="w-full bg-[#3151eb] text-white font-semibold py-3 rounded-lg hover:bg-[#0233d3] transition-colors flex items-center justify-center gap-2" type="submit">Teklif İste →</button>
        </form>
    );
}

// eklemli İletişim "Mesaj Gönderin" formu → mailto.
export function EklemliIletisimForm({ eposta }: { eposta: string }) {
    const [g, setG] = useState({ ad: "", tel: "", email: "", mesaj: "" });
    const alan = "w-full rounded-lg border border-[#edeef0] bg-[#f8f9fb] py-3 px-4 text-[#191c1e] focus:ring-2 focus:ring-[#3151eb] outline-none";
    const etiket = "block text-[13px] font-semibold text-[#444655] mb-1";
    function gonder(e: React.FormEvent) {
        e.preventDefault();
        window.location.href = `mailto:${eposta}?subject=${encodeURIComponent("İletişim — Eklemli Platform")}&body=${encodeURIComponent(`Ad Soyad: ${g.ad}\nTelefon: ${g.tel}\nE-posta: ${g.email}\n\nMesaj:\n${g.mesaj}`)}`;
    }
    return (
        <form className="space-y-5" onSubmit={gonder}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div><label className={etiket}>Ad Soyad</label><input className={alan} required type="text" value={g.ad} onChange={(e) => setG({ ...g, ad: e.target.value })} /></div>
                <div><label className={etiket}>Telefon</label><input className={alan} required type="tel" value={g.tel} onChange={(e) => setG({ ...g, tel: e.target.value })} /></div>
            </div>
            <div><label className={etiket}>E-posta</label><input className={alan} type="email" value={g.email} onChange={(e) => setG({ ...g, email: e.target.value })} /></div>
            <div><label className={etiket}>Mesajınız</label><textarea className={`${alan} resize-none`} rows={5} value={g.mesaj} onChange={(e) => setG({ ...g, mesaj: e.target.value })} /></div>
            <button className="w-full md:w-auto bg-[#3151eb] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#0233d3] transition-colors" type="submit">Mesaj Gönder</button>
        </form>
    );
}
