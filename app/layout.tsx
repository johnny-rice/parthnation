import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://parthnation.com"),
  title: {
    default: "Parth Nation - Honoring the Heart of Charlton Basketball",
    template: "%s | Parth Nation",
  },
  description:
    "Join us for a community basketball tournament honoring Parth Patel's memory and raising funds for mental health awareness. June 14, 2025 in Charlton, MA.",
  keywords: ["Parth Nation", "Charlton Basketball", "Mental Health Awareness", "Community Tournament", "Basketball Tournament", "Parth Patel"],
  authors: [{ name: "Parth Nation Community" }],
  creator: "Parth Nation",
  publisher: "Parth Nation",
  applicationName: "Parth Nation",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parthnation.com",
    siteName: "Parth Nation",
    title: "Parth Nation - Honoring the Heart of Charlton Basketball",
    description:
      "Join us for a community basketball tournament honoring Parth Patel's memory and raising funds for mental health awareness. December 13, 2025 in Dudley, MA.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Parth Nation Basketball Tournament",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Nation - Honoring the Heart of Charlton Basketball",
    description:
      "Join us for a community basketball tournament honoring Parth Patel's memory and raising funds for mental health awareness.",
    images: ["/api/og"],
    creator: "@parthnation", // Update with actual Twitter handle if available
    site: "@parthnation", // Update with actual Twitter handle if available
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
  verification: {
    // Add these when you verify with each service:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "community",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Parth Nation",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ea580c" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

