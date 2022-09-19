import { MediaBlogSection, MediaHeaderSection } from "../components/media";
import { EventsSection } from "../components/common/section";

const Media = () => {
  return (
    <>
      {/* Header */}
      <MediaHeaderSection />

      {/* Blogs */}
      <MediaBlogSection />

      {/* Events */}
      <EventsSection />
    </>
  );
};
export default Media;
