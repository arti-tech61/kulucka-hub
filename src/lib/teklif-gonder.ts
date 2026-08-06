// /api/teklif üzerinden Resend ile gönderir; başarısız olursa mailto'ya düşer ve false döner.
export async function teklifGonder(eposta: string, konu: string, govde: string): Promise<boolean> {
    try {
        const r = await fetch("/api/teklif", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ konu, govde, kaynakEposta: eposta, host: window.location.hostname }),
        });
        if (!r.ok) throw new Error("gonderilemedi");
        return true;
    } catch {
        window.location.href = `mailto:${eposta}?subject=${encodeURIComponent(konu)}&body=${encodeURIComponent(govde)}`;
        return false;
    }
}
