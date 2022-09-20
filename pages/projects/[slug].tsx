import { ProjectsContentSection } from "../../components/projects";
import ProjectsFeaturesSection from "../../components/projects/ProjectsFeaturesSection";
import { ProjectType } from "../../interfaces/project";
import { getAllProjects, getBySlug, projectsDirectory } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";

const ProjectId = ({ project }: ProjectType) => {
  return (
    <>
      <ProjectsContentSection title={project.title} content={project.content} />
      <ProjectsFeaturesSection />
    </>
  );
};
export default ProjectId;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const project = getBySlug(
    params.slug,
    ["title", "excerpt", "coverImage", "slug", "content"],
    projectsDirectory
  );

  const content = await markdownToHtml(project.content || "");

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
};
