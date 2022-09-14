import React from "react";
import { StatsCard } from "../common";

const HomeStatsSection = () => {
  return (
    <section className="app-section-mt h-[576px] w-screen bg-app-black py-24">
      <div className="app-container flex items-center">
        <div className="w-full text-white">
          <h2>How we spend your donations and where it goes</h2>
          <p className="mt-4 opacity-60">
            We understand that when you make a  donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </p>
          <div className="grid auto-cols-auto grid-flow-row grid-cols-3 pt-8">
            <StatsCard
              title="planting trees"
              value={40}
              bgColor="bg-app-green-secondary"
            />
            <StatsCard
              title="cleanliness program"
              value={35}
              bgColor="bg-app-purple"
            />
            <StatsCard
              title="helping people"
              value={10}
              bgColor="bg-app-yellow-secondary"
            />
            <StatsCard
              title="animal safety"
              value={10}
              bgColor="bg-app-yellow-primary"
            />
            <StatsCard
              title="feeding the poor"
              value={5}
              bgColor="bg-app-pink"
            />
          </div>
        </div>
        <div className="flex w-5/6 justify-end">
          <div className="flex h-[375px] w-[375px] items-center justify-center bg-red-200">
            <h3>Chart Here</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStatsSection;
