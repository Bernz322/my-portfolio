import { StyledButton } from "../styles";

interface IButton {
  buttonText: string;
  buttonUrl: string;
}

const Button = ({ buttonText, buttonUrl }: IButton) => {
  return (
    <StyledButton href={buttonUrl}>
      <span>{buttonText}</span>
      <i></i>
    </StyledButton>
  );
};

export default Button;
