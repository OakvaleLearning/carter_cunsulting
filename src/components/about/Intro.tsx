import Image from "next/image";
import { Banknote, Cpu, Landmark, Users } from "lucide-react";
import { ParallaxImage } from "@/components/motion/Parallax";
import { FadeIn } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

const PERSPECTIVES = [
  { label: "The policy and institutional context", Icon: Landmark },
  { label: "The financial and commercial case", Icon: Banknote },
  { label: "The technology required", Icon: Cpu },
  { label: "The structures and capabilities needed to deliver", Icon: Users },
];

export function Intro() {
  return (
    <section className="relative bg-paper py-28 lg:py-40">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <ParallaxImage
            src="/images/strategy-lagos.jpg"
            alt="Advisers in discussion around a meeting table"
            className="aspect-[4/5] w-full"
            sizes="(min-width: 1024px) 40vw, 100vw"
            speed={12}
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Eyebrow className="text-brand">Our Work</Eyebrow>
          <FadeIn>
            <p className="mt-8 text-lg leading-relaxed text-ink/80">
              Our work spans strategy and public policy, technology and digital transformation, financial and
              transaction advisory, programme and project delivery, and sector advisory. Bringing these
              capabilities together allows us to address complex assignments from more than one perspective.
            </p>
          </FadeIn>

          <Perspectives />

          {/* TODO: closing paragraph, copy to follow from the Carter team. */}
        </div>
      </div>
    </section>
  );
}

/**
 * The four perspectives as quarters of one picture: each quarter builds in
 * turn, then the Carter mark settles at the centre where they meet.
 */
function Perspectives() {
  return (
    <div className="relative mt-12">
      <ul className="grid grid-cols-2 gap-2">
        {PERSPECTIVES.map(({ label, Icon }, i) => (
          <FadeIn
            as="li"
            key={label}
            delay={0.15 + i * 0.25}
            y={16}
            // Each quarter keeps its text toward its outer corner, leaving the centre clear for the mark.
            className={cn(
              "flex min-h-56 flex-col gap-4 bg-mist p-5 sm:min-h-52 sm:p-7",
              i % 2 === 1 && "items-end text-right",
              i >= 2 && "justify-end",
            )}
          >
            <Icon aria-hidden className="size-7 shrink-0 text-brand" strokeWidth={1.5} />
            <span className="max-w-[12rem] font-display text-lg leading-snug sm:text-xl">{label}</span>
          </FadeIn>
        ))}
      </ul>
      <FadeIn
        delay={1.25}
        y={0}
        className="pointer-events-none absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 sm:size-24"
      >
        <span className="relative block size-full rounded-full bg-paper p-2 shadow-[0_0_0_6px_var(--color-paper)]">
          <span className="relative block size-full">
            <Image src="/logo-mark.png" alt="" fill sizes="96px" className="object-contain" />
          </span>
        </span>
      </FadeIn>
    </div>
  );
}
