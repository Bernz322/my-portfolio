export const lightTheme: any = {
  body: "#e3ebec", // Lightest Slate
  color: "#001429", // Dark Navy
  subcolor: "#001429",
  hover: "#588bae",
  themeIcons: "#001429",
  menubc: "#d2d7dc",
  menuBackdrop: "#abb9c4",
  sideIcons: "#001429",
};

export const darkTheme: any = {
  body: "#001429", // Dark Navy
  color: "#e3ebec", // Lightest Slate
  subcolor: "#79f6fc",
  hover: "#79f6fc",
  themeIcons: "#fccf3e",
  menubc: "#1d2951",
  menuBackdrop: "#003152",
  sideIcons: "#abb9c4",
};

export type ThemeProps = {
  theme: typeof lightTheme | typeof darkTheme;
};
