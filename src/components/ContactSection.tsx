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
  Send,
  CheckCircle2,
} from "lucide-react";

// Micro-component for Philippine time to isolate 1-second ticker updates
function LiveManilaClock() {
  const [philippineTime, setPhilippineTime] = useState("");

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

  return (
    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-[#0e172e] border border-slate-200/80 dark:border-[#1e2c4f] text-xs font-mono text-slate-700 dark:text-slate-300">
      <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
      <span>Manila Time: {philippineTime || "GMT+8"}</span>
    </div>
  );
}

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "qa",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate sending with clean client feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-[#091124] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-[#132247] text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Need help with software testing, UI/UX wireframes, or data organization in Microsoft Excel?
            Send me a message below or reach out directly!
          </p>
        </div>

        {/* 2-Column Layout: Direct Details on Left, Message Form on Right */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-6 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-[#132247] text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Email Address
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Fast response within 24 hours
                  </p>
                </div>
              </div>

              <div className="text-sm font-semibold text-blue-600 dark:text-cyan-300 break-all">
                jmbelleza16@gmail.com
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-[#19274a]">
                <a
                  href="mailto:jmbelleza16@gmail.com"
                  className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs text-center transition-colors flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy("jmbelleza16@gmail.com", "email")}
                  className="py-2 px-3 rounded-xl border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] hover:bg-slate-100 dark:hover:bg-[#152345] text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-1.5 text-xs font-medium focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-6 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-100 dark:bg-[#132247] text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Phone & SMS
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Direct call or text message
                  </p>
                </div>
              </div>

              <div className="text-sm font-semibold text-indigo-600 dark:text-cyan-300">
                09218869520 <span className="text-xs text-slate-400 font-normal">(+63 921 886 9520)</span>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-[#19274a]">
                <a
                  href="tel:09218869520"
                  className="flex-1 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs text-center transition-colors flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                  title="Call via phone or desktop dialer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call / Text</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy("09218869520", "phone")}
                  className="py-2 px-3 rounded-xl border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] hover:bg-slate-100 dark:hover:bg-[#152345] text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-1.5 text-xs font-medium focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Time Card */}
            <div className="rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                  <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Cavite, Philippines • Remote Ready</span>
                </div>
              </div>
              <LiveManilaClock />
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-[#0c1630] border border-slate-200 dark:border-[#1e2e56] p-7 sm:p-8 shadow-md">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Thank You, {formData.name || "Friend"}!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message has been prepared! You can also email me directly at{" "}
                    <strong className="text-blue-600 dark:text-cyan-400">jmbelleza16@gmail.com</strong>.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:jmbelleza16@gmail.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                      className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm transition-colors flex items-center gap-1.5"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open Pre-filled Email</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", service: "qa", message: "" });
                      }}
                      className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-[#1e2c4f] bg-slate-50 dark:bg-[#0e172e] text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium hover:bg-slate-100 dark:hover:bg-[#152345] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Send a Message
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Fill out the form below and I&apos;ll get back to you promptly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0e172e] border border-slate-200 dark:border-[#1e2c4f] text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0e172e] border border-slate-200 dark:border-[#1e2c4f] text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Service You Need
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0e172e] border border-slate-200 dark:border-[#1e2c4f] text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="qa">Software Testing & Quality Assurance</option>
                      <option value="design">UI/UX Wireframing & Design</option>
                      <option value="office">Microsoft Office Suite & Data Work</option>
                      <option value="dev">Basic Web (HTML) & Python Automation</option>
                      <option value="other">General Freelance Inquiries</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Project Details or Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, deadlines, or requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0e172e] border border-slate-200 dark:border-[#1e2c4f] text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? "Sending..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
