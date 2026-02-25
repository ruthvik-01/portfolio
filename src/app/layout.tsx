import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ruthvik Pitchika | AI/ML Engineer",
  description:
    "Portfolio of Pitchika Ruthvik — Aspiring AI/ML Engineer passionate about building intelligent systems with Python, Machine Learning, and Deep Learning.",
  keywords: [
    "Ruthvik",
    "Pitchika Ruthvik",
    "AI/ML Engineer",
    "Portfolio",
    "Machine Learning",
    "Deep Learning",
    "Python",
  ],
  openGraph: {
    title: "Ruthvik Pitchika | AI/ML Engineer",
    description:
      "Aspiring AI/ML Engineer with strong foundations in Python, machine learning, and deep learning.",
    url: "https://ruthvik.tech",
    siteName: "ruthvik.tech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSerif.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
