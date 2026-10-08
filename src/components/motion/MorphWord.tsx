"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { EASE_EXPO } from "@/lib/cn";

/**
 * One word rolls letter-by-letter into another: each letter of `from` lifts
 * out of its mask as the matching letter of `to` rises in behind it.
 * Without JS only `to` is shown; with reduced motion the swap is instant.
 * The tree is identical either way so server and client markup match.
 */
export function MorphWord({ from, to, delay = 1.6 }: { from: string; to: string; delay?: number }) {
  const reduce = useReducedMotionSafe();
  const step = 0.06;
  const at = (duration: number, d: number) =>
    reduce ? { duration: 0 } : { duration, delay: d, ease: EASE_EXPO };

  return (
    <span className="relative inline-block">
      <span className="sr-only">{to}</span>
      <span aria-hidden data-motion-hide className="absolute left-0 top-0 flex">
        {from.split("").map((c, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "0%", opacity: 1 }}
              animate={{ y: "-110%", opacity: 0 }}
              transition={at(0.55, delay + i * step)}
            >
              {c}
            </motion.span>
          </span>
        ))}
      </span>
      <span aria-hidden className="flex">
        {to.split("").map((c, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              data-motion
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={at(0.6, delay + 0.12 + i * step)}
            >
              {c}
            </motion.span>
          </span>
        ))}
      </span>
    </span>
  );
}
