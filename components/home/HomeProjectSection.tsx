import { MarkdownType } from "../../interfaces/markdown";
import { ProjectCard } from "../common/card";
import { TitleSection } from "../common/section";

type ThreeProjectsType = {
  threeProjects: Array<MarkdownType>;
};

const HomeProjectSection = ({ threeProjects }: ThreeProjectsType) => {
  return (
    <section className="app-container app-section-mt" id="projects">
      <TitleSection title="PROJECTS WE HAVE DONE" />
      <h2 className="mt-8 w-3/5 pl-24 text-app-primary-text">
        We are Creating sustainable society, for everyone and forever.
      </h2>
      <div className="mt-16 grid grid-cols-3 gap-6">
        {threeProjects.map((data) => {
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
export default HomeProjectSection;
