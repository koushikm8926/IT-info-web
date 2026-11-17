"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import {
  Code2,
  Smartphone,
  Server,
  Cloud,
  Layers,
  ShieldCheck,
  Wrench,
  Users2,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Workflow,
  Search,
  PenTool,
  Send,
  Zap,
  Headphones,
} from "lucide-react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const tabs = [
    {
      title: "Enterprise Application Delivery",
      heading: "Enterprise Application Delivery",
      description:
        "Design, build, and deliver enterprise-grade applications that are secure, scalable, and aligned to your business objectives. We combine the right technology, engineering practices, and domain understanding to turn your requirements into reliable, high-quality solutions.",
      points: [
        "Business-aligned and scalable solutions",
        "Modern technology and engineering practices",
        "Reliable delivery and smooth adoption",
      ],
    },
    {
      title: "Cloud Modernization",
      heading: "Cloud & Infrastructure Modernization",
      description:
        "Transform legacy monolithic systems into cloud-native, microservices-driven architectures hosted on AWS, Azure, or Google Cloud. Gain elasticity, reduce maintenance overhead, and optimize operational costs.",
      points: [
        "Cloud-native re-architecture and containerization",
        "Cost-optimized serverless & hybrid infrastructure",
        "Zero-downtime migration strategies",
      ],
    },
    {
      title: "Engineering Acceleration",
      heading: "Engineering Velocity & CI/CD Pipelines",
      description:
        "Accelerate your product release cycle with robust automated pipelines, container orchestration, and continuous integration tailored for rapid enterprise deployment.",
      points: [
        "Automated deployment workflows with GitHub Actions/GitLab",
        "Docker & Kubernetes orchestration",
        "Infrastructure as Code with Terraform and Ansible",
      ],
    },
    {
      title: "QA Automation",
      heading: "Comprehensive Quality Engineering",
      description:
        "End-to-end testing frameworks ensuring rock-solid security, functional accuracy, performance under high load, and flawless user experiences across all devices.",
      points: [
        "Automated UI & API regression testing",
        "Cross-browser and mobile device verification",
        "Performance, load, and security vulnerability scanning",
      ],
    },
    {
      title: "Support & Enhancement",
      heading: "24/7 Managed Application Support",
      description:
        "Keep your mission-critical applications available, updated, and secure with proactive monitoring, rapid incident response, and continuous feature enhancements.",
      points: [
        "SLA-driven incident resolution and bug triage",
        "Continuous security patching and database health checks",
        "Performance optimization and ongoing code refactoring",
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
            &gt; IT Services
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                IT Services
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Innovexa provides end-to-end technology services for businesses,
                from custom software and applications to cloud, DevOps, testing,
                support, and outsourcing.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#enquiry"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
                >
                  Submit a Service Enquiry
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all"
                >
                  Discuss Your Project
                </Link>
              </div>
            </div>

            {/* 3D Isometric Services Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                <Image
                  src="/images/hero-services.jpg"
                  alt="3D Cloud and Software Architecture Services"
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

      {/* 2. CORE VALUE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              Build, Modernize and Scale with Confidence
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-xl mx-auto">
              We deliver practical technology solutions with a focus on reliable
              execution, modern engineering practices, and measurable business
              outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Custom Development", icon: Code2, color: "text-blue-600" },
              { label: "Cloud Enablement", icon: Cloud, color: "text-sky-600" },
              { label: "Quality Engineering", icon: ShieldCheck, color: "text-emerald-600" },
              { label: "Ongoing Support", icon: Wrench, color: "text-indigo-600" },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center gap-2.5 font-bold text-xs text-slate-800"
              >
                <pillar.icon className={`w-4 h-4 ${pillar.color}`} />
                {pillar.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR IT SERVICE OFFERINGS (9 CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Our IT Service Offerings
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            A comprehensive range of technology services to build, run and grow
            your business applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Custom Software Development",
              desc: "Build tailored, business-focused software solutions to address your unique requirements.",
              icon: Code2,
              color: "text-blue-600 bg-blue-50",
            },
            {
              title: "Web & Mobile Application Development",
              desc: "Develop modern, secure, and scalable web and mobile applications for your business.",
              icon: Smartphone,
              color: "text-sky-600 bg-sky-50",
            },
            {
              title: "Java, Spring Boot & Microservices",
              desc: "Build robust, scalable enterprise applications using Java, Spring Boot, and microservices.",
              icon: Server,
              color: "text-amber-600 bg-amber-50",
            },
            {
              title: "Python Development",
              desc: "Develop versatile, high-performance applications and automation solutions using Python.",
              icon: Cpu,
              color: "text-teal-600 bg-teal-50",
            },
            {
              title: "Cloud Services (AWS, Azure & GCP)",
              desc: "Design, build, and manage scalable, secure, and cost-efficient cloud solutions on AWS, Azure, and GCP.",
              icon: Cloud,
              color: "text-indigo-600 bg-indigo-50",
            },
            {
              title: "DevOps & CI/CD",
              desc: "Set up and optimize DevOps practices, CI/CD pipelines, and automation for faster, reliable releases.",
              icon: Layers,
              color: "text-purple-600 bg-purple-50",
            },
            {
              title: "Software Testing & Automation",
              desc: "Ensure high-quality, reliable software through comprehensive testing and automation.",
              icon: ShieldCheck,
              color: "text-rose-600 bg-rose-50",
            },
            {
              title: "Application Maintenance & Support",
              desc: "Keep your applications secure, stable, and up to date with proactive maintenance and ongoing support.",
              icon: Wrench,
              color: "text-cyan-600 bg-cyan-50",
            },
            {
              title: "IT Outsourcing & Project Delivery",
              desc: "Extend your technology capabilities with flexible outsourcing and end-to-end project delivery.",
              icon: Users2,
              color: "text-blue-600 bg-blue-50",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color} shadow-xs group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE TABBED SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Technology Solutions Aligned to Business Goals
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Focused technology solutions to help you build, modernize and run your business more effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tab Buttons */}
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

            {/* Tab Detail Pane with Smooth Animation */}
            <div className="lg:col-span-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8 shadow-xs space-y-6"
                >
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

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      Customized for mid-market and enterprise architectures
                    </span>
                    <a
                      href="#enquiry"
                      className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 font-bold text-xs transition-colors"
                    >
                      Discuss Requirement →
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK WITH CLIENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            How We Work with Clients
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Flexible engagement models to suit your business needs, project goals, and delivery preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Project-Based Delivery",
              desc: "End-to-end delivery of a defined solution or set of requirements with clear scope and outcomes.",
              icon: Zap,
            },
            {
              title: "Dedicated Development Teams",
              desc: "Skilled, long-term teams that work as an extension of your organization to build and scale your solutions.",
              icon: Users2,
            },
            {
              title: "Managed Support Services",
              desc: "Ongoing application support, monitoring, issue resolution, and performance improvements.",
              icon: Headphones,
            },
            {
              title: "IT Outsourcing Engagements",
              desc: "Flexible outsourcing models to extend your technology capabilities and drive faster delivery.",
              icon: Workflow,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-100 bg-white hover:shadow-md transition-all text-center space-y-3"
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

      {/* 6. OUR DELIVERY APPROACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Our Delivery Approach
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            A practical, collaborative, and iterative approach to deliver high-quality solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {[
            { step: "01", title: "Discover", desc: "Understand your business goals, requirements, and success criteria.", icon: Search },
            { step: "02", title: "Design", desc: "Define the solution, architecture, and delivery plan.", icon: PenTool },
            { step: "03", title: "Deliver", desc: "Build, test, and deploy the solution with a focus on quality and value.", icon: Code2 },
            { step: "04", title: "Support", desc: "Provide ongoing support, maintenance, and continuous improvements.", icon: Headphones },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-100 bg-white shadow-xs relative space-y-3"
            >
              <div className="text-xs font-black text-blue-600 tracking-widest uppercase">
                Step {item.step}
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CONTACT / ENQUIRY FORM */}
      <section id="enquiry" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Get Started
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                Let&apos;s Discuss Your Technology Requirements
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tell us about your custom software, modernization, cloud, QA,
                DevOps, or support needs. Our engineering leadership team will
                evaluate your project and propose the right way forward.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xl">
              {formSubmitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you. Our technology team will review your requirements
                    and reach out within 24 business hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                        placeholder="Enter your company name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Service Required *
                      </label>
                      <select
                        required
                        defaultValue=""
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="custom">Custom Software Development</option>
                        <option value="web-mobile">Web & Mobile Application</option>
                        <option value="cloud">Cloud Services (AWS/Azure/GCP)</option>
                        <option value="devops">DevOps & CI/CD</option>
                        <option value="qa">QA & Software Testing</option>
                        <option value="outsourcing">IT Outsourcing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Description *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Briefly describe your requirements, goals, or project details..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Enquiry
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
