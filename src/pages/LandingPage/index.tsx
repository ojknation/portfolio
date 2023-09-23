/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable unused-imports/no-unused-vars */
import { MotionBox } from "@/reuseables"
import GlassTint from "@/reuseables/GlassTint"

import {
  Box,
  Button,
  Container,
  Heading,
  Highlight,
  Text,
} from "@chakra-ui/react"
import { motion, useScroll, useTransform } from "framer-motion"
import Blobs from "./Blobs"
import {
  easeVariants,
  letter,
  marqueeVariants,
  // marqueeVariants,
  sentence,
} from "./motionVariants"
import Projects from "./Projects"
import { BsChevronDoubleDown } from "react-icons/bs"
import { useRef } from "react"

const textToAnimate = [`Play by the rules,`, `but be ferocious.`]

const LandingPage = () => {
  const sectionBRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, 60])
  const bgTweak = useTransform(
    scrollYProgress,
    [0, 50, 100],
    ["#090b2a", "#061313", "#272643"]
  )
  const xSlideL = useTransform(scrollYProgress, [0, 1], [0, -400])
  const xSlideR = useTransform(scrollYProgress, [0, 1], [0, 400])

  return (
    <Box
      sx={{
        bg: "brand.mink",
        color: "#fff",
        overflowY: "scroll",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <motion.div
        style={{
          background: bgTweak,
        }}
      >
        <Box pos="relative" bg="brand.bg">
          <Blobs />

          <GlassTint
            variant="smooth"
            sx={{
              width: "inherit",
              height: "inherit",
            }}
          >
            <Box height="100vh">
              <Box height="100%">
                <Box
                  as={motion.div}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  style={{ x }}
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
                      delay: 5,
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
                <Box
                  as={motion.div}
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                  display="flex"
                  // maxW="md"
                  initial={{
                    opacity: 0,
                    y: 200,
                  }}
                  animate={{
                    opacity: [0, 0.4, 0.8, 1],
                    y: 0,
                    transition: {
                      duration: 1.2,
                      delay: 4,
                    },
                  }}
                >
                  <Text
                    fontSize="18px"
                    fontWeight="bold"
                    // lineHeight={0.9}
                  >
                    {`
                    Hello there! I'm OJK, 
                    `}
                  </Text>
                </Box>
              </Box>
            </Box>
            <MotionBox
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.8 }}
              position="absolute"
              bottom={20}
              left="50%"
              // sx={{
              //   transform: "translateX(-50%)",
              // }}
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
                  sectionBRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See More
              </Button>
            </MotionBox>
          </GlassTint>
        </Box>

        <Box
          ref={sectionBRef}
          pl="10%"
          pr="10%"
          bg="brand.mink"
          position="relative"
          color="Text.dark"
          minHeight="60vh"
        >
          <MotionBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            pt={{ base: "60px", md: "4%" }}
            // maxW="xl"

            // style={{ x: xSlideL }}
          >
            <Text
              mb={2}
              fontSize={{ base: "18px", md: "30px" }}
              lineHeight="shorter"
              fontWeight="bold"
              maxInlineSize="60ch"
            >
              <Highlight
                query={["Hey"]}
                styles={{
                  border: "1px solid #9400D3",
                  padding: "2px",
                  borderRadius: "16px",
                  borderTopRadius: "60%",
                }}
              >
                {`👋 Hey nice to meet you. I'm Boluwatife,`}
              </Highlight>
              <br />
              <Highlight
                query={["React", "Typescript", "Node.js", "3 years"]}
                styles={{
                  border: "1px solid #0a0000",
                  padding: "2px",
                  borderRadius: "16px",
                  borderTopRadius: "60%",
                }}
              >
                {` a software
                    engineer with a keen focus on crafting seamless and visually
                    stunning user interfaces. I specialize in harnessing the
                    power of React, TypeScript, and Node.js to bring digital
                    experiences to life.`}
              </Highlight>
            </Text>
          </MotionBox>
          <MotionBox
            mt={{ base: "20px", md: "50px" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            // style={{ x: xSlideR }}
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
              <Highlight
                query={["optimizing", "pixel-perfect", "challenges"]}
                styles={{
                  border: "1px solid #0a0000",
                  padding: "2px",
                  borderRadius: "16px",
                  borderTopRadius: "60%",
                }}
              >
                {`🚀 With a wealth of experience in the dynamic world of web development, 
                I've honed my skills in architecting and optimizing frontend systems that deliver seamless user experiences.
                 From building scalable web applications to ensuring pixel-perfect rendering, I thrive on the challenges that frontend engineering presents.`}
              </Highlight>
            </Text>
          </MotionBox>
          <Box mt={{ base: "20px", md: "40px" }} mb="10%">
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
                fontSize={{ base: "20px", md: "3.5rem" }}
                lineHeight="shorter"
              >
                <Highlight
                  query={["love"]}
                  styles={{
                    color: "Text.dark",
                    background: "white",
                    border: "1px solid #f91d78",
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
              mt={{ base: "5px", md: "20px" }}
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
                fontSize={{ base: "20px", md: "3.5rem" }}
                lineHeight="shorter"
              >
                <Highlight
                  query={["boundaries"]}
                  styles={{
                    color: "Text.dark",
                    border: "2px solid #fe0606",
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
              mt={{ base: "5px", md: "20px" }}
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
                fontSize={{ base: "20px", md: "3.5rem" }}
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
        </Box>

        {/* <MotionBox
          whiteSpace="nowrap"
          variants={marqueeVariants}
          animate="container"
          pos="relative"
          marginBottom="90px"
        >
          <MotionBox
            as="h1"
            sx={{
              textTransform: "upperCase",
              fontSize: { base: "4rem", md: "6rem", xl: "8rem" },
              "-webkit-text-fill-color": "transparent",
              "-webkit-text-stroke-width": "8px",
            }}
            variants={marqueeVariants}
            animate="text"
            fontFamily="monospace"
          >
            streams tournaments teams fun games live news tours
          </MotionBox>
        </MotionBox> */}
      </motion.div>
      <Projects />
    </Box>
  )
}

export default LandingPage
