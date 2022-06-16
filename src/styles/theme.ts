export const lightTheme: any = {
  body: "#e3ebec",
  color1: "#001429",
  color2: "#003152",
  color3: "#738b9c",
  color4: "#001429",
  hover: "#588bae",
  btn: "#0d52bd",
  themeIcons: "#001429",
  menubc: "#d2d7dc",
  menuBackdrop: "#abb9c4",
};
export const darkTheme: any = {
  body: "#001429",
  color1: "#e3ebec",
  color2: "#d2d7dc",
  color3: "#b1bec8",
  color4: "#79f6fc",
  hover: "#79f6fc",
  btn: "#79f6fc",
  themeIcons: "#fccf3e",
  menubc: "#1d2951",
  menuBackdrop: "#003152",
};

export type ThemeProps = {
  theme: typeof lightTheme | typeof darkTheme;
};
