import { useCallback, useContext, useEffect, useState } from "react";
import { StyledNav } from "../styles";
import logo from "../assets/logo/logo.png";
import logo1 from "../assets/logo/logo1.png";
import { navLinks } from "../config/data";
import { NavLinksProps } from "../config/types";
import { Menu, ThemeToggler } from ".";
import { ThemeModeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeModeContext);
  const [show, setShow] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const navBarController = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If current Y pos is greater than the last Y pos (being scrolled down)
        setShow(false);
      } else {
        setShow(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", navBarController);
    }
    // Clean up for unmounting
    return () => {
      window.removeEventListener("scroll", navBarController);
    };
  }, [lastScrollY, navBarController]);
  return (
    <StyledNav show={show}>
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
