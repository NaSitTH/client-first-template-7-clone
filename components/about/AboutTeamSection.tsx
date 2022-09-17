import { MemberCard } from "../common/card";

const teamMembers = [
  {
    image: "/images/Image_8.png",
    fullName: "Leonard John Davies",
    position: "Cofounder, CEO",
    facebookUrl: "https://www.facebook.com/",
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    image: "/images/Image_10.png",
    fullName: "Francis Weber",
    position: "Vice Chairman",
    facebookUrl: "https://www.facebook.com/",
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    image: "/images/Image_12.png",
    fullName: "Kyla Obrien",
    position: "Head of Authority",
    facebookUrl: "https://www.facebook.com/",
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    image: "/images/Image_14.png",
    fullName: "Adrian Dixon",
    position: "Support Executive",
    facebookUrl: "https://www.facebook.com/",
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    image: "/images/Image_9.png",
    fullName: "Freddy Busby",
    position: "Project Manager",
    facebookUrl: "https://www.facebook.com/",
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    image: "/images/Image_11.png",
    fullName: "Dale Banks",
    position: "Accountatnt, Finance",
    facebookUrl: "https://www.facebook.com/",
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    image: "/images/Image_13.png",
    fullName: "Miriam Middleton",
    position: "Cofounder, CEO",
    facebookUrl: "https://www.facebook.com/",
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    image: "/images/Image_15.png",
    fullName: "Ellen Walton",
    position: "Vice Chairman",
    facebookUrl: "https://www.facebook.com/",
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
];

const AboutTeamSection = () => {
  return (
    <section
      className="app-container app-section-mt flex flex-col items-center text-app-primary-text"
      id="team"
    >
      <h2 className="text-center ">Meet our team</h2>
      <p className="mt-4 w-5/12 text-center text-app-secondary-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <div className="mt-12 grid grid-cols-4 gap-x-8 gap-y-12">
        {teamMembers.map((data) => {
          return <MemberCard key={data.fullName} data={data} />;
        })}
      </div>
    </section>
  );
};
export default AboutTeamSection;
