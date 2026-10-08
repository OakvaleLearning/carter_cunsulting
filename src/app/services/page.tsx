import type { Metadata } from "next";
import { PracticeNav } from "@/components/services/PracticeNav";
import { PracticeSection } from "@/components/services/PracticeSection";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { PageHero } from "@/components/ui/PageHero";
import { PRACTICES, shortTitle } from "@/lib/content";

const LEAD =
  "Carter brings together strategy, technology, financial and transaction advisory, programme delivery and sector expertise to address complex institutional and commercial challenges.";

export const metadata: Metadata = { title: "Our Services", description: LEAD };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Five Practices" title="Our Services" image="/images/services-hero.jpg" intro={LEAD} />

      <div className="bg-paper">
        <div className="container-x lg:grid lg:grid-cols-12 lg:gap-12">
          <aside className="hidden pt-32 lg:col-span-3 lg:block">
            <PracticeNav />
          </aside>

          <div className="lg:col-span-9">
            {/* Small screens: a jump list in place of the sticky index. */}
            <nav aria-label="Practices" className="pt-20 lg:hidden">
              <p className="text-xs text-brand label-text">Practices</p>
              <ol className="mt-5 border-t border-ink/10">
                {PRACTICES.map((p) => (
                  <li key={p.slug} className="border-b border-ink/10">
                    <a href={`#${p.slug}`} className="flex items-baseline gap-4 py-4">
                      <span className="font-label text-[11px] text-brand tabular-nums">{p.number}</span>
                      <span className="font-display text-xl leading-snug">{shortTitle(p.title)}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="divide-y divide-ink/10">
              {PRACTICES.map((p) => (
                <PracticeSection key={p.slug} practice={p} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ServicesCTA />
    </>
  );
}
