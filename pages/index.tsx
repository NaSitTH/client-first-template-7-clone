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
import { getAllProjects } from "../lib/api";
import { ProjectType } from "../interfaces/project";

type AllProjectsType = {
  allProjects: Array<ProjectType>;
};

const Home = ({ allProjects }: AllProjectsType) => {
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
      <HomeProjectSection allProjects={allProjects} />

      {/* Stats */}
      <HomeStatsSection />

      {/* CTA */}
      <CtaSection />

      {/* Blogs */}
      <BlogSection />

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

  const allProjects = projects.slice(0, 3);
  return {
    props: { allProjects },
  };
};
