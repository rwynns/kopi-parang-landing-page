import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["'Courier New'", "monospace"],
  preload: true,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Kopi Parang",
  description: "Experience the rich and bold flavors of Kopi Parang's premium coffee selection, mocktails, and delicious bites.",
  keywords: "kopi parang, coffee, premium coffee, mocktail, bites, kombucha, Indonesian coffee, cafe, buttersome",
  authors: [{ name: "Kopi Parang" }],
  creator: "Kopi Parang",
  publisher: "Kopi Parang",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Kopi Parang",
    description: "Experience the rich and bold flavors of Kopi Parang's premium coffee selection, mocktails, and delicious bites.",
    type: "website",
    locale: "id_ID",
    siteName: "Kopi Parang",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Kopi Parang Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kopi Parang",
    description: "Experience the rich and bold flavors of Kopi Parang's premium coffee selection, mocktails, and delicious bites.",
    images: ["/icon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jetBrainsMono.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Favicon configuration with cache busting */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />

        {/* Windows tile */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/icon.png" />

        {/* Force favicon refresh */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
