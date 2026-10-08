import type { Metadata } from "next";
import { Careers } from "@/components/about/Careers";
import { Experience } from "@/components/about/Experience";
import { Intro } from "@/components/about/Intro";
import { People } from "@/components/about/People";
import { Principles } from "@/components/about/Principles";
import { TrackRecord } from "@/components/about/TrackRecord";
import { WhatWeDo } from "@/components/about/WhatWeDo";
import { WhereWeWork } from "@/components/about/WhereWeWork";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Carter Consulting is a multidisciplinary management and technology consultancy established in 2009, working across Nigeria and international markets.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Est. 2009 · Management & Technology Consulting"
        title="About Carter"
        image="/images/about-hero.jpg"
        intro="Carter Consulting is a multidisciplinary management and technology consultancy established in 2009."
      />
      <Intro />
      <WhatWeDo />
      <Experience />
      <Principles />
      <TrackRecord />
      <WhereWeWork />
      <People />
      <Careers />
    </>
  );
}
