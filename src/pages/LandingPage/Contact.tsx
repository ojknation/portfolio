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

  const renderIcon = (icon: ReactElement) => (
    <IconButton
      boxSize={8}
      cursor="pointer"
      variant="app-iconButton"
      aria-label="social"
      icon={icon}
      size="md"
      sx={{ all: "unset", cursor: "pointer", padding: "8px" }}
    />
  )

  return (
    <Box>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100dvh"
        sx={{
          width: "inherit",
          height: "inherit",
          background: "rgb(0, 0, 0, 0.7)",
          boxShadow: "0 4px 30px rgb(0, 0, 0, 0.1)",
          backdropFilter: "blur(90px)",
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
            fontSize={{ base: "4rem", md: "5rem", xl: "6rem" }}
            sx={{
              WebkitTextFillColor: "transparent",
              WebkitTextStrokeWidth: isSmallScreen ? "2px" : "3px",
            }}
          >
            {`Let's talk.`}
          </Heading>
          <Text maxW="450px" mt="15px" mb="50px" fontSize={{ base: "14px" }}>
            Let's Connect! Whether you prefer electronic carrier pigeons aka{" "}
            {renderLink("mailto:theojksound+work@gmail.com", "Email")}, chirping
            on {renderLink("https://twitter.com/ojknation", "Twitter")} yikes x,
            or getting professionally linked on{" "}
            {renderLink(
              "https://www.linkedin.com/in/boluwatife-adekola-ojo-936a9119b/",
              "LinkedIn"
            )}
            , I'm just a click away. So, drop me a line, send a tweet, or
            connect with me—let's get the conversation started!🚀
          </Text>
        </MotionBox>
        <Box position="absolute" bottom="12px" width="100%" fontSize="14px">
          <Stack
            borderTop="1px solid"
            borderColor="gray.500"
            direction="row"
            divider={<StackDivider borderColor="gray.500" />}
            padding="10px"
          >
            <Box width="20%">
              <Text align="center" color="gray.500">
                Social
              </Text>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justify="center"
              >
                {renderIcon(<BsGithub />)}
                {renderIcon(<BsLinkedin />)}
                {renderIcon(<RiTwitterXFill />)}
              </Stack>
            </Box>
            <Box textAlign="center" width="60%">
              <Text color="gray.500">Designed & Developed by</Text>
              <Text fontWeight="bold">
                Boluwatife Adekola-Ojo 🇳🇬 © {new Date().getFullYear()}
              </Text>
            </Box>
            <Box textAlign="center" width="20%">
              <Text color="gray.500">Email</Text>
              <Text fontWeight="bold">
                {renderLink(
                  "mailto:theojksound+work@gmail.com",
                  "theojksound+work@gmail.com"
                )}
              </Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
