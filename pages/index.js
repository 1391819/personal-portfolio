import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import {
  useColorMode,
  useColorModeValue,
  Heading,
  Box,
  Text,
  Flex,
  Stack,
  StackDivider,
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
  Divider,
  Button,
} from "@chakra-ui/react";

import Container from "../components/Container";
import { BioSection, BioYear } from "../components/Bio.js";
import Paragraph from "../components/Paragraph";
import { ChevronRightIcon, DownloadIcon, ChatIcon } from "@chakra-ui/icons";
import VoxelRaccoonLoader from "../components/voxel-raccoon-loader.js";
import Creations from "../components/Creations.js";
import ContactForm from "../components/ContactForm.js";
import { saveAs } from "file-saver";
import FadeIn from "../components/FadeIn.js";

// typewriter effect
import Typed from "react-typed";

// animations
import { motion /*useAnimation*/ } from "framer-motion";
import Section from "../components/Section.js";

//import { useInView } from "react-intersection-observer";
//import { useEffect } from "react";

// raccoon voxel
const LazyVoxelRaccoon = dynamic(
  () => import("../components/voxel-raccoon.js"),
  {
    ssr: false,
    loading: () => <VoxelRaccoonLoader />,
  }
);

export default function Home() {
  const { colorMode } = useColorMode();

  const headingColor = {
    light: "teal.500",
    dark: "teal.300",
  };

  const listIconsColor = {
    light: "red.400",
    dark: "teal.300",
  };

  const tabHoverBg = {
    light: "teal.500",
    dark: "teal.300",
  };

  const highlightBg = {
    light: "red.400",
    dark: "red.400",
  };

  const highlightColor = {
    light: "#171717",
    dark: "#f9f9f9",
  };

  const componentsBoxShadow = {
    light: "0 0 10px rgba(0, 0, 0, 0.15)",
    //dark: "0 5px 5px rgba(0, 0, 0, 0.2)",
    dark: "0 0 10px rgba(0, 0, 0, 0.15)",
  };

  const contentButtonColor = {
    light: "#171717",
    dark: "#f9f9f9",
  };

  const contentButtonBgColor = {
    light: "",
    dark: "",
  };

  const contentButtonHoverBg = {
    light: "teal.500",
    dark: "teal.300",
  };

  const contentButtonHoverColor = {
    light: "#f9f9f9",
    dark: "#f9f9f9",
  };

  const contentButtonBorderColor = {
    light: "teal.500",
    dark: "teal.300",
  };

  const contentButtonHoverBorderColor = {
    light: "",
    dark: "",
  };

  const router = useRouter();

  {
    /*

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  const control = useAnimation();
  const control2 = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
      console.log("inView", inView);
    } else {
      control.start("hidden");
      console.log("inView", inView);
    }
  }, [control, inView]);

  useEffect(() => {
    if (inView2) {
      control2.start("visible");
    } else {
      control2.start("hidden");
    }
  }, [control2, inView2]);

  */
  }

  const handleResumeDownload = () => {
    saveAs(
      "https://drive.google.com/uc?export=download&id=1F70unPq8qkB01ZCiDJSeK38K-WlYSn-9",
      "roberto-nacu.docx"
    );
  };

  return (
    <Container>
      <Head>
        <title>Roberto Nacu</title>
      </Head>
      <Stack
        zIndex="20"
        spacing={8}
        m="0 auto 1rem auto"
        maxWidth="700px"
        px={2}
      >
        // landing title
        <Box
          className="full-page-scroll-section"
          as="main"
          id="home"
          display="flex"
          flexDirection="column"
          alignItems="left"
          justifyContent="center"
          height="100vh"
        >
          <Section delay="0.3">
            <LazyVoxelRaccoon />
          </Section>
          <Section>
            <Heading as="h2" mt={20} mb={2} variant="page-title">
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
            <Paragraph>
              <Highlight
                query={[
                  //"multilingual artificial intelligence graduate",
                  "full-stack development",
                  "machine learning",
                  "human-computer interactions",
                ]}
                styles={{
                  fontWeight: "600",
                  color: highlightColor[colorMode],
                  //textDecoration: "underline",
                  //bg: highlightBg[colorMode],
                  //px: "2",
                  //py: "0.2",
                  //rounded: "full",
                }}
              >
                I'm a multilingual artificial intelligence graduate based in
                Newcastle upon Tyne. I have a great interest in full-stack
                development, machine learning, human-computer interactions, and
                everything in between.
              </Highlight>
            </Paragraph>
            <Section delay="0.6">
              <Box display="flex">
                <Box as={motion.div} whileHover={{ scale: 1.05 }} pr={4} mt={8}>
                  <Button
                    fontWeight={500}
                    aria-label="Contact me"
                    rightIcon={<ChatIcon />}
                    variant="outline"
                    borderRadius={"5px"}
                    _hover={{
                      color: contentButtonHoverColor[colorMode],
                      bg: contentButtonHoverBg[colorMode],
                      borderColor: contentButtonHoverBorderColor[colorMode],
                    }}
                    borderColor={contentButtonBorderColor[colorMode]}
                    color={contentButtonColor[colorMode]}
                    bg={contentButtonBgColor[colorMode]}
                    pointerEvents="auto"
                    onClick={() => router.push("mailto:roberto.nacu@gmail.com")}
                  >
                    Contact me
                  </Button>
                </Box>
                <Box as={motion.div} whileHover={{ scale: 1.05 }} mt={8}>
                  <Button
                    fontWeight={500}
                    aria-label="Download resume"
                    rightIcon={<DownloadIcon />}
                    variant="outline"
                    borderRadius={"5px"}
                    _hover={{
                      color: contentButtonHoverColor[colorMode],
                      bg: contentButtonHoverBg[colorMode],
                      borderColor: contentButtonHoverBorderColor[colorMode],
                    }}
                    borderColor={contentButtonBorderColor[colorMode]}
                    color={contentButtonColor[colorMode]}
                    bg={contentButtonBgColor[colorMode]}
                    pointerEvents="auto"
                    onClick={handleResumeDownload}
                  >
                    Resume
                  </Button>
                </Box>
              </Box>
            </Section>
          </Section>
        </Box>
        // different sections
        <Box
          className="full-page-scroll-section"
          id="about-me"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="100vh"
        >
          {/*
          <motion.div
            ref={ref}
            border="1px solid red"
            variants={variants}
            initial="hidden"
            animate={control}
            transition="5s"
          >*/}
          <FadeIn>
            <Box display={{ md: "flex" }}>
              <Box flexGrow={1}>
                <Box display="flex" alignItems="center">
                  <Heading
                    as="h3"
                    variant="section-title"
                    flex="1"
                    mb={2}
                    fontSize={"4xl"}
                    color={headingColor[colorMode]}
                  >
                    / about me
                  </Heading>
                  <Divider flex="1.3" />
                </Box>
                <Box pt={4}>
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
                  {/*
              <BioSection>
                <Box pl={"3.4em"} textAlign="justify">
                  Bsc in Computer Science with Artificial Intelligence at
                  Northumbria University. Achieved a first classification
                  degree. Bsc in Computer Science with Artificial Intelligence
                  at Northumbria University. Achieved a first classification
                  degree. Bsc in Computer Science with Artificial Intelligence
                  at Northumbria University. Achieved a first classification
                  degree. Bsc in Computer Science with Artificial Intelligence
                  at Northumbria University. Achieved a first classification
                  degree.
                </Box>
              </BioSection>
              */}
                </Box>
              </Box>
              <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                align="center"
              >
                <Image
                  boxShadow={"lg"} //{componentsBoxShadow[colorMode]}
                  maxWidth="200px"
                  display="inline-block"
                  borderRadius="full"
                  src="/images/profile.jpg"
                  alt="Profile Image"
                />
              </Box>
            </Box>
            <Box pt={8}>
              <Paragraph>
                Here are some of the technologies I have been working with:
              </Paragraph>
              <Box display="flex" justifyContent="flex-start">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  width={"40%"}
                >
                  <List spacing={1} pt={4} pb={4}>
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
                  <List spacing={1} pt={4} pb={4}>
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
                Outside of work, I'm interested in following the advancements of
                science related fields. I also play a lot of video games and
                read productivity aimed books or articles.
              </Paragraph>
            </Box>
          </FadeIn>
        </Box>
        <Box
          className="full-page-scroll-section"
          id="experience"
          display="flex"
          flexDirection="column"
          alignItems="left"
          justifyContent="center"
          height="100vh"
        >
          <FadeIn>
            <Box display="flex" alignItems="center">
              <Heading
                as="h3"
                variant="section-title"
                flex="1"
                mb={2}
                fontSize={"4xl"}
                color={headingColor[colorMode]}
              >
                / experience
              </Heading>
              <Divider flex="2" />
            </Box>
            <Tabs variant="unstyled" display="flex" alignItems="center">
              <TabList display="flex" flexDirection="column">
                <Tab
                  as={motion.div}
                  whileHover={{ scale: 1.1 }}
                  mb={2}
                  borderRight={"2px solid"}
                  borderColor={"rgba(0, 0, 0, 0)"}
                  pointerEvents="auto"
                  cursor="pointer"
                  userSelect="none"
                  color={contentButtonColor[colorMode]}
                  bg={contentButtonBgColor[colorMode]}
                  _selected={{
                    borderRight: "2px solid",
                    borderColor: contentButtonBorderColor[colorMode],
                    //color: contentButtonHoverColor[colorMode],
                    //bg: contentButtonHoverBg[colorMode],
                    //borderColor: contentButtonHoverBorderColor[colorMode],
                  }}
                  _hover={
                    {
                      //color: contentButtonHoverColor[colorMode],
                      //bg: contentButtonHoverBg[colorMode],
                      //borderColor: contentButtonHoverBorderColor[colorMode],
                    }
                  }
                >
                  DDX
                </Tab>
              </TabList>
              <TabPanels pl={2}>
                <TabPanel>
                  <Heading fontSize="2xl">
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
                  <List spacing={1} pt={4}>
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
          </FadeIn>
        </Box>
        <Box
          className="full-page-scroll-section"
          id="creations"
          display="flex"
          flexDirection="column"
          alignItems="left"
          justifyContent="center"
          height="100vh"
        >
          <FadeIn>
            <Box display="flex" alignItems="center">
              <Heading
                as="h3"
                variant="section-title"
                flex="1"
                mb={2}
                fontSize={"4xl"}
                color={headingColor[colorMode]}
              >
                / creations
              </Heading>
              <Divider flex="2.3" />
            </Box>
            <Creations />
          </FadeIn>
        </Box>
        {/*
        <Box
          id="contact-me"
          className="full-page-scroll-section"
          display="flex"
          flexDirection="column"
          alignItems="left"
          justifyContent="center"
          height="100vh"
        >
          <FadeIn>
            <Box display="flex" alignItems="center">
              <Heading
                as="h3"
                flex="1"
                mb={2}
                variant="section-title"
                fontSize={"4xl"}
                color={headingColor[colorMode]}
              >
                / contact me
              </Heading>
              <Divider flex="1.9" />
            </Box>
            <ContactForm />
          </FadeIn>
        </Box>
        */}
        <Box
          fontSize={"xs"}
          display="flex"
          flexDirection="column"
          alignItems="center"
          pt={0}
        >
          <Paragraph>Built and designed by Roberto Nacu.</Paragraph>
          <Paragraph>All rights reserved. ©</Paragraph>
        </Box>
      </Stack>
    </Container>
  );
}
