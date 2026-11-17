"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Code2,
  Layers,
  Users2,
  GraduationCap,
  Briefcase,
  Globe,
  ArrowRight,
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
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#061226] via-[#091e42] to-[#040e22] text-white pt-20 pb-24 md:pt-24 md:pb-32">
        {/* Subtle geometric glowing background grids */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wider uppercase"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-spin-slow" />
                IT Services • Consulting • Staffing • Edutech
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
              >
                Technology Solutions for Businesses, Talent and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  Future-Ready Skills
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
              >
                End-to-end IT services, expert consulting, talent solutions and
                industry-focused training to help businesses and individuals grow
                in a digital-first world.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-3"
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all hover:scale-105 active:scale-95"
                >
                  Explore Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-xs transition-all hover:scale-105"
                >
                  Submit an Enquiry
                </Link>
              </motion.div>
            </div>

            {/* Right Hero Image Card (Building & Glass Overlay) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
                <Image
                  src="/images/hero-building.jpg"
                  alt="Innovexa Systems Modern Headquarters Building"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061226] via-[#061226]/20 to-transparent" />

                {/* Floating Glassmorphic Badge */}
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute top-4 right-4 bg-slate-950/75 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-right shadow-lg"
                >
                  <div className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                    Innovexa HQ
                  </div>
                  <div className="text-xs font-semibold text-white">
                    Bengaluru, India
                  </div>
                </motion.div>

                {/* Bottom Overlay Metric Bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md border border-white/15 rounded-xl p-3.5 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white text-sm">Enterprise Tech Hub</div>
                    <div className="text-[11px] text-slate-300">Consulting • Staffing • Edutech</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-600 text-white font-bold text-[10px] uppercase tracking-wider">
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2. AUDIENCE STATS BAR */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <FadeIn delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              {[
                { label: "Businesses", sub: "& Enterprises", icon: Users2, color: "text-blue-300 bg-blue-500/20" },
                { label: "Students", sub: "& Learners", icon: GraduationCap, color: "text-sky-300 bg-sky-500/20" },
                { label: "IT Professionals", sub: "& Job Seekers", icon: Briefcase, color: "text-indigo-300 bg-indigo-500/20" },
                { label: "Across India", sub: "& Global Markets", icon: Globe, color: "text-teal-300 bg-teal-500/20" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className={`p-2.5 rounded-xl ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{item.label}</div>
                    <div className="text-xs text-slate-300">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. ABOUT INNOVEXA SYSTEMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <FadeIn direction="left" className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
              About Innovexa Systems
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              Your Technology Partner for Growth and Opportunities
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Innovexa Systems is a multi-vertical technology company delivering
              IT services, consulting, staffing and technology education. We
              help businesses build, scale and optimize their technology, while
              also creating career and learning opportunities for students and
              professionals.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Know More About Us
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>

          {/* Middle / Reception Photo Card */}
          <FadeIn delay={0.2} className="lg:col-span-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <Image
                src="/images/office-reception.jpg"
                alt="Innovexa Systems Modern Office Reception Lobby"
                width={600}
                height={400}
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <div className="text-white">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">
                    Innovexa Tech Campus
                  </span>
                  <p className="text-xs font-semibold text-white">
                    Bengaluru Headquarters &amp; Learning Center
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Vision, Mission, Values */}
          <FadeIn direction="right" delay={0.3} className="lg:col-span-4 space-y-4">
            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:shadow-md transition-all space-y-1">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-xs">
                <Target className="w-4 h-4" />
                Our Vision
              </div>
              <p className="text-xs text-slate-600">
                Empower businesses and individuals through technology, talent and
                learning.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:shadow-md transition-all space-y-1">
              <div className="flex items-center gap-2 text-sky-600 font-bold text-xs">
                <TrendingUp className="w-4 h-4" />
                Our Mission
              </div>
              <p className="text-xs text-slate-600">
                Deliver practical, reliable and future-ready solutions that
                create real impact.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:shadow-md transition-all space-y-1">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs">
                <Award className="w-4 h-4" />
                Our Values
              </div>
              <p className="text-xs text-slate-600 font-medium">
                Integrity • Excellence • People-First Growth • Continuous
                Learning
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. OUR BUSINESS DIVISIONS (4 CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Our Business Divisions
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Comprehensive services structured to fulfill modern enterprise requirements and career aspirations.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Division 1: IT Services */}
          <StaggerItem>
            <div className="group rounded-2xl p-6 bg-gradient-to-b from-blue-50/80 to-white border border-blue-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
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
          </StaggerItem>

          {/* Division 2: IT Consulting */}
          <StaggerItem>
            <div className="group rounded-2xl p-6 bg-gradient-to-b from-indigo-50/80 to-white border border-indigo-100 hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
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
          </StaggerItem>

          {/* Division 3: IT Staffing & Recruitment */}
          <StaggerItem>
            <div className="group rounded-2xl p-6 bg-gradient-to-b from-teal-50/80 to-white border border-teal-100 hover:border-teal-300 hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  IT Staffing &amp; Recruitment
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
          </StaggerItem>

          {/* Division 4: Innovexa Edutech */}
          <StaggerItem>
            <div className="group rounded-2xl p-6 bg-gradient-to-b from-amber-50/80 to-white border border-amber-100 hover:border-amber-300 hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
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
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* 5. OUR KEY SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
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
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
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
            <StaggerItem key={idx}>
              <div className="flex flex-col items-center text-center p-4 rounded-xl border border-slate-100 bg-white hover:shadow-md hover:border-slate-200 transition-all group hover:-translate-y-1">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${item.color} group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 leading-tight">
                  {item.title}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 6. DUAL SECTION: OPEN POSITIONS & FEATURED COURSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Open Positions */}
          <FadeIn direction="left" className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
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
                    className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-blue-50/40 hover:border-blue-200 transition-all flex items-center justify-between group hover:shadow-xs"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {job.location} • {job.experience} • {job.workMode}
                      </p>
                    </div>
                    <Link
                      href={`/careers?apply=${job.id}`}
                      className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-xs group-hover:scale-105"
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
          </FadeIn>

          {/* Right: Featured Courses */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
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
                    className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-amber-50/30 hover:border-amber-200 transition-all flex flex-col justify-between group hover:shadow-xs"
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
          </FadeIn>
        </div>
      </section>

      {/* 7. UPCOMING BATCHES STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
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
                    className="px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 text-xs hover:bg-white/15 transition-colors"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-blue-900 font-bold text-xs hover:bg-blue-50 transition-all hover:scale-105 shrink-0"
              >
                View All Batches
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 8. WHY CHOOSE INNOVEXA SYSTEMS? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Why Choose Innovexa Systems?
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            A trusted partner for technology, talent and learning — delivering real value with a practical, industry-focused approach.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
            <StaggerItem key={idx}>
              <div className="p-5 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg transition-all text-center space-y-3 h-full flex flex-col items-center hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 9. BOTTOM BANNER (WITH TEAM PHOTO) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left: Collaboration Photo */}
            <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full relative overflow-hidden group">
              <Image
                src="/images/team-collaboration.jpg"
                alt="Innovexa Software Engineering Team"
                width={700}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-950/90 hidden lg:block" />
            </div>

            {/* Right: Content & CTAs */}
            <div className="lg:col-span-7 p-8 md:p-12 space-y-4">
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
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  Submit an Enquiry →
                </Link>
                <Link
                  href="/contact#direct"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all hover:scale-105"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
