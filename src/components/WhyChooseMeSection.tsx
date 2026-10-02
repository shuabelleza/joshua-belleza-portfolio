"use client";

import React from "react";
import {
  ShieldAlert,
  Zap,
  MessageSquareCheck,
  CheckCircle,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react";

export function WhyChooseMeSection() {
  const pillars = [
    {
      icon: ShieldAlert,
      title: "Zero-Defect Mindset",
      description:
        "Trained in high-precision electronics manufacturing at JAE Philippines, where strict SOPs and micro-inspection were mandatory. I apply that exact precision to software QA, data entry, and design.",
      stat: "100%",
      statLabel: "Attention to Detail",
    },
    {
      icon: MessageSquareCheck,
      title: "Crystal-Clear Communication",
      description:
        "Never left guessing project status. I provide structured daily updates, documented bug logs, and prompt replies so your deadlines are never at risk.",
      stat: "<24h",
      statLabel: "Response Time",
    },
    {
      icon: Layers,
      title: "Academic & Practical Rigor",
      description:
        "Currently pursuing a BS in Computer Science at EARIST, keeping my technical methodologies modern, standard-compliant, and grounded in solid software principles.",
      stat: "BSCS",
      statLabel: "Undergraduate Foundation",
    },
    {
      icon: Zap,
      title: "Speed Without Cutting Corners",
      description:
        "Efficient workflow utilizing advanced Microsoft Office automations, systematic test suites, and clean design patterns to deliver fast, dependable results.",
      stat: "On-Time",
      statLabel: "Delivery Guarantee",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#070d1e] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Client Assurance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Work With Joshua Belleza?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Hiring a freelancer is about trust, reliability, and precision. Here is what you can
            count on when we partner together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-50 dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-6 flex flex-col justify-between hover:shadow-lg hover:border-blue-400 dark:hover:border-cyan-500/50 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-[#132247] text-blue-600 dark:text-cyan-400 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 dark:border-[#19274a]">
                  <div className="text-2xl font-black text-blue-600 dark:text-cyan-400">
                    {item.stat}
                  </div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item.statLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

