"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Briefcase,
  Search,
  MapPin,
  Clock,
  Layers,
  Users2,
  TrendingUp,
  Heart,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  UploadCloud,
  Send,
  X,
} from "lucide-react";
import { SITE_DATA, JobOpening } from "@/data/site-data";

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedWorkMode, setSelectedWorkMode] = useState("All");

  const [activeApplyJob, setActiveApplyJob] = useState<JobOpening | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  // Filter jobs dynamically
  const filteredJobs = useMemo(() => {
    return SITE_DATA.jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesDept =
        selectedDept === "All" || job.department === selectedDept;

      const matchesLocation =
        selectedLocation === "All" ||
        job.location.toLowerCase() === selectedLocation.toLowerCase();

      const matchesMode =
        selectedWorkMode === "All" ||
        job.workMode.toLowerCase() === selectedWorkMode.toLowerCase();

      return matchesSearch && matchesDept && matchesLocation && matchesMode;
    });
  }, [searchTerm, selectedDept, selectedLocation, selectedWorkMode]);

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#061737] via-[#092252] to-[#04122d] text-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-xs font-semibold text-blue-300">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            &gt; Careers
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Build Your Career with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Innovexa Systems
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Be part of a multi-vertical technology company where you can work on
              real-world projects, grow your skills and build a meaningful career.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#open-positions"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2"
              >
                View Open Positions
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#culture"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all"
              >
                Our Work Culture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">4</div>
                <div className="text-xs text-slate-500">Business Divisions</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">50+</div>
                <div className="text-xs text-slate-500">Technology Skills</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-teal-50 text-teal-600">
                <Users2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">Growing</div>
                <div className="text-xs text-slate-500">Engineering Team</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">Pan-India</div>
                <div className="text-xs text-slate-500">Opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS WITH SEARCH & FILTERS */}
      <section id="open-positions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Open Positions
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Explore current job openings and find the right opportunity for you.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Search Input */}
            <div className="lg:col-span-2 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search jobs by title, skill or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* Department */}
            <div>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-blue-600 outline-none"
              >
                <option value="All">All Departments</option>
                <option value="Engineering">Engineering</option>
                <option value="Cloud & Infrastructure">Cloud & Infra</option>
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="Human Resources">Human Resources</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-blue-600 outline-none"
              >
                <option value="All">All Locations</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            {/* Work Mode */}
            <div>
              <select
                value={selectedWorkMode}
                onChange={(e) => setSelectedWorkMode(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-blue-600 outline-none"
              >
                <option value="All">All Work Modes</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
                <option value="Full-time">Full-time Onsite</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Job List */}
          <div className="lg:col-span-8 space-y-4">
            {filteredJobs.length === 0 ? (
              <div className="p-10 rounded-2xl border border-dashed border-slate-200 text-center space-y-3">
                <Briefcase className="w-10 h-10 text-slate-300 mx-auto" />
                <h4 className="text-base font-bold text-slate-700">
                  No matching jobs found
                </h4>
                <p className="text-xs text-slate-500">
                  Try adjusting your search criteria or submit your resume for future openings.
                </p>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-5 rounded-2xl border border-slate-100 bg-white hover:border-blue-300 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {job.experience}
                      </span>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium text-[11px]">
                        {job.workMode}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveApplyJob(job);
                      setApplicationSubmitted(false);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors shrink-0 flex items-center justify-center gap-1"
                  >
                    Apply Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Right Callout Box: Don't See a Matching Role? */}
          <div className="lg:col-span-4 rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/70 to-white p-6 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Don&apos;t See a Matching Role?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We are always looking for talented professionals. Share your profile with us, and we&apos;ll reach out when a suitable opportunity opens up.
            </p>
            <button
              onClick={() => {
                setResumeModalOpen(true);
                setApplicationSubmitted(false);
              }}
              className="w-full py-3 rounded-xl bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <UploadCloud className="w-4 h-4" />
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* 4. WHY JOIN INNOVEXA SYSTEMS? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Why Join Innovexa Systems?
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            A people-first workplace that supports your career, learning and overall well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Diverse Opportunities",
              desc: "Work across services, consulting, staffing and education verticals on varied tech stacks.",
              icon: Layers,
            },
            {
              title: "Career Growth",
              desc: "Clear progression and leadership opportunities backed by mentorship.",
              icon: TrendingUp,
            },
            {
              title: "Learning & Development",
              desc: "Continuous upskilling with industry-aligned training and certification sponsorship.",
              icon: Award,
            },
            {
              title: "Flexible Work",
              desc: "Hybrid and remote options depending on role and project requirements.",
              icon: Clock,
            },
            {
              title: "Employee Well-being",
              desc: "A supportive and inclusive work environment designed for sustainable productivity.",
              icon: Heart,
            },
            {
              title: "Recognition",
              desc: "Your contributions are valued and rewarded through transparent performance reviews.",
              icon: CheckCircle2,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-100 bg-white hover:shadow-md transition-all space-y-2"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OUR WORK CULTURE */}
      <section id="culture" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Our Work Culture
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At Innovexa Systems, we believe in collaboration, learning and innovation. We encourage ownership, value new ideas and create an environment where you can do your best work.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
                  <Users2 className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-slate-900">Collaborative & Inclusive</h5>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 mx-auto flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-slate-900">Innovation Driven</h5>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 mx-auto flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-slate-900">People-First Approach</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MODAL: APPLY NOW / SUBMIT RESUME */}
      {(activeApplyJob || resumeModalOpen) && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => {
                setActiveApplyJob(null);
                setResumeModalOpen(false);
                setApplicationSubmitted(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg font-bold"
            >
              <X className="w-5 h-5" />
            </button>

            {applicationSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">
                  Application Submitted!
                </h3>
                <p className="text-xs text-slate-500">
                  Thank you for applying. Our talent acquisition team will review
                  your profile and reach out if your experience matches.
                </p>
                <button
                  onClick={() => {
                    setActiveApplyJob(null);
                    setResumeModalOpen(false);
                    setApplicationSubmitted(false);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setApplicationSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                    {activeApplyJob ? "Job Application" : "General Candidate Profile"}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {activeApplyJob ? activeApplyJob.title : "Submit Your Resume"}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 00000 00000"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Total Experience *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 3.5 Years"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    LinkedIn / Portfolio URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Upload Resume (PDF, DOCX) *
                  </label>
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
