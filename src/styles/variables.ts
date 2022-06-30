import { css } from "styled-components/macro";

const variables = css`
  :root {
    --prussian: #003152;
    --slate: #abb9c4;
    --light-slate: #d2d7dc;
    --lightest-slate: #e3ebec;
    --air-force: #588bae;
    --electric: #79f6fc;
    --dark-navy: #001429;

    --default-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.8);

    --font-sans: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    --font-mono: "Fira Mono", Roboto Mono, Oxygen Mono, Ubuntu Mono, Cantarell,
      monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --spacing-xxs: 4px;
    --spacing-xs: 8px;
    --spacing-sm: 12px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-xxl: 64px;

    --transition1: all 0.1s ease-in-out;
    --transition2: all 0.2s ease-in-out;
    --transition3: all 0.3s ease-in-out;
    --transition4: all 0.4s ease-in-out;
    --transition5: all 0.5s ease-in-out;
    --cursor-transition: all 1s linear;
    --nav-height: 100px;
    --border-radius-circle: 50%;
    --site-max-width: 1400px;
  }
`;

export default variables;
