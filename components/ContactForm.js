import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Box,
  Button,
  useColorMode,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

const ContactForm = () => {
  const { colorMode } = useColorMode();
  const submitColor = {
    light: "#e5e5e5",
    dark: "#e5e5e5",
  };

  const bgColor = {
    light: "red.400",
    dark: "red.400",
  };

  const submitHoverBg = {
    light: "teal.500",
    dark: "teal.300",
  };

  const inputBg = {
    light: "#e5e5e5",
    dark: "#e5e5e5",
  };

  const inputTextColor = {
    light: "#171717",
    dark: "#171717",
  };

  const componentsBoxShadow = {
    light: "0 0 10px rgba(0, 0, 0, 0.15)",
    //dark: "0 5px 5px rgba(0, 0, 0, 0.2)",
    dark: "0 0 10px rgba(0, 0, 0, 0.15)",
  };

  const componentsHoverBoxShadow = {
    light: "0 0 10px rgba(0, 0, 0, 0.2)",
    //dark: "0 5px 5px rgba(0, 0, 0, 0.2)",
    dark: "0 0 10px rgba(255, 255, 255, 0.2)",
  };

  const formBgColor = {
    //light: "#e5e5e5",
    //dark: "#171717",
    light: "#f5f5f5",
    dark: "#1f1f1f",
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" pt={4}>
      <FormControl
        p={8}
        as={motion.div}
        boxShadow={componentsBoxShadow[colorMode]}
        borderRadius="10px"
        width={"90%"}
        isRequired
        bg={formBgColor[colorMode]}
        whileHover={{ scale: 1.01 }}
        _hover={
          {
            //boxShadow: cardHoverBoxShadow[colorMode]
          }
        }
      >
        <Stack spacing={3}>
          <Box>
            <FormLabel mb={-2}>Full name</FormLabel>
            <Input
              borderColor={bgColor[colorMode]}
              pl={1}
              pr={1}
              variant="flushed"
              type="text"
            />
          </Box>
          <Box>
            <FormLabel mb={-2}>Email</FormLabel>
            <Input
              borderColor={bgColor[colorMode]}
              variant="flushed"
              type="email"
              pl={1}
              pr={1}
            />
          </Box>
          <Box>
            <FormLabel mb={-2}>Subject</FormLabel>
            <Input
              borderColor={bgColor[colorMode]}
              pl={1}
              pr={1}
              variant="flushed"
              type="text"
            />
          </Box>
          <Box>
            <FormLabel mb={5}>Message</FormLabel>
            <Input
              borderColor={bgColor[colorMode]}
              variant="outline"
              height={"120px"}
              as="textarea"
              pl={1}
              pr={1}
              style={{ overflowY: "hidden" }}
              bg={inputBg[colorMode]}
              color={inputTextColor[colorMode]}
              textAlign="justify"
            />
          </Box>
          <Button
            aria-label="Submit form"
            //isLoading
            //loadingText="Submitting"
            borderRadius={"5px"}
            _hover={{
              color: "#f9f9f9",
              bg: submitHoverBg[colorMode],
            }}
            color={submitColor[colorMode]}
            bg={bgColor[colorMode]}
            pointerEvents="auto"
            type="submit"
          >
            Submit
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default ContactForm;
