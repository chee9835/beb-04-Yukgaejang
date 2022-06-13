import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";

const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Poppins, sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle};
`;

export default GlobalStyle;
