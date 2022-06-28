import { StyledButton } from "../styles";

interface IButton {
  buttonText: string;
  buttonUrl: any;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

function Button({ buttonText, buttonUrl, target, rel, ariaLabel }: IButton) {
  return (
    <StyledButton
      href={buttonUrl}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      <span>{buttonText}</span>
      <i />
    </StyledButton>
  );
}

export default Button;
