import { ParallaxImage, ParallaxLayer } from "@/components/motion/Parallax";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AdviserForm } from "./AdviserForm";

export function JoinCarter() {
  return (
    <>
      <section id="technical-advisers" aria-labelledby="adviser-heading" className="scroll-mt-20 bg-paper py-24 lg:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Eyebrow className="text-brand">Technical Advisors</Eyebrow>
              <div id="adviser-heading">
                <RevealText
                  as="h2"
                  text="Interested in becoming a Technical Advisor?"
                  className="mt-8 font-display text-[clamp(2rem,3.2vw,3rem)] leading-[1.08]"
                  stagger={0.04}
                />
              </div>
              <FadeIn delay={0.1}>
                <p className="mt-6 text-lg leading-relaxed text-ink/75">
                  We work with experienced specialists who can bring technical depth to specific assignments across
                  our practice areas. If you have expertise that could complement Carter&rsquo;s work, tell us a
                  little about your experience and areas of specialism.
                </p>
              </FadeIn>
            </div>
          </div>
          <FadeIn delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <div className="border border-ink/10 bg-white p-8 shadow-[0_30px_80px_-40px_rgba(11,26,19,0.25)] sm:p-12">
              <AdviserForm />
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="join" className="relative isolate overflow-hidden bg-ink text-white">
        <ParallaxImage src="/images/join-lekki-aerial.jpg" alt="" reveal={false} speed={14} className="!absolute inset-0 -z-10" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/75 to-ink/90" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-brand/25 mix-blend-multiply" />

        <div className="container-x grid min-h-[70svh] items-center gap-12 py-28 lg:grid-cols-12 lg:py-40">
          <div className="lg:col-span-5">
            <Eyebrow className="text-brand-light">Careers</Eyebrow>
            <RevealText
              text="Join Carter"
              className="mt-8 font-display text-[clamp(2.4rem,4.4vw,4.25rem)] leading-[1.04]"
            />
            <FadeIn delay={0.1}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/80">
                Our work is shaped by people who bring expertise, judgement and a willingness to engage with
                complex problems. As Carter grows, we are looking for people who want to contribute to work that
                matters across institutions, sectors and markets.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="mt-10">
              <ButtonLink href="/about#careers-form">Explore careers at Carter</ButtonLink>
            </FadeIn>
          </div>
          <ParallaxLayer speed={40} className="lg:col-span-6 lg:col-start-7">
            <p className="font-display text-[clamp(2.25rem,4.4vw,4.25rem)] leading-[1.08] text-brand-light">
              <RevealText as="span" text="Bring your expertise." className="block" stagger={0.06} />
              <RevealText as="span" text="Build with Carter." className="block" stagger={0.06} delay={0.2} />
            </p>
          </ParallaxLayer>
        </div>
      </section>
    </>
  );
}
