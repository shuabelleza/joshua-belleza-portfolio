"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-[#060b19] border-t border-slate-200 dark:border-[#172342] text-slate-600 dark:text-slate-400 py-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-[#131e38]">
          {/* Brand Info with Shua logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-24 sm:h-10 sm:w-28 shrink-0">
              <Image
                src="/shua-logo.png"
                alt="Shua Logo"
                fill
                sizes="120px"
                className="object-contain object-left mix-blend-multiply dark:invert dark:mix-blend-screen"
              />
            </div>
            <div className="border-l border-slate-200 dark:border-[#1e2e56] pl-3">
              <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                Joshua Belleza
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Freelancer & BS Computer Science Student
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm" aria-label="Footer Navigation">
            <a
              href="#about"
              className="hover:text-blue-600 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >
              About Me
            </a>
            <a
              href="#services"
              className="hover:text-blue-600 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >
              Services
            </a>
            <a
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-blue-600 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-blue-600 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >
              Contact
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#0e172e] dark:hover:bg-[#152345] text-slate-700 dark:text-slate-300 transition-colors ml-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© {new Date().getFullYear()} Joshua Belleza. All rights reserved.</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-blue-500" /> Cavite, Philippines
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:jmbelleza16@gmail.com"
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span>jmbelleza16@gmail.com</span>
            </a>
            <a
              href="tel:09218869520"
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-500" />
              <span>09218869520</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
