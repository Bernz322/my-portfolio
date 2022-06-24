import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const StyledAbout = styled(motion.section)`
  margin-bottom: 40px;
  padding: 100px 0 0;
  .section-head {
    font-size: clamp(35px, 4vw, 60px);
    color: ${(props) => props.theme.color2};
    margin-bottom: 20px;
    span {
      color: ${(props) => props.theme.btn};
    }
  }

  .me {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 25px;

    @media only screen and (max-width: 1100px) {
      flex-flow: column nowrap;
    }

    img {
      height: clamp(200px, 50%, 350px);
      width: clamp(200px, 50%, 350px);
      object-fit: contain;
      filter: blur(3px) grayscale();
      border-radius: 10px;
      margin-bottom: 15px;

      &:hover {
        filter: blur(0);
        transition: var(--transition3);
      }
    }
  }

  h4.sub-head {
    font-size: clamp(30px, 2vw, 35px);
    text-align: center;
    margin-bottom: 15px;
  }

  p.desc,
  .tech-desc {
    font-size: var(--fz-lg);
    color: ${(props) => props.theme.color3};
    max-width: 90%;
    margin-bottom: 30px;
    margin: 0 auto 15px;

    @media only screen and (max-width: 768px) {
      font-size: var(--fz-sm);
    }
  }

  .desc {
    text-align: justify;
  }

  .tech-desc {
    text-align: center;
  }
`;
