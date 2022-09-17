import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

type AppProps = {
  data: {
    image: string;
    fullName: string;
    position: string;
    facebookUrl: string;
    twitterUrl: string;
    linkedinUrl: string;
  };
};

const MemberCard = ({ data }: AppProps) => {
  return (
    <div className="flex h-[431px] w-[296px] flex-col items-center">
      <div className="relative h-80 w-full overflow-hidden rounded-lg">
        <Image
          src={data.image}
          alt={data.fullName}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="mt-4 text-xl font-medium leading-[2rem]">{data.fullName}</p>
      <p className="mt-2 text-xs font-medium leading-[1.2rem] opacity-60">
        {data.position}
      </p>
      <div className="mt-4 flex justify-center space-x-5">
        <Link href={data.facebookUrl}>
          <a target="_blank">
            <FaFacebook className="h-5 w-5" />
          </a>
        </Link>
        <Link href={data.twitterUrl}>
          <a target="_blank">
            <FaTwitter className="h-5 w-5" />
          </a>
        </Link>
        <Link href={data.linkedinUrl}>
          <a target="_blank">
            <FaLinkedin className="h-5 w-5" />
          </a>
        </Link>
      </div>
    </div>
  );
};
export default MemberCard;
