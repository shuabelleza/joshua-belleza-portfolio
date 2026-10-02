"use client";

import React, { useState } from "react";
import {
  FileSpreadsheet,
  ShieldCheck,
  CheckCircle2,
  Layout,
  Code2,
  Bug,
  TrendingUp,
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "all" | "qa" | "office" | "tech";
  percentage: number;
  description: string;
  tags: string[];
  icon: any;
  colorClass: string;
}

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const skills: SkillItem[] = [
    {
      name: "Attention to Detail",
      category: "qa",
      percentage: 98,
      description:
        "I take time to check every small detail, catch typos or bugs, and make sure everything is accurate before sending it to you.",
      tags: ["Careful Checking", "Zero Mistakes", "Patience", "Thorough Review"],
      icon: CheckCircle2,
      colorClass: "from-blue-600 to-indigo-600",
    },
    {
      name: "Microsoft Office Suite — Word, PowerPoint, Excel",
      category: "office",
      percentage: 95,
      description:
        "Comfortable building formulas and pivot tables in Excel, formatting clean Word documents, and making neat PowerPoint slides.",
      tags: ["Excel Formulas", "Pivot Tables", "Word Formatting", "PowerPoint Slides"],
      icon: FileSpreadsheet,
      colorClass: "from-emerald-600 to-teal-500",
    },
    {
      name: "Quality Assurance & Quality Control",
      category: "qa",
      percentage: 92,
      description:
        "Trained to follow strict standard operating procedures (SOPs) and verify that products meet quality standards.",
      tags: ["Quality Inspection", "Standard Procedures", "Defect Prevention"],
      icon: ShieldCheck,
      colorClass: "from-cyan-600 to-blue-500",
    },
    {
      name: "Software Testing",
      category: "qa",
      percentage: 88,
      description:
        "Manual testing of websites and apps, writing simple and clear bug tickets, and checking edge cases.",
      tags: ["Manual Testing", "Bug Reporting", "Sanity Testing", "Mobile & Web"],
      icon: Bug,
      colorClass: "from-violet-600 to-indigo-500",
    },
    {
      name: "UI/UX Design",
      category: "tech",
      percentage: 85,
      description:
        "Designing clear user flows, screen layouts, and wireframes that look modern and are easy for people to use.",
      tags: ["Wireframing", "Simple Layouts", "Mobile Friendly", "User Experience"],
      icon: Layout,
      colorClass: "from-purple-600 to-pink-500",
    },
    {
      name: "Basic HTML & Python",
      category: "tech",
      percentage: 80,
      description:
        "Building clean HTML web structures, styling adjustments, and writing basic Python scripts for simple automation.",
      tags: ["HTML5", "CSS Styling", "Python Basics", "Logic & Scripts"],
      icon: Code2,
      colorClass: "from-amber-500 to-orange-500",
    },
  ];

  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  const filters = [
    { label: "All Skills", value: "all" },
    { label: "QA & Testing", value: "qa" },
    { label: "Office & Data", value: "office" },
    { label: "Design & Web", value: "tech" },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#070d1e] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            My Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Skills
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Here are my primary skills along with progress indicators showing my comfort level.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.value
                    ? "bg-blue-600 text-white shadow-sm"
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
                className="rounded-2xl bg-slate-50/80 dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-6 sm:p-7 transition-all duration-200 hover:shadow-md"
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
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Skill Level
                      </span>
                    </div>
                  </div>

                  {/* Percentage Indicator */}
                  <div className="flex items-baseline gap-0.5 px-3 py-1 rounded-xl bg-white dark:bg-[#132247] border border-slate-200 dark:border-[#1e3466]">
                    <span className="text-lg font-extrabold text-blue-600 dark:text-cyan-400">
                      {skill.percentage}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      %
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5 mb-4">
                  <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-[#172545] overflow-hidden p-0.5">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.colorClass}`}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>

                {/* Simple Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {skill.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60 dark:border-[#19274a]">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white dark:bg-[#101e3d] border border-slate-200/80 dark:border-[#1e2f59] text-slate-700 dark:text-slate-300"
                    >
                      {tag}
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
