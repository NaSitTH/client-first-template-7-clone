import type { NextPage } from "next";

import {
  HomeAboutSection,
  HomeHeroSection,
  HomeProjectSection,
  HomeStatsSection,
  HomeWhatWeDoSection,
} from "../components/home";

import { BlogSection, CtaSection, EventsSection, SupportersSection } from "../components/common/section";

const Home: NextPage = () => {
  return (
    <>
      {/* Hero */}
      <HomeHeroSection />

      {/* About us */}
      <HomeAboutSection />

      {/* Logo Row */}
      <SupportersSection />

      {/* What we do */}
      <HomeWhatWeDoSection />

      {/* Projects */}
      <HomeProjectSection />

      {/* Donation */}
      <HomeStatsSection />

      {/* Join */}
      <CtaSection />

      {/* News */}
      <BlogSection />

      {/* Events */}
      <EventsSection />
    </>
  );
};

export default Home;
