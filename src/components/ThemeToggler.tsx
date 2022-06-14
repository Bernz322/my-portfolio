import { useContext } from "react";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { ThemeModeContext } from "../context/ThemeContext";
import { StyledToggler } from "../styles";

const ThemeToggler = () => {
  const { theme, themeToggler } = useContext(ThemeModeContext);

  return (
    <StyledToggler
      onClick={themeToggler}
      whileHover={{ scale: 1.2, rotate: 45 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%",
      }}
    >
      {theme === "light" ? (
        <RiMoonClearLine className="icons" />
      ) : (
        <RiSunLine className="icons" />
      )}
    </StyledToggler>
  );
};

export default ThemeToggler;
