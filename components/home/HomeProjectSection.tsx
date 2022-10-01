import { MarkdownType } from "../../interfaces/markdown";
import { ProjectCard } from "../common/card";
import { TitleSection } from "../common/section";

type Props = {
  projects: Array<MarkdownType>;
};

const HomeProjectSection = ({ projects }: Props) => {
  return (
    <section className="app-container app-section-mt" id="projects">
      <TitleSection title="PROJECTS WE HAVE DONE" />
      <h2 className="mt-8 w-3/5 pl-24 text-app-primary-text 2xl:w-14/20 xl:w-full">
        We are Creating sustainable society, for everyone and forever.
      </h2>
      <div className="mt-16 grid grid-cols-3 gap-6 lg:gap-4 md:mx-auto md:grid-cols-1 md:gap-6">
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
export default HomeProjectSection;
