import { motion } from "framer-motion";
import styled from "styled-components/macro";

interface IStyledNav {
  $show: any;
}

const StyledNav = styled(motion.header)<IStyledNav>`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 70px;
  z-index: 9999;
  position: fixed;
  top: ${(props) => (props.$show ? "0" : "-100px")};
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.navbg};
  backdrop-filter: blur(50px);
  transition: var(--transition2);
  /* transition: top 0.2s ease-in-out; */

  @media only screen and (max-width: 768px) {
    padding: 0 25px;
  }
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-logo {
    max-width: 42px;
    max-height: 42px;
    object-fit: contain;
  }

  .nav-links {
    text-decoration: none;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-flow: row nowrap;

    li:nth-child(2) {
      margin: 0 30px 0;
    }

    a {
      transition: var(--transition2);
      font-size: var(--fz-xs);
      font-weight: 500;
      color: ${(props) => props.theme.color2};
      :hover {
        color: ${(props) => props.theme.hover};
      }
    }
  }

  .nav-left {
    display: flex;
    align-items: center;
  }

  .nav-right {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  .resume-btn {
    margin: 0 30px 0;
    font-size: var(--fz-xs);
    padding: 5px 10px;
    font-family: var(--font-sans);
    color: ${(props) => props.theme.color4};
    border: 2px solid ${(props) => props.theme.color4};
    border-radius: 5px;
    cursor: pointer;
    background-color: transparent;
    :hover {
      color: ${(props) => props.theme.hover};
      border: 2px solid ${(props) => props.theme.hover};
      background-color: rgba(149, 202, 219, 0.15);
    }

    @media only screen and (max-width: 768px) {
      margin: 30px 0;
      font-size: var(--fz-lg);
    }
  }
`;
export default StyledNav;
