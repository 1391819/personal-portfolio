import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  useColorMode,
  Heading,
  Box,
  Stack,
  Highlight,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListIcon,
  ListItem,
  Button,
} from "@chakra-ui/react";

// components
import Container from "../components/Container";
import { BioSection, BioYear } from "../components/Bio.js";
import Paragraph from "../components/Paragraph";
import VoxelRaccoonLoader from "../components/voxel-raccoon-loader.js";
import Creations from "../components/Creations.js";
import SocialMedia from "../components/SocialMedia.js";
import Section from "../components/Section.js";

import { ChevronRightIcon, DownloadIcon, ChatIcon } from "@chakra-ui/icons";

import Typed from "react-typed";
import { saveAs } from "file-saver";

// raccoon voxel component
const LazyVoxelRaccoon = dynamic(
  () => import("../components/voxel-raccoon.js"),
  {
    ssr: false,
    loading: () => <VoxelRaccoonLoader />,
  }
);

export default function Home() {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const handleResumeDownload = () => {
    saveAs(
      "https://drive.google.com/uc?export=download&id=1F70unPq8qkB01ZCiDJSeK38K-WlYSn-9",
      "roberto-nacu.docx"
    );
  };

  const headingColor = {
    light: "teal.500",
    dark: "teal.300",
  };

  const listIconsColor = {
    light: "red.400",
    dark: "teal.300",
  };

  const highlightColor = {
    light: "#171717",
    dark: "#e5e5e5",
  };

  const componentsBoxShadow = {
    light: "0 5px 5px rgba(0, 0, 0, 0.1)",
    dark: "0 5px 5px rgba(0, 0, 0, 0.1)",
  };

  const tabButtonColor = {
    light: "#171717",
    dark: "#e5e5e5",
  };

  const tabButtonBgColor = {
    light: "",
    dark: "",
  };

  const contentButtonColor = {
    light: "#e5e5e5",
    dark: "#e5e5e5",
  };

  const contentButtonBgColor = {
    light: "teal.500",
    dark: "",
  };

  const contentButtonHoverBg = {
    light: "teal.500",
    dark: "teal.300",
  };

  const contentButtonHoverColor = {
    light: "#e5e5e5",
    dark: "#e5e5e5",
  };

  const contentButtonBorderColor = {
    light: "teal.500",
    dark: "teal.300",
  };

  const contentButtonHoverBorderColor = {
    light: "",
    dark: "",
  };

  return (
    <Container>
      <Head>
        <title>Roberto Nacu</title>
      </Head>
      <Stack
        spacing={20}
        m="0 auto 1rem auto"
        maxWidth="600px"
        px={[8, null, null, null, null, null]}
      >
        <Box
          as="main"
          id="home"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="100vh"
        >
          <Section delay="0.3">
            <Box zIndex={0}>
              <LazyVoxelRaccoon />
            </Box>
          </Section>
          <Section>
            <Heading
              as="h1"
              fontSize={["4xl", null, "4.5xl", null, null, null]}
              mb={2}
              zIndex={1}
            >
              <Typed
                strings={[
                  "hi, <mark class='highlight-word-banner'>roberto</mark> here.",
                ]}
                startDelay={1500}
                typeSpeed={45}
              />
            </Heading>
          </Section>
          <Section delay="0.4">
            <Box zIndex={1}>
              <Paragraph>
                <Highlight
                  query={[
                    "full-stack development",
                    "machine learning",
                    "human-computer interactions",
                  ]}
                  styles={{
                    fontWeight: "600",
                    color: highlightColor[colorMode],
                  }}
                >
                  I&apos;m a multilingual artificial intelligence graduate based
                  in Newcastle upon Tyne. I have a great interest in full-stack
                  development, machine learning, human-computer interactions,
                  and everything in between.
                </Highlight>
              </Paragraph>
            </Box>
            <Section delay="0.6">
              <Box
                display="flex"
                alignItems="flex-end"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Box display="flex">
                  <Box
                    as={motion.div}
                    whileHover={{ scale: 1.05 }}
                    pr={4}
                    mt={8}
                  >
                    <Button
                      aria-label="Contact me"
                      fontSize={["md", null, "lg", null, null, null]}
                      fontWeight={500}
                      rightIcon={<ChatIcon />}
                      borderRadius={"5px"}
                      variant="outline"
                      pt={6}
                      pb={6}
                      borderColor={contentButtonBorderColor[colorMode]}
                      color={contentButtonColor[colorMode]}
                      bg={contentButtonBgColor[colorMode]}
                      _hover={{
                        color: contentButtonHoverColor[colorMode],
                        bg: contentButtonHoverBg[colorMode],
                        borderColor: contentButtonHoverBorderColor[colorMode],
                      }}
                      onClick={() =>
                        router.push("mailto:roberto.nacu@gmail.com")
                      }
                    >
                      Contact me
                    </Button>
                  </Box>
                  <Box as={motion.div} whileHover={{ scale: 1.05 }} mt={8}>
                    <Button
                      aria-label="Download resume"
                      fontSize={["md", null, "lg", null, null, null]}
                      fontWeight={500}
                      rightIcon={<DownloadIcon />}
                      borderRadius={"5px"}
                      variant="outline"
                      pt={6}
                      pb={6}
                      borderColor={contentButtonBorderColor[colorMode]}
                      color={contentButtonColor[colorMode]}
                      bg={contentButtonBgColor[colorMode]}
                      _hover={{
                        color: contentButtonHoverColor[colorMode],
                        bg: contentButtonHoverBg[colorMode],
                        borderColor: contentButtonHoverBorderColor[colorMode],
                      }}
                      onClick={handleResumeDownload}
                    >
                      Resume
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <SocialMedia />
                </Box>
              </Box>
            </Section>
          </Section>
        </Box>
        <Box id="about-me">
          <Box display={"flex"}>
            <Box>
              <Heading
                as="h2"
                variant="section-title"
                mb={6}
                fontSize={["3xl", null, "3.5xl", null, null, null]}
                color={headingColor[colorMode]}
              >
                / about me
              </Heading>
              <Box fontSize={["sm", null, "md", null, null, null]}>
                <BioSection>
                  <BioYear>1998</BioYear>
                  <Paragraph>Born in Milan, Italy.</Paragraph>
                </BioSection>
                <BioSection>
                  <BioYear>2016</BioYear>
                  <Paragraph>
                    Diploma in Computer Science. Final grade 84%.
                  </Paragraph>
                </BioSection>
                <BioSection>
                  <BioYear>2017</BioYear>
                  <Paragraph>
                    Moved to Newcastle upon Tyne, United Kingdom.
                  </Paragraph>
                </BioSection>
                <BioSection>
                  <BioYear>2022</BioYear>
                  <Paragraph>
                    Bsc in Computer Science with Artificial Intelligence at
                    Northumbria University. Achieved a first classification
                    degree.
                  </Paragraph>
                </BioSection>
              </Box>
            </Box>
            <Box
              mt={10}
              ml={5}
              display={["none", "none", "inline-block", null, null]}
            >
              <Image
                boxShadow={componentsBoxShadow[colorMode]}
                maxWidth={[null, null, "180px", "200px", null]}
                borderRadius="full"
                src="/images/profile.jpg"
                alt="Profile Image"
              />
            </Box>
          </Box>
          <Box fontSize={["sm", null, "md", null, null, null]} pt={8}>
            <Paragraph>
              Here are some of the technologies I have been working with:
            </Paragraph>
            <Box display="flex" justifyContent={"center"}>
              <Box
                display="flex"
                justifyContent={"space-around"}
                width={"100%"}
              >
                <List spacing={1} pt={4} pb={8}>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>Python</Paragraph>
                  </ListItem>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>Java</Paragraph>
                  </ListItem>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>HTML & CSS</Paragraph>
                  </ListItem>
                </List>
                <List spacing={1} pt={4} pb={8}>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>Tensorflow</Paragraph>
                  </ListItem>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>MATLAB</Paragraph>
                  </ListItem>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>Keras</Paragraph>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Paragraph>
              Outside of work, I&apos;m interested in following the advancements
              of science related fields. I also play a lot of video games and
              read productivity aimed books or articles.
            </Paragraph>
          </Box>
        </Box>
        <Box id="experience">
          <Heading
            as="h2"
            variant="section-title"
            mb={6}
            fontSize={["3xl", null, "3.5xl", null, null, null]}
            color={headingColor[colorMode]}
          >
            / experience
          </Heading>
          <Tabs
            variant="unstyled"
            display="flex"
            flexDirection={"column"}
            alignItems={"flex-start"}
          >
            <TabList flexDirection={"row"}>
              <Tab
                as={motion.div}
                fontSize={["md", null, "lg", null, null, null]}
                mr={4}
                //pointerEvents="auto"
                cursor="pointer"
                userSelect="none"
                color={tabButtonColor[colorMode]}
                bg={tabButtonBgColor[colorMode]}
                _selected={{
                  borderColor: contentButtonBorderColor[colorMode],
                }}
                border={"2px solid"}
                borderColor={"rgba(0, 0, 0, 0)"}
                borderWidth={"0 0 2px 0"}
                whileHover={{ scale: 1.1 }}
              >
                DDX
              </Tab>
            </TabList>
            <TabPanels fontSize={["sm", null, "md", null, null, null]} pl={2}>
              <TabPanel pl={0} pr={0} pb={0}>
                <Heading
                  as="h3"
                  fontSize={["xl", null, "2xl", null, null, null]}
                >
                  <Highlight
                    query="DDX"
                    styles={{
                      color: headingColor[colorMode],
                    }}
                  >
                    Software Developer Intern @ DDX
                  </Highlight>
                </Heading>
                <Paragraph as="em">Sep 2017 - Nov 2017</Paragraph>
                <List spacing={4} pt={4}>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>
                      Learnt the company’s own C derived programming language
                      within 2 weeks.
                    </Paragraph>
                  </ListItem>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>
                      Developed and debugged CNC programs while considering
                      customers’ needs and efficiently meeting their
                      requirements.
                    </Paragraph>
                  </ListItem>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>
                      Resolved customers’ enquiries orally and in writing, and
                      provided remote technical assistance.
                    </Paragraph>
                  </ListItem>
                </List>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box id="creations">
          <Heading
            as="h2"
            variant="section-title"
            mb={6}
            fontSize={["3xl", null, "3.5xl", null, null, null]}
            color={headingColor[colorMode]}
          >
            / creations
          </Heading>
          <Creations />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          fontSize={"xs"}
        >
          <Paragraph>Built and designed by Roberto Nacu.</Paragraph>
          <Paragraph>All rights reserved. ©</Paragraph>
        </Box>
      </Stack>
    </Container>
  );
}
