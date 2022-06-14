import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";

const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
  }

  body {
    font-family: Poppins, sans-serif;
  }

  a {
    text-decoration: none;
    &:visited {
      color: #424c55;
    }
    &:hover {
      color: #0c1822;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle};
    
`;

export default GlobalStyle;
