import React from "react";
import BlogCard from "./BlogCard";

const BlogPosts = () => {
  return (
    <section className="flex w-full justify-between space-x-6">
      <BlogCard
        title="Don’t destroy greenery and don’t spoil scenery"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        image="/images/Thumbnail_3.png"
      />
      <BlogCard
        title=" Is climate change happening faster than expected?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        image="/images/Thumbnail_2.png"
      />
      <BlogCard
        title="Top 10 facts about wind farms you didn't know"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        image="/images/Thumbnail_1.png"
      />
      <BlogCard
        title="Our goal is to make water available for everyone"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        image="/images/Thumbnail_4.png"
      />
    </section>
  );
};

export default BlogPosts;
