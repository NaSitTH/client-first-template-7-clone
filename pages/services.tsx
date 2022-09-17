import type { NextPage } from "next";

import {
  ServicesHeaderSection,
  ServicesProjectSection,
  ServicesWhatWeDoSection,
} from "../components/services";

import {
  BlogSection,
  CtaSection,
  EventsSection,
} from "../components/common/section";

const Services: NextPage = () => {
  return (
    <>
      {/* Header */}
      <ServicesHeaderSection />

      {/* What we do */}
      <ServicesWhatWeDoSection />

      {/* Project */}
      <ServicesProjectSection />

      {/* CTA */}
      <CtaSection />

      {/* Blogs */}
      <BlogSection />

      {/* Events */}
      <EventsSection />
    </>
  );
};
export default Services;
