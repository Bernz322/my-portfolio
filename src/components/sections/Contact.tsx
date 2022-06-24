import { motion } from "framer-motion";
import Button from "../Button";
import { fadeUp, sectionAnimateOnView } from "../../config/animations";
import { StyledContact } from "../../styles";

function Contact() {
  const one = {
    id: 0,
    data: (
      <h3 className="section-head">
        Get In Touch
        <span>.</span>
      </h3>
    ),
  };
  const two = {
    id: 1,
    data: (
      <p>
        I’m currently looking and is open for any opportunities. Send me a
        message and let&apos;s talk!
      </p>
    ),
  };

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
        {texts.map((text) => (
          <motion.div variants={fadeUp} key={text.id}>
            {text.data}
          </motion.div>
        ))}
        <motion.div variants={fadeUp}>
          <Button
            buttonText="Get in Touch"
            buttonUrl="mailto:jeffrey.bernadas0@gmail.com"
          />
        </motion.div>
      </>
    </StyledContact>
  );
}

export default Contact;
