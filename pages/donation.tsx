import { NextPage } from "next";
import {
  DonationHeaderSection,
  DonationHowToSection,
  DonationUsageSection,
} from "../components/donation";
import { CtaSection } from "../components/common/section";

const donation: NextPage = () => {
  return (
    <>
      {/* Header */}
      <DonationHeaderSection />

      {/* How to  */}
      <DonationHowToSection />

      {/* Usage */}
      <DonationUsageSection />

      {/* CTA */}
      <CtaSection />
    </>
  );
};
export default donation;
