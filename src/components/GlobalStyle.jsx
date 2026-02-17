import { createGlobalStyle } from "styled-components";

/* 
  Basic global reset:
  - Removes default margins and padding
  - Sets border-box sizing for all elements
  - Defines base font, colors, and line-height
  - Prevents horizontal overflow
  - Makes images responsive
*/

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Inter", sans-serif;
    color: #000;
    background: #fff;
    overflow-x: hidden;
    line-height: 1.6; 
  }

  img {
    max-width: 100%;
    display: block;
  }

  /* ----------------------------- */
  /* MOBILE-FIRST*/
  /* ----------------------------- */


  h1 {
    font-size: 40px;      /* Mobil */
    font-weight:bold; 
    font-family: "Inter", sans-serif;
  }

  h2 {
    font-size: 38px;
    font-family: "Inter", sans-serif;
    
  }

  h3 {
    font-size: 20px;
    font-family: "Inter", sans-serif;
  }

  p {
    font-size: 16px;
font-family: "Inter", sans-serif;
    margin: 0 auto; 
    max-width: 750px;       
  }

  /* ----------------------------- */
  /* TABLET (≥ 768px) */
  /* ----------------------------- */
  @media (min-width: 768px) {
   h1 { font-size: 70px; letter-spacing: -0.5px; }
    h2 { font-size: 60px; letter-spacing: -0.9px; font-weight: 700; }
    h3 { font-size: 30px; letter-spacing: -0.3px; font-weight: 500;}
    p  { font-size: 20px; letter-spacing: -0.1px;}
  }

  /* ----------------------------- */
  /* DESKTOP (≥ 1024px) */
  /* ----------------------------- */
  @media (min-width: 1024px) {
    h1 { font-size: 100px; letter-spacing: -0.5px; }
    h2 { font-size: 80px; letter-spacing: -0.9px; font-weight: 700; }
    h3 { font-size: 30px; letter-spacing: -0.3px; font-weight: 500;}
    p  { font-size: 18px; letter-spacing: -0.1px;}
  }
`;
