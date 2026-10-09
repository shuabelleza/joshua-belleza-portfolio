"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "About Me", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-[#070d1e]/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-[#1e2c4f]/80 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Shua Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#070d1e]"
            >
              <div className="relative h-9 w-24 sm:h-10 sm:w-28 shrink-0">
                <Image
                  src="/shua-logo.png"
                  alt="Shua Logo"
                  fill
                  sizes="120px"
                  className="object-contain object-left mix-blend-multiply dark:invert dark:mix-blend-screen group-hover:scale-105 transition-transform duration-200"
                  priority
                />
              </div>
              <div className="hidden sm:block border-l border-slate-200 dark:border-[#1e2e56] pl-3">
                <div className="font-bold text-slate-900 dark:text-white text-base tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                  Joshua Belleza
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    Freelancer • Open for Work
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#132247]/60 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-colors shadow-sm"
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Navy Dark Mode"}
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>

              {/* Contact CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-all duration-200 active:scale-95"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu & Theme Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] text-slate-700 dark:text-slate-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-amber-300" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] text-slate-700 dark:text-slate-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="md:hidden bg-white/98 dark:bg-[#070d1e]/98 border-b border-slate-200 dark:border-[#1e2c4f] shadow-2xl px-4 pt-3 pb-6 space-y-2 mt-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#132247] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-medium text-base shadow-md active:scale-98 transition-transform"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Dimmed backdrop when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 md:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
}

