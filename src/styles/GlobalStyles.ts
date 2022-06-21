import { createGlobalStyle } from "styled-components/macro";
import variables from "./variables";
import { ThemeProps } from "./theme";

const GlobalStyles = createGlobalStyle<ThemeProps>`
    ${variables};

    *,
    *::before,
    *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* cursor: none; */
    }
    
    html{
        scroll-behavior: smooth;
        box-sizing: inherit;
        scrollbar-width: thin;
    }

    body::-webkit-scrollbar {
        width: 6px;
    }

    body::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.color3};
        border-radius: 10px;
        background-image: -webkit-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.2) 75%,
        transparent 75%,
        transparent
    );
    }

    body{
        font-family: var(--font-sans);
        background-color:${(props) => props.theme.body};
        color:${(props) => props.theme.color1};
        transition: var(--transition2);
        width: 100%;
        min-height: fit-content;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden !important;
    }

    a{
        text-decoration:none;
        color:${(props) => props.theme.color1};
        font-family: var(--font-mono);
    }

    li{
        list-style: none;
    }
`;

export default GlobalStyles;
