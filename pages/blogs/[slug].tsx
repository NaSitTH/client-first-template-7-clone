import { BlogContentSection } from "../../components/blog";
import { MarkdownType } from "../../interfaces/markdown";
import { getAllBlogs, getBlogBySlug } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";

type Props = {
  blog: MarkdownType;
};

const Blogs = ({ blog }: Props) => {
  return (
    <>
      <BlogContentSection
        title={blog.title}
        subTitle={blog.subTitle}
        image={blog.coverImage}
        content={blog.content}
        date={blog.date}
      />
    </>
  );
};
export default Blogs;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const blog = getBlogBySlug(params.slug, [
    "title",
    "subTitle",
    "excerpt",
    "coverImage",
    "slug",
    "content",
    "date",
  ]);

  const content = await markdownToHtml(blog.content || "");

  return {
    props: {
      blog: {
        ...blog,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const blogs = getAllBlogs(["slug"]);

  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          slug: blog.slug,
        },
      };
    }),
    fallback: false,
  };
};
