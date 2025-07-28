import { JetBrains_Mono, Poppins } from "next/font/google";

export const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["'Courier New'", "monospace"],
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
});

// CSS class names for easy usage
export const headingFont = jetBrainsMono;
export const bodyFont = poppins; 