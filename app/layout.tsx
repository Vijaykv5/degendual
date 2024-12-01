import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Lexend, Akshar } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const akshar = Akshar({ subsets: ["latin"], variable: "--font-akshar" });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${akshar.variable}`}>
      <body>{children}</body>
    </html>
  );
}
