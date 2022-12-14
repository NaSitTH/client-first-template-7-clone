import Image from "next/image";
import React from "react";
import { ButtonLink } from "../button";

const CtaSection = () => {
  return (
    <section className="app-container app-section-mt overflow-hidden rounded-xl xs:w-full xs:overflow-visible">
      <div className="relative h-96 w-full md:h-64 xs:h-48">
        <Image
          src="/images/Thumbnail_1.png"
          alt="windmill"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-app-black opacity-50" />
        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center space-y-8 text-white sm:space-y-4">
          <h2 className="w-1/2 text-center 2xl:w-4/5 xl:w-full lg:w-4/5 md:text-h3 xs:text-h4">
            You can contribute to make the environment greener!
          </h2>
          <div className="flex justify-center space-x-8 sm:space-x-4">
            <ButtonLink
              url="/contact#form"
              title="Join as a volunteer"
              isPrimary
            />
            <ButtonLink url="/donation" title="Donate" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
