import { SupporterSection } from "../common/section";

const AboutMissionSection = () => {
  return (
    <section className="-mt-[224px] w-screen bg-app-green-tertiary text-app-primary-text lg:-mt-40 sm:-mt-32 xs:-mt-20">
      <div className="app-container app-section-space-x flex px-24 pt-80 lg:px-12 lg:pt-60 md:px-0 sm:flex-col sm:space-x-0 sm:space-y-8 sm:pt-48 xs:pt-36">
        <div className="">
          <p className="text-button font-bold tracking-[0.125em]">OUR MISSON</p>
          <h3 className="mt-4 xs:text-h4">
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
          <p className="text-button font-bold tracking-[0.125em] sm:hidden">
            OUR MISSON
          </p>
          <h3 className="mt-4 xs:text-h4">
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
        <SupporterSection />
      </div>
    </section>
  );
};
export default AboutMissionSection;
