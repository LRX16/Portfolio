import type { Metadata, Viewport } from "next";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.metadata.siteUrl),
  title: portfolio.metadata.title,
  description: portfolio.metadata.description,
  keywords: portfolio.metadata.keywords,
  openGraph: {
    title: portfolio.metadata.title,
    description: portfolio.metadata.description,
    url: portfolio.metadata.siteUrl,
    siteName: portfolio.metadata.title,
    images: [
      {
        url: portfolio.metadata.ogImage,
        width: 1200,
        height: 630,
        alt: portfolio.metadata.title
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.metadata.title,
    description: portfolio.metadata.description,
    images: [portfolio.metadata.ogImage]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08110f"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
