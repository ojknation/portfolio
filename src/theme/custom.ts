import { defineStyleConfig } from "@chakra-ui/react"

export const Glass = defineStyleConfig({
  baseStyle: {
    background: "rgb(255, 255, 255, 0.11)",
    boxShadow: "0 4px 30px rgb(0, 0, 0, 0.1)",
    backdropFilter: "blur(90px)",
  },
  variants: {
    rounded: {
      padding: 8,
      borderRadius: "xl",
      boxShadow: "xl",
    },
    smooth: {
      padding: 6,
      borderRadius: "0px",
      boxShadow: "md",
    },
  },
  defaultProps: {
    variant: "smooth",
  },
})
