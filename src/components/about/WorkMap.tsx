"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { OFFICES, WORK_LOCATIONS } from "@/lib/content";
import { cn, EASE_EXPO, EASE_INOUT } from "@/lib/cn";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

/** "world", "africa", or the name of a covered country. */
export type View = string;
export type Box = { x: number; y: number; w: number; h: number };
type Point = { id: string; x: number; y: number };

export type MapData = {
  shapes: { id: string; d: string; focus: boolean }[];
  views: Record<View, Box>;
  countries: { name: string; x: number; y: number }[];
  markers: Point[];
  offices: (Point & { country: string })[];
};

const ASPECT = 16 / 11;

/** Offices grouped by country, in the order they are listed. */
const COVERAGE = OFFICES.reduce<{ country: string; cities: string[] }[]>((acc, o) => {
  const row = acc.find((r) => r.country === o.country);
  if (row) row.cities.push(o.city);
  else acc.push({ country: o.country, cities: [o.city] });
  return acc;
}, []);

/**
 * World map that opens on the full picture and flies in to a region when a
 * location or country is chosen. Engagement markers pulse; offices are quiet
 * rings. Country names label the wide views and city names the zoomed ones.
 * The lists beside the map drive the same selection for keyboard and
 * screen-reader users.
 */
export function WorkMap({ map }: { map: MapData }) {
  const reduce = useReducedMotionSafe();
  const frame = useRef<HTMLDivElement>(null);
  const [frameWidth, setFrameWidth] = useState(760);
  const [view, setView] = useState<View>("world");
  const [active, setActive] = useState(WORK_LOCATIONS[0]?.id);

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setFrameWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const box = map.views[view] ?? map.views.world;
  // Map units per screen pixel. The frame letterboxes the box ("meet"), so the
  // visible extent is whichever side fills the frame first. Markers and labels
  // are scaled by this so they keep a constant on-screen size at any zoom.
  const k = Math.max(box.w, box.h * ASPECT) / frameWidth;
  const zoomedIn = view !== "world" && view !== "africa";
  const location = WORK_LOCATIONS.find((l) => l.id === active);
  const fly = { duration: reduce ? 0 : 1.6, ease: EASE_INOUT };

  const tabs = [
    { id: "world", label: "World", wide: false },
    { id: "africa", label: "Africa", wide: false },
    ...COVERAGE.filter((c) => c.country in map.views).map((c) => ({ id: c.country, label: c.country, wide: true })),
  ];

  // From the lists, bring the map on screen first (it sits above them on small screens).
  const show = (v: View) => {
    setView(v);
    const rect = frame.current?.getBoundingClientRect();
    if (rect && (rect.top < 0 || rect.bottom > window.innerHeight)) {
      frame.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    }
  };

  const select = (id: string) => {
    setActive(id);
    const l = WORK_LOCATIONS.find((x) => x.id === id);
    if (l && l.view in map.views) show(l.view);
  };

  return (
    <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-12">
      <div className="relative lg:col-span-7">
        <div ref={frame} className="relative aspect-[16/11] overflow-hidden bg-mist">
          <motion.svg
            role="img"
            aria-label={`World map with Nigeria highlighted, marking Carter's offices in ${COVERAGE.map((c) => c.country).join(" and ")}, and its engagement locations`}
            className="absolute inset-0 size-full"
            initial={false}
            // Fixed decimals: exponent notation (e.g. 2.8e-14) breaks viewBox interpolation.
            animate={{ viewBox: [box.x, box.y, box.w, box.h].map((n) => n.toFixed(2)).join(" ") }}
            transition={fly}
            preserveAspectRatio="xMidYMid meet"
          >
            {map.shapes.map((s, i) => (
              <path
                key={`${s.id}-${i}`}
                d={s.d}
                vectorEffect="non-scaling-stroke"
                className={cn(
                  "stroke-[0.75] transition-colors duration-700",
                  s.focus ? "fill-brand stroke-white/60" : "fill-white stroke-ink/15",
                )}
              />
            ))}

            {map.offices.map((o) => (
              <motion.g key={o.id} initial={false} animate={{ x: o.x, y: o.y, scale: k }} transition={fly}>
                <title>{`${o.id} office, ${o.country}`}</title>
                <circle r={4.5} className="fill-white stroke-ink" strokeWidth={2} />
              </motion.g>
            ))}

            {map.markers.map((m) => {
              const on = m.id === active;
              return (
                <motion.g
                  key={m.id}
                  initial={false}
                  animate={{ x: m.x, y: m.y, scale: k }}
                  transition={fly}
                  className="cursor-pointer"
                  onClick={() => select(m.id)}
                >
                  {!reduce && (
                    <motion.circle
                      r={8}
                      className="fill-none stroke-white"
                      strokeWidth={1.5}
                      animate={{ scale: [1, 2.2], opacity: [0.9, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                  <circle r={on ? 7 : 6} className="fill-ink stroke-white" strokeWidth={2} />
                </motion.g>
              );
            })}

            {/* Country names on the wide views, city names once zoomed in. */}
            {map.countries.map((c) => (
              <MapLabel
                key={c.name}
                x={c.x}
                y={c.y}
                k={k}
                dy={-8}
                anchor="middle"
                show={!zoomedIn}
                fly={fly}
                reduce={reduce}
              >
                {c.name}
              </MapLabel>
            ))}
            {map.offices.map((o) => (
              <MapLabel key={o.id} x={o.x} y={o.y} k={k} dx={10} dy={4} show={zoomedIn} fly={fly} reduce={reduce}>
                {o.id}
              </MapLabel>
            ))}
          </motion.svg>

          <div className="absolute left-4 top-4 flex gap-1 rounded-full bg-white/90 p-1 shadow-sm backdrop-blur sm:left-6 sm:top-6">
            {tabs.map((v) => (
              <button
                key={v.id}
                type="button"
                aria-pressed={view === v.id}
                onClick={() => setView(v.id)}
                className={cn(
                  "shrink-0 rounded-full px-3.5 py-2.5 text-[11px] leading-none whitespace-nowrap transition-colors duration-300 sm:px-4",
                  view === v.id ? "bg-ink text-white" : "text-ink/60 hover:text-ink",
                  // Country tabs need the room; on phones the coverage list below does the same job.
                  v.wide && "hidden sm:block",
                )}
              >
                <span className="-mr-[0.2em] label-text">{v.label}</span>
              </button>
            ))}
          </div>
        </div>
        <ul className="mt-4 flex gap-6 text-[10px] text-ink/60">
          <li className="flex items-center gap-2">
            <span aria-hidden className="size-2.5 rounded-full border-2 border-white bg-ink ring-1 ring-ink/20" />
            <span className="label-text">Engagements</span>
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden className="size-2.5 rounded-full border-2 border-ink bg-white" />
            <span className="label-text">Offices</span>
          </li>
        </ul>
      </div>

      <div className="lg:col-span-5">
        <p className="text-xs text-brand label-text">International Coverage</p>
        <ul className="mt-5 border-t border-ink/10">
          {COVERAGE.map((c) => (
            <li key={c.country} className="border-b border-ink/10">
              <button
                type="button"
                aria-pressed={view === c.country}
                onClick={() => show(c.country)}
                className="group flex w-full items-baseline justify-between gap-6 py-4 text-left"
              >
                <span
                  className={cn(
                    "font-display text-2xl leading-tight transition-colors duration-300",
                    view === c.country ? "text-brand" : "text-ink group-hover:text-brand",
                  )}
                >
                  {c.country}
                </span>
                <span className="text-right text-xs leading-relaxed text-ink/55 label-text">
                  {c.cities.join(" · ")}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-xs text-brand label-text">Engagement Locations</p>
        <ul className="mt-5 border-t border-ink/10">
          {WORK_LOCATIONS.map((l) => (
            <li key={l.id} className="border-b border-ink/10">
              <button
                type="button"
                aria-pressed={l.id === active}
                onClick={() => select(l.id)}
                className="group flex w-full items-baseline justify-between gap-6 py-5 text-left"
              >
                <span
                  className={cn(
                    "font-display text-3xl leading-tight transition-colors duration-300",
                    l.id === active ? "text-ink" : "text-ink/45 group-hover:text-ink",
                  )}
                >
                  {l.name}
                </span>
                <span className="shrink-0 text-xs text-ink/50 label-text">{l.region}</span>
              </button>
            </li>
          ))}
        </ul>

        <div aria-live="polite" className="mt-10">
          <AnimatePresence mode="wait" initial={false}>
            {location && (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: EASE_EXPO }}
              >
                <p className="text-xs text-brand label-text">Selected engagements</p>
                <ul className="mt-5 space-y-4">
                  {location.engagements.map((e, i) => (
                    <motion.li
                      key={e}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: EASE_EXPO }}
                      className="flex items-baseline gap-4"
                    >
                      <span aria-hidden className="h-px w-5 shrink-0 translate-y-[-0.3em] bg-brand" />
                      <span className="text-lg leading-snug text-ink/85">{e}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/** Map text that keeps a constant on-screen size, haloed so it reads over any fill. */
function MapLabel({
  x,
  y,
  k,
  dx = 0,
  dy = 0,
  anchor = "start",
  show,
  fly,
  reduce,
  children,
}: {
  x: number;
  y: number;
  k: number;
  dx?: number;
  dy?: number;
  anchor?: "start" | "middle";
  show: boolean;
  fly: { duration: number };
  reduce: boolean;
  children: string;
}) {
  // Framer scales SVG about the element's box centre, which would drift the text
  // off its anchor; scale with a CSS transform (origin 0 0) under the moving group.
  return (
    <motion.g
      aria-hidden
      initial={false}
      animate={{ x, y, opacity: show ? 1 : 0 }}
      transition={fly}
      className="pointer-events-none"
    >
      <g
        style={{
          transform: `scale(${k})`,
          transition: reduce ? undefined : `transform ${fly.duration}s cubic-bezier(${EASE_INOUT.join(",")})`,
        }}
      >
        <text
          x={dx}
          y={dy}
          textAnchor={anchor}
          className="fill-ink font-label text-[11px] font-semibold uppercase tracking-[0.18em]"
          stroke="var(--color-paper)"
          strokeWidth={3}
          strokeLinejoin="round"
          paintOrder="stroke"
        >
          {children}
        </text>
      </g>
    </motion.g>
  );
}
