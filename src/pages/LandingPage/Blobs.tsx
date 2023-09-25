import React from "react"
import Blob from "@/reuseables/Blob"
import { motionGenerator } from "@/utils/mathUtil"

const Blobs = () => {
  return (
    <div>
      {[
        "#FFA500",
        // "#7FFF00",
        "#0bc5ea",
        "#9400D3",
        "#FF0080",
        "#00FFFF",
        // "#00FF7F",
        "#FF1493",
        "#FF8F00",
        "#00CED1",
        "#7928CA",
      ].map((color, index) => (
        <Blob
          key={color}
          bg={color}
          x={motionGenerator((index + 1) * 32, "x")}
          y={motionGenerator((index + 1) * 0.6, "y")}
          scale={motionGenerator((index + 1) * 64, "scale")}
        />
      ))}
    </div>
  )
}

const MemoizedBlobs = React.memo(Blobs)

export default MemoizedBlobs
