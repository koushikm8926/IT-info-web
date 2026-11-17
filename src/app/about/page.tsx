"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Layers,
  Users2,
  GraduationCap,
  Target,
  TrendingUp,
  Award,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Search,
  PenTool,
  Send,
  Zap,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#061737] via-[#092252] to-[#04122d] text-white pt-16 pb-24 md:pt-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-xs font-semibold text-blue-300">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            &gt; About Us
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                About Us
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                A technology company delivering IT services, consulting, talent
                solutions and quality education to build a future-ready workforce.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src="/images/hero-building.jpg"
                  alt="Innovexa Systems Modern Headquarters"
                  width={600}
                  height={400}
                  priority
                  className="w-full h-64 sm:h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR COMPANY OVERVIEW & 4 DIVISIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-lg space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Our Company
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Innovexa Systems
              </h2>
              <div className="text-sm font-semibold text-blue-600">
                Your Requirements. Our Solutions.
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Innovexa Systems is a multi-vertical technology company that
                brings together technology services, strategic consulting, IT
                staffing and industry-focused education under one roof. We help
                businesses build reliable, scalable and efficient technology
                solutions, support their talent needs and enable continuous
                learning for students and professionals.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 space-y-2">
                <Code2 className="w-6 h-6 text-blue-600" />
                <h4 className="text-sm font-bold text-slate-900">IT Services</h4>
                <p className="text-xs text-slate-500">
                  Build, modernize and scale technology solutions.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 space-y-2">
                <Layers className="w-6 h-6 text-indigo-600" />
                <h4 className="text-sm font-bold text-slate-900">IT Consulting</h4>
                <p className="text-xs text-slate-500">
                  Expert advisory for better business outcomes.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 space-y-2">
                <Users2 className="w-6 h-6 text-teal-600" />
                <h4 className="text-sm font-bold text-slate-900">
                  IT Staffing & Recruitment
                </h4>
                <p className="text-xs text-slate-500">
                  Right talent for your business needs.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 space-y-2">
                <GraduationCap className="w-6 h-6 text-amber-600" />
                <h4 className="text-sm font-bold text-slate-900">
                  Innovexa Edutech
                </h4>
                <p className="text-xs text-slate-500">
                  Quality education and industry-ready tech training.
                </p>
              </div>
            </div>
          </div>

          {/* Vision, Mission, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">Our Vision</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Empower businesses and individuals through technology, talent
                  and learning.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-sky-50 text-sky-600 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">Our Mission</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Deliver practical, reliable and future-ready solutions that
                  create real impact.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">Our Values</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Integrity • Excellence • People-First Growth • Continuous
                  Learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPANY HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Company Highlights
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Multi-Vertical Business", icon: Calendar },
            { label: "Technology & Talent Expertise", icon: Layers },
            { label: "Education & Training Focus", icon: GraduationCap },
            { label: "Scalable & Future-Ready", icon: TrendingUp },
            { label: "Business & Student-Centric", icon: Users2 },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-100 bg-white hover:shadow-md transition-all text-center space-y-2"
            >
              <item.icon className="w-6 h-6 text-blue-600 mx-auto" />
              <h4 className="text-xs font-bold text-slate-800">{item.label}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                What We Do
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We deliver end-to-end technology, consulting, staffing and
                learning solutions across industries, helping businesses,
                professionals and students achieve their goals.
              </p>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/images/office-reception.jpg"
                  alt="Innovexa Systems Modern Office"
                  width={600}
                  height={350}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {[
                "Develop and deliver customized technology solutions.",
                "Provide strategic consulting for digital growth and transformation.",
                "Source and build high-performing IT teams for businesses.",
                "Offer quality education and industry-aligned technology training.",
                "Support long-term success through reliable services and continuous learning.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Our Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "Understand", desc: "Analyze your requirements and define clear objectives.", icon: Search },
            { step: "Plan", desc: "Design the right solution and engagement model.", icon: PenTool },
            { step: "Deliver", desc: "Execute with quality, agility and transparency.", icon: Code2 },
            { step: "Grow", desc: "Enable long-term value and continuous improvement.", icon: TrendingUp },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-md transition-all text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">{item.step}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-black tracking-tight">
              Let&apos;s Build Something Meaningful Together
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Whether you need technology solutions, consulting support, IT talent or quality training, we&apos;re here to help.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all shrink-0"
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </div>
  );
}
