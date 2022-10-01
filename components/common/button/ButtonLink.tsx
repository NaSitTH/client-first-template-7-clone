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
        className={`inline-block rounded ${
          isPrimary
            ? "bg-app-green-primary text-white"
            : "bg-white text-app-primary-text"
        } px-8 py-4 text-button font-medium md:py-3 md:px-6`}
      >
        {title}
      </a>
    </Link>
  );
};
export default ButtonLink;
