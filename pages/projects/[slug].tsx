import { useRouter } from "next/router";
import { TitleSection } from "../../components/common/section";
import { ProjectContent } from "../../components/projects";
import { getAllProjects, getBySlug, projectsDirectory } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";

type Props = {
  project: {
    title: string;
    content: string;
  };
};

const ProjectId = ({ project }: Props) => {
  const router = useRouter();
  return (
    <section className="app-section-mt mx-auto max-w-4xl">
      <TitleSection title="OUR PROJECT" />
      <ProjectContent title={project.title} content={project.content} />
    </section>
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
    ["title", "content"],
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
