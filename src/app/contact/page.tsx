import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Offices } from "@/components/contact/Offices";
import { RotatingHeadline } from "@/components/contact/RotatingHeadline";
import { FadeIn, RevealText } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { CONTACT_HEADLINES, GENERAL_CONTACT } from "@/lib/content";

const SUPPORTING =
  "Tell us what you are working on, where you are in the process and what you need to resolve. We will direct your enquiry to the relevant team.";

export const metadata: Metadata = { title: "Contact Us", description: SUPPORTING };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact Carter"
        title={<RotatingHeadline lines={CONTACT_HEADLINES} />}
        titleClassName="max-w-5xl text-[clamp(2.4rem,5.2vw,5rem)] leading-[1.05]"
        image="/images/contact-hero.jpg"
        intro={SUPPORTING}
      />

      <section className="bg-paper py-24 lg:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Eyebrow className="text-brand">Enquiries</Eyebrow>
            <RevealText
              as="h2"
              text="Tell us what you need to resolve."
              className="mt-8 font-display text-[clamp(2rem,3.2vw,3rem)] leading-[1.08]"
              stagger={0.04}
            />
            <FadeIn delay={0.1}>
              <p className="mt-6 leading-relaxed text-ink/70">
                Enquiries will be directed to the relevant Carter team based on the nature of the assignment.
                General enquiries will be reviewed by our Client Delivery &amp; Partnerships team.
              </p>
            </FadeIn>

            <FadeIn delay={0.18} className="mt-14 border-t border-ink/10 pt-8">
              <p className="text-[11px] text-brand label-text">General enquiries</p>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href={`mailto:${GENERAL_CONTACT.email}`}
                    className="group inline-flex items-center gap-4 font-display text-2xl transition-colors hover:text-brand"
                  >
                    <Mail aria-hidden className="size-5 text-brand" />
                    <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-expo group-hover:bg-[length:100%_1px]">
                      {GENERAL_CONTACT.email}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${GENERAL_CONTACT.phone.replace(/\s/g, "")}`}
                    className="group inline-flex items-center gap-4 font-display text-2xl transition-colors hover:text-brand"
                  >
                    <Phone aria-hidden className="size-5 text-brand" />
                    <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-expo group-hover:bg-[length:100%_1px]">
                      {GENERAL_CONTACT.phone}
                    </span>
                  </a>
                </li>
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <div className="border border-ink/10 bg-white p-8 shadow-[0_30px_80px_-40px_rgba(11,26,19,0.25)] sm:p-12">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>

      <Offices />
    </>
  );
}
