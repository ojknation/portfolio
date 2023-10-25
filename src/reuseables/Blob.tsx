import { genScale } from "@/utils/mathUtil"
import { useMediaQuery } from "@chakra-ui/react"
import { MotionBox } from "./MotionBox"

interface IBlob {
  top?: number | string
  right?: number | string
  bottom?: number | string
  left?: number | string
  bg?: string
  x?: number[]
  y?: number[]
  scale?: number[]
}

const Blob = ({ bg, x, y, scale }: IBlob) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 833px)")

  return (
    <MotionBox
      pos="absolute"
      bgColor={bg ?? "#7928CA"}
      top={50}
      left={50}
      height={isSmallScreen ? 90 : 150}
      width={isSmallScreen ? 90 : 150}
      animate={{
        scale: scale ?? genScale(),
        x: isSmallScreen ? [30, 360, 40, 450] : x,
        y,
        rotate: [20, 360, 70, -70, 0],
        borderRadius: ["40%", "20%"],
      }}
      transition={{
        duration: 40,
        repeat: isSmallScreen ? 0 : Infinity,
        repeatDelay: isSmallScreen ? 10 : 5,
      }}
    />
  )
}

export default Blob
