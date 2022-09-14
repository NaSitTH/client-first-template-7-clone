import type { NextPage } from "next";
import { LogoRow } from "../components/common";
import {
  HomeAboutSection,
  HomeHeroSection,
  HomeProjectSection,
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

      {/* Join */}

      {/* News */}

      {/* Events */}
    </>
  );
};

export default Home;
