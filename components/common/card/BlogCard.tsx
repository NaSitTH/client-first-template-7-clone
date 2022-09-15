import Image from "next/image";
import Link from "next/link";
import React from "react";

type AppProps = {
  title: string;
  text: string;
  image: string;
  url: string;
};

const BlogCard = ({ title, text, image, url }: AppProps) => {
  return (
    <Link href={url}>
      <a className="group cursor-pointer">
        <div className="relative h-[192px] w-full overflow-hidden rounded-lg transition group-hover:scale-105">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        <p className="mt-4 w-full text-xl font-medium leading-[1.875rem] text-[#1C1D28]">
          {title}
        </p>
        <p className="mt-2 text-app-secondary-text line-clamp-3 group-hover:line-clamp-none">
          {text}
        </p>
      </a>
    </Link>
  );
};

export default BlogCard;
