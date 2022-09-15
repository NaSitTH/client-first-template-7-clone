import React from "react";

type AppProps = {
  data: {
    id: number;
    value: number;
    title: string;
    color: string;
  };
};

const StatsCard = ({ data }: AppProps) => {
  return (
    <div className="flex items-center space-x-1">
      <span className={`h-4 w-4 rounded ${data.color}`} />
      <p className="pl-1">{`${data.value}%`}</p>
      <p>{data.title}</p>
    </div>
  );
};

export default StatsCard;