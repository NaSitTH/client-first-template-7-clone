import {
  ProjectsHeaderSection,
  ProjectsProjectSection,
  ProjectsWhatWeDoSection,
} from "../../components/projects";
import {
  BlogSection,
  CtaSection,
  EventsSection,
} from "../../components/common/section";
import { getAllProjects } from "../../lib/api";
import ProjectType from "../../interfaces/project";

const Projects = ({ allProjects }: ProjectType) => {
  return (
    <>
      {/* Header */}
      <ProjectsHeaderSection />

      {/* What we do */}
      <ProjectsWhatWeDoSection />

      {/* Project */}
      <ProjectsProjectSection allProjects={allProjects} />

      {/* CTA */}
      <CtaSection />

      {/* Blogs */}
      <BlogSection />

      {/* Events */}
      <EventsSection />
    </>
  );
};
export default Projects;

export const getStaticProps = async () => {
  const projects = getAllProjects(["title", "excerpt", "coverImage", "slug"]);

  const allProjects = projects.slice(0, 3);
  return {
    props: { allProjects },
  };
};