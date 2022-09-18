import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  url: string;
  title: string;
};

const NavLink = ({ url, title }: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <Link href={url}>
      <a
        className={
          currentRoute === url ? "text-black" : "text-app-secondary-text"
        }
      >
        {title}
      </a>
    </Link>
  );
};
export default NavLink;
