import "@fontsource/m-plus-rounded-1c";

// chakraui provider setup
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import customTheme from "../styles/theme";
import { Global, css } from "@emotion/react";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #f5b790;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #f5b790;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171717"};
          }
          .grid-item-thumbnail {
            border-radius: 12px;
          }
          .stack-badge {
            margin: 0 3px;
          }
          .typed-cursor,
          .highlight-word-banner {
            background-color: rgba(0, 0, 0, 0);
            color: ${colorMode === "light" ? "#319795" : "#4FD1C5"};
          }
          .full-page-scroll-section {
            scroll-snap-align: start;
          }
          .content-container {
            scroll-snap-type: y proximity;
            overflow-y: scroll;
            height: 100vh;
            scroll-behavior: smooth;
          }
          .fixed-navbar {
            position: fixed;
            z-index: 100;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0);
            pointer-events: none;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
        }}
      >
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
