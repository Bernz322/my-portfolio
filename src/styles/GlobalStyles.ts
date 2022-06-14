import { createGlobalStyle } from "styled-components/macro";
import fonts from "./fonts";
import variables from "./variables";
import { ThemeProps } from "./theme";

const GlobalStyles = createGlobalStyle<ThemeProps>`
    ${fonts};
    ${variables};

    *,
    *::before,
    *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        scroll-behavior: smooth;
        box-sizing: inherit;
    }

    body{
        font-family: var(--font-sans);
        background-color:${(props) => props.theme.body};
        color:${(props) => props.theme.color};
        transition: var(--transition2);
    }

    a{
        text-decoration:none;
        color:${(props) => props.theme.color};
        font-family: var(--font-mono);
    }
`;

export default GlobalStyles;
