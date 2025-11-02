import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kemey.app"),
  title: {
    default: "kemey – Learn Tigrinya | Language Learning App for Diaspora",
    template: "%s | kemey",
  },
  description:
    "Master Tigrinya the modern way with kemey. The language learning app built for young Eritrean and Ethiopian diaspora. Learn the Ge'ez script, build vocabulary, and connect with your heritage. Coming 2026 to iOS, Android, and Web.",
  applicationName: "kemey",
  authors: [{ name: "kemey" }],
  creator: "kemey",
  publisher: "kemey",
  keywords: [
    "Learn Tigrinya",
    "Tigrinya app",
    "Tigrigna learning",
    "kemey app",
    "Eritrean language",
    "Ethiopian language",
    "Tigrinya for beginners",
    "Ge'ez script",
    "Fidel alphabet",
    "heritage language",
    "Tigrinya diaspora",
    "learn Tigrigna online",
    "Tigrinya lessons",
    "Eritrean diaspora app",
    "Ethiopian diaspora",
    "language learning app",
    "Tigrinya vocabulary",
    "Tigrinya alphabet",
    "Habesha language",
    "African language learning",
  ],
  category: "education",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kemey.app",
    siteName: "kemey",
    title: "kemey – Learn Tigrinya the New Way",
    description:
      "The modern Tigrinya learning app for diaspora youth. Master the Ge'ez script, connect with your heritage, and learn at your pace. Coming 2026.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "kemey - Learn Tigrinya the new way",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "kemey – Learn Tigrinya the New Way",
    description:
      "The modern Tigrinya learning app for diaspora youth. Master Ge'ez script and connect with your heritage.",
    images: ["/api/twitter"],
    creator: "@kemey_app",
    site: "@kemey_app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://kemey.app",
  },
  verification: {
    // Add these once you set up:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
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
