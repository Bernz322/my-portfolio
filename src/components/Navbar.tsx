import { useContext } from "react";
import { StyledNav } from "../styles";
import logo from "../assets/logo/logo.png";
import logo1 from "../assets/logo/logo1.png";
import { navLinks } from "../config/data";
import { NavLinksProps } from "../config/types";
import { Menu, ThemeToggler } from ".";
import { ThemeModeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeModeContext);
  return (
    <StyledNav>
      <nav>
        <div className="nav-left">
          {theme === "light" ? (
            <a href="/">
              <img src={logo1} alt="logo" className="nav-logo" />
            </a>
          ) : (
            <a href="/">
              <img src={logo} alt="logo" className="nav-logo" />
            </a>
          )}
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            {navLinks.home.map(({ name, url }: NavLinksProps, i: number) => {
              return (
                <li key={i}>
                  <a href={url}>{name}</a>
                </li>
              );
            })}
          </ul>
          <button className="resume-btn">Resume</button>
          <ThemeToggler />
        </div>
      </nav>
      <Menu />
    </StyledNav>
  );
};

export default Navbar;
