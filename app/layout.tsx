import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Patel — Full-Stack Engineer",
  description:
    "Full-stack developer specializing in Java/Spring Boot, MERN, and AI integration. Currently building at SRM Institute. Open to internships.",
  keywords: [
    "Aman Patel",
    "Full-Stack Developer",
    "Spring Boot",
    "MERN",
    "AI Engineer",
    "SRM Institute",
  ],
  openGraph: {
    title: "Aman Patel — Full-Stack Engineer",
    description:
      "Backend systems, full-stack web, AI integration. Available for internships.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
