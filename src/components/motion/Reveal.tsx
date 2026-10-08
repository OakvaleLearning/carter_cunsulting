"use client";

import { motion, type Variants } from "framer-motion";
import { cn, EASE_EXPO } from "@/lib/cn";

type TextTag = "h1" | "h2" | "h3" | "p";

const wordVariants: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: EASE_EXPO } },
};

/** Masked stagger reveal: each word rises out of its own clipping line. */
export function RevealText({
  text,
  as = "h2",
  className,
  delay = 0,
  stagger = 0.05,
}: {
  text: string;
  as?: TextTag;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const Tag = motion[as];
  const words = text.split(" ");

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
          <motion.span data-motion className="inline-block will-change-transform" variants={wordVariants}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Soft rise-and-fade for blocks of content as they enter the viewport. */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li";
}) {
  const Tag = motion[as];
  return (
    <Tag
      data-motion
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE_EXPO }}
    >
      {children}
    </Tag>
  );
}

/** Thin rule that draws itself in from the left. */
export function DrawLine({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden
      data-motion
      className={cn("block h-px origin-left bg-current", className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay, ease: EASE_EXPO }}
    />
  );
}
