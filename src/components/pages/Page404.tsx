import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import Button from "../Button";

const StyledPage404 = styled.div`
  height: calc(100vh - 130px);
  display: flex;
  align-content: center;
  justify-content: center;
  flex-flow: column nowrap;
  text-align: center;
  margin: 25px;
  h1 {
    font-size: clamp(100px, 10vw, 150px);
    color: ${(props) => props.theme.color2};
  }
  h3 {
    font-size: clamp(25px, 4vw, 60px);
    color: ${(props) => props.theme.color3};
    margin-bottom: 20px;
  }
  p {
    font-size: var(--fz-lg);
    color: ${(props) => props.theme.color3};
    margin-bottom: 30px;

    @media only screen and (max-width: 768px) {
      font-size: var(--fz-sm);
      max-width: 100%;
    }
  }
  span.sec {
    font-weight: 800;
    font-size: var(--fz-xxl);
    @media only screen and (max-width: 768px) {
      font-size: var(--fz-md);
      max-width: 100%;
    }
  }
  .btn {
    margin: 0 auto;
  }
`;

function Page404() {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState<number>(15);

  useEffect(() => {
    setTimeout(() => {
      if (redirect > 0) {
        setRedirect(redirect - 1);
      }
    }, 1000);
    if (redirect === 0) navigate("/");
  }, [redirect, navigate]);
  return (
    <StyledPage404>
      <h1>404</h1>
      <h3>You got lost!</h3>
      <p>
        You will be redirected to the homepage in{" "}
        <span className="sec">{redirect}</span>
        s.
      </p>
      <div className="btn">
        <Button buttonText="Go Home" buttonUrl="/" />
      </div>
    </StyledPage404>
  );
}

export default Page404;
