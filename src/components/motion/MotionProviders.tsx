"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import { gsap, ScrollTrigger, MQ } from "@/lib/gsap";

/**
 * Site-wide motion plumbing:
 *  - Motion respects the OS "reduce motion" setting (transforms drop, opacity stays).
 *  - Lenis smooths wheel scrolling on desktop only (touch keeps native momentum),
 *    driven by GSAP's ticker so ScrollTrigger and Lenis never disagree by a frame.
 */
export function MotionProviders({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia(MQ.reduce).matches) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      // Sticky header is ~110px tall on desktop.
      anchors: { offset: -110 },
      stopInertiaOnNavigate: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // New route: land at the top (unless deep-linking to a section) and re-measure triggers.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (lenis && !window.location.hash) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
