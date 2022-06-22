import { StyledAbout, StyledTechStack } from "../../styles";
import { techs } from "../../config/data";
import { ITechs } from "../../config/types";
import profile from "../../assets/me.webp";
import {
  fadeUp,
  PopUpFast,
  sectionAnimateOnView,
  stackAnimateOnView,
} from "../../config/animations";
import { motion } from "framer-motion";

const About = () => {
  const one =
    " I am a self-taught developer and a graduate of Bachelor of Science in Computer Engineering. I started coding in 2020 using Java and had much fun doing Swing Projects. I decided to jump to web development in the middle of the same year and picked Javascript as my main language to build applications in the internet.";
  const two =
    "Along my learning journey, I acquired several technologies which helped me scale my applications and develop my Undergraduate Thesis.";
  const three =
    "My main focus these days is enhancing my Data Structures and Algorithm knowledge and add it on my current arsenal.";
  const desc = [one, two, three];

  return (
    <StyledAbout
      id="about"
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
        About Me<span>.</span>
      </motion.h3>
      <motion.div
        className="me"
        variants={sectionAnimateOnView}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.img
          src={profile}
          alt="me"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.div
          className="details"
          variants={sectionAnimateOnView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h4 className="sub-head" variants={fadeUp}>
            Jeffrey Bernadas
          </motion.h4>
          {desc.map((desc, i) => {
            return (
              <motion.p key={i} className="desc" variants={fadeUp}>
                {desc}
              </motion.p>
            );
          })}
        </motion.div>
      </motion.div>
      <motion.div
        className="techs"
        variants={sectionAnimateOnView}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h4 variants={fadeUp} className="sub-head">
          Skills
        </motion.h4>
        <motion.p variants={fadeUp} className="tech-desc">
          I primarily build & scale applications using these bad boys
        </motion.p>
        <StyledTechStack
          variants={stackAnimateOnView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techs.map(({ id, name, Icon }: ITechs) => {
            return (
              <motion.li
                key={id}
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
            );
          })}
        </StyledTechStack>
      </motion.div>
    </StyledAbout>
  );
};

export default About;
