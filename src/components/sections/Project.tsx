import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { StyledProject, StyledProjectContainer } from "../../styles";
import { projects } from "../../config/data";
import { Link } from "react-router-dom";
import {
  sectionAnimateOnView,
  fadeUp,
  projectsIn,
} from "../../config/animations";
import { motion } from "framer-motion";
// import mantine from "../../assets/logo/mantine.svg";

const Project = () => {
  return (
    <StyledProject
      id="projects"
      variants={sectionAnimateOnView}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3
        className="section-head"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        My Projects<span>.</span>
      </motion.h3>
      <StyledProjectContainer
        variants={sectionAnimateOnView}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => {
          return (
            <motion.li
              variants={projectsIn}
              className="project"
              key={project.name}
            >
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
            </motion.li>
          );
        })}
      </StyledProjectContainer>
    </StyledProject>
  );
};

export default Project;
