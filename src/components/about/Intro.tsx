import { ParallaxImage, ParallaxLayer } from "@/components/motion/Parallax";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

const DISCIPLINES = [
  "The policy and institutional context",
  "The financial and commercial case",
  "The technology required",
  "The structures and capabilities needed to deliver",
];

export function Intro() {
  return (
    <section className="relative bg-paper py-28 lg:py-40">
      <div className="container-x">
        <Eyebrow className="text-brand">Who We Are</Eyebrow>
        <RevealText
          as="p"
          text="We work with governments, public institutions, development partners and businesses across Nigeria and international markets on assignments where strategic ambition has to translate into practical, measurable outcomes."
          className="mt-8 max-w-5xl font-display text-[clamp(1.9rem,3.6vw,3.4rem)] leading-[1.12]"
          stagger={0.02}
        />

        <div className="mt-20 grid gap-16 lg:mt-28 lg:grid-cols-12 lg:gap-12">
          <div className="relative lg:col-span-5">
            <ParallaxImage
              src="/images/strategy.jpg"
              alt="Advisers reviewing documents around a table"
              className="aspect-[4/5] w-full"
              sizes="(min-width: 1024px) 40vw, 100vw"
              speed={12}
            />
            <ParallaxLayer speed={-60} className="absolute -bottom-10 -right-4 hidden sm:block lg:-right-10">
              <div className="bg-ink px-8 py-7 text-white shadow-2xl shadow-ink/25">
                <p className="text-[11px] text-brand-light label-text">Multidisciplinary</p>
                <p className="mt-2 font-display text-2xl italic leading-tight">Management &amp; Technology</p>
              </div>
            </ParallaxLayer>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <FadeIn>
              <p className="text-lg leading-relaxed text-ink/80">
                Our work spans strategy and public policy, technology and digital transformation, financial and
                transaction advisory, programme and project delivery, and sector advisory. Bringing these
                capabilities together allows us to address complex assignments from more than one perspective:
              </p>
            </FadeIn>

            <ol className="mt-10 border-t border-ink/10">
              {DISCIPLINES.map((d, i) => (
                <FadeIn
                  as="li"
                  key={d}
                  delay={i * 0.08}
                  className="flex items-baseline gap-6 border-b border-ink/10 py-5"
                >
                  <span className="font-label text-xs text-brand tabular-nums">0{i + 1}</span>
                  <span className="font-display text-xl leading-snug lg:text-2xl">{d}</span>
                </FadeIn>
              ))}
            </ol>

            <FadeIn delay={0.1}>
              <p className="mt-10 leading-relaxed text-ink/70">
                This matters because the most consequential assignments rarely sit within a single discipline. A
                public-sector reform may require policy design, institutional restructuring, technology, financing
                and programme management. A major investment may depend as much on regulatory conditions and
                implementation capacity as it does on the underlying commercial proposition. Our role is to
                understand those interdependencies early and help clients make decisions that remain viable
                through implementation.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
