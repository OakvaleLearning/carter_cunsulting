import { ParallaxImage } from "@/components/motion/Parallax";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { RotatingPhrase } from "@/components/motion/RotatingPhrase";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CAREER_LINES } from "@/lib/content";
import { CareersForm } from "./CareersForm";

export function Careers() {
  return (
    <>
      <section id="careers" className="relative isolate overflow-hidden bg-ink text-white">
        <ParallaxImage
          src="/images/careers-lagos.jpg"
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
            <div className="space-y-6 text-lg leading-relaxed text-white/80 lg:col-span-6 lg:col-start-7 lg:self-end">
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
                  developing a broader understanding of how organisations, markets and public institutions work,
                  that creates a different kind of professional environment.
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="mt-24 font-display text-[clamp(2rem,4.2vw,4rem)] leading-[1.15] lg:mt-36">
            <span className="sr-only">Considering {CAREER_LINES.join(" ")}</span>
            <div aria-hidden>
              <FadeIn>Considering</FadeIn>
              <FadeIn delay={0.1}>
                <RotatingPhrase phrases={CAREER_LINES} interval={2600} wrap className="text-brand-light" />
              </FadeIn>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-12 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-display text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.1]">
              <RevealText as="span" text="Bring your expertise" className="block" />
              <RevealText as="span" text="Build with Carter" className="block text-brand-light" delay={0.15} />
            </p>
            <FadeIn delay={0.2}>
              <ButtonLink href="#careers-form">Explore Careers</ButtonLink>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="careers-form" aria-labelledby="careers-form-heading" className="scroll-mt-20 bg-paper py-24 lg:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Eyebrow className="text-brand">Careers</Eyebrow>
              <div id="careers-form-heading">
                <RevealText
                  as="h2"
                  text="Work With Carter"
                  className="mt-8 font-display text-[clamp(2rem,3.2vw,3rem)] leading-[1.08]"
                  stagger={0.04}
                />
              </div>
              <FadeIn delay={0.1}>
                <p className="mt-6 text-lg leading-relaxed text-ink/75">
                  Tell us where you are in your career and which area of our work interests you, and attach your
                  CV.
                </p>
              </FadeIn>
            </div>
          </div>
          <FadeIn delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <div className="border border-ink/10 bg-white p-8 shadow-[0_30px_80px_-40px_rgba(11,26,19,0.25)] sm:p-12">
              <CareersForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
