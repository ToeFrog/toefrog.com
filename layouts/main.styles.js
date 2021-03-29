import css from "styled-jsx/css";
import "prismjs/themes/prism-okaidia.css";

export default css.global`
  :root {
    --color-primary: #7ab51f;
    --color-secondary: #8B50BE;
    --color-tertiary: #6C4123;
    --color-background-alt: #000000;
    --color-foreground: #ffffff;
    --color-background: #ffffff;
    --color-muted: #666666;

    --grid-unit: 0.5rem;

    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-bold: 700;
    --font-color: #000000;
    --font-family-heading: 'Varela Round', sans-serif;
    --font-family-body: 'Varela Round', sans-serif;
    --font-family-code: Consolas, Monaco, "Andale Mono", "Ubuntu Mono",
      monospace;

    --global-transition-time: 0.2s;

    --wrapper-max-width: 48rem;

    --header-nav-item-active-color: #7ab51f;
    --footer-copyright-color: #7ab51f;
    --external-url-background-color: #7ab51f;
  }

  html {
    font-size: 100%;
    background-color: var(--color-background);
  }

  body {
    font-size: 1rem;
    font-weight: var(--font-weight-light);
    font-family: var(--font-family-body);
    color: var(--font-color);
    margin: 0;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  /* accessibility fixes for prismjs */
  .token.comment {
    color: #adb8c2 !important;
  }

  .token.tag, .token.constant {
    color: #fc92b6 !important;
  }
`;
