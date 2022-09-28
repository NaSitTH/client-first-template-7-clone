import { TitleSection } from "../common/section";

const AboutHeaderSection = () => {
  return (
    <section className="app-container app-section-mt text-app-primary-text">
      <TitleSection title="KNOW ABOUT US" />
      <div className="mt-8 ml-24 flex space-x-16">
        <h1 className="w-full">We are a nonprofit team working worldwide</h1>
        <div className="w-[72%]">
          <p className="text-xl font-bold leading-[1.875rem]">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere.
          </p>
          <p className="mt-4 opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Suspendisse varius enim elementum tristique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeaderSection;
