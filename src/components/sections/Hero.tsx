import { motion } from "framer-motion";
import { Button } from "..";
import { fadeUp } from "../../config/animations";
import { StyledHero } from "../../styles";

const Hero = () => {
  const one = <h1 className="intro">Hi, I am</h1>;
  const two = <h2 className="heading">Jeffrey Bernadas.</h2>;
  const three = <h3 className="sub-heading">I craft things from scratch.</h3>;
  const four = (
    <p>
      I‘m an aspiring Software Engineer based in the Philippines. I can do
      full-stack web applications and love building stuffs in the internet from
      scratch.
    </p>
  );

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
        {texts.map((text, index: number) => {
          return (
            <motion.div variants={fadeUp} key={index}>
              {text}
            </motion.div>
          );
        })}
        <motion.div variants={fadeUp}>
          <Button buttonText="Get in Touch" buttonUrl="#contact" />
        </motion.div>
      </>
    </StyledHero>
  );
};

export default Hero;
