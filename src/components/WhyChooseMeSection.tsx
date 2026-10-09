"use client";

import React from "react";
import {
  ShieldCheck,
  MessageSquareCheck,
  Clock,
  Sparkles,
  BookOpen,
} from "lucide-react";

export function WhyChooseMeSection() {
  const points = [
    {
      icon: ShieldCheck,
      title: "Careful Attention to Detail",
      description:
        "From my manufacturing background at JAE Philippines, I learned to never skip steps and always double-check details before delivering.",
      accent: "from-blue-600 to-cyan-500",
    },
    {
      icon: MessageSquareCheck,
      title: "Clear & Prompt Communication",
      description:
        "I reply to messages promptly and provide regular progress updates, so you always know what stage your project is in.",
      accent: "from-indigo-600 to-purple-500",
    },
    {
      icon: BookOpen,
      title: "Computer Science Background",
      description:
        "Currently studying CS at EARIST, giving me solid technical understanding of software testing, programming logic, and web design.",
      accent: "from-emerald-600 to-teal-500",
    },
    {
      icon: Clock,
      title: "Respect for Deadlines",
      description:
        "I understand that your time is valuable. I work responsibly to make sure assignments are completed on or ahead of time.",
      accent: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#070d1e] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Reliability & Work Ethic
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Work With Me?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            When you hire me, here is what you can count on throughout our collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl bg-slate-50 dark:bg-[#0c1630] border border-slate-200/80 dark:border-[#1e2e56] p-6 hover:shadow-md hover:border-blue-400 dark:hover:border-cyan-500/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-[#132247] text-blue-600 dark:text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/50 dark:border-[#19274a]">
                  <span className="text-[11px] font-semibold text-blue-600 dark:text-cyan-400">
                    Client-first commitment
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
