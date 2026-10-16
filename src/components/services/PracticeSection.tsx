import { ParallaxImage } from "@/components/motion/Parallax";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { caseStudyCard } from "@/lib/case-studies";
import { SERVICES, shortTitle, type Practice } from "@/lib/content";
import { PracticeCaseStudies } from "./PracticeCaseStudies";

export function PracticeSection({ practice }: { practice: Practice }) {
  const detail = SERVICES[practice.slug];
  const title = shortTitle(practice.title);
  const cards = practice.caseStudies.flatMap((key) => caseStudyCard(key) ?? []);

  return (
    <section id={practice.slug} aria-labelledby={`${practice.slug}-title`} className="scroll-mt-28 py-24 lg:py-32">
      <FadeIn>
        <p className="text-xs text-brand label-text">Practice</p>
      </FadeIn>
      <div id={`${practice.slug}-title`}>
        <RevealText
          text={title}
          className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,4.2vw,3.75rem)] leading-[1.05]"
          stagger={0.04}
        />
      </div>
      <FadeIn delay={0.1}>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink/80">{detail.intro}</p>
      </FadeIn>

      <ParallaxImage
        src={practice.image}
        alt=""
        className="mt-14 aspect-[16/9] w-full sm:aspect-[16/7]"
        sizes="(min-width: 1024px) 70vw, 100vw"
        speed={12}
      />

      {detail.capabilities && (
        <ul className="mt-14 border-b border-ink/10">
          {detail.capabilities.map((c, i) => (
            <FadeIn
              as="li"
              key={c.title}
              delay={i * 0.1}
              className="group relative grid gap-4 border-t border-ink/10 py-8 md:grid-cols-12 md:gap-8 lg:py-10"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 -top-px h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-700 ease-expo group-hover:scale-x-100"
              />
              <h3 className="whitespace-pre-line font-display text-2xl leading-snug md:col-span-5 lg:text-[1.65rem]">
                {c.title}
              </h3>
              <p className="text-lg leading-relaxed text-ink/75 md:col-span-7">{c.body}</p>
            </FadeIn>
          ))}
        </ul>
      )}

      {detail.sectors && (
        <div className="mt-14 grid gap-px bg-ink/10 md:grid-cols-3">
          {detail.sectors.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.1} className="bg-paper p-8 lg:p-10">
              <h3 className="font-display text-3xl text-brand">{s.name}</h3>
              <ul className="mt-8 space-y-7">
                {s.items.map((item) => (
                  <li key={item.title} className="border-t border-ink/10 pt-5">
                    <h4 className="whitespace-pre-line font-display text-xl leading-snug">{item.title}</h4>
                    <p className="mt-2 text-lg leading-relaxed text-ink/75">{item.body}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      )}

      <FadeIn>
        <PracticeCaseStudies cards={cards} />
      </FadeIn>
    </section>
  );
}
