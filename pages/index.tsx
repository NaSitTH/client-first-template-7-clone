import type { NextPage } from "next";
import LogoRow from "../components/common/LogoRow";
import { HomeAboutSection, HomeHeroSection } from "../components/home";

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

      {/* Projects */}

      {/* Donation */}

      {/* Join */}

      {/* News */}

      {/* Events */}
    </>
  );
};

export default Home;
