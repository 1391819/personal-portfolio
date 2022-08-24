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
    light: "#f9f9f9",
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
    light: "#f9f9f9",
    dark: "#171717",
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
    z-index: 10;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    //backgrop-filter: saturate(100%) blur(20px);
    //transition: height 0.5s, line-height 0.5s;
    pointer-events: none;
  `;

  return (
    <div className="content-container">
      <StickyNav
        as="nav"
        justifyContent="space-between"
        alignItems="flex-end"
        width="100%"
        pl={10}
        pr={10}
        pb={8}
      >
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Section delay="0.50">
            <NextLink href="#home" passHref>
              <Button
                as="a"
                color="red.400"
                variant="link"
                p={[1, 2, 0.5]}
                _hover={{ color: navHoverBg[colorMode] }}
                pointerEvents="auto"
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
                p={[1, 2, 0.5]}
                _hover={{ color: navHoverBg[colorMode] }}
                pointerEvents="auto"
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
                p={[1, 2, 0.5]}
                _hover={{ color: navHoverBg[colorMode] }}
                pointerEvents="auto"
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
                p={[1, 2, 0.5]}
                _hover={{ color: navHoverBg[colorMode] }}
                pointerEvents="auto"
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
        <Box display="flex" flexDirection="column" alignItems="center">
          <Stack spacing={0.5} pb={2}>
            <Link href="https://github.com/1391819" target="_blank">
              <Button
                aria-label="Open Github"
                leftIcon={<Icon mr={-2} as={IoLogoGithub} />}
                borderRadius={"5px"}
                _hover={{
                  color: "#f9f9f9",
                  bg: socialHoverBg[colorMode],
                }}
                fontSize={"20px"}
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
                leftIcon={<Icon mr={-2} as={IoLogoInstagram} />}
                borderRadius={"5px"}
                _hover={{
                  color: "#f9f9f9",
                  bg: socialHoverBg[colorMode],
                }}
                fontSize={"20px"}
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
                leftIcon={<Icon mr={-2} as={IoLogoLinkedin} />}
                borderRadius={"5px"}
                _hover={{
                  color: "#f9f9f9",
                  bg: socialHoverBg[colorMode],
                }}
                fontSize={"20px"}
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
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[0, 8, 0]}
      >
        {children}
      </Flex>
    </div>
  );
};

export default Container;
