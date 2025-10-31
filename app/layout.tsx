import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kemey.app"),
  applicationName: "kemey",
  title: {
    default: "kemey – Learn Tigrinya",
    template: "%s | kemey",
  },
  description:
    "Learn Tigrinya the new way with kemey. A modern Tigrinya (Tigrigna) language learning app for beginners and heritage speakers.",
  keywords: [
    "Learn Tigrinya",
    "Tigrinya app",
    "Kemey language learning",
    "Kemey app",
    "Kemey",
    "Tigrigna",
    "Tigrinya",
    "Amharic",
    "Diaspora",
    "Eritrean language",
    "Ethiopian language",
    "Tigrinya alphabet",
    "Ge'ez script",
    "Fidel",
    "Eritrean Tigrinya",
    "Ethiopian Tigrinya",
    "Tigrinya language",
    "Tigrinya learning",
    "Tigrinya education",
    "Tigrinya culture",
    "Tigrinya community",
    "Tigrinya language learning",
    "Tigrinya language learning app",
    "Tigrinya language learning app for beginners",
    "Tigrinya language learning app for heritage speakers",
    "Tigrinya language learning app for Eritreans",
    "Tigrinya language learning app for Ethiopians",
    "Tigrinya language learning app for Tigrinya speakers",
  ],
  alternates: {
    canonical: "https://kemey.app",
    languages: {
      en: "https://kemey.app",
      "en-US": "https://kemey.app",
    },
  },
  openGraph: {
    type: "website",
    url: "https://kemey.app",
    siteName: "kemey",
    title: "kemey – Learn Tigrinya",
    description:
      "Learn Tigrinya the new way with kemey. A modern Tigrinya (Tigrigna) language learning app for beginners and heritage speakers.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "kemey – Learn Tigrinya",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "kemey – Learn Tigrinya",
    description:
      "Learn Tigrinya the new way with kemey. A modern Tigrinya (Tigrigna) language learning app for beginners and heritage speakers.",
    images: [
      {
        url: "/twitter-image",
        width: 1200,
        height: 630,
        alt: "kemey – Learn Tigrinya",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  themeColor: "#000000",
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased font-sans`}
      >
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
