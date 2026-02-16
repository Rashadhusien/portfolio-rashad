import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rashad Hussein | Web Developer",
  description: "Portfolio of a software engineer",
  keywords: ["Rashad Hussein", "Web Developer", "Software Engineer"],
  authors: [{ name: "Rashad Hussein" }],
  openGraph: {
    title: "Rashad Hussein | Web Developer",
    description: "Portfolio of a software engineer",
    type: "website",
    locale: "en_US",
    siteName: "Rashad Hussein | Web Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="description" content="Portfolio of a software engineer" />
        <meta
          name="keywords"
          content="Rashad Hussein, Web Developer, Software Engineer"
        />
        <meta name="author" content="Rashad Hussein" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
