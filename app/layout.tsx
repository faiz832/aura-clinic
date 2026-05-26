import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScrollProvider } from "@/lib/lenis";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://auraclinic.co.id";

export const metadata: Metadata = {
  title: {
    default: "Aura Clinic | Pusat Estetika & Laser Premium di Jakarta",
    template: "%s | Aura Clinic",
  },
  description:
    "Pusat perawatan kulit dan kecantikan premium dengan teknologi laser terdepan di Jakarta. Layanan laser CO2, facial, anti-aging, dan estetika profesional.",
  keywords: [
    "klinik kecantikan Jakarta",
    "laser treatment Jakarta",
    "perawatan kulit",
    "aesthetic clinic",
    "anti-aging",
    "facial",
    "Aura Clinic",
  ],
  authors: [{ name: "Aura Clinic" }],
  creator: "Aura Clinic",
  publisher: "Aura Clinic",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Aura Clinic",
    title: "Aura Clinic | Pusat Estetika & Laser Premium di Jakarta",
    description:
      "Pusat perawatan kulit dan kecantikan premium dengan teknologi laser terdepan. Temukan harmoni dan radiance alami kulit Anda bersama Aura Clinic.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Clinic | Pusat Estetika & Laser Premium di Jakarta",
    description:
      "Pusat perawatan kulit dan kecantikan premium dengan teknologi laser terdepan di Jakarta.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Aura Clinic",
    description:
      "Pusat estetika dan laser premium di Jakarta. Menyediakan perawatan laser, facial, anti-aging, dan estetika profesional.",
    url: siteUrl,
    telephone: "+62-21-123-456",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Gunawarman No. 21",
      addressLocality: "Kebayoran Baru",
      addressRegion: "Jakarta Selatan",
      postalCode: "12120",
      addressCountry: "ID",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    priceRange: "Rp 350.000 - Rp 3.000.000",
  };

  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScrollProvider>
          {children}
          <FloatingContact />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
