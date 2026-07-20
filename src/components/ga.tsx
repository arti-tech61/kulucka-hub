import Script from "next/script";

// Ticari landing ve alt sayfalarda ortak GA4 etiketi + dönüşüm event köprüsü
export function GaEtiketi({ gaId }: { gaId: string }) {
    if (!gaId) return null;
    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
              document.addEventListener('click', function (e) {
                var a = e.target && e.target.closest ? e.target.closest('a') : null;
                if (!a || !a.href) return;
                if (a.href.indexOf('tel:') === 0) gtag('event', 'telefon_tiklamasi');
                else if (a.href.indexOf('wa.me') !== -1 || a.href.indexOf('api.whatsapp.com') !== -1) gtag('event', 'whatsapp_tiklamasi');
              }, true);
              document.addEventListener('submit', function (e) {
                if (e.target && e.target.tagName === 'FORM') gtag('event', 'generate_lead');
              }, true);
            `}</Script>
        </>
    );
}
