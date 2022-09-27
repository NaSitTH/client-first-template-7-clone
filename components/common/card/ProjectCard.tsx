import Image from "next/image";
import { ButtonLink } from "../button";

type Props = {
  [key: string]: string;
};

const ProjectCard = ({ title, excerpt, image, url }: Props) => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
      <div className="h-[420px] w-full bg-app-black opacity-50"></div>
      <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-between p-12 text-white 2xl:px-10 xl:px-8">
        <div className="mt-8 2xl:mt-4 ">
          <h3 className="line-clamp-3">{title}</h3>
          <p className="mt-4 line-clamp-4">{excerpt}</p>
        </div>
        <div className="grow-0">
          <ButtonLink url={url} title="See more" />
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
