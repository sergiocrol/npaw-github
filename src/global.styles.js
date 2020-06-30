import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', 'sans-serif', 'Open Sans Condensed';
    padding: 20px 60px;
    margin: 0;
    background-color: ${({ theme }) => theme.background.primary};
    transition: all 0.15s linear;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;