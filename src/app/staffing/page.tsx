"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users2,
  Briefcase,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Search,
  Building2,
  UserCheck,
  FileSignature,
  Send,
  PhoneCall,
} from "lucide-react";
import { SITE_DATA } from "@/data/site-data";
import { HeroReveal } from "@/components/motion/HeroReveal";

export default function StaffingPage() {
  const [hiringSubmitted, setHiringSubmitted] = useState(false);

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <HeroReveal className="bg-gradient-to-b from-[#061737] via-[#092252] to-[#04122d] text-white pt-16 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-xs font-semibold text-blue-300">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            &gt; IT Staffing & Recruitment
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              IT Staffing & Recruitment
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Hire the Right Talent.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                Build Stronger Teams.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              End-to-end IT staffing and recruitment solutions to help businesses
              find, hire and scale the right technology talent — quickly,
              efficiently and reliably.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#hiring-form"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all"
              >
                I&apos;m Hiring →
              </a>
              <Link
                href="/careers"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all"
              >
                I&apos;m Looking for a Job →
              </Link>
            </div>
          </div>
        </div>
      </HeroReveal>

      {/* 2. STATS & VALUE HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Access to Qualified Talent", icon: Users2, color: "text-blue-600" },
              { label: "Faster Hiring Turnaround", icon: Zap, color: "text-sky-600" },
              { label: "Flexible Engagement Models", icon: Briefcase, color: "text-indigo-600" },
              { label: "Industry & Tech Expertise", icon: ShieldCheck, color: "text-emerald-600" },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className={`p-3 rounded-xl bg-slate-50 border border-slate-100 ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR STAFFING SERVICES (6 CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Our Staffing Services
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Comprehensive talent solutions to meet your unique business and project needs — from short-term staffing to long-term hiring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "IT Recruitment & Candidate Sourcing",
              desc: "Identify and source the right technology professionals for specialized and strategic roles.",
              icon: Search,
            },
            {
              title: "Contract Staffing",
              desc: "Hire skilled talent for specific project durations, workload spikes, or niche skill requirements.",
              icon: Users2,
            },
            {
              title: "Contract-to-Hire (C2H)",
              desc: "Evaluate candidate performance and team fit on the job before converting them to a full-time role.",
              icon: UserCheck,
            },
            {
              title: "Permanent Recruitment",
              desc: "End-to-end recruitment for permanent, core positions across engineering and management.",
              icon: Building2,
            },
            {
              title: "Resource Augmentation",
              desc: "Extend your internal engineering team with specialized skills quickly, seamlessly, and flexibly.",
              icon: Zap,
            },
            {
              title: "Technical Talent Acquisition",
              desc: "Source hard-to-find and niche technology talent backed by our comprehensive technical screening.",
              icon: FileSignature,
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-md transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DUAL CALLOUT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: I'm Hiring */}
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/80 to-white p-8 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                I&apos;m Hiring
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Looking to build or scale your technology team? Share your
                requirements and our staffing specialists will connect you with
                pre-vetted engineers and leaders.
              </p>
            </div>
            <div>
              <a
                href="#hiring-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all"
              >
                Submit Hiring Requirement
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: I'm Looking for a Job */}
          <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/80 to-white p-8 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                I&apos;m Looking for a Job
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Explore exciting career opportunities across multiple technologies,
                projects, and domains at Innovexa Systems and partner enterprises.
              </p>
            </div>
            <div>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all"
              >
                View Open Positions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR HIRING PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Our Hiring Process
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            A transparent and structured 4-step pipeline ensuring fast placement and high retention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Understand", desc: "Capture your exact hiring needs, project roadmap, and skill requirements." },
            { step: "02", title: "Source & Shortlist", desc: "Identify, pre-screen, and technically shortlist the best candidates." },
            { step: "03", title: "Interview & Select", desc: "Coordinate technical rounds and support your candidate selection." },
            { step: "04", title: "Onboard & Support", desc: "Ensure smooth onboarding and provide ongoing operational check-ins." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-100 bg-white shadow-xs space-y-3"
            >
              <span className="text-xs font-black text-blue-600 tracking-widest uppercase">
                Step {item.step}
              </span>
              <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. HIRING REQUIREMENT FORM */}
      <section id="hiring-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Staffing Solutions
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                Let&apos;s Build Your Dream Team
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Share your hiring requirements and get the right talent, faster. Our recruitment specialists will review your candidate specifications immediately.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xl">
              {hiringSubmitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Hiring Requirement Received!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Our lead recruiter will contact you shortly with candidate
                    profiles matching your criteria.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setHiringSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Hiring Manager / Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter company name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Staffing Model *
                      </label>
                      <select
                        required
                        defaultValue=""
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none bg-white"
                      >
                        <option value="" disabled>Select model</option>
                        <option value="contract">Contract Staffing</option>
                        <option value="c2h">Contract-to-Hire (C2H)</option>
                        <option value="permanent">Permanent Hiring</option>
                        <option value="augmentation">Team Augmentation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Role & Skill Requirements *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="e.g. 2x Java Spring Boot developers (3+ yrs), 1x DevOps Engineer..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Hiring Requirement
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
