import { MediaBlogSection, MediaHeaderSection } from "../components/media";
import { EventSection } from "../components/common/section";

const Media = () => {
  return (
    <>
      {/* Header */}
      <MediaHeaderSection />

      {/* Blogs */}
      <MediaBlogSection />

      {/* Events */}
      <EventSection />
    </>
  );
};
export default Media;
