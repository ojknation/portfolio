import { MotionBox } from "@/reuseables"
import GlassTint from "@/reuseables/GlassTint"

import { Box, Container, Heading, Highlight } from "@chakra-ui/react"
import { motion, useScroll, useTransform } from "framer-motion"
import Blobs from "./Blobs"
import {
  easeVariants,
  letter,
  // marqueeVariants,
  sentence,
} from "./motionVariants"
import Projects from "./Projects"

const textToAnimate = [`Play by the rules.`, `but be ferocious`]

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
        bg: "brand.offWhite",
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
            <Container height="80vh" maxWidth="lg">
              <Box
                as={motion.div}
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                style={{ x }}
              >
                <MotionBox>
                  <MotionBox
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                  >
                    {textToAnimate[0].split("").map((char, index) => (
                      <Heading
                        key={char + "-" + index}
                        as={motion.span}
                        variants={letter}
                        fontSize="6vw"
                        fontWeight={850}
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
                    {/* 
                    <br />
                    {textToAnimate[2].split("").map((char, index) => (
                      <Box
                        key={char + "-" + index}
                        as={motion.span}
                        variants={letter}
                      >
                        {char}
                      </Box>
                    ))} */}
                  </MotionBox>
                </MotionBox>
              </Box>
            </Container>
          </GlassTint>
        </Box>

        <Box
          pl="10%"
          pr="10%"
          bg="brand.offWhite"
          position="relative"
          color="Text.dark"
          minHeight="60vh"
        >
          <MotionBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            pt="4%"
            style={{ x: xSlideL }}
          >
            <Heading mb={2} fontSize="3.5vw" lineHeight="shorter">
              <Highlight
                query={["Hey"]}
                styles={{
                  background: "brand.pink",
                  padding: "2px",
                  borderRadius: "16px",
                }}
              >
                {`Hey nice to meet you. I'm Boluwatife,`}
              </Highlight>
              <br />
              <Highlight
                query={["React", "Typescript", "nodejs", "3 years"]}
                styles={{
                  background: "brand.green",
                  padding: "2px 30px",
                  borderRadius: "30%",
                  borderTopRadius: "60%",
                  borderRightRadius: "60%",
                }}
              >
                {` a frontend engineer with experience in React, nodejs and Typescript and other technologies`}
              </Highlight>
            </Heading>
          </MotionBox>
          <MotionBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt="50px"
            style={{ x: xSlideR }}
            initial="offscreen"
            whileInView="onscreen"
            variants={easeVariants.slideUp}
            viewport={{ once: false }}
          >
            <Heading mb={2} fontSize="3.5vw" lineHeight="shorter">
              <Highlight
                query={["5 years", "grade", "wealth"]}
                styles={{
                  color: "brand.primary",
                  background: "brand.lightblue",
                  padding: "2px 30px 40px",
                  borderRadius: "70%",
                }}
              >
                {` Over the Past 5 years, I have had a wealth of experience building production grade UI's`}
              </Highlight>
            </Heading>
          </MotionBox>
          <Box my="10%">
            <MotionBox
              display="flex"
              justifyContent="start"
              alignItems="center"
              fontSize="2vw"
              initial="offscreen"
              whileInView="onscreen"
              variants={easeVariants.swooshIn}
              zIndex={3}
              pos="relative"
            >
              <Heading mb={2} fontSize="3.5vw" lineHeight="shorter">
                <Highlight
                  query={["love"]}
                  styles={{
                    color: "Text.dark",
                    background: "white",
                    border: "4px solid #f91d78",
                    borderRadius: "30%",
                    borderTopRadius: "60%",
                    borderRightRadius: "60%",
                  }}
                >
                  I love solving problems,
                </Highlight>
              </Heading>
            </MotionBox>
            <MotionBox
              display="flex"
              justifyContent="start"
              alignItems="center"
              fontSize="2vw"
              initial="offscreen"
              whileInView="onscreen"
              variants={easeVariants.swooshIn}
              zIndex={3}
              pos="relative"
            >
              <Heading
                whiteSpace="nowrap"
                mb={2}
                fontSize="3.5vw"
                lineHeight="shorter"
              >
                <Highlight
                  query={["eager", "new"]}
                  styles={{
                    color: "Text.dark",
                    border: "8px solid #9400D3",
                    padding: "2px 30px",
                    borderRadius: "30%",
                    borderTopRadius: "60%",
                    borderRightRadius: "60%",
                    background: "#fff0f0",
                  }}
                >
                  as I am always eager to take on
                </Highlight>
                <br />
                <Highlight
                  query={["challenges"]}
                  styles={{
                    color: "Text.dark",
                    border: "3px solid #0a0000",
                    padding: "2px",
                    borderRadius: "16px",
                    borderTopRadius: "60%",
                  }}
                >
                  new challenges,
                </Highlight>
              </Heading>
            </MotionBox>
            <MotionBox
              mt="50px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize="2vw"
              initial="offscreen"
              whileInView="onscreen"
              variants={easeVariants.swooshOut}
              zIndex={3}
              pos="relative"
            >
              <Heading
                whiteSpace="nowrap"
                mb={2}
                fontSize="3.5vw"
                lineHeight="shorter"
              >
                <Highlight
                  query={["boundaries"]}
                  styles={{
                    color: "Text.dark",
                    border: "4px solid red",
                    padding: "25px 30px 10px",
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
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize="2vw"
              initial="offscreen"
              whileInView="onscreen"
              variants={easeVariants.swooshIn}
            >
              <Heading
                whiteSpace="nowrap"
                mb={2}
                fontSize="3.5vw"
                lineHeight="shorter"
              >
                <Highlight
                  query={["box"]}
                  styles={{
                    color: "Text.dark",
                    border: "8px solid #090b2a",
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
