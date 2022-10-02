import React from "react";

type Props = {
  title: string;
};

const TitleSection = ({ title }: Props) => {
  return (
    <div className="flex items-center space-x-6 text-app-primary-text xs:w-full xs:justify-center">
      <span className="flex h-5 items-center xs:w-full">
        <span className="h-0.5 w-[72px] bg-app-primary-text xs:w-full"></span>
      </span>
      <p className="shrink-0 text-button font-bold tracking-[0.125em]">
        {title}
      </p>
      <span className="hidden h-5 w-full items-center xs:flex">
        <span className="h-0.5 w-full bg-app-primary-text"></span>
      </span>
    </div>
  );
};

export default TitleSection;
