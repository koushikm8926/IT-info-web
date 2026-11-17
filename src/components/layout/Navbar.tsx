"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Code2,
  Smartphone,
  Cloud,
  Layers,
  Cpu,
  ShieldCheck,
  Compass,
  RefreshCw,
  TrendingUp,
  Users2,
  UserCheck,
  Building2,
  Zap,
  GraduationCap,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const servicesMenu = [
    {
      title: "Custom Software Development",
      desc: "Tailored enterprise platforms & microservices",
      href: "/services#custom",
      icon: Code2,
    },
    {
      title: "Web & Mobile Applications",
      desc: "High-performance iOS, Android & modern web apps",
      href: "/services#web-mobile",
      icon: Smartphone,
    },
    {
      title: "Cloud & Infrastructure",
      desc: "AWS, Azure & GCP architecture and modernization",
      href: "/services#cloud",
      icon: Cloud,
    },
    {
      title: "DevOps & CI/CD Pipelines",
      desc: "Kubernetes, Docker, automated release engineering",
      href: "/services#devops",
      icon: Layers,
    },
    {
      title: "AI & Intelligent Automation",
      desc: "Process automation and enterprise AI integration",
      href: "/services#ai",
      icon: Cpu,
    },
    {
      title: "QA & Test Engineering",
      desc: "Automated regression, performance & security testing",
      href: "/services#qa",
      icon: ShieldCheck,
    },
  ];

  const consultingMenu = [
    {
      title: "Technology Strategy",
      desc: "Enterprise roadmaps aligned with business objectives",
      href: "/consulting#strategy",
      icon: Compass,
    },
    {
      title: "Solution Architecture",
      desc: "Resilient, scalable and decoupled system architectures",
      href: "/consulting#architecture",
      icon: Layers,
    },
    {
      title: "Legacy Modernization",
      desc: "Refactor legacy monoliths to agile microservices",
      href: "/consulting#modernization",
      icon: RefreshCw,
    },
    {
      title: "Cloud Migration Consulting",
      desc: "Zero-downtime, compliant enterprise migration plans",
      href: "/consulting#cloud-migration",
      icon: Cloud,
    },
  ];

  const staffingMenu = [
    {
      title: "Permanent Recruitment",
      desc: "End-to-end full-time hiring for strategic roles",
      href: "/staffing#permanent",
      icon: Building2,
    },
    {
      title: "Contract Staffing",
      desc: "Agile on-demand talent for project workload spikes",
      href: "/staffing#contract",
      icon: Users2,
    },
    {
      title: "Contract-to-Hire (C2H)",
      desc: "Evaluate candidate on-the-job fit before hiring",
      href: "/staffing#c2h",
      icon: UserCheck,
    },
    {
      title: "Team Augmentation",
      desc: "Seamlessly plug senior engineers into your sprints",
      href: "/staffing#augmentation",
      icon: Zap,
    },
  ];

  const edutechMenu = [
    {
      title: "Full Stack Java Development",
      desc: "Spring Boot, Microservices, React & Cloud",
      href: "/edutech#dev",
      icon: Code2,
      badge: "Popular",
    },
    {
      title: "Python Full Stack & AI",
      desc: "Django, FastAPI, REST APIs & Machine Learning",
      href: "/edutech#ai",
      icon: Cpu,
      badge: "Trending",
    },
    {
      title: "Cloud & DevOps Masterclass",
      desc: "AWS, Docker, Kubernetes, Terraform & CI/CD",
      href: "/edutech#cloud",
      icon: Cloud,
      badge: "New Cohort",
    },
    {
      title: "Manual & Automated QA Testing",
      desc: "Selenium, Playwright, API & Load testing",
      href: "/edutech#qa",
      icon: ShieldCheck,
      badge: "Placement",
    },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* 1. TOP UTILITY BAR (Corporate Contact & Trust) */}
      <div className="bg-[#061226] text-slate-300 text-[11px] border-b border-slate-800/80 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Bengaluru, India (HQ) • Serving Clients Globally</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <a
                href={`mailto:${SITE_DATA.company.email}`}
                className="hover:text-white transition-colors"
              >
                {SITE_DATA.company.email}
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <a
                href={`tel:${SITE_DATA.company.phone}`}
                className="hover:text-white transition-colors"
              >
                {SITE_DATA.company.phone}
              </a>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-medium text-[10px] border border-blue-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Q4 2026 Batch Enrollment Open
            </span>
            <Link
              href="/careers"
              className="hover:text-white transition-colors text-slate-400 flex items-center gap-1"
            >
              We&apos;re Hiring Engineers
              <ArrowRight className="w-3 h-3 text-blue-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80"
            : "bg-white/95 backdrop-blur-md border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-all duration-300">
                <span className="font-black text-xl tracking-wider">IX</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  INNOVEXA
                </span>
                <span className="text-[10px] tracking-widest font-bold text-blue-600 -mt-1 uppercase">
                  SYSTEMS
                </span>
                <span className="hidden sm:block text-[10px] text-slate-400 font-medium">
                  Your Requirements. Our Solutions.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Mega-Menus */}
            <nav className="hidden xl:flex items-center space-x-1">
              <Link
                href="/"
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-all ${
                  isActive("/") && pathname === "/"
                    ? "text-blue-600 bg-blue-50/80"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-all ${
                  isActive("/about")
                    ? "text-blue-600 bg-blue-50/80"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                About Us
              </Link>

              {/* IT Services Dropdown */}
              <div
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/services"
                  className={`px-3 py-2 text-xs font-bold rounded-lg transition-all inline-flex items-center gap-1 ${
                    isActive("/services")
                      ? "text-blue-600 bg-blue-50/80"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  IT Services
                  <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                </Link>

                <div className="absolute left-0 top-full hidden group-hover:block w-[520px] pt-2 transition-all">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 grid grid-cols-2 gap-2">
                    {servicesMenu.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="p-3 rounded-xl hover:bg-blue-50/60 transition-all flex items-start gap-3 group/item border border-transparent hover:border-blue-100"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-2 pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-xs px-2">
                      <span className="text-slate-400">Need custom architecture?</span>
                      <Link
                        href="/services"
                        className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        View All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* IT Consulting Dropdown */}
              <div
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown("consulting")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/consulting"
                  className={`px-3 py-2 text-xs font-bold rounded-lg transition-all inline-flex items-center gap-1 ${
                    isActive("/consulting")
                      ? "text-blue-600 bg-blue-50/80"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  IT Consulting
                  <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                </Link>

                <div className="absolute left-0 top-full hidden group-hover:block w-[460px] pt-2 transition-all">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 space-y-2">
                    {consultingMenu.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="p-3 rounded-xl hover:bg-indigo-50/60 transition-all flex items-start gap-3 group/item border border-transparent hover:border-indigo-100"
                      >
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-indigo-600 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* IT Staffing Dropdown */}
              <div
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown("staffing")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/staffing"
                  className={`px-3 py-2 text-xs font-bold rounded-lg transition-all inline-flex items-center gap-1 ${
                    isActive("/staffing")
                      ? "text-blue-600 bg-blue-50/80"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  IT Staffing
                  <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                </Link>

                <div className="absolute left-0 top-full hidden group-hover:block w-[460px] pt-2 transition-all">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 space-y-2">
                    {staffingMenu.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="p-3 rounded-xl hover:bg-teal-50/60 transition-all flex items-start gap-3 group/item border border-transparent hover:border-teal-100"
                      >
                        <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover/item:bg-teal-600 group-hover/item:text-white transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-teal-600 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Innovexa Edutech Dropdown */}
              <div
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown("edutech")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/edutech"
                  className={`px-3 py-2 text-xs font-bold rounded-lg transition-all inline-flex items-center gap-1 ${
                    isActive("/edutech")
                      ? "text-amber-600 bg-amber-50/80"
                      : "text-slate-700 hover:text-amber-600 hover:bg-slate-50"
                  }`}
                >
                  Innovexa Edutech
                  <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                </Link>

                <div className="absolute -left-12 top-full hidden group-hover:block w-[500px] pt-2 transition-all">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 space-y-2">
                    <div className="px-3 py-1 text-[11px] font-bold text-amber-600 uppercase tracking-wider flex items-center justify-between">
                      <span>Live Project-Based Programs</span>
                      <span className="text-[10px] text-slate-400 lowercase">with placement support</span>
                    </div>
                    {edutechMenu.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="p-3 rounded-xl hover:bg-amber-50/60 transition-all flex items-start justify-between gap-3 group/item border border-transparent hover:border-amber-100"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover/item:bg-amber-600 group-hover/item:text-white transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover/item:text-amber-600 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">
                          {item.badge}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/careers"
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-all ${
                  isActive("/careers")
                    ? "text-blue-600 bg-blue-50/80"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                Careers
              </Link>
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all active:scale-95 gap-1.5"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <div className="flex xl:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
          {SITE_DATA.navigation.map((item) => (
            <div key={item.label} className="border-b border-slate-100 pb-2">
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm font-bold rounded-lg ${
                  isActive(item.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-800 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
              {item.submenu && (
                <div className="pl-6 pt-1 space-y-1">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-xs text-slate-600 hover:text-blue-600"
                    >
                      • {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
