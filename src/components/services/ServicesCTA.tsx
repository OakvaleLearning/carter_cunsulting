import { ParallaxImage, ParallaxLayer } from "@/components/motion/Parallax";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ServicesCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <ParallaxImage src="/images/cta.jpg" alt="" reveal={false} speed={14} className="!absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/55" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-brand/30 mix-blend-multiply" />

      <div className="container-x flex min-h-[60svh] flex-col justify-center py-28 lg:py-40">
        <ParallaxLayer speed={50}>
          {/* The break sits after "expertise" so the longer line falls at the bottom. */}
          <h2 className="font-display text-[clamp(2rem,4vw,3.75rem)] leading-[1.1]">
            <RevealText as="span" text="The right expertise" className="block" stagger={0.05} />
            <RevealText as="span" text="for the decision ahead…" className="block" stagger={0.05} delay={0.15} />
          </h2>
        </ParallaxLayer>
        <ParallaxLayer speed={25}>
          <FadeIn delay={0.25} className="mt-12">
            <ButtonLink href="/contact" className="px-9 py-5 text-sm">
              Talk to Carter
            </ButtonLink>
          </FadeIn>
        </ParallaxLayer>
      </div>
    </section>
  );
}
