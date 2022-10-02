import { MarkdownType } from "../../interfaces/markdown";
import { ProjectCard } from "../common/card";

type Props = {
  projects: Array<MarkdownType>;
};

const ProjectProjectSection = ({ projects }: Props) => {
  return (
    <section className="app-container app-section-mt text-app-primary-text">
      <p className="text-center text-button font-bold tracking-[0.125em]">
        PROJECTS WE HAVE DONE
      </p>
      <h2 className="mx-auto mt-4 w-4/6 text-center 2xl:w-4/5 xl:w-full xs:text-h3">
        We are Creating sustainable society, for everyone and forever.
      </h2>
      <div className="mt-16 grid grid-cols-3 gap-6 lg:gap-4 md:mx-auto md:grid-cols-1 md:gap-8 xs:mt-8">
        {projects.map((data) => {
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
