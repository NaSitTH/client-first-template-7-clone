import { MediaBlogSection, MediaHeaderSection } from "../components/media";
import { EventSection } from "../components/common/section";
import { getAllBlogs, getAllEvents } from "../lib/api";
import { MarkdownType } from "../interfaces/markdown";

type Props = {
  [key: string]: Array<MarkdownType>;
};

const Media = ({ fourBlogs, twoEvents }: Props) => {
  const threeBlogs = fourBlogs.slice(0, 3);
  return (
    <>
      {/* Header */}
      <MediaHeaderSection blogs={threeBlogs} />

      {/* Blogs */}
      <MediaBlogSection blogs={fourBlogs} />

      {/* Events */}
      <EventSection events={twoEvents} />
    </>
  );
};
export default Media;

export const getStaticProps = async () => {
  const blogs = getAllBlogs(["title", "excerpt", "coverImage", "slug", "date"]);
  const fourBlogs = blogs.slice(0, 4);

  const events = getAllEvents(["title", "date", "slug"]);
  const twoEvents = events.slice(0, 2);

  return {
    props: {
      fourBlogs: fourBlogs,
      twoEvents: twoEvents,
    },
  };
};
