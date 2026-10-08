"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { RevealText } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PRINCIPLES } from "@/lib/content";
import { useMediaQuery, useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

/**
 * Principles as cards that pin and stack on desktop: each one slides over the
 * last, which settles back and dims. On small screens they simply flow.
 */
export function Principles() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section className="relative bg-ink text-white">
      <div className="container-x pb-16 pt-28 lg:pt-40">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow className="text-brand-light">Principles</Eyebrow>
            <RevealText
              text="How We Work"
              className="mt-8 font-display text-[clamp(2.4rem,4.4vw,4.25rem)] leading-[1.04]"
            />
          </div>
          <RevealText
            as="p"
            text="Our approach is grounded in three principles."
            className="font-display text-[clamp(1.4rem,2.2vw,2rem)] italic leading-snug text-white/75 lg:col-span-5 lg:col-start-8 lg:self-end"
            stagger={0.03}
          />
        </div>
      </div>

      <div ref={ref} className="container-x pb-28 lg:pb-40">
        {PRINCIPLES.map((p, i) => (
          <Card key={p.title} index={i} total={PRINCIPLES.length} progress={scrollYProgress} {...p} />
        ))}
      </div>
    </section>
  );
}

function Card({
  title,
  body,
  index,
  total,
  progress,
}: {
  title: string;
  body: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotionSafe();
  const stacked = useMediaQuery("(min-width: 64rem)");
  // Once the next card starts covering this one, ease it back.
  const start = (index + 1) / total - 1 / total / 2;
  const isLast = index === total - 1 || reduce || !stacked;
  const scale = useTransform(progress, [start, 1], [1, isLast ? 1 : 1 - (total - 1 - index) * 0.05]);
  const dim = useTransform(progress, [start, 1], [1, isLast ? 1 : 0.45]);

  return (
    <div className="lg:sticky lg:h-[85svh]" style={{ top: `calc(7rem + ${index * 2.5}rem)` }}>
      <motion.article
        style={{ scale, opacity: dim }}
        className="relative mt-5 origin-top overflow-hidden border border-white/10 bg-[#11261c] p-8 will-change-transform sm:p-12 lg:mt-0 lg:grid lg:min-h-[60svh] lg:grid-cols-12 lg:gap-12 lg:p-16"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[clamp(10rem,22vw,20rem)] leading-none text-white/[0.04]"
        >
          0{index + 1}
        </span>
        <div className="relative lg:col-span-5">
          <span className="font-label text-sm text-brand-light tabular-nums">
            0{index + 1} / 0{total}
          </span>
          <h3 className="mt-8 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none">{title}</h3>
        </div>
        <p className="relative mt-8 leading-relaxed text-white/70 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:self-end lg:text-lg">
          {body}
        </p>
      </motion.article>
    </div>
  );
}
