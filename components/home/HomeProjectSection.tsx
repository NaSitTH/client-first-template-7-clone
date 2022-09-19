import ProjectType from "../../interfaces/project";
import { ProjectRow } from "../common";
import { TitleSection } from "../common/section";

const HomeProjectSection = ({ allProjects }: ProjectType) => {
  return (
    <section className="app-container app-section-mt" id="projects">
      <TitleSection title="PROJECTS WE HAVE DONE" />
      <h2 className="mt-8 w-3/5 pl-24 text-app-primary-text">
        We are Creating sustainable society, for everyone and forever.
      </h2>
      <div className="mt-16">
        <ProjectRow allProjects={allProjects} />
      </div>
    </section>
  );
};
export default HomeProjectSection;
