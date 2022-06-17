import { useEffect, useRef } from "react";
import { StyledCursor } from "../styles";

const Cursor = () => {
  const cursorRef: any = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - 100 - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px,0)`;
    });
  }, []);

  return <StyledCursor className="app-cursor" ref={cursorRef}></StyledCursor>;
};

export default Cursor;
