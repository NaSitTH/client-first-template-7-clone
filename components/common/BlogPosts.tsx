import React from "react";
import { BlogCard } from "./card";

const BlogPosts = () => {
  return (
    <section className="flex h-full w-full justify-between space-x-6">
      <BlogCard
        title="Don’t destroy greenery and don’t spoil scenery"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        image="/images/Thumbnail_3.png"
        url="/"
      />
      <BlogCard
        title=" Is climate change happening faster than expected?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        image="/images/Thumbnail_2.png"
        url="/"
      />
      <BlogCard
        title="Top 10 facts about wind farms you didn't know"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        image="/images/Thumbnail_1.png"
        url="/"
      />
      <BlogCard
        title="Our goal is to make water available for everyone"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        image="/images/Thumbnail_4.png"
        url="/"
      />
    </section>
  );
};

export default BlogPosts;
