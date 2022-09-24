import { TitleSection } from "../common/section";

type Props = {
  title: string;
  content: string;
};

const proseStyle = {
  h2: "prose-h2:mt-12 prose-p:mt-4",
  p: "prose-p:text-app-secondary-text",
  ul: "prose-ul:ml-8 prose-ul:mt-4 prose-ul:list-disc prose-ul:text-paragraph prose-ul:font-bold prose-ul:text-app-primary-text",
  img: "prose-img:mt-8 prose-img:h-80 prose-img:w-full prose-img:rounded-xl prose-img:object-cover",
};

const ProjectContentSection = ({ title, content }: Props) => {
  return (
    <section className="app-section-mt mx-auto max-w-4xl">
      <TitleSection title="OUR PROJECT" />
      <h1 className="mt-8 ml-24">{title}</h1>
      <div
        className="markdown-content ml-24 mt-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
};
export default ProjectContentSection;
