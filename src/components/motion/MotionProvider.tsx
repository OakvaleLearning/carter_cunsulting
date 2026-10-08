"use client";

import { MotionConfig } from "framer-motion";

// "user" honours prefers-reduced-motion: transform animations resolve instantly, fades remain.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
