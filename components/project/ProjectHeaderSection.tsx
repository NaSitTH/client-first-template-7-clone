import Image from "next/image";
import { TitleSection } from "../common/section";

const ProjectHeaderSection = () => {
  return (
    <section className="app-container app-section-mt app-section-space-x flex lg:flex-wrap lg:space-x-0 lg:space-y-12 md:mt-16 sm:mt-12">
      <div className="w-full">
        <TitleSection title="WHAT WE DO" />
        <h1 className="mt-8 ml-24 text-app-primary-text sm:ml-0 xs:text-h2">
          We are working worldwide
        </h1>
        <p className="text-app-secondary-tex ml-24 mt-8 sm:ml-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
      <div className="relative h-96 w-3/5 overflow-hidden rounded-xl lg:h-72 lg:w-full md:h-64 xs:h-44">
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
