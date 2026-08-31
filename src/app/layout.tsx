import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://saad.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Saad — Software Engineer & Website Developer",
  description:
    "Saad is a Software Engineer with 4+ years of experience building fast, scalable websites and web apps with Next.js, React, Node.js and AWS. Explore Saad's portfolio, skills and services.",
  keywords: [
    "Saad",
    "Saad portfolio",
    "Saad software engineer",
    "Saad web developer",
    "Saad Next.js developer",
    "Website Development",
    "Full Stack Developer Saad",
  ],
  authors: [{ name: "Saad" }],
  creator: "Saad",
  openGraph: {
    title: "Saad — Software Engineer & Website Developer",
    description:
      "Portfolio of Saad, a Software Engineer focused on Website Development — Next.js, React, Node.js, AWS, Firebase and API integrations.",
    url: siteUrl,
    siteName: "Saad — Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad — Software Engineer & Website Developer",
    description:
      "Portfolio of Saad, a Software Engineer focused on Website Development.",
  },
  icons: {
    icon: "/favicon.ico",
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
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-bg text-ink`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
