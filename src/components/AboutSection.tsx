"use client";

import React from "react";
import Image from "next/image";
import {
  User,
  ArrowRight,
  MapPin,
  GraduationCap,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      title: "Real Experience in Quality Control",
      desc: "Working as a Production Operator at JAE Philippines taught me discipline, patience, and how to spot tiny defects. I bring that exact careful mindset to every freelance project.",
      icon: ShieldCheck,
      color: "text-blue-600 dark:text-cyan-400 bg-blue-100 dark:bg-[#132247]",
    },
    {
      title: "Computer Science Student at EARIST",
      desc: "Studying Computer Science gives me a solid foundation in programming, software testing, and modern web technologies so I understand how digital tools work under the hood.",
      icon: GraduationCap,
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-[#132247]",
    },
    {
      title: "Friendly & Easy to Work With",
      desc: "I believe in clear communication. I keep you updated, listen carefully to what you need, and deliver work that makes your job easier.",
      icon: HeartHandshake,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-[#132247]",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#070d1e] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Personal Card with Joshua's Photo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-md opacity-20 dark:opacity-30"></div>

              <div className="relative rounded-2xl bg-slate-50 dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-7 sm:p-8 space-y-6 shadow-md">
                {/* Large Portrait Photo Container */}
                <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-[#1e2e56] shadow-sm group">
                  <Image
                    src="/joshua-belleza.jpg"
                    alt="Joshua Belleza - About Portrait"
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold leading-tight text-white">
                      Joshua Belleza
                    </h3>
                    <div className="flex items-center justify-between text-xs text-slate-200 mt-1">
                      <span className="text-cyan-300 font-semibold">Freelancer & CS Student</span>
                      <span className="flex items-center gap-1 text-slate-300">
                        <MapPin className="w-3 h-3 text-cyan-400" /> Cavite, Philippines
                      </span>
                    </div>
                  </div>
                </div>

                {/* Personal Note with escaped quotes */}
                <div className="p-4 rounded-xl bg-white dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f] text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  &ldquo;I believe good work comes from taking your time to understand the requirements,
                  checking your work twice, and making sure the client is truly happy with the result.&rdquo;
                </div>

                {/* Quick Info Badges */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f] text-center">
                    <div className="text-sm font-bold text-blue-600 dark:text-cyan-400">EARIST Cavite</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                      BS Computer Science
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f] text-center">
                    <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">JAE Philippines</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                      Quality Control Operator
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
              Hi, I&apos;m Joshua! When you hire me for a project, you get someone who is focused,
              patient, and careful. I don&apos;t rush through tasks or leave things half-done.
            </p>

            <div className="space-y-4 pt-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-[#0c1630] border border-slate-200/80 dark:border-[#1e2e56] flex items-start gap-3.5 transition-all duration-200 hover:shadow-sm"
                  >
                    <div className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center shrink-0 mt-0.5`}>
                      <Icon className="w-4 h-4" />
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
                );
              })}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 hover:underline"
              >
                <span>See sample work & deliverables</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <a
                href="#services"
                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-300"
              >
                Explore services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
