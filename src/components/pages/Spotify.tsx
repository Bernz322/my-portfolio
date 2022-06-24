import SingleProject from "./SingleProject";
import { projects } from "../../config/data";

function Spotify() {
  const project = projects[2];
  return (
    <SingleProject project={project} count={projects.indexOf(project) + 1} />
  );
}

export default Spotify;
