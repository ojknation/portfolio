/* eslint-disable react/no-unescaped-entities */
import { MotionBox } from "@/reuseables"
import { easeVariants } from "@/reuseables/motionVariants"
import {
  Heading,
  useMediaQuery,
  Text,
  Box,
  Stack,
  StackDivider,
  IconButton,
} from "@chakra-ui/react"
import { ReactElement } from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { RiTwitterXFill } from "react-icons/ri"
import BG from "@/assets/ui/codeBG.jpeg"
import { blurPerformance } from "@/theme/custom"

const Contact = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 833px)")

  const renderLink = (link: string, text: string) => (
    <strong>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "underline" }}
      >
        {text}
      </a>
    </strong>
  )

  const renderIcon = (icon: ReactElement, link: string) => (
    <IconButton
      boxSize={8}
      cursor="pointer"
      variant="app-iconButton"
      aria-label="social"
      icon={icon}
      size="md"
      sx={{ all: "unset", cursor: "pointer", padding: "8px" }}
      onClick={() => window.open(link, "_blank")}
    />
  )

  return (
    <Box
      sx={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
      }}
    >
      <Box
        minHeight="100vh"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          ...blurPerformance,
          width: "inherit",
          height: "inherit",
          background: "rgb(0, 0, 0, 0.7)",
          boxShadow: "0 4px 30px rgb(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <MotionBox
          initial="offscreen"
          whileInView="onscreen"
          variants={easeVariants.slideUp}
          px="10%"
          viewport={{ once: true }}
        >
          <Heading
            maxInlineSize="19ch"
            fontSize={{ base: "3rem", lm: "4rem", md: "5rem", xl: "6rem" }}
            sx={{
              WebkitTextFillColor: "transparent",
              WebkitTextStrokeWidth: isSmallScreen ? "2px" : "3px",
            }}
          >
            {`Let's talk.`}
          </Heading>
          <Text maxW="450px" mt="15px" mb="50px" fontSize={{ base: "14px" }}>
            Let's Connect! Whether you prefer electronic carrier{" "}
            {renderLink("mailto:theojksound+work@gmail.com", "pigeons")},
            chirping on {renderLink("https://twitter.com/ojknation", "Twitter")}{" "}
            yikes x, or getting professionally linked on{" "}
            {renderLink(
              "https://www.linkedin.com/in/boluwatife-adekola-ojo-936a9119b/",
              "LinkedIn"
            )}
            , I'm just a click away. So, drop me a line, send a tweet, or
            connect with me—let's get the conversation started!🚀
          </Text>
        </MotionBox>
        <MotionBox
          position="absolute"
          bottom="12px"
          width="100%"
          fontSize="14px"
          initial="offscreen"
          whileInView="onscreen"
          variants={easeVariants.slideUp}
          viewport={{ once: true }}
        >
          <Stack
            borderTop="1px solid"
            borderColor="gray.500"
            direction="row"
            divider={<StackDivider borderColor="gray.500" />}
            padding="10px"
          >
            {!isSmallScreen && (
              <Box width="20%">
                <Text align="center" color="gray.500">
                  Links
                </Text>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justify="center"
                >
                  {renderIcon(<BsGithub />, "https://github.com/ojknation")}
                  {renderIcon(
                    <BsLinkedin />,
                    "https://www.linkedin.com/in/boluwatife-adekola-ojo-936a9119b/"
                  )}
                  {renderIcon(
                    <RiTwitterXFill />,
                    "https://twitter.com/ojknation"
                  )}
                </Stack>
              </Box>
            )}
            <Box textAlign="center" width={!isSmallScreen ? "60%" : "100%"}>
              <Text color="gray.500">Designed & Developed by</Text>
              <Text fontWeight="bold">
                Boluwatife Adekola-Ojo 🇳🇬 © {new Date().getFullYear()}
              </Text>
            </Box>
            {!isSmallScreen && (
              <Box textAlign="center" width="20%">
                <Text color="gray.500">Email</Text>
                <Text fontWeight="bold">
                  {renderLink(
                    "mailto:theojksound+work@gmail.com",
                    "theojksound+work@gmail.com"
                  )}
                </Text>
              </Box>
            )}
          </Stack>
        </MotionBox>
      </Box>
    </Box>
  )
}

export default Contact
