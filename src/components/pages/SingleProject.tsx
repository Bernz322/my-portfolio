import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import { IProjects } from "../../config/types";
import { StyledProjectPage, StyledTechStack } from "../../styles";

interface IProps {
  project: IProjects;
  count: number;
}

interface IStack {
  name: string;
  Icon: IconType;
}

const SingleProject = ({ project, count }: IProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <StyledProjectPage>
      <div className="container">
        <div className="top">
          <div className="top-deets">
            <div className="head">
              <p>
                {" "}
                <span className="back-to-home" onClick={handleClick}>
                  Back
                </span>{" "}
                / Project #{count}
              </p>
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
            <h1>{project.name}</h1>
          </div>
        </div>
        <div className="bottom">
          <img src={project.image} alt="project-img" />
        </div>
      </div>
      <div className="project-info container">
        <div className="description">
          <h3 className="info-head">Project description</h3>
          <p>{project.info}</p>
        </div>
        <div className="stacks">
          <h3 className="info-head">Technologies used</h3>
          <StyledTechStack>
            {project.techs.map(({ name, Icon }: IStack) => {
              return (
                <li key={name}>
                  <div className="tech-content">
                    <Icon />
                    <p>{name}</p>
                  </div>
                </li>
              );
            })}
          </StyledTechStack>
        </div>
      </div>
    </StyledProjectPage>
  );
};

export default SingleProject;
