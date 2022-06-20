import { SingleProject } from "..";
import { projects } from "../../config/data";

const JBShort = () => {
  const project = projects[1];
  return (
    <SingleProject project={project} count={projects.indexOf(project) + 1} />
  );
};

export default JBShort;
