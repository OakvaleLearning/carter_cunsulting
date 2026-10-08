"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { cn, EASE_EXPO } from "@/lib/cn";

/**
 * Image that drifts against the scroll inside a clipped frame, and un-clips
 * from an inset as it enters view. The inner layer is oversized by 20% top and
 * bottom, so `speed` (percent of the inner height) must stay at or below 14.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  speed = 10,
  sizes = "100vw",
  eager = false,
  reveal = true,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  sizes?: string;
  eager?: boolean;
  reveal?: boolean;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const s = reduce ? 0 : Math.min(speed, 14);
  const y = useTransform(scrollYProgress, [0, 1], [`-${s}%`, `${s}%`]);

  return (
    <motion.div
      ref={ref}
      data-motion
      className={cn("relative overflow-hidden", className)}
      initial={reveal ? { clipPath: "inset(10% 6% 10% 6%)" } : false}
      whileInView={reveal ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.4, ease: EASE_EXPO }}
    >
      <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[20%] will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
        />
      </motion.div>
      {children}
    </motion.div>
  );
}

/** Moves its children at a different rate to the page; positive speed lags, negative leads. */
export function ParallaxLayer({
  children,
  className,
  speed = 60,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const s = reduce ? 0 : speed;
  const y = useTransform(scrollYProgress, [0, 1], [s, -s]);

  return (
    <motion.div ref={ref} style={{ y }} className={cn("will-change-transform", className)}>
      {children}
    </motion.div>
  );
}
