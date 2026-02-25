import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ruthvik.tech"),
  title: {
    default: "Ruthvik Pitchika — AI/ML Engineer & Developer",
    template: "%s | Ruthvik Pitchika",
  },
  description:
    "Portfolio of Ruthvik Pitchika — Aspiring AI/ML Engineer building intelligent systems with Python, Machine Learning, Deep Learning, and Full Stack development.",
  keywords: [
    "Ruthvik Pitchika",
    "Ruthvik",
    "ruthvik.tech",
    "AI ML Engineer",
    "Portfolio",
    "Machine Learning",
    "Deep Learning",
    "Python Developer",
    "Full Stack Developer",
    "ruthvik pitchika portfolio",
  ],
  authors: [{ name: "Ruthvik Pitchika", url: "https://ruthvik.tech" }],
  creator: "Ruthvik Pitchika",
  openGraph: {
    title: "Ruthvik Pitchika — AI/ML Engineer & Developer",
    description:
      "Aspiring AI/ML Engineer building intelligent systems with Python, ML, and Full Stack.",
    url: "https://ruthvik.tech",
    siteName: "ruthvik.tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruthvik Pitchika — AI/ML Engineer & Developer",
    description:
      "Aspiring AI/ML Engineer building intelligent systems.",
  },
  alternates: {
    canonical: "https://ruthvik.tech",
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
