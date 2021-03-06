import { createGlobalStyle, keyframes } from 'styled-components';

export const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

export const floatTo = keyframes`
  to {
    transform: translateY(1rem);
  }
`;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: #000;
    font-family: futura-pt, sans-serif;
    cursor: url(static/cursor-auto.png), auto;
  }

  a {
    cursor: url(static/cursor-pointer.png), pointer;
    font-weight: 800;
    text-decoration: none;

    &:active {
      cursor: url(static/cursor-pointer-clicked.png), pointer;
    }

    &:visited {
      color: inherit;
    }
  }
`;
