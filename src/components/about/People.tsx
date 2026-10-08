import Link from "next/link";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { ParallaxLayer } from "@/components/motion/Parallax";
import { Portrait } from "@/components/people/Profiles";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LEADERSHIP_TEAM, PRACTICE_TEAMS, photoOf } from "@/lib/people";

// Six practice-team members with portraits, one or two from each practice, for the mosaic.
const MOSAIC = PRACTICE_TEAMS.flatMap((t) => t.people)
  .filter((p, i, all) => photoOf(p.name) && !LEADERSHIP_TEAM.includes(p) && all.indexOf(p) === i)
  .filter((_, i) => i % 2 === 0)
  .slice(0, 6);

export function People() {
  return (
    <section className="relative overflow-hidden border-t border-ink/10 bg-paper">
      <div className="container-x grid gap-14 pt-28 lg:grid-cols-12 lg:gap-12 lg:pt-40">
        <div className="lg:col-span-6">
          <Eyebrow className="text-brand">Leadership</Eyebrow>
          <RevealText
            text="Our People"
            className="mt-8 font-display text-[clamp(2.4rem,4.4vw,4.25rem)] leading-[1.04]"
          />
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/80">
              Carter brings together professionals with backgrounds across management consulting, technology,
              public policy, finance, programme delivery, health systems and data.
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <p className="mt-6 max-w-xl leading-relaxed text-ink/65">
              Our leadership model is deliberately multidisciplinary. Senior practitioners bring both specialist
              expertise and experience of working across institutional boundaries, allowing teams to be assembled
              around the requirements of each assignment rather than around fixed functional silos.
            </p>
          </FadeIn>
        </div>

        {/* Mosaic of the wider team; the middle column drifts against the scroll. */}
        <ul aria-label="Members of our practice teams" className="grid grid-cols-3 gap-3 lg:col-span-5 lg:col-start-8">
          {MOSAIC.map((p, i) => (
            <li key={p.name} className={i % 3 === 1 ? "translate-y-8" : undefined}>
              <ParallaxLayer speed={i % 3 === 1 ? -30 : 20}>
                <FadeIn delay={i * 0.06}>
                  <Link href="/our-people" className="group block" title={`${p.name}, ${p.role}`}>
                    <Portrait name={p.name} sizes="(min-width: 1024px) 13vw, 30vw" className="aspect-square w-full" />
                  </Link>
                </FadeIn>
              </ParallaxLayer>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-x pb-28 pt-20 lg:pb-40 lg:pt-28">
        <p className="text-xs text-brand label-text">Operational Leadership</p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP_TEAM.map((p, i) => (
            <FadeIn as="li" key={p.name} delay={i * 0.1}>
              <Link
                href="/our-people"
                className="group flex h-full flex-col border border-ink/10 bg-white transition-colors duration-500 hover:border-brand/40"
              >
                <Portrait name={p.name} sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw" className="aspect-square w-full" />
                <span className="block p-8">
                  <span className="block font-display text-3xl leading-tight transition-colors duration-300 group-hover:text-brand">
                    {p.name}
                  </span>
                  <span className="mt-3 block text-sm leading-snug text-ink/60">{p.role}</span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </ul>
        <FadeIn className="mt-12">
          <ButtonLink href="/our-people" variant="dark">
            Meet our people
          </ButtonLink>
        </FadeIn>
      </div>
    </section>
  );
}
