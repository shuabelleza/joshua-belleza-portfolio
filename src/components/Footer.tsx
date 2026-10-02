"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-[#060b19] border-t border-slate-200 dark:border-[#172342] text-slate-600 dark:text-slate-400 py-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-[#131e38]">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 dark:bg-blue-500 text-white font-bold flex items-center justify-center text-sm">
              JB
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                Joshua Belleza
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Freelancer & Computer Science Student
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm">
            <a
              href="#about"
              className="hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              About Me
            </a>
            <a
              href="#services"
              className="hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#skills"
              className="hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              Contact
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#0e172e] dark:hover:bg-[#152345] text-slate-700 dark:text-slate-300 transition-colors ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} Joshua Belleza. All rights reserved.
          </div>
          <div>
            Philippines • Available for Freelance Projects
          </div>
        </div>
      </div>
    </footer>
  );
}

