"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TIMELINE, TIMELINE_RANGE } from "@/lib/content";
import { cn, EASE_EXPO } from "@/lib/cn";

const [FIRST, LAST] = TIMELINE_RANGE;
const YEARS = Array.from({ length: LAST - FIRST + 1 }, (_, i) => FIRST + i);
const pct = (year: number) => ((year - FIRST) / (LAST - FIRST)) * 100;

export function TrackRecord() {
  const ruler = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ruler, offset: ["start 85%", "end 40%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section className="relative overflow-hidden bg-mist py-28 lg:py-40">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow className="text-brand">
              {FIRST} – {LAST}
            </Eyebrow>
            <RevealText
              text="Our Track Record"
              className="mt-8 font-display text-[clamp(2.4rem,4vw,3.75rem)] leading-[1.05]"
            />
          </div>
          <FadeIn delay={0.1} className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="leading-relaxed text-ink/75">
              Carter&rsquo;s development has been shaped by the changing needs of the institutions and markets in
              which we operate. From our establishment in 2009, the firm has expanded its capabilities and
              geographic reach in response to increasingly complex client requirements.
            </p>
          </FadeIn>
        </div>

        {/* Desktop: horizontal ruler. Alternate milestones sit higher so close years don't collide. */}
        <div ref={ruler} className="relative mt-24 hidden md:block">
          <ol className="relative h-80">
            {TIMELINE.map((m, i) => {
              const p = pct(m.year);
              return (
                <motion.li
                  key={`${m.year}-${m.title}`}
                  data-motion
                  className={cn(
                    "absolute bottom-0 w-64 border-brand/40",
                    // Cards hang off their year tick; past the midpoint they hang to the left so they stay inside the ruler.
                    p > 50 ? "border-r pr-5 text-right" : "border-l pl-5",
                    i % 2 ? "pb-36" : "pb-8",
                  )}
                  style={{ left: `${p}%`, translate: p > 50 ? "-100% 0" : undefined }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.15, ease: EASE_EXPO }}
                >
                  <p className="font-display text-5xl leading-none text-brand">{m.year}</p>
                  <p className="mt-4 font-display text-xl leading-snug">{m.title}</p>
                  {m.body && <p className="mt-2 text-sm leading-relaxed text-ink/65">{m.body}</p>}
                </motion.li>
              );
            })}
          </ol>

          <div className="relative h-px bg-ink/15">
            <motion.div
              data-motion
              style={{ scaleX: fill }}
              className="absolute inset-0 origin-left bg-brand"
            />
          </div>
          <ol aria-hidden className="relative mt-3 flex justify-between">
            {YEARS.map((y) => {
              const marked = TIMELINE.some((m) => m.year === y);
              return (
                <li key={y} className="flex w-0 flex-col items-center">
                  <span className={marked ? "h-3 w-px bg-brand" : "h-2 w-px bg-ink/25"} />
                  <span
                    className={
                      marked
                        ? "mt-3 font-label text-[11px] text-brand tabular-nums"
                        : "mt-3 hidden font-label text-[11px] text-ink/40 tabular-nums lg:block"
                    }
                  >
                    &rsquo;{String(y).slice(2)}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile: vertical line */}
        <ol className="relative mt-16 space-y-12 border-l border-brand/30 pl-8 md:hidden">
          {TIMELINE.map((m) => (
            <FadeIn as="li" key={`${m.year}-${m.title}`} className="relative">
              <span aria-hidden className="absolute -left-[2.3rem] top-3 size-2.5 rounded-full bg-brand" />
              <p className="font-display text-4xl leading-none text-brand">{m.year}</p>
              <p className="mt-3 font-display text-xl leading-snug">{m.title}</p>
              {m.body && <p className="mt-2 text-sm leading-relaxed text-ink/65">{m.body}</p>}
            </FadeIn>
          ))}
        </ol>

        <FadeIn className="mt-20 lg:mt-28">
          <p className="max-w-3xl font-display text-[clamp(1.35rem,2vw,1.85rem)] italic leading-snug text-ink/80">
            Each stage of that development has added to the firm&rsquo;s experience across strategy, technology,
            finance, programme delivery and sector advisory, while strengthening the relationships that underpin
            our work with public institutions, development partners and businesses.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
