import Link from "next/link";
import { ParallaxImage, ParallaxLayer } from "@/components/motion/Parallax";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ServicesCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <ParallaxImage src="/images/cta.jpg" alt="" reveal={false} speed={14} className="!absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/55" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-brand/30 mix-blend-multiply" />

      <div className="container-x flex min-h-[70svh] flex-col justify-center py-28 lg:py-40">
        <ParallaxLayer speed={50}>
          <RevealText
            text="The right expertise for the decision ahead."
            className="max-w-4xl font-display text-[clamp(2.4rem,5.5vw,5.25rem)] italic leading-[1.04]"
            stagger={0.05}
          />
        </ParallaxLayer>
        <ParallaxLayer speed={25}>
          <FadeIn delay={0.15}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
              Tell us what you are working on, where you are in the process and what you need to resolve. Select
              a practice above or{" "}
              <Link href="/contact" className="text-brand-light underline decoration-brand-light/40 underline-offset-4 transition-colors hover:decoration-brand-light">
                talk to Carter
              </Link>
              .
            </p>
          </FadeIn>
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
