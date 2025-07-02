import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  Poppins,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
// import { Navbar } from "@/components/layout/Navbar";

// Primary font for body text - Inter (clean, modern, excellent readability)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Elegant serif font for headings - Playfair Display (sophisticated, charming)
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Alternative sans-serif font - Poppins (friendly, modern, versatile)
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Monospace font for code and technical content - JetBrains Mono (elegant, readable)
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative Portfolio - Digital Solutions",
  description:
    "We craft digital experiences that inspire, engage, and transform businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${poppins.variable} ${jetbrainsMono.variable} font-inter antialiased`}
      >
        <ThemeProvider>
          {/* <Navbar /> */}
          <main className="pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
