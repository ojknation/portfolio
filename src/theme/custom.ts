import { defineStyleConfig } from "@chakra-ui/react"

export const blurPerformance = {
  WebkitBackfaceVisibility: "hidden",
  WebkitTransform: "translate3d(0,0,0)",
  MsWebkitTransform: "translateZ(0)",
  backfaceVisibility: "hidden",
  transform: "translate3d(0,0,0)",
  msTransform: "translateZ(0)",
}

export const Glass = defineStyleConfig({
  baseStyle: {
    ...blurPerformance,
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
