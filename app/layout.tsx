import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vivaha",
    template : "%s - Vivaha",
  },
  description: "Experienced marriage and divorce lawyer in Nepal offering expert legal services for marriage registration, family disputes, divorce, and legal counseling. Based in Kathmandu. Free initial consultation available.",
  keywords: "marriage in nepal , online marriage in nepal , lawyer for court marriage in nepal , marriage registration in nepal , marriage certificate in nepal , marriage registration lawyer in nepal , marriage registration process in nepal , court marriage lawyer in nepal , court marriage registration in nepal , court marriage certificate in nepal",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
