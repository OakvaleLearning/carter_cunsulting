"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { FEATURES, SNAPSHOTS, type Feature, type Snapshot } from "@/lib/case-studies";
import { PRACTICES, shortTitle } from "@/lib/content";
import { cn, EASE_EXPO } from "@/lib/cn";

const noop = () => () => {};

const FILTERS = [
  { id: "all", label: "All engagements" },
  ...PRACTICES.map((p) => ({ id: p.slug, label: shortTitle(p.title) })),
];

const featuresFor = (filter: string) =>
  filter === "all" ? FEATURES : FEATURES.filter((f) => f.related.some((r) => r === filter));
const snapshotsFor = (filter: string) =>
  filter === "all" ? SNAPSHOTS : SNAPSHOTS.filter((s) => s.group === filter);

/**
 * The case-study index: one practice filter drives both the feature cards
 * (each opening its own page) and the snapshot list, where any row opens in
 * place. `#<snapshot-id>` opens a snapshot and `#<practice-slug>` applies that
 * practice's filter, so other pages can link in.
 */
export function ProjectIndex() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState<string | null>(null);
  // Closed panels become inert only after hydration, so without JS every snapshot stays readable.
  const hydrated = useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );

  const features = useMemo(() => featuresFor(filter), [filter]);
  const snapshots = useMemo(() => snapshotsFor(filter), [filter]);

  // Where to scroll once the list has re-rendered for an incoming hash.
  const scrollTo = useRef<string | null>(null);

  const followHash = useCallback(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (FILTERS.some((f) => f.id === id)) {
      setFilter(id);
      scrollTo.current = "project-index";
    } else if (SNAPSHOTS.some((s) => s.id === id)) {
      setFilter("all");
      setOpen(id);
      scrollTo.current = id;
    }
  }, []);

  // A panel that was already open collapses over 700ms and would shift everything
  // below it, so wait for that before scrolling.
  const wasOpen = useRef<string | null>(null);
  useEffect(() => {
    const target = scrollTo.current;
    const closing = wasOpen.current !== null && wasOpen.current !== open;
    wasOpen.current = open;
    if (!target) return;
    scrollTo.current = null;
    const t = setTimeout(
      () => document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" }),
      closing ? 750 : 0,
    );
    return () => clearTimeout(t);
  }, [filter, open]);

  useEffect(() => {
    // Honour a hash in the arriving URL once the list has painted, then follow later changes.
    const raf = requestAnimationFrame(followHash);
    window.addEventListener("hashchange", followHash);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("hashchange", followHash);
    };
  }, [followHash]);

  const toggle = (id: string) => {
    setOpen((cur) => (cur === id ? null : id));
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <div id="project-index" className="scroll-mt-28">
      {/* One scrolling row on phones; wraps from sm up. */}
      <div
        role="toolbar"
        aria-label="Filter by practice"
        className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
      >
        {FILTERS.map((f) => {
          const count = featuresFor(f.id).length + snapshotsFor(f.id).length;
          const on = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={on}
              onClick={() => {
                setFilter(f.id);
                setOpen(null);
              }}
              className={cn(
                "relative shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-[11px] leading-none transition-colors duration-300",
                on ? "border-ink text-white" : "border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink",
              )}
            >
              {on && (
                <motion.span
                  layoutId="case-filter"
                  className="absolute inset-0 -z-0 rounded-full bg-ink"
                  transition={{ duration: 0.5, ease: EASE_EXPO }}
                />
              )}
              <span className="relative -mr-[0.2em] label-text">
                {f.label} <span className={on ? "text-brand-light" : "text-ink/40"}>{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      {features.length > 0 && (
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          <AnimatePresence initial={false} mode="popLayout">
            {features.map((f) => (
              <motion.li
                key={f.slug}
                layout="position"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE_EXPO }}
              >
                <FeatureCard feature={f} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

      {snapshots.length > 0 && (
        <>
          <div className="mt-24 grid gap-6 lg:grid-cols-12">
            <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.05] lg:col-span-5">More of Our Work</h2>
            <p className="text-lg leading-relaxed text-ink/70 lg:col-span-6 lg:col-start-7 lg:self-end">
              Short-form examples from the wider Carter portfolio: the client need and the work delivered.
            </p>
          </div>

          <div className="mt-12 hidden grid-cols-12 gap-6 border-b border-ink/15 pb-4 text-[11px] text-ink/50 label-text lg:grid">
            <span className="col-span-1">Year</span>
            <span className="col-span-7">Client / Engagement</span>
            <span className="col-span-4">Practice</span>
          </div>

          <ul className="mt-8 border-t border-ink/15 lg:mt-0 lg:border-t-0">
            <AnimatePresence initial={false} mode="popLayout">
              {snapshots.flatMap((s, i) => [
                ...(s.earlier && !snapshots[i - 1]?.earlier
                  ? [
                      <motion.li
                        key="earlier-work"
                        layout="position"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="border-b border-ink/15 pb-4 pt-14 text-[11px] text-brand label-text"
                      >
                        Earlier work · 2012 to 2016
                      </motion.li>,
                    ]
                  : []),
                <motion.li
                  key={s.id}
                  id={s.id}
                  layout="position"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE_EXPO }}
                  className="scroll-mt-28 border-b border-ink/15"
                >
                  <Row snapshot={s} open={open === s.id} inert={hydrated && open !== s.id} onToggle={() => toggle(s.id)} />
                </motion.li>,
              ])}
            </AnimatePresence>
          </ul>
        </>
      )}
    </div>
  );
}

function FeatureCard({ feature: f }: { feature: Feature }) {
  return (
    <Link
      href={`/case-studies/${f.slug}`}
      className="group relative flex h-full flex-col border border-ink/10 bg-white p-8 transition-colors duration-500 hover:border-brand/40 lg:p-10"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-700 ease-expo group-hover:scale-x-100"
      />
      <span className="text-[11px] text-brand label-text">{f.label}</span>
      <span className="mt-6 block font-display text-[clamp(1.75rem,2.6vw,2.5rem)] leading-[1.08] transition-colors duration-300 group-hover:text-brand">
        {f.title}
      </span>
      <span className="mt-3 block text-sm leading-snug text-ink/55">{f.descriptor}</span>
      <span className="mt-6 block text-lg leading-relaxed text-ink/75">{f.teaser}</span>
      <span className="mt-auto flex items-center justify-between gap-4 pt-10">
        <span className="text-[11px] text-ink/50 label-text">{f.period ?? "Case study"}</span>
        <span className="flex items-center gap-2 text-[11px] text-ink transition-colors duration-300 label-text group-hover:text-brand">
          Read case study
          <ArrowRight
            aria-hidden
            className="-mt-[0.2em] size-3.5 transition-transform duration-500 ease-expo group-hover:translate-x-0.5"
          />
        </span>
      </span>
    </Link>
  );
}

function Row({
  snapshot: s,
  open,
  inert,
  onToggle,
}: {
  snapshot: Snapshot;
  open: boolean;
  inert: boolean;
  onToggle: () => void;
}) {
  const panel = `${s.id}-panel`;
  return (
    <>
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panel}
          onClick={onToggle}
          className="group grid w-full grid-cols-[3.5rem_1fr_auto] items-baseline gap-x-4 gap-y-2 py-6 text-left lg:grid-cols-12 lg:gap-6 lg:py-7"
        >
          <span
            className={cn(
              "font-display text-xl tabular-nums transition-colors duration-300 lg:col-span-1 lg:text-2xl",
              open ? "text-brand" : "text-ink/45 group-hover:text-brand",
            )}
          >
            {s.year}
          </span>
          <span className="lg:col-span-7">
            <span className="block text-[11px] text-ink/50 label-text">{s.client}</span>
            <span className="mt-2 block font-display text-xl leading-snug transition-colors duration-300 group-hover:text-brand lg:text-2xl">
              {s.title}
            </span>
          </span>
          <span className="col-start-2 flex items-center justify-between gap-4 lg:col-span-4 lg:col-start-auto">
            <span className="text-sm text-ink/60">{s.practice}</span>
            <span
              aria-hidden
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-expo",
                open ? "rotate-45 border-brand bg-brand text-white" : "border-ink/15 group-hover:border-brand group-hover:text-brand",
              )}
            >
              <Plus className="size-4" />
            </span>
          </span>
        </button>
      </h3>

      <div
        id={panel}
        role="region"
        aria-label={s.title}
        inert={inert}
        data-collapse
        className={cn(
          "grid transition-[grid-template-rows] duration-700 ease-expo",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="grid gap-10 pb-12 pt-2 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-6 lg:col-start-2">
              <p className="text-lg leading-relaxed text-ink/80">{s.body}</p>
              {s.result && (
                <p className="mt-8 border-t border-ink/10 pt-5 leading-relaxed text-ink/80">
                  <span className="mr-3 text-[11px] text-brand label-text">Result</span>
                  {s.result}
                </p>
              )}
            </div>
            <dl className="grid h-fit grid-cols-2 gap-x-6 gap-y-6 bg-mist p-6 sm:p-8 lg:col-span-4 lg:col-start-9 lg:grid-cols-1">
              {(
                [
                  ["Client", s.client],
                  ["Period", s.period],
                  ["Carter's Role", s.role],
                  ["Practice", s.practice],
                ] as const
              ).map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] text-ink/50 label-text">{k}</dt>
                  <dd className="mt-2 font-display text-lg leading-snug">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
