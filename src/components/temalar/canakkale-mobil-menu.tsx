"use client";

import { useState } from "react";

export function CanakkaleMobilMenu({ nav, aktif }: { nav: [string, string][]; aktif: string }) {
    const [acik, setAcik] = useState(false);

    return (
        <div className="lg:hidden">
            <button
                type="button"
                onClick={() => setAcik((v) => !v)}
                aria-label={acik ? "Menüyü kapat" : "Menüyü aç"}
                aria-expanded={acik}
                className="flex h-10 w-10 items-center justify-center rounded-[2px] text-[#1A1C1E] hover:bg-[#f3f4f5]"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
                    {acik ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
            </button>
            {acik && (
                <div className="absolute inset-x-0 top-full border-b-2 border-[#ed1c24] bg-[#f8f9fa] shadow-lg">
                    <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 p-4">
                        {nav.map(([href, etiket]) => (
                            <a
                                key={href}
                                href={href}
                                onClick={() => setAcik(false)}
                                className={`rounded-[2px] px-4 py-3 text-[14px] font-bold transition-colors ${
                                    aktif === href ? "bg-[#f3f4f5] text-[#bb0013]" : "text-[#595c5f] hover:bg-[#f3f4f5] hover:text-[#1A1C1E]"
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
