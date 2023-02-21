import { Box, useStyleConfig } from "@chakra-ui/react"

function GlassTint(props: { [x: string]: unknown; variant: unknown }) {
  const { variant, ...rest } = props

  const styles = useStyleConfig("Glass", { variant })

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />
}

export default GlassTint
