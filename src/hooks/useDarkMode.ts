import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

export const useDarkMode = () => {
  const [theme, setTheme] = useState<ThemeMode>("light");

  //   Setting theme mode, if no theme mode, useEffect will set it to light
  const setMode = (mode: ThemeMode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  //   For toggling theme mode
  const themeToggler = (): void => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  //   For checking the theme every rerender
  useEffect(() => {
    const currentTheme: ThemeMode = window.localStorage.getItem(
      "theme"
    ) as ThemeMode;
    if (currentTheme) {
      setTheme(currentTheme);
    } else {
      setTheme("light");
    }
  }, []);

  return [theme, themeToggler];
};
