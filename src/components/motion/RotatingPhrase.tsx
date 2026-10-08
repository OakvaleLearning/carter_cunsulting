"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn, EASE_INOUT } from "@/lib/cn";

/**
 * Holds one phrase, then wipes it out left-to-right as the next wipes in.
 * Every phrase is stacked invisibly to reserve the widest footprint, so the
 * surrounding sentence never reflows. Reduced motion holds the first phrase.
 */
export function RotatingPhrase({
  phrases,
  className,
  interval = 3200,
  startDelay = 0,
}: {
  phrases: string[];
  className?: string;
  interval?: number;
  startDelay?: number;
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
    <span className={cn("relative inline-grid align-bottom", className)}>
      {phrases.map((p) => (
        <span key={p} aria-hidden className="invisible col-start-1 row-start-1 whitespace-nowrap pr-[0.12em]">
          {p}
        </span>
      ))}
      <AnimatePresence initial={false}>
        <motion.span
          key={index}
          className="absolute left-0 top-0 whitespace-nowrap pr-[0.12em]"
          initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0.4 }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
          exit={{ clipPath: "inset(0% 0% 0% 100%)", opacity: 0 }}
          transition={{ duration: 0.9, ease: EASE_INOUT }}
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
