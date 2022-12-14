import { FaCompass, FaDonate, FaImage, FaPen, FaWater } from "react-icons/fa";
import FeaturesCard from "../common/card/FeaturesCard";

const ProjectFeaturesSection = () => {
  return (
    <section className="app-section-mt bg-app-off-white py-24 xs:py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-12 xl:w-17/20 md:grid-cols-1 md:px-12 sm:gap-8 sm:px-4">
        <FeaturesCard
          title="200+ Plantation in 1 week"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          icon={<FaPen />}
        />
        <FeaturesCard
          title="230 People Have donated"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          icon={<FaDonate />}
        />
        <FeaturesCard
          title="30+ people joined "
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          icon={<FaImage />}
        />
        <FeaturesCard
          title="$324 Raised for this initiate"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          icon={<FaCompass />}
        />
      </div>
    </section>
  );
};
export default ProjectFeaturesSection;
