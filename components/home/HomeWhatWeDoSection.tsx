import Image from "next/image";
import React from "react";
import { FaDog, FaRegBuilding, FaTree, FaWater } from "react-icons/fa";
import { FunctionCard } from "../common/card";
import { TitleSection } from "../common/section";

const HomeWhatWeDoSection = () => {
  return (
    <section className="w-screen bg-app-green-tertiary py-24" id="what-we-do">
      <div className="app-container flex items-center">
        <div className="w-full">
          <TitleSection title="WHAT WE DO" />
          <div className="mx-24 mt-8 text-app-primary-text 2xl:mr-12">
            <h2>We care for earth, care for the coming birth</h2>
            <p className="mt-4 text-app-secondary-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="mt-8 flex w-[480px] flex-col justify-between space-y-6 border-l-[1px] border-app-border pl-6">
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
        <div className="relative h-[658px] w-3/5 overflow-hidden rounded-xl 2xl:h-[680px]">
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
