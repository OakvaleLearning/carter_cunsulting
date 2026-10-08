import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LEADERSHIP_TEAM } from "@/lib/people";
import { LinkedIn, Portrait } from "./Profiles";

export function Leadership() {
  return (
    <section aria-labelledby="leadership-heading" className="bg-paper py-28 lg:py-40">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow className="text-brand">01 / 03</Eyebrow>
            <div id="leadership-heading">
              <RevealText
                text="Leadership"
                className="mt-8 font-display text-[clamp(2.4rem,4vw,3.75rem)] leading-[1.05]"
              />
            </div>
          </div>
          <FadeIn delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:self-end">
            <p className="text-lg leading-relaxed text-ink/75">
              Carter brings together experienced professionals across strategy, public policy, technology, finance,
              programme delivery and sector advisory. Our leadership team provides the institutional perspective,
              technical expertise and delivery discipline that underpin our work.
            </p>
          </FadeIn>
        </div>

        <ul className="mt-20 grid gap-px bg-ink/10 lg:grid-cols-3">
          {LEADERSHIP_TEAM.map((p, i) => (
            <FadeIn as="li" key={p.name} delay={i * 0.12} className="group flex flex-col bg-paper p-8 sm:p-10 lg:p-12">
              <Portrait
                name={p.name}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 80vw, 100vw"
                className="aspect-square w-full"
              />
              <h3 className="mt-10 font-display text-4xl leading-none">{p.name}</h3>
              <p className="mt-4 text-[11px] text-brand label-text">{p.role}</p>
              <p className="mt-8 leading-relaxed text-ink/70">{p.bio}</p>
              {p.linkedin && (
                <div className="mt-auto pt-10">
                  <LinkedIn href={p.linkedin} name={p.name} />
                </div>
              )}
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
