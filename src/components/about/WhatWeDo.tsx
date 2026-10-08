import { ParallaxImage, ParallaxLayer } from "@/components/motion/Parallax";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function WhatWeDo() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep text-white">
      <ParallaxImage
        src="/images/sector.jpg"
        alt=""
        reveal={false}
        speed={14}
        className="!absolute inset-0 -z-10 opacity-20"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-deep via-brand-deep/90 to-ink/80" />

      <div className="container-x grid gap-14 py-28 lg:grid-cols-12 lg:gap-12 lg:py-40">
        <div className="lg:col-span-7">
          <Eyebrow className="text-brand-light">What We Do</Eyebrow>
          <ParallaxLayer speed={30}>
            <RevealText
              text="Carter works at the point where important decisions become programmes, investments, operating models and institutional change."
              className="mt-8 font-display text-[clamp(2rem,4vw,3.75rem)] leading-[1.08]"
              stagger={0.03}
            />
          </ParallaxLayer>
        </div>

        <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
          <FadeIn>
            <p className="leading-relaxed text-white/75">
              We advise on the issues that shape how organisations perform and how markets and public institutions
              develop. Depending on the assignment, this may involve developing policy and strategy, assessing
              investment and commercial opportunities, designing operating models, structuring transactions,
              developing digital platforms or establishing the governance and delivery arrangements for complex
              programmes.
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mt-6 leading-relaxed text-white/75">
              Our teams work across disciplines rather than through a sequence of disconnected handovers. This
              gives clients access to strategic, technical, financial and sector expertise within a single
              engagement, while maintaining a clear line of sight from the original objective to the outcome being
              pursued.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-10">
            <ButtonLink href="/services" variant="light">
              Explore our services
            </ButtonLink>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
