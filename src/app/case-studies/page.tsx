import type { Metadata } from "next";
import { ProjectIndex } from "@/components/case-studies/ProjectIndex";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { INTRO } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: INTRO.body[0],
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Selected Engagements"
        title="Case Studies"
        image="/images/case-studies-hero-lagos.jpg"
      />

      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <RevealText
                text={INTRO.heading}
                className="font-display text-[clamp(2.4rem,4vw,3.75rem)] leading-[1.05]"
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

          <div className="mt-20">
            <ProjectIndex />
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
