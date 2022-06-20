import { SingleProject } from "..";
import { projects } from "../../config/data";

const Spotify = () => {
  const project = projects[2];
  return (
    <SingleProject project={project} count={projects.indexOf(project) + 1} />
  );
};

export default Spotify;
