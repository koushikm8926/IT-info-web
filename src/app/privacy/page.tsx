import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-6">
      <div className="text-xs text-blue-600 font-semibold">
        <Link href="/" className="hover:underline">Home</Link> &gt; Privacy Policy
      </div>
      <h1 className="text-3xl font-black text-slate-900">Privacy Policy</h1>
      <p className="text-xs text-slate-400">Last updated: November 2026</p>

      <div className="prose prose-slate text-sm text-slate-600 space-y-4 leading-relaxed">
        <p>
          At Innovexa Systems, we respect your privacy and are committed to protecting the personal information you share with us through our IT services, consulting, staffing, and edutech training platforms.
        </p>
        <h3 className="text-base font-bold text-slate-900 pt-2">1. Information We Collect</h3>
        <p>
          We collect information you provide directly to us when submitting an enquiry, applying for a job, enrolling in a training batch, or contacting our team. This may include your name, email address, phone number, company information, resume documents, and any details you provide in communication.
        </p>
        <h3 className="text-base font-bold text-slate-900 pt-2">2. How We Use Your Information</h3>
        <p>
          We use your information to provide requested IT services, evaluate job applications, schedule consultations, send syllabus and batch updates, and respond to your enquiries. We do not sell your personal data to third parties.
        </p>
        <h3 className="text-base font-bold text-slate-900 pt-2">3. Contact Us</h3>
        <p>
          If you have questions regarding this Privacy Policy, please contact us at info@innovexasystems.in.
        </p>
      </div>
    </div>
  );
}
