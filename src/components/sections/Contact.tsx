import { Button } from "..";
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
    <StyledContact id="contact">
      <>
        {texts.map((text, i) => {
          return <div key={i}>{text}</div>;
        })}
        <Button
          buttonText="Get in Touch"
          buttonUrl="mailto:jeffrey.bernadas0@gmail.com"
        />
      </>
    </StyledContact>
  );
};

export default Contact;
