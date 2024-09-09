// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${(props) => props.theme.colors.bgDefault};
    @import url("https://fonts.googleapis.com/css2?family=Splash&display=swap");
    * {
      font-family: 'Roboto', sans-serif;
    }
  }
`;
