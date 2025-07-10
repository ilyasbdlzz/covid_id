import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";
import "@fontsource/open-sans";

const GlobalStyle = createGlobalStyle`
    /* Reset */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Apply font & background */
    body {
        font-family: 'Poppins', 'Open Sans', sans-serif;
        background-color: #ffffff;
        color: #073B4C;
    }

    h1 {
        font-size: 3.052rem;
        font-weight: 700;
    }

    h2 {
        font-size: 2.441rem;
        font-weight: 600;
    }

    h3 {
        font-size: 1.953rem;
        font-weight: 500;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        font-family: inherit;
    }
    `;

    export default GlobalStyle;
