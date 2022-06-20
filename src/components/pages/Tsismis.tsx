import { SingleProject } from "..";
import { projects } from "../../config/data";

const Tsismis = () => {
  const project = projects[3];
  return (
    <SingleProject project={project} count={projects.indexOf(project) + 1} />
  );
};

export default Tsismis;
