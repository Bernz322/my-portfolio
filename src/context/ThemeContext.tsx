import { createContext } from "react";
import { ThemeProvider } from "styled-components/macro";
import { useDarkMode } from "../hooks/useDarkMode";
import { lightTheme, darkTheme } from "../styles/theme";

interface IThemeModeContext {
  theme: typeof lightTheme | typeof darkTheme;
  themeToggler: any;
}

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeModeContext = createContext({} as IThemeModeContext);

export const ThemeModeProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, themeToggler] = useDarkMode();
  const ThemeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeModeContext.Provider value={{ themeToggler, theme }}>
      <ThemeProvider theme={ThemeMode}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
