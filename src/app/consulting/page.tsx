"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Layers,
  RefreshCw,
  TrendingUp,
  Brain,
  Cloud,
  Workflow,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Send,
  Target,
  FileCheck,
  Users2,
  Award,
} from "lucide-react";

export default function ConsultingPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const tabs = [
    {
      title: "Technology Strategy",
      heading: "Technology Strategy & Enterprise Roadmaps",
      description:
        "We help you define a clear and actionable technology strategy that aligns with your business objectives, market priorities, and growth plans.",
      points: [
        "Assess current technology landscape and business needs",
        "Define a future-ready technology vision and roadmap",
        "Prioritize initiatives for maximum business impact",
        "Align people, processes, and technology for successful execution",
      ],
    },
    {
      title: "Architecture & Modernization",
      heading: "Enterprise Solution Architecture",
      description:
        "Design robust, scalable, and resilient technical architectures that eliminate technical debt and prepare your digital products for scale.",
      points: [
        "Microservices and event-driven architecture design",
        "Legacy application refactoring and modernization",
        "Domain-driven design (DDD) and database decomposition",
        "API strategy and integration frameworks",
      ],
    },
    {
      title: "Cloud & DevOps",
      heading: "Cloud Adoption & DevOps Transformation",
      description:
        "Accelerate cloud migration and establish automated continuous delivery pipelines for maximum release velocity and resilience.",
      points: [
        "Multi-cloud and hybrid-cloud architecture strategy",
        "Containerization and Kubernetes orchestration",
        "Infrastructure as Code (IaC) governance",
        "FinOps cloud cost optimization and security compliance",
      ],
    },
    {
      title: "Transformation & Optimization",
      heading: "Digital Transformation & System Optimization",
      description:
        "Reimagine business processes with intelligent automation, AI-driven insights, and modernized operating models.",
      points: [
        "Business process automation and workflow simplification",
        "System performance benchmarking and bottleneck removal",
        "Organizational change management for tech adoption",
        "Continuous KPI measurement and ROI tracking",
      ],
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#061737] via-[#092252] to-[#04122d] text-white pt-16 pb-24 md:pt-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-xs font-semibold text-blue-300">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            &gt; IT Consulting
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                IT Consulting
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Innovexa provides strategic technology consulting to help
                businesses plan, modernize, optimize, and scale with confidence.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#consulting-form"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
                >
                  Discuss Your Requirements
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#engagement-models"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all"
                >
                  Book a Consultation
                </a>
              </div>
            </div>

            {/* 3D Isometric Consulting Architecture Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                <Image
                  src="/images/hero-consulting.jpg"
                  alt="Enterprise IT Consulting and Digital Transformation Architecture"
                  width={700}
                  height={500}
                  priority
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC TECHNOLOGY ADVISORY (4 PILLARS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-lg">
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
              Strategic Consulting
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-1">
              Strategic Technology Advisory for Business Growth
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-xl mx-auto">
              We help organizations make better technology decisions, improve
              systems, modernize applications, adopt cloud, and accelerate
              transformation to achieve their business goals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Strategy", sub: "Align technology with business goals", icon: Compass, color: "text-blue-600" },
              { label: "Architecture", sub: "Design scalable, reliable, future-ready solutions", icon: Layers, color: "text-indigo-600" },
              { label: "Transformation", sub: "Drive modernization and business change", icon: RefreshCw, color: "text-teal-600" },
              { label: "Optimization", sub: "Improve performance, efficiency, and overall value", icon: TrendingUp, color: "text-amber-600" },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-1.5"
              >
                <pillar.icon className={`w-5 h-5 ${pillar.color}`} />
                <span className="text-xs font-bold text-slate-900">{pillar.label}</span>
                <span className="text-[11px] text-slate-500 leading-tight">{pillar.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR CONSULTING SERVICES (8 CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Our Consulting Services
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Practical advisory and expert execution across critical digital domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Technology Strategy & Advisory",
              desc: "Define the right technology direction, prioritize initiatives, and create a practical roadmap for growth.",
              icon: Compass,
            },
            {
              title: "Solution Architecture",
              desc: "Design robust, scalable, and future-ready solution architectures aligned to business needs.",
              icon: Layers,
            },
            {
              title: "Application Modernization",
              desc: "Assess, plan, and modernize legacy applications to improve agility, performance, and maintainability.",
              icon: RefreshCw,
            },
            {
              title: "Cloud Migration Consulting",
              desc: "Plan and execute a secure, efficient, and business-aligned migration to cloud platforms.",
              icon: Cloud,
            },
            {
              title: "DevOps Consulting",
              desc: "Establish DevOps strategies, practices, and toolchains to enable faster, more reliable delivery.",
              icon: Workflow,
            },
            {
              title: "AI & Automation Advisory",
              desc: "Identify and implement practical opportunities for automation and AI-driven business value.",
              icon: Brain,
            },
            {
              title: "Digital Transformation",
              desc: "Reimagine processes, technology, and operating models to drive business agility and growth.",
              icon: Target,
            },
            {
              title: "Tech Assessment & Optimization",
              desc: "Evaluate your current technology landscape, identify gaps, and optimize for performance, cost, and scalability.",
              icon: ShieldCheck,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="#consulting-form"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CONSULTING EXCELLENCE FOCUS (TABS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Consulting Excellence: Explore Our Service Focus
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              A structured approach to technology consulting, from strategy and architecture to transformation and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-between ${
                    activeTab === idx
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <span>{tab.title}</span>
                  {activeTab === idx && <ArrowRight className="w-4 h-4" />}
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 rounded-2xl bg-white border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                {tabs[activeTab].heading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {tabs[activeTab].description}
              </p>

              <div className="space-y-3 pt-2">
                {tabs[activeTab].points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW WE ENGAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            How We Engage
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            A collaborative, outcome-focused approach to deliver practical and lasting business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "Assess", desc: "Understand your business goals, challenges, and current technology landscape." },
            { step: "Advise", desc: "Provide strategic insights and recommend the right technology approach." },
            { step: "Architect", desc: "Design a fit-for-purpose solution, architecture, and transformation plan." },
            { step: "Enable", desc: "Guide implementation, adoption, and change readiness." },
            { step: "Evolve", desc: "Continuously improve, optimize, and scale to create long-term value." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-100 bg-white hover:shadow-md transition-all text-center space-y-2"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-xs flex items-center justify-center mx-auto">
                {idx + 1}
              </div>
              <h4 className="text-sm font-bold text-slate-900">{item.step}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ENGAGEMENT MODELS */}
      <section id="engagement-models" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Consulting Engagement Models
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Flexible engagement options to match your business needs, project scope, and transformation goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { title: "Advisory Workshops", desc: "Focused workshops to align stakeholders and define the right approach." },
            { title: "Strategic Assessments", desc: "In-depth evaluation of your technology landscape, capabilities, and opportunities." },
            { title: "Solution Blueprinting", desc: "Detailed solution design and architecture blueprint tailored to your requirements." },
            { title: "Transformation Roadmaps", desc: "A phased, actionable roadmap to modernize, migrate, and transform at the right pace." },
            { title: "Ongoing Consulting Support", desc: "Continued advisory to address evolving needs and ensure sustained business value." },
          ].map((model, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-100 bg-white shadow-xs space-y-2"
            >
              <FileCheck className="w-5 h-5 text-blue-600" />
              <h4 className="text-xs font-bold text-slate-900">{model.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {model.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CONSULTING ENQUIRY FORM */}
      <section id="consulting-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Consult With Our Experts
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                Discuss Your IT Consulting Requirements
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tell us about your business goals, technology needs, or transformation plans. Our consulting team will get in touch to understand your requirements and recommend the right approach.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xl">
              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Consultation Request Received!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    A Senior Solutions Architect from Innovexa will review your
                    inquiry and schedule an exploratory discussion.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your business email"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your company name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Consulting Service Required *
                      </label>
                      <select
                        required
                        defaultValue=""
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none bg-white"
                      >
                        <option value="" disabled>Select a consulting service</option>
                        <option value="strategy">Technology Strategy & Advisory</option>
                        <option value="architecture">Solution Architecture</option>
                        <option value="modernization">Application Modernization</option>
                        <option value="cloud">Cloud Migration Consulting</option>
                        <option value="devops">DevOps Consulting</option>
                        <option value="ai">AI & Automation Advisory</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Expected Timeline *
                      </label>
                      <select
                        required
                        defaultValue=""
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none bg-white"
                      >
                        <option value="" disabled>Select timeline</option>
                        <option value="immediate">Immediate (&lt; 1 month)</option>
                        <option value="1-3">1 - 3 months</option>
                        <option value="3-6">3 - 6 months</option>
                        <option value="planning">Just Planning / Exploring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Business or Technology Challenge *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Briefly describe your current challenge or need..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Consulting Enquiry
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
