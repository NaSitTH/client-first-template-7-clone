import { statistics } from "../../lib/constant";
import { StatsCard } from "../common/card";
import DoughnutChart from "../common/chart/DoughnutChart";

const HomeStatsSection = () => {
  return (
    <section className="app-section-mt w-screen bg-app-black py-24">
      <div className="app-container flex items-center">
        <div className="w-full text-white">
          <h2>How we spend your donations and where it goes</h2>
          <p className="mt-4 opacity-60">
            We understand that when you make a  donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </p>
          <div className="grid auto-cols-auto grid-flow-row grid-cols-3 gap-y-4 pt-8">
            {statistics.map((data) => {
              return <StatsCard key={data.title} data={data} />;
            })}
          </div>
        </div>
        <div className="flex w-5/6 justify-end 2xl:w-3/5">
          <div className="relative flex h-[375px] w-[375px] items-center justify-center 2xl:h-80 2xl:w-80">
            <DoughnutChart data={statistics} />
            <h3 className="absolute text-white">LOGO</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStatsSection;
