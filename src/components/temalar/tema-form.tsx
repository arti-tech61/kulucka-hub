"use client";

import { useState } from "react";
import { teklifGonder } from "@/lib/teklif-gonder";

export interface TemaFormClass {
    alan: string;      // input/select/textarea ortak
    etiket: string;    // label
    buton: string;     // submit
    izgara?: string;   // ad+telefon satırı grid
}

// Yeniden kullanılabilir teklif formu — /api/teklif üzerinden Resend ile gönderir, hata olursa mailto'ya düşer.
export function TemaForm({
    eposta,
    konu,
    opsiyonlar,
    cls,
}: {
    eposta: string;
    konu: string;
    opsiyonlar: string[];
    cls: TemaFormClass;
}) {
    const [g, setG] = useState({ ad: "", tel: "", bolge: opsiyonlar[0] ?? "", ozet: "" });
    const [durum, setDurum] = useState<"bos" | "gonderiliyor" | "tamam" | "hata">("bos");

    async function gonder(e: React.FormEvent) {
        e.preventDefault();
        const govde =
            `Ad Soyad: ${g.ad}\n` +
            `Telefon: ${g.tel}\n` +
            `Hizmet Bölgesi: ${g.bolge}\n\n` +
            `İş Özeti:\n${g.ozet}`;
        setDurum("gonderiliyor");
        const basarili = await teklifGonder(eposta, konu, govde);
        setDurum(basarili ? "tamam" : "hata");
    }

    if (durum === "tamam") {
        return <p className={cls.etiket}>Teklif talebiniz alındı, en kısa sürede size dönüş yapacağız.</p>;
    }

    return (
        <form className="space-y-6" onSubmit={gonder}>
            <div className={cls.izgara ?? "grid grid-cols-1 sm:grid-cols-2 gap-6"}>
                <div>
                    <label className={cls.etiket}>Ad Soyad</label>
                    <input className={cls.alan} type="text" required value={g.ad} onChange={(e) => setG({ ...g, ad: e.target.value })} />
                </div>
                <div>
                    <label className={cls.etiket}>Telefon</label>
                    <input className={cls.alan} type="tel" required value={g.tel} onChange={(e) => setG({ ...g, tel: e.target.value })} />
                </div>
            </div>
            <div>
                <label className={cls.etiket}>Hizmet Bölgesi</label>
                <select className={cls.alan} value={g.bolge} onChange={(e) => setG({ ...g, bolge: e.target.value })}>
                    {opsiyonlar.map((o) => (
                        <option key={o}>{o}</option>
                    ))}
                    <option>Diğer</option>
                </select>
            </div>
            <div>
                <label className={cls.etiket}>İş Özeti (Yükseklik, Zemin vb.)</label>
                <textarea className={cls.alan} rows={4} value={g.ozet} onChange={(e) => setG({ ...g, ozet: e.target.value })} />
            </div>
            <button className={cls.buton} type="submit" disabled={durum === "gonderiliyor"}>
                {durum === "gonderiliyor" ? "Gönderiliyor…" : "Teklifi Gönder"}
            </button>
            {durum === "hata" && <p className="text-sm text-red-500">Otomatik gönderim başarısız oldu, e-posta uygulamanız açıldı.</p>}
        </form>
    );
}
