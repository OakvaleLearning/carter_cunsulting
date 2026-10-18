import { ParallaxImage, ParallaxLayer } from "@/components/motion/Parallax";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

const ASSIGNMENTS = [
  "National and Sub-National Government Programmes",
  "Public Sector Transformation",
  "Digital Government",
  "Economic and Sector Development",
  "Infrastructure Delivery",
  "Investment and Commercial Advisory",
];

export function Experience() {
  return (
    <section className="relative bg-paper">
      <div className="container-x grid gap-14 py-28 lg:grid-cols-12 lg:gap-12 lg:py-40">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-36">
            <Eyebrow className="text-brand">Our story</Eyebrow>
            <RevealText
              text="Our Experience"
              className="mt-8 font-display text-[clamp(2.4rem,4vw,3.75rem)] leading-[1.05]"
            />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <FadeIn>
            <p className="text-xl leading-relaxed text-ink/80 lg:text-2xl">
              We have worked across a range of institutional and market environments in Nigeria and
              beyond.
              <br />
              Our assignments have included:
            </p>
          </FadeIn>
          {/* A plain list, not pills, so the items don't read as clickable buttons. */}
          <ul className="mt-10 grid border-t border-ink/10 sm:grid-cols-2 sm:gap-x-10">
            {ASSIGNMENTS.map((a, i) => (
              <FadeIn
                as="li"
                key={a}
                delay={i * 0.06}
                y={14}
                className="flex items-baseline gap-4 border-b border-ink/10 py-5 font-display text-xl leading-snug text-ink lg:text-2xl"
              >
                <span aria-hidden className="h-px w-4 shrink-0 -translate-y-[0.3em] bg-brand" />
                {a}
              </FadeIn>
            ))}
          </ul>
          <FadeIn delay={0.1}>
            <p className="mt-10 text-lg leading-relaxed text-ink/70 lg:text-xl">
              The nature of this work has given us a practical understanding of how decisions are made and
              implemented within complex institutions. It also means we understand that recommendations must
              account for the regulatory environment, available resources, organisational capability, stakeholder
              interests, and the realities of execution.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-ink text-white">
        <ParallaxImage
          src="/images/delivery.jpg"
          alt=""
          speed={14}
          className="!absolute inset-0 -z-10"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-brand/25 mix-blend-multiply" />
        <div className="container-x flex min-h-[70svh] items-center py-28">
          <ParallaxLayer speed={50}>
            <RevealText
              as="p"
              text="For clients operating in Africa, these considerations are often central to whether an otherwise sound strategy can be implemented successfully. We bring that context into our work from the outset."
              className="max-w-4xl font-display text-[clamp(1.75rem,3.4vw,3.1rem)] leading-[1.15]"
              stagger={0.02}
            />
          </ParallaxLayer>
        </div>
      </div>
    </section>
  );
}
