import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { ButtonLink } from "../common";

const HomeHeroSection = () => {
  return (
    <section className="relative block">
      <Image
        src="/images/BG_1.png"
        alt="hero background"
        width={1500}
        height={735}
        layout="responsive"
      />
      <div className="absolute top-0 left-1/2 flex h-full w-[1280px] -translate-x-1/2 flex-col text-white 2xl:w-17/20">
        <div className="h-1/2">
          <h1 className="mt-32 w-3/5 pb-12 text-home-heading font-bold 2xl:mt-24">
            Save the environment today for a better tomorrow
          </h1>
          <div className="flex items-center space-x-6">
            <ButtonLink url="/" title="What we do" />
            <div className="flex items-center space-x-2 px-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <FaPlay className="h-2 w-2 text-black" />
              </span>
              <p className="text-button font-medium">Play Video</p>
            </div>
          </div>
        </div>

        <div className="flex h-1/2 shrink items-end justify-between pb-20 2xl:pb-10">
          <p className="text-lg font-medium leading-[1.32rem]">
            23,800 trees planted
          </p>
          <span className="flex h-5 grow items-center px-6">
            <span className="h-[1px] w-full bg-app-border"></span>
          </span>
          <p className="text-lg font-medium leading-[1.32rem]">
            5840 donations collected
          </p>
        </div>
      </div>
    </section>
  );
};
export default HomeHeroSection;
