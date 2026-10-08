"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParallaxImage } from "@/components/motion/Parallax";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CAREER_LINES } from "@/lib/content";
import { cn } from "@/lib/cn";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

export function Careers() {
  return (
    <section id="careers" className="relative isolate overflow-hidden bg-ink text-white">
      <ParallaxImage
        src="/images/careers.jpg"
        alt=""
        reveal={false}
        speed={14}
        className="!absolute inset-0 -z-10"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/80 to-ink" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-brand/25 mix-blend-multiply" />

      <div className="container-x py-28 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow className="text-brand-light">Join Us</Eyebrow>
            <RevealText
              text="Careers at Carter"
              className="mt-8 font-display text-[clamp(2.4rem,4.4vw,4.25rem)] leading-[1.04]"
            />
          </div>
          <div className="space-y-6 leading-relaxed text-white/75 lg:col-span-6 lg:col-start-7 lg:self-end">
            <FadeIn>
              <p>
                The quality of our work depends on the people who do it. We look for professionals who are
                comfortable working on difficult problems, bringing intellectual discipline to their work and
                operating across the boundaries of their own specialism.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p>
                Carter offers exposure to assignments that sit close to major institutional, economic and
                technological developments across Africa. For people who want to deepen their expertise while
                developing a broader understanding of how organisations, markets and public institutions work, that
                creates a different kind of professional environment.
              </p>
            </FadeIn>
          </div>
        </div>

        <ul className="mt-24 lg:mt-36">
          {CAREER_LINES.map((line, i) => (
            <Line key={line} text={line} index={i} />
          ))}
        </ul>

        <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <RevealText
            as="p"
            text="Talk to Carter."
            className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-none text-brand-light"
          />
          <FadeIn delay={0.2}>
            <ButtonLink href="/contact">Explore Careers</ButtonLink>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/** Each line brightens and settles into place as it rises through the viewport. */
function Line({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "start 50%"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0.18, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 40, 0]);

  return (
    <li ref={ref} className="border-t border-white/10 py-5 lg:py-7">
      <motion.p
        data-motion
        style={{ opacity, x }}
        className={cn(
          "font-display text-[clamp(1.6rem,3.6vw,3.25rem)] italic leading-tight",
          index % 2 === 1 && "lg:pl-24",
        )}
      >
        {text}
      </motion.p>
    </li>
  );
}
