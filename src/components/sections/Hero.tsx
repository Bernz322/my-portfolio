import { Button } from "..";
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

  return (
    <StyledHero>
      <>
        {texts.map((text, i) => {
          return <div key={i}>{text}</div>;
        })}
        <Button buttonText="Get in Touch" buttonUrl="#contact" />
      </>
    </StyledHero>
  );
};

export default Hero;
