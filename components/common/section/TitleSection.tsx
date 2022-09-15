import React from "react";

type AppProps = {
  title: string;
};

const TitleSection = ({ title }: AppProps) => {
  return (
    <div className="flex items-center space-x-6 text-app-primary-text">
      <span className="flex h-5 items-center">
        <span className="h-0.5 w-[72px] bg-app-primary-text"></span>
      </span>
      <p className="text-button font-bold tracking-[0.125em]">{title}</p>
    </div>
  );
};

export default TitleSection;
