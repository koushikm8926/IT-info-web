"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Code2,
  Cloud,
  Cpu,
  ShieldCheck,
  Smartphone,
  Palette,
  Server,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  BookOpen,
  Award,
  Users2,
  Laptop,
  PlayCircle,
  Briefcase,
  Send,
} from "lucide-react";
import { SITE_DATA } from "@/data/site-data";
import { HeroReveal } from "@/components/motion/HeroReveal";

export default function EdutechPage() {
  const [enrollModalCourse, setEnrollModalCourse] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <HeroReveal className="bg-gradient-to-b from-[#061737] via-[#092252] to-[#04122d] text-white pt-16 pb-24 md:pt-20 md:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-xs font-semibold text-blue-300">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            &gt; Innovexa Edutech
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                Innovexa Edutech
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Industry-Ready IT Training &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200">
                  Skill Development
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Upgrade your skills with practical, project-based training in
                high-demand IT and technology domains. Taught by enterprise
                practitioners with dedicated placement support.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#courses"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
                >
                  Explore Courses
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#journey"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <PlayCircle className="w-4 h-4" />
                  How We Train
                </a>
              </div>
            </div>

            {/* Glowing Laptop Edutech Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                <Image
                  src="/images/hero-edutech.jpg"
                  alt="Modern Interactive Coding Interface and Edutech Platform"
                  width={700}
                  height={500}
                  priority
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </HeroReveal>

      {/* 2. FEATURE STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Industry-Focused Curriculum", icon: BookOpen, color: "text-blue-600" },
              { label: "Hands-On Live Training", icon: Laptop, color: "text-sky-600" },
              { label: "Real-World Projects", icon: Code2, color: "text-indigo-600" },
              { label: "Expert Trainers", icon: Users2, color: "text-teal-600" },
              { label: "Certification Support", icon: Award, color: "text-amber-600" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-1.5"
              >
                <feature.icon className={`w-5 h-5 ${feature.color}`} />
                <span className="text-xs font-bold text-slate-800">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR TRAINING PROGRAMS (8 CARDS) */}
      <section id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Our Training Programs
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Comprehensive IT and technology training programs designed for students, job seekers and working professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Software Development",
              sub: "Java, Python, .NET, Node.js, Full Stack Development",
              icon: Code2,
              color: "text-blue-600 bg-blue-50",
            },
            {
              title: "Cloud & DevOps",
              sub: "AWS, Azure, Docker, Kubernetes, CI/CD",
              icon: Cloud,
              color: "text-sky-600 bg-sky-50",
            },
            {
              title: "Data & AI",
              sub: "Data Analytics, Data Science, Machine Learning, Generative AI",
              icon: Cpu,
              color: "text-purple-600 bg-purple-50",
            },
            {
              title: "Testing & QA",
              sub: "Manual Testing, Automation (Selenium), API Testing",
              icon: ShieldCheck,
              color: "text-emerald-600 bg-emerald-50",
            },
            {
              title: "Mobile App Development",
              sub: "Android (Kotlin), iOS (Swift), Cross-Platform (Flutter)",
              icon: Smartphone,
              color: "text-amber-600 bg-amber-50",
            },
            {
              title: "UI/UX & Product Design",
              sub: "UI/UX Design, Figma, Design Systems",
              icon: Palette,
              color: "text-rose-600 bg-rose-50",
            },
            {
              title: "IT Operations",
              sub: "DevOps, SRE, Infrastructure, Monitoring & Automation",
              icon: Server,
              color: "text-cyan-600 bg-cyan-50",
            },
            {
              title: "Emerging Technologies",
              sub: "AI Tools, Prompt Engineering, RPA, Low-Code / No-Code",
              icon: Sparkles,
              color: "text-indigo-600 bg-indigo-50",
            },
          ].map((prog, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-amber-300 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${prog.color} shadow-xs group-hover:scale-110 transition-transform`}
                >
                  <prog.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {prog.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {prog.sub}
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => setEnrollModalCourse(prog.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  Inquire Now
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OUR LEARNING JOURNEY */}
      <section id="journey" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Our Learning Journey
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            From Day 1 to placement: a clear path to high-value technical mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { step: "Enroll", desc: "Choose a course that fits your goal.", icon: BookOpen },
            { step: "Learn", desc: "Attend live / recorded sessions with experts.", icon: Laptop },
            { step: "Build", desc: "Work on practical projects & assignments.", icon: Code2 },
            { step: "Certify", desc: "Get course completion & skill certification.", icon: Award },
            { step: "Grow", desc: "Be job-ready for tech opportunities.", icon: Briefcase },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-100 bg-white hover:shadow-md transition-all text-center space-y-2"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 mx-auto flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">{item.step}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. UPCOMING BATCHES SECTION */}
      <section id="batches" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  Upcoming Batches Schedule
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Seats are limited per batch to maintain 1-on-1 mentor guidance
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SITE_DATA.upcomingBatches.map((batch) => (
              <div
                key={batch.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    Live Cohort
                  </span>
                  <h4 className="text-base font-bold text-slate-900">
                    {batch.courseTitle}
                  </h4>
                  <div className="text-xs text-slate-500 mt-2 space-y-1">
                    <div>📅 Starts: <strong className="text-slate-700">{batch.startDate}</strong></div>
                    <div>💻 Mode: <strong className="text-slate-700">{batch.mode}</strong></div>
                  </div>
                </div>

                <button
                  onClick={() => setEnrollModalCourse(batch.courseTitle)}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  Reserve My Seat →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE INNOVEXA EDUTECH? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Why Choose Innovexa Edutech?
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Everything you need to successfully transition into or advance in the software industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { title: "Industry-Relevant", desc: "Curriculum reviewed by tech leads" },
            { title: "Experienced Mentors", desc: "Trainers working at top tech firms" },
            { title: "Project-Based", desc: "Real GitHub repos & production apps" },
            { title: "Career Guidance", desc: "Resume building & mock technical interviews" },
            { title: "Placement Support", desc: "Direct tie-ups with staffing division" },
            { title: "Flexible Options", desc: "Weekend, weekday & self-paced modes" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-100 bg-white text-center space-y-1.5 shadow-xs"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
              <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
              <p className="text-[11px] text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. ENROLL MODAL */}
      {enrollModalCourse && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => {
                setEnrollModalCourse(null);
                setSubmitted(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg font-bold"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">
                  Inquiry Received!
                </h3>
                <p className="text-xs text-slate-500">
                  Our academic advisor will send the syllabus and fee details to
                  your contact.
                </p>
                <button
                  onClick={() => {
                    setEnrollModalCourse(null);
                    setSubmitted(false);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">
                    Course Inquiry
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {enrollModalCourse}
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Course Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
