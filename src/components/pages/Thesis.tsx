import { SingleProject } from "..";
import { projects } from "../../config/data";

const Thesis = () => {
  const project = projects[4];
  return (
    <SingleProject project={project} count={projects.indexOf(project) + 1} />
  );
};

export default Thesis;
