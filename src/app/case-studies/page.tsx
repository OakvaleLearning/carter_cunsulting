import type { Metadata } from "next";
import { ProjectIndex } from "@/components/case-studies/ProjectIndex";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { FEATURES, INTRO, SNAPSHOTS } from "@/lib/case-studies";

const years = [...FEATURES, ...SNAPSHOTS].flatMap((c) => (c.year ? [c.year] : []));
const FIRST = Math.min(...years);
const LAST = Math.max(...years);

const STATS = [
  { value: String(FEATURES.length), label: "Feature case studies" },
  { value: String(SNAPSHOTS.length), label: "Engagement snapshots" },
  { value: `${FIRST}–${LAST}`, label: "Years of engagements" },
  { value: String(new Set([...FEATURES, ...SNAPSHOTS].map((c) => c.client)).size), label: "Clients & programmes" },
];

export const metadata: Metadata = {
  title: "Case Studies",
  description: INTRO.body[0],
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={`Selected Engagements · ${FIRST}–${LAST}`}
        title="Case Studies"
        image="/images/case-studies-hero.jpg"
      />

      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow className="text-brand">Filter by practice · Open any engagement</Eyebrow>
              <RevealText
                text={INTRO.heading}
                className="mt-8 font-display text-[clamp(2.4rem,4vw,3.75rem)] leading-[1.05]"
              />
            </div>
            <FadeIn delay={0.1} className="space-y-6 lg:col-span-5 lg:col-start-8 lg:self-end">
              {INTRO.body.map((p) => (
                <p key={p} className="text-lg leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
            </FadeIn>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px bg-ink/10 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08} className="bg-paper py-6 pr-6 lg:py-8">
                <dt className="text-[11px] text-ink/50 label-text">{s.label}</dt>
                <dd className="mt-3 whitespace-nowrap font-display text-3xl leading-none text-brand sm:text-4xl lg:text-5xl">{s.value}</dd>
              </FadeIn>
            ))}
          </dl>

          <div className="mt-20">
            <ProjectIndex />
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
