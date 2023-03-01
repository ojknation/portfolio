import { MotionBox } from "@/reuseables"
import GlassTint from "@/reuseables/GlassTint"

import {
  Box,
  //   Center,
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
  sentence,
} from "./motionVariants"
import Projects from "./Projects"

const textToAnimate = [
  `You know the business, and I know the chemistry. `,
  `I'm not saying you're not good at what you do.`,
  `I'm just saying I'm the guy you need
    to see if you want to stay ahead of the game.`,
]

const LandingPage = () => {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, 600])
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
        bg: "brand.bg",
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
        <Box pos="relative">
          <Blobs />

          <GlassTint
            variant="smooth"
            sx={{
              width: "inherit",
              height: "inherit",
            }}
          >
            <Container height="80vh" maxWidth="lg">
              <Box
                as={motion.div}
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                fontSize="20px"
                style={{ x }}
              >
                <MotionBox>
                  <MotionBox
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                  >
                    {textToAnimate[0].split("").map((char, index) => (
                      <Text
                        key={char + "-" + index}
                        as={motion.span}
                        variants={letter}
                      >
                        {char}
                      </Text>
                    ))}
                    <br />
                    {textToAnimate[1].split("").map((char, index) => (
                      <Text
                        key={char + "-" + index}
                        as={motion.span}
                        variants={letter}
                      >
                        {char}
                      </Text>
                    ))}
                    <br />
                    {textToAnimate[2].split("").map((char, index) => (
                      <Box
                        key={char + "-" + index}
                        as={motion.span}
                        variants={letter}
                      >
                        {char}
                      </Box>
                    ))}
                  </MotionBox>
                </MotionBox>
              </Box>
            </Container>
          </GlassTint>
        </Box>

        <Box bg="brand.bg" position="relative">
          <MotionBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            pl="10%"
            pr="10%"
            pt="4%"
            style={{ x: xSlideL }}
          >
            <Heading
              mb={2}
              size={{ base: "2xl", md: "2xl", xl: "4xl" }}
              lineHeight="shorter"
            >
              <Highlight query={["Hi"]} styles={{ color: "brand.primary" }}>
                {`Let's get into it. Hi I'm Boluwatife,`}
              </Highlight>
              <br />
              <Highlight
                query={["React", "Typescript", "nodejs"]}
                styles={{ color: "brand.accent" }}
              >
                {` a frontend engineer with experience in React, nodejs and Typescript and other technologies`}
              </Highlight>
            </Heading>
          </MotionBox>
          <MotionBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            pl="10%"
            pr="10%"
            mt="50px"
            style={{ x: xSlideR }}
            initial="offscreen"
            whileInView="onscreen"
            variants={easeVariants.slideUp}
            viewport={{ once: false }}
          >
            <Heading
              mb={2}
              size={{ base: "2xl", md: "3xl", xl: "4xl" }}
              lineHeight="shorter"
            >
              <Highlight
                query={["3", "years", "experience", "grade"]}
                styles={{ color: "brand.accent" }}
              >
                {` Over the Past 3 years, I have had a lot of experience building production grade UI's`}
              </Highlight>
            </Heading>
          </MotionBox>
        </Box>

        <MotionBox
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
        </MotionBox>
      </motion.div>
      <Projects />
    </Box>
  )
}

export default LandingPage
