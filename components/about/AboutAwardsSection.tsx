import NgoAward from "../../public/images/ngo-award.svg";
import GlobalAward from "../../public/images/global-award.svg";
import ForestoAward from "../../public/images/foresto-award.svg";
import EarthSaverAward from "../../public/images/earth-saver-award.svg";

const AboutAwardsSection = () => {
  return (
    <section className="app-container app-section-mt text-app-primary-text">
      <h2 className="text-center xs:text-h3">Awards &#38; Recognitions</h2>
      <div className="mt-12 flex justify-between px-[90px] lg:grid lg:grid-cols-3 lg:gap-8 md:grid-cols-2 sm:px-8 xs:grid-cols-1">
        <div className="flex flex-col items-center lg:col-span-3 md:col-span-1">
          <div className="h-auto w-[111px]">
            <NgoAward />
          </div>
          <h3 className="mt-4 text-2xl leading-[2.4rem]">2022</h3>
          <p className="font-bold">Best NGO Award</p>
          <p className="text-xs font-medium leading-[1.2rem] opacity-60">
            Berlin, Germany
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-auto w-[111px]">
            <GlobalAward />
          </div>
          <h3 className="mt-4 text-2xl leading-[2.4rem]">2018</h3>
          <p className="font-bold">Global Award</p>
          <p className="text-xs font-medium leading-[1.2rem] opacity-60">
            New York, USA
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-auto w-[111px]">
            <ForestoAward />
          </div>
          <h3 className="mt-4 text-2xl leading-[2.4rem]">2016</h3>
          <p className="font-bold">Foresto Award</p>
          <p className="text-xs font-medium leading-[1.2rem] opacity-60">
            New Delhi, India
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-auto w-[111px]">
            <EarthSaverAward />
          </div>
          <h3 className="mt-4 text-2xl leading-[2.4rem]">2014</h3>
          <p className="font-bold">Earth Saver Award</p>
          <p className="text-xs font-medium leading-[1.2rem] opacity-60">
            Vienna, Austria
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutAwardsSection;
