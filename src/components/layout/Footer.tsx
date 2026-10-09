import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { ParallaxLayer } from "@/components/motion/Parallax";
import { FOOTER_LINKS, OFFICES, PRACTICES } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/65">
      <div className="container-x relative pb-10 pt-24 lg:pt-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" className="text-[30px]" />
            <p className="mt-10 max-w-sm font-display text-3xl leading-tight text-white">
              Closing the distance between intent and impact since 2009.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-7">
            <p className="text-xs text-brand-light label-text">Explore</p>
            <ul className="mt-6 space-y-3">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="text-xs text-brand-light label-text">Practices</p>
            <ul className="mt-6 space-y-3">
              {PRACTICES.map((p) => (
                <li key={p.slug}>
                  <Link href={`/services#${p.slug}`} className="transition-colors hover:text-white">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10">
          <p className="text-xs text-brand-light label-text">Offices</p>
          <ul className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICES.map((o) => (
              <li key={o.city}>
                <address className="not-italic">
                  <span className="block font-display text-2xl text-white">{o.city}</span>
                  <span className="mt-2 block text-sm leading-relaxed">{o.address}</span>
                </address>
              </li>
            ))}
          </ul>
        </div>

        <ParallaxLayer speed={40} className="pointer-events-none select-none">
          <p
            aria-hidden
            className="mt-20 font-display text-[clamp(5rem,22vw,20rem)] leading-[0.8] tracking-tight text-white/[0.05]"
          >
            Carter
          </p>
        </ParallaxLayer>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm lg:flex-row lg:justify-between">
          <p>© Carter Consulting Limited. All rights reserved.</p>
          <p>RC 822066 · Est. 2009</p>
          <p>Management &amp; Technology Consulting</p>
        </div>
      </div>
    </footer>
  );
}
