import Image from "next/image";

const AboutJourneySection = () => {
  return (
    <section className="app-container app-section-mt flex items-center space-x-12 overflow-hidden rounded-xl bg-app-black py-16 lg:flex-col lg:space-y-12 lg:space-x-0">
      <div className="ml-24 w-[75%] text-white lg:ml-0 lg:w-4/5">
        <p className="text-button font-bold tracking-[0.125em]">OUR JOURNEY</p>
        <h2 className="mt-4 xs:text-h3">How we raised 34M</h2>
        <p className="mt-4 opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh.
        </p>
        <div className="mt-8 flex space-x-8 font-medium xs:space-x-4">
          <div>
            <h1 className="text-2xl leading-[2.4rem]">34M+</h1>
            <p className="text-xs leading-[1.2rem] opacity-60">
              Donation Received
            </p>
          </div>
          <div>
            <h1 className="text-2xl leading-[2.4rem]">400+</h1>
            <p className="text-xs leading-[1.2rem] opacity-60">Volunters</p>
          </div>
          <div>
            <h1 className="text-2xl leading-[2.4rem]">40K+</h1>
            <p className="text-xs leading-[1.2rem] opacity-60">Trees planted</p>
          </div>
        </div>
      </div>
      <div className="relative h-[448px] w-full overflow-hidden rounded-l-lg lg:h-80 lg:w-4/5 lg:rounded-lg md:h-64 xs:h-40">
        <Image
          src="/images/Image_16.png"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};
export default AboutJourneySection;
