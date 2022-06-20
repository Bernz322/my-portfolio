import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { StyledProject, StyledProjectContainer } from "../../styles";
import { projects } from "../../config/data";
import { Link } from "react-router-dom";
import mantine from "../../assets/logo/mantine.svg";

const Project = () => {
  return (
    <StyledProject id="projects">
      <h3 className="section-head">
        My Projects<span>.</span>
      </h3>
      <StyledProjectContainer>
        {projects.map((project) => {
          return (
            <li className="project" key={project.name}>
              <Link to={`/${project.redirect}`}>
                <img src={project.image} alt="project-img" />
              </Link>
              <div className="desc">
                <div className="project-title">
                  <p>{project.name}</p>
                </div>
                <div className="url">
                  <a
                    href={project.urls.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Repository of the Project"
                  >
                    <FiGithub className="icons" />
                  </a>
                  <a
                    href={project.urls.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Demo link of the Project"
                  >
                    <BiLinkExternal className="icons" />
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </StyledProjectContainer>
    </StyledProject>
  );
};

export default Project;
