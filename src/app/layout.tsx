import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    template: "%s | Pendidik Cendekia",
    default: "Pendidik Cendekia - Platform Pengembangan Kompetensi Guru",
  },
  description:
    "Platform pengembangan kompetensi guru Indonesia. Webinar, workshop, dan mentoring bersertifikat untuk pendidik profesional.",
  metadataBase: new URL("https://pendidikcendekia.vercel.app"),
  openGraph: {
    type: "website",
    siteName: "Pendidik Cendekia",
    images: ["/assets/logo/logo-pc.png"],
  },
  icons: {
    icon: "/assets/logo/logo-pc.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BQV1L2C594"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BQV1L2C594');
        `}
      </Script>
      <head>
        <meta
          name="google-site-verification"
          content="8xAuIXt4pXW-65CSDa3T4TDffDkqDQ4E0zBXTh0AgzY"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="bg-white text-biru font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
