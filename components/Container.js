import React from "react";
import {
  useColorMode,
  Button,
  Flex,
  Box,
  Stack,
  Link,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import DarkModeSwitch from "../components/DarkModeSwitch";
import Paragraph from "./Paragraph.js";
import Section from "./Section.js";

import { motion } from "framer-motion";

import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "#e5e5e5",
    dark: "#171717",
  };

  const navHoverBg = {
    light: "teal.600",
    dark: "teal.200",
  };

  const socialIconColor = {
    light: "red.400",
    dark: "red.400",
  };

  const socialBgColor = {
    light: "whiteAlpha",
    dark: "blackAlpha",
  };

  const socialHoverBg = {
    light: "teal.500",
    dark: "teal.300",
  };

  const color = {
    light: "#171717",
    dark: "#e5e5e5",
  };

  const StickyNav = styled(Flex)`
    position: fixed;
    z-index: 100;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    //backgrop-filter: saturate(100%) blur(20px);
    //transition: height 0.5s, line-height 0.5s;
    pointer-events: none;
  `;

  return (
    <div className="content-container">
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        //px={[1, 4, null, null, null, 5]} // review
        //mt={[0, 8, 0, null, null, null]} // review
      >
        {children}
      </Flex>
      <StickyNav
        as="nav"
        justifyContent={[
          "flex-end",
          "flex-end",
          "flex-end",
          "space-between",
          null,
          null,
        ]}
        alignItems="flex-end"
        width="100%"
        pl={[null, null, null, 8, 10, 10]}
        pr={[4, 4, 8, 8, 10, 10]}
        pb={[4, 4, 6, null, null, 10]}
      >
        <Box
          border="1px solid red"
          display={["none", "none", "none", "flex", null, null]}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Section delay="0.50">
            <NextLink href="#home" passHref>
              <Button
                as="a"
                color="red.400"
                variant="link"
                pt={[1, 2, 0.5, null, null, null]} //review
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
                p={[1, 2, 0.5, null, null, null]} //review
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
                p={[1, 2, 0.5, null, null, null]} //review
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
                p={[1, 2, 0.5, null, null, null]} //review
                _hover={{ color: navHoverBg[colorMode] }}
                pointerEvents="auto"
                fontSize={[null, null, null, "md", "sm", "md"]}
              >
                <Box>/ creations</Box>
              </Button>
            </NextLink>
          </Section>
          {/*
          <Section delay="0.70">
            <NextLink href="#contact-me" passHref>
              <Button
                as="a"
                color="red.400"
                variant="link"
                p={[1, 2, 0.5]}
                _hover={{ color: navHoverBg[colorMode] }}
                pointerEvents="auto"
              >
                <Box>/ contact me</Box>
              </Button>
            </NextLink>
          </Section> */}
        </Box>
        <Box
          display={["flex", null, null, null, null, null]}
          flexDirection={["row", null, null, "column", null, null]}
          alignItems={["center", null, null, null, null, null]}
        >
          <Stack
            display={["flex"]}
            flexDirection={["row", "row", "row", "column", null, null]}
            //alignItems={["center", "center", "flex-start"]}
            spacing={[0, null, null, 0.5, null, null]}
            pb={[0, null, null, 2, null, null]}
            pr={[2, null, null, 0, null, null]}
          >
            <Link href="https://github.com/1391819" target="_blank">
              <Button
                aria-label="Open Github"
                fontSize={["sm", "md", null, "lg", null, null]}
                leftIcon={<Icon mr={-2} as={IoLogoGithub} />}
                borderRadius={"5px"}
                _hover={{
                  color: "#e5e5e5",
                  bg: socialHoverBg[colorMode],
                }}
                p={0}
                color={socialIconColor[colorMode]}
                bg={socialBgColor[colorMode]}
                pointerEvents="auto"
              ></Button>
            </Link>
            <Link
              href="https://www.instagram.com/roberto.nacu/"
              target="_blank"
            >
              <Button
                aria-label="Open Instagram"
                fontSize={["sm", "md", null, "lg", null, null]}
                leftIcon={<Icon mr={-2} as={IoLogoInstagram} />}
                borderRadius={"5px"}
                _hover={{
                  color: "#e5e5e5",
                  bg: socialHoverBg[colorMode],
                }}
                p={0}
                color={socialIconColor[colorMode]}
                bg={socialBgColor[colorMode]}
                pointerEvents="auto"
              ></Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/robertonacu/"
              target="_blank"
            >
              <Button
                aria-label="Open Instagram"
                fontSize={["sm", "md", null, "lg", null, null]}
                leftIcon={<Icon mr={-2} as={IoLogoLinkedin} />}
                borderRadius={"5px"}
                _hover={{
                  color: "#e5e5e5",
                  bg: socialHoverBg[colorMode],
                }}
                p={0}
                color={socialIconColor[colorMode]}
                bg={socialBgColor[colorMode]}
                pointerEvents="auto"
              ></Button>
            </Link>
          </Stack>
          <DarkModeSwitch />
        </Box>
      </StickyNav>
    </div>
  );
};

export default Container;
