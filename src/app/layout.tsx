import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Providers } from "./components/ThemeProvider";

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
  title: {
    default: "Surendar S - Full Stack Developer Portfolio",
    template: "%s | Surendar S Portfolio",
  },
  description: "Personal portfolio of Surendar S, a passionate Full Stack Developer dedicated to building beautiful and efficient web applications. Explore my projects, skills, and experience.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "Portfolio", "Surendar S"],
  authors: [{ name: "Surendar S" }],
  creator: "Surendar S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com", // Update with your actual domain
    siteName: "Surendar S Portfolio",
    title: "Surendar S - Full Stack Developer Portfolio",
    description: "Personal portfolio of Surendar S, a passionate Full Stack Developer dedicated to building beautiful and efficient web applications.",
    images: [
      {
        url: "/images/Profile-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Surendar S - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surendar S - Full Stack Developer Portfolio",
    description: "Personal portfolio of Surendar S, a passionate Full Stack Developer.",
    images: ["/images/Profile-pic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100`}
      >
        <Providers>
          <Header /> 
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
