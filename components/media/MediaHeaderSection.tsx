import { ButtonLink } from "../common";
import { BlogCard } from "../common/card";
import { TitleSection } from "../common/section";

const MediaHeaderSection = () => {
  return (
    <section className="w-screen bg-app-green-tertiary py-24">
      <div className="app-container flex space-x-24">
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
            <ButtonLink url="/" title="Read More" isPrimary />
          </div>
        </div>
        <div className="flex w-full flex-col space-y-6 rounded-xl bg-white py-6 pl-6 pr-14">
          <BlogCard
            title="Don’t destroy greenery and don’t spoil scenery"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
            image="/images/Thumbnail_3.png"
            url="/"
            isRow
          />
          <BlogCard
            title=" Is climate change happening faster than expected?"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
            image="/images/Thumbnail_2.png"
            url="/"
            isRow
          />
          <BlogCard
            title="Top 10 facts about wind farms you didn't know"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
            image="/images/Thumbnail_1.png"
            url="/"
            isRow
          />
        </div>
      </div>
    </section>
  );
};
export default MediaHeaderSection;
