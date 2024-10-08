import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'
import { Syne } from 'next/font/google'
import './globalicons.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Amplitude A",
  description: "Producao e eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.variable} ${syne.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
