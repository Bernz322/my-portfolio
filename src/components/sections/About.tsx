import { StyledAbout, StyledTechStack } from "../../styles";
import { techs } from "../../config/data";
import { ITechs } from "../../config/types";
import profile from "../../assets/me.png";

const About = () => {
  return (
    <StyledAbout id="about">
      <h3 className="section-head">
        About Me<span>.</span>
      </h3>
      <div className="me">
        <img src={profile} alt="me" />
        <div className="details">
          <h4 className="sub-head">Jeffrey Bernadas</h4>
          <p className="desc">
            I am a self-taught developer and a graduate of Bachelor of Science
            in Computer Engineering. I started coding in 2020 using Java and had
            much fun doing Swing Projects. I decided to jump to web development
            mid-year and picked Javascript as my main language to build
            applications in the internet.
          </p>
          <p className="desc">
            Along my learning journey, I picked up several programming languages
            especially during my Thesis Project where I used C++ and Python for
            its development.
          </p>
          <p className="desc">
            My main focus these days is enhancing my Data Structures and
            Algorithm knowledge to solidify my programming understanding.
          </p>
        </div>
      </div>
      <div className="techs">
        <h4 className="sub-head">Skills</h4>
        <p className="tech-desc">
          I primarily build & scale applications using these bad boys
        </p>
        <StyledTechStack>
          {techs.map(({ id, name, Icon }: ITechs) => {
            return (
              <li key={id}>
                <div className="tech-content">
                  <Icon />
                  <p>{name}</p>
                </div>
              </li>
            );
          })}
        </StyledTechStack>
      </div>
    </StyledAbout>
  );
};

export default About;
