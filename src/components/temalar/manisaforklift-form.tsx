"use client";

import { useState } from "react";

// manisaforklift.com İletişim ekranının birebir "Send a Request" formu → mailto.
export function ForkliftTalepForm({ eposta }: { eposta: string }) {
    const [g, setG] = useState({ ad: "", firma: "", email: "", tel: "", hizmet: "Filo Kiralama", mesaj: "" });
    const alan = "w-full bg-white border border-[#d3c5ac] rounded-lg px-4 py-3 text-[#191c1e] focus:outline-none focus:ring-2 focus:ring-[#FBBF24] transition-all";
    const etiket = "block font-['Inter'] text-[12px] text-[#4f4633] mb-2";

    function gonder(e: React.FormEvent) {
        e.preventDefault();
        const govde = `Ad Soyad: ${g.ad}\nFirma: ${g.firma}\nE-posta: ${g.email}\nTelefon: ${g.tel}\nHizmet: ${g.hizmet}\n\nMesaj:\n${g.mesaj}`;
        window.location.href = `mailto:${eposta}?subject=${encodeURIComponent("Talep — Manisa Forklift")}&body=${encodeURIComponent(govde)}`;
    }

    return (
        <form className="space-y-6" onSubmit={gonder}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className={etiket}>Ad Soyad</label><input className={alan} required type="text" placeholder="Adınız Soyadınız" value={g.ad} onChange={(e) => setG({ ...g, ad: e.target.value })} /></div>
                <div><label className={etiket}>Firma Adı</label><input className={alan} type="text" placeholder="Firmanız" value={g.firma} onChange={(e) => setG({ ...g, firma: e.target.value })} /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className={etiket}>E-posta Adresi</label><input className={alan} type="email" placeholder="ornek@firma.com" value={g.email} onChange={(e) => setG({ ...g, email: e.target.value })} /></div>
                <div><label className={etiket}>Telefon Numarası</label><input className={alan} required type="tel" placeholder="+90 555 000 0000" value={g.tel} onChange={(e) => setG({ ...g, tel: e.target.value })} /></div>
            </div>
            <div><label className={etiket}>Hizmet</label>
                <select className={`${alan} appearance-none`} value={g.hizmet} onChange={(e) => setG({ ...g, hizmet: e.target.value })}>
                    <option>Filo Kiralama</option><option>Acil Onarım</option><option>Bakım Sözleşmesi</option><option>Diğer</option>
                </select>
            </div>
            <div><label className={etiket}>Mesaj</label><textarea className={`${alan} resize-none`} rows={5} placeholder="Lojistik ihtiyacınızı açıklayın..." value={g.mesaj} onChange={(e) => setG({ ...g, mesaj: e.target.value })} /></div>
            <button className="w-full md:w-auto bg-[#FBBF24] text-black font-semibold px-8 py-4 rounded-lg hover:brightness-95 transition-all shadow-sm flex items-center justify-center gap-2" type="submit">Talep Gönder →</button>
        </form>
    );
}
