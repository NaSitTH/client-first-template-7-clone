import Image from "next/image";
import ButtonLink from "../ButtonLink";

type AppProps = {
  title: string;
  text: string;
  image: string;
  url: string;
};

const ProjectCard = ({ title, text, image, url }: AppProps) => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      <Image
        src={image}
        alt={`${title} image`}
        layout="fill"
        objectFit="cover"
      />
      <div className="h-full w-full bg-app-black opacity-50"></div>
      <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-between p-12 text-white">
        <div className="mt-8">
          <h3>{title}</h3>
          <p className="mt-4">{text}</p>
        </div>
        <div className="grow-0">
          <ButtonLink url={url} title="See more" />
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
