"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
  Download,
  Copy,
  Check,
  ShieldCheck,
  Clock,
  Terminal,
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
      {/* Background Ambient Glows for Formal Navy Dark Mode */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 dark:bg-blue-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Client-Focused Pitch */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-[#0e1d3e] border border-blue-200/80 dark:border-[#1e3a8a] text-blue-700 dark:text-cyan-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Freelance & Contract Projects</span>
              <span className="text-slate-400 dark:text-slate-500">|</span>
              <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-500" /> Philippines
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-blue-600 dark:text-cyan-400">
                Hi there, I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Joshua Belleza
              </h1>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-300 bg-clip-text text-transparent">
                Freelancer • Quality Assurance & Software Testing Specialist
              </p>
            </div>

            {/* Compelling Short Intro */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Need a dependable freelancer who gets it right the first time? I bridge{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">
                meticulous attention to detail
              </strong>
              , industrial zero-defect Quality Assurance, and modern Computer Science
              expertise to help businesses eliminate bugs, refine user experiences, and
              streamline technical workflows.
            </p>

            {/* Key Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f]">
                <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                  Zero-Defect QA Mindset
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f]">
                <Clock className="w-5 h-5 text-indigo-600 dark:text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                  Reliable Turnaround
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f]">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                  Precision Execution
                </span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-gradient-to-r dark:from-blue-600 dark:to-indigo-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Hire Joshua for Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#0e172e] dark:hover:bg-[#152345] border border-slate-200 dark:border-[#1e2c4f] text-slate-800 dark:text-white font-semibold text-sm sm:text-base transition-all duration-200"
              >
                Explore Services & Skills
              </a>
            </div>

            {/* Quick Contact Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {/* Email Chip */}
              <button
                onClick={() => copyToClipboard("jmbelleza16@gmail.com", "email")}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#0e172e] hover:bg-blue-50 dark:hover:bg-[#132247] border border-slate-200/80 dark:border-[#1e2c4f] text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors"
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

              {/* Phone Chip */}
              <button
                onClick={() => copyToClipboard("09218869520", "phone")}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#0e172e] hover:bg-blue-50 dark:hover:bg-[#132247] border border-slate-200/80 dark:border-[#1e2c4f] text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors"
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

          {/* Right Column: Interactive Profile & Technical Inspection Dashboard */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Background gradient decorative frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-lg opacity-30 dark:opacity-40 animate-pulse"></div>

              {/* Glass / Solid Card */}
              <div className="relative rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-6 sm:p-7 shadow-xl space-y-6">
                {/* Header of the Card */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-[#19274a] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-cyan-400 flex items-center justify-center text-white font-bold text-xl shadow-md">
                      JB
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-base">
                        Joshua Belleza
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        BS Computer Science • Freelancer
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
                    Active
                  </span>
                </div>

                {/* Client Assurance Metrics */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                    Core Specializations
                  </div>

                  {/* Skill 1: QA */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-200">
                      <span>Quality Assurance & Software Testing</span>
                      <span className="text-blue-600 dark:text-cyan-400 font-bold">92%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-[#172445] overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full w-[92%] transition-all duration-1000"></div>
                    </div>
                  </div>

                  {/* Skill 2: Attention to Detail */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-200">
                      <span>Attention to Detail & Verification</span>
                      <span className="text-blue-600 dark:text-cyan-400 font-bold">98%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-[#172445] overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full w-[98%] transition-all duration-1000"></div>
                    </div>
                  </div>

                  {/* Skill 3: Microsoft Office */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-200">
                      <span>Microsoft Office Suite (Word, PPT, Excel)</span>
                      <span className="text-blue-600 dark:text-cyan-400 font-bold">95%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-[#172445] overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-[95%] transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>

                {/* Live Client Guarantee Badge */}
                <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-[#101e3f] border border-blue-100 dark:border-[#1e3466] flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <div className="font-semibold text-slate-900 dark:text-white">
                      Client-First Quality Commitment
                    </div>
                    <div className="text-slate-600 dark:text-slate-300">
                      Every project undergoes structured testing, strict review, and
                      prompt feedback cycles before final delivery.
                    </div>
                  </div>
                </div>

                {/* Quick Action in Card */}
                <div className="pt-1 flex gap-2">
                  <a
                    href="mailto:jmbelleza16@gmail.com"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-medium text-xs text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Joshua</span>
                  </a>
                  <a
                    href="tel:09218869520"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#142347] dark:hover:bg-[#1c3060] text-slate-800 dark:text-white font-medium text-xs text-center border border-slate-200 dark:border-[#22386b] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Directly</span>
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

