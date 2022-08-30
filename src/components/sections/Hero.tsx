import { motion } from "framer-motion";
import Button from "../Button";
import { fadeUp } from "../../config/animations";
import { StyledHero } from "../../styles";

function Hero() {
  const one = { id: 0, data: <h1 className="intro">Hi, I am</h1> };
  const two = { id: 1, data: <h2 className="heading">Jeffrey Bernadas.</h2> };
  const three = {
    id: 2,
    data: <h3 className="sub-heading">I craft things from scratch.</h3>,
  };
  const four = {
    id: 3,
    data: (
      <p>
        I‘m a Full Stack Developer based in the Philippines. I can do web
        applications from start to finish and love building stuffs in the
        internet from scratch.
      </p>
    ),
  };

  const texts = [one, two, three, four];

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  return (
    <StyledHero variants={variants} initial="hidden" animate="visible">
      <>
        {texts.map((text) => (
          <motion.div variants={fadeUp} key={text.id}>
            {text.data}
          </motion.div>
        ))}
        <motion.div variants={fadeUp}>
          <Button buttonText="Get in Touch" buttonUrl="#contact" />
        </motion.div>
      </>
    </StyledHero>
  );
}

export default Hero;
