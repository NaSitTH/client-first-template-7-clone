import Link from "next/link";

import { FaTimes } from "react-icons/fa";
import { NavLink } from "../layout";
import { navUrl } from "../../lib/constant";

type Props = {
  handleClose: () => void;
  isOpen: boolean;
};

const NavModal = ({ handleClose, isOpen }: Props) => {
  return (
    <div
      className={`fixed top-0 right-0 z-50 h-screen w-1/2 translate-x-[50vw] ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-[50vw] opacity-0"
      } bg-white duration-300 ease-in-out`}
    >
      <div className="mx-auto flex h-[68px] w-14/20 items-center justify-end md:h-14">
        <button className="" onClick={handleClose}>
          <FaTimes className="h-7 w-7 text-app-primary-text" />
        </button>
      </div>

      <ul
        className="mx-auto flex w-14/20 flex-col space-y-5 font-medium leading-[1.1875rem]"
        onClick={handleClose}
      >
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
        <li className="h-[43px] rounded bg-app-primary-text text-white">
          <Link href={navUrl.donate}>
            <a className="flex h-full w-full items-center justify-center">
              Donate
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavModal;
