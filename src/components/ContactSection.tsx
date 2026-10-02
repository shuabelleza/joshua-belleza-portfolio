"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Check,
  Copy,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [philippineTime, setPhilippineTime] = useState("");
  const [callBtnText, setCallBtnText] = useState("Call / Text");
  const [showNotice, setShowNotice] = useState(false);

  // Philippine Time (GMT+8)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setPhilippineTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleCallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const isPhone =
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      (window.matchMedia("(max-width: 768px)").matches &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0));

    if (isPhone) {
      window.location.href = "tel:09218869520";
    } else {
      setCallBtnText("Unavailable");
      setShowNotice(true);
      setTimeout(() => {
        setCallBtnText("Call / Text");
        setShowNotice(false);
      }, 2800);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-[#091124] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get in Touch With Me
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Have a project or need help with software testing, UI/UX design, or data work?
            Feel free to reach out to me directly!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Email */}
          <div className="rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-[#132247] text-blue-600 dark:text-cyan-400 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Email Me
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                You can email me anytime. I check my inbox daily and will reply quickly.
              </p>
              <div className="text-base font-semibold text-blue-600 dark:text-cyan-300 break-all pt-1">
                jmbelleza16@gmail.com
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-[#19274a]">
              <a
                href="mailto:jmbelleza16@gmail.com"
                className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                onClick={() => handleCopy("jmbelleza16@gmail.com", "email")}
                className="py-2.5 px-3.5 rounded-xl border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] hover:bg-slate-100 dark:hover:bg-[#152345] text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-1.5 text-xs sm:text-sm"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-[#132247] text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Call or Text Me
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                For urgent inquiries or fast questions, you can reach me directly by phone.
              </p>
              <div className="text-base font-semibold text-indigo-600 dark:text-cyan-300 pt-1">
                09218869520{" "}
                <span className="text-xs text-slate-400 font-normal">
                  (+63 921 886 9520)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-[#19274a] relative">
              <div className="flex-1 relative">
                <button
                  type="button"
                  onClick={handleCallClick}
                  className={`w-full py-2.5 px-4 rounded-xl text-white font-medium text-xs sm:text-sm text-center transition-all duration-200 flex items-center justify-center gap-1.5 ${
                    callBtnText === "Unavailable"
                      ? "bg-amber-600 hover:bg-amber-700"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                  title={callBtnText === "Unavailable" ? "Direct calling is only available on phones" : "Call / Text"}
                >
                  <Phone className="w-4 h-4" />
                  <span>{callBtnText}</span>
                </button>

                {showNotice && (
                  <div className="absolute bottom-full left-0 right-0 mb-2 p-2.5 rounded-xl bg-slate-900 text-white text-xs text-center shadow-2xl border border-slate-700 z-20 animate-fadeIn">
                    Calling is only supported on phones. You can copy <strong>09218869520</strong> or send an email instead!
                  </div>
                )}
              </div>

              <button
                onClick={() => handleCopy("09218869520", "phone")}
                className="py-2.5 px-3.5 rounded-xl border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] hover:bg-slate-100 dark:hover:bg-[#152345] text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-1.5 text-xs sm:text-sm"
                title="Copy Phone"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Location & Time Banner */}
        <div className="max-w-4xl mx-auto mt-6 rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-[#132247] text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Location
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Philippines (Available for Remote Work)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f] text-xs font-mono text-slate-700 dark:text-slate-300">
            <Clock className="w-3.5 h-3.5 text-blue-500" />
            <span>Manila Time: {philippineTime || "GMT+8"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

