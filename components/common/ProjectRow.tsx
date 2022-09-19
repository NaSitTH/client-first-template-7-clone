import ProjectType from "../../interfaces/project";
import { ProjectCard } from "./card";

const ProjectRow = ({ allProjects }: ProjectType) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {allProjects.map((data) => {
        return (
          <ProjectCard
            key={data.title}
            title={data.title}
            excerpt={data.excerpt}
            image={data.coverImage}
            url={`/projects/${data.slug}`}
          />
        );
      })}
    </div>
  );
};
export default ProjectRow;
