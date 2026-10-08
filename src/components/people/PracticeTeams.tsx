import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PRACTICES } from "@/lib/content";
import { PRACTICE_TEAMS } from "@/lib/people";
import { PersonCard } from "./Profiles";

export function PracticeTeams() {
  return (
    <section aria-labelledby="practice-leadership-heading" className="bg-mist py-28 lg:py-40">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow className="text-brand">02 / 03</Eyebrow>
            <div id="practice-leadership-heading">
              <RevealText
                text="Practice Leadership"
                className="mt-8 font-display text-[clamp(2.4rem,4vw,3.75rem)] leading-[1.05]"
              />
            </div>
          </div>
          <FadeIn delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:self-end">
            <p className="text-lg leading-relaxed text-ink/75">
              Our practice leads bring specialist expertise to each area of Carter&rsquo;s work, supported by
              consultants and technical advisers drawn from relevant disciplines.
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 divide-y divide-ink/10 border-t border-ink/10">
          {PRACTICE_TEAMS.map((team) => {
            const number = PRACTICES.find((p) => p.slug === team.id)?.number;
            return (
              <div key={team.id} id={team.id} className="grid scroll-mt-28 gap-10 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20">
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-32">
                    <FadeIn>
                      <span className="font-display text-5xl leading-none text-brand/30">{number}</span>
                      <h3 className="mt-4 font-display text-3xl leading-tight">{team.title}</h3>
                      <p className="mt-3 text-[11px] text-ink/50 label-text">
                        {team.people.length} {team.people.length === 1 ? "member" : "members"}
                      </p>
                    </FadeIn>
                  </div>
                </div>
                <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8 xl:grid-cols-3">
                  {team.people.map((person, i) => (
                    <FadeIn as="li" key={person.name} delay={(i % 2) * 0.1}>
                      <PersonCard person={person} />
                    </FadeIn>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
