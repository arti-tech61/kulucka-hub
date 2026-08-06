"use client";

import { useState } from "react";

export function ManisaforkliftMobilMenu({ nav, aktif }: { nav: { ad: string; href: string }[]; aktif?: string }) {
    const [acik, setAcik] = useState(false);

    return (
        <div className="md:hidden">
            <button
                type="button"
                onClick={() => setAcik((v) => !v)}
                aria-label={acik ? "Menüyü kapat" : "Menüyü aç"}
                aria-expanded={acik}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-[#191c1e] hover:bg-[#FBBF24]/10"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
                    {acik ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
            </button>
            {acik && (
                <div className="absolute inset-x-0 top-full border-b border-white/20 bg-white/95 backdrop-blur shadow-lg">
                    <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 p-4">
                        {nav.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                onClick={() => setAcik(false)}
                                className={`font-['Inter'] rounded-[8px] px-3 py-3 font-semibold transition-colors ${
                                    aktif === n.href ? "bg-[#FBBF24]/10 text-[#795900]" : "text-[#4f4633] hover:bg-[#FBBF24]/10 hover:text-[#795900]"
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
