"use client";

import React from "react";
import {
  User,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Sparkles,
} from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      title: "Real Experience in Quality Control",
      desc: "Working as a Production Operator at JAE Philippines taught me discipline, patience, and how to spot tiny defects. I bring that exact careful mindset to every freelance project.",
    },
    {
      title: "Computer Science Student at EARIST",
      desc: "Studying Computer Science gives me a solid foundation in programming, software testing, and modern web technologies so I understand how digital tools work.",
    },
    {
      title: "Friendly & Easy to Work With",
      desc: "I believe in clear communication. I keep you updated, listen carefully to what you need, and deliver work that makes your job easier.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#070d1e] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Personal Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-md opacity-20 dark:opacity-30"></div>

              <div className="relative rounded-2xl bg-slate-50 dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-7 sm:p-8 space-y-6 shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-sm">
                    JB
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Joshua Belleza
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400">
                      Freelancer & CS Student
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-blue-500" /> Philippines
                    </p>
                  </div>
                </div>

                {/* Personal Note */}
                <div className="p-4 rounded-xl bg-white dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f] text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  "I believe good work comes from taking your time to understand the requirements,
                  checking your work twice, and making sure the client is truly happy with the result."
                </div>

                {/* Quick Info Badges */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f] text-center">
                    <div className="text-base font-bold text-blue-600 dark:text-cyan-400">EARIST</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      BS Computer Science
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f] text-center">
                    <div className="text-base font-bold text-blue-600 dark:text-cyan-400">JAE Phils</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      Quality Control Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: First-Person Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <User className="w-3.5 h-3.5" />
              About Me
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Little Bit About Me & How I Work
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Hi, I'm Joshua! When you hire me for a project, you get someone who is focused,
              patient, and careful. I don't rush through tasks or leave things half-done.
            </p>

            <div className="space-y-4 pt-2">
              {highlights.map((item) => (
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

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 hover:underline"
              >
                <span>See the services I offer</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

