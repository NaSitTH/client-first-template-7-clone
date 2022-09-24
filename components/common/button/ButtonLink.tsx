import Link from "next/link";

type Props = {
  url: string;
  title: string;
  isPrimary?: boolean;
};

const ButtonLink = ({ url, title, isPrimary }: Props) => {
  return (
    <Link href={url}>
      <a
        className={`inline-block h-[51px] rounded ${
          isPrimary
            ? "bg-app-green-primary text-white"
            : "bg-white text-app-primary-text"
        } px-8 py-4 text-button font-medium`}
      >
        {title}
      </a>
    </Link>
  );
};
export default ButtonLink;
