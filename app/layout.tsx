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

// Static JSON-LD strings — no user input, safe for injection
const localBusinessSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "InvoxAI",
  url: "https://invoxai.uk",
  description:
    "AI voice and chat agents that answer calls, qualify leads, and book jobs for trade businesses across the UK.",
  email: "georgegoonan@invoxai.uk",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  serviceType: [
    "AI Phone Answering Service",
    "AI Voice Agents for Businesses",
    "Business Automation for Tradespeople",
    "AI Lead Qualification",
    "AI Chatbot for Trade Businesses",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Voice AI Agents",
    "Lead Capture Automation",
    "Trade Business Automation",
    "AI for Plumbers",
    "AI for Electricians",
  ],
  sameAs: [],
});

const webSiteSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "InvoxAI",
  url: "https://invoxai.uk",
});

const organizationSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "InvoxAI",
  url: "https://invoxai.uk",
  contactPoint: {
    "@type": "ContactPoint",
    email: "georgegoonan@invoxai.uk",
    contactType: "sales",
    areaServed: "GB",
    availableLanguage: "English",
  },
  description:
    "We build AI voice and chat agents for trade businesses across the UK. Automated inbound call handling, lead qualification, and business operations automation.",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://invoxai.uk"),
  title:
    "InvoxAI — AI Phone Answering & Automation for Trade Businesses | UK",
  description:
    "AI voice and chat agents that answer calls, qualify leads, and book jobs for plumbers, electricians, roofers and trade businesses across the UK. Never miss a call again. 24/7 automated inbound handling.",
  keywords: [
    "ai phone answering service uk",
    "ai receptionist for small business",
    "ai call answering for tradespeople",
    "ai voice agent for plumbers",
    "never miss a call ai",
    "automated phone answering for trade businesses",
    "ai lead capture for electricians",
    "invox ai",
    "invoxai",
    "ai business automation uk",
    "virtual receptionist trades",
    "24/7 call answering trades",
  ],
  authors: [{ name: "InvoxAI" }],
  alternates: {
    canonical: "https://invoxai.uk/",
  },
  openGraph: {
    title:
      "InvoxAI — AI Phone Answering & Automation for Trade Businesses",
    description:
      "AI voice and chat agents that answer calls, qualify leads, and book jobs for trade businesses across the UK. Never miss a call again.",
    url: "https://invoxai.uk/",
    siteName: "InvoxAI",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InvoxAI — AI voice agents for plumbers, electricians and trade businesses in the UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "InvoxAI — AI Phone Answering & Automation for Trade Businesses",
    description:
      "AI voice and chat agents that answer calls, qualify leads, and book jobs for trade businesses. UK-based. 24/7.",
    images: ["/og-image.png"],
  },
  other: {
    "geo.region": "GB",
    "geo.placename": "United Kingdom",
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
    <html lang="en-GB" className="dark">
      <head>
        <script type="application/ld+json" suppressHydrationWarning>
          {localBusinessSchema}
        </script>
        <script type="application/ld+json" suppressHydrationWarning>
          {webSiteSchema}
        </script>
        <script type="application/ld+json" suppressHydrationWarning>
          {organizationSchema}
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
