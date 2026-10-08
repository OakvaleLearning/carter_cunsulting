"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PRACTICES } from "@/lib/content";
import { cn, EASE_EXPO } from "@/lib/cn";

/**
 * Asymmetric numbered index. On hover-capable large screens the proof point and
 * links unfold on hover/focus and a photo preview trails the cursor; on touch
 * and small screens everything is shown.
 */
export function PracticeIndex() {
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const x = useSpring(0, { stiffness: 220, damping: 26, mass: 0.4 });
  const y = useSpring(0, { stiffness: 220, damping: 26, mass: 0.4 });

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !listRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={listRef}
      className="relative"
      onPointerMove={onPointerMove}
      onPointerLeave={() => setActive(null)}
    >
      <motion.div
        aria-hidden
        data-motion-hide
        className="pointer-events-none absolute left-0 top-0 z-10 hidden hoverable:block"
        style={{ x, y }}
      >
        <motion.div
          className="relative h-40 w-60 translate-x-8 -translate-y-[115%] overflow-hidden rounded-sm shadow-2xl shadow-ink/30"
          animate={{ opacity: active === null ? 0 : 1, scale: active === null ? 0.85 : 1 }}
          transition={{ duration: 0.4, ease: EASE_EXPO }}
        >
          {PRACTICES.map((p, i) => (
            <motion.div
              key={p.slug}
              className="absolute inset-0"
              animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.1 }}
              transition={{ duration: 0.6, ease: EASE_EXPO }}
            >
              <Image src={p.image} alt="" fill sizes="240px" className="object-cover" />
              <div className="absolute inset-0 bg-brand/20 mix-blend-multiply" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <ol className="border-b border-ink/10">
        {PRACTICES.map((p, i) => (
          <motion.li
            key={p.slug}
            data-motion
            className="group border-t border-ink/10"
            onPointerEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.9, delay: i * 0.06, ease: EASE_EXPO }}
          >
            <article
              className={cn(
                "grid grid-cols-[4.5rem_1fr] gap-x-6 py-10 transition-transform duration-700 ease-expo sm:grid-cols-[7rem_1fr] lg:py-12 hoverable:group-hover:translate-x-4",
                i % 2 === 1 && "lg:pl-16",
              )}
            >
              <span className="font-label text-5xl font-light leading-none text-brand tabular-nums transition-colors duration-500 sm:text-7xl hoverable:text-ink/20 hoverable:group-hover:text-brand">
                {p.number}
              </span>
              <div>
                <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-tight">
                  <Link href={`/services#${p.slug}`} className="transition-colors duration-300 hover:text-brand">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">{p.statement}</p>

                <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-expo hoverable:grid-rows-[0fr] hoverable:group-hover:grid-rows-[1fr] hoverable:group-focus-within:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="pt-8 transition-opacity duration-500 hoverable:opacity-0 hoverable:group-hover:opacity-100 hoverable:group-focus-within:opacity-100">
                      <div className="border-l-2 border-brand pl-5">
                        <p className="text-[11px] text-brand label-text">Proof point</p>
                        <p className="mt-2 font-display text-xl italic leading-snug">{p.proof.title}</p>
                        <p className="mt-1 text-sm text-ink/60">{p.proof.client}</p>
                      </div>
                      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[12px] label-text">
                        <Link
                          href={`/services#${p.slug}`}
                          className="group/link inline-flex items-center gap-2 text-ink hover:text-brand"
                        >
                          Explore {p.title.split(" — ")[0]}
                          <ArrowRight className="-mt-[0.2em] size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Link>
                        <Link
                          href={`/case-studies#${p.proof.slug}`}
                          className="group/link inline-flex items-center gap-2 text-ink/60 hover:text-brand"
                        >
                          Read the case study
                          <ArrowUpRight className="-mt-[0.2em] size-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
