import { MotionBox } from "@/reuseables"
import { Box, Container, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { letter, sentence } from "./motionVariants"

const textToAnimate = [
  `You know the business, and I know the chemistry. `,
  `I'm not saying you're not good at what you do.`,
  `I'm just saying I'm the guy you need
    to see if you want to stay ahead of the game.`,
]

const LandingPage = () => {
  return (
    <Box bg="brand.bg" height="100vh" color="#fff">
      <Container height="inherit" maxWidth="lg">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <MotionBox variants={sentence} initial="hidden" animate="visible">
            {textToAnimate[0].split("").map((char, index) => (
              <Text key={char + "-" + index} as={motion.span} variants={letter}>
                {char}
              </Text>
            ))}
            <br />
            {textToAnimate[1].split("").map((char, index) => (
              <Text key={char + "-" + index} as={motion.span} variants={letter}>
                {char}
              </Text>
            ))}
            <br />
            {textToAnimate[2].split("").map((char, index) => (
              <Box key={char + "-" + index} as={motion.span} variants={letter}>
                {char}
              </Box>
            ))}
          </MotionBox>
        </Box>
      </Container>
    </Box>
  )
}

export default LandingPage
