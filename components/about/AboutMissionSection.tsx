import { SupportersSection } from "../common/section";

const AboutMissionSection = () => {
  return (
    <section className="-mt-[224px] w-screen bg-app-green-tertiary text-app-primary-text">
      <div className="app-container flex space-x-24 px-24 pt-80">
        <div className="">
          <p className="text-button font-bold">OUR MISSON</p>
          <h3 className="mt-4">
            We make the world we save our own environment
          </h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className="">
          <p className="text-button font-bold">OUR MISSON</p>
          <h3 className="mt-4">
            Plant more trees to make world air pollution free
          </h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
      </div>
      <div className="py-8">
        <SupportersSection />
      </div>
    </section>
  );
};
export default AboutMissionSection;
