"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

  // One house curve for the whole site: a long, confident deceleration.
  gsap.defaults({ ease: "expo.out", duration: 1 });
}

/** Media queries shared by every GSAP-driven effect. */
export const MQ = {
  motion: "(prefers-reduced-motion: no-preference)",
  reduce: "(prefers-reduced-motion: reduce)",
  /** Scroll-linked depth only where there is a real pointer + room to breathe. */
  parallax: "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
} as const;

export { gsap, ScrollTrigger, SplitText, useGSAP };
