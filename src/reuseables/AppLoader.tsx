import { Box, Heading } from "@chakra-ui/react"
import { motion } from "framer-motion"
import GlassTint from "./GlassTint"
import { MotionBox } from "./MotionBox"
import { letter, sentence } from "./motionVariants"

const quotes = [
  [`Play by the rules,`, `but seek to improve the game.`],
  [`Find your balance,`, `and leave there.`],
  [`Don't go with the flow,`, `be the flow.`],
  [`Does it work,`, `Does it work well ?`],
  [`What's the endgame,`, `starting another game ?`],
  [`Good things take time,`, `bad times takes things.`],
  [`Everything is possible,`, `time is the issue.`],
  [`Didn't take much,`, `it just took everything.`],
  [`My mood is stable,`, `It's the motivation that swings.`],
]

const AppLoader = () => {
  const randIndex = Math.floor(Math.random() * quotes.length)
  return (
    <Box bg="brand.bg" overflow="hidden" maxH="100dvh">
      <GlassTint
        variant="smooth"
        sx={{
          width: "inherit",
          height: "inherit",
          background: "rgb(0, 0, 0, 0.7)",
        }}
      >
        <Box
          display="flex"
          maxH="100vh"
          h="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <MotionBox
            variants={sentence}
            initial="hidden"
            animate="visible"
            maxWidth="lg"
            color="#fff"
          >
            {quotes[randIndex][0].split("").map((char, index) => (
              <Heading
                key={char + "-" + index}
                as={motion.span}
                variants={letter}
                fontSize={{ base: "3.5rem", lg: "5rem" }}
                fontWeight="bold"
                mt="10px"
                lineHeight={0.9}
              >
                {char}
              </Heading>
            ))}
            <br />
            {quotes[randIndex][1].split("").map((char, index) => (
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
      </GlassTint>
    </Box>
  )
}

export default AppLoader
