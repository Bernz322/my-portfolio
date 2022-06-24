import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeModeContext } from "../context/ThemeContext";

const StyledPreLoader = styled(motion.div)`
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px 0 100px;
  svg {
    overflow: visible;
  }

  @media only screen and (max-width: 480px) {
    svg {
      padding: 0 100px 0 100px;
    }
  }
`;

const svgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2.5,
      ease: "easeInOut",
    },
  },
};

const Preloader = () => {
  const { theme } = useContext(ThemeModeContext);
  return (
    <StyledPreLoader>
      <motion.svg
        width="395.401"
        height="141.002"
        viewBox="0 0 395.401 141.002"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="initial"
        animate="animate"
      >
        <g
          id="svgGroup"
          strokeLinecap="round"
          fillRule="evenodd"
          fontSize="9pt"
          stroke={theme === "light" ? "#588bae" : "#79f6fc"}
          strokeWidth="0.5mm"
          fill="none"
        >
          <motion.path
            d="M 59.001 0.2 L 77.401 0.2 L 77.401 103.2 A 45.163 45.163 0 0 1 75.848 115.358 A 33.555 33.555 0 0 1 66.801 130.7 A 35.752 35.752 0 0 1 47.565 140.273 A 50.686 50.686 0 0 1 38.801 141 A 47.938 47.938 0 0 1 26.585 139.523 A 34.88 34.88 0 0 1 10.601 130.5 A 34.799 34.799 0 0 1 1.089 112.669 A 51.493 51.493 0 0 1 0.001 101.8 L 18.201 101.8 A 34.294 34.294 0 0 0 19.072 109.053 Q 20.268 114.092 23.091 117.869 A 21.598 21.598 0 0 0 23.501 118.4 A 16.349 16.349 0 0 0 32.79 124.143 A 25.818 25.818 0 0 0 38.801 124.8 A 27.046 27.046 0 0 0 44.668 124.204 Q 50.564 122.894 54.001 118.7 A 21.669 21.669 0 0 0 58.511 108.761 A 30.226 30.226 0 0 0 59.001 103.2 L 59.001 0.2 Z"
            id="0"
            variants={pathVariants}
          />
          <motion.path
            d="M 188.201 15 L 131.401 15 L 131.401 61.6 L 182.201 61.6 L 182.201 76.6 L 131.401 76.6 L 131.401 124.6 L 188.201 124.6 L 188.201 139.6 L 113.201 139.6 L 113.201 0 L 188.201 0 L 188.201 15 Z"
            id="1"
            variants={pathVariants}
          />
          <motion.path
            d="M 215.801 0.2 L 294.601 0.2 L 294.601 15 L 234.001 15 L 234.001 62 L 283.201 62 L 283.201 76.8 L 234.001 76.8 L 234.001 139.6 L 215.801 139.6 L 215.801 0.2 Z"
            id="2"
            variants={pathVariants}
          />
          <motion.path
            d="M 316.601 0.2 L 395.401 0.2 L 395.401 15 L 334.801 15 L 334.801 62 L 384.001 62 L 384.001 76.8 L 334.801 76.8 L 334.801 139.6 L 316.601 139.6 L 316.601 0.2 Z"
            id="3"
            variants={pathVariants}
          />
        </g>
      </motion.svg>
    </StyledPreLoader>
  );
};

export default Preloader;
