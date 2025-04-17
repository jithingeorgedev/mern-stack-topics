import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn MERN Stack | Master MongoDB, Express, React, Node.js",
  description: "Learn MERN Stack | Master MongoDB, Express, React, Node.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="description" content="Learn the MERN Stack from scratch! Explore MongoDB, Express, React, and Node.js tutorials and projects at LearnMERN.site." />
      <meta name="keywords" content="MERN stack, learn MERN, MongoDB, Express, React, Node.js, full stack tutorial" />
      <meta name="author" content="LearnMERN.site" />
      <meta name="google-adsense-account" content="ca-pub-1430580431653083"></meta>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google AdSense Script */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1430580431653083"
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  );
}
