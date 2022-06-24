import { motion } from "framer-motion";
import styled from "styled-components/macro";

const StyledTechStack = styled(motion.ul)`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  .tech-content {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 40px;
    height: 100%;
    padding: 5px 10px;
    @media only screen and (max-width: 768px) {
      height: 30px;
      padding: 5px 10px;
    }
  }

  li {
    list-style: none;
    margin: 10px;
    border: 1px solid ${(props) => props.theme.btn};
    border-radius: 5px;
    padding: 5px;
    cursor: grab;
    &:active {
      cursor: grabbing;
    }
    @media only screen and (max-width: 768px) {
      margin: 5px;
      padding: 2px;
    }
  }

  svg {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    color: ${(props) => props.theme.btn};
    @media only screen and (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  p {
    margin: 0;
    font-size: var(--fz-lg);
    font-weight: 500;
    color: ${(props) => props.theme.color3};
    @media only screen and (max-width: 768px) {
      font-size: var(--fz-sm);
    }
  }
`;
export default StyledTechStack;
