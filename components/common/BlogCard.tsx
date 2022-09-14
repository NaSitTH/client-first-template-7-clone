import Image from "next/image";
import React from "react";

type AppProps = {
  title: string;
  text: string;
  image: string;
};

const BlogCard = ({ title, text, image }: AppProps) => {
  return (
    <div>
      <div className="relative h-[192px] w-full overflow-hidden rounded-lg">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <p className="mt-4 text-xl font-medium leading-[1.875rem] text-[#1C1D28]">
        {title}
      </p>
      <p className="mt-2 text-app-secondary-text">{text}</p>
    </div>
  );
};

export default BlogCard;
