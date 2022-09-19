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

console.log(proseStyle.h2, proseStyle.p);

const ProjectContent = ({ title, content }: Props) => {
  return (
    <article>
      <h1 className="mt-8 ml-24">{title}</h1>
      <div
        className={`ml-24 mt-8 ${proseStyle.h2} ${proseStyle.p} ${proseStyle.ul} ${proseStyle.img}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};
export default ProjectContent;
