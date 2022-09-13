import type { NextPage } from "next";
import LogoRow from "../components/common/LogoRow";
import {
  HomeAboutSection,
  HomeHeroSection,
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

      {/* Donation */}

      {/* Join */}

      {/* News */}

      {/* Events */}
    </>
  );
};

export default Home;
