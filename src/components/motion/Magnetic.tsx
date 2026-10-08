"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

/** Pulls its child toward a mouse pointer with spring physics; inert for touch and reduced motion. */
export function Magnetic({
  children,
  className,
  strength = 0.12,
  max = 6,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  /** Largest offset in px, so wide elements don't travel further than small ones. */
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const spring = { stiffness: 220, damping: 26, mass: 0.3 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const clamp = (v: number) => Math.max(-max, Math.min(max, v * strength));
    x.set(clamp(e.clientX - (rect.left + rect.width / 2)));
    y.set(clamp(e.clientY - (rect.top + rect.height / 2)));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
