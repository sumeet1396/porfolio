import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sumeetrane.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sumeet Rane — Software Engineer & AI Enthusiast",
    template: "%s | Sumeet Rane",
  },
  description:
    "Senior Full Stack Engineer portfolio. React.js, Next.js, Node.js, system design, and scalable web applications. Mumbai, India.",
  keywords: [
    "Sumeet Rane",
    "Software Engineer",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Mumbai",
  ],
  authors: [{ name: "Sumeet Rane", url: siteUrl }],
  creator: "Sumeet Rane",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Sumeet Rane Portfolio",
    title: "Sumeet Rane — Software Engineer & AI Enthusiast",
    description:
      "Senior Full Stack Engineer with 6+ years building scalable React.js apps and distributed backend systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumeet Rane — Software Engineer & AI Enthusiast",
    description:
      "Senior Full Stack Engineer portfolio — React, Next.js, Node.js, system design.",
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
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full scanlines antialiased">{children}</body>
    </html>
  );
}
