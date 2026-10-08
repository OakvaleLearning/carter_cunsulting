import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Polygon } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import coarse from "world-atlas/countries-110m.json";
import fine from "world-atlas/countries-50m.json";
import { RevealText, FadeIn } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { OFFICES, WORK_LOCATIONS } from "@/lib/content";
import { WorkMap, type Box, type MapData } from "./WorkMap";

const WIDTH = 1000;
const NIGERIA = "566";
const ANTARCTICA = "010";
// Countries with a zoomed view (and Nigeria's neighbours) come from the detailed set so they stay crisp.
const DETAILED = new Set([NIGERIA, "204", "562", "148", "120", "826"]);

// Clockwise ring: d3-geo treats an anticlockwise ring as the rest of the globe.
const AFRICA: Feature<Polygon> = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [[[-18, -35], [-18, 38], [52, 38], [52, -35], [-18, -35]]],
  },
};

function countries(topo: unknown) {
  const t = topo as Topology<{ countries: GeometryCollection }>;
  return (feature(t, t.objects.countries) as FeatureCollection).features;
}

/** Projects the world map once on the server; only path strings and view boxes reach the client. */
function buildMap(): MapData {
  const features = [
    ...countries(coarse).filter((f) => !DETAILED.has(String(f.id)) && String(f.id) !== ANTARCTICA),
    ...countries(fine).filter((f) => DETAILED.has(String(f.id))),
  ];
  const projection = geoNaturalEarth1().fitWidth(WIDTH, { type: "FeatureCollection", features });
  const path = geoPath(projection).digits(1);

  const box = (f: Feature, padRatio: number): Box => {
    const [[x0, y0], [x1, y1]] = path.bounds(f);
    const pad = Math.max(x1 - x0, y1 - y0) * padRatio;
    return { x: x0 - pad, y: y0 - pad, w: x1 - x0 + pad * 2, h: y1 - y0 + pad * 2 };
  };
  const [[, top], [, bottom]] = path.bounds({ type: "FeatureCollection", features });
  const point = (coords: [number, number]) => {
    const [x, y] = projection(coords)!;
    return { x, y };
  };

  // Every country with an office gets a label (centred above its outline) and its own zoomed view.
  const covered = [...new Set(OFFICES.map((o) => o.country))].flatMap((name) => {
    const f = features.find((c) => c.properties?.name === name);
    if (!f) return [];
    const [[x0, y0], [x1]] = path.bounds(f);
    return [{ name, f, label: { name, x: (x0 + x1) / 2, y: y0 } }];
  });

  return {
    shapes: features.map((f) => ({ id: String(f.id), d: path(f) ?? "", focus: String(f.id) === NIGERIA })),
    views: {
      world: { x: 0, y: top, w: WIDTH, h: bottom - top },
      africa: box(AFRICA, 0.04),
      ...Object.fromEntries(covered.map((c) => [c.name, box(c.f, 0.35)])),
    },
    countries: covered.map((c) => c.label),
    markers: WORK_LOCATIONS.map((l) => ({ id: l.id, ...point(l.coords) })),
    offices: OFFICES.map((o) => ({ id: o.city, country: o.country, ...point(o.coords) })),
  };
}

export function WhereWeWork() {
  const map = buildMap();

  return (
    <section className="relative overflow-hidden bg-paper py-28 lg:py-40">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow className="text-brand">Nigeria &amp; International</Eyebrow>
            <RevealText
              text="Where We Work"
              className="mt-8 font-display text-[clamp(2.4rem,4vw,3.75rem)] leading-[1.05]"
            />
          </div>
          <FadeIn delay={0.1} className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="leading-relaxed text-ink/75">
              Our work has taken us across Nigeria and into international markets, with experience spanning public
              institutions, governments, development partners, multinational organisations and other
              private-sector clients.
            </p>
          </FadeIn>
        </div>

        <WorkMap map={map} />
      </div>
    </section>
  );
}
