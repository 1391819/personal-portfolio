import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import DarkModeSwitch from "../components/DarkModeSwitch";
//import SocialMedia from "./SocialMedia.js";
import Section from "./Section.js";

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "#EFE7DA",
    dark: "#201F24",
  };

  const color = {
    light: "#171717",
    dark: "#e5e5e5",
  };

  const navHoverBg = {
    light: "teal.600",
    dark: "teal.200",
  };

  return (
    <Box bg={bgColor[colorMode]} color={color[colorMode]}>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        px={[1, 4, null, null, null, 5]} // review
        mt={[0, 8, 0, null, null, null]} // review
      >
        {children}
      </Flex>
      <Box
        as="nav"
        className="fixed-navbar"
        display="flex"
        justifyContent={[
          "flex-end",
          "flex-end",
          "flex-end",
          "space-between",
          null,
          null,
        ]}
        alignItems={"flex-end"}
        width={"100%"}
        pl={[null, null, null, 8, 10, null]}
        pr={[4, 4, 8, 8, 10, null]}
        pb={[2, 4, 6, null, null, 10]}
      >
        <Box
          display={["none", "none", "none", "flex", "flex", "flex"]}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Section delay="0.50">
            <NextLink href="#home" passHref>
              <Button
                as="a"
                color="red.400"
                variant="link"
                pt={[1, 2, 0.5, null, null, null]}
                _hover={{ color: navHoverBg[colorMode] }}
                pointerEvents="auto"
                fontSize={[null, null, null, "md", "sm", "md"]}
              >
                / home
              </Button>
            </NextLink>
          </Section>
          <Section delay="0.55">
            <NextLink href="#about-me" passHref>
              <Button
                as="a"
                color="red.400"
                variant="link"
                pt={[1, 2, 0.5, null, null, null]}
                _hover={{ color: navHoverBg[colorMode] }}
                pointerEvents="auto"
                fontSize={[null, null, null, "md", "sm", "md"]}
              >
                / about me
              </Button>
            </NextLink>
          </Section>
          <Section delay="0.60">
            <NextLink href="#experience" passHref>
              <Button
                as="a"
                color="red.400"
                variant="link"
                pt={[1, 2, 0.5, null, null, null]}
                _hover={{ color: navHoverBg[colorMode] }}
                pointerEvents="auto"
                fontSize={[null, null, null, "md", "sm", "md"]}
              >
                / experience
              </Button>
            </NextLink>
          </Section>
          <Section delay="0.65">
            <NextLink href="#creations" passHref>
              <Button
                as="a"
                color="red.400"
                variant="link"
                pt={[1, 2, 0.5, null, null, null]}
                _hover={{ color: navHoverBg[colorMode] }}
                pointerEvents="auto"
                fontSize={[null, null, null, "md", "sm", "md"]}
              >
                <Box>/ creations</Box>
              </Button>
            </NextLink>
          </Section>
        </Box>
        <Box
          display={"flex"}
          flexDirection={["row", "row", "row", "column", null, null]}
          alignItems={["center", null, null, null, null, null]}
        >
          <DarkModeSwitch />
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
