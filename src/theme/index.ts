import { extendTheme } from "@chakra-ui/react"
import { Glass } from "./custom"
import { Button } from "./Button"
import { colors } from "./colors"
import { textStyles } from "./textStyles"

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
}

const components = {
  Button,
  Glass,
}

const fonts = {
  heading: `'Nunito Sans', sans-serif`,
  body: `'Tinos', serif`,
}

const styles = {
  global: {
    "html, body": {
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
}

export const theme = extendTheme({
  styles,
  colors,
  textStyles,
  components,
  breakpoints,
  fonts,
})
