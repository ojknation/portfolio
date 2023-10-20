import { useEffect, useRef, useState } from "react"
import {
  Box,
  Heading,
  HStack,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react"
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useInView,
} from "framer-motion"
import { easeVariants } from "./motionVariants"
import { MotionBox } from "@/reuseables"
// eslint-disable-next-line unused-imports/no-unused-imports
import Blobs from "./Blobs"
import { LuExternalLink } from "react-icons/lu"
import { BsCheck2Circle } from "react-icons/bs"
import { ReactComponent as ReactIcon } from "@/assets/stack/react.svg"
import { ReactComponent as ReduxIcon } from "@/assets/stack/redux.svg"
import { ReactComponent as MaterialUIIcon } from "@/assets/stack/materialUI.svg"
import { ReactComponent as CSharpIcon } from "@/assets/stack/csharp.svg"
import { ReactComponent as AntDIcon } from "@/assets/stack/antDesign.svg"
import { ReactComponent as TypescriptIcon } from "@/assets/stack/typescript.svg"
import { ReactComponent as FirebaseIcon } from "@/assets/stack/firebase.svg"
import { ReactComponent as QueryIcon } from "@/assets/stack/query.svg"
import { ReactComponent as JSIcon } from "@/assets/stack/javascript.svg"
import { ReactComponent as CodeIcon } from "@/assets/stack/code.svg"
import { ReactComponent as ChakraIcon } from "@/assets/stack/chakra.svg"
import { ReactComponent as DjangoIcon } from "@/assets/stack/django.svg"
import { ReactComponent as CloudflareIcon } from "@/assets/stack/cloudflare.svg"

import { TProject, projects } from "@/data/projectList"

const stackMap = {
  react: ReactIcon,
  redux: ReduxIcon,
  materialUI: MaterialUIIcon,
  dotNet: CSharpIcon,
  antD: AntDIcon,
  typescript: TypescriptIcon,
  firebase: FirebaseIcon,
  tanstackQuery: QueryIcon,
  javascript: JSIcon,
  code: CodeIcon,
  chakraUI: ChakraIcon,
  django: DjangoIcon,
  cloudflare: CloudflareIcon,
}

