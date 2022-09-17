import { BlogPosts } from "../common";

const MediaBlogSection = () => {
  return (
    <section className="app-container app-section-mt">
      <h2 className="text-center text-app-primary-text">
        Read our Recent News
      </h2>
      <p className="mx-auto mt-4 w-2/5 text-center text-app-secondary-text">
        Edit this text to make it your own. To edit, simply click directly on
        the text to start We are served
      </p>
      <div className="mt-12 h-[360px]">
        <BlogPosts />
      </div>
    </section>
  );
};
export default MediaBlogSection;
