import styled from "styled-components/macro";

export const StyledHero = styled.section`
  height: calc(100vh - var(--nav-height));
  display: flex;
  align-content: center;
  justify-content: center;
  flex-flow: column nowrap;

  @media only screen and (max-width: 768px) {
    padding-bottom: 150px;
  }

  @media only screen and (max-width: 489px) {
    padding-bottom: 200px;
    text-align: center;
  }

  .intro {
    color: ${(props) => props.theme.intro};
    margin-bottom: 15px;
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .heading {
    font-size: clamp(40px, 7vw, 90px);
    color: ${(props) => props.theme.color2};
  }

  .sub-heading {
    font-size: clamp(25px, 4vw, 80px);
    color: ${(props) => props.theme.color3};
    margin-bottom: 20px;
  }

  p {
    font-size: var(--fz-lg);
    color: ${(props) => props.theme.color3};
    max-width: 65%;
    margin-bottom: 30px;

    @media only screen and (max-width: 768px) {
      font-size: var(--fz-sm);
      max-width: 100%;
    }

    @media only screen and (max-width: 489px) {
      font-size: var(--fz-sm);
      max-width: 100%;
    }
  }
  a {
    color: ${(props) => props.theme.btn};
  }
`;
