import styled from "styled-components/macro";

export const StyledButton = styled.a`
  position: relative;
  font-size: var(--fz-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  max-width: 200px;
  min-width: 200px;
  max-height: 50px;
  min-height: 50px;
  transition: var(--transition3);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.color2};

  @media only screen and (max-width: 489px) {
    margin: 0 auto;
    font-size: var(--fz-xxs);
    max-width: 150px;
    min-width: 150px;
    max-height: 40px;
    min-height: 40px;
    padding: 10px 15px;
  }

  &:hover {
    letter-spacing: 0.15em;
    border: 2px solid ${(props) => props.theme.btn};
    box-shadow: 0 0 35px ${(props) => props.theme.btn};

    span {
      color: ${(props) => props.theme.btn};
    }

    i::before {
      width: 30px;
      left: 10%;
    }

    i::after {
      width: 30px;
      left: 75%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    inset: 2px;
  }

  span {
    color: ${(props) => props.theme.color2};
    position: relative;
    z-index: 1;
  }

  i {
    position: absolute;
    inset: 0;
    display: block;
    &:before {
      content: "";
      position: absolute;
      left: 75%;
      top: -6px;
      width: 15px;
      height: 10px;
      border: 2px solid ${(props) => props.theme.btn};
      background-color: ${(props) => props.theme.body};
      transition: var(--transition3);
    }
    &:after {
      content: "";
      position: absolute;
      left: 20%;
      bottom: -6px;
      width: 15px;
      height: 10px;
      border: 2px solid ${(props) => props.theme.btn};
      background-color: ${(props) => props.theme.body};
      transition: var(--transition3);
    }
  }
`;
