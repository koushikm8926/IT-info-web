"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Send,
  Building2,
  Clock,
} from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export function Footer() {
  const [emailSub, setEmailSub] = useState("");
  const [subDone, setSubDone] = useState(false);

  return (
    <footer className="bg-[#061226] text-white border-t border-slate-800">
      {/* 1. TOP NEWSLETTER & ENTERPRISE CONTACT STRIP */}
      <div className="border-b border-slate-800/80 bg-[#091a36]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-2">
              <span className="text-[11px] font-bold tracking-widest text-blue-400 uppercase">
                Stay Ahead in Technology
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Subscribe to Innovexa Insights &amp; Training Schedules
              </h3>
              <p className="text-xs text-slate-300">
                Get monthly engineering insights, upcoming course batches, and enterprise IT trends.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subDone ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Thank you! You have been subscribed to Innovexa Insights.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubDone(true);
                  }}
                  className="flex flex-col sm:flex-row gap-2.5 max-w-lg lg:ml-auto"
                >
                  <input
                    type="email"
                    required
                    value={emailSub}
                    onChange={(e) => setEmailSub(e.target.value)}
                    placeholder="Enter your corporate or personal email"
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white shadow-md transition-all shrink-0 flex items-center justify-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Brand Column */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <span className="font-black text-xl tracking-wider">IX</span>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block">
                  INNOVEXA
                </span>
                <span className="text-[10px] tracking-widest font-bold text-blue-400 uppercase block -mt-1">
                  SYSTEMS
                </span>
              </div>
            </Link>
            <p className="text-xs font-semibold text-blue-300">
              {SITE_DATA.company.tagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              A multi-vertical technology company delivering IT services, consulting, staffing and industry-focused education under one roof.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us &amp; Leadership
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">Hiring</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact &amp; Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">
              Business Divisions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  IT Services &amp; Development
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="hover:text-blue-400 transition-colors">
                  Strategic IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/staffing" className="hover:text-blue-400 transition-colors">
                  IT Staffing &amp; Recruitment
                </Link>
              </li>
              <li>
                <Link href="/edutech" className="hover:text-blue-400 transition-colors">
                  Innovexa Edutech Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Training & Batches */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">
              Edutech &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/edutech#batches" className="hover:text-blue-400 transition-colors">
                  Upcoming Batches
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="hover:text-blue-400 transition-colors">
                  Cancellation &amp; Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">
              Global Headquarters
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{SITE_DATA.company.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${SITE_DATA.company.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {SITE_DATA.company.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${SITE_DATA.company.phone}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {SITE_DATA.company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{SITE_DATA.company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-4">
            <p>© 2026 Innovexa Systems. All Rights Reserved.</p>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-500">ISO 9001:2015 Standards Compliant</span>
          </div>
          <p className="font-semibold text-slate-300">
            A Technology, Talent &amp; Learning Company
          </p>
        </div>
      </div>
    </footer>
  );
}
