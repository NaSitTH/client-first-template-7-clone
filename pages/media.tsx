import { MediaBlogSection, MediaHeaderSection } from "../components/media";
import { EventSection } from "../components/common/section";
import { getFourBlogs, getTwoEvents } from "../lib/api";
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
  const fourBlogs = getFourBlogs();
  const twoEvents = getTwoEvents();

  return {
    props: {
      fourBlogs: fourBlogs,
      twoEvents: twoEvents,
    },
  };
};
