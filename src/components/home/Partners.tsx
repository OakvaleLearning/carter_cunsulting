import { RevealText } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PARTNERS } from "@/lib/content";

export function Partners() {
  // Two copies back to back so the -50% keyframe loops seamlessly.
  const track = [...PARTNERS, ...PARTNERS];

  return (
    <section aria-labelledby="partners-heading" className="overflow-hidden bg-paper py-24 lg:py-32">
      <div className="container-x flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Eyebrow className="text-brand">Trusted By</Eyebrow>
          <div id="partners-heading">
            <RevealText
              text="Our Partners & Clients"
              className="mt-6 font-display text-[clamp(2.4rem,4vw,3.75rem)] leading-[1.05]"
            />
          </div>
        </div>
      </div>

      <div
        className="group relative mt-16 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <ul className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {track.map((p, i) => (
            <li
              key={`${p.short}-${i}`}
              aria-hidden={i >= PARTNERS.length}
              className="group/logo flex w-[min(80vw,22rem)] shrink-0 flex-col justify-start border-l border-ink/10 px-10 py-6"
            >
              <span className="font-label text-3xl font-semibold leading-none text-ink/30 transition-colors duration-500 group-hover/logo:text-brand">
                {p.short}
              </span>
              <span className="mt-3 text-sm leading-snug text-ink/45 transition-colors duration-500 group-hover/logo:text-ink/80">
                {p.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
