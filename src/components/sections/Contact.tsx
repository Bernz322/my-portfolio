import { motion } from "framer-motion";
import { Button } from "..";
import { fadeUp, sectionAnimateOnView } from "../../config/animations";
import { StyledContact } from "../../styles";

const Contact = () => {
  const one = (
    <h3 className="section-head">
      Get In Touch<span>.</span>
    </h3>
  );
  const two = (
    <p>
      I’m currently looking and is open for any opportunities. Send me a message
      and let's talk!
    </p>
  );

  const texts = [one, two];
  return (
    <StyledContact
      id="contact"
      variants={sectionAnimateOnView}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <>
        {texts.map((text, i) => {
          return (
            <motion.div variants={fadeUp} key={i}>
              {text}
            </motion.div>
          );
        })}
        <motion.div variants={fadeUp}>
          <Button
            buttonText="Get in Touch"
            buttonUrl="mailto:jeffrey.bernadas0@gmail.com"
          />
        </motion.div>
      </>
    </StyledContact>
  );
};

export default Contact;
