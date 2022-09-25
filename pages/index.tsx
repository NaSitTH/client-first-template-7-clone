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
import { getAllBlogs, getAllEvents, getAllProjects } from "../lib/api";
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
  const projects = getAllProjects([
    "title",
    "excerpt",
    "coverImage",
    "slug",
    "date",
  ]);
  const threeProjects = projects.slice(0, 3);

  const blogs = getAllBlogs(["title", "excerpt", "coverImage", "slug", "date"]);
  const fourBlogs = blogs.slice(0, 4);

  const events = getAllEvents(["title", "date", "slug"]);
  const twoEvents = events.slice(0, 2);

  return {
    props: {
      threeProjects: threeProjects,
      fourBlogs: fourBlogs,
      twoEvents: twoEvents,
    },
  };
};
