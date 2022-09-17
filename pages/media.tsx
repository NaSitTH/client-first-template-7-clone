import { NextPage } from "next";
import { MediaBlogSection, MediaHeaderSection } from "../components/media";
import { EventsSection } from "../components/common/section";

const media: NextPage = () => {
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
export default media;
