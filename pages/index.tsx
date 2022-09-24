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
import { getAllBlogs, getAllProjects } from "../lib/api";
import { MarkdownType } from "../interfaces/markdown";

type Props = {
  threeProjects: Array<MarkdownType>;
  fourBlogs: Array<MarkdownType>;
};

const Home = ({ threeProjects, fourBlogs }: Props) => {
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
      <EventSection />
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

  return {
    props: {
      threeProjects: threeProjects,
      fourBlogs: fourBlogs,
    },
  };
};
