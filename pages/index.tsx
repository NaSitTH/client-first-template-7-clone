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
  EventsSection,
  SupportersSection,
} from "../components/common/section";
import { getAllProjects } from "../lib/api";
import ProjectType from "../interfaces/project";

const Home = ({ allProjects }: ProjectType) => {
  return (
    <>
      {/* Hero */}
      <HomeHeroSection />

      {/* About us */}
      <HomeAboutSection />

      {/* Supporters */}
      <SupportersSection />

      {/* What we do */}
      <HomeWhatWeDoSection />

      {/* Projects */}
      <HomeProjectSection allProjects={allProjects} />

      {/* Stats */}
      <HomeStatsSection />

      {/* CTA */}
      <CtaSection />

      {/* Blogs */}
      <BlogSection />

      {/* Events */}
      <EventsSection />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const projects = getAllProjects(["title", "excerpt", "coverImage", "slug"]);

  const allProjects = projects.slice(0, 3);
  return {
    props: { allProjects },
  };
};
