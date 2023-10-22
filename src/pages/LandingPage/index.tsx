/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable unused-imports/no-unused-vars */
import { useRef } from "react"
import { MotionBox } from "@/reuseables"
import GlassTint from "@/reuseables/GlassTint"

import {
  Box,
  Button,
  Heading,
  Highlight,
  IconButton,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import Blobs from "../../reuseables/Blobs"
import { easeVariants, letter, sentence } from "../../reuseables/motionVariants"
import Projects from "./Projects"
import { BsChevronDoubleDown } from "react-icons/bs"
import { TbArrowDown } from "react-icons/tb"
import { BsFullscreen } from "react-icons/bs"
import { BiCollapseAlt } from "react-icons/bi"
import { FaStarOfLife } from "react-icons/fa"
import useFullscreenStatus from "@/hooks/useFullscreenStatus"

const textToAnimate = [`Play by the rules,`, `but seek to improve the game.`]

const LandingPage = () => {
  const sectionARef = useRef<HTMLDivElement>(null)
  const sectionBRef = useRef<HTMLDivElement>(null)
  const sectionCRef = useRef<HTMLDivElement>(null)
  const fullscreenRef = useRef<HTMLDivElement>(null)

  const [isSmallScreen] = useMediaQuery("(max-width: 833px)")

  const { isFullscreen, setFullscreen } = useFullscreenStatus(fullscreenRef)

  return (
    <Box
      sx={{
        color: "#fff",
        overflowY: "scroll",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollBehavior: "smooth",
      }}
      height="100vh"
      scrollSnapType="y mandatory"
      ref={fullscreenRef}
    >
      <div>
        <Box
          ref={sectionARef}
          pos="relative"
          bg="brand.bg"
          maxH="100vh"
          overflow="hidden"
          scrollSnapAlign="center"
          scrollSnapStop="always"
        >
          <Blobs />

          <GlassTint
            variant="smooth"
            sx={{
              width: "inherit",
              height: "inherit",
              background: "rgb(0, 0, 0, 0.7)",
            }}
          >
            <Box height="100dvh">
              <Box height="100%">
                <Box
                  as={motion.div}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  initial={{ opacity: 1, y: 0, x: 0, scale: 1, height: "100%" }}
                  viewport={{ once: true }}
                  animate={{
                    opacity: 0,
                    scale: 0.8,
                    y: [20, -200],
                    height: ["100%", "0%"],
                    transition: {
                      duration: 1,
                      ease: "easeInOut",
                      delay: 4,
                    },
                    transitionEnd: {
                      display: "none",
                    },
                  }}
                >
                  <MotionBox
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                    maxWidth="lg"
                  >
                    {textToAnimate[0].split("").map((char, index) => (
                      <Heading
                        key={char + "-" + index}
                        as={motion.span}
                        variants={letter}
                        fontSize={{ base: "3.5rem", xl: "6rem" }}
                        fontWeight="bold"
                        lineHeight={0.9}
                      >
                        {char}
                      </Heading>
                    ))}
                    <br />
                    {textToAnimate[1].split("").map((char, index) => (
                      <Heading
                        key={char + "-" + index}
                        as={motion.span}
                        variants={letter}
                        fontSize={{ base: "16px", lg: "24px" }}
                      >
                        {char}
                      </Heading>
                    ))}
                  </MotionBox>
                </Box>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="end"
                >
                  <Button
                    as={motion.div}
                    variant="app-iconButton"
                    size="sm"
                    width="fit-content"
                    cursor="pointer"
                    whileHover={{
                      backgroundColor: "#fff",
                      color: "#090b2a",
                      scale: 1.02,
                      transition: {
                        duration: 0.1,
                      },
                    }}
                    onClick={() =>
                      sectionBRef.current?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    About
                  </Button>
                  <Button
                    as={motion.div}
                    variant="app-iconButton"
                    size="sm"
                    width="fit-content"
                    cursor="pointer"
                    whileHover={{
                      backgroundColor: "#fff",
                      color: "#090b2a",
                      scale: 1.02,
                      transition: {
                        duration: 0.1,
                      },
                    }}
                    onClick={() =>
                      sectionCRef.current?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    Projects
                  </Button>
                </Stack>
                <MotionBox
                // style={{
                //   x: xSlideR,
                // }}
                >
                  <Text
                    width="350px"
                    mt="45px"
                    mb="50px"
                    fontSize={{ base: "14px" }}
                  >
                    My name is <strong>Adekola-Ojo Boluwatife </strong>(OJK), I
                    am a software engineer who is deeply fascinated by systems.
                    I derive great pleasure from engineering the interaction of
                    processes and data to solve problems.
                    <br /> Currently, I work as a Software Engineer at{" "}
                    <strong>Prunedge.</strong>
                  </Text>
                </MotionBox>
                <Box
                  as={motion.div}
                  justifyContent="start"
                  alignItems="center"
                  height="fit-content"
                  display="flex"
                  initial={{
                    opacity: 0,
                    y: 200,
                  }}
                  animate={{
                    opacity: [0, 1],
                    y: 0,
                    transition: {
                      duration: 1.2,
                      delay: 4,
                    },
                  }}
                  sx={{
                    userSelect: "none",
                    "&::WebkitUserSelect": "none",
                    "&::MsUserSelect": "none",
                  }}
                >
                  <Box>
                    <Stack
                      direction="row"
                      spacing={4}
                      as={motion.div}
                      whiteSpace="nowrap"
                      animate={{
                        x: isSmallScreen ? [0, -1300] : [0, -2300],
                        transition: {
                          duration: isSmallScreen ? 14 : 25,
                          repeat: Infinity,
                          repeatType: "loop",
                          delay: 0.5,
                          ease: "linear",
                        },
                      }}
                    >
                      {[
                        "Nodejs",
                        "Typescript",
                        "React",
                        "Postgres",
                        "MongoDB",
                        "Prisma",
                        "Nextjs",
                        "Firebase",
                        "GraphQL",
                        "Express",
                        "TailwindCSS",
                      ].map((skill, index, arr) => (
                        <Stack key={index} direction="row" alignItems="center">
                          <Text
                            fontSize={{ base: "4rem", md: "5rem", xl: "8rem" }}
                            fontWeight="bold"
                            lineHeight={0.9}
                            px={2}
                            sx={{
                              WebkitTextFillColor: "transparent",
                              WebkitTextStrokeWidth: isSmallScreen
                                ? "2px"
                                : "4px",
                            }}
                          >
                            {skill}
                          </Text>
                          {index < arr.length - 1 && <FaStarOfLife />}
                        </Stack>
                      ))}
                    </Stack>
                    <Stack
                      mt="20px"
                      direction="row"
                      spacing={4}
                      as={motion.div}
                      whiteSpace="nowrap"
                      animate={{
                        x: isSmallScreen ? [-1300, 0] : [-2300, 0],
                        transition: {
                          duration: isSmallScreen ? 14 : 25,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "linear",
                        },
                      }}
                    >
                      {[
                        "Prisma",
                        "Nextjs",
                        "Firebase",
                        "GraphQL",
                        "Express",
                        "TailwindCSS",
                        "Nodejs",
                        "Typescript",
                        "React",
                        "Postgres",
                        "MongoDB",
                      ].map((skill, index, arr) => (
                        <Stack key={index} direction="row" alignItems="center">
                          <Text
                            fontSize={{ base: "4rem", md: "5rem", xl: "8rem" }}
                            fontWeight="bold"
                            lineHeight={0.9}
                            px={2}
                            sx={{
                              WebkitTextFillColor: "transparent",
                              WebkitTextStrokeWidth: isSmallScreen
                                ? "2px"
                                : "4px",
                            }}
                          >
                            {skill}
                          </Text>
                          {index < arr.length - 1 && <FaStarOfLife />}
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Box>
                <MotionBox
                  display="flex"
                  justifyContent="flex-end"
                  // style={{
                  //   x: xSlideL,
                  // }}
                >
                  <Text
                    width="350px"
                    mt="45px"
                    mb="50px"
                    fontSize={{ base: "14px" }}
                  >
                    My primary tech stack and area of expertise is within the
                    <strong> JavaScript/TypeScript</strong> ecosystem. However,
                    my experience extends to other languages and frameworks such
                    as C# WPF/.NET, Java for Android development, and Python
                    scripting. I am confident in my ability to{" "}
                    <strong>learn</strong> and <strong>adapt </strong>
                    to new technologies <strong>swiftly</strong>.
                  </Text>
                </MotionBox>
              </Box>
            </Box>
            <MotionBox
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.8 }}
              position="absolute"
              bottom={isSmallScreen ? 40 : 20}
              left="50%"
              initial={{
                opacity: 0,
                y: -20,
                x: "-50%",
              }}
              animate={{
                opacity: [0, 0.8, 1],
                y: 0,
                x: "-50%",
                transition: {
                  duration: 1.2,
                  delay: 6,
                },
              }}
            >
              <Button
                variant="app-iconButton"
                width="fit-content"
                rightIcon={<BsChevronDoubleDown />}
                onClick={() =>
                  sectionBRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                See More
              </Button>
            </MotionBox>
          </GlassTint>
          {!isSmallScreen && (
            <Box position="absolute" sx={{ bottom: 20, left: 10 }}>
              <IconButton
                as={motion.div}
                whileHover={{ scale: 1.3 }}
                boxSize={8}
                cursor="pointer"
                variant="app-iconButton"
                aria-label="fullscreen toggle"
                icon={isFullscreen ? <BiCollapseAlt /> : <BsFullscreen />}
                onClick={
                  isFullscreen ? () => document.exitFullscreen() : setFullscreen
                }
              />
            </Box>
          )}
        </Box>

        <Box
          ref={sectionBRef}
          position="relative"
          color="#fff"
          background="transparent"
          overflow="hidden"
          bg="brand.bg"
          scrollSnapAlign="center"
          scrollSnapStop="always"
        >
          <Blobs />
          <Box
            px="10%"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100dvh"
            sx={{
              width: "inherit",
              height: "inherit",
              background: "rgb(0, 0, 0, 0.7)",
              boxShadow: "0 4px 30px rgb(0, 0, 0, 0.1)",
              backdropFilter: "blur(90px)",
            }}
          >
            <MotionBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              pt={{ base: "30px", md: "4%" }}
              initial="offscreen"
              whileInView="onscreen"
              variants={easeVariants.slideUp}
              viewport={{ once: false }}
            >
              <Text
                mb={2}
                fontSize={{ base: "18px", md: "24px" }}
                lineHeight="shorter"
                fontWeight="bold"
                maxInlineSize="60ch"
                textAlign="center"
              >
                <Highlight
                  query={["Hello"]}
                  styles={{
                    border: "1px solid #9400D3",
                    background: "white",
                    padding: "2px",
                    borderRadius: "16px",
                    borderTopRadius: "60%",
                  }}
                >
                  {`👋 Hello there, I'm Boluwatife,`}
                </Highlight>
                <br />
                {`a software engineer passionate about 
                crafting seamless and visually stunning user interfaces. I specialize 
                in using React, TypeScript, and Node.js to bring digital experiences to life.`}
              </Text>
            </MotionBox>
            <MotionBox
              mt={{ base: "20px", md: "50px" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              initial="offscreen"
              whileInView="onscreen"
              variants={easeVariants.slideUp}
              viewport={{ once: false }}
            >
              <Text
                mb={2}
                fontSize={{ base: "18px", md: "24px" }}
                lineHeight="shorter"
                maxInlineSize="80ch"
                textAlign="center"
              >
                {`🚀 With a wealth of experience in the dynamic world of web development, 
                I've honed my skills in architecting and optimizing systems that deliver seamless user experiences.
                 From building scalable web applications to ensuring pixel-perfect rendering, I embrace the challenges that come with creating solutions.`}
              </Text>
            </MotionBox>
            <Box
              mt={{ base: "25px", md: "50px" }}
              mb={{ base: "10%", md: "5%" }}
            >
              <MotionBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                initial="offscreen"
                whileInView="onscreen"
                variants={easeVariants.slideUp}
                zIndex={3}
                pos="relative"
                viewport={{ once: false }}
              >
                <Heading
                  mb={2}
                  fontSize={{ base: "20px", md: "2.2rem" }}
                  lineHeight="shorter"
                >
                  <Highlight
                    query={["love"]}
                    styles={{
                      color: "Text.dark",
                      background: "white",
                      border: "1px solid #f91d78",
                      padding: "8px",
                      borderRadius: "30%",
                      borderTopRadius: "60%",
                      borderRightRadius: "60%",
                    }}
                  >
                    I really love solving problems,
                  </Highlight>
                </Heading>
              </MotionBox>

              <MotionBox
                mt={{ base: "5px", md: "15px" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                initial="offscreen"
                whileInView="onscreen"
                variants={easeVariants.swooshOut}
                zIndex={3}
                pos="relative"
                viewport={{ once: false }}
              >
                <Heading
                  whiteSpace="nowrap"
                  mb={2}
                  fontSize={{ base: "20px", md: "2.2rem" }}
                  lineHeight="shorter"
                >
                  <Highlight
                    query={["boundaries"]}
                    styles={{
                      color: "Text.dark",
                      border: "2px solid #fe0606",
                      paddingRight: "18px",
                      borderRadius: "60%",
                      borderLeftRadius: 0,
                      background: "white",
                    }}
                  >
                    Pushing boundaries
                  </Highlight>
                </Heading>
              </MotionBox>
              <MotionBox
                mt={{ base: "5px", md: "15px" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontSize="2vw"
                initial="offscreen"
                whileInView="onscreen"
                variants={easeVariants.slideUp}
                viewport={{ once: false }}
              >
                <Heading
                  mb={2}
                  fontSize={{ base: "20px", md: "2.2rem" }}
                  lineHeight="shorter"
                >
                  <Highlight
                    query={["box"]}
                    styles={{
                      color: "Text.dark",
                      border: "2px solid #090b2a",
                      padding: "10px 10px 0px",
                      background: "brand.green",
                    }}
                  >
                    and thinking outside the box.
                  </Highlight>
                </Heading>
              </MotionBox>
            </Box>
            <Box
              mt={{ base: "15px", md: 0 }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton
                variant="app-iconButton"
                background="white"
                as={motion.div}
                animate={{
                  y: isSmallScreen ? [-40, 0] : [-50, -10],
                  scale: [1.2, 1],
                  transition: {
                    duration: 1.6,
                    repeat: Infinity,
                  },
                }}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.5 }}
                cursor="pointer"
                _hover={{ background: "white" }}
                _focus={{ background: "white" }}
                size="lg"
                border="1px solid #fff"
                borderRadius="50%"
                aria-label="add"
                viewport={{ once: true }}
                icon={<TbArrowDown color="#090b2a" />}
                onClick={() =>
                  sectionCRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              />
            </Box>
          </Box>
        </Box>
      </div>
      <Projects />
      <div ref={sectionCRef} />
    </Box>
  )
}

export default LandingPage
