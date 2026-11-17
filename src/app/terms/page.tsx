import React from "react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-6">
      <div className="text-xs text-blue-600 font-semibold">
        <Link href="/" className="hover:underline">Home</Link> &gt; Terms &amp; Conditions
      </div>
      <h1 className="text-3xl font-black text-slate-900">Terms &amp; Conditions</h1>
      <p className="text-xs text-slate-400">Last updated: November 2026</p>

      <div className="prose prose-slate text-sm text-slate-600 space-y-4 leading-relaxed">
        <p>
          Welcome to Innovexa Systems. By accessing or using our website, IT services, staffing solutions, or educational training programs, you agree to be bound by these terms.
        </p>
        <h3 className="text-base font-bold text-slate-900 pt-2">1. Use of Services</h3>
        <p>
          All content, software architectures, curricula, and materials provided on this platform are the intellectual property of Innovexa Systems or licensed to us. You agree not to misuse or unlawfully distribute any proprietary resources.
        </p>
        <h3 className="text-base font-bold text-slate-900 pt-2">2. Service Engagements</h3>
        <p>
          Consulting, development, and recruitment contracts are governed by specific Statements of Work (SOW) executed between Innovexa Systems and the client organization.
        </p>
      </div>
    </div>
  );
}
