import {
  FaDog,
  FaHandHoldingWater,
  FaLeaf,
  FaRegBuilding,
  FaTree,
  FaWater,
} from "react-icons/fa";
import { FunctionCard } from "../common/card";

const ProjectWhatWeDoSection = () => {
  return (
    <section className="app-section-mt bg-app-green-tertiary py-24">
      <div className="app-container">
        <h2 className="lg:text-center">What we do for the environment</h2>
        <div className="mt-16 grid grid-cols-3 gap-y-12 gap-x-16 xl:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:px-12">
          <FunctionCard
            title="Build Healthy Cities"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            icon={<FaRegBuilding />}
          />
          <FunctionCard
            title="Protect Land and Water"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            icon={<FaWater />}
          />
          <FunctionCard
            title="Tree Plantation"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            icon={<FaTree />}
          />
          <FunctionCard
            title="Water sustainability"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            icon={<FaHandHoldingWater />}
          />
          <FunctionCard
            title="Animal Safety"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            icon={<FaDog />}
          />
          <FunctionCard
            title="Biodiversity"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            icon={<FaLeaf />}
          />
        </div>
      </div>
    </section>
  );
};
export default ProjectWhatWeDoSection;
