import { AboutSnapshot } from "@/components/home/AboutSnapshot";
import { Approach } from "@/components/home/Approach";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { Hero } from "@/components/home/Hero";
import { Partners } from "@/components/home/Partners";
import { WhatWeDo } from "@/components/home/WhatWeDo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <AboutSnapshot />
      <Partners />
      <Approach />
      <ClosingCTA />
    </>
  );
}
