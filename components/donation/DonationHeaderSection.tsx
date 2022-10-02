import Image from "next/image";
import { ButtonLink } from "../common/button";
import { TitleSection } from "../common/section";

const DonationHeaderSection = () => {
  return (
    <section className="bg-app-green-tertiary py-24 md:py-16 sm:pt-12">
      <div className="app-container app-section-space-x flex lg:flex-col lg:space-x-0 lg:space-y-12">
        <div className="w-full">
          <TitleSection title="DONATE" />
          <div className="ml-24 sm:ml-0">
            <h1 className="mt-8 text-app-primary-text xs:text-h2">
              Making a donation for Nature.
            </h1>
            <p className="mt-4 mb-8 text-app-secondary-text">
              When you donate, you’re supporting effective solutions to big
              environmental challenges—an investment in the future of our
              planet.
            </p>
            <ButtonLink url="/contact#form" title="Donate now" isPrimary />
          </div>
        </div>
        <div className="relative h-96 w-3/5 overflow-hidden rounded-xl 2xl:w-1/2 lg:h-64 lg:w-full md:h-60 xs:h-40">
          <Image
            src="/images/Image_7.png"
            alt="donation"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};
export default DonationHeaderSection;
