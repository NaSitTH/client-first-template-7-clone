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
import { getFourBlogs, getThreeProjects, getTwoEvents } from "../../lib/api";
import { MarkdownType } from "../../interfaces/markdown";

type Props = {
  threeProjects: Array<MarkdownType>;
  fourBlogs: Array<MarkdownType>;
  twoEvents: Array<MarkdownType>;
};

const Projects = ({ threeProjects, fourBlogs, twoEvents }: Props) => {
  return (
    <>
      {/* Header */}
      <ProjectHeaderSection />

      {/* What we do */}
      <ProjectWhatWeDoSection />

      {/* Project */}
      <ProjectProjectSection projects={threeProjects} />

      {/* CTA */}
      <CtaSection />

      {/* Blogs */}
      <BlogSection blogs={fourBlogs} />

      {/* Events */}
      <EventSection events={twoEvents} />
    </>
  );
};
export default Projects;

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
