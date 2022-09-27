import Image from "next/image";
import { format } from "date-fns";

type Props = {
  [key: string]: string;
};

const BlogContentSection = ({
  title,
  subTitle,
  image,
  content,
  date,
}: Props) => {
  const dateFormatted = format(new Date(date), "dd MMM yyyy");

  return (
    <section className="app-container app-section-mt text-app-primary-text">
      <div className="mx-auto max-w-5xl">
        <p className="text-center font-medium">{dateFormatted}</p>
        <h1 className="mt-8 text-center">{title}</h1>
        <p className="mt-4 text-center text-app-secondary-text">{subTitle}</p>
      </div>
      <div className="relative mt-12 h-96 w-full overflow-hidden rounded-xl">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div
        className="markdown-content mx-auto mt-12 max-w-6xl"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
};
export default BlogContentSection;
