"use client";

import { useState } from "react";

export function PlatformManisaMobilMenu({ nav, aktif }: { nav: { ad: string; href: string }[]; aktif?: string }) {
    const [acik, setAcik] = useState(false);

    return (
        <div className="md:hidden">
            <button
                type="button"
                onClick={() => setAcik((v) => !v)}
                aria-label={acik ? "Menüyü kapat" : "Menüyü aç"}
                aria-expanded={acik}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-[#b8c4ff] hover:bg-white/5"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
                    {acik ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
            </button>
            {acik && (
                <div className="absolute inset-x-0 top-full border-b border-white/10 bg-[#020617]/95 backdrop-blur-md shadow-lg">
                    <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 p-4">
                        {nav.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                onClick={() => setAcik(false)}
                                className={`rounded-[8px] px-3 py-3 font-semibold transition-colors ${
                                    aktif === n.href ? "bg-white/5 text-[#b8c4ff]" : "text-[#c4c5d9] hover:bg-white/5 hover:text-[#e0e3e5]"
                                }`}
                            >
                                {n.ad}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
}
