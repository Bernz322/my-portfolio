import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { StyledProject, StyledProjectContainer } from "../../styles";

const Project = () => {
  return (
    <StyledProject id="projects">
      <h3 className="section-head">
        My Projects<span>.</span>
      </h3>
      <StyledProjectContainer>
        <li className="project">
          <img src="" alt="" />
          <div className="desc">
            <p className="project-title">Vacay</p>
            <div className="url">
              <a
                href="goog.elcom"
                target="_blank"
                rel="noreferrer"
                aria-label="Repository of the Project"
              >
                <SiGithub />
              </a>
              <a
                href="asdasd.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Demo link of the Project"
              >
                <BiLinkExternal />
              </a>
            </div>
          </div>
        </li>
      </StyledProjectContainer>
    </StyledProject>
  );
};

export default Project;
