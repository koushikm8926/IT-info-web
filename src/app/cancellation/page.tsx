import React from "react";
import Link from "next/link";

export default function CancellationRefundPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-6">
      <div className="text-xs text-blue-600 font-semibold">
        <Link href="/" className="hover:underline">Home</Link> &gt; Cancellation &amp; Refund Policy
      </div>
      <h1 className="text-3xl font-black text-slate-900">Cancellation &amp; Refund Policy</h1>
      <p className="text-xs text-slate-400">Last updated: November 2026</p>

      <div className="prose prose-slate text-sm text-slate-600 space-y-4 leading-relaxed">
        <h3 className="text-base font-bold text-slate-900 pt-2">1. Innovexa Edutech Training Programs</h3>
        <p>
          Students may request a full refund or batch transfer up to 48 hours prior to the scheduled start date of the enrolled cohort. Once a live batch has commenced and learning materials have been accessed, refund requests are evaluated on a case-by-case basis as per the enrollment agreement.
        </p>
        <h3 className="text-base font-bold text-slate-900 pt-2">2. Corporate &amp; Consulting Engagements</h3>
        <p>
          Cancellation terms for enterprise IT services and staffing assignments follow the milestone guidelines outlined in your signed Master Services Agreement (MSA) or Statement of Work (SOW).
        </p>
      </div>
    </div>
  );
}
