"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

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

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Experience & Education", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#070d1e]/90 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-[#1e2c4f]/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-200">
              JB
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Joshua Belleza
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Freelance Specialist
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#132247]/60 transition-all duration-200"
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
              className="p-2.5 rounded-xl border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-300 hover:border-blue-300 dark:hover:border-cyan-500/50 transition-all duration-200 shadow-sm"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Navy Dark Mode"}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-300 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-gradient-to-r dark:from-blue-600 dark:to-indigo-600 text-white font-medium text-sm shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 active:scale-95"
            >
              <span>Hire Joshua</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] text-slate-700 dark:text-slate-200"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] text-slate-700 dark:text-slate-200"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-[#070d1e]/98 border-b border-slate-200 dark:border-[#1e2c4f] shadow-xl px-4 pt-3 pb-6 space-y-2 mt-2 backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#132247] hover:text-blue-600 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-medium text-base shadow-md"
            >
              <span>Hire Joshua</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

