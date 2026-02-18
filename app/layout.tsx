import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = localFont({
  src: [
    {
      path: "../public/fonts/InstrumentSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/InstrumentSerif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "InvoxAI",
  description: "AI-powered lead capture and business automation for trade businesses",
  url: "https://invoxai.uk",
  areaServed: "United Kingdom",
  serviceType: ["AI Lead Capture", "Business Automation", "AI Integration"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://invoxai.uk"),
  title: "InvoxAI — AI-Powered Lead Capture & Automation for Trade Businesses",
  description:
    "We build AI systems that capture inbound leads, qualify them, and book the job — automatically. Built for plumbers, electricians, builders, and trade businesses across the UK.",
  keywords: [
    "AI lead capture",
    "trade business automation",
    "inbound leads",
    "plumber automation",
    "electrician lead capture",
    "AI for trades",
    "UK trades",
    "business automation",
  ],
  authors: [{ name: "InvoxAI" }],
  openGraph: {
    title: "InvoxAI — AI-Powered Lead Capture & Automation for Trade Businesses",
    description:
      "AI systems that capture inbound leads, qualify them, and book the job — automatically. Built for trade businesses across the UK.",
    url: "https://invoxai.uk",
    siteName: "InvoxAI",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InvoxAI — AI-powered agents for trade businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InvoxAI — AI-Powered Lead Capture & Automation for Trade Businesses",
    description:
      "AI systems that capture leads and automate admin for trade businesses. Stop chasing, start closing.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script type="application/ld+json" suppressHydrationWarning>
          {structuredData}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
