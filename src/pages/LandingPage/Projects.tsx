import { Box, Heading, HStack, Text } from "@chakra-ui/react"
import { AnimatePresence, motion, useAnimationControls } from "framer-motion"
import { useState } from "react"

// const colors = [
//   "#FFA500",
//   "#7FFF00",
//   "#0bc5ea",
//   "#9400D3",
//   "#FF0080",
//   "#00FFFF",
//   "#00FF7F",
//   "#FF1493",
//   "#FFC0CB",
//   "#FFFF00",
//   "#FF8F00",
//   "#00CED1",
//   "#7928CA",
// ]

const Projects = () => {
  const sectionControl = useAnimationControls()
  const cardSlideControl = useAnimationControls()
  const [cards, setCards] = useState([
    "#FFA500",
    "#7FFF00",
    "#0bc5ea",
    "#9400D3",
    "#FF0080",
    "#00FFFF",
    "#00FF7F",
  ])

  const [lastRemovedCard, setLastRemovedCard] = useState<string>()

  const updateBGToMatchCard = async (bg: string) => {
    const cardShift = cards.filter((c) => c !== bg)

    setLastRemovedCard(bg)
    if (cards.length < 7) {
      setCards([...cardShift, lastRemovedCard!])
    } else {
      setCards(cardShift)
    }

    await cardSlideControl.start({
      opacity: [0, 0.5, 0.7, 0.98, 1],
      y: [0, -16, -24, 0],
      width: ["30%", "40%", "50%", "60%"],
      transition: {
        duration: 0.7,
      },
    })

    await sectionControl.start({
      scale: [0.99, 1],
      x: [-1, -16, 0],
      opacity: [0.8, 0.9, 0.98, 1],
      backgroundColor: [bg],
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 0.8,
      },
    })
  }
  return (
    <Box
      as={motion.div}
      minHeight="100vh"
      p="40px"
      pr="0px"
      borderRadius="16px"
      background={cards[0]}
      animate={sectionControl}
    >
      <HStack mt="350px" alignItems="start">
        {" "}
        <Box as={motion.div} animate={cardSlideControl} width="60%">
          <Text>Hello</Text>
          <Heading maxInlineSize="19ch">
            Project and Details Description and Title
          </Heading>
          <Text>Hello some Sample subtext for the project.</Text>
          <Text>TaDA!</Text>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="nowrap"
          overflowX="auto"
          sx={{
            marginTop: "46px",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {cards.map((item, index) => (
              <motion.div
                layout
                whileHover={{
                  scale: 0.99,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.9,
                  transition: { duration: 0.5 },
                }}
                style={{
                  background: cards[index],
                  minWidth: "350px",
                  marginRight: "20px",
                  height: "400px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                role="button"
                tabIndex={0}
                key={index}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5 }}
                transition={{ type: "spring" }}
                onClick={() => updateBGToMatchCard(cards[index])}
              />
            ))}
          </AnimatePresence>
        </Box>
      </HStack>
    </Box>
  )
}

export default Projects
