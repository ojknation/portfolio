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
import { motion, useScroll, useTransform } from "framer-motion"
import Blobs from "./Blobs"
import { easeVariants, letter, sentence } from "./motionVariants"
import Projects from "./Projects"
import { BsChevronDoubleDown } from "react-icons/bs"
import { TbArrowDown } from "react-icons/tb"
import { BsFullscreen } from "react-icons/bs"
import { BiCollapseAlt } from "react-icons/bi"
import { FaStarOfLife } from "react-icons/fa"
import useFullscreenStatus from "@/hooks/useFullscreenStatus"

const textToAnimate = [`Play by the rules,`, `but be ferocious.`]

const LandingPage = () => {
  const sectionBRef = useRef<HTMLDivElement>(null)
  const sectionCRef = useRef<HTMLDivElement>(null)
  const fullscreenRef = useRef<HTMLDivElement>(null)

  const [isSmallScreen] = useMediaQuery("(max-width: 833px)")

  const { isFullscreen, setFullscreen } = useFullscreenStatus(fullscreenRef)

  const { scrollYProgress } = useScroll()
  // const bgTweak = useTransform(
  //   scrollYProgress,
  //   [0, 50, 100],
  //   ["#090b2a", "#061313", "#272643"]
  // )
  const xSlideL = useTransform(scrollYProgress, [0, 1], [0, -400])
  const xSlideR = useTransform(scrollYProgress, [0, 1], [0, 400])

  return (
    <Box
      sx={{
        // bg: "brand.mink",
        color: "#fff",
        overflowY: "scroll",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      ref={fullscreenRef}
    >
      <motion.div>
        <Box pos="relative" bg="brand.bg">
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
                        fontSize={{ base: "3rem", md: "4rem", xl: "6rem" }}
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
                  style={{
                    x: xSlideR,
                  }}
                >
                  <Text
                    width="350px"
                    mt="45px"
                    mb="50px"
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    vel pariatur quaerat beatae voluptatem, officiis aspernatur
                    necessitatibus recusandae omnis nam assumenda placeat libero
                    magni eos animi deserunt quos, tenetur quod?
                  </Text>
                </MotionBox>
                <Box
                  as={motion.div}
                  justifyContent="start"
                  // mt="5%"
                  alignItems="center"
                  // height="100%"
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
                    "&::-webkit-user-select": "none",
                    "&::-ms-user-select": "none",
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
                              "-webkit-text-fill-color": "transparent",
                              "-webkit-text-stroke-width": isSmallScreen
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
                              "-webkit-text-fill-color": "transparent",
                              "-webkit-text-stroke-width": isSmallScreen
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
                  style={{
                    x: xSlideL,
                  }}
                >
                  <Text
                    width="350px"
                    mt="45px"
                    mb="50px"
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    vel pariatur quaerat beatae voluptatem, officiis aspernatur
                    necessitatibus recusandae omnis nam assumenda placeat libero
                    magni eos animi deserunt quos, tenetur quod?
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
            <Box position="absolute" sx={{ bottom: 40, right: 10 }}>
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
        >
          <Blobs />
          <Box
            px="10%"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            // pr="10%"
            sx={{
              width: "inherit",
              height: "inherit",
              background: "rgb(0, 0, 0, 0.7)",
              // background: "rgb(255, 255, 255, 0.41)",
              boxShadow: "0 4px 30px rgb(0, 0, 0, 0.1)",
              backdropFilter: "blur(90px)",
            }}
          >
            <MotionBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              pt={{ base: "30px", md: "4%" }}
            >
              <Text
                mb={2}
                fontSize={{ base: "18px", md: "30px" }}
                lineHeight="shorter"
                fontWeight="bold"
                maxInlineSize="60ch"
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
                  {`👋 Hello world. I'm Boluwatife,`}
                </Highlight>
                <br />
                {` a software
                    engineer with a keen focus on crafting seamless and visually
                    stunning user interfaces. I specialize in harnessing the
                    power of React, TypeScript, and Node.js to bring digital
                    experiences to life.`}
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
                fontSize={{ base: "18px", md: "30px" }}
                lineHeight="shorter"
              >
                {`🚀 With a wealth of experience in the dynamic world of web development, 
                I've honed my skills in architecting and optimizing frontend systems that deliver seamless user experiences.
                 From building scalable web applications to ensuring pixel-perfect rendering, I thrive on the challenges that frontend engineering presents.`}
              </Text>
            </MotionBox>
            <Box mt={{ base: "25px", md: "50px" }} mb="10%">
              <MotionBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                initial="offscreen"
                whileInView="onscreen"
                variants={easeVariants.slideUp}
                zIndex={3}
                pos="relative"
              >
                <Heading
                  mb={2}
                  fontSize={{ base: "20px", md: "2.9rem" }}
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
              >
                <Heading
                  whiteSpace="nowrap"
                  mb={2}
                  fontSize={{ base: "20px", md: "2.9rem" }}
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
              >
                <Heading
                  // whiteSpace="nowrap"
                  mb={2}
                  fontSize={{ base: "20px", md: "2.9rem" }}
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
                  y: [-40, 0],
                  scale: [1.2, 1],
                  transition: {
                    duration: 1.6,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    delay: 0.5,
                    // ease: "linear",
                  },
                }}
                whileHover={{ scale: 1.2 }}
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
      </motion.div>
      <Projects />
      <div ref={sectionCRef} />
    </Box>
  )
}

export default LandingPage
