"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { EASE_EXPO } from "@/lib/cn";

/**
 * Cycles through full-sentence headlines. Every line is stacked invisibly in
 * one grid cell so the block always holds the tallest line's height and the
 * page below never jumps, even when lines wrap differently.
 */
export function RotatingHeadline({
  lines,
  interval = 3800,
  startDelay = 2200,
}: {
  lines: string[];
  interval?: number;
  startDelay?: number;
}) {
  const reduce = useReducedMotionSafe();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      timer = setInterval(() => setIndex((i) => (i + 1) % lines.length), interval);
    }, startDelay);
    return () => {
      clearTimeout(start);
      if (timer) clearInterval(timer);
    };
  }, [reduce, lines.length, interval, startDelay]);

  return (
    <span className="grid">
      <span className="sr-only">{lines[0]}</span>
      {lines.map((l) => (
        <span key={l} aria-hidden className="invisible col-start-1 row-start-1">
          {l}
        </span>
      ))}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={index}
          aria-hidden
          className="col-start-1 row-start-1"
          initial={{ opacity: 0, y: "0.35em", filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: "-0.25em", filter: "blur(6px)" }}
          transition={{ duration: 0.9, ease: EASE_EXPO }}
        >
          {lines[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
