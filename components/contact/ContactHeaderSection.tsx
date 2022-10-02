import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TitleSection } from "../common/section";

const ContactHeaderSection = () => {
  return (
    <section className="bg-app-off-white py-24 md:py-16 sm:pt-12">
      <div className="app-container app-section-space-x flex text-app-primary-text lg:flex-col lg:space-x-0 lg:space-y-12">
        <div className="w-full">
          <TitleSection title="CONTACT US" />
          <h1 className="ml-24 mt-8 sm:ml-0 xs:text-h2">
            We&apos;d love to hear from you
          </h1>
          <p className="ml-24 mt-4 opacity-70 sm:ml-0 ">
            Have any question in mind or want to enquire? Please feel free to
            contact us through the form or the following details.
          </p>
        </div>
        <div className="w-full 2xl:w-4/5 xl:w-3/5 lg:w-full lg:pl-24 sm:pl-0">
          <h4 className="text-2xl leading-[2.4rem]">Let&apos;Talk!</h4>
          <div className="mt-3 flex space-x-8 lg:mt-2">
            <a className="text-base leading-7" href="tel:+123456789">
              +123456789
            </a>
            <a className="text-base leading-7" href="mailto:text@test.com">
              text@test.com
            </a>
          </div>
          <h4 className="mt-12 lg:mt-8">Headoffice</h4>
          <p className="mt-2 text-app-secondary-text">
            8 Brewery Drive, Hudson, NH 03051 USA
          </p>
          <h4 className="mt-8">Branch Office</h4>
          <p className="mt-2 text-app-secondary-text">
            178 Marconi St., Venice, 34293 Italy
          </p>
          <div
            className="mt-8 flex space-x-5 opacity-80 md:mr-24 md:justify-center sm:mr-0"
            id="form"
          >
            <Link href="https://www.facebook.com/">
              <a target="_blank">
                <FaFacebook className="h-5 w-5" />
              </a>
            </Link>
            <Link href="https://twitter.com/">
              <a target="_blank">
                <FaTwitter className="h-5 w-5" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/">
              <a target="_blank">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactHeaderSection;
