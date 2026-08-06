"use client";

import { useId, useState } from "react";
import { teklifGonder } from "@/lib/teklif-gonder";

// eklemli hero "Hızlı Teklif Alın" formu → /api/teklif (Resend), hata olursa mailto.
export function EklemliHizliTeklif({ eposta }: { eposta: string }) {
    const [g, setG] = useState({ tip: "Eklemli Platform", yuk: "0 - 10 Metre" });
    const [durum, setDurum] = useState<"bos" | "gonderiliyor" | "tamam">("bos");
    const id = useId();
    const sel = "w-full rounded-lg border border-[#edeef0] bg-[#f8f9fb] py-3 px-3 text-[#191c1e] focus:ring-2 focus:ring-[#3151eb] outline-none";
    async function gonder(e: React.FormEvent) {
        e.preventDefault();
        setDurum("gonderiliyor");
        const basarili = await teklifGonder(eposta, "Hızlı Teklif — Eklemli Platform", `Makine Tipi: ${g.tip}\nÇalışma Yüksekliği: ${g.yuk}`);
        setDurum(basarili ? "tamam" : "bos");
    }
    if (durum === "tamam") return <p className="text-sm text-[#444655]">Teklif talebiniz alındı, en kısa sürede dönüş yapacağız.</p>;
    return (
        <form className="space-y-4" onSubmit={gonder}>
            <div><label htmlFor={`${id}-tip`} className="block text-[13px] font-semibold text-[#444655] mb-1">Makine Tipi</label><select id={`${id}-tip`} className={sel} value={g.tip} onChange={(e) => setG({ ...g, tip: e.target.value })}><option>Makaslı Platform</option><option>Eklemli Platform</option><option>Forklift</option></select></div>
            <div><label htmlFor={`${id}-yuk`} className="block text-[13px] font-semibold text-[#444655] mb-1">Çalışma Yüksekliği</label><select id={`${id}-yuk`} className={sel} value={g.yuk} onChange={(e) => setG({ ...g, yuk: e.target.value })}><option>0 - 10 Metre</option><option>10 - 20 Metre</option><option>20 Metre +</option></select></div>
            <button className="w-full bg-[#3151eb] text-white font-semibold py-3 rounded-lg hover:bg-[#0233d3] transition-colors flex items-center justify-center gap-2" type="submit" disabled={durum === "gonderiliyor"}>{durum === "gonderiliyor" ? "Gönderiliyor…" : "Teklif İste →"}</button>
        </form>
    );
}

// eklemli İletişim "Mesaj Gönderin" formu → /api/teklif (Resend), hata olursa mailto.
export function EklemliIletisimForm({ eposta }: { eposta: string }) {
    const [g, setG] = useState({ ad: "", tel: "", email: "", mesaj: "" });
    const [durum, setDurum] = useState<"bos" | "gonderiliyor" | "tamam">("bos");
    const id = useId();
    const alan = "w-full rounded-lg border border-[#edeef0] bg-[#f8f9fb] py-3 px-4 text-[#191c1e] focus:ring-2 focus:ring-[#3151eb] outline-none";
    const etiket = "block text-[13px] font-semibold text-[#444655] mb-1";
    async function gonder(e: React.FormEvent) {
        e.preventDefault();
        setDurum("gonderiliyor");
        const basarili = await teklifGonder(eposta, "İletişim — Eklemli Platform", `Ad Soyad: ${g.ad}\nTelefon: ${g.tel}\nE-posta: ${g.email}\n\nMesaj:\n${g.mesaj}`);
        setDurum(basarili ? "tamam" : "bos");
    }
    if (durum === "tamam") return <p className={etiket}>Mesajınız alındı, en kısa sürede dönüş yapacağız.</p>;
    return (
        <form className="space-y-5" onSubmit={gonder}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div><label htmlFor={`${id}-ad`} className={etiket}>Ad Soyad</label><input id={`${id}-ad`} className={alan} required type="text" value={g.ad} onChange={(e) => setG({ ...g, ad: e.target.value })} /></div>
                <div><label htmlFor={`${id}-tel`} className={etiket}>Telefon</label><input id={`${id}-tel`} className={alan} required type="tel" value={g.tel} onChange={(e) => setG({ ...g, tel: e.target.value })} /></div>
            </div>
            <div><label htmlFor={`${id}-email`} className={etiket}>E-posta</label><input id={`${id}-email`} className={alan} type="email" value={g.email} onChange={(e) => setG({ ...g, email: e.target.value })} /></div>
            <div><label htmlFor={`${id}-mesaj`} className={etiket}>Mesajınız</label><textarea id={`${id}-mesaj`} className={`${alan} resize-none`} rows={5} value={g.mesaj} onChange={(e) => setG({ ...g, mesaj: e.target.value })} /></div>
            <button className="w-full md:w-auto bg-[#3151eb] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#0233d3] transition-colors" type="submit" disabled={durum === "gonderiliyor"}>{durum === "gonderiliyor" ? "Gönderiliyor…" : "Mesaj Gönder"}</button>
        </form>
    );
}
