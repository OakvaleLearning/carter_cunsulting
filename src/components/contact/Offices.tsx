import { ArrowUpRight } from "lucide-react";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { OFFICES } from "@/lib/content";

const mapsUrl = (o: (typeof OFFICES)[number]) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${o.address}, ${o.city}, ${o.country}`)}`;

export function Offices() {
  return (
    <section aria-labelledby="offices-heading" className="bg-mist py-28 lg:py-36">
      <div className="container-x">
        <Eyebrow className="text-brand">Abuja · Kano · Lagos · London</Eyebrow>
        <div id="offices-heading">
          <RevealText
            text="Our Offices"
            className="mt-8 font-display text-[clamp(2.4rem,4vw,3.75rem)] leading-[1.05]"
          />
        </div>

        <ul className="mt-16 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {OFFICES.map((o, i) => (
            <FadeIn as="li" key={o.city} delay={i * 0.08} className="bg-mist">
              <a
                href={mapsUrl(o)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col bg-mist p-8 transition-colors duration-500 hover:bg-white lg:p-10"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-700 ease-expo group-hover:scale-x-100"
                />
                <span className="text-[11px] text-brand label-text">{o.country}</span>
                <span className="mt-6 font-display text-4xl leading-none">{o.city}</span>
                <address className="mt-5 not-italic leading-relaxed text-ink/65">{o.address}</address>
                <span className="mt-auto flex items-center gap-2 pt-10 text-[11px] text-ink/60 transition-colors duration-300 label-text group-hover:text-brand">
                  Get directions
                  <ArrowUpRight
                    aria-hidden
                    className="-mt-[0.2em] size-3.5 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                  <span className="sr-only">(opens Google Maps)</span>
                </span>
              </a>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
