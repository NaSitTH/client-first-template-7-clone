import Image from "next/image";
import React from "react";
import { ButtonLink } from "../common";
import { TitleSection } from "../common/section";

const HomeAboutSection = () => {
  return (
    <section className="app-container app-section-mt flex items-center">
      <div className="w-full">
        <TitleSection title="KNOW ABOUT US" />
        <div className="mx-24 mt-8 text-app-primary-text">
          <h2>We help nature smile and survive everywhere</h2>
          <p className="mt-8 text-app-secondary-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p className="mt-8 mb-16 text-app-secondary-text">
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus
            id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
            posuere.
          </p>
          <ButtonLink url="/" title="Learn more" isPrimary />
        </div>
      </div>
      <div className="relative h-[578px] w-3/5 overflow-hidden rounded-xl">
        <Image
          src="/images/BG_2.png"
          alt="kid hugging each other"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default HomeAboutSection;
