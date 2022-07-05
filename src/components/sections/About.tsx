import { motion } from "framer-motion";
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

function About() {
  const one = {
    id: 0,
    data: "I am a self-taught developer and a graduate of Bachelor of Science in Computer Engineering with RA 7687 DOST Scholarship. I started coding in 2020 with Java and had much fun doing Swing Projects. I then decided to jump to web development in the middle of the same year and picked up Javascript as my main language.",
  };

  const two = {
    id: 1,
    data: "My main focus these days is enhancing my Data Structures and Algorithm to become a better developer.",
  };
  const descriptions = [one, two];

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
        About Me
        <span>.</span>
      </motion.h3>
      <motion.div
        className="me"
        variants={sectionAnimateOnView}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.img
          loading="lazy"
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
          {descriptions.map((desc) => (
            <motion.p key={desc.id} className="desc" variants={fadeUp}>
              {desc.data}
            </motion.p>
          ))}
          <motion.p className="desc" variants={fadeUp}>
            I also enjoy playing video games in my free time and would love to
            play with anyone. Here is my{" "}
            <a
              href="https://steamcommunity.com/id/celestial6000/"
              target="_blank"
              rel="noreferrer"
              className="steam-anchor"
            >
              Steam
            </a>{" "}
            account.
          </motion.p>
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
          {techs.map(({ name, Icon }: ITechs) => (
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
    </StyledAbout>
  );
}

export default About;
