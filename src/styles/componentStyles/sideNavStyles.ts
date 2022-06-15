import styled from "styled-components/macro";

export const StyledSideNav = styled.div<{ open: boolean }>`
  .menu-blur {
    display: none;
    @media only screen and (max-width: 768px) {
      display: block;
      background-color: ${(props) => props.theme.menuBackdrop};
      position: fixed;
      z-index: 10;
      top: 0px;
      bottom: 0px;
      right: 0px;
      width: 120vw;
      height: 100vh;
      opacity: 0.7;
      transition: var(--transition2);
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    }
  }

  .sidebar {
    z-index: 20;
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    margin: 0;
    background-color: ${(props) => props.theme.menubc};
    box-shadow: -10px 0px 30px -15px var(--prussian);
    transition: var(--transition3);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    @media only screen and (max-width: 768px) {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column nowrap;
      height: 100%;
    }
  }

  .nav-links-menu {
    text-decoration: none;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;

    li:nth-child(2) {
      margin: 30px 0;
    }

    a {
      transition: var(--transition2);
      font-size: var(--fz-xl);
      font-weight: 500;
      :hover {
        color: ${(props) => props.theme.hover};
      }
    }
  }

  .resume-btn {
    transition: var(--transition2);
    margin: 0 30px 0;
    font-size: var(--fz-xs);
    padding: 5px 10px;
    font-family: var(--font-sans);
    color: ${(props) => props.theme.subcolor};
    border: 2px solid ${(props) => props.theme.subcolor};
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
