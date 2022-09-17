import type { NextPage } from "next";
import {
  AboutAwardsSection,
  AboutHeaderSection,
  AboutJourneySection,
  AboutMissionSection,
  AboutTeamSection,
  AboutVideoSection,
} from "../components/about";
import {
  BlogSection,
  CtaSection,
  EventsSection,
} from "../components/common/section";

const AboutUs: NextPage = () => {
  return (
    <>
      {/* Header */}
      <AboutHeaderSection />

      {/* Our mission */}
      <AboutVideoSection />
      <AboutMissionSection />

      {/* Awards */}
      <AboutAwardsSection />

      {/* Our journey */}
      <AboutJourneySection />

      {/* Our team */}
      <AboutTeamSection />

      {/* CTA */}
      <CtaSection />

      {/* Blogs */}
      <BlogSection />

      {/* Events */}
      <EventsSection />
    </>
  );
};

export default AboutUs;
