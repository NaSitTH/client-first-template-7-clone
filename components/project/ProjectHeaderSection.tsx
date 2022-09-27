import Image from "next/image";
import { TitleSection } from "../common/section";

const ProjectHeaderSection = () => {
  return (
    <section className="app-container app-section-mt flex ">
      <div className="w-full pr-28 xl:pr-12">
        <TitleSection title="WHAT WE DO" />
        <h1 className="mt-8 ml-24 text-app-primary-text">
          We are working worldwide
        </h1>
        <p className="text-app-secondary-tex ml-24 mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
      <div className="relative h-96 w-3/5 overflow-hidden rounded-xl">
        <Image
          src="/images/Image_6.png"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};
export default ProjectHeaderSection;
