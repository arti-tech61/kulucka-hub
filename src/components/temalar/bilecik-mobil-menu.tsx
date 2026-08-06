"use client";

import { useState } from "react";

export function BilecikMobilMenu({ nav, aktif }: { nav: [string, string][]; aktif: string }) {
    const [acik, setAcik] = useState(false);

    return (
        <div className="lg:hidden">
            <button
                type="button"
                onClick={() => setAcik((v) => !v)}
                aria-label={acik ? "Menüyü kapat" : "Menüyü aç"}
                aria-expanded={acik}
                className="flex h-10 w-10 items-center justify-center rounded-[8px] text-[#3a302a] hover:bg-[#ece6dc]"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
                    {acik ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
            </button>
            {acik && (
                <div className="absolute inset-x-0 top-full border-b border-[#d8d0c8] bg-[#faf5ee] shadow-lg">
                    <nav className="mx-auto flex max-w-[1440px] flex-col gap-1 p-4">
                        {nav.map(([href, etiket]) => (
                            <a
                                key={href}
                                href={href}
                                onClick={() => setAcik(false)}
                                className={`rounded-[8px] px-3 py-3 font-['EB_Garamond'] text-[18px] font-semibold transition-colors ${
                                    aktif === href ? "bg-[#ece6dc] text-[#c2652a]" : "text-[#605850] hover:bg-[#ece6dc] hover:text-[#78706a]"
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
