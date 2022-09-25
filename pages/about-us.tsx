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
import { getAllBlogs, getAllEvents } from "../lib/api";

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
  const blogs = getAllBlogs(["title", "excerpt", "coverImage", "slug", "date"]);
  const fourBlogs = blogs.slice(0, 4);

  const events = getAllEvents(["title", "date", "slug"]);
  const twoEvents = events.slice(0, 2);

  return {
    props: {
      fourBlogs: fourBlogs,
      twoEvents: twoEvents,
    },
  };
};
