import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../config/animations";
import { socialLinks } from "../config/data";
import { StyledSideElement } from "../styles";

const SideElement = () => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 2.5,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };
  return (
    <StyledSideElement variants={variants} initial="hidden" animate="visible">
      <motion.div className="left" variants={fadeLeft}>
        <ul>
          {socialLinks.map((social: any) => {
            const { name, url, Icon } = social;
            return (
              <li key={name}>
                <motion.a
                  drag
                  dragConstraints={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="side-icons" />
                </motion.a>
              </li>
            );
          })}
        </ul>
      </motion.div>
      <motion.div className="right" variants={fadeRight}>
        <div className="email-wrapper">
          <a href="mailto:jeffrey.bernadas0@gmail.com">
            jeffrey.bernadas0@gmail.com
          </a>
        </div>
      </motion.div>
    </StyledSideElement>
  );
};

export default SideElement;
