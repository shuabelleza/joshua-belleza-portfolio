"use client";

import React from "react";
import {
  CheckCircle,
  FileSpreadsheet,
  Layout,
  Code,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: ShieldCheck,
      title: "Quality Assurance & Software Testing",
      tagline: "Find bugs and fix issues before your users encounter them.",
      badge: "Testing",
      color: "from-blue-500 to-cyan-500",
      points: [
        "Manual functional testing for websites and applications",
        "Checking forms, buttons, links, and navigation flows",
        "Testing on both mobile phones and desktop computers",
        "Writing clear bug reports with screenshots and steps to reproduce",
        "Re-testing fixes to make sure everything works properly",
      ],
      deliverable: "Clear bug report with screenshots, steps, and test notes",
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      tagline: "Create clean, modern layouts that are easy and pleasant to use.",
      badge: "Design",
      color: "from-indigo-500 to-purple-500",
      points: [
        "Simple and modern wireframes for your app or website ideas",
        "Responsive layouts that work smoothly on phones and laptops",
        "Making pages easy to navigate so users don't get confused",
        "Checking existing designs to suggest visual improvements",
      ],
      deliverable: "Wireframes, layout mockups, and usability suggestions",
    },
    {
      icon: FileSpreadsheet,
      title: "Microsoft Office Suite",
      tagline: "Organize data, create spreadsheets, and format clean documents.",
      badge: "Office",
      color: "from-emerald-500 to-teal-500",
      points: [
        "Microsoft Excel: Formulas, pivot tables, and clean data organization",
        "Microsoft Word: Well-formatted reports, summaries, and documents",
        "Microsoft PowerPoint: Clean slide decks for presentations and meetings",
        "Careful proofreading and data entry to prevent mistakes",
      ],
      deliverable: "Ready-to-use Excel sheets, formatted Word files, or slide decks",
    },
    {
      icon: Code,
      title: "Basic HTML & Python",
      tagline: "Help with web page structures, basic code edits, and simple scripts.",
      badge: "Development",
      color: "from-sky-500 to-blue-600",
      points: [
        "Writing and fixing semantic HTML page structures",
        "Adjusting layouts, text, and styles on web pages",
        "Writing basic Python scripts for simple automation and data tasks",
        "Applying computer science fundamentals to solve technical problems",
      ],
      deliverable: "Clean HTML code, basic scripts, and quick technical fixes",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50/50 dark:bg-[#091124] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            What I Can Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Services I Offer
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Here are the main services I provide to help you finish your tasks smoothly and on time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-7 sm:p-8 hover:border-blue-400 dark:hover:border-cyan-500/60 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar of Service Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white shadow-sm`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#142347] text-slate-700 dark:text-cyan-300 border border-slate-200 dark:border-[#203666]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Points */}
                  <ul className="space-y-2.5 mb-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What you get */}
                <div className="pt-5 border-t border-slate-100 dark:border-[#19274a] space-y-3">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    <strong className="text-slate-800 dark:text-slate-200">What you get: </strong>
                    {service.deliverable}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300"
                  >
                    <span>Contact me about this service</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
