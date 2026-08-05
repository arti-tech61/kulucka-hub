import type { PaylasilanRenkler } from "./renkler";

// Renk token'larını host'a ÖZEL kapsamlı (scoped) bir <style> bloğuyla enjekte eder.
// globals.css/:root'u request başına mutate ETMEYİZ — tek Node process tüm
// domain'lere concurrent hizmet verir, global mutation cross-request renk
// sızıntısına yol açar. Bunun yerine her istek kendi <style> bloğunu, kendi
// host'una özgü bir selector'la (data-tema-host) taşır; page.tsx zaten
// `export const dynamic = "force-dynamic"` olduğundan her istek taze render
// edilir ve bu iki farklı host aynı process'te eşzamanlı render edilse bile
// birbirine karışmaz.
export function PaylasilanTemaStil({ renkler, host }: { renkler: PaylasilanRenkler; host: string }) {
    const secici = `.paylasilan-tema[data-tema-host="${host}"]`;
    const css = `${secici}{--color-primary:${renkler.primary};--color-primary-light:${renkler.primaryLight};--color-accent:${renkler.accent};--color-accent-hover:${renkler.accentHover};--color-accent-fg:${renkler.accentFg};--color-bg:${renkler.bg};--color-fg:${renkler.fg};--color-muted:${renkler.muted};--color-elevated:${renkler.elevated};--color-border:${renkler.border};}`;
    // eslint-disable-next-line react/no-danger -- statik/sunucu tarafında üretilen güvenli CSS, kullanıcı girdisi yok
    return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
