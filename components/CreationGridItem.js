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
    light: "#f9f9f9",
    dark: "#f9f9f9",
  };

  const projectBgColor = {
    light: "red.400",
    dark: "red.400",
  };

  const cardBgColor = {
    //light: "#f9f9f9",
    //dark: "#171717",
    light: "#f5f5f5",
    dark: "#232323",
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
              fontWeight={500}
              aria-label="Visit face recognition project page"
              rightIcon={<ExternalLinkIcon />}
              borderRadius={"5px"}
              _hover={{
                color: "#f9f9f9",
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
