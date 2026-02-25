import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ruthvik Pitchika — AI/ML Engineer",
  description:
    "Portfolio of Ruthvik Pitchika — Aspiring AI/ML Engineer building intelligent systems with Python, Machine Learning, and Deep Learning.",
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
    title: "Ruthvik Pitchika — AI/ML Engineer",
    description:
      "Aspiring AI/ML Engineer building intelligent systems.",
    url: "https://ruthvik.tech",
    siteName: "ruthvik.tech",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
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
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
