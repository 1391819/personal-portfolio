import {
  Center,
  Box,
  useColorModeValue,
  useColorMode,
  Stack,
  Link,
  Button,
  LinkBox,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import Image from "next/image";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const CreationGridItem = ({ thumbnail, children, title, link }) => {
  const { colorMode } = useColorMode();
  const projectIconColor = {
    light: "#e5e5e5",
    dark: "#e5e5e5",
  };

  const projectBgColor = {
    light: "red.400",
    dark: "red.400",
  };

  const cardBgColor = {
    //light: "#e5e5e5",
    //dark: "#171717",
    light: "#F5F1E8",
    dark: "#313035",
  };

  const cardBoxShadow = {
    light: "0 0 10px rgba(0, 0, 0, 0.15)",
    //dark: "0 5px 5px rgba(0, 0, 0, 0.2)",
    dark: "0 0 10px rgba(0, 0, 0, 0.15)",
  };

  const cardHoverBoxShadow = {
    light: "0 0 10px rgba(0, 0, 0, 0.2)",
    //dark: "0 5px 5px rgba(0, 0, 0, 0.2)",
    dark: "0 0 10px rgba(255, 255, 255, 0.2)",
  };

  const projectHoverBg = {
    light: "teal.500",
    dark: "teal.300",
  };

  return (
    <Center pb={3}>
      <Box
        //w="100%"
        align="center"
        p={4}
        bg={cardBgColor[colorMode]}
        rounded="lg"
        boxShadow={cardBoxShadow[colorMode]}
        _hover={
          {
            //boxShadow: cardHoverBoxShadow[colorMode],
          }
        }
      >
        {/*
      <Link href={link} isExternal>
        <LinkBox cursor="pointer" mt={-4}>
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"contain"}
            src={thumbnail}
          />
        </LinkBox>
      </Link>
      */}
        <Image
          alt="project-thumbnail"
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"contain"}
          src={thumbnail}
        />

        <Stack mt={-4} mb={2} align={"center"}>
          {children}
          <Link
            href={link}
            target="_blank"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button
              fontSize={["md", "md", "lg", "md", null, "lg"]}
              pt={6}
              pb={6}
              fontWeight={500}
              aria-label="Visit face recognition project page"
              rightIcon={<ExternalLinkIcon />}
              borderRadius={"5px"}
              _hover={{
                color: "#e5e5e5",
                bg: projectHoverBg[colorMode],
              }}
              color={projectIconColor[colorMode]}
              bg={projectBgColor[colorMode]}
              pointerEvents="auto"
              as={motion.div}
              whileHover={{ scale: 1.02 }}
            >
              {title}
            </Button>
          </Link>
        </Stack>
      </Box>
    </Center>
  );
};

export default CreationGridItem;
