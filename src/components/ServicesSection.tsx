"use client";

import React from "react";
import {
  CheckCircle,
  FileSpreadsheet,
  Layout,
  Search,
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
      tagline: "Prevent bugs, eliminate errors, and protect your brand's reputation.",
      badge: "High Demand",
      color: "from-blue-500 to-cyan-500",
      points: [
        "Comprehensive manual functional & sanity testing",
        "Detailed bug reporting with reproducible steps and screenshots",
        "Cross-browser and multi-device responsiveness audits",
        "Regression testing to verify new features don't break existing flows",
        "Rigorous verification of edge cases and input validation",
      ],
      deliverable: "Thorough QA Test Reports, Defect Logs & Actionable Bug Tickets",
    },
    {
      icon: Layout,
      title: "UI/UX Design & Usability Reviews",
      tagline: "Clean, intuitive user interfaces that engage and convert users.",
      badge: "User-Centered",
      color: "from-indigo-500 to-purple-500",
      points: [
        "Modern interface wireframing and user journey mapping",
        "Mobile-first, fully responsive design consultation",
        "Usability audits to identify friction points and drop-offs",
        "Clean aesthetic alignment with your brand identity",
        "Design consistency checks across screens and components",
      ],
      deliverable: "Interactive Prototypes, Design System Guidelines & UX Fixes",
    },
    {
      icon: FileSpreadsheet,
      title: "Microsoft Office Suite & Data Solutions",
      tagline: "Automate reports, organize data, and present like an executive.",
      badge: "Efficiency",
      color: "from-emerald-500 to-teal-500",
      points: [
        "Advanced Excel formulas (VLOOKUP, XLOOKUP, INDEX/MATCH, nested logic)",
        "Pivot tables, interactive dashboards, and data cleaning/formatting",
        "Professional PowerPoint decks tailored for client pitches and meetings",
        "Polished Word reports, contracts, and formal documentation",
        "Strict data verification to guarantee 100% accuracy",
      ],
      deliverable: "Dynamic Spreadsheets, Executive Decks & Formatted Documents",
    },
    {
      icon: Code,
      title: "Web Assistance & Python Scripting",
      tagline: "Reliable technical execution to bring web concepts to life.",
      badge: "Technical",
      color: "from-sky-500 to-blue-600",
      points: [
        "Semantic, accessible HTML & modern CSS/Tailwind structuring",
        "Landing page tweaks, bug fixes, and layout adjustments",
        "Python scripts for data processing, file handling, and automation",
        "Algorithmic problem-solving backed by Computer Science fundamentals",
        "Clean, well-commented code that is easy to maintain",
      ],
      deliverable: "Bug-Free Web Code, Automation Scripts & Rapid Tech Support",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50/50 dark:bg-[#091124] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Client Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How I Can Help Your Business
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Freelance services tailored for startups, agencies, and busy business owners who value
            accuracy, fast turnarounds, and zero-defect execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-7 sm:p-8 hover:border-blue-400 dark:hover:border-cyan-500/60 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar of Service Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-200`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#142347] text-slate-700 dark:text-cyan-300 border border-slate-200 dark:border-[#203666]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Key Capabilities */}
                  <ul className="space-y-2.5 mb-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverable Box & Action Button */}
                <div className="pt-5 border-t border-slate-100 dark:border-[#19274a] space-y-4">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Deliverable:{" "}
                    </span>
                    {service.deliverable}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400 group-hover:text-blue-700 dark:group-hover:text-cyan-300 hover:underline"
                  >
                    <span>Request this service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

