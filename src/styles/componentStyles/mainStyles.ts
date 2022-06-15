import styled from "styled-components/macro";

export const StyledMain = styled.main`
  width: 100%;
  max-width: var(--site-max-width);
  max-height: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: var(--nav-height) auto;
  padding: 0 150px;
  flex-flow: column nowrap;

  @media only screen and (max-width: 768px) {
    padding: 0 75px;
  }
  @media only screen and (max-width: 481px) {
    padding: 0 25px;
  }
`;
