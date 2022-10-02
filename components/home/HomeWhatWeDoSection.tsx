import Image from "next/image";
import React from "react";
import { FaDog, FaRegBuilding, FaTree, FaWater } from "react-icons/fa";
import { FunctionCard } from "../common/card";
import { TitleSection } from "../common/section";

const HomeWhatWeDoSection = () => {
  return (
    <section
      className="w-screen bg-app-green-tertiary py-24 xs:py-16"
      id="what-we-do"
    >
      <div className="app-container app-section-space-x flex items-center xl:flex-col xl:space-y-12 lg:space-x-0">
        <div className="w-full">
          <TitleSection title="WHAT WE DO" />
          <div className="ml-24 mt-8 text-app-primary-text sm:ml-0">
            <h2 className="xs:text-h3">
              We care for earth, care for the coming birth
            </h2>
            <p className="mt-4 text-app-secondary-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="mt-8 flex w-[480px] flex-col justify-between space-y-6 border-l-[1px] border-app-border pl-6 xl:grid xl:w-full xl:grid-cols-2 xl:gap-12 xl:space-y-0 xl:border-none xl:pl-0 lg:grid-cols-1 md:w-full sm:gap-8 sm:px-4">
              <FunctionCard
                title="Build Healthy Cities"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                icon={<FaRegBuilding />}
              />
              <FunctionCard
                title="Tree Plantation"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                icon={<FaTree />}
              />
              <FunctionCard
                title="Protect Land and Water"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                icon={<FaWater />}
              />
              <FunctionCard
                title="Animal Safety"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                icon={<FaDog />}
              />
            </div>
          </div>
        </div>
        <div className="relative h-[658px] w-3/5 overflow-hidden rounded-xl 2xl:h-[680px] xl:h-80 xl:w-full lg:h-64 md:h-60 xs:h-40">
          <Image
            src="/images/Image_5.png"
            alt="man playing with dog"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeWhatWeDoSection;
