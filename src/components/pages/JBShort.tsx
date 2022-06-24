import SingleProject from "./SingleProject";
import { projects } from "../../config/data";

function JBShort() {
  const project = projects[1];
  return (
    <SingleProject project={project} count={projects.indexOf(project) + 1} />
  );
}

export default JBShort;
