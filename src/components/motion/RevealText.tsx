"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = (delay: number) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: delay } },
});

const word = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.95, ease: EASE } },
};

type Tag = "h1" | "h2" | "h3" | "p";

/**
 * Headline whose words rise out of a clipped baseline when scrolled into view.
 * Screen readers get the sentence once via aria-label; the split spans are hidden from them.
 */
export function RevealText({
  text,
  as = "h2",
  className,
  delay = 0,
}: {
  text: string;
  as?: Tag;
  className?: string;
  delay?: number;
}) {
  const MotionTag = motion[as];
  const words = text.split(" ");

  return (
    <MotionTag
      aria-label={text}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={container(delay)}
    >
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span aria-hidden className={cn("inline-block overflow-hidden align-bottom", "pb-[0.08em] -mb-[0.08em]")}>
            <motion.span className="inline-block" variants={word}>
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </MotionTag>
  );
}
