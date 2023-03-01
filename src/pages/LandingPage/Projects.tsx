import { useEffect, useRef, useState } from "react"
import { Box, Heading, HStack, Text } from "@chakra-ui/react"
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useInView,
} from "framer-motion"
import { easeVariants } from "./motionVariants"

const Projects = () => {
  const sectionControl = useAnimationControls()
  const cardSlideControl = useAnimationControls()
  const projectsOverlayControl = useAnimationControls()
  const projectDivRef = useRef(null)
  const projectIsInView = useInView(projectDivRef)
  const [cards, setCards] = useState([
    "#FFA500",
    "#7FFF00",
    "#0bc5ea",
    "#9400D3",
    "#FF0080",
    "#00FFFF",
    "#00FF7F",
  ])

  useEffect(() => {
    if (projectIsInView) moveProjectsOverlay()
  }, [projectIsInView])

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

  const moveProjectsOverlay = async () => {
    await projectsOverlayControl.start({
      opacity: [1, 0.8, 1],
      x: [0, 400, 800, 1200, 2400],
      transition: {
        // type: "tween",
        duration: 2,
        delay: 0.8,
        ease: "easeInOut",
      },
    })

    await updateBGToMatchCard(cards[0])
    await updateBGToMatchCard(cards[1])
  }
  return (
    <Box
      as={motion.div}
      minHeight="100vh"
      position="relative"
      p="40px"
      pr="0px"
      background={cards[0]}
      animate={sectionControl}
      initial="offscreen"
      whileInView="onscreen"
      variants={easeVariants.slowAppear}
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
          as={motion.div}
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
          initial="offscreen"
          whileInView="onscreen"
          variants={easeVariants.slideUp}
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
                  scale: [0.9, 0.8, 0.1],
                  borderRadius: ["30%", "60%", "10px"],
                  // rotate: [360],
                  transition: { duration: 1.2 },
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
      <Box
        as={motion.div}
        position="absolute"
        minHeight="100vh"
        width="100vw"
        top={0}
        left={0}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundColor="rgb(255,255,265)"
        animate={projectsOverlayControl}
      >
        <Heading
          sx={{
            color: "transparent",
            fontSize: "16vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundClip: "text",
            "&::-webkit-background-clip": "text",
            backgroundImage: `url(https://unsplash.it/1400)`,
          }}
        >
          Projects
        </Heading>
      </Box>
      <div ref={projectDivRef} />
    </Box>
  )
}

export default Projects
