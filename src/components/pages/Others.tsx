import SingleProject from "./SingleProject";
import { projects } from "../../config/data";

function Others() {
  const project = projects[4];
  return (
    <SingleProject project={project} count={projects.indexOf(project) + 1} />
  );
}

export default Others;
