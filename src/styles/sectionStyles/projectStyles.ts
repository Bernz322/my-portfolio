import styled from "styled-components/macro";

export const StyledProject = styled.section`
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
`;

export const StyledProjectContainer = styled.ul``;
