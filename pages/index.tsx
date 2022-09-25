import {
  HomeAboutSection,
  HomeHeroSection,
  HomeProjectSection,
  HomeStatsSection,
  HomeWhatWeDoSection,
} from "../components/home";
import {
  BlogSection,
  CtaSection,
  EventSection,
  SupporterSection,
} from "../components/common/section";
import { getFourBlogs, getThreeProjects, getTwoEvents } from "../lib/api";
import { MarkdownType } from "../interfaces/markdown";

type Props = {
  [key: string]: Array<MarkdownType>;
};

const Home = ({ threeProjects, fourBlogs, twoEvents }: Props) => {
  return (
    <>
      {/* Hero */}
      <HomeHeroSection />

      {/* About us */}
      <HomeAboutSection />

      {/* Supporters */}
      <SupporterSection />

      {/* What we do */}
      <HomeWhatWeDoSection />

      {/* Projects */}
      <HomeProjectSection projects={threeProjects} />

      {/* Stats */}
      <HomeStatsSection />

      {/* CTA */}
      <CtaSection />

      {/* Blogs */}
      <BlogSection blogs={fourBlogs} />

      {/* Events */}
      <EventSection events={twoEvents} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const threeProjects = getThreeProjects();
  const fourBlogs = getFourBlogs();
  const twoEvents = getTwoEvents();

  return {
    props: {
      threeProjects: threeProjects,
      fourBlogs: fourBlogs,
      twoEvents: twoEvents,
    },
  };
};
