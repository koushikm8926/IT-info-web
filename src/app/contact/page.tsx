"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Code2,
  Layers,
  Users2,
  GraduationCap,
  Send,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import { SITE_DATA } from "@/data/site-data";
import { HeroReveal } from "@/components/motion/HeroReveal";

export default function ContactPage() {
  const [division, setDivision] = useState("IT Services");
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <HeroReveal className="bg-gradient-to-b from-[#061737] via-[#092252] to-[#04122d] text-white pt-16 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-xs font-semibold text-blue-300">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            &gt; Contact Us
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Have a requirement, query or partnership idea? We&apos;re here to help.
            </p>
          </div>
        </div>
      </HeroReveal>

      {/* 2. MAIN FORM & CONTACT DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form Box */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Get in Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Send Us an Enquiry
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Let us know your requirements and our team will get back to you soon.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Enquiry Received!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out to Innovexa Systems. Our representative
                  from the {division} team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!agreed) {
                    alert("Please agree to the Privacy Policy and Terms.");
                    return;
                  }
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
                      placeholder="Enter your name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
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
                      placeholder="Enter your mobile number"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Enquiry For *
                    </label>
                    <select
                      value={division}
                      onChange={(e) => setDivision(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none bg-white"
                    >
                      <option value="IT Services">IT Services</option>
                      <option value="IT Consulting">IT Consulting</option>
                      <option value="Staffing & Recruitment">
                        Staffing & Recruitment
                      </option>
                      <option value="Innovexa Edutech">Innovexa Edutech</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter subject"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share your requirements, queries or more details..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500"
                  />
                  <label htmlFor="consent" className="text-xs text-slate-500">
                    I agree to the{" "}
                    <span className="text-blue-600 hover:underline">
                      Privacy Policy
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-600 hover:underline">
                      Terms & Conditions
                    </span>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Right Direct Contact Info & Division Shortcuts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Info Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Contact Information
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Reach Us Directly
                </h3>
                <p className="text-xs text-slate-500">
                  Connect with the right team for faster support.
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Phone</div>
                    <a href={`tel:${SITE_DATA.company.phone}`} className="text-slate-600 hover:text-blue-600">
                      {SITE_DATA.company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <a href={`mailto:${SITE_DATA.company.email}`} className="text-slate-600 hover:text-blue-600">
                      {SITE_DATA.company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Office Location</div>
                    <div className="text-slate-600">{SITE_DATA.company.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Business Hours</div>
                    <div className="text-slate-600">{SITE_DATA.company.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Division Enquiry Selectors */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Enquire by Business Division
              </h4>

              {[
                { title: "IT Services Enquiry", icon: Code2, value: "IT Services" },
                { title: "IT Consulting Enquiry", icon: Layers, value: "IT Consulting" },
                { title: "Staffing & Recruitment Enquiry", icon: Users2, value: "Staffing & Recruitment" },
                { title: "Innovexa Edutech Enquiry", icon: GraduationCap, value: "Innovexa Edutech" },
              ].map((div, idx) => (
                <button
                  key={idx}
                  onClick={() => setDivision(div.value)}
                  className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs font-bold transition-all ${
                    division === div.value
                      ? "border-blue-500 bg-blue-50/70 text-blue-700"
                      : "border-slate-100 hover:border-slate-300 text-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
                      <div.icon className="w-4 h-4" />
                    </div>
                    <span>{div.title}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEED IMMEDIATE ASSISTANCE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Need Immediate Assistance?</h3>
              <p className="text-xs text-slate-300">
                Call or email us and our support team will be happy to assist you.
              </p>
            </div>
          </div>
          <a
            href={`tel:${SITE_DATA.company.phone}`}
            className="px-6 py-3 rounded-xl bg-white text-blue-900 font-bold text-xs hover:bg-blue-50 transition-colors shadow-md shrink-0 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
}
