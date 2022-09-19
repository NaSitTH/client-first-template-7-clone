import React, { useState } from "react";
import Link from "next/link";

import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa";
import { Backdrop, NavModal } from "../modal";
import { navUrl } from "../../lib/constant";

const Header = () => {
  const [navIsOpen, setNavOpen] = useState(false);

  const toggleNavHandler = () => {
    setNavOpen(!navIsOpen);
  };

  const closeNavHandler = () => {
    setNavOpen(false);
  };

  return (
    <header className="app-container z-30 flex h-[67px] items-center justify-between">
      <Link href={navUrl.home}>
        <a className="flex h-full items-center">
          <h4>Logo</h4>
        </a>
      </Link>
      <ul className="flex items-center space-x-10 text-button font-medium lg:space-x-5 md:hidden">
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
        <li className="flex items-center rounded bg-app-primary-text text-white lg:px-6">
          <Link href={navUrl.donate}>
            <a className="px-8 py-4">Donate</a>
          </Link>
        </li>
      </ul>
      <button className="hidden md:block" onClick={toggleNavHandler}>
        <FaBars className="h-6 w-6 text-app-primary-text" />
      </button>
      <NavModal handleClick={closeNavHandler} isOpen={navIsOpen} />
      {navIsOpen && <Backdrop handleClick={closeNavHandler} />}
    </header>
  );
};
export default Header;
