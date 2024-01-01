import { createGlobalStyle } from "styled-components";

const CustomFontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Empires';
    src: url('/fonts/Empires.otf') format('opentype');
    /* Add more variations if needed (e.g., font-weight, font-style) */
  }

  /* Additional styles or overrides can be added here */
`;

export default CustomFontStyles;
