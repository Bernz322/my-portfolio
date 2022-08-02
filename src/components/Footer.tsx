import { useEffect, useState } from "react";
import { socialLinks } from "../config/data";
import { StyledFooter } from "../styles";

function Footer() {
  const [visits, setVisits] = useState<number>();
  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/jeffreybernadas.tech/visits").then(
      (res) =>
        res.json().then((data) => {
          setVisits(data.value);
        })
    );
  }, []);
  const style = {
    marginTop: "5px",
    fontSize: "10px",
  };
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
      <p style={style}>This page has been visited {visits} times.</p>
    </StyledFooter>
  );
}

export default Footer;
