import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyles = createGlobalStyle`
  :root {
    --body-font-size: 16px;
    --body-font-weight: 500;
    --body-line-height: 1.5;
    --body-font-family: "Manrope", "Arial", sans-serif;
    --gap: 1.5rem;

    --grey:  #8a8a89;
    --light-gray: #f7f7fb;
    --fair-gray: #e8edf2;
    --border-gray: rgba(138 138 137/ 0.2);
    --grey-text: rgba(18 20 23 / 0.5);
    --grey-border: rgba(18 20 23 / 0.1);
    --black: #121417;
    --light-black:  #363535;
    --blue: #3470ff;
    --dark-blue: #0b44cd;
    --white: #ffffff;
    --red: #ec3535;


    --label-color: var( --grey);
    --text-color: var(--black);
    --descr-color: var(--grey-text);
    --input-bg-color: var(--light-gray);
    --marked-color: var(--blue);
    --btn-text-color: var(--white);
    --heart-color: var(--blue);
    --heart-border: var(--white);
    --accent-color: var(--dark-blue);
    --modal-bg: var( --white);
    --img-bg: var(--dark-blue);
    --header-bg-color: var(--fair-gray);
    --sidebar-bg-color: var(--fair-gray);
    --link-accent: var(--red);
    --placeholder-selected-color: var(--black);
    --placeholder-color: var(--border-gray);
  }

  ::before,*::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    color: var(--black);
    font: var(--body-font-weight) var(--body-font-size)/var(--body-line-height) var(--body-font-family);
  }

  ol,
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  p, h1, h2, h3, h4, li {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
  }
`;
