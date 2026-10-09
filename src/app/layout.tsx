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
  metadataBase: new URL("https://joshua-belleza.vercel.app"),
  title: "Joshua Belleza | Freelance QA Tester, UI/UX Designer & Office Specialist",
  description:
    "Portfolio of Joshua Belleza — Freelance professional specializing in Quality Assurance, Software Testing, UI/UX Design, and Microsoft Office Data Solutions.",
  keywords: [
    "Joshua Belleza",
    "QA Tester",
    "Software Testing",
    "Manual Testing",
    "UI UX Design",
    "Microsoft Office Specialist",
    "Freelancer Philippines",
    "Computer Science EARIST",
  ],
  authors: [{ name: "Joshua Belleza" }],
  creator: "Joshua Belleza",
  openGraph: {
    title: "Joshua Belleza | Freelance Portfolio",
    description:
      "Quality Assurance, Software Testing, UI/UX Design, and Office Solutions by Joshua Belleza.",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "/joshua-belleza.jpg",
        width: 800,
        height: 800,
        alt: "Joshua Belleza - Freelancer & Computer Science Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Belleza | Freelance Portfolio",
    description:
      "Quality Assurance, Software Testing, UI/UX Design, and Office Solutions by Joshua Belleza.",
    images: ["/joshua-belleza.jpg"],
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('jb-portfolio-theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white bg-slate-50 dark:bg-[#070d1e] text-slate-900 dark:text-white transition-colors duration-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-blue-600 focus:text-white focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white text-sm font-semibold transition-all"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

