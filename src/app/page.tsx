"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  Layers,
  Users2,
  GraduationCap,
  Briefcase,
  Globe,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Cloud,
  Cpu,
  Smartphone,
  ShieldCheck,
  Headphones,
  Sparkles,
  TrendingUp,
  Target,
  Award,
  ChevronRight,
} from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#061737] via-[#092252] to-[#04122d] text-white pt-16 pb-24 md:pt-24 md:pb-32">
        {/* Subtle geometric glowing background grids */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                IT Services • Consulting • Staffing • Edutech
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Technology Solutions for Businesses, Talent and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  Future-Ready Skills
                </span>
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                End-to-end IT services, expert consulting, talent solutions and
                industry-focused training to help businesses and individuals grow
                in a digital-first world.
              </p>

              <div className="flex flex-wrap gap-4 pt-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all active:scale-95"
                >
                  Explore Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-xs transition-all"
                >
                  Submit an Enquiry
                </Link>
              </div>
            </div>

            {/* Right Hero Graphic Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md shadow-2xl p-6 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono">innovexasystems.in</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-blue-300 font-semibold uppercase">Enterprise Capability</div>
                      <div className="text-sm font-bold text-white">Full-Spectrum IT & Talent Delivery</div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500 text-white font-semibold">Active</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10">
                      <div className="text-2xl font-black text-blue-400">99.8%</div>
                      <div className="text-xs text-slate-300">Project Delivery Rate</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10">
                      <div className="text-2xl font-black text-sky-400">500+</div>
                      <div className="text-xs text-slate-300">Talent Placed & Trained</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Next Edutech Cohort Starting Soon</div>
                      <div className="text-[11px] text-slate-300">Java, Python & DevOps Masterclasses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. AUDIENCE STATS BAR */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
            <div className="flex items-center gap-3 p-3">
              <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-300">
                <Users2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Businesses</div>
                <div className="text-xs text-slate-300">& Enterprises</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3">
              <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Students</div>
                <div className="text-xs text-slate-300">& Learners</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">IT Professionals</div>
                <div className="text-xs text-slate-300">& Job Seekers</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3">
              <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-300">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Across India</div>
                <div className="text-xs text-slate-300">& Global Markets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT INNOVEXA SYSTEMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
              About Innovexa Systems
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              Your Technology Partner for Growth and Opportunities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Innovexa Systems is a multi-vertical technology company delivering
              IT services, consulting, staffing and technology education. We
              help businesses build, scale and optimize their technology, while
              also creating career and learning opportunities for students and
              professionals.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Know More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Middle / Reception Card */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-gradient-to-tr from-slate-900 to-blue-950 p-6 text-white text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 mx-auto flex items-center justify-center shadow-lg">
                <span className="font-black text-2xl tracking-wider">IX</span>
              </div>
              <div>
                <h3 className="text-lg font-black tracking-wide">INNOVEXA</h3>
                <span className="text-xs text-blue-400 font-semibold tracking-widest uppercase">
                  HEADQUARTERS
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Bengaluru, Karnataka, India • Serving Clients Nationwide & Internationally
              </p>
            </div>
          </div>

          {/* Right Column: Vision, Mission, Values */}
          <div className="lg:col-span-4 space-y-5">
            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:shadow-md transition-all space-y-1">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                <Target className="w-4 h-4" />
                Our Vision
              </div>
              <p className="text-xs text-slate-600">
                Empower businesses and individuals through technology, talent and
                learning.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:shadow-md transition-all space-y-1">
              <div className="flex items-center gap-2 text-sky-600 font-bold text-sm">
                <TrendingUp className="w-4 h-4" />
                Our Mission
              </div>
              <p className="text-xs text-slate-600">
                Deliver practical, reliable and future-ready solutions that
                create real impact.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:shadow-md transition-all space-y-1">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                <Award className="w-4 h-4" />
                Our Values
              </div>
              <p className="text-xs text-slate-600 font-medium">
                Integrity • Excellence • People-First Growth • Continuous
                Learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR BUSINESS DIVISIONS (4 CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Our Business Divisions
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Comprehensive services structured to fulfill modern enterprise requirements and career aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Division 1: IT Services */}
          <div className="group rounded-2xl p-6 bg-gradient-to-b from-blue-50/80 to-white border border-blue-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                IT Services
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                End-to-end technology development, implementation and support to
                build scalable business solutions.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700"
              >
                Explore IT Services
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Division 2: IT Consulting */}
          <div className="group rounded-2xl p-6 bg-gradient-to-b from-indigo-50/80 to-white border border-indigo-100 hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                IT Consulting
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expert technology advisory and strategic consulting to solve
                complex business challenges.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/consulting"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 group-hover:text-indigo-700"
              >
                Explore Consulting
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Division 3: IT Staffing & Recruitment */}
          <div className="group rounded-2xl p-6 bg-gradient-to-b from-teal-50/80 to-white border border-teal-100 hover:border-teal-300 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-md">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                IT Staffing & Recruitment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Right talent, at the right time. Comprehensive IT hiring and
                resource solutions for businesses.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/staffing"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 group-hover:text-teal-700"
              >
                Explore Staffing
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Division 4: Innovexa Edutech */}
          <div className="group rounded-2xl p-6 bg-gradient-to-b from-amber-50/80 to-white border border-amber-100 hover:border-amber-300 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                Innovexa Edutech
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quality education, technology training and skill development for
                students and professionals.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/edutech"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:text-amber-700"
              >
                Explore Edutech
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR KEY SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Our Key Services
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              End-to-end technology implementation across modern platforms
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {[
            { icon: Code2, title: "Custom Software", color: "text-blue-600 bg-blue-50" },
            { icon: Smartphone, title: "Web & Mobile Apps", color: "text-sky-600 bg-sky-50" },
            { icon: Cloud, title: "Cloud Services", color: "text-indigo-600 bg-indigo-50" },
            { icon: Layers, title: "DevOps & CI/CD", color: "text-teal-600 bg-teal-50" },
            { icon: Cpu, title: "AI & Automation", color: "text-purple-600 bg-purple-50" },
            { icon: ShieldCheck, title: "Software Testing", color: "text-rose-600 bg-rose-50" },
            { icon: Layers, title: "IT Consulting", color: "text-cyan-600 bg-cyan-50" },
            { icon: Users2, title: "Talent Sourcing", color: "text-amber-600 bg-amber-50" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-slate-100 bg-white hover:shadow-md hover:border-slate-200 transition-all group"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${item.color} group-hover:scale-110 transition-transform`}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-800 leading-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. DUAL SECTION: OPEN POSITIONS & FEATURED COURSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Open Positions */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Open Positions
                  </h3>
                </div>
                <Link
                  href="/careers"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  View All Jobs
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-3">
                {SITE_DATA.jobs.slice(0, 3).map((job) => (
                  <div
                    key={job.id}
                    className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-blue-50/40 hover:border-blue-200 transition-all flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {job.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {job.location} • {job.experience} • {job.workMode}
                      </p>
                    </div>
                    <Link
                      href={`/careers?apply=${job.id}`}
                      className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-xs"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>Hiring across multiple engineering verticals</span>
              <Link href="/careers" className="font-semibold text-blue-600">
                Explore Careers →
              </Link>
            </div>
          </div>

          {/* Right: Featured Courses */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Featured Courses
                  </h3>
                </div>
                <Link
                  href="/edutech"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  View All Courses
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SITE_DATA.courses.slice(0, 4).map((course) => (
                  <div
                    key={course.id}
                    className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-amber-50/30 hover:border-amber-200 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1">
                        {course.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        {course.duration} • {course.mode}
                      </p>
                    </div>
                    <div className="pt-3 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-emerald-600">
                        Live Projects Included
                      </span>
                      <Link
                        href="/edutech"
                        className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        Enroll →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>Project-based training with placement assistance</span>
              <Link href="/edutech" className="font-semibold text-amber-600">
                Course Catalog →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. UPCOMING BATCHES STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white p-6 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs text-white">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black tracking-tight">
                  Upcoming Batches
                </h3>
                <p className="text-xs text-blue-200">
                  Secure your seat in the upcoming interactive training cohorts
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
              {SITE_DATA.upcomingBatches.map((batch) => (
                <div
                  key={batch.id}
                  className="px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 text-xs"
                >
                  <div className="font-bold text-white">{batch.courseTitle}</div>
                  <div className="text-blue-200 text-[11px]">
                    Starts: {batch.startDate}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/edutech#batches"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-blue-900 font-bold text-xs hover:bg-blue-50 transition-colors shrink-0"
            >
              View All Batches
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE INNOVEXA SYSTEMS? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Why Choose Innovexa Systems?
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            A trusted partner for technology, talent and learning — delivering real value with a practical, industry-focused approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Multi-Vertical Expertise",
              desc: "Services, consulting, talent and training under one unified roof.",
              icon: Layers,
            },
            {
              title: "Industry Experienced Team",
              desc: "Skilled professionals with real-world enterprise experience.",
              icon: Users2,
            },
            {
              title: "Scalable & Flexible Solutions",
              desc: "Tailored to your business and learning goals as you grow.",
              icon: TrendingUp,
            },
            {
              title: "Outcome Focused",
              desc: "Measurable results, predictable velocity, and long-term value.",
              icon: Target,
            },
            {
              title: "End-to-End Support",
              desc: "From planning and architecture to delivery and beyond.",
              icon: Headphones,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg transition-all text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. BOTTOM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white p-8 md:p-12 relative shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Let&apos;s Discuss Your Requirements
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Whether it&apos;s a technology project, consulting need, hiring
              requirement or a training program — we&apos;re here to help.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all"
              >
                Submit an Enquiry
              </Link>
              <Link
                href="/contact#direct"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
