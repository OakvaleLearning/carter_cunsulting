import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ParallaxImage } from "@/components/motion/Parallax";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SERVICES, shortTitle, type Practice } from "@/lib/content";

export function PracticeSection({ practice }: { practice: Practice }) {
  const detail = SERVICES[practice.slug];
  const title = shortTitle(practice.title);

  return (
    <section id={practice.slug} aria-labelledby={`${practice.slug}-title`} className="scroll-mt-28 py-24 lg:py-32">
      <FadeIn>
        <p className="flex items-center gap-4 text-xs text-brand label-text">
          <span className="font-display text-5xl normal-case tracking-normal text-brand/30 lg:text-6xl">
            {practice.number}
          </span>
          Practice
        </p>
      </FadeIn>
      <div id={`${practice.slug}-title`}>
        <RevealText
          text={title}
          className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,4.2vw,3.75rem)] leading-[1.05]"
          stagger={0.04}
        />
      </div>
      <FadeIn delay={0.1}>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink/75 lg:text-xl">{detail.intro}</p>
      </FadeIn>

      <ParallaxImage
        src={practice.image}
        alt=""
        className="mt-14 aspect-[16/9] w-full sm:aspect-[16/7]"
        sizes="(min-width: 1024px) 70vw, 100vw"
        speed={12}
      />

      {detail.capabilities && (
        <ul className="mt-14 grid gap-px bg-ink/10 md:grid-cols-3">
          {detail.capabilities.map((c, i) => (
            <FadeIn
              as="li"
              key={c.title}
              delay={i * 0.1}
              className="group relative bg-paper p-8 transition-colors duration-500 hover:bg-white lg:p-10"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-700 ease-expo group-hover:scale-x-100"
              />
              <span className="font-label text-[11px] text-brand tabular-nums">
                {practice.number}.{i + 1}
              </span>
              <h3 className="mt-6 font-display text-2xl leading-snug">{c.title}</h3>
              <p className="mt-4 leading-relaxed text-ink/65">{c.body}</p>
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
                    <h4 className="font-display text-xl leading-snug">{item.title}</h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{item.body}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      )}

      <FadeIn className="mt-10">
        <div className="flex flex-col gap-10 bg-ink p-8 text-white sm:p-10">
          <Link href={`/case-studies#${practice.proof.slug}`} className="group block max-w-2xl">
            <p className="text-[11px] text-brand-light label-text">Case Study</p>
            <p className="mt-4 font-display text-2xl leading-snug transition-colors duration-300 group-hover:text-brand-light lg:text-3xl">
              {practice.proof.title}
              <ArrowUpRight
                aria-hidden
                className="ml-2 inline size-5 -translate-y-0.5 transition-transform duration-500 ease-expo group-hover:-translate-y-1.5 group-hover:translate-x-1"
              />
            </p>
            <p className="mt-2 text-sm text-white/60">{practice.proof.client}</p>
          </Link>
          {/* Long practice names may wrap on phones, so give wrapped lines room to breathe. */}
          <ButtonLink
            href={`/case-studies#${practice.slug}`}
            variant="light"
            className="self-start [&>span]:leading-[1.5] sm:whitespace-nowrap sm:[&>span]:leading-none"
          >
            Explore {title}
          </ButtonLink>
        </div>
      </FadeIn>
    </section>
  );
}
