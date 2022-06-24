import { StyledButton } from "../styles";

interface IButton {
  buttonText: string;
  buttonUrl: string;
}

function Button({ buttonText, buttonUrl }: IButton) {
  return (
    <StyledButton href={buttonUrl}>
      <span>{buttonText}</span>
      <i />
    </StyledButton>
  );
}

export default Button;
