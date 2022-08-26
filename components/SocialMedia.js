import { useColorMode, Stack, Link, Button, Icon } from "@chakra-ui/react";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const SocialMedia = () => {
  const { colorMode } = useColorMode();

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

  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      //flexDirection={["row", "row", "row", "column", null, null]}
      ////alignItems={["center", "center", "flex-start"]}
      //spacing={[0, null, null, 0.5, null, null]}
      spacing={0}
      pt={4}
      //pb={[0, null, null, 2, null, null]}
      //pr={[2, null, null, 0, null, null]}
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
      <Link href="https://www.instagram.com/roberto.nacu/" target="_blank">
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
          ml={1}
          color={socialIconColor[colorMode]}
          bg={socialBgColor[colorMode]}
          pointerEvents="auto"
        ></Button>
      </Link>
      <Link href="https://www.linkedin.com/in/robertonacu/" target="_blank">
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
          ml={1}
          color={socialIconColor[colorMode]}
          bg={socialBgColor[colorMode]}
          pointerEvents="auto"
        ></Button>
      </Link>
    </Stack>
  );
};

export default SocialMedia;
