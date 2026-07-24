"use client";

import { useState } from "react";

// platformmanisa.com İletişim ekranının birebir form alanları → mailto.
export function ManisaTeklifForm({ eposta, opsiyonlar }: { eposta: string; opsiyonlar: string[] }) {
    const [g, setG] = useState({ ad: "", tel: "", firma: "", lokasyon: "", yukseklik: "", mesaj: "" });
    const alan = "w-full bg-[#323537] border border-[#434656] rounded-lg px-4 py-3 text-[#e0e3e5] placeholder-[#c4c5d9]/50 focus:border-[#b8c4ff] focus:ring-1 focus:ring-[#b8c4ff] transition-colors outline-none";
    const etiket = "block font-['JetBrains_Mono'] text-[12px] tracking-[0.1em] uppercase font-semibold text-[#c4c5d9] mb-2";

    function gonder(e: React.FormEvent) {
        e.preventDefault();
        const govde = `Ad Soyad: ${g.ad}\nTelefon: ${g.tel}\nFirma: ${g.firma}\nProje Lokasyonu: ${g.lokasyon}\nÇalışma Yüksekliği: ${g.yukseklik}\n\nEk Detaylar:\n${g.mesaj}`;
        window.location.href = `mailto:${eposta}?subject=${encodeURIComponent("Teklif Talebi — Manisa Platform")}&body=${encodeURIComponent(govde)}`;
    }

    return (
        <form className="space-y-6" onSubmit={gonder}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className={etiket}>Ad Soyad</label><input className={alan} required type="text" placeholder="Adınız Soyadınız" value={g.ad} onChange={(e) => setG({ ...g, ad: e.target.value })} /></div>
                <div><label className={etiket}>Telefon Numarası</label><input className={alan} required type="tel" placeholder="05XX XXX XX XX" value={g.tel} onChange={(e) => setG({ ...g, tel: e.target.value })} /></div>
            </div>
            <div><label className={etiket}>Firma Adı</label><input className={alan} type="text" placeholder="Firmanızın Adı" value={g.firma} onChange={(e) => setG({ ...g, firma: e.target.value })} /></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className={etiket}>Proje Lokasyonu</label>
                    <select className={alan} value={g.lokasyon} onChange={(e) => setG({ ...g, lokasyon: e.target.value })}>
                        <option value="">Bölge Seçiniz</option>
                        {opsiyonlar.map((o) => <option key={o} value={o}>{o}</option>)}
                        <option value="Diğer">Diğer</option>
                    </select>
                </div>
                <div><label className={etiket}>Gerekli Çalışma Yüksekliği</label>
                    <select className={alan} value={g.yukseklik} onChange={(e) => setG({ ...g, yukseklik: e.target.value })}>
                        <option value="">Yükseklik Seçiniz</option>
                        <option>6 - 10 Metre</option><option>12 - 16 Metre</option><option>18 - 22 Metre</option><option>24+ Metre</option>
                    </select>
                </div>
            </div>
            <div><label className={etiket}>Ek Detaylar (Opsiyonel)</label><textarea className={`${alan} resize-none`} rows={3} placeholder="Projenizle ilgili belirtmek istediğiniz diğer detaylar..." value={g.mesaj} onChange={(e) => setG({ ...g, mesaj: e.target.value })} /></div>
            <button className="w-full bg-[#b8c4ff] text-[#002486] font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#b8c4ff]/90 transition-all shadow-lg" type="submit">Teklif İste →</button>
        </form>
    );
}
