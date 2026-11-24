"use client";

import React, { useRef } from "react";
import { gsap, useGSAP, MQ } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * Section transition: the block grows into place as it scrolls up into view,
 * scrubbed to the scrollbar so it feels physically attached to the page.
 */
export function ScrollScale({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        gsap.fromTo(
          ref.current,
          { scale: 0.9, y: 60, opacity: 0.35 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: { trigger: ref.current, start: "top bottom", end: "top 55%", scrub: 0.6 },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn("origin-bottom will-change-transform", className)}>
      {children}
    </div>
  );
}
