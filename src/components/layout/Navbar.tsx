"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, PhoneCall, Sparkles } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Tagline */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span className="font-black text-xl tracking-wider">IX</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                INNOVEXA
              </span>
              <span className="text-[10px] tracking-widest font-semibold text-blue-600 -mt-1 uppercase">
                SYSTEMS
              </span>
              <span className="hidden sm:block text-[10px] text-slate-400 font-medium">
                Your Requirements. Our Solutions.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {SITE_DATA.navigation.map((item) => {
              const active = isActive(item.href);
              const hasSubmenu = item.submenu && item.submenu.length > 0;

              return (
                <div
                  key={item.label}
                  className="relative group py-2"
                  onMouseEnter={() => hasSubmenu && setOpenDropdown(item.label)}
                  onMouseLeave={() => hasSubmenu && setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all inline-flex items-center gap-1 ${
                      active
                        ? "text-blue-600 bg-blue-50/80 font-bold"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                    {hasSubmenu && (
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasSubmenu && (
                    <div className="absolute left-0 top-full hidden group-hover:block w-64 pt-2 transition-all">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 space-y-1">
                        {item.submenu?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all active:scale-95"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2">
          {SITE_DATA.navigation.map((item) => (
            <div key={item.label} className="border-b border-slate-50 pb-1">
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 text-base font-semibold rounded-lg ${
                  isActive(item.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-800 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
              {item.submenu && (
                <div className="pl-6 pb-2 space-y-1">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-sm text-slate-500 hover:text-blue-600"
                    >
                      • {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
