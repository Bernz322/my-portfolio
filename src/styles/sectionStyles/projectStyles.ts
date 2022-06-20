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

export const StyledProjectContainer = styled.ul`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
  }

  .project {
    height: auto;
    border-radius: var(--bdr);
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    background: ${(props) => props.theme.menubc};
    padding: 15px 15px 0;
    transition: var(--transition2);
  }

  img {
    height: 100%;
    width: 100%;

    &:hover {
      transform: scale(1.1);
      transition: var(--transition3);
    }
  }
  .desc {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 10px;
    font-family: var(--font-mono);
  }

  .project-title {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .url {
    padding: 5px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    a {
      margin: 0 10px;
    }
  }

  .icons {
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.color2};
    transition: var(--transition2);
    &:hover {
      color: ${(props) => props.theme.hover};
    }
  }
`;
