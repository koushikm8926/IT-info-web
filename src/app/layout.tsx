import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProviders } from "@/components/motion/MotionProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Innovexa Systems | Technology Solutions, IT Consulting, Staffing & Edutech",
  description:
    "Innovexa Systems provides end-to-end IT services, expert technology consulting, talent solutions, and industry-focused edutech training to help businesses grow in a digital-first world.",
  keywords: [
    "IT Consulting",
    "IT Services",
    "Staffing Solutions",
    "IT Recruitment",
    "Edutech Training",
    "Java Full Stack",
    "DevOps",
    "Cloud Solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
        <MotionProviders>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProviders>
        <noscript>
          <style>{`.hero-reveal :is(:has(> h1) > *, :has(> img), [data-hero-extra]){opacity:1!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
