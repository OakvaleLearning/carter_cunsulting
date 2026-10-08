import { GlowCard } from "@/components/motion/GlowCard";
import { ParallaxImage, ParallaxLayer } from "@/components/motion/Parallax";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PILLARS } from "@/lib/content";

export function Approach() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <ParallaxImage
        src="/images/approach.jpg"
        alt=""
        reveal={false}
        speed={14}
        className="!absolute inset-0 opacity-25"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />

      <div className="container-x relative py-28 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow className="text-brand-light">How We Work</Eyebrow>
            <RevealText
              text="The Carter Approach"
              className="mt-8 font-display text-[clamp(2.4rem,4.4vw,4.25rem)] leading-[1.04]"
            />
          </div>
          <FadeIn delay={0.15} className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="leading-relaxed text-white/70">
              Carter brings together unique capabilities that are critical to complex assignments: analytical
              rigour, cross-disciplinary expertise, institutional understanding and delivery capability. They
              shape how we approach an engagement from the initial case development through to implementation.
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          {PILLARS.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={(i % 2) * 0.12} className={i % 2 === 1 ? "md:mt-16" : undefined}>
              <GlowCard className="h-full p-8 lg:p-12">
                <span className="font-label text-sm text-brand-light tabular-nums">0{i + 1}</span>
                <h3 className="mt-8 font-display text-3xl leading-tight lg:text-4xl">{pillar.title}</h3>
                <p className="mt-5 leading-relaxed text-white/65">{pillar.body}</p>
              </GlowCard>
            </FadeIn>
          ))}
        </div>

        <ParallaxLayer speed={50} className="mt-24 lg:mt-32">
          <RevealText
            as="p"
            text="Together, these capabilities position Carter to work on complex, first-of-their-kind strategies, reforms and programmes that require integrated problem-solving, clear value creation and a credible path to delivery."
            className="max-w-5xl font-display text-[clamp(1.6rem,2.8vw,2.6rem)] italic leading-snug text-white/90"
            stagger={0.015}
          />
        </ParallaxLayer>
      </div>
    </section>
  );
}
