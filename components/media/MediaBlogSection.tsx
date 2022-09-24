import { MarkdownType } from "../../interfaces/markdown";
import { BlogCard } from "../common/card";

type Props = {
  blogs: Array<MarkdownType>;
};

const MediaBlogSection = ({ blogs }: Props) => {
  return (
    <section className="app-container app-section-mt">
      <h2 className="text-center text-app-primary-text">
        Read our Recent News
      </h2>
      <p className="mx-auto mt-4 w-2/5 text-center text-app-secondary-text">
        Edit this text to make it your own. To edit, simply click directly on
        the text to start We are served
      </p>
      <div className="flex h-[360px] w-full justify-between space-x-6">
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
