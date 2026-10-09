"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  Clock,
} from "lucide-react";

export function HeroSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows for Navy Dark Mode */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-blue-600/10 dark:bg-blue-500/15 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: First-Person Introduction & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill & Brand Logo Mark */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-[#0e1d3e] border border-blue-200/80 dark:border-[#1e3a8a] text-blue-700 dark:text-cyan-300 text-xs sm:text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Freelance Projects</span>
                <span className="text-slate-400 dark:text-slate-500">|</span>
                <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" /> Cavite, Philippines
                </span>
              </div>
            </div>

            {/* Main Title with Shua Logo */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-28 sm:h-12 sm:w-36 shrink-0">
                  <Image
                    src="/shua-logo.png"
                    alt="Shua Brand Logo"
                    fill
                    sizes="150px"
                    className="object-contain object-left mix-blend-multiply dark:invert dark:mix-blend-screen"
                    priority
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-cyan-400">
                  • Portfolio
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Joshua Belleza
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-cyan-300">
                Freelancer & Computer Science Student
              </p>
            </div>

            {/* Simple, Catchy First-Person Pitch */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              I provide reliable support in <strong>Software Quality Assurance & Testing</strong>,{" "}
              <strong>UI/UX Design</strong>, and <strong>Microsoft Office / Data Organization</strong>.
              Trained in strict quality control from JAE Philippines, I treat every project with care,
              thoroughness, and precision.
            </p>

            {/* Three Simple Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f]">
                <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                  Strict QC Mindset
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f]">
                <Clock className="w-5 h-5 text-indigo-600 dark:text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                  On-Time Delivery
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f]">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                  Clear Updates
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              >
                <span>Get in Touch With Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#0e172e] dark:hover:bg-[#152345] border border-slate-200 dark:border-[#1e2c4f] text-slate-800 dark:text-white font-semibold text-sm sm:text-base transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              >
                View Sample Work
              </a>

              <a
                href="#experience"
                className="px-5 py-3.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-300 font-medium text-sm sm:text-base transition-colors"
              >
                My Background →
              </a>
            </div>

            {/* Quick Contact Chips with instant copy */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <button
                type="button"
                onClick={() => copyToClipboard("jmbelleza16@gmail.com", "email")}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#0e172e] hover:bg-blue-50 dark:hover:bg-[#132247] border border-slate-200/80 dark:border-[#1e2c4f] text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>jmbelleza16@gmail.com</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400" />
                )}
              </button>

              <button
                type="button"
                onClick={() => copyToClipboard("09218869520", "phone")}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#0e172e] hover:bg-blue-50 dark:hover:bg-[#132247] border border-slate-200/80 dark:border-[#1e2c4f] text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                <span>09218869520</span>
                {copiedPhone ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Prominent, Big Picture Showcase for Maximum Client Recognition */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-35 dark:opacity-45"></div>

              {/* Showcase Frame */}
              <div className="relative rounded-3xl bg-white dark:bg-[#0c1630] border-2 border-slate-200 dark:border-[#1e2e56] p-3 sm:p-4 shadow-2xl space-y-4">
                {/* Big Portrait Image Container */}
                <div className="relative w-full h-[420px] sm:h-[480px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#091124] border border-slate-200/60 dark:border-[#1a294d] shadow-inner group">
                  <Image
                    src="/joshua-belleza.jpg"
                    alt="Joshua Belleza - Formal Portrait"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    priority
                  />

                  {/* Gradient shade for bottom readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />

                  {/* Top-Right Status Badge */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-semibold shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Available for Hire</span>
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 sm:p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 text-white space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="text-lg sm:text-xl font-bold tracking-tight text-white">
                          Joshua Belleza
                        </div>
                        <div className="text-xs text-cyan-300 font-medium">
                          BS Computer Science • EARIST Cavite
                        </div>
                      </div>
                      <div className="text-right text-[11px] text-slate-300 shrink-0">
                        <div className="text-slate-400">Former Operator</div>
                        <div className="text-emerald-400 font-semibold">JAE Philippines QC</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2 py-0.5 rounded-md bg-white/15 text-[11px] font-medium text-slate-100">
                        QA & Testing
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-white/15 text-[11px] font-medium text-slate-100">
                        UI/UX Design
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-white/15 text-[11px] font-medium text-slate-100">
                        MS Office Suite
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons Under Photo */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href="mailto:jmbelleza16@gmail.com"
                    className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm text-center transition-colors flex items-center justify-center gap-1.5 shadow-md active:scale-98"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Email</span>
                  </a>

                  <a
                    href="tel:09218869520"
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#142347] dark:hover:bg-[#1c3060] text-slate-800 dark:text-white border border-slate-200 dark:border-[#22386b] font-semibold text-xs sm:text-sm text-center transition-colors flex items-center justify-center gap-1.5 active:scale-98"
                    title="Direct call via phone or dialer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>09218869520</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
