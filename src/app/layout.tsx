import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const metadata is used to set the title and description of the page
export const metadata: Metadata = {
  title: "My Protfolio",
  description: "This is my Personal portfolio",
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
        <Header /> 
        <main className="p-4">{children}</main>
        <footer className="text-center p-4">
          <p className="text-sm text-gray-500">Copyright 2025 My Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
