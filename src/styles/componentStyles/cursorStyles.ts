import styled from "styled-components/macro";

const StyledCursor = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
  .main-cursor,
  .secondary-cursor {
    z-index: 10000;

    pointer-events: none;

    position: fixed;
  }

  .main-cursor {
    transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
    animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    mix-blend-mode: difference;
    transform: translate3d(0, 0, 0);

    .main-cursor-background {
      width: 15px;
      height: 15px;
      background: ${(props) => props.theme.cursor};
      border-radius: 50%;
    }
  }

  .secondary-cursor {
    width: 30px;
    height: 30px;
    mix-blend-mode: difference;
    transform: translate3d(0, 0, 0);

    .cursor-background {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid ${(props) => props.theme.cursor};
      position: relative;
    }
  }
`;
export default StyledCursor;
