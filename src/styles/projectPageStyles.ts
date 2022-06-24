import styled from "styled-components/macro";

const StyledProjectPage = styled.div`
  max-height: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-flow: column nowrap;
  margin: var(--nav-height) auto;

  p {
    @media only screen and (max-width: 768px) {
      font-size: var(--fz-sm);
      max-width: 100%;
    }

    @media only screen and (max-width: 489px) {
      font-size: var(--fz-xs);
      max-width: 100%;
    }
  }

  .container {
    margin: 0 auto;
    width: 100vw;
    height: 100%;
    z-index: 999;
  }

  .top {
    padding: 0 150px;
    height: calc(50vh - var(--nav-height));
    max-width: var(--site-max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px) {
      padding: 0 75px;
    }

    @media only screen and (max-width: 489px) {
      padding: 0 25px;
    }
    .top-deets {
      flex-flow: column nowrap;
      width: 100%;
      text-align: center;
      h1 {
        font-size: clamp(40px, 7vw, 90px);
        color: ${(props) => props.theme.color2};
      }
      .head {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0 10px;
        font-family: var(--font-mono);
      }

      .back-to-home {
        transition: var(--transition3);
        cursor: pointer;
        &:hover {
          color: ${(props) => props.theme.hover};
        }
      }
      .url {
        padding: 5px 0 0;
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
    }
  }

  .bottom {
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    z-index: -10;
  }

  .project-info {
    padding: 0 150px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: var(--site-max-width);
    margin: 150px auto;
    @media only screen and (max-width: 1000px) {
      flex-flow: column nowrap;
    }

    @media only screen and (max-width: 768px) {
      padding: 0 75px;
    }

    @media only screen and (max-width: 489px) {
      padding: 0 25px;
    }
  }

  .description {
    margin-right: 10px;
    text-align: justify;
    flex: 6;
    p {
      color: ${(props) => props.theme.color3};
    }
    @media only screen and (max-width: 1000px) {
      margin-right: 0;
    }
  }
  .stacks {
    margin-left: 10px;
    flex: 6;
    @media only screen and (max-width: 1000px) {
      margin-left: 0;
      margin-top: 50px;
    }
  }

  .info-head {
    font-size: clamp(25px, 2vw, 40px);
    color: ${(props) => props.theme.color2};
    text-align: center;
  }
`;
export default StyledProjectPage;
