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
  title: SEO.title,
  description: SEO.description,
  keywords: [...SEO.keywords],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    title: "リブネクサス株式会社｜つなぐ力で、商流を進化させる。",
    description: `食品卸・水産卸を核に、産地・商品・取引先・消費者をつなぐ次世代の商社機能。${BRAND.heroEn}`,
    type: "website",
    locale: "ja_JP",
    siteName: COMPANY.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#EAF3FB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${noto.variable} ${mincho.variable}`}>
      <body>{children}</body>
    </html>
  );
}
