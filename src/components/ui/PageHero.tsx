"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { cn, EASE_EXPO } from "@/lib/cn";



function Rise({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <motion.div
      data-motion
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: EASE_EXPO }}
    >
      {children}
    </motion.div>
  );
}

/** Inner-page hero: full-bleed photo under a translucent overlay, with layered parallax. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  titleClassName,
  eyebrowClassName,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image: string;
  /** Overrides the title's size, e.g. for sentence-length headlines. */
  titleClassName?: string;
  eyebrowClassName?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const m = reduce ? 0 : 1;
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", `${28 * m}%`]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 140 * m]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const eyebrowY = useTransform(scrollYProgress, [0, 1], [0, 220 * m]);
  
  return (
    <section ref={ref} className="relative flex min-h-[78svh] items-end overflow-hidden bg-ink text-white">
      <motion.div style={{ y: imageY }} className="absolute inset-0 will-change-transform">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 2.2, ease: EASE_EXPO }}
        >
          <Image src={image} alt="" fill sizes="100vw" className="object-cover" loading="eager" fetchPriority="high" />
        </motion.div>
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/45 to-ink/90" />
      <div aria-hidden className="absolute inset-0 bg-brand/25 mix-blend-multiply" />

      <motion.div style={{ y: textY, opacity: fade }} className="relative container-x pb-20 pt-40 lg:pb-28">
         <motion.div style={{ y: eyebrowY }}>
                 <Rise delay={0.75}>
                   <p className="flex items-center gap-4 text-sm text-brand-light label-text sm:text-base">
                     <span>
                      {eyebrow}
                     </span>
                   </p>
                 </Rise>
               </motion.div>
        <h1
          className={cn(
            "mt-6 max-w-5xl font-display text-[clamp(2.2rem,4.8vw,4.5rem)] leading-[1.06] tracking-[-0.01em]",
            titleClassName,
          )}
        >
          <span className="block overflow-hidden pb-[0.1em]">
            <motion.span
              data-motion
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.9, ease: EASE_EXPO }}
            >
              {title}
            </motion.span>
          </span>
        </h1>
        {intro && (
          <motion.p
            data-motion
            className="mt-6 max-w-xl text-xl leading-relaxed text-white/80"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15, ease: EASE_EXPO }}
          >
            {intro}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
