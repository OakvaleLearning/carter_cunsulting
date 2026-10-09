"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { MorphWord } from "@/components/motion/MorphWord";
import { RotatingPhrase } from "@/components/motion/RotatingPhrase";
import { WaterRipple } from "@/components/motion/WaterRipple";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HERO_PHRASES } from "@/lib/content";
import { EASE_EXPO } from "@/lib/cn";

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        data-motion
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease: EASE_EXPO }}
      >
        {children}
      </motion.span>
    </span>
  );
}

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

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const m = reduce ? 0 : 1;

  // Background sinks and swells; text layers lift at staggered rates for depth.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", `${30 * m}%`]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1 + 0.12 * m]);
  const eyebrowY = useTransform(scrollYProgress, [0, 1], [0, 220 * m]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, 150 * m]);
  const supportY = useTransform(scrollYProgress, [0, 1], [0, 90 * m]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-svh items-end overflow-hidden bg-ink text-white">
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 will-change-transform">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.18 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 2.6, ease: EASE_EXPO }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Glass office towers rising into the sky"
            fill
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
          <WaterRipple src="/images/hero.jpg" />
        </motion.div>
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/90" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />
      <div aria-hidden className="absolute inset-0 bg-brand/20 mix-blend-multiply" />

      <motion.div style={{ opacity: fade }} className="relative container-x pb-16 pt-36 lg:pb-24">
        <motion.div style={{ y: eyebrowY }}>
          <Rise delay={0.75}>
            <p className="flex items-center gap-4 text-sm text-brand-light label-text sm:text-base">
              {/* <span aria-hidden className="-mt-[0.2em] h-px w-10 bg-current" /> */}
              <span>
                From Intent to <MorphWord from="Intent" to="Impact" delay={1.9} />
              </span>
            </p>
          </Rise>
        </motion.div>

        <motion.div style={{ y: headlineY }}>
          <h1 className="mt-8 max-w-6xl font-display text-[clamp(2.4rem,6.4vw,6.25rem)] leading-[1.02] tracking-[-0.01em]">
            <span className="sr-only">
              We translate government policy, development ambition and business strategy into sustainable outcomes.
            </span>
            <span aria-hidden className="block">
              <Line delay={0.85}>We translate</Line>
              <Line delay={0.95}>
                <RotatingPhrase phrases={HERO_PHRASES} startDelay={2400} className="italic text-brand-light" />
              </Line>
              <Line delay={1.05}>into sustainable outcomes.</Line>
            </span>
          </h1>
        </motion.div>

        <motion.div style={{ y: supportY }} className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <Rise delay={1.3} className="lg:col-span-6">
            <p className="max-w-xl text-lg leading-relaxed text-white/80">
              Carter Consulting has been closing the distance between intent and impact for governments,
              development partners and businesses since 2009.
            </p>
          </Rise>
          <Rise delay={1.45} className="flex flex-wrap gap-4 lg:col-span-6 lg:justify-end">
            <ButtonLink href="/case-studies">View Our Case Studies</ButtonLink>
            <ButtonLink href="/contact" variant="light">
              Talk to Carter
            </ButtonLink>
          </Rise>
        </motion.div>

        <Rise delay={1.8} className="mt-14 hidden items-center justify-between border-t border-white/15 pt-6 text-xs text-white/60 label-text md:flex">
          <span>Est. 2009</span>
          <span className="flex items-center gap-3">
            Scroll
            <span aria-hidden className="relative -mt-[0.2em] block h-8 w-px overflow-hidden bg-white/20">
              <motion.span
                className="absolute inset-x-0 top-0 h-1/2 bg-white"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </span>
        </Rise>
      </motion.div>
    </section>
  );
}
