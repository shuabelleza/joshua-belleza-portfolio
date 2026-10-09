"use client";

import React, { useState } from "react";
import {
  FolderGit2,
  ShieldCheck,
  Layout,
  FileSpreadsheet,
  Code2,
  CheckCircle2,
  Layers,
  ArrowUpRight,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "qa" | "design" | "office" | "dev";
  categoryLabel: string;
  badgeColor: string;
  icon: React.ComponentType<{ className?: string }>;
  metric: string;
  summary: string;
  highlights: string[];
  deliverables: string;
  tools: string[];
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "qa" | "design" | "office" | "dev">("all");

  const projects: ProjectItem[] = [
    {
      id: "qa-testing",
      title: "Comprehensive Web & Mobile QA Test Suite",
      category: "qa",
      categoryLabel: "Quality Assurance",
      badgeColor: "bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-cyan-300 border-blue-200 dark:border-blue-800",
      icon: ShieldCheck,
      metric: "40+ Test Cases • Zero-Defect Re-test",
      summary:
        "Comprehensive manual functional testing, regression testing, and cross-browser validation across desktop and mobile devices. Documented every defect with clear reproduction steps and severity levels.",
      highlights: [
        "Tested input forms, checkout flows, edge cases, and authentication mechanisms.",
        "Verified responsive behavior across Chrome, Edge, Safari, Android, and iOS.",
        "Cataloged bug tickets with exact steps, screenshots, expected vs. actual outcomes.",
      ],
      deliverables: "Structured Test Plan, Defect Log Spreadsheet & Verification Sign-off",
      tools: ["Manual Testing", "Test Matrix", "Chrome DevTools", "Bug Reporting", "Mobile QA"],
    },
    {
      id: "uiux-design",
      title: "Responsive Client Portal & Service Flow Wireframes",
      category: "design",
      categoryLabel: "UI/UX Design",
      badgeColor: "bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      icon: Layout,
      metric: "Accessible Layouts • High Conversion",
      summary:
        "User experience wireframes and interface design crafted to maximize clarity, ease of navigation, and visual appeal for modern web and mobile applications.",
      highlights: [
        "Mapped intuitive user flows and low-to-high fidelity wireframes.",
        "Applied WCAG AA color contrast standards and responsive mobile grids.",
        "Designed clear visual hierarchy to guide prospective customers to key CTAs.",
      ],
      deliverables: "Responsive Wireframe Layouts, Usability Notes & Component Styles",
      tools: ["Figma", "Wireframing", "UI Prototyping", "Mobile-First", "User Flows"],
    },
    {
      id: "office-excel",
      title: "Automated Inventory & Expense Management Dashboard",
      category: "office",
      categoryLabel: "Microsoft Office",
      badgeColor: "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      icon: FileSpreadsheet,
      metric: "Automated Formulas • Pivot Reports",
      summary:
        "Structured multi-sheet Excel workbook designed for clean data entry, automated calculations, error-prevention validation, and instant summary reporting.",
      highlights: [
        "Implemented XLOOKUP, INDEX/MATCH, SUMIFS, and nested logic formulas.",
        "Built dynamic Pivot Tables and interactive slicers for instant insights.",
        "Created professional, print-ready Word summaries and presentation-ready slides.",
      ],
      deliverables: "Formulated Excel Workbook, Polished Word Reports & Slide Decks",
      tools: ["MS Excel", "Pivot Tables", "Formulas", "MS Word", "MS PowerPoint", "Data Entry"],
    },
    {
      id: "dev-scripting",
      title: "Semantic Front-End Layout & Python Data Automation",
      category: "dev",
      categoryLabel: "Development & Scripts",
      badgeColor: "bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
      icon: Code2,
      metric: "Fast Performance • Clean Scripts",
      summary:
        "Semantic, lightweight HTML/CSS web page structures and Python utility scripts to automate repetitive text and tabular data formatting tasks.",
      highlights: [
        "Clean, semantic HTML5 structure with modern, mobile-friendly CSS styling.",
        "Python script to batch-process, clean, and format raw records into tidy CSV tables.",
        "Fast-loading, accessible code written adhering to web development standards.",
      ],
      deliverables: "Semantic Source Code, Python Processing Script & Clean Data Files",
      tools: ["HTML5", "CSS3", "Python 3", "Data Formatting", "Scripting"],
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const tabs: { label: string; value: "all" | "qa" | "design" | "office" | "dev" }[] = [
    { label: "All Samples", value: "all" },
    { label: "QA & Testing", value: "qa" },
    { label: "UI/UX Design", value: "design" },
    { label: "Office & Excel", value: "office" },
    { label: "Development", value: "dev" },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#070d1e] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            Proof of Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Work & Sample Deliverables
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real examples of how I organize, test, design, and deliver client projects with care and precision.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.value
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 dark:bg-[#0e172e] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#172445] border border-slate-200/80 dark:border-[#1e2c4f]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-slate-50/70 dark:bg-[#0c1630] border border-slate-200/80 dark:border-[#1e2e56] p-7 sm:p-8 hover:border-blue-400 dark:hover:border-cyan-500/60 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-[#132247] text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span
                          className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}
                        >
                          {project.categoryLabel}
                        </span>
                        <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{project.metric}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Execution Highlights:</span>
                    </div>
                    {project.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 mt-2 shrink-0"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Deliverables & CTA */}
                <div className="pt-5 border-t border-slate-200/60 dark:border-[#19274a] space-y-4">
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-white font-semibold">
                      Sample Deliverables:{" "}
                    </strong>
                    {project.deliverables}
                  </div>

                  {/* Tools / Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white dark:bg-[#101e3d] border border-slate-200 dark:border-[#1e2f59] text-slate-700 dark:text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Inquire Button */}
                  <div className="pt-1">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Inquire about this kind of work</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
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
