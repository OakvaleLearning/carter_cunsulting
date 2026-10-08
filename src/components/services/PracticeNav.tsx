"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PRACTICES, shortTitle } from "@/lib/content";
import { cn, EASE_EXPO } from "@/lib/cn";

/** Sticky practice index that follows the reader down the page (desktop). */
export function PracticeNav() {
  const [active, setActive] = useState(PRACTICES[0].slug);

  useEffect(() => {
    const sections = PRACTICES.map((p) => document.getElementById(p.slug)).filter(Boolean) as HTMLElement[];
    // A practice is "current" while it crosses the middle band of the viewport.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Practices" className="sticky top-32">
      <p className="text-xs text-brand label-text">Practices</p>
      <ol className="mt-6 border-l border-ink/10">
        {PRACTICES.map((p) => {
          const on = p.slug === active;
          return (
            <li key={p.slug} className="relative">
              {on && (
                <motion.span
                  layoutId="practice-nav-bar"
                  aria-hidden
                  className="absolute -left-px top-0 h-full w-0.5 bg-brand"
                  transition={{ duration: 0.6, ease: EASE_EXPO }}
                />
              )}
              <a
                href={`#${p.slug}`}
                aria-current={on ? "true" : undefined}
                className={cn(
                  "flex items-baseline gap-4 py-3 pl-6 transition-colors duration-300",
                  on ? "text-ink" : "text-ink/45 hover:text-ink",
                )}
              >
                <span className={cn("font-label text-[11px] tabular-nums", on ? "text-brand" : "text-current")}>
                  {p.number}
                </span>
                <span className="font-display text-lg leading-snug">{shortTitle(p.title)}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
