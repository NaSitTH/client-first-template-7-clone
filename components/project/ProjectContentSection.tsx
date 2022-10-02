import { TitleSection } from "../common/section";

type Props = {
  title: string;
  content: string;
};

const ProjectContentSection = ({ title, content }: Props) => {
  return (
    <section className="app-section-mt mx-auto max-w-4xl lg:w-17/20 md:mt-16 sm:mt-12">
      <TitleSection title="OUR PROJECT" />
      <h1 className="mt-8 ml-24 sm:ml-0 xs:text-h2">{title}</h1>
      <div
        className="markdown-content ml-24 mt-8 sm:ml-0"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
};
export default ProjectContentSection;
