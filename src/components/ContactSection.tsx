"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  Copy,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Quality Assurance & Software Testing",
    budget: "$100 - $500",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [philippineTime, setPhilippineTime] = useState("");

  // Update Philippine Time (GMT+8)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link with pre-filled contents
    const subject = encodeURIComponent(`[Client Inquiry] ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Joshua,\n\nMy name is ${formData.name} (${formData.email}).\n\nI would like to inquire about your services:\nService: ${formData.service}\nBudget Range: ${formData.budget}\n\nProject Details:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:jmbelleza16@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-[#091124] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Whether you need comprehensive QA testing, UI/UX mockups, data spreadsheet modeling,
            or web assistance, I am ready to deliver high quality results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-7 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Feel free to reach out directly via email, phone, or by submitting the inquiry form.
                I respond promptly to all client requests.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-[#132247] text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Email Address
                      </div>
                      <a
                        href="mailto:jmbelleza16@gmail.com"
                        className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-300 break-all transition-colors"
                      >
                        jmbelleza16@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy("jmbelleza16@gmail.com", "email")}
                    className="p-2 rounded-lg bg-white dark:bg-[#152345] border border-slate-200 dark:border-[#203666] text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-[#132247] text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Phone / Mobile
                      </div>
                      <a
                        href="tel:09218869520"
                        className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-300 transition-colors"
                      >
                        09218869520
                      </a>
                      <div className="text-[11px] text-slate-400">
                        Intl: +63 921 886 9520
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy("09218869520", "phone")}
                    className="p-2 rounded-lg bg-white dark:bg-[#152345] border border-slate-200 dark:border-[#203666] text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-[#132247] text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Location
                      </div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        Philippines
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Open for remote global contracts
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                      <Clock className="w-3 h-3" />
                      <span>GMT+8</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {philippineTime || "16:00:00"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Commitment Guarantee */}
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-[#101e3f] border border-blue-200/80 dark:border-[#1e3466] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong className="text-slate-900 dark:text-white block mb-0.5">
                    100% Client Satisfaction Guarantee
                  </strong>
                  Thorough documentation, bug reproduction steps, and free revisions to ensure your
                  expectations are fully satisfied.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Client Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-7 sm:p-9 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Project Inquiry
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                Tell me about your project, timeline, or requirements. I will review and reply with
                an actionable proposal.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Inquiry Prepared!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Your email client has been opened with your inquiry pre-filled to{" "}
                    <strong>jmbelleza16@gmail.com</strong>. You can also reach out directly anytime!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Client Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                        Your Name / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan / Acme Corp"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Client Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Quality Assurance & Software Testing">
                          Quality Assurance & Software Testing
                        </option>
                        <option value="UI/UX Design & Prototyping">
                          UI/UX Design & Prototyping
                        </option>
                        <option value="Microsoft Office & Data Analysis">
                          Microsoft Office & Data Analysis
                        </option>
                        <option value="Web Assistance & Python Scripting">
                          Web Assistance & Python Scripting
                        </option>
                        <option value="General Freelance Project">General Freelance Project</option>
                      </select>
                    </div>

                    {/* Budget / Scope */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                        Estimated Budget / Scope
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Hourly Consultation">Hourly / Quick Task</option>
                        <option value="Under $200">Small Project (Under $200 / ₱10,000)</option>
                        <option value="$200 - $500">Medium Project ($200 - $500 / ₱10k - ₱25k)</option>
                        <option value="$500+">Long-term Contract / $500+</option>
                        <option value="To be discussed">To be discussed</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                      Project Details & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you need tested, designed, formatted, or built..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-gradient-to-r dark:from-blue-600 dark:to-indigo-600 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2 group active:scale-[0.99]"
                  >
                    <span>Submit Inquiry Directly</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-[11px] text-slate-400 dark:text-slate-400 pt-1">
                    Direct inquiries go to jmbelleza16@gmail.com • No spam guarantee
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

