import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  Link,
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

import { ChevronRightIcon, ChatIcon } from "@chakra-ui/icons";

import Typed from "react-typed";

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
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Stack
        spacing={20}
        m="0 auto 1rem auto"
        maxWidth="700px"
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
            <Box display="flex" zIndex={0}>
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
                  query={[""]}
                  styles={{
                    fontWeight: "600",
                    color: highlightColor[colorMode],
                  }}
                >
                  I&apos;m a Software Engineer based in Newcastle upon Tyne,
                  curious about how technology can solve complex problems. I
                  have a passion for backend development and cloud solutions,
                  but I&apos;m equally fascinated by machine learning, computer
                  vision, and full-stack development.
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
                  <Box as={motion.div} whileHover={{ scale: 1.05 }} mt={8}>
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
                    Completed studies at P. Paleocapa in Bergamo and earned a
                    Diploma di Stato in Computer Science.
                  </Paragraph>
                </BioSection>
                <BioSection>
                  <BioYear>2017</BioYear>
                  <Paragraph>
                    Moved to Newcastle upon Tyne, United Kingdom.
                  </Paragraph>
                </BioSection>
                <BioSection>
                  <BioYear>2020</BioYear>
                  <Paragraph>
                    Studied at Nagoya University of Foreign Studies in Japan,
                    fulfulling one of my long-held dreams.
                  </Paragraph>
                </BioSection>
                <BioSection>
                  <BioYear>2022</BioYear>
                  <Paragraph>
                    Graduated from Northumbria University with a First Class
                    Honours in Computer Science with AI.
                  </Paragraph>
                </BioSection>
                <BioSection>
                  <BioYear>2023</BioYear>
                  <Paragraph>
                    Began my journey as a Software Engineer.
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
              Outside of work, I actively engage with the latest developments in
              science and art, staying up to date with advancements in these
              fields. Alongside that, I enjoy playing video games and
              discovering productivity hacks.
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
                _focus={{
                  boxShadow: "none",
                }}
              >
                ONS
              </Tab>
              <Tab
                as={motion.div}
                fontSize={["md", null, "lg", null, null, null]}
                mr={4}
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
                _focus={{
                  boxShadow: "none",
                }}
              >
                AMS
              </Tab>
              <Tab
                as={motion.div}
                fontSize={["md", null, "lg", null, null, null]}
                mr={4}
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
                _focus={{
                  boxShadow: "none",
                }}
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
                    query="Office for National Statistics"
                    styles={{
                      color: headingColor[colorMode],
                    }}
                  >
                    Software Engineer @ Office for National Statistics
                  </Highlight>
                </Heading>
                <Paragraph textTransform="uppercase">
                  Oct 2023 - Present
                </Paragraph>
                <List spacing={4} pt={4}>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>In progress...</Paragraph>
                  </ListItem>
                </List>
              </TabPanel>
              <TabPanel pl={0} pr={0} pb={0}>
                <Heading
                  as="h3"
                  fontSize={["xl", null, "2xl", null, null, null]}
                >
                  <Highlight
                    query="Alexander Mann Solutions"
                    styles={{
                      color: headingColor[colorMode],
                    }}
                  >
                    Software Engineering Trainee @ Alexander Mann Solutions
                  </Highlight>
                </Heading>
                <Paragraph textTransform="uppercase">
                  Jul 2023 - Sep 2023
                </Paragraph>
                <List spacing={4} pt={4}>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>
                      Completed an intensive 3-month training program, gaining
                      experience in Python, Git, Docker, Terraform, AWS, Linux,
                      and CI/CD principles.
                    </Paragraph>
                  </ListItem>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>
                      Graduated at the top of the cohort, securing a Software
                      Engineering role at the Office for National Statistics,
                      with exceptional performance in both{" "}
                      <Link
                        href="https://github.com/1391819/SFIA-CRUD-core-project"
                        target="_blank"
                        color={headingColor[colorMode]}
                      >
                        individual
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="https://github.com/1391819/Codebusters"
                        target="_blank"
                        color={headingColor[colorMode]}
                      >
                        group-based
                      </Link>{" "}
                      projects.
                    </Paragraph>
                  </ListItem>
                </List>
              </TabPanel>
              <TabPanel pl={0} pr={0} pb={0}>
                <Heading
                  as="h3"
                  fontSize={["xl", null, "2xl", null, null, null]}
                >
                  <Highlight
                    query="DDX Software Solutions"
                    styles={{
                      color: headingColor[colorMode],
                    }}
                  >
                    Software Developer Intern @ DDX Software Solutions
                  </Highlight>
                </Heading>
                <Paragraph textTransform="uppercase">
                  Sep 2017 - Nov 2017
                </Paragraph>
                <List spacing={4} pt={4}>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>
                      Provided remote technical support for CNC software,
                      addressing toolpath optimisation, calibration, and G-code
                      interpretation, achieving a 100% satisfaction rate with
                      domestic and international clients.
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
