import { MarkdownType } from "../../interfaces/markdown";
import { BlogCard } from "../common/card";

type Props = {
  blogs: Array<MarkdownType>;
};

const MediaBlogSection = ({ blogs }: Props) => {
  return (
    <section className="app-container app-section-mt" id="recent-news">
      <h2 className="text-center text-app-primary-text">
        Read our Recent News
      </h2>
      <p className="mx-auto mt-4 w-5/12 text-center text-app-secondary-text 2xl:w-3/5 xl:w-4/5">
        Edit this text to make it your own. To edit, simply click directly on
        the text to start We are served
      </p>
      <div className="mt-12 flex w-full justify-between space-x-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-x-0">
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
export default MediaBlogSection;