const Projects = () => {
  const sectionControl = useAnimationControls()
  const cardSlideControl = useAnimationControls()
  const projectsOverlayControl = useAnimationControls()
  const projectDivRef = useRef(null)
  const projectIsInView = useInView(projectDivRef)
  const [isSmallScreen] = useMediaQuery("(max-width: 833px)")
  const [cards, setCards] = useState([
    "#FFA500",
    "#7FFF00",
    "#0bc5ea",
    "#9400D3",
    "#00FF7F",
    "#FF0080",
    "#00FFFF",
  ])
  const [projectList, setProjectList] = useState(projects)

  useEffect(() => {
    if (projectIsInView) moveProjectsOverlay()
  }, [projectIsInView])

  const [lastRemovedCard, setLastRemovedCard] = useState<string>()
  const [lastProject, setLastProject] = useState<TProject>()

  const updateBGToMatchCard = async (bg: string) => {
    const cardShift = cards.filter((c) => c !== bg)
    const projectShift = projectList.filter((p) => p.bg !== bg)
    const selectedProject = projectList.find((p) => p.bg === bg)

    setLastRemovedCard(bg)
    setLastProject(selectedProject!)
    if (cards.length < 7) {
      setCards([...cardShift, lastRemovedCard!])
      setProjectList([...projectShift, lastProject as TProject])
    } else {
      setCards(cardShift)
      setProjectList(projectShift)
    }

    await cardSlideControl.start({
      x: [50, 0],
      // opacity: [0.6, 1],
      transition: {
        duration: 0.5,
      },
    })

    await sectionControl.start({
      background: `linear-gradient(-52deg, ${bg} 30%, #090b2a 80%)`,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 0.2,
      },
    })
  }

  const moveProjectsOverlay = async () => {
    await projectsOverlayControl.start({
      opacity: [1, 0.8],
      scale: [1, 0],
      x: [0, 2400],
      transition: {
        duration: 1.2,
        delay: 0.6,
        // ease: "linear",
      },
    })

    setLastProject(projects[0] as TProject)

    await updateBGToMatchCard(cards[0])
  }
  return (
    <Box>
      <Box
        as={motion.div}
        position="relative"
        bg={`linear-gradient(-52deg, ${
          lastProject?.bg ?? cards[0]
        } 30%, #090b2a 80%)`}
        animate={sectionControl}
        overflow="hidden"
        mb="1px"
      >
        <Blobs />
        <Box
          mb="1px"
          px={{ base: "10px", md: "40px" }}
          // pt="40px"
          minHeight="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          sx={{
            width: "inherit",
            height: "inherit",
            background: "rgb(0, 0, 0, 0.7)",
            // background: "rgb(255, 255, 255, 0.41)",
            boxShadow: "0 4px 30px rgb(0, 0, 0, 0.1)",
            backdropFilter: "blur(90px)",
          }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            <Box
              mt="20px"
              as={motion.div}
              display="flex"
              key={lastProject?.name}
              minHeight="25vh"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              flexDir="column"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 1],
                y: [24, 0],
                transition: {
                  duration: 0.9,
                },
              }}
              // animate={projectDetailsTextControl}
            >
              <Box>
                {/* <Text>Project</Text> */}
                <Heading
                  maxInlineSize="19ch"
                  fontSize={{ base: "4rem", md: "5rem", xl: "6rem" }}
                  sx={{
                    "-webkit-text-fill-color": "transparent",
                    "-webkit-text-stroke-width": isSmallScreen ? "2px" : "3px",
                  }}
                >
                  {lastProject?.name ?? projectList[0]?.name}
                </Heading>
                <Text fontWeight="bold" fontSize="14px">
                  {lastProject?.synopsis ?? projectList[0]?.synopsis}
                </Text>
                {/* <Text>TaDA!</Text> */}
              </Box>
              <Box
                mt="20px"
                as={motion.div}
                // animate={projectDetailsTextControl}
                width={{ base: "100%", md: "60%" }}
              >
                <Text noOfLines={4}>
                  {lastProject?.description ?? projectList[0]?.description}
                </Text>
              </Box>
            </Box>
          </AnimatePresence>

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
                {projectList.map((project, index) => (
                  <MotionBox
                    layout
                    position="relative"
                    boxShadow="lg"
                    p={{ base: "20px", md: "20px" }}
                    whileHover={{
                      scale: 0.97,
                      transition: { duration: 0.2 },
                    }}
                    minWidth={{ base: "250px", md: "280px" }}
                    height={{ base: "320px", md: "320px" }}
                    style={{
                      background: `${cards[index]}89`,
                      marginRight: "20px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      userSelect: "none",
                      "&::-webkit-user-select": "none",
                      "&::-ms-user-select": "none",
                    }}
                    key={index}
                    animate={cardSlideControl}
                    transition={{ type: "tween", duration: 0.6 }}
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
                      maxInlineSize="80%"
                      // size="2xl"
                    >
                      {project.name}
                    </Heading>
                    <Text maxInlineSize="20ch" mt="5px" fontSize="14px">
                      {project.synopsis}
                    </Text>
                    {project.summary.map((s, i) => (
                      <List
                        key={i}
                        spacing={1}
                        mt={{ base: "8px", md: "10px" }}
                        textTransform="capitalize"
                        fontSize="14px"
                      >
                        <ListItem>
                          <ListIcon as={BsCheck2Circle} />
                          {s}
                        </ListItem>
                      </List>
                    ))}
                    <Box position="absolute" sx={{ bottom: 5, right: 5 }}>
                      <Stack direction="row" spacing="1">
                        {project.stack.map((s, i) => (
                          <Icon
                            boxSize={6}
                            key={i}
                            name={s}
                            as={stackMap[s as keyof typeof stackMap]}
                            sx={{
                              background: "#fff",
                              border: `none`,
                              borderRadius: "8px",
                            }}
                          />
                        ))}
                      </Stack>
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
          backgroundColor="#fff"
          animate={projectsOverlayControl}
        >
          <Heading
            sx={{
              color: "transparent",
              fontSize: "16vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100dvh",
              backgroundClip: "text",
              "&::-webkit-background-clip": "text",
              backgroundImage: `url(https://unsplash.it/1400)`,
              // background: "#090b2a",
            }}
          >
            Projects
          </Heading>
        </Box>
        <Box ref={projectDivRef} />
      </Box>
    </Box>
  )
}

export default Projects
