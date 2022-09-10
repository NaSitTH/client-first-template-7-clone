import React from "react";

import { Header, Footer } from "./index";

interface Props {
  children: React.ReactNode;
}

const url = {
  aboutUs: "/about",
  team: "/team",
  whatWeDo: "/what-we-do",
  contact: "/contact",
  projects: "/projects",
  events: "/events",
  donate: "/donate",
  blog: "/blog",
  media: "/blog",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  twitter: "https://twitter.com/",
  linkedin: "https://www.linkedin.com/",
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header url={url} />
      <main>{children}</main>
      <Footer url={url} />
    </>
  );
};
export default Layout;
