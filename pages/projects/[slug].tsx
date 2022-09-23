import { ProjectCard } from "../../components/common/card";
import {
  ProjectContentSection,
  ProjectFeaturesSection,
} from "../../components/project";
import { ProjectType } from "../../interfaces/project";
import { getAllProjects, getBySlug, projectsDirectory } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";

type SingleProjectsType = {
  project: ProjectType & { allProjects: Array<ProjectType> };
};

const ProjectId = ({ project }: SingleProjectsType) => {
  return (
    <>
      <ProjectContentSection title={project.title} content={project.content} />
      <ProjectFeaturesSection />

      <section className="app-container app-section-mt grid grid-cols-3 gap-6">
        {project.allProjects.map((data) => {
          return (
            <ProjectCard
              key={data.title}
              title={data.title}
              excerpt={data.excerpt}
              image={data.coverImage}
              url={`/projects/${data.slug}`}
            />
          );
        })}
      </section>
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

  const projects = getAllProjects([
    "title",
    "excerpt",
    "coverImage",
    "slug",
    "date",
  ]);
  const allProjects = projects.slice(0, 3);

  return {
    props: {
      project: {
        ...project,
        content,
        allProjects,
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
