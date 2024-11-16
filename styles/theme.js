import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: `'M PLUS Rounded 1c', sans-serif`,
  body: `'M PLUS Rounded 1c', sans-serif`,
};

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "1xl": "96em",
  "2xl": "118em",
};

const fontWeights = {
  normal: 300,
  medium: 600,
  bold: 700,
};

const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  "1xl": "22px",
  "2xl": "24px",
  "3xl": "28px",
  "3.5xl": "32px",
  "4xl": "36px",
  "4.5xl": "42px",
  "5xl": "48px",
  "6xl": "64px",
};

const customTheme = extendTheme({
  fonts,
  breakpoints,
  fontWeights,
  fontSizes,
});

export default customTheme;
