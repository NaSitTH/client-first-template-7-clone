import type { NextPage } from "next";
import { CtaSection, LogoRow } from "../components/common";
import {
  HomeAboutSection,
  HomeHeroSection,
  HomeProjectSection,
  HomeStatsSection,
  HomeWhatWeDoSection,
} from "../components/home";

const Home: NextPage = () => {
  return (
    <>
      {/* Hero */}
      <HomeHeroSection />

      {/* About us */}
      <HomeAboutSection />

      {/* Logo Row */}
      <LogoRow />

      {/* What we do */}
      <HomeWhatWeDoSection />

      {/* Projects */}
      <HomeProjectSection />

      {/* Donation */}
      <HomeStatsSection />

      {/* Join */}
      <CtaSection />

      {/* News */}

      {/* Events */}
    </>
  );
};

export default Home;
