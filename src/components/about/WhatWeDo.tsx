import Image from "next/image";
import { ParallaxImage, ParallaxLayer } from "@/components/motion/Parallax";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function WhatWeDo() {
  return (
    <section className="relative isolate overflow-hidden bg-brand text-white">
      <ParallaxImage
        src="/images/sector.jpg"
        alt=""
        reveal={false}
        speed={14}
        className="!absolute inset-0 -z-10 opacity-45"
      />
      {/* Light enough for the photo to show through, dark enough at the text edge for white type. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-brand/90 via-brand/75 to-brand/55" />

      <ParallaxLayer
        speed={-30}
        className="pointer-events-none absolute -right-24 top-1/2 -z-10 hidden aspect-square w-[34rem] -translate-y-1/2 select-none opacity-[0.12] md:block lg:right-0"
      >
        <Image src="/logo-mark-white.png" alt="" fill sizes="34rem" className="object-contain" />
      </ParallaxLayer>

      <div className="container-x py-28 lg:py-40">
        <div className="max-w-4xl">
          <Eyebrow className="text-white/80">What We Do</Eyebrow>
          <RevealText
            text="Carter Consulting works at the point where important decisions become programmes, investments, operating models and institutional change."
            className="mt-8 font-display text-[clamp(2rem,4vw,3.75rem)] leading-[1.08]"
            stagger={0.03}
          />
          <FadeIn delay={0.2} className="mt-12">
            <ButtonLink href="/services" variant="light">
              Explore our services
            </ButtonLink>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
