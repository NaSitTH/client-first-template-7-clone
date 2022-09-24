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
    <Link href={`/blogs/${url}`}>
      <a
        className={`group flex cursor-pointer ${
          isRow ? "flex-row items-center space-x-6" : "flex-col"
        }`}
      >
        <div className="relative h-[192px] w-full overflow-hidden rounded-lg transition group-hover:scale-105">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className={isRow ? "mt-0" : "mt-4"}>
          <p className="w-full text-xl font-medium leading-[1.875rem] text-[#1C1D28]">
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
