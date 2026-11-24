"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Card with a soft light that follows the cursor and a highlighted rim near it.
 * Pointer position is written straight to CSS variables — no React re-renders,
 * and the painting lives in `.spotlight` (globals.css), hover-capable devices only.
 *
 * `tint` is an "r g b" triplet so each division can keep its own colour.
 */
export function SpotlightCard({
  children,
  className,
  tint = "0 82 255",
}: {
  children: React.ReactNode;
  className?: string;
  tint?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      style={{ "--spot": tint } as React.CSSProperties}
      className={cn("spotlight", className)}
    >
      {children}
    </div>
  );
}
