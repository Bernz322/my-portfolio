import { motion } from "framer-motion";
import { useContext } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
  fadeUp,
  PopUpFast,
  sectionAnimateOnView,
  stackAnimateOnView,
} from "../../config/animations";
import { IProjects } from "../../config/types";
import { ThemeModeContext } from "../../context/ThemeContext";
import { StyledProjectPage, StyledTechStack } from "../../styles";

interface IProps {
  project: IProjects;
  count: number;
}

// const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

function SingleProject({ project, count }: IProps) {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeModeContext);
  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

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
                <span
                  className="back-to-home"
                  onClick={handleClick}
                  role="button"
                  tabIndex={0}
                >
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
          {/* <motion.div className="image-container-single">
            <motion.div
              initial={{
                y: "-50%",
                width: "300px",
                height: "250px",
              }}
              animate={{
                y: 0,
                width: "100%",
                height: window.innerWidth > 1440 ? 400 : 200,
                transition: { delay: 0.2, ...transition },
              }}
              className="thumbnail-single"
            >
              <motion.div
                className="frame-single"
                whileHover="hover"
                transition={transition}
              >
                <motion.img
                  className="image"
                  src={project.image}
                  alt="project-img"
                  // style={{ scale: scale }}
                  initial={{ scale: 1.0 }}
                  animate={{
                    transition: { delay: 0.2, ...transition },
                    y: window.innerWidth > 1440 ? -100 : -50,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div> */}
          <img
            title={project.name}
            loading="lazy"
            className="image"
            src={
              theme === "light" ? project.ogImage.light : project.ogImage.dark
            }
            alt="project-img"
          />
        </div>
      </div>
      <motion.div className="project-info container">
        <motion.div
          className="description"
          variants={sectionAnimateOnView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={fadeUp} className="info-head">
            Project description
          </motion.h3>
          <motion.p variants={fadeUp}>{project.info}</motion.p>
        </motion.div>
        <motion.div
          className="stacks"
          variants={sectionAnimateOnView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 className="info-head" variants={fadeUp}>
            Technologies used
          </motion.h3>
          <StyledTechStack
            variants={stackAnimateOnView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {project.techs.map(({ name, Icon }) => (
              <motion.li
                key={name}
                variants={PopUpFast}
                drag
                dragConstraints={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
              >
                <div className="tech-content">
                  <Icon />
                  <p>{name}</p>
                </div>
              </motion.li>
            ))}
          </StyledTechStack>
        </motion.div>
      </motion.div>
    </StyledProjectPage>
  );
}

export default SingleProject;
