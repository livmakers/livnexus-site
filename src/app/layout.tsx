import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import { SEO, COMPANY, BRAND } from "@/config/company";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});
const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});
const mincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-mincho",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://livnexus.co.jp"),
  title: SEO.title,
  description: SEO.description,
  keywords: [...SEO.keywords],
  authors: [{ name: COMPANY.name }],
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
  openGraph: {
    title: "リブネクサス株式会社｜つなぐ力で、商流を進化させる。",
    description: `食品卸・水産卸を核に、産地・商品・取引先・消費者をつなぐ次世代の商社機能。${BRAND.heroEn}`,
    type: "website",
    locale: "ja_JP",
    url: "https://livnexus.co.jp/",
    siteName: COMPANY.name,
    images: [
      { url: "/og.svg", width: 1200, height: 630, alt: "リブネクサス株式会社｜つなぐ力で、商流を進化させる。" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  } as Metadata["robots"],
};

/** 構造化データ（Schema.org / Organization） */
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  alternateName: COMPANY.nameEn,
  url: "https://livnexus.co.jp/",
  logo: "https://livnexus.co.jp/favicon.svg",
  image: "https://livnexus.co.jp/og.svg",
  description: SEO.description,
  foundingDate: "2004-12-24",
  telephone: "+81-568-71-3033",
  address: {
    "@type": "PostalAddress",
    postalCode: "485-0016",
    addressRegion: "愛知県",
    addressLocality: "小牧市",
    streetAddress: "大字間々原新田字下新池987番地",
    addressCountry: "JP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+81-568-71-3033",
    contactType: "sales",
    areaServed: "JP",
    availableLanguage: "Japanese",
  },
  areaServed: "JP",
  knowsAbout: ["食品卸", "水産卸", "業務用食材", "水産流通", "総合商社", "包装資材", "生活用品"],
};

export const viewport: Viewport = {
  themeColor: "#EAF3FB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${noto.variable} ${mincho.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
