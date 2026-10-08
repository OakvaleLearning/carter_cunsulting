import { ParallaxImage, ParallaxLayer } from "@/components/motion/Parallax";
import { FadeIn } from "@/components/motion/Reveal";
import { RotatingPhrase } from "@/components/motion/RotatingPhrase";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CLOSING_PHRASES } from "@/lib/content";

export function ClosingCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <ParallaxImage
        src="/images/cta.jpg"
        alt=""
        reveal={false}
        speed={14}
        className="!absolute inset-0 -z-10"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/50" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-brand/30 mix-blend-multiply" />

      <div className="container-x flex min-h-[80svh] flex-col justify-center py-28 lg:py-40">
        <ParallaxLayer speed={60}>
          <h2 className="font-display text-[clamp(2.1rem,6vw,5.75rem)] italic leading-[1.05]">
            <span className="sr-only">
              Considering a new policy, a major investment, a technology platform, a reform programme or a new
              operating model?
            </span>
            <span aria-hidden className="block">
              <FadeIn>Considering</FadeIn>
              <FadeIn delay={0.1}>
                <RotatingPhrase phrases={CLOSING_PHRASES} interval={2600} className="text-brand-light" />
              </FadeIn>
            </span>
          </h2>
        </ParallaxLayer>
        <ParallaxLayer speed={30}>
          <FadeIn delay={0.25} className="mt-14">
            <ButtonLink href="/contact" className="px-9 py-5 text-sm">
              Talk to Carter
            </ButtonLink>
          </FadeIn>
        </ParallaxLayer>
      </div>
    </section>
  );
}
