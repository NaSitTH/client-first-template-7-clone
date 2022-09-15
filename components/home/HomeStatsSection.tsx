import React from "react";
import { StatsCard } from "../common/card";
import DoughnutChart from "../common/chart/DoughnutChart";

const statistics = [
  {
    id: 1,
    value: 40,
    title: "planting trees",
    color: "bg-app-green-secondary",
  },
  {
    id: 2,
    value: 35,
    title: "cleanliness program",
    color: "bg-app-purple",
  },
  {
    id: 3,
    value: 10,
    title: "helping people",
    color: "bg-app-yellow-secondary",
  },
  {
    id: 4,
    value: 10,
    title: "animal safety",
    color: "bg-app-yellow-primary",
  },
  {
    id: 5,
    value: 5,
    title: "feeding the poor",
    color: "bg-app-pink",
  },
];

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
          <div className="grid auto-cols-auto grid-flow-row grid-cols-3 gap-y-4 pt-8">
            {statistics.map((data) => {
              return <StatsCard key={data.id} data={data} />;
            })}
          </div>
        </div>
        <div className="flex w-5/6 justify-end">
          <div className="relative flex h-[375px] w-[375px] items-center justify-center">
            <DoughnutChart data={statistics} />
            <h3 className="absolute text-white">LOGO</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStatsSection;
