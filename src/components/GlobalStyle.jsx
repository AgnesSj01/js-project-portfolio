import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
    line-height: 1.6; /* Standard brödtext */
  }

  img {
    max-width: 100%;
    display: block;
  }

  /* ----------------------------- */
  /* MOBILE-FIRST TYPOGRAPHY */
  /* ----------------------------- */


  h1 {
    font-size: 35px;      /* Mobil */
    font-weight:bold; 
    font-family: "Inter", sans-serif;
  }

  h2 {
    font-size: 28px;
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
    max-width: 750px;       /* bra läsbredd */
  }

  /* ----------------------------- */
  /* TABLET (≥ 768px) */
  /* ----------------------------- */
  @media (min-width: 768px) {
    h1 { font-size: 60px; }
    h2 { font-size: 32px; }
    h3 { font-size: 22px; }
    p  { font-size: 17px; }
  }

  /* ----------------------------- */
  /* DESKTOP (≥ 1024px) */
  /* ----------------------------- */
  @media (min-width: 1024px) {
    h1 { font-size: 80px; letter-spacing: -0.5px; }
    h2 { font-size: 60px; letter-spacing: -0.5px; }
    h3 { font-size: 24px; letter-spacing: -0.3px; }
    p  { font-size: 18px; }
  }
`;
