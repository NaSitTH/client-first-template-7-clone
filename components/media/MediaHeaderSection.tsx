import { MarkdownType } from "../../interfaces/markdown";
import { ButtonLink } from "../common/button";
import { BlogCard } from "../common/card";
import { TitleSection } from "../common/section";

type Props = {
  blogs: Array<MarkdownType>;
};

const MediaHeaderSection = ({ blogs }: Props) => {
  const threeBlogs = blogs.slice(0, 3);
  return (
    <section className="w-screen bg-app-green-tertiary py-24">
      <div className="app-container flex space-x-24 2xl:space-x-16">
        <div className="w-full">
          <TitleSection title="TOP NEWS" />
          <div className="mt-8 ml-24">
            <h1 className="text-app-primary-text">
              Our goal is to make water available for everyone
            </h1>
            <p className="mt-4 mb-8 text-app-secondary-text">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p>
            <ButtonLink url="#recent-news" title="Read More" isPrimary />
          </div>
        </div>
        <div className="flex w-full flex-col space-y-6 rounded-xl bg-white py-6 pl-6 pr-14 2xl:w-4/5 2xl:p-6 xl:hidden">
          {blogs.map((data) => {
            return (
              <BlogCard
                key={data.title}
                title={data.title}
                excerpt={data.excerpt}
                image={data.coverImage}
                url={`/blogs/${data.slug}`}
                isRow
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default MediaHeaderSection;
