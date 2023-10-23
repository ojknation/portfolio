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
        x: x ?? [10, 500, 320, 20, 60],
        y: y ?? [0, 450, 30, -2, 0],
        rotate: [20, 360, 70, -70, 0],
        borderRadius: ["40%", "20%"],
      }}
      transition={{
        duration: 40,
        ease: "easeInOut",
        times: [0, 0.4, 0.6, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 0,
      }}
    />
  )
}

export default Blob
