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
  Sparkles,
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "all" | "qa" | "office" | "tech";
  level: "Core Specialization" | "Advanced" | "Proficient" | "Practical Knowledge";
  levelBadge: string;
  description: string;
  tags: string[];
  tools: string[];
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
}

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const skills: SkillItem[] = [
    {
      name: "Detail Verification & Error Prevention",
      category: "qa",
      level: "Core Specialization",
      levelBadge: "bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-cyan-300 border-blue-200 dark:border-blue-800",
      description:
        "Trained to catch minute discrepancies, layout defects, broken links, and calculation errors before client deliverables go live.",
      tags: ["Defect Prevention", "SOP Adherence", "Pre-delivery Verification", "Data Proofing"],
      tools: ["Checklists", "Edge Case Scenarios", "Chrome DevTools"],
      icon: CheckCircle2,
      colorClass: "from-blue-600 to-indigo-600",
    },
    {
      name: "Quality Assurance & Quality Control (QC)",
      category: "qa",
      level: "Core Specialization",
      levelBadge: "bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-cyan-300 border-blue-200 dark:border-blue-800",
      description:
        "Hands-on background adhering to Standard Operating Procedures (SOPs) from JAE Philippines manufacturing, translated into rigorous digital QA standards.",
      tags: ["Quality Audits", "Process Discipline", "Zero-Defect Standard"],
      tools: ["SOP Compliance", "Audit Sheets", "Inspection Logs"],
      icon: ShieldCheck,
      colorClass: "from-cyan-600 to-blue-500",
    },
    {
      name: "Software & Web Manual Testing",
      category: "qa",
      level: "Advanced",
      levelBadge: "bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
      description:
        "Manual functional, regression, sanity, and usability testing for web applications and mobile sites. Writing structured bug tickets with reproducible steps.",
      tags: ["Manual Testing", "Bug Reporting", "Cross-Browser", "Regression"],
      tools: ["Test Matrices", "Bug Severity Triage", "Mobile Simulators"],
      icon: Bug,
      colorClass: "from-violet-600 to-indigo-500",
    },
    {
      name: "Microsoft Office Suite (Excel, Word, PowerPoint)",
      category: "office",
      level: "Advanced",
      levelBadge: "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      description:
        "Building dynamic spreadsheets with formulas (XLOOKUP, SUMIFS, IF), interactive Pivot Tables, clean document formatting, and polished presentation decks.",
      tags: ["Excel Formulas", "Pivot Tables", "Document Formatting", "Data Cleansing"],
      tools: ["MS Excel", "MS Word", "MS PowerPoint", "Data Validation"],
      icon: FileSpreadsheet,
      colorClass: "from-emerald-600 to-teal-500",
    },
    {
      name: "UI/UX Wireframing & Responsive Layouts",
      category: "tech",
      level: "Proficient",
      levelBadge: "bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      description:
        "Designing user journeys, wireframes, and responsive screen mockups focused on visual hierarchy, accessibility standards, and intuitive navigation.",
      tags: ["Wireframing", "User Flows", "Responsive Design", "Accessibility"],
      tools: ["Figma", "UI Mockups", "Component Hierarchy"],
      icon: Layout,
      colorClass: "from-purple-600 to-pink-500",
    },
    {
      name: "Web Fundamentals (HTML5/CSS3) & Python Scripting",
      category: "tech",
      level: "Practical Knowledge",
      levelBadge: "bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
      description:
        "Computer science fundamentals from EARIST: semantic HTML markup, styling adjustments, and Python scripts for data manipulation and task automation.",
      tags: ["Semantic HTML", "CSS Styling", "Python Logic", "Automation"],
      tools: ["HTML5", "CSS3", "Python 3", "Git Basics"],
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
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-[#091124] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            Capabilities & Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Skills & Competencies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A practical overview of my specializations, workflow disciplines, and software tools.
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
                    : "bg-white dark:bg-[#0e172e] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#172445] border border-slate-200/80 dark:border-[#1e2c4f]"
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
                className="rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-6 sm:p-7 transition-all duration-200 hover:shadow-md hover:border-blue-300 dark:hover:border-cyan-500/50 flex flex-col justify-between"
              >
                <div>
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
                          Practical Competency
                        </span>
                      </div>
                    </div>

                    {/* Level Badge */}
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap shrink-0 ${skill.levelBadge}`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Tags and Tools */}
                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-[#19274a]">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Tools & Methods:</span>
                    <span>{skill.tools.join(" • ")}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-50 dark:bg-[#101e3d] border border-slate-200/80 dark:border-[#1e2f59] text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
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
