import React from "react";

type AppProps = {
  title: string;
  value: number;
  bgColor: string;
};

const StatsCard = ({ title, value, bgColor }: AppProps) => {
  return (
    <div className="flex items-center space-x-1">
      <span className={`h-4 w-4 rounded ${bgColor}`} />
      <p className="pl-1">{`${value}%`}</p>
      <p>{title}</p>
    </div>
  );
};

export default StatsCard;
