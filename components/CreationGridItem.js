import { motion } from "framer-motion";
import Image from "next/image";
import {
  Center,
  Box,
  useColorMode,
  Stack,
  Link,
  Button,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";

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
    light: "#e7dbc8", //e7dbc8 // F5F1E8
    dark: "#2c2b32", //38373f //2c2b32 //313035
  };
  const cardBoxShadow = {
    light: "0 5px 5px rgba(0, 0, 0, 0.1)",
    dark: "0 5px 5px rgba(0, 0, 0, 0.1)",
  };
  const cardHoverBoxShadow = {
    light: "0 5px 5px rgba(0, 0, 0, 0.15)",
    dark: "0 5px 5px rgba(0, 0, 0, 0.2)",
  };
  const projectHoverBg = {
    light: "teal.500",
    dark: "teal.300",
  };

  return (
    <Center>
      <Box
        bg={cardBgColor[colorMode]}
        rounded="xl"
        p={4}
        boxShadow={cardBoxShadow[colorMode]}
        _hover={{
          boxShadow: cardHoverBoxShadow[colorMode],
        }}
      >
        <Box
          display="flex"
          mt={4}
          mb={8}
          borderRadius="5px"
          overflow="hidden"
          height={190}
          width={282}
        >
          <Image alt="Project thumbnail" objectFit={"cover"} src={thumbnail} />
        </Box>

        <Stack mt={-4} mb={2} align="center">
          {children}
          <Link
            href={link}
            target="_blank"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button
              as={motion.div}
              aria-label="Visit project page"
              color={projectIconColor[colorMode]}
              bg={projectBgColor[colorMode]}
              rightIcon={<ExternalLinkIcon />}
              borderRadius={"5px"}
              fontSize={["sm", null, "md", null, null, null]}
              fontWeight={500}
              pt={6}
              pb={6}
              mt={1}
              mb={1}
              _hover={{
                color: "#e5e5e5",
                bg: projectHoverBg[colorMode],
              }}
              whileHover={{ scale: 1.01 }}
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
