import type { Metadata } from "next";
import { Associates } from "@/components/people/Associates";
import { JoinCarter } from "@/components/people/JoinCarter";
import { Leadership } from "@/components/people/Leadership";
import { PracticeTeams } from "@/components/people/PracticeTeams";
import { ProfileProvider } from "@/components/people/Profiles";
import { PageHero } from "@/components/ui/PageHero";

const INTRO =
  "Carter brings together multidisciplinary expertise across strategy, technology, finance, programme delivery and sector advisory. Our leadership team provides the direction, institutional perspective and technical depth that underpin the firm's work.";

export const metadata: Metadata = { title: "Our People", description: INTRO };

export default function Page() {
  return (
    <ProfileProvider>
      <PageHero
        eyebrow="Leadership & Practice Teams"
        title="Our People"
        image="/images/people-hero.jpg"
        intro={INTRO}
      />
      <Leadership />
      <PracticeTeams />
      <Associates />
      <JoinCarter />
    </ProfileProvider>
  );
}
