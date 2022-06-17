import styled from "styled-components/macro";

export const StyledCursor = styled.div`
  z-index: 10000;
  border-radius: var(--border-radius-circle);
  width: 32px;
  height: 32px;
  border: 1px solid ${(props) => props.theme.color4};
  overflow: hidden;
  position: fixed;
  pointer-events: none;
  transform: translate3d(0, -100, 0);

  .secondary-cursor {
    color: red;
  }
`;
