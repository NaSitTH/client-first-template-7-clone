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
import { getAllBlogs, getAllEvents, getAllProjects } from "../../lib/api";
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
