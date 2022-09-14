import React from "react";
import BlogPosts from "./BlogPosts";

const BlogSection = () => {
  return (
    <section className="app-container app-section-mt">
      <h2 className="text-[2.5rem] leading-[3.5rem] text-app-primary-text">
        Read Our News
      </h2>
      <div className="mt-12">
        <BlogPosts />
      </div>
    </section>
  );
};

export default BlogSection;
