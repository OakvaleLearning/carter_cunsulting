import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FEATURES, featureBySlug, type Beat, type Block } from "@/lib/case-studies";
import { PRACTICES, shortTitle } from "@/lib/content";
import { teamFor } from "@/lib/people";

export function generateStaticParams() {
  return FEATURES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const feature = featureBySlug((await params).slug);
  if (!feature) return {};
  return { title: feature.seo.title, description: feature.seo.description };
}

export default async function Page({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const f = featureBySlug(slug);
  if (!f) notFound();

  const index = FEATURES.indexOf(f);
  const next = FEATURES[(index + 1) % FEATURES.length];
  const team = teamFor(f.slug);
  const facts = [
    ["Client", f.client],
    ["Carter's role", f.role],
    ...(f.period ? [["Period", f.period]] : []),
  ];
  const beats: [string, Beat][] = [
    ["The Intent", f.intent],
    ["The Process", f.process],
    ["The Impact", f.impact],
    ["The Opportunity", f.opportunity],
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-20 pt-40 text-white lg:pb-28 lg:pt-48">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,121,50,0.35),transparent_60%)]" />
        <div className="relative container-x">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-[11px] text-white/60 transition-colors label-text hover:text-white"
          >
            <ArrowLeft aria-hidden className="-mt-[0.2em] size-3.5 transition-transform duration-500 ease-expo group-hover:-translate-x-0.5" />
            Case Studies
          </Link>
          <p className="mt-12 text-xs text-brand-light label-text">{f.label}</p>
          <RevealText
            as="h1"
            text={f.title}
            className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.03]"
          />
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">{f.descriptor}</p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-12">
          <FadeIn className="lg:col-span-7">
            <p className="font-display text-[clamp(1.5rem,2.4vw,2.1rem)] italic leading-snug text-ink/85">{f.standfirst}</p>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <dl className="divide-y divide-ink/10 border-y border-ink/10">
              {facts.map(([k, v]) => (
                <div key={k} className="py-5">
                  <dt className="text-[10px] text-ink/50 label-text">{k}</dt>
                  <dd className="mt-2 font-display text-lg leading-snug">{v}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>

        {f.proof.length > 0 && (
          <dl className="container-x mt-20 grid gap-x-10 sm:grid-cols-3">
            {f.proof.map((p, i) => (
              <FadeIn key={p.label} delay={i * 0.08} className="flex flex-col-reverse justify-end border-t border-ink/15 py-8 pr-8">
                <dt className="mt-4 max-w-xs leading-snug text-ink/65">{p.label}</dt>
                <dd className="font-display text-5xl leading-none text-brand lg:text-6xl">{p.value}</dd>
              </FadeIn>
            ))}
          </dl>
        )}
      </section>

      <section className="bg-mist py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-12">
          <FadeIn className="lg:col-span-5">
            <h2 className="text-[11px] text-brand label-text">Aligned national and global priorities</h2>
            <ul className="mt-6">
              {f.priorities.map((p) => (
                <li key={p} className="border-t border-ink/10 py-4 leading-relaxed text-ink/80">
                  {p}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <h2 className="text-[11px] text-brand label-text">What it means for Nigerians</h2>
            <div className="mt-6 space-y-5 border-t border-ink/10 pt-6">
              {f.forNigerians.map((p) => (
                <p key={p} className="font-display text-[clamp(1.25rem,1.8vw,1.6rem)] leading-snug text-ink/85">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-paper py-12 lg:py-20">
        <div className="container-x divide-y divide-ink/10">
          {beats.map(([label, beat], i) => (
            <article key={label} className="grid gap-8 py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <Eyebrow className="text-brand">
                    0{i + 1} · {label}
                  </Eyebrow>
                </div>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <RevealText
                  as="h2"
                  text={beat.heading}
                  className="font-display text-[clamp(1.9rem,3vw,2.75rem)] leading-[1.08]"
                  stagger={0.03}
                />
                <div className="mt-8 space-y-5">
                  {beat.body.map((block, j) => (
                    <BodyBlock key={j} block={block} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper pb-24 lg:pb-32">
        <div className="container-x">
          <FadeIn className="bg-brand p-8 text-white sm:p-12 lg:p-16">
            <h2 className="text-[11px] text-brand-light label-text">From recommendation to implementation</h2>
            <ol className="mt-8 grid gap-8 lg:grid-cols-3">
              {f.implementation.map((line, i) => (
                <li key={line} className="border-t border-white/25 pt-5">
                  <span className="text-[11px] text-brand-light label-text">0{i + 1}</span>
                  <p className="mt-3 font-display text-xl leading-snug">{line}</p>
                </li>
              ))}
            </ol>
          </FadeIn>

          <div className="mt-20 grid gap-14 lg:grid-cols-12 lg:gap-12">
            {team.length > 0 && (
              <FadeIn className="lg:col-span-7">
                <h2 className="text-[11px] text-brand label-text">Carter team</h2>
                <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
                  {team.map((m) => (
                    <li key={m.name} className="border-t border-ink/10 py-4">
                      <span className="block font-display text-xl leading-tight">{m.name}</span>
                      <span className="mt-1 block text-sm text-ink/60">{m.role}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )}
            <FadeIn delay={0.1} className="lg:col-span-4 lg:col-start-9">
              <h2 className="text-[11px] text-brand label-text">Related services</h2>
              <ul className="mt-6">
                {f.related.map((slug) => {
                  const practice = PRACTICES.find((p) => p.slug === slug);
                  if (!practice) return null;
                  return (
                    <li key={slug} className="border-t border-ink/10">
                      <Link
                        href={`/services#${slug}`}
                        className="group flex items-center justify-between gap-4 py-4 font-display text-xl transition-colors hover:text-brand"
                      >
                        {shortTitle(practice.title)}
                        <ArrowRight aria-hidden className="size-4 transition-transform duration-500 ease-expo group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </FadeIn>
          </div>

          {next !== f && (
            <Link
              href={`/case-studies/${next.slug}`}
              className="group mt-24 block border-t border-ink/15 pt-10"
            >
              <span className="text-[11px] text-ink/50 label-text">Next case study</span>
              <span className="mt-4 flex items-end justify-between gap-6">
                <span className="font-display text-[clamp(1.9rem,3.4vw,3.25rem)] leading-[1.05] transition-colors duration-300 group-hover:text-brand">
                  {next.title}
                </span>
                <ArrowRight aria-hidden className="mb-2 size-6 shrink-0 transition-transform duration-500 ease-expo group-hover:translate-x-1" />
              </span>
            </Link>
          )}
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}

function BodyBlock({ block }: { block: Block }) {
  if (typeof block === "string") {
    return <p className="text-lg leading-relaxed text-ink/75">{block}</p>;
  }
  return (
    <ul className="border-b border-ink/10">
      {block.map((item) => (
        <li key={item} className="flex gap-4 border-t border-ink/10 py-3 text-lg leading-relaxed text-ink/80">
          <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-brand" />
          {item}
        </li>
      ))}
    </ul>
  );
}
