"use client";

import React from "react";
import {
  User,
  ShieldCheck,
  Target,
  Sparkles,
  GraduationCap,
  MapPin,
  CheckCircle2,
  FileCheck,
  ArrowRight,
} from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      title: "Precision Rooted in Manufacturing",
      desc: "Having worked as a Production Operator at JAE Philippines, I developed a zero-defect mindset and rigorous adherence to standard operating procedures (SOPs). I bring this exact precision to software testing and digital tasks.",
    },
    {
      title: "Grounded in Computer Science",
      desc: "Currently studying BS Computer Science at EARIST Cavite Campus, equipping me with deep knowledge of algorithms, software architectures, edge-case testing, and web standards.",
    },
    {
      title: "Client-Centric Freelance Partner",
      desc: "I treat every client project as high-stakes. Whether you are building an application, needing thorough QA test cycles, or automating complex spreadsheets, I deliver clear communication and dependable results.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#070d1e] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Profile & Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              {/* Decorative background glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl blur-md opacity-25 dark:opacity-40"></div>

              {/* Card Container */}
              <div className="relative rounded-2xl bg-slate-50 dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-7 sm:p-8 space-y-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-cyan-400 flex items-center justify-center text-white font-extrabold text-2xl shadow-md">
                    JB
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Joshua Belleza
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400">
                      Freelance QA & Technical Specialist
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-blue-500" /> Cavite / Manila, Philippines
                    </p>
                  </div>
                </div>

                {/* Quick Bio Quote */}
                <div className="p-4 rounded-xl bg-white dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f] text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "In both manufacturing and software engineering, a missed flaw can cost thousands.
                  I believe in testing thoroughly, verifying twice, and delivering once with
                  uncompromising excellence."
                </div>

                {/* Key Quick Badges */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f] text-center">
                    <div className="text-lg font-black text-blue-600 dark:text-cyan-400">EARIST</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      BS Computer Science
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f] text-center">
                    <div className="text-lg font-black text-blue-600 dark:text-cyan-400">JAE Phils</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      QA / QC Mindset
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <User className="w-3.5 h-3.5" />
              About Joshua
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Freelancer Dedicated to Precision, Quality, and Client Success
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              When clients hire a freelancer, they need someone who requires minimal hand-holding,
              respects deadlines, and catches the mistakes before their customers ever see them.
              That is the foundation of my work philosophy.
            </p>

            <div className="space-y-4 pt-2">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-[#0c1630] border border-slate-200/80 dark:border-[#1e2e56] flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-[#132247] text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 flex items-center gap-4">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 hover:underline"
              >
                <span>View All Technical Skills & Metrics</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

