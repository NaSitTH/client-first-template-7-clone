import React from "react";
import { ButtonLink, TitleSection } from "../common";

const HomeAboutSection = () => {
  return (
    <section className="app-container app-section-mt flex items-center">
      <div className="w-full">
        <TitleSection title="Know About Us" />
        <div className="mx-24 mt-8">
          <h2>We help nature smile and survive everywhere</h2>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p className="mt-8 mb-16">
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus
            id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
            posuere.
          </p>
          <ButtonLink url="/" title="Learn more" isPrimary />
        </div>
      </div>
      <div className="h-[578px] w-3/5 bg-red-200">{/* Image */}</div>
    </section>
  );
};

export default HomeAboutSection;
