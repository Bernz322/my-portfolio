import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { ThemeToggler } from ".";
import { navLinks } from "../config/data";
import { NavLinksProps } from "../config/types";
import { StyledSideNav } from "../styles";

const StyledBurger = styled(motion.div)<{ open: boolean }>`
  display: none;

  @media only screen and (max-width: 768px) {
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    margin: 34px 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
    z-index: 21;
    cursor: pointer;
  }

  div {
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color4};
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Menu = ({ variants }: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const openHandler = () => {
    setOpen(!open);
  };

  // To disable scrolling when sidebar is opened
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);
  return (
    <>
      <StyledBurger open={open} onClick={openHandler} variants={variants}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <StyledSideNav open={open}>
        <div className="menu-blur" onClick={openHandler}></div>
        <aside className="sidebar">
          <nav>
            <ul className="nav-links-menu">
              {navLinks.home.map(
                ({ name, url }: NavLinksProps, index: number) => {
                  return (
                    <li key={index} onClick={openHandler}>
                      <a href={url}>{name}</a>
                    </li>
                  );
                }
              )}
            </ul>
            <button className="resume-btn">Resume</button>
            <ThemeToggler />
          </nav>
        </aside>
      </StyledSideNav>
    </>
  );
};

export default Menu;
