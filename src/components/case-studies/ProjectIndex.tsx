"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies";
import { PRACTICES, shortTitle } from "@/lib/content";
import { cn, EASE_EXPO } from "@/lib/cn";

const noop = () => () => {};

const FILTERS = [
  { id: "all", label: "All engagements" },
  ...PRACTICES.map((p) => ({ id: p.slug, label: shortTitle(p.title) })),
];

/**
 * The project index doubles as the case-study list: filter by practice, then
 * open any row to read its full profile. `#<profile-id>` opens a profile and
 * `#<practice-slug>` applies that practice's filter, so other pages can link in.
 */
export function ProjectIndex() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState<string | null>(null);
  // Closed panels become inert only after hydration, so without JS every profile stays readable.
  const hydrated = useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );

  const visible = useMemo(
    () => (filter === "all" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.group === filter)),
    [filter],
  );

  // Where to scroll once the list has re-rendered for an incoming hash.
  const scrollTo = useRef<string | null>(null);

  const followHash = useCallback(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (FILTERS.some((f) => f.id === id)) {
      setFilter(id);
      scrollTo.current = "project-index";
    } else if (CASE_STUDIES.some((c) => c.id === id)) {
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
          const count = f.id === "all" ? CASE_STUDIES.length : CASE_STUDIES.filter((c) => c.group === f.id).length;
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

      <div className="mt-12 hidden grid-cols-12 gap-6 border-b border-ink/15 pb-4 text-[11px] text-ink/50 label-text lg:grid">
        <span className="col-span-1">Year</span>
        <span className="col-span-6">Client / Engagement</span>
        <span className="col-span-3">Practice</span>
        <span className="col-span-2">Status</span>
      </div>

      <ul className="border-t border-ink/15 lg:border-t-0">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((c) => (
            <motion.li
              key={c.id}
              id={c.id}
              layout="position"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE_EXPO }}
              className="scroll-mt-28 border-b border-ink/15"
            >
              <Row study={c} open={open === c.id} inert={hydrated && open !== c.id} onToggle={() => toggle(c.id)} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

function Row({
  study: c,
  open,
  inert,
  onToggle,
}: {
  study: CaseStudy;
  open: boolean;
  inert: boolean;
  onToggle: () => void;
}) {
  const panel = `${c.id}-panel`;
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
            {c.year}
          </span>
          <span className="lg:col-span-6">
            <span className="block text-[11px] text-ink/50 label-text">{c.client}</span>
            <span className="mt-2 block font-display text-xl leading-snug transition-colors duration-300 group-hover:text-brand lg:text-2xl">
              {c.title}
            </span>
          </span>
          <span className="col-start-2 text-sm text-ink/60 lg:col-span-3 lg:col-start-auto">{c.practice}</span>
          <span className="col-start-2 flex items-center justify-between gap-4 lg:col-span-2 lg:col-start-auto">
            <Status status={c.status} />
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
        aria-label={c.title}
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
              <p className="text-lg leading-relaxed text-ink/80">{c.summary}</p>
              <p className="mt-10 text-[11px] text-brand label-text">{c.deliverHeading}</p>
              <ol className="mt-5 space-y-3">
                {c.deliverables.map((d, i) => (
                  <li key={d} className="flex gap-4 border-t border-ink/10 pt-3 leading-relaxed text-ink/75">
                    <span className="w-6 shrink-0 font-label text-[11px] leading-[1.9] text-brand tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {d}
                  </li>
                ))}
              </ol>
            </div>
            <dl className="grid h-fit grid-cols-2 gap-x-6 gap-y-6 bg-mist p-6 sm:p-8 lg:col-span-4 lg:col-start-9 lg:grid-cols-1">
              {(
                [
                  ["Practice", c.practice],
                  ["Funding", c.funding],
                  ["Role", c.role],
                  ["Status", c.status],
                ] as const
              ).map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] text-ink/50 label-text">{k}</dt>
                  <dd className="mt-2 font-display text-lg leading-snug">{v}</dd>
                </div>
              ))}
              <p className="col-span-2 border-t border-ink/10 pt-5 text-[10px] text-ink/45 label-text lg:col-span-1">
                Project Profile {c.number}
              </p>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

function Status({ status }: { status: CaseStudy["status"] }) {
  const ongoing = status === "Ongoing";
  return (
    <span className="inline-flex items-center gap-2 text-[11px] leading-none">
      <span className="relative flex size-2">
        {ongoing && <span className="absolute inset-0 animate-ping rounded-full bg-brand/60" />}
        <span className={cn("relative size-2 rounded-full", ongoing ? "bg-brand" : "bg-ink/25")} />
      </span>
      <span className={cn("-mr-[0.2em] label-text", ongoing ? "text-brand" : "text-ink/55")}>{status}</span>
    </span>
  );
}
