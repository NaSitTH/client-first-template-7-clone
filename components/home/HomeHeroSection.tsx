import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { ButtonLink } from "../common/button";

const HomeHeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-68px)]">
      <div className="relative h-full w-screen">
        <Image
          src="/images/BG_1.png"
          alt="forest"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-0 left-1/2 flex h-full w-[1280px] -translate-x-1/2 flex-col text-white 2xl:w-[1024px] xl:w-4/5">
        <div className="w-full">
          <h1 className="mt-32 w-3/5 pb-12 text-home-heading font-bold 2xl:mt-24 2xl:w-14/20 xl:w-4/5">
            Save the environment today for a better tomorrow
          </h1>
          <div className="flex items-center space-x-6">
            <ButtonLink url="#what-we-do" title="What we do" />
            {/* <div className="flex items-center space-x-2 px-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <FaPlay className="h-2 w-2 text-black" />
              </span>
              <button className="text-button font-medium">Play Video</button>
            </div> */}
          </div>
        </div>

        <div className="flex h-full shrink items-end justify-between pb-20 xl:pb-12">
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
