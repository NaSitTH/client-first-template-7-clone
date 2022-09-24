import Image from "next/image";
import React from "react";
import { ButtonLink } from "../button";

const CtaSection = () => {
  return (
    <section className="app-container app-section-mt overflow-hidden rounded-xl">
      <div className="relative h-[384px] w-full">
        <Image
          src="/images/Thumbnail_1.png"
          alt="windmill"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-app-black opacity-50" />
        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center space-y-8 text-white">
          <h2 className="w-1/2 text-center">
            You can contribute to make the environment greener!
          </h2>
          <div className="flex w-1/2 justify-center space-x-8">
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
