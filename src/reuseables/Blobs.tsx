import React from "react"
import Blob from "@/reuseables/Blob"
import { motionGenerator } from "@/utils/mathUtil"
import { useMediaQuery } from "@chakra-ui/react"

const Blobs = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)")

  return (
    <div>
      {["#FF1493", "#9400D3", "#7928CA"].map((color, index) => (
        <Blob
          key={color}
          bg={color}
          x={motionGenerator((index + 1) * 32, "x", isSmallScreen)}
          y={motionGenerator((index + 1) * 6, "y")}
          scale={motionGenerator((index + 1) * 4, "scale")}
        />
      ))}
    </div>
  )
}

const MemoizedBlobs = React.memo(Blobs)

export default MemoizedBlobs
