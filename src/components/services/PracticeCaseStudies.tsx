"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import type { Snapshot } from "@/lib/case-studies";

export type CaseStudyCard = {
  key: string;
  label: string;
  title: string;
  sub: string;
  teaser: string;
} & ({ href: string } | { snapshot: Snapshot });

/**
 * A practice's case studies in the same card format as the Case Studies index.
 * Feature case studies open their own page; shorter ones open as a pop-up
 * mini page, so the visitor stays with the practice they are reading about.
 */
export function PracticeCaseStudies({ cards }: { cards: CaseStudyCard[] }) {
  const [open, setOpen] = useState<Snapshot | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) dialog.current?.showModal();
  }, [open]);

  if (!cards.length) return null;

  return (
    <div className="mt-14">
      <h3 className="text-xs text-brand label-text">Case Studies</h3>
      <ul className="mt-6 grid gap-5 md:grid-cols-2">
        {cards.map((c) => {
          const body = (
            <>
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-700 ease-expo group-hover:scale-x-100"
              />
              <span className="text-[11px] text-brand label-text">{c.label}</span>
              <span className="mt-6 block font-display text-[clamp(1.6rem,2.2vw,2.1rem)] leading-[1.1] transition-colors duration-300 group-hover:text-brand">
                {c.title}
              </span>
              <span className="mt-3 block text-sm leading-snug text-ink/60">{c.sub}</span>
              <span className="mt-6 line-clamp-4 text-lg leading-relaxed text-ink/75">{c.teaser}</span>
              <span className="mt-auto flex items-center gap-2 pt-10 text-[11px] text-ink transition-colors duration-300 label-text group-hover:text-brand">
                View case study
                <ArrowRight
                  aria-hidden
                  className="-mt-[0.2em] size-3.5 transition-transform duration-500 ease-expo group-hover:translate-x-0.5"
                />
              </span>
            </>
          );
          const card =
            "group relative flex h-full w-full flex-col border border-ink/10 bg-white p-8 text-left transition-colors duration-500 hover:border-brand/40 lg:p-10";
          return (
            <li key={c.key}>
              {"href" in c ? (
                <Link href={c.href} className={card}>
                  {body}
                </Link>
              ) : (
                <button type="button" onClick={() => setOpen(c.snapshot)} className={card}>
                  {body}
                </button>
              )}
            </li>
          );
        })}
      </ul>

      {open && (
        <dialog
          ref={dialog}
          aria-labelledby="case-study-dialog-title"
          onClose={() => setOpen(null)}
          onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
          className="m-auto max-h-[90svh] w-[min(56rem,calc(100vw-2rem))] overflow-y-auto bg-paper p-0 text-ink shadow-2xl backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
        >
          <article className="relative p-8 sm:p-12 lg:p-14">
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label="Close case study"
              className="absolute right-5 top-5 rounded-full border border-ink/15 p-3 transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              <X aria-hidden className="size-5" />
            </button>
            <p className="pr-14 text-[11px] text-brand label-text">{open.practice}</p>
            <h2 id="case-study-dialog-title" className="mt-6 pr-10 font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.06]">
              {open.title}
            </h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <p className="text-lg leading-relaxed text-ink/80">{open.body}</p>
                {open.result && (
                  <p className="mt-8 border-t border-ink/10 pt-5 text-lg leading-relaxed text-ink/80">
                    <span className="mr-3 text-[11px] text-brand label-text">Result</span>
                    {open.result}
                  </p>
                )}
              </div>
              <dl className="grid h-fit gap-6 bg-mist p-6 sm:p-8 lg:col-span-5">
                {(
                  [
                    ["Client", open.client],
                    ["Period", open.period],
                    ["Carter's Role", open.role],
                  ] as const
                ).map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[10px] text-ink/50 label-text">{k}</dt>
                    <dd className="mt-2 font-display text-lg leading-snug">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        </dialog>
      )}
    </div>
  );
}
