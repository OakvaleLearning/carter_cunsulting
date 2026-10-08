import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ASSOCIATES } from "@/lib/people";
import { PersonCard } from "./Profiles";

export function Associates() {
  return (
    <section aria-labelledby="associates-heading" className="bg-paper py-28 lg:py-40">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow className="text-brand">03 / 03</Eyebrow>
            <div id="associates-heading">
              <RevealText
                text="Consultants & Technical Advisers"
                className="mt-8 font-display text-[clamp(2.4rem,4vw,3.75rem)] leading-[1.05]"
              />
            </div>
          </div>
          <FadeIn delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:self-end">
            <p className="text-lg leading-relaxed text-ink/75">
              Carter also works with consultants and technical advisers seconded to the firm, bringing additional
              specialist capability to specific assignments.
            </p>
          </FadeIn>
        </div>

        <ul className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ASSOCIATES.map((person, i) => (
            <FadeIn as="li" key={person.name} delay={i * 0.1}>
              <PersonCard person={person} />
            </FadeIn>
          ))}
        </ul>

        <FadeIn className="mt-24 grid gap-8 border-t border-ink/10 pt-14 lg:grid-cols-12 lg:gap-12">
          <h3 className="font-display text-3xl leading-tight lg:col-span-4">Technical Advisers</h3>
          <p className="font-display text-[clamp(1.35rem,2vw,1.75rem)] italic leading-snug text-ink/80 lg:col-span-7 lg:col-start-6">
            As our practice areas grow in scale and project complexity, we maintain a bench of technical advisers
            who bring specialist expertise to assignments where deeper technical knowledge is required. They work
            alongside our core teams, strengthening our ability to respond to the particular demands of each mandate.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
