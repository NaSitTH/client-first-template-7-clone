import ProjectCard from "./ProjectCard";

const ProjectRow = () => {
  return (
    <div className="grid h-full grid-cols-3 gap-6">
      <ProjectCard
        title="Mission 40K: Tree plantation"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
        image="/images/Image_4.png"
        url="/"
      />
      <ProjectCard
        title="Weekly cleanliness program in city"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
        image="/images/Image_17.png"
        url="/"
      />
      <ProjectCard
        title="Wildlife safety program 2022"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
        image="/images/Image_3.png"
        url="/"
      />
    </div>
  );
};
export default ProjectRow;
