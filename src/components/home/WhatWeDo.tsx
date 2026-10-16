import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PracticeIndex } from "./PracticeIndex";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative bg-paper py-28 lg:py-40">
      <div className="container-x">
        <FadeIn>
          <p className="max-w-4xl font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-snug text-ink/85">
            Carter Consulting has been closing the distance between intent and impact for governments, development
            partners and businesses since 2009.
          </p>
        </FadeIn>
      </div>

      <div className="container-x mt-20 grid gap-16 border-t border-ink/10 pt-20 lg:mt-28 lg:grid-cols-12 lg:pt-28">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-36">
            <Eyebrow className="text-brand">Our Practices</Eyebrow>
            <RevealText
              text="What We Do"
              className="mt-8 font-display text-[clamp(2.4rem,4vw,3.75rem)] leading-[1.05]"
            />
            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-sm text-lg leading-relaxed text-ink/75">
                Strategy, technology, policy, finance and sector expertise, brought together around the
                problem to be solved.
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="lg:col-span-8">
          <PracticeIndex />
        </div>
      </div>
    </section>
  );
}
