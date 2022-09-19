import Link from "next/link";

import { FaTimes } from "react-icons/fa";
import { NavLink } from "../layout";
import { navUrl } from "../../lib/constant";

type Props = {
  handleClick: () => void;
  isOpen: boolean;
};

const NavModal = ({ handleClick, isOpen }: Props) => {
  return (
    <div
      className={`fixed top-0 right-0 z-50 h-screen w-1/2 translate-x-[50vw] ${
        isOpen ? "translate-x-0" : "translate-x-[50vw]"
      } bg-white duration-300 ease-in-out`}
    >
      <div className="mx-auto flex h-[67px] w-14/20 items-center justify-end">
        <button className="" onClick={handleClick}>
          <FaTimes className="h-7 w-7 text-app-primary-text" />
        </button>
      </div>

      <ul className="mx-auto flex w-14/20 flex-col space-y-5 font-medium leading-[1.1875rem]">
        <li>
          <NavLink url="/" title="Home" />
        </li>
        <li>
          <NavLink url={navUrl.aboutUs} title="About us" />
        </li>
        <li>
          <NavLink url={navUrl.whatWeDo} title="What we do" />
        </li>
        <li>
          <NavLink url={navUrl.media} title="Media" />
        </li>
        <li>
          <NavLink url={navUrl.contact} title="Contact" />
        </li>
        <li className="flex h-[43px] items-center justify-center rounded bg-app-primary-text text-white lg:px-6">
          <Link href={navUrl.donate}>
            <a className="">Donate</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavModal;
