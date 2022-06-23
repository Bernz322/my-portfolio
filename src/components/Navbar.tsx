import { useCallback, useContext, useEffect, useState } from "react";
import { StyledNav } from "../styles";
import logo from "../assets/logo/logo.png";
import logo1 from "../assets/logo/logo1.png";
import { navLinks } from "../config/data";
import { NavLinksProps } from "../config/types";
import { Menu, ThemeToggler } from ".";
import { ThemeModeContext } from "../context/ThemeContext";
import { motion, Variants } from "framer-motion";

const Navbar = () => {
  const { theme } = useContext(ThemeModeContext);
  const [navShow, setNavShow] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const navBarController = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If current Y pos is greater than the last Y pos (being scrolled down)
        setNavShow(false);
      } else {
        setNavShow(true);
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

  const navVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const navLinkVariants: Variants = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  };

  return (
    <StyledNav $show={navShow}>
      <motion.nav variants={navVariants} initial="hidden" animate="visible">
        <motion.div className="nav-left" variants={navLinkVariants}>
          {theme === "light" ? (
            <a href="/" draggable="false">
              <img
                draggable="false"
                src={logo1}
                alt="logo"
                className="nav-logo"
              />
            </a>
          ) : (
            <a href="/" draggable="false">
              <img
                draggable="false"
                src={logo}
                alt="logo"
                className="nav-logo"
              />
            </a>
          )}
        </motion.div>
        <div className="nav-right">
          <ul className="nav-links">
            {navLinks.home.map(
              ({ name, url }: NavLinksProps, index: number) => {
                return (
                  <motion.li key={index} variants={navLinkVariants}>
                    <a href={url}>{name}</a>
                  </motion.li>
                );
              }
            )}
          </ul>
          <motion.button variants={navLinkVariants} className="resume-btn">
            Resume
          </motion.button>
          <ThemeToggler variants={navLinkVariants} />
        </div>
        <Menu variants={navLinkVariants} />
      </motion.nav>
    </StyledNav>
  );
};

export default Navbar;
