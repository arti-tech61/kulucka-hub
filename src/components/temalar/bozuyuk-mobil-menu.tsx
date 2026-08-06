"use client";

import { useState } from "react";

export function BozuyukMobilMenu({ nav, aktif }: { nav: [string, string][]; aktif: string }) {
    const [acik, setAcik] = useState(false);

    return (
        <div className="lg:hidden">
            <button
                type="button"
                onClick={() => setAcik((v) => !v)}
                aria-label={acik ? "Menüyü kapat" : "Menüyü aç"}
                aria-expanded={acik}
                className="flex h-10 w-10 items-center justify-center rounded-[8px] text-[#2e3230] hover:bg-[#f5f1ea]"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
                    {acik ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
            </button>
            {acik && (
                <div className="absolute inset-x-0 top-full border-b border-[#c4c8bc]/30 bg-[#faf6f0] shadow-[0_4px_20px_rgba(46,50,48,0.12)]">
                    <nav className="mx-auto flex max-w-7xl flex-col gap-1 p-4">
                        {nav.map(([href, etiket]) => (
                            <a
                                key={href}
                                href={href}
                                onClick={() => setAcik(false)}
                                className={`rounded-[8px] px-3 py-3 font-semibold transition-colors ${
                                    aktif === href ? "bg-[#c8e8d0] text-[#2a6038]" : "text-[#4a4e4a] hover:bg-[#f5f1ea] hover:text-[#4a7c59]"
                                }`}
                            >
                                {etiket}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
}
