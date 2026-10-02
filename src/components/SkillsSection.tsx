"use client";

import React, { useState } from "react";
import {
  FileSpreadsheet,
  ShieldCheck,
  CheckCircle2,
  Layout,
  Code2,
  Bug,
  Sparkles,
  TrendingUp,
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "qa" | "office" | "tech" | "core";
  percentage: number;
  description: string;
  highlights: string[];
  icon: any;
  colorClass: string;
  glowClass: string;
}

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const skills: SkillItem[] = [
    {
      name: "Attention to Detail",
      category: "core",
      percentage: 98,
      description:
        "High-precision inspection and flaw detection honed through real-world manufacturing and software systems.",
      highlights: ["Flaw Detection", "Data Integrity", "Document Precision", "Edge-Case Discovery"],
      icon: CheckCircle2,
      colorClass: "from-blue-600 to-indigo-600",
      glowClass: "group-hover:border-blue-500",
    },
    {
      name: "Microsoft Office Suite — Word, PowerPoint, Excel",
      category: "office",
      percentage: 95,
      description:
        "Advanced spreadsheet modeling, data visualization, executive presentation design, and formatted reports.",
      highlights: ["Excel Formulas & Pivot Tables", "Executive Slide Decks", "Formal Word Reports", "Data Cleanup"],
      icon: FileSpreadsheet,
      colorClass: "from-emerald-600 to-teal-500",
      glowClass: "group-hover:border-emerald-500",
    },
    {
      name: "Quality Assurance & Quality Control",
      category: "qa",
      percentage: 92,
      description:
        "Structured inspection processes and standard operating procedures (SOPs) ensuring zero-defect standards.",
      highlights: ["SOP Compliance", "Quality Auditing", "Defect Prevention", "Process Consistency"],
      icon: ShieldCheck,
      colorClass: "from-cyan-600 to-blue-500",
      glowClass: "group-hover:border-cyan-500",
    },
    {
      name: "Software Testing",
      category: "qa",
      percentage: 88,
      description:
        "Manual functional testing, test case design, cross-platform validation, and bug life-cycle tracking.",
      highlights: ["Test Case Design", "Bug Reproducibility", "Sanity & Regression", "Cross-Browser Auditing"],
      icon: Bug,
      colorClass: "from-violet-600 to-indigo-500",
      glowClass: "group-hover:border-violet-500",
    },
    {
      name: "UI/UX Design",
      category: "tech",
      percentage: 85,
      description:
        "Crafting intuitive user interfaces, user journey flows, and aesthetic layouts with a mobile-first philosophy.",
      highlights: ["Wireframing & Prototyping", "User-Centric Flows", "Responsive Layouts", "Aesthetic Hierarchy"],
      icon: Layout,
      colorClass: "from-purple-600 to-pink-500",
      glowClass: "group-hover:border-purple-500",
    },
    {
      name: "Basic HTML & Python",
      category: "tech",
      percentage: 80,
      description:
        "Semantic web markup, responsive styling, and algorithmic scripting in Python for automation and logic.",
      highlights: ["Semantic HTML5 Markup", "Python Logic & Scripts", "DOM & Web Structure", "Data Automation"],
      icon: Code2,
      colorClass: "from-amber-500 to-orange-500",
      glowClass: "group-hover:border-amber-500",
    },
  ];

  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  const filters = [
    { label: "All Skills", value: "all" },
    { label: "QA & Software Testing", value: "qa" },
    { label: "Core & Precision", value: "core" },
    { label: "Productivity & Office", value: "office" },
    { label: "Design & Web Tech", value: "tech" },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#070d1e] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            Verified Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills & Progress Indicators
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A transparent overview of my proficiency levels, tools, and technical strengths ready
            to be deployed for your projects.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.value
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-slate-100 dark:bg-[#0e172e] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#172445] border border-slate-200/80 dark:border-[#1e2c4f]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group rounded-2xl bg-slate-50/70 dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${skill.glowClass}`}
              >
                {/* Header & Icon */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${skill.colorClass} flex items-center justify-center text-white shadow-sm shrink-0`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg leading-snug">
                        {skill.name}
                      </h3>
                      <span className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                        {skill.category === "qa"
                          ? "Quality Assurance & Testing"
                          : skill.category === "core"
                          ? "Core Competency"
                          : skill.category === "office"
                          ? "Office & Analytics"
                          : "Design & Development"}
                      </span>
                    </div>
                  </div>

                  {/* Percentage Pill */}
                  <div className="flex items-baseline gap-0.5 px-3 py-1 rounded-xl bg-white dark:bg-[#132247] border border-slate-200 dark:border-[#1e3466] shadow-xs">
                    <span className="text-lg font-extrabold text-blue-600 dark:text-cyan-400">
                      {skill.percentage}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-400">
                      %
                    </span>
                  </div>
                </div>

                {/* Progress Bar Indicator */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span>Proficiency Level</span>
                    <span>
                      {skill.percentage >= 95
                        ? "Mastery"
                        : skill.percentage >= 90
                        ? "Advanced"
                        : skill.percentage >= 85
                        ? "Proficient"
                        : "Competent"}
                    </span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-[#172545] overflow-hidden p-0.5">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.colorClass} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {skill.description}
                </p>

                {/* Skill Highlights / Sub-skills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60 dark:border-[#19274a]">
                  {skill.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white dark:bg-[#101e3d] border border-slate-200/80 dark:border-[#1e2f59] text-slate-700 dark:text-slate-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

