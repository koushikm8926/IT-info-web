"use client";

import React, { useRef } from "react";
import { gsap, useGSAP, MQ } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  children: React.ReactNode;
  /** Classes for the clipping frame (rounding, border, shadow, height). */
  className?: string;
  /** Travel in % of the frame height, each direction. */
  strength?: number;
  /** Clip-path "aperture opening" the first time the frame enters view. */
  reveal?: boolean;
  /** Captions/gradients pinned to the frame (they don't drift with the image). */
  overlay?: React.ReactNode;
};

/**
 * Image frame with a one-time aperture reveal and a gentle scroll-linked drift.
 * Motion is applied to an inner layer so the image's own hover transitions stay intact.
 */
export function Parallax({ children, className, strength = 7, reveal = true, overlay }: ParallaxProps) {
  const frame = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      if (reveal) {
        mm.add(MQ.motion, () => {
          gsap.fromTo(
            frame.current,
            { clipPath: "inset(14% 8% 14% 8%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.5,
              ease: "expo.out",
              clearProps: "clipPath",
              scrollTrigger: { trigger: frame.current, start: "top 85%", once: true },
            },
          );
        });
      }

      mm.add(MQ.parallax, () => {
        gsap.fromTo(
          layer.current,
          { yPercent: -strength, scale: 1 + (strength * 2.2) / 100 },
          {
            yPercent: strength,
            ease: "none",
            scrollTrigger: { trigger: frame.current, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: frame },
  );

  return (
    <div ref={frame} className={cn("relative overflow-hidden", className)}>
      <div ref={layer} className="h-full w-full will-change-transform">
        {children}
      </div>
      {overlay}
    </div>
  );
}
