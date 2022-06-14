import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const StyledToggler = styled(motion.div)`
  cursor: pointer;
  height: 25px;
  width: 25px;

  .icons {
    transition: var(--transition2);
    height: 25px;
    width: 25px;
    color: ${({ theme }) => theme.themeIcons};

    @media only screen and (max-width: 768px) {
      /* height: 50px;
      width: 50px; */
    }
  }
`;
