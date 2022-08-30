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
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
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
