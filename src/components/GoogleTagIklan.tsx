import Script from "next/script";
import type { TrackingIklan } from "@/data/iklan";

type Props = {
  tracking?: TrackingIklan;
};

export default function GoogleTagIklan({ tracking }: Props) {
  const ids = [tracking?.googleTagId, tracking?.googleAdsId].filter(
    (id): id is string => Boolean(id),
  );

  if (ids.length === 0) return null;

  const config = ids
    .map((id) => `window.gtag('config', '${id}');`)
    .join("\n        ");

  return (
    <Script id="google-tag-iklan" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        ${config}
      `}
    </Script>
  );
}
