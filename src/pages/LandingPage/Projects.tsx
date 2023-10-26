/* eslint-disable unused-imports/no-unused-imports */
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
import { easeVariants } from "../../reuseables/motionVariants"
import { MotionBox } from "@/reuseables"
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
  const projectDivRef = useRef(null)
  const projectIsInView = useInView(projectDivRef)
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)")
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
      transition: {
        duration: 0.5,
      },
    })

    await sectionControl.start({
      background: `linear-gradient(-52deg, ${bg} 30%, #070716 80%)`,
      transition: {
        duration: 0.2,
      },
    })
  }

  const moveProjectsOverlay = async () => {
    setLastProject(projects[0] as TProject)

    await updateBGToMatchCard(cards[0])
  }
  return (
    <Box scrollSnapAlign="start" scrollSnapStop="always" overflow="hidden">
      <div ref={projectDivRef} />
      <Box
        as={motion.div}
        position="relative"
        bg={`linear-gradient(-62deg, ${
          lastProject?.bg ?? cards[0]
        } 30%, #090b2a 80%)`}
        animate={sectionControl}
        overflow="hidden"
      >
        <Box
          px={{ base: "10px", md: "40px" }}
          py={{ base: "20px", mm: "10px" }}
          minHeight="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          sx={{
            width: "inherit",
            height: "inherit",
            background: "rgb(0, 0, 0, 0.7)",
          }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            <Box
              mt={{ base: "10px", md: "20px" }}
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
                opacity: 1,
                y: [24, 0],
                transition: {
                  duration: isSmallScreen ? 0.5 : 0.9,
                },
              }}
            >
              <Box pos="relative">
                <Heading
                  maxInlineSize="19ch"
                  fontSize={{
                    base: "3rem",
                    lm: "4rem",
                    md: "5rem",
                    xl: "6rem",
                  }}
                  sx={{
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeWidth: isSmallScreen ? "2px" : "3px",
                  }}
                >
                  {lastProject?.name ?? projectList[0]?.name}
                </Heading>
                <Text fontWeight="bold" fontSize="14px">
                  {lastProject?.synopsis ?? projectList[0]?.synopsis}
                </Text>
                {lastProject?.url && (
                  <IconButton
                    as={motion.div}
                    variant="app-iconButton"
                    size="sm"
                    sx={{
                      position: "absolute",
                      right: "0px",
                      top: "-24px",
                      cursor: "pointer",
                    }}
                    aria-label="link"
                    whileHover={{
                      scale: 1.04,
                      rotate: [0, 360],
                      transition: { duration: 0.6 },
                    }}
                    whileTap={{
                      scale: [0.9, 0.8, 1],
                      transition: { duration: 0.2 },
                    }}
                    icon={<LuExternalLink />}
                    onClick={() =>
                      lastProject?.url &&
                      window.open(lastProject?.url, "_blank")
                    }
                  />
                )}
              </Box>
              <Box
                mt="16px"
                as={motion.div}
                width={{ base: "100%", md: "60%" }}
              >
                <Text
                  // textAlign={isSmallScreen ? "left" : "inherit"}
                  noOfLines={isSmallScreen ? 14 : 6}
                  fontSize={{
                    base: "12px",
                    mm: "13px",
                    lm: "14px",
                    md: "16px",
                  }}
                >
                  {lastProject?.description ?? projectList[0]?.description}
                </Text>
              </Box>
            </Box>
          </AnimatePresence>

          <HStack
            mt="16px"
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
              marginTop={isSmallScreen ? "23px" : "25px"}
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
              initial="offscreen"
              whileInView="onscreen"
              variants={easeVariants.slideUp}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {projectList.map((project, index) => (
                  <MotionBox
                    layout
                    position="relative"
                    boxShadow="lg"
                    p={{ base: "18px", mm: "20px", md: "20px" }}
                    whileHover={{
                      scale: 0.97,
                      transition: { duration: 0.2 },
                    }}
                    minWidth={{ base: "250px", md: "280px" }}
                    height={{ base: "290px", lm: "320px", md: "320px" }}
                    style={{
                      background: `${cards[index]}89`,
                      marginRight: "20px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      userSelect: "none",
                      "&::WebkitUserSelect": "none",
                      "&::MsUserSelect": "none",
                    }}
                    key={index}
                    animate={cardSlideControl}
                    transition={{ type: "tween", duration: 0.6 }}
                    onClick={() => updateBGToMatchCard(cards[index])}
                  >
                    {project?.url && (
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
                        onClick={() =>
                          project?.url && window.open(project?.url, "_blank")
                        }
                      />
                    )}
                    <Heading
                      my={{ base: "5px", md: "8px" }}
                      maxInlineSize="80%"
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
      </Box>
    </Box>
  )
}

export default Projects
