import {
  FaDocker,
  FaGithub,
  FaNode,
  FaNpm,
  FaUbuntu,
  FaWindows,
} from "react-icons/fa";

const SupporterSection = () => {
  return (
    <section className="app-container my-16">
      <div className="flex text-app-primary-text">
        <p className="text-button font-medium tracking-[0.125em]">
          OUR SUPPORTERS
        </p>
        <span className="ml-6 flex h-5 grow items-center">
          <span className="h-[1px] w-full bg-app-border"></span>
        </span>
      </div>
      <div className="mt-8 flex items-center justify-between text-paragraph font-medium text-app-primary-text/60 lg:grid lg:grid-cols-3 lg:gap-y-8 xs:flex">
        <div className="logo-wrapper">
          <FaGithub className="logo-icon" />
          <span className="xs:hidden">logoipsum</span>
        </div>
        <div className="logo-wrapper">
          <FaNode className="logo-icon" />
          <span className="xs:hidden">logoipsum</span>
        </div>
        <div className="logo-wrapper">
          <FaNpm className="logo-icon" />
          <span className="xs:hidden">logoipsum</span>
        </div>
        <div className="logo-wrapper">
          <FaUbuntu className="logo-icon" />
          <span className="xs:hidden">logoipsum</span>
        </div>
        <div className="logo-wrapper">
          <FaWindows className="logo-icon" />
          <span className="xs:hidden">logoipsum</span>
        </div>
        <div className="logo-wrapper">
          <FaDocker className="logo-icon" />
          <span className="xs:hidden">logoipsum</span>
        </div>
      </div>
    </section>
  );
};
export default SupporterSection;
