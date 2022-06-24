import { motion } from "framer-motion";
import styled from "styled-components/macro";

const StyledContact = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  margin: 200px 0;
  .section-head {
    font-size: clamp(35px, 4vw, 60px);
    color: ${(props) => props.theme.color2};
    margin-bottom: 20px;
    span {
      color: ${(props) => props.theme.btn};
    }
  }

  p {
    font-size: var(--fz-lg);
    color: ${(props) => props.theme.color3};
    max-width: 80%;
    margin-bottom: 30px;
    text-align: center;
    margin: 0 auto 25px;

    @media only screen and (max-width: 768px) {
      font-size: var(--fz-sm);
    }
  }
`;
export default StyledContact;
