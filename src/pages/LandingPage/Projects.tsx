import { useEffect, useRef, useState } from "react"
import {
  Avatar,
  AvatarGroup,
  Box,
  Heading,
  HStack,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react"
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useInView,
} from "framer-motion"
import { easeVariants } from "./motionVariants"
import { MotionBox } from "@/reuseables"
import Blobs from "./Blobs"
import { LuExternalLink } from "react-icons/lu"
import { BsCheck2Circle } from "react-icons/bs"

const Projects = () => {
  const sectionControl = useAnimationControls()
  const cardSlideControl = useAnimationControls()
  const projectDetailsTextControl = useAnimationControls()
  const projectsOverlayControl = useAnimationControls()
  const projectDivRef = useRef(null)
  const projectIsInView = useInView(projectDivRef)
  const [cards, setCards] = useState([
    "#FFA500",
    "#7FFF00",
    "#0bc5ea",
    "#9400D3",
    "#00FF7F",
    "#FF0080",
    "#00FFFF",
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
      x: [50, 0],
      opacity: [0.2, 1],
      transition: {
        duration: 0.7,
      },
    })

    await projectDetailsTextControl.start({
      opacity: [0, 1],
      y: [24, 0],
      transition: {
        duration: 0.7,
      },
    })

    await sectionControl.start({
      backgroundColor: [`${bg}80`, bg],
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
        duration: 2,
        delay: 1,
        ease: "easeInOut",
      },
    })

    await projectDetailsTextControl.start({
      opacity: [0.8, 0.4, 1],
      y: [-15, 0],
      transition: {
        duration: 0.7,
      },
    })

    await cardSlideControl.start({
      x: [50, 0],
      opacity: [0.2, 1],
      transition: {
        duration: 0.6,
      },
    })

    // await updateBGToMatchCard(cards[0])
  }
  return (
    <Box
      as={motion.div}
      position="relative"
      background={cards[0]}
      animate={sectionControl}
      initial="offscreen"
      whileInView="onscreen"
      overflow="hidden"
      variants={easeVariants.slowAppear}
    >
      <Blobs />
      <Box
        pl={{ base: "10px", md: "40px" }}
        pt="40px"
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        sx={{
          width: "inherit",
          height: "inherit",
          background: "rgb(0, 0, 0, 0.75)",
          // background: "rgb(255, 255, 255, 0.41)",
          boxShadow: "0 4px 30px rgb(0, 0, 0, 0.1)",
          backdropFilter: "blur(90px)",
        }}
      >
        <Box
          // mt="20px"
          as={motion.div}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          flexDir="column"
          initial={{ opacity: 0.3 }}
          animate={projectDetailsTextControl}
        >
          <Box>
            <Text>Hello</Text>
            <Heading maxInlineSize="19ch">
              Project and Details Description and Title
            </Heading>
            <Text>Hello some Sample subtext for the project.</Text>
            <Text>TaDA!</Text>
          </Box>
          <Box
            mt="20px"
            as={motion.div}
            animate={projectDetailsTextControl}
            width={{ base: "100%", md: "60%" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae porro
            qui eum ipsam eaque ut vero quo nesciunt dolorum harum, incidunt
            veniam minima similique expedita. Voluptate illo quisquam sapiente
            error!
          </Box>
        </Box>
        <HStack
          mt="20px"
          alignItems="start"
          spacing={2}
          justify="center"
          width="100%"
        >
          {" "}
          <Box
            as={motion.div}
            maxW={{ base: "container.xl" }}
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
                <MotionBox
                  layout
                  position="relative"
                  boxShadow="lg"
                  p={{ base: "20px", md: "30px" }}
                  whileHover={{
                    scale: 0.97,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{
                    scale: [0.9, 0.8, 0.1],
                    borderRadius: ["30%", "10px"],
                    transition: { duration: 1.2 },
                  }}
                  minWidth={{ base: "250px", md: "320px" }}
                  height={{ base: "350px", md: "400px" }}
                  style={{
                    background: `${cards[index]}89`,
                    marginRight: "20px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  role="button"
                  tabIndex={0}
                  key={index}
                  animate={cardSlideControl}
                  exit={{ scale: 1.5 }}
                  transition={{ type: "tween", duration: 0.9 }}
                  onClick={() => updateBGToMatchCard(cards[index])}
                >
                  <IconButton
                    as={motion.div}
                    variant="app-iconButton"
                    sx={{
                      position: "absolute",
                      right: "15px",
                      top: "15px",
                    }}
                    aria-label="link"
                    whileHover={{
                      scale: 1.04,
                      rotate: [0, 180],
                      transition: { duration: 0.6 },
                    }}
                    whileTap={{
                      scale: [0.9, 0.8, 1],
                      transition: { duration: 0.2 },
                    }}
                    icon={<LuExternalLink />}
                  />
                  <Heading
                    my={{ base: "5px", md: "8px" }}
                    // maxInlineSize="25ch"
                    size="2xl"
                  >
                    Nakise Digital
                  </Heading>
                  <Text maxInlineSize="20ch" mt="5px">
                    Programs/event management software
                  </Text>
                  <List spacing={1} mt={{ base: "8px", md: "10px" }}>
                    <ListItem>
                      <ListIcon as={BsCheck2Circle} />
                      Form Builder
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsCheck2Circle} />
                      Rich Text Editing
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsCheck2Circle} />
                      Roles and permissions
                    </ListItem>
                  </List>
                  <Box position="absolute" sx={{ bottom: 5, right: 5 }}>
                    <AvatarGroup size="sm" max={2}>
                      <Avatar
                        name="Ryan Florence"
                        src="https://bit.ly/ryan-florence"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://bit.ly/kent-c-dodds"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                  </Box>
                </MotionBox>
              ))}
            </AnimatePresence>
          </Box>
        </HStack>
      </Box>
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
