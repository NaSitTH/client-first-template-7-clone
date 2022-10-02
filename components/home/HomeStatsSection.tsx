import { statistics } from "../../lib/constant";
import { StatsCard } from "../common/card";
import DoughnutChart from "../common/chart/DoughnutChart";

const HomeStatsSection = () => {
  return (
    <section className="app-section-mt w-screen bg-app-black py-24 text-white xs:py-16">
      <div className="app-container flex items-center lg:flex-col lg:space-y-12">
        <div className="w-full">
          <h2 className="xs:text-h3">
            How we spend your donations and where it goes
          </h2>
          <p className="mt-4 opacity-60 lg:mt-8">
            We understand that when you make a  donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </p>
          <div className="grid auto-cols-auto grid-flow-row grid-cols-3 gap-y-4 pt-8 xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 md:px-12 sm:grid-cols-1 sm:px-4">
            {statistics.map((data) => {
              return <StatsCard key={data.title} data={data} />;
            })}
          </div>
        </div>
        <div className="flex w-5/6 justify-end 2xl:w-3/5 xl:w-5/6 lg:justify-center">
          <div className="relative flex h-[375px] w-[375px] items-center justify-center 2xl:h-80 2xl:w-80 md:h-72 md:w-72 xs:h-60 xs:w-60">
            <DoughnutChart data={statistics} />
            <h3 className="absolute text-white">LOGO</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStatsSection;
