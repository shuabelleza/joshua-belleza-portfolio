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
      title: "Computer Science Student & Freelancer",
      organization: "EARIST Cavite Campus / Freelance",
      location: "Cavite, Philippines",
      period: "August 2023 — Present",
      badge: "Current",
      highlights: [
        "Studying Computer Science while offering freelance testing, design, and office services.",
        "Performing manual testing on websites and mobile applications to find bugs.",
        "Creating simple UI/UX layouts and helping clients with data organization in Excel.",
        "Applying programming logic and web standards to solve client tasks.",
      ],
    },
    {
      title: "Production Operator",
      organization: "JAE Philippines",
      location: "Cavite, Philippines",
      period: "May 2022 — November 2022",
      badge: "Completed",
      highlights: [
        "Inspected precision electronic parts following strict quality control standards.",
        "Followed Standard Operating Procedures (SOPs) carefully to ensure zero defects.",
        "Checked components for tiny flaws before packing and delivery.",
        "Developed strong patience, discipline, and attention to detail that I use in tech work today.",
      ],
    },
  ];

  const educations = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: 'Eulogio "Amang" Rodriguez Institute of Science & Technology (EARIST)',
      campus: "Cavite Campus",
      period: "August 2023 — Present",
      badge: "College (Ongoing)",
      highlights: [
        "Major in Computer Science learning software development, testing, and web systems.",
        "Hands-on practice in programming, database basics, and problem-solving.",
        "Applying classroom learning directly into practical freelance projects.",
      ],
    },
    {
      degree: "Senior High School — STEM Strand",
      institution: "Philippine Christian University Manila",
      campus: "Manila Campus",
      period: "Senior High School",
      badge: "STEM Graduate",
      highlights: [
        "Completed the Science, Technology, Engineering, and Mathematics (STEM) strand.",
        "Built good foundation in math, logical reasoning, and computer basics.",
        "Participated in collaborative science and technology projects.",
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
            Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Experience & Education
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A look at my work experience and educational background.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 pt-3">
            <button
              onClick={() => setActiveTab("both")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === "both"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white dark:bg-[#0e172e] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#1e2c4f]"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === "experience"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white dark:bg-[#0e172e] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#1e2c4f]"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === "education"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white dark:bg-[#0e172e] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#1e2c4f]"
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Column 1: Experience */}
          {(activeTab === "both" || activeTab === "experience") && (
            <div className={`space-y-6 ${activeTab === "experience" ? "lg:col-span-2 max-w-4xl mx-auto" : ""}`}>
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-[#1e2c4f]">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-[#132247] text-blue-600 dark:text-cyan-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Experience
                </h3>
              </div>

              <div className="space-y-6">
                {experiences.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-6 sm:p-7 shadow-sm space-y-4"
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

                      <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 sm:text-right">
                        <div className="flex items-center sm:justify-end gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center sm:justify-end gap-1">
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
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {educations.map((item) => (
                  <div
                    key={item.degree}
                    className="rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-6 sm:p-7 shadow-sm space-y-4"
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

                      <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 sm:text-right">
                        <div className="flex items-center sm:justify-end gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center sm:justify-end gap-1">
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

