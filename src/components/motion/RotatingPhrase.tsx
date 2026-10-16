"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn, EASE_INOUT } from "@/lib/cn";

/**
 * Holds one phrase, then wipes it out left-to-right as the next wipes in.
 * Every phrase is stacked invisibly to reserve the widest footprint, so the
 * surrounding sentence never reflows. The wipe only clips sideways, and each
 * phrase carries room below the baseline, so descenders (g, y, p) are never cut.
 * Reduced motion holds the first phrase. With `wrap`, long phrases may run
 * over more than one line instead of holding to one.
 */
export function RotatingPhrase({
  phrases,
  className,
  interval = 3200,
  startDelay = 0,
  wrap = false,
}: {
  phrases: string[];
  className?: string;
  interval?: number;
  startDelay?: number;
  wrap?: boolean;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      timer = setInterval(() => setIndex((i) => (i + 1) % phrases.length), interval);
    }, startDelay);
    return () => {
      clearTimeout(start);
      if (timer) clearInterval(timer);
    };
  }, [reduce, phrases.length, interval, startDelay]);

  return (
    <span className={cn("relative align-bottom", wrap ? "grid w-fit max-w-full" : "inline-grid", className)}>
      {phrases.map((p) => (
        <span
          key={p}
          aria-hidden
          className={cn("invisible col-start-1 row-start-1 pb-[0.2em] pr-[0.12em]", !wrap && "whitespace-nowrap")}
        >
          {p}
        </span>
      ))}
      <AnimatePresence initial={false}>
        <motion.span
          key={index}
          className={cn("absolute inset-x-0 top-0 pb-[0.2em] pr-[0.12em]", !wrap && "whitespace-nowrap")}
          initial={{ clipPath: "inset(-50% 100% -50% 0%)", opacity: 0.4 }}
          animate={{ clipPath: "inset(-50% 0% -50% 0%)", opacity: 1 }}
          exit={{ clipPath: "inset(-50% 0% -50% 100%)", opacity: 0 }}
          transition={{ duration: 0.9, ease: EASE_INOUT }}
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
