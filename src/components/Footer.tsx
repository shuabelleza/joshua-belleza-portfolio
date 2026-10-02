"use client";

import React, { useState } from "react";
import { ArrowUp, Heart, Terminal, Globe, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

export function Footer() {
  const [showDeployGuide, setShowDeployGuide] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-[#060b19] border-t border-slate-200 dark:border-[#172342] text-slate-600 dark:text-slate-400 py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-100 dark:border-[#131e38]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 dark:bg-blue-500 text-white font-bold flex items-center justify-center text-sm">
                JB
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-base">
                Joshua Belleza
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-[#132247] text-blue-600 dark:text-cyan-300 font-medium">
                Freelancer
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
              Quality Assurance & Software Testing • UI/UX Design • Office Automation • Computer
              Science Student at EARIST Cavite Campus.
            </p>
          </div>

          {/* Quick Links & Deployment Guide Button */}
          <div className="md:col-span-6 flex flex-wrap md:justify-end items-center gap-4">
            <button
              onClick={() => setShowDeployGuide(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-[#0e172e] dark:hover:bg-[#152345] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#1e2c4f] transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-500" />
              <span>Vercel Deploy Guide</span>
            </button>

            <a
              href="#about"
              className="text-xs hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-xs hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#skills"
              className="text-xs hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-xs hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              Contact
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#0e172e] dark:hover:bg-[#152345] text-slate-700 dark:text-slate-300 transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} Joshua Belleza. All rights reserved. • Philippines (GMT+8)
          </div>

          <div className="flex items-center gap-2">
            <span>Deployed with Next.js on</span>
            <span className="inline-flex items-center gap-1 font-semibold text-slate-800 dark:text-slate-200">
              <svg
                aria-label="Vercel logomark"
                height="12"
                role="img"
                viewBox="0 0 74 64"
                className="fill-current text-slate-900 dark:text-white inline-block"
              >
                <path d="M37.5896.25L74.5396 64.25H.639648L37.5896.25Z"></path>
              </svg>
              Vercel
            </span>
          </div>
        </div>
      </div>

      {/* Vercel Deployment Modal */}
      {showDeployGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-[#19274a]">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-500" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  How to Make Public via Vercel
                </h3>
              </div>
              <button
                onClick={() => setShowDeployGuide(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-600 dark:text-cyan-400 font-bold text-xs flex items-center justify-center shrink-0">
                  1
                </span>
                <p>
                  Push this project folder to your GitHub account (e.g. repo name:{" "}
                  <code className="text-blue-600 dark:text-cyan-300 font-mono">
                    joshua-belleza-portfolio
                  </code>
                  ).
                </p>
              </div>

              <div className="flex gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-600 dark:text-cyan-400 font-bold text-xs flex items-center justify-center shrink-0">
                  2
                </span>
                <p>
                  Go to{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 dark:text-cyan-400 underline font-medium"
                  >
                    vercel.com
                  </a>{" "}
                  and log in with GitHub.
                </p>
              </div>

              <div className="flex gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-600 dark:text-cyan-400 font-bold text-xs flex items-center justify-center shrink-0">
                  3
                </span>
                <p>
                  Click <strong>Add New... &gt; Project</strong> and select{" "}
                  <code className="font-mono">joshua-belleza-portfolio</code>.
                </p>
              </div>

              <div className="flex gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-600 dark:text-cyan-400 font-bold text-xs flex items-center justify-center shrink-0">
                  4
                </span>
                <p>
                  Click <strong>Deploy</strong>! Vercel automatically compiles Next.js and assigns a
                  public live URL (e.g.,{" "}
                  <code className="text-emerald-600 dark:text-emerald-400 font-mono">
                    https://joshua-belleza.vercel.app
                  </code>
                  ).
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-blue-50 dark:bg-[#101e3f] border border-blue-100 dark:border-[#1e3466] text-xs text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 inline mr-1.5" />
              The project is already pre-configured and tested for 100% clean builds on Vercel.
            </div>

            <button
              onClick={() => setShowDeployGuide(false)}
              className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

