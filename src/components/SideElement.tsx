import { socialLinks } from "../config/data";
import { StyledSideElement } from "../styles";

const SideElement = () => {
  return (
    <StyledSideElement>
      <div className="left">
        <ul>
          {socialLinks.map((social: any) => {
            const { name, url, Icon } = social;
            return (
              <li>
                <a href={url} key={name} target="_blank" rel="noreferrer">
                  <Icon className="side-icons" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right">
        <div className="email-wrapper">
          <a href="mailto:jeffrey.bernadas0@gmail.com">
            jeffrey.bernadas0@gmail.com
          </a>
        </div>
      </div>
    </StyledSideElement>
  );
};

export default SideElement;
