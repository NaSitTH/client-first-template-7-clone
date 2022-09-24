import { MediaBlogSection, MediaHeaderSection } from "../components/media";
import { EventSection } from "../components/common/section";
import { getAllBlogs } from "../lib/api";
import { MarkdownType } from "../interfaces/markdown";

type Props = {
  fourBlogs: Array<MarkdownType>;
};

const Media = ({ fourBlogs }: Props) => {
  const threeBlogs = fourBlogs.slice(0, 3);
  return (
    <>
      {/* Header */}
      <MediaHeaderSection blogs={threeBlogs} />

      {/* Blogs */}
      <MediaBlogSection blogs={fourBlogs} />

      {/* Events */}
      <EventSection />
    </>
  );
};
export default Media;

export const getStaticProps = async () => {
  const blogs = getAllBlogs(["title", "excerpt", "coverImage", "slug", "date"]);
  const fourBlogs = blogs.slice(0, 4);

  return {
    props: {
      fourBlogs: fourBlogs,
    },
  };
};
