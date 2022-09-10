import Link from "next/link";

interface IUrl {
  url: {
    aboutUs: string;
    team: string;
    whatWeDo: string;
    contact: string;
    projects: string;
    events: string;
    donate: string;
    blog: string;
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
}

const Footer = ({ url }: IUrl) => {
  return (
    <footer className="w-screen bg-app-black py-24 text-white xl:py-20 lg:py-16">
      <div className="mx-auto flex max-w-7xl justify-between 2xl:w-17/20 lg:grid lg:grid-cols-3 lg:gap-y-16 sm:grid-cols-1 sm:gap-y-10">
        <h4 className="col-span-1 w-24">Logo</h4>
        <div className="flex space-x-20 xl:space-x-14 lg:col-span-2 lg:space-x-20 md:justify-between md:space-x-0 sm:col-span-1">
          <ol className="flex flex-col space-y-6 text-paragraph-small">
            <li>
              <p className="font-bold">Our team</p>
            </li>
            <li>
              <Link href={url.aboutUs}>About us</Link>
            </li>
            <li>
              <Link href={url.team}>Team</Link>
            </li>
            <li>
              <Link href={url.whatWeDo}>What we do</Link>
            </li>
            <li>
              <Link href={url.contact}>Contact</Link>
            </li>
          </ol>
          <ol className="flex flex-col space-y-6 text-paragraph-small">
            <li>
              <p className="font-bold">More</p>
            </li>
            <li>
              <Link href={url.projects}>Projects</Link>
            </li>
            <li>
              <Link href={url.events}>Evens</Link>
            </li>
            <li>
              <Link href={url.donate}>Donate</Link>
            </li>
            <li>
              <Link href={url.blog}>Blog</Link>
            </li>
          </ol>
          <ol className="flex flex-col space-y-6 text-paragraph-small">
            <li>
              <p className="font-bold">Contact</p>
            </li>
            <li>
              <Link href={url.facebook}>Facebook</Link>
            </li>
            <li>
              <Link href={url.instagram}>Instagram</Link>
            </li>
            <li>
              <Link href={url.twitter}>Twitter</Link>
            </li>
            <li>
              <Link href={url.linkedin}>Linkedin</Link>
            </li>
          </ol>
        </div>
        <div className="w-5/12 lg:col-span-2 lg:col-start-2 lg:w-full sm:col-span-1 sm:col-start-1">
          <h2 className="text-[2.5rem] leading-[3.5rem]">
            Subscribe to get latest updates
          </h2>
          <form
            className="relative mt-8 h-16 leading-[1.172rem] xl:h-14"
            action="/"
          >
            <input
              className="h-full w-full rounded-md border-[1px] border-app-off-white/30 bg-inherit px-6 text-white"
              placeholder="Your email"
              type="email"
              name="email"
              id="email"
            />
            <button
              className="absolute right-0 top-0 h-full rounded-md bg-white px-8 font-medium text-app-primary-text"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
