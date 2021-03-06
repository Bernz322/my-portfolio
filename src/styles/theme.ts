export const lightTheme: any = {
  body: "#e3ebec",
  navbg: "rgba(227, 235, 236, 0.7)",
  color1: "#001429",
  color2: "#003152",
  color3: "#738b9c",
  color4: "#001429",
  hover: "#588bae",
  btn: "#0d52bd",
  intro: "#003152",
  themeIcons: "#001429",
  menubc: "#d2d7dc",
  menuBackdrop: "#abb9c4",
  cursor: "#fff",
};
export const darkTheme: any = {
  body: "#001429",
  navbg: "rgba(0, 20, 41,  0.7)",
  color1: "#e3ebec",
  color2: "#d2d7dc",
  color3: "#b1bec8",
  color4: "#79f6fc",
  hover: "#79f6fc",
  btn: "#79f6fc",
  intro: "#79f6fc",
  themeIcons: "#fccf3e",
  menubc: "#1d2951",
  menuBackdrop: "#003152",
  cursor: "#79f6fc",
};

export type ThemeProps = {
  theme: typeof lightTheme | typeof darkTheme;
};
