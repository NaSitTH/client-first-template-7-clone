import Link from "next/link";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa";

interface IUrl {
  url: {
    aboutUs: string;
    whatWeDo: string;
    contact: string;
    donate: string;
    media: string;
  };
}

const Header = ({ url }: IUrl) => {
  return (
    <header className="mx-auto flex h-[67px] max-w-7xl items-center justify-between 2xl:w-17/20">
      <h4 className="flex h-full items-center">Logo</h4>
      <ul className="flex items-center space-x-10 font-medium leading-[1.1875rem] lg:space-x-5 md:hidden">
        <li>
          <NavLink url="/" title="Home" />
        </li>
        <li>
          <NavLink url={url.aboutUs} title="About us" />
        </li>
        <li>
          <NavLink url={url.whatWeDo} title="What we do" />
        </li>
        <li>
          <NavLink url={url.media} title="Media" />
        </li>
        <li>
          <NavLink url={url.contact} title="Contact" />
        </li>
        <li className="flex h-[43px] items-center rounded bg-app-primary-text px-8 text-white lg:px-6">
          <Link href={url.donate}>
            <a className="">Donate</a>
          </Link>
        </li>
      </ul>
      {/* add nav for mobile */}
      <button className="hidden md:block">
        <FaBars className="h-6 w-6 text-app-primary-text" />
      </button>
    </header>
  );
};
export default Header;
