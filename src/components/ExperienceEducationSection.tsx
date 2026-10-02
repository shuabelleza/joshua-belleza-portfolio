"use client";

import React, { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  Building2,
  BookOpen,
} from "lucide-react";

export function ExperienceEducationSection() {
  const [activeTab, setActiveTab] = useState<"both" | "experience" | "education">("both");

  const experiences = [
    {
      title: "Computer Science Student & Technical Freelancer",
      organization: "EARIST Cavite Campus / Independent Freelance",
      location: "Cavite, Philippines",
      period: "August 2023 — Present",
      type: "Academic & Freelance",
      badge: "Current",
      highlights: [
        "Applying computer science principles, data structures, and algorithmic logic to real-world technical problems.",
        "Executing manual software testing, functional verification, and defect logging for web and mobile software projects.",
        "Developing responsive web interfaces using HTML, CSS, JavaScript, and Python automation workflows.",
        "Providing freelancing services including UI/UX wireframing, data analysis, and advanced Excel modeling for diverse clients.",
      ],
    },
    {
      title: "Production Operator",
      organization: "JAE Philippines (Japan Aviation Electronics)",
      location: "Cavite, Philippines",
      period: "May 2022 — November 2022",
      type: "Industrial Precision Manufacturing",
      badge: "Completed",
      highlights: [
        "Enforced rigorous zero-defect quality control (QC) and quality assurance (QA) inspection protocols.",
        "Operated precision electronic component production lines adhering strictly to Standard Operating Procedures (SOPs).",
        "Conducted thorough visual and functional inspections, identifying micro-defects before packaging and shipment.",
        "Cultivated exceptional discipline, attention to detail, and process consistency that directly empowers modern software testing.",
      ],
    },
  ];

  const educations = [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: 'Eulogio "Amang" Rodriguez Institute of Science & Technology (EARIST)',
      campus: "Cavite Campus",
      period: "August 2023 — Present",
      status: "In Progress (Active)",
      badge: "Undergraduate",
      highlights: [
        "Major in Computer Science covering core curriculum: Software Engineering, Data Structures & Algorithms, Database Systems, and Object-Oriented Programming.",
        "Hands-on coursework in software testing, system analysis, web technologies, and computational logic.",
        "Consistent academic dedication with active focus on practical, industry-aligned freelance projects.",
      ],
    },
    {
      degree: "Senior High School — STEM Strand",
      institution: "Philippine Christian University Manila",
      campus: "Main Campus, Manila",
      period: "Senior High School Graduate",
      status: "Graduated",
      badge: "STEM Graduate",
      highlights: [
        "Science, Technology, Engineering, and Mathematics (STEM) academic strand.",
        "Developed solid foundations in analytical mathematics, computational thinking, and scientific research methodologies.",
        "Participated in group science and technology projects emphasizing teamwork, rigor, and presentation clarity.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-[#091124] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Background & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A track record of precision quality inspection, academic excellence in Computer Science,
            and commitment to high-standard execution.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 pt-3">
            <button
              onClick={() => setActiveTab("both")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === "both"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "bg-white dark:bg-[#0e172e] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#1e2c4f]"
              }`}
            >
              All Credentials
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === "experience"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "bg-white dark:bg-[#0e172e] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#1e2c4f]"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === "education"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "bg-white dark:bg-[#0e172e] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#1e2c4f]"
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Column 1: Experience */}
          {(activeTab === "both" || activeTab === "experience") && (
            <div className={`space-y-6 ${activeTab === "experience" ? "lg:col-span-2 max-w-4xl mx-auto" : ""}`}>
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-[#1e2c4f]">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-[#132247] text-blue-600 dark:text-cyan-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Work & Practical Experience
                </h3>
              </div>

              <div className="space-y-6">
                {experiences.map((item) => (
                  <div
                    key={item.title}
                    className="relative rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow space-y-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-[#132247] text-blue-700 dark:text-cyan-300 border border-blue-200/80 dark:border-[#1e3466] mb-1.5">
                          {item.badge}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h4>
                        <div className="text-sm font-semibold text-blue-600 dark:text-cyan-400 flex items-center gap-1.5 mt-0.5">
                          <Building2 className="w-4 h-4" />
                          <span>{item.organization}</span>
                        </div>
                      </div>

                      <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center justify-end gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#19274a]">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Column 2: Education */}
          {(activeTab === "both" || activeTab === "education") && (
            <div className={`space-y-6 ${activeTab === "education" ? "lg:col-span-2 max-w-4xl mx-auto" : ""}`}>
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-[#1e2c4f]">
                <div className="p-2 rounded-lg bg-indigo-100 dark:bg-[#132247] text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Academic Education
                </h3>
              </div>

              <div className="space-y-6">
                {educations.map((item) => (
                  <div
                    key={item.degree}
                    className="relative rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow space-y-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-[#132247] text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-[#243566] mb-1.5">
                          {item.badge}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          {item.degree}
                        </h4>
                        <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 mt-0.5">
                          <BookOpen className="w-4 h-4" />
                          <span>{item.institution}</span>
                        </div>
                      </div>

                      <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center justify-end gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{item.campus}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#19274a]">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

