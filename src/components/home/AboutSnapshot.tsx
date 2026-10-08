import { ParallaxImage, ParallaxLayer } from "@/components/motion/Parallax";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

const STATEMENTS = [
  {
    label: "Mission",
    text: "To be the firm that governments, development partners and businesses call on to turn intent into impact, particularly where the mandate has no precedent to follow.",
  },
  {
    label: "Africa Growth Statement",
    text: "To advance the continent’s development by closing the distance between policy ambition and delivered outcomes, at the scale and complexity that Africa’s most consequential challenges demand.",
  },
];

export function AboutSnapshot() {
  return (
    <section className="relative overflow-hidden bg-mist">
      <div className="container-x grid gap-16 py-28 lg:grid-cols-12 lg:gap-12 lg:py-40">
        <div className="lg:col-span-7">
          <Eyebrow className="text-brand">About Carter</Eyebrow>
          <RevealText
            as="p"
            text="A management and technology consulting firm advising organisations on complex strategic, institutional and operational challenges."
            className="mt-8 font-display text-[clamp(1.9rem,3.4vw,3.25rem)] leading-[1.12]"
            stagger={0.025}
          />
          <div className="mt-12 grid gap-8 text-ink/75 md:grid-cols-2">
            <FadeIn>
              <p className="leading-relaxed">
                Our work brings together strategy, technology, policy, finance and sector expertise to help
                clients make better decisions, strengthen institutional performance and deliver at scale.
              </p>
              <p className="mt-5 leading-relaxed">
                Since 2009, we have worked with governments, public institutions, development partners and
                private sector organisations across Nigeria and the wider region.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="leading-relaxed">
                Our assignments have ranged from public-sector reform and digital government to investment
                planning, infrastructure, health systems and enterprise transformation, often in environments
                where the scale, complexity and institutional context demand expertise across several
                disciplines.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="mt-12">
            <ButtonLink href="/about" variant="dark">
              More about Carter
            </ButtonLink>
          </FadeIn>
        </div>

        <div className="relative lg:col-span-5">
          <ParallaxImage
            src="/images/about.jpg"
            alt="A calm, modern office corridor"
            className="aspect-[4/5] w-full"
            sizes="(min-width: 1024px) 40vw, 100vw"
            speed={12}
          />
          <ParallaxLayer speed={-70} className="absolute -bottom-8 -left-4 sm:-left-10">
            <div className="bg-brand px-8 py-7 text-white shadow-2xl shadow-ink/20">
              <p className="text-[11px] text-white/70 label-text">Established</p>
              <p className="mt-2 font-display text-6xl leading-none">2009</p>
            </div>
          </ParallaxLayer>
        </div>
      </div>

      <div className="bg-brand-deep text-white">
        <div className="container-x grid divide-y divide-white/15 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {STATEMENTS.map((s, i) => (
            <div key={s.label} className={i === 0 ? "py-16 lg:py-24 lg:pr-16" : "py-16 lg:py-24 lg:pl-16"}>
              <ParallaxLayer speed={i === 0 ? 24 : 40}>
                <p className="text-xs text-brand-light label-text">{s.label}</p>
                <RevealText
                  as="p"
                  text={s.text}
                  className="mt-6 font-display text-[clamp(1.5rem,2.3vw,2.1rem)] italic leading-snug"
                  stagger={0.02}
                  delay={i * 0.15}
                />
              </ParallaxLayer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
