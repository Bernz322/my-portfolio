import styled from "styled-components/macro";

const StyledProjectPage = styled.div`
  max-height: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-flow: column nowrap;
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

  .container {
    height: calc(100vh - var(--nav-height));
    @media only screen and (max-width: 768px) {
      height: fit-content;
    }
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

  .bottom {
    max-width: var(--site-max-width);
    margin: 0 auto 0;
    z-index: -10;
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .project-info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: var(--site-max-width);
    margin: 30px auto;
    flex-flow: column nowrap;
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
  }

  .features {
    margin-top: 50px;
    width: 100%;
    text-align: center;
  }
`;
export default StyledProjectPage;
