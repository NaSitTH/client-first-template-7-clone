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
  EventSection,
} from "../components/common/section";

const AboutUs = () => {
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
      <EventSection />
    </>
  );
};

export default AboutUs;
