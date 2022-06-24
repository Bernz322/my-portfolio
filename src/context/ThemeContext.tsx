import { createContext, useMemo } from "react";
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

export function ThemeModeProvider({ children }: ThemeContextProviderProps) {
  const [theme, themeToggler] = useDarkMode();
  const ThemeMode = theme === "light" ? lightTheme : darkTheme;
  const globalContextValue = useMemo(
    () => ({
      theme,
      themeToggler,
    }),
    [theme, themeToggler]
  );
  return (
    <ThemeModeContext.Provider value={globalContextValue}>
      <ThemeProvider theme={ThemeMode}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
