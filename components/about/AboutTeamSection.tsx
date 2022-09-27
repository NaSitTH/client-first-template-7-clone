import { teamMembers } from "../../lib/constant";
import { MemberCard } from "../common/card";

const AboutTeamSection = () => {
  return (
    <section
      className="app-container app-section-mt flex flex-col items-center text-app-primary-text"
      id="team"
    >
      <h2 className="text-center ">Meet our team</h2>
      <p className="mt-4 w-5/12 text-center text-app-secondary-text xl:w-3/5 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <div className="mt-12 grid grid-cols-4 gap-x-8 gap-y-12 xl:grid-cols-3">
        {teamMembers.map((data) => {
          return <MemberCard key={data.fullName} data={data} />;
        })}
      </div>
    </section>
  );
};
export default AboutTeamSection;
