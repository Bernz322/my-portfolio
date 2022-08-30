import styled from "styled-components/macro";

const StyledProjectPage = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-flow: nowrap column;
  margin: var(--nav-height) auto;
  max-width: var(--site-max-width);
  padding: 0 150px;
  @media only screen and (max-width: 768px) {
    padding: 0 75px;
  }
  @media only screen and (max-width: 490px) {
    padding: 0 25px;
  }

  p,
  .back-to-home {
    @media only screen and (max-width: 768px) {
      font-size: var(--fz-sm);
      max-width: 100%;
    }

    @media only screen and (max-width: 489px) {
      font-size: var(--fz-xs);
      max-width: 100%;
    }
  }

  .top-container {
    min-height: calc(100vh - var(--nav-height));
    margin-bottom: 60px;
  }

  .top {
    height: fit-content;
    max-width: var(--site-max-width);
    margin: 0 auto 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    .top-deets {
      flex-flow: column nowrap;
      width: 100%;
      text-align: center;
      h1 {
        font-size: clamp(45px, 7vw, 90px);
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

      .left {
        display: flex;
        align-items: center;
        justify-content: start;
      }

      .slash {
        margin: 0 15px;
      }

      .back-to-home {
        cursor: pointer;
        &:hover {
          color: ${(props) => props.theme.hover};
          transition: var(--transition2);
        }
      }
      .right {
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

  .img-container {
    max-width: var(--site-max-width);
    margin: 0 auto 0;
    z-index: -10;
    height: fit-content;
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .hidden {
    margin: 25px;
  }
  .top-desc {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media only screen and (max-width: 1000px) {
      flex-flow: column nowrap;
    }
  }
  .description,
  .features {
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
    margin-bottom: 15px;
  }

  .features {
    margin-top: 50px;
    width: 100%;
    text-align: center;
  }
  ul.feature-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    justify-content: center;
    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 15px;
    }
  }

  .feature {
    .img-container {
      margin: 50px auto 0;
    }
    p {
      text-align: justify;
    }
  }

  .separator {
    display: flex;
    align-items: center;
    margin: 50px 0;
  }

  .separator .line {
    height: 3px;
    flex: 1;
    background-color: ${(props) => props.theme.color1};
  }

  .separator h3 {
    padding: 0 2rem;
  }

  .thesis-additionals {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;

    .iframe-container {
      margin-top: 50px;
      position: relative;
      overflow: hidden;
      width: 100%;
      padding-top: 56.25%;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export default StyledProjectPage;
