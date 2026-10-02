import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Belleza | Freelance Portfolio",
  description:
    "Portfolio of Joshua Belleza — Freelancer specializing in Quality Assurance, Software Testing, UI/UX Design, and Office Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white bg-slate-50 dark:bg-[#070d1e] text-slate-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

