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
import { MarkdownType } from "../interfaces/markdown";
import { getFourBlogs, getTwoEvents } from "../lib/api";

type Props = {
  [key: string]: Array<MarkdownType>;
};

const AboutUs = ({ fourBlogs, twoEvents }: Props) => {
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
      <BlogSection blogs={fourBlogs} />

      {/* Events */}
      <EventSection events={twoEvents} />
    </>
  );
};

export default AboutUs;

export const getStaticProps = async () => {
  const fourBlogs = getFourBlogs();
  const twoEvents = getTwoEvents();

  return {
    props: {
      fourBlogs: fourBlogs,
      twoEvents: twoEvents,
    },
  };
};
