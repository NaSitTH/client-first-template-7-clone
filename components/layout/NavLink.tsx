import Link from "next/link";
import { useRouter } from "next/router";

type AppProps = {
  url: string;
  title: string;
};

const NavLink = ({ url, title }: AppProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  console.log(currentRoute);
  return (
    <Link href={url}>
      <a
        className={
          currentRoute === url ? "text-black" : "text-app-primary-text"
        }
      >
        {title}
      </a>
    </Link>
  );
};
export default NavLink;
