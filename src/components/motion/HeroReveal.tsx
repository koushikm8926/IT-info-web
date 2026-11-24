"use client";

import React, { useRef } from "react";
import { gsap, SplitText, useGSAP, MQ } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type HeroRevealProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

/**
 * Cinematic entrance + scroll-out depth for page heroes.
 *
 * It reads the hero's existing structure instead of requiring per-element props:
 *  - the `h1` is split into words that rise out of a mask
 *  - its sibling elements (eyebrow, copy, CTAs) follow in DOM order
 *  - any frame that directly wraps an <img> gets a clip-path wipe with a slow zoom settle
 *  - `[data-hero-extra]` elements land last; `[data-hero-glow]` blobs drift on scroll
 *
 * Elements are pre-hidden in CSS (see `.hero-reveal` in globals.css) so there is no
 * flash between server paint and hydration. Reduced motion skips all of it.
 */
export function HeroReveal({ children, className, ...rest }: HeroRevealProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      // ---- Entrance ---------------------------------------------------------
      mm.add(MQ.motion, () => {
        const title = el.querySelector<HTMLElement>("h1");
        const column = title?.parentElement;
        const siblings = column
          ? (Array.from(column.children) as HTMLElement[]).filter((c) => c !== title)
          : [];
        const frames = Array.from(el.querySelectorAll<HTMLElement>(":scope :has(> img)"));
        const extras = Array.from(el.querySelectorAll<HTMLElement>("[data-hero-extra]"));

        // Take over from the CSS pre-hide with explicit inline start states.
        gsap.set([...siblings, ...extras], { autoAlpha: 0, y: 28 });
        gsap.set(frames, { autoAlpha: 1, clipPath: "inset(100% 0% 0% 0%)" });
        // Images often carry a CSS `transition-transform` for hover; disable it while GSAP drives.
        gsap.set(frames.map((f) => f.querySelector(":scope > img")), { scale: 1.28, transition: "none" });

        let split: SplitText | null = null;
        if (title) {
          split = SplitText.create(title, {
            type: "words",
            mask: "words",
            wordsClass: "hero-word",
          });
          paintGradientWords(split.words as HTMLElement[]);
          gsap.set(title, { autoAlpha: 1 });
          gsap.set(split.words, { yPercent: 115 });
        }
        el.classList.add("is-ready");

        const tl = gsap.timeline({
          delay: 0.15,
          onComplete: () => {
            // Hand the text back to normal layout so it reflows naturally on resize.
            split?.revert();
            gsap.set(frames, { clearProps: "clipPath" });
          },
        });

        // Text column, in reading order. The headline is the anchor beat.
        let at = 0;
        for (const child of column ? (Array.from(column.children) as HTMLElement[]) : []) {
          if (child === title && split) {
            tl.to(split.words, { yPercent: 0, duration: 1.25, stagger: 0.055 }, at);
            at += 0.35 + split.words.length * 0.03;
          } else {
            tl.to(child, { autoAlpha: 1, y: 0, duration: 1.1 }, at);
            at += 0.12;
          }
        }

        // Image frames wipe up while the headline is still landing.
        frames.forEach((frame, i) => {
          const start = 0.25 + i * 0.12;
          tl.to(frame, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" }, start);
          tl.to(frame.querySelector(":scope > img"), { scale: 1, duration: 2.2, clearProps: "transform,transition" }, start);
        });

        if (extras.length) {
          tl.to(extras, { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.1 }, Math.max(at, 0.9));
        }

        return () => {
          split?.revert();
        };
      });

      // ---- Scroll-out depth (desktop only) ----------------------------------
      mm.add(MQ.parallax, () => {
        const scrub = { trigger: el, start: "top top", end: "bottom top", scrub: true };
        const column = el.querySelector("h1")?.parentElement;
        const frames = el.querySelectorAll(":scope :has(> img)");

        if (column) gsap.to(column, { y: 70, ease: "none", scrollTrigger: scrub });
        if (frames.length) gsap.to(frames, { y: 120, ease: "none", scrollTrigger: scrub });

        el.querySelectorAll<HTMLElement>("[data-hero-glow]").forEach((glow) => {
          const depth = Number(glow.dataset.heroGlow) || 1;
          gsap.to(glow, { y: 160 * depth, ease: "none", scrollTrigger: scrub });
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className={cn("hero-reveal", className)} {...rest}>
      {children}
    </section>
  );
}

/**
 * `bg-clip-text` gradients break once words become separately transformed layers,
 * so give each split word its own slice of the parent's gradient for the animation.
 */
function paintGradientWords(words: HTMLElement[]) {
  for (const word of words) {
    const host = word.parentElement?.closest<HTMLElement>(".bg-clip-text");
    if (!host) continue;
    const hostRect = host.getBoundingClientRect();
    const rect = word.getBoundingClientRect();
    Object.assign(word.style, {
      backgroundImage: getComputedStyle(host).backgroundImage,
      backgroundSize: `${hostRect.width}px ${hostRect.height}px`,
      backgroundPosition: `${hostRect.left - rect.left}px ${hostRect.top - rect.top}px`,
      backgroundClip: "text",
      webkitBackgroundClip: "text",
      color: "transparent",
    });
    host.style.backgroundImage = "none";
  }
}
