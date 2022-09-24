import {
  ProjectHeaderSection,
  ProjectProjectSection,
  ProjectWhatWeDoSection,
} from "../../components/project";
import {
  BlogSection,
  CtaSection,
  EventSection,
} from "../../components/common/section";
import { getAllProjects } from "../../lib/api";
import { MarkdownType } from "../../interfaces/markdown";

type AllProjectsType = {
  allProjects: Array<MarkdownType>;
};

const Projects = ({ allProjects }: AllProjectsType) => {
  return (
    <>
      {/* Header */}
      <ProjectHeaderSection />

      {/* What we do */}
      <ProjectWhatWeDoSection />

      {/* Project */}
      <ProjectProjectSection allProjects={allProjects} />

      {/* CTA */}
      <CtaSection />

      {/* Blogs */}
      <BlogSection />

      {/* Events */}
      <EventSection />
    </>
  );
};
export default Projects;

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
