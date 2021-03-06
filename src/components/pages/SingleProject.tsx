import React, { useContext } from "react";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Button } from "..";
import { ThesisManuscript } from "../../assets/projects";
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

function SingleProject({ project, count }: IProps) {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeModeContext);

  const handleClick = () => {
    navigate(-1);
  };

  const topVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const bottomVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.9,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };
  return (
    <StyledProjectPage>
      <div className="top-container">
        <div className="top">
          <motion.div
            variants={topVariants}
            initial="hidden"
            animate="visible"
            className="top-deets"
          >
            <motion.div className="head">
              <div className="left">
                <motion.span
                  className="back-to-home"
                  onClick={handleClick}
                  role="button"
                  tabIndex={0}
                  variants={fadeUp}
                >
                  Back
                </motion.span>
                <motion.p variants={fadeUp} className="slash">
                  {" "}
                  /{" "}
                </motion.p>
                <motion.p variants={fadeUp}>Project #{count}</motion.p>
              </div>
              <div className="right">
                <motion.a
                  href={project.urls.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Repository of the Project"
                  variants={fadeUp}
                >
                  <FiGithub className="icons" />
                </motion.a>
                <motion.a
                  href={project.urls.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Demo link of the Project"
                  variants={fadeUp}
                >
                  <BiLinkExternal className="icons" />
                </motion.a>
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp}>{project.name}</motion.h1>
          </motion.div>
        </div>
        <motion.div
          className="img-container"
          variants={bottomVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            title={project.name}
            loading="lazy"
            className="image"
            src={
              theme === "light" ? project.ogImage.light : project.ogImage.dark
            }
            alt="project-img"
            variants={fadeUp}
          />
        </motion.div>
      </div>
      <motion.div>
        <div className="top-desc">
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
        </div>
        <motion.div
          className="features"
          variants={sectionAnimateOnView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={fadeUp} className="info-head">
            Features
          </motion.h3>
          <ul className="feature-list">
            {project.features.map((feature) => {
              return (
                <motion.li
                  key={feature.detail}
                  className="feature"
                  variants={sectionAnimateOnView}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={fadeUp} className="img-container">
                    <img
                      className="image"
                      src={
                        theme === "light"
                          ? feature.image.light
                          : feature.image.dark
                      }
                      alt="feature"
                    />
                  </motion.div>
                  <motion.p variants={fadeUp}>{feature.detail}</motion.p>
                </motion.li>
              );
            })}
          </ul>
          {project.name === "Thesis" && (
            <>
              <motion.div className="separator" variants={fadeUp}>
                <div className="line" />
                <h3 className="info-head">Read more</h3>
                <div className="line" />
              </motion.div>
              <motion.div
                variants={sectionAnimateOnView}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="thesis-additionals"
              >
                <motion.div variants={fadeUp}>
                  <Button
                    buttonText="Manuscript"
                    buttonUrl={ThesisManuscript}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Thesis Manuscript in Journal Format"
                  />
                </motion.div>
                <motion.div className="iframe-container" variants={fadeUp}>
                  <iframe
                    src="https://www.youtube.com/embed/MlnJ29t4y5w"
                    title="Thesis Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              </motion.div>
            </>
          )}
        </motion.div>
      </motion.div>
    </StyledProjectPage>
  );
}

export default SingleProject;
