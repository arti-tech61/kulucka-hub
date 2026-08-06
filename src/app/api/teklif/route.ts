import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const GONDEREN = "Kuluçka Hub <teklif@artiplatform.com.tr>";
const ALICI = "kiralama@artiplatform.com.tr";
const MAX_UZUNLUK = 4000;

let resend: Resend | undefined;

export async function POST(req: Request) {
    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json({ error: "E-posta servisi yapılandırılmamış." }, { status: 500 });
    }

    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
    }

    const { konu, govde, kaynakEposta, host, website } = (body ?? {}) as Record<string, unknown>;

    // honeypot — normal kullanıcıların doldurmayacağı gizli alan
    if (typeof website === "string" && website.trim() !== "") {
        return NextResponse.json({ ok: true });
    }

    if (typeof konu !== "string" || typeof govde !== "string" || !konu.trim() || !govde.trim()) {
        return NextResponse.json({ error: "Eksik alanlar var." }, { status: 400 });
    }
    if (konu.length > 200 || govde.length > MAX_UZUNLUK) {
        return NextResponse.json({ error: "İçerik çok uzun." }, { status: 400 });
    }

    const replyTo = typeof kaynakEposta === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(kaynakEposta)
        ? kaynakEposta
        : undefined;
    const kaynak = typeof host === "string" ? host.slice(0, 100) : "";

    if (!resend) {
        resend = new Resend(process.env.RESEND_API_KEY);
    }

    const { error } = await resend.emails.send({
        from: GONDEREN,
        to: [ALICI],
        replyTo,
        subject: kaynak ? `[${kaynak}] ${konu}` : konu,
        text: `Site: ${kaynak || "bilinmiyor"}\nForm: ${konu}\n\n${govde}`,
    });

    if (error) {
        return NextResponse.json({ error: "E-posta gönderilemedi." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
}
