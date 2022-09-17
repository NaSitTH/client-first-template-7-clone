import Image from "next/image";
import { ButtonLink } from "../common";
import { TitleSection } from "../common/section";

const DonationHeaderSection = () => {
  return (
    <section className="bg-app-green-tertiary py-24">
      <div className="app-container flex">
        <div className="w-full">
          <TitleSection title="DONATE" />
          <div className="mx-24">
            <h1 className="mt-8 text-app-primary-text">
              Making a donation for Nature.
            </h1>
            <p className="mt-4 mb-8 text-app-secondary-text">
              When you donate, you’re supporting effective solutions to big
              environmental challenges—an investment in the future of our
              planet.
            </p>
            <ButtonLink url="/" title="Donate now" isPrimary />
          </div>
        </div>
        <div className="relative h-96 w-3/5 overflow-hidden rounded-xl">
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
