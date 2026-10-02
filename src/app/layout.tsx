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
  title: "Joshua Belleza | Freelance QA, UI/UX & Technical Specialist",
  description:
    "Client portfolio of Joshua Belleza — Freelance Quality Assurance & Software Testing Specialist, UI/UX designer, and Computer Science student at EARIST Cavite Campus.",
  keywords: [
    "Joshua Belleza",
    "Freelancer",
    "Quality Assurance",
    "Software Testing",
    "UI/UX Design",
    "EARIST",
    "JAE Philippines",
    "Microsoft Office Specialist",
  ],
  authors: [{ name: "Joshua Belleza" }],
  openGraph: {
    title: "Joshua Belleza | Freelance Portfolio",
    description:
      "Online client portfolio of Joshua Belleza. Zero-defect QA testing, UI/UX design, and digital solutions.",
    type: "website",
  },
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

