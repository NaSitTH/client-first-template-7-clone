import { MarkdownType } from "../../interfaces/markdown";
import { ProjectCard } from "../common/card";

type AllProjectsType = {
  allProjects: Array<MarkdownType>;
};

const ProjectProjectSection = ({ allProjects }: AllProjectsType) => {
  return (
    <section className="app-container app-section-mt text-app-primary-text">
      <p className="text-center text-button font-bold tracking-[0.125em]">
        PROJECTS WE HAVE DONE
      </p>
      <h2 className="mx-auto mt-4 w-4/6 text-center">
        We are Creating sustainable society, for everyone and forever.
      </h2>
      <div className="mt-16 grid grid-cols-3 gap-6">
        {allProjects.map((data) => {
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
      </div>
    </section>
  );
};
export default ProjectProjectSection;
