import { useEffect, useState } from "react"

function throttle<T extends unknown[]>(
  cb: (...args: T) => void,
  delay = 250
): (...args: T) => void {
  let shouldWait = false

  return (...args: T) => {
    if (shouldWait) return

    cb(...args)
    shouldWait = true
    setTimeout(() => {
      shouldWait = false
    }, delay)
  }
}

export default function useVerticalScrollDirection() {
  const [direction, setDirection] = useState("up")

  let prevScrollY = 0

  useEffect(() => {
    window.onscroll = throttle(() => {
      const { scrollY } = window

      const direction = prevScrollY < scrollY ? "down" : "up"

      prevScrollY = scrollY

      setDirection(direction)
    }, 0)

    return () => {
      window.onscroll = null
    }
  }, [])

  return direction
}
