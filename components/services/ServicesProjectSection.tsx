import { ProjectRow } from "../common";
import { TitleSection } from "../common/section";

const ServicesProjectSection = () => {
  return (
    <section className="app-container app-section-mt text-app-primary-text">
      <p className="text-center text-button font-bold tracking-[0.125em]">
        PROJECTS WE HAVE DONE
      </p>
      <h2 className="mx-auto mt-4 w-4/6 text-center">
        We are Creating sustainable society, for everyone and forever.
      </h2>
      <div className="mt-16 h-[420px]">
        <ProjectRow />
      </div>
    </section>
  );
};
export default ServicesProjectSection;
