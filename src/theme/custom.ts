import { defineStyleConfig } from "@chakra-ui/react"

export const blurPerformance = {
  WebkitBackfaceVisibility: "hidden",
  WebkitTransform: "translate3d(0,0,0)",
  MsWebkitTransform: "translate3d(0,0,0)",
  backfaceVisibility: "hidden",
  transform: "translate3d(0,0,0)",
  msTransform: "translate3d(0,0,0)",
  willChange: "transform",
}

export const Glass = defineStyleConfig({
  baseStyle: {
    background: "rgb(255, 255, 255, 0.11)",
    // backdropFilter: "blur(90px)",
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
