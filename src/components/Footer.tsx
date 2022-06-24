import { socialLinks } from "../config/data";
import { StyledFooter } from "../styles";

function Footer() {
  return (
    <StyledFooter>
      <div className="socials">
        <ul>
          {socialLinks.map((social: any) => {
            const { name, url, Icon } = social;
            return (
              <li key={name}>
                <a href={url} target="_blank" rel="noreferrer">
                  <Icon className="side-icons" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <a
        href="https://github.com/Bernz322/my-portfolio"
        target="_blank"
        rel="noreferrer"
        aria-label="Github Repository of this Portfolio"
      >
        Built with <span>❤</span> by Jeffrey Bernadas
      </a>
      <p>{new Date().getFullYear()}</p>
    </StyledFooter>
  );
}

export default Footer;
