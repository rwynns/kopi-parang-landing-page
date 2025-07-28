import type { Metadata } from "next";
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
  title: "Kopi Parang - Premium Coffee Experience",
  description: "Experience the rich and bold flavors of Kopi Parang's premium coffee selection, mocktails, and delicious bites.",
  keywords: "kopi parang, coffee, premium coffee, mocktail, bites, kombucha, Indonesian coffee",
  authors: [{ name: "Kopi Parang" }],
  creator: "Kopi Parang",
  publisher: "Kopi Parang",
  robots: "index, follow",
  openGraph: {
    title: "Kopi Parang - Premium Coffee Experience",
    description: "Experience the rich and bold flavors of Kopi Parang's premium coffee selection, mocktails, and delicious bites.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jetBrainsMono.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
