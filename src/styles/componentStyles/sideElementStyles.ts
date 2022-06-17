import styled from "styled-components/macro";

export const StyledSideElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media only screen and (max-width: 489px) {
    display: none;
  }

  .left {
    position: fixed;
    bottom: 0;
    left: 75px;
    width: 40px;
    height: 350px;
    @media only screen and (max-width: 768px) {
      left: 25px;
    }
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    li {
      margin: 5px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .side-icons {
        width: 25px;
        height: 25px;
        background-color: transparent;
      }

      a {
        transition: var(--transition2);
        color: ${(props) => props.theme.color2};
        &:hover {
          color: ${(props) => props.theme.hover};
          transform: translateY(-7px);
        }
      }
    }
    &:after {
      content: "";
      display: inline-block;
      border: 1px solid ${(props) => props.theme.color2};
      width: 1px;
      height: 130px;
      margin: 25px auto 0;
    }
  }

  .right {
    position: fixed;
    bottom: 0;
    right: 75px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    writing-mode: vertical-rl;
    font-size: var(--fz-xxs);
    width: 40px;
    height: 350px;
    @media only screen and (max-width: 768px) {
      right: 25px;
    }

    .email-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      a {
        transition: var(--transition2);
        color: ${(props) => props.theme.color2};
        &:hover {
          color: ${(props) => props.theme.hover};
          transform: translateY(-7px);
          top: 10px;
        }
      }
      &:after {
        content: "";
        display: inline-block;
        border: 1px solid ${(props) => props.theme.color2};
        width: 1px;
        height: 130px;
        margin: 25px auto 0;
      }
    }
  }
`;
