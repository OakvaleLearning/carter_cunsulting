import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { ParallaxLayer } from "@/components/motion/Parallax";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PracticeIndex } from "./PracticeIndex";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative bg-paper py-28 lg:py-40">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-36">
            <Eyebrow className="text-brand">Our Practices</Eyebrow>
            <RevealText
              text="What We Do"
              className="mt-8 font-display text-[clamp(2.4rem,4vw,3.75rem)] leading-[1.05]"
            />
            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-sm leading-relaxed text-ink/70">
                Strategy, technology, policy, finance and sector expertise, brought together around the
                problem to be solved.
              </p>
            </FadeIn>
            <ParallaxLayer speed={50} className="hidden lg:block">
              <p aria-hidden className="mt-16 font-display text-[9rem] leading-none text-brand/10">
                05
              </p>
            </ParallaxLayer>
          </div>
        </div>
        <div className="lg:col-span-8">
          <PracticeIndex />
        </div>
      </div>
    </section>
  );
}
