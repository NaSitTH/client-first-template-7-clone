import React from "react";
import { MarkdownType } from "../../../interfaces/markdown";
import BlogPosts from "../BlogPosts";
import { BlogCard } from "../card";

type Props = {
  blogs: Array<MarkdownType>;
};

const BlogSection = ({ blogs }: Props) => {
  return (
    <section className="app-container app-section-mt">
      <h2 className="text-[2.5rem] leading-[3.5rem] text-app-primary-text">
        Read Our News
      </h2>
      <div className="mt-12 flex h-[360px] w-full justify-between space-x-6">
        {blogs.map((data) => {
          return (
            <BlogCard
              key={data.title}
              title={data.title}
              excerpt={data.excerpt}
              image={data.coverImage}
              url={`/blogs/${data.slug}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BlogSection;
