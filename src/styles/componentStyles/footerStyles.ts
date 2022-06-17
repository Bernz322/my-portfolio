import styled from "styled-components/macro";

export const StyledFooter = styled.footer`
  width: 100vw;
  max-height: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  font-size: var(--fz-xxs);
  font-family: var(--font-mono);
  color: ${(props) => props.theme.color3};
  padding: 20px 0;

  a {
    color: ${(props) => props.theme.color3};
    margin-bottom: 10px;
    transition: var(--transition2);
    :hover {
      color: ${(props) => props.theme.hover};
      span {
        transition: var(--transition3);
        color: red;
      }
    }
  }

  p {
    pointer-events: none;
  }

  .socials {
    display: none;
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: row nowrap;
      li {
        margin: 5px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        .side-icons {
          width: 20px;
          height: 20px;
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
    }
    @media only screen and (max-width: 489px) {
      display: block;
    }
  }
`;
