import { ProjectRow } from "../common";
import { TitleSection } from "../common/section";

const HomeProjectSection = () => {
  return (
    <section className="app-container app-section-mt">
      <TitleSection title="PROJECTS WE HAVE DONE" />
      <h2 className="mt-8 w-3/5 pl-24">
        We are Creating sustainable society, for everyone and forever.
      </h2>
      <div className="mt-16 h-[420px]">
        <ProjectRow />
      </div>
    </section>
  );
};
export default HomeProjectSection;
