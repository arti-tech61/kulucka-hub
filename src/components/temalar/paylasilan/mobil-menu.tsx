"use client";

import { useState } from "react";
import type { NavLink, NavOge } from "./nav";

export function MobilMenu({ nav, aktif }: { nav: NavOge[]; aktif: string }) {
    const [acik, setAcik] = useState(false);

    const linkSinifi = (href: string) =>
        `rounded-[8px] px-3 py-3 font-semibold transition-colors ${
            aktif === href ? "bg-elevated text-primary" : "text-muted hover:bg-elevated hover:text-fg"
        }`;

    return (
        <div className="lg:hidden">
            <button
                type="button"
                onClick={() => setAcik((v) => !v)}
                aria-label={acik ? "Menüyü kapat" : "Menüyü aç"}
                aria-expanded={acik}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-fg hover:bg-elevated"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
                    {acik ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
            </button>
            {acik && (
                <div className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-bg shadow-lg">
                    <nav className="mx-auto flex max-w-7xl flex-col gap-1 p-4">
                        {nav.map((oge) =>
                            Array.isArray(oge) ? (
                                <a key={oge[0]} href={oge[0]} onClick={() => setAcik(false)} className={linkSinifi(oge[0])}>
                                    {oge[1]}
                                </a>
                            ) : (
                                <div key={oge.etiket} className="mt-2 first:mt-0">
                                    <div className="px-3 pb-1 text-[11px] font-bold uppercase tracking-[0.08em] text-muted/70">{oge.etiket}</div>
                                    {oge.ogeler.map(([href, etiket]: NavLink) => (
                                        <a key={href} href={href} onClick={() => setAcik(false)} className={linkSinifi(href)}>
                                            {etiket}
                                        </a>
                                    ))}
                                </div>
                            ),
                        )}
                    </nav>
                </div>
            )}
        </div>
    );
}
