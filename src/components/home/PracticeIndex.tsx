"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Compass,
  Cpu,
  Landmark,
  Leaf,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { PRACTICES } from "@/lib/content";
import { EASE_EXPO } from "@/lib/cn";

/**
 * The five practices, each marked with its own icon. Rows rise in as they
 * enter the viewport; on hover-capable large screens a row slides over and its
 * icon fills with the brand green.
 */
const ICONS: Record<string, LucideIcon> = {
  "strategy-public-policy": Compass,
  "technology-digital-transformation": Cpu,
  "programme-project-delivery": Workflow,
  "financial-transaction-advisory": Landmark,
  "sector-advisory": Leaf,
};

export function PracticeIndex() {
  return (
    <ul className="border-b border-ink/10">
      {PRACTICES.map((p, i) => {
        const Icon = ICONS[p.slug] ?? Compass;
        return (
          <motion.li
            key={p.slug}
            data-motion
            className="group border-t border-ink/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.9, delay: i * 0.06, ease: EASE_EXPO }}
          >
            <article className="grid grid-cols-[2.5rem_1fr] gap-x-6 py-10 transition-transform duration-700 ease-expo sm:grid-cols-[3rem_1fr] sm:gap-x-8 lg:py-12 hoverable:group-hover:translate-x-4">
              <span className="mt-1 flex size-10 items-center justify-center rounded-full border border-brand/30 text-brand transition-colors duration-500 sm:size-12 hoverable:group-hover:border-brand hoverable:group-hover:bg-brand hoverable:group-hover:text-white">
                <Icon
                  aria-hidden
                  className="size-5 sm:size-[1.35rem]"
                  strokeWidth={1.5}
                />
              </span>
              <div>
                <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-tight">
                  <Link
                    href={`/services#${p.slug}`}
                    className="transition-colors duration-300 hover:text-brand"
                  >
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/75">
                  {p.statement}
                </p>
              </div>
            </article>
          </motion.li>
        );
      })}
    </ul>
  );
}
