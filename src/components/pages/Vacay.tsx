import { projects } from "../../config/data";
import { SingleProject } from "..";

const Vacay = () => {
  const project = projects[0];
  return (
    <SingleProject project={project} count={projects.indexOf(project) + 1} />
  );
};

export default Vacay;
