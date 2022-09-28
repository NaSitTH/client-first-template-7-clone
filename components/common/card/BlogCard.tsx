import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  excerpt: string;
  image: string;
  url: string;
  isRow?: boolean;
};

const BlogCard = ({ title, excerpt, image, url, isRow }: Props) => {
  return (
    <Link href={url}>
      <a
        className={`group flex cursor-pointer ${
          isRow ? "flex-row items-center space-x-6" : "flex-col"
        }`}
      >
        <div
          className={`relative w-full ${
            isRow ? "h-40 shrink 2xl:h-36" : "h-48 shrink-0 2xl:h-40"
          } overflow-hidden rounded-lg transition group-hover:scale-[.97]`}
        >
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className={isRow ? "mt-0 " : "mt-4"}>
          <p className="w-full text-xl font-medium leading-[1.875rem] text-[#1C1D28] line-clamp-2 hover:line-clamp-none">
            {title}
          </p>
          <p className="mt-2 text-app-secondary-text line-clamp-3 group-hover:line-clamp-none">
            {excerpt}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
