/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable unused-imports/no-unused-vars */
import { ReactElement, useRef } from "react"
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
import { easeVariants } from "../../reuseables/motionVariants"
import Projects from "./Projects"
import { BsChevronDoubleDown } from "react-icons/bs"
import { BsFullscreen } from "react-icons/bs"
import { BiCollapseAlt } from "react-icons/bi"
import { FaStarOfLife } from "react-icons/fa"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { RiTwitterXFill } from "react-icons/ri"
import useFullscreenStatus from "@/hooks/useFullscreenStatus"
import Contact from "./Contact"
import { blurPerformance } from "@/theme/custom"

const colors = ["#FF1493", "#9400D3", "#7928CA", "#FF0080"]

const LandingPage = () => {
  const sectionARef = useRef<HTMLDivElement>(null)
  const sectionBRef = useRef<HTMLDivElement>(null)
  const sectionCRef = useRef<HTMLDivElement>(null)
  const sectionDRef = useRef<HTMLDivElement>(null)
  const fullscreenRef = useRef<HTMLDivElement>(null)

  const [isSmallScreen] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: true,
  })

  const { isFullscreen, setFullscreen } = useFullscreenStatus(fullscreenRef)

  const renderIcon = (icon: ReactElement, link: string) => (
    <IconButton
      boxSize={8}
      cursor="pointer"
      variant="app-iconButton"
      aria-label="social"
      as={motion.div}
      whileHover={{ scale: 1.02 }}
      icon={icon}
      size="md"
      onClick={() => window.open(link, "_blank")}
    />
  )

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
          height="100vh"
          overflow="hidden"
          scrollSnapAlign="start"
          scrollSnapStop="always"
        >
          {!isSmallScreen && <Blobs />}

          <GlassTint
            variant="smooth"
            sx={{
              width: "inherit",
              height: "inherit",
            }}
            background={{
              base: `linear-gradient(240deg, ${
                colors[Math.floor(Math.random() * colors.length)]
              } -150%, #090b2a 57%)`,
              md: "rgb(0, 0, 0, 0.7)",
            }}
            backdropFilter={{ base: "none", md: "blur(90px)" }}
            p={6}
            pt={{ base: 4, md: 6 }}
          >
            <Box
              display="flex"
              flexDir="column"
              gap="20px"
              height="90%"
              justifyContent="space-between"
            >
              {/* Nav */}
              <Stack
                // mb="20px"
                as={motion.div}
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                  },
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  {renderIcon(<BsGithub />, "https://github.com/ojknation")}
                  {renderIcon(
                    <BsLinkedin />,
                    "https://www.linkedin.com/in/boluwatife-adekola-ojo-936a9119b/"
                  )}
                  {renderIcon(
                    <RiTwitterXFill />,
                    "https://twitter.com/ojknation"
                  )}
                </Stack>
              </Stack>
              {/* center piece */}
              <Box display="flex" flexDir="column">
                {/* empty filler box */}
                <Box
                  as={motion.div}
                  width="100%"
                  initial={{ opacity: 1, height: "30%" }}
                  viewport={{ once: true }}
                  animate={{
                    opacity: 0.6,
                    height: ["30%", "0%"],
                    transition: {
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                    transitionEnd: {
                      display: "none",
                    },
                  }}
                />
                <MotionBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  gap="20px"
                  initial={{
                    opacity: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                    },
                  }}
                >
                  <MotionBox
                    display="flex"
                    justifyContent="flex-start"
                    width={{ base: "100%", md: "70%" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "linear",
                        delay: 0.2,
                      },
                    }}
                  >
                    <Text
                      width="350px"
                      fontSize={{
                        base: "14px",
                      }}
                    >
                      My name is <strong>Adekola-Ojo Boluwatife </strong>(OJK),
                      I am a <strong>software engineer</strong> who is deeply
                      fascinated by systems. Currently, I work as a Software
                      Engineer at{" "}
                      <strong>
                        <a
                          href="https://www.prunedge.com"
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "underline" }}
                        >
                          Prunedge.
                        </a>
                      </strong>
                      <br />
                      Outside of work, I enjoy listening to and making{" "}
                      <strong>music</strong>, <strong>laughing </strong>
                      with <strong>friends</strong> and{" "}
                      <strong>learning</strong> random things on the internet.
                    </Text>
                  </MotionBox>
                  <Box
                    display={{ base: "none", mm: "flex" }}
                    as={motion.div}
                    justifyContent="start"
                    alignItems="center"
                    height="fit-content"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.2,
                        ease: "linear",
                        delay: 0.6,
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
                            duration: isSmallScreen ? 35 : 45,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: 1,
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
                          "Linux",
                          "Prisma",
                          "Nextjs",
                          "Firebase",
                          "GraphQL",
                          "Docker",
                          "Express",
                          "TailwindCSS",
                        ].map((skill, index, arr) => (
                          <Stack
                            key={index}
                            direction="row"
                            alignItems="center"
                          >
                            <Text
                              fontSize={{
                                base: "4rem",
                                md: "5rem",
                                xl: "8rem",
                              }}
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
                            delay: 1,
                            ease: "linear",
                          },
                        }}
                      >
                        {[
                          "Linux",
                          "Prisma",
                          "Nextjs",
                          "Firebase",
                          "GraphQL",
                          "Docker",
                          "Express",
                          "TailwindCSS",
                          "Nodejs",
                          "Typescript",
                          "React",
                          "Postgres",
                          "MongoDB",
                        ].map((skill, index, arr) => (
                          <Stack
                            key={index}
                            direction="row"
                            alignItems="center"
                          >
                            <Text
                              fontSize={{
                                base: "4rem",
                                md: "5rem",
                                xl: "8rem",
                              }}
                              fontWeight="bold"
                              lineHeight={0.9}
                              px={2}
                              // sx={{
                              //   WebkitTextFillColor: "transparent",
                              //   WebkitTextStrokeWidth: isSmallScreen
                              //     ? "2px"
                              //     : "4px",
                              // }}
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
                    width={{ base: "100%", md: "70%" }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "linear",
                        delay: 0.2,
                      },
                    }}
                  >
                    <Text
                      width={{ base: "350px", lg: "400px" }}
                      fontSize={{ base: "14px", mm: "15px" }}
                    >
                      My primary tech stack and area of expertise is within the
                      <strong> JavaScript/TypeScript</strong> ecosystem.
                      However, my experience extends to other languages and
                      frameworks such as C# WPF/.NET, Java for Android
                      development, and Python scripting. I am confident in my
                      ability to <strong>learn</strong> and{" "}
                      <strong>adapt </strong>
                      to new technologies <strong>swiftly</strong>.
                    </Text>
                  </MotionBox>
                </MotionBox>
              </Box>
              {/* Bottom piece */}
              <MotionBox
                display={{ sm: "none", mm: "flex" }}
                justifyContent="center"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.8 }}
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: [0, 0.8, 1],
                  y: 0,
                  transition: {
                    duration: 1.2,
                    delay: 2,
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
            </Box>
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
          scrollSnapAlign="start"
          scrollSnapStop="always"
          sx={blurPerformance}
        >
          {!isSmallScreen && <Blobs />}
          <Box
            px="10%"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx={{
              width: "inherit",
              height: "inherit",
              backdropFilter: "blur(90px)",
            }}
            background={{
              base: `linear-gradient(240deg, ${
                colors[Math.floor(Math.random() * colors.length)]
              } -150%, #090b2a 57%)`,
              md: "rgb(0, 0, 0, 0.7)",
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              pt={{ base: "30px", md: "4%" }}
            >
              <Text
                mb={2}
                fontSize={{ base: "14px", mm: "16px", md: "24px" }}
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
            </Box>
            <MotionBox
              mt={{ base: "20px", md: "50px" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              initial="offscreen"
              whileInView="onscreen"
              variants={easeVariants.slideUp}
              viewport={{ once: true }}
            >
              <Text
                mb={2}
                fontSize={{ base: "14px", mm: "16px", md: "24px" }}
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
                viewport={{ once: true }}
              >
                <Heading
                  mb={2}
                  fontSize={{
                    base: "16px",
                    mm: "18px",
                    lm: "24px",
                    md: "2.2rem",
                  }}
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
                viewport={{ once: true }}
              >
                <Heading
                  whiteSpace="nowrap"
                  mb={2}
                  fontSize={{ base: "18px", lm: "24px", md: "2.2rem" }}
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
                viewport={{ once: true }}
              >
                <Heading
                  mb={2}
                  fontSize={{
                    base: "16px",
                    mm: "18px",
                    lm: "24px",
                    md: "2.2rem",
                  }}
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
              display={{ base: "none", mm: "flex" }}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="app-iconButton"
                width="fit-content"
                rightIcon={<BsChevronDoubleDown />}
                as={motion.div}
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: [0, 0.8, 1],
                  y: 0,
                  transition: {
                    duration: 1.2,
                    delay: 5,
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.5 }}
                cursor="pointer"
                onClick={() =>
                  sectionCRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Projects
              </Button>
            </Box>
          </Box>
        </Box>
        <div ref={sectionCRef} />
        <Projects />
        <Box
          ref={sectionDRef}
          position="relative"
          color="#fff"
          background="transparent"
          overflow="hidden"
          bg="brand.bg"
          scrollSnapAlign="start"
        >
          <Contact />
        </Box>
      </div>
    </Box>
  )
}

export default LandingPage
