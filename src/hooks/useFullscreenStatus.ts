import React from "react"

export default function useFullscreenStatus(
  elRef: React.RefObject<HTMLElement>
) {
  const [isFullscreen, setIsFullscreen] = React.useState(
    document.fullscreenElement != null
  )

  const setFullscreen = () => {
    if (elRef.current == null) return

    elRef.current
      .requestFullscreen()
      .then(() => {
        setIsFullscreen(document.fullscreenElement != null)
      })
      .catch(() => {
        setIsFullscreen(false)
      })
  }

  React.useLayoutEffect(() => {
    const handleFullscreenChange = () =>
      setIsFullscreen(document.fullscreenElement != null)

    document.onfullscreenchange = handleFullscreenChange

    return () => {
      document.onfullscreenchange = null
    }
  }, [])

  return { isFullscreen, setFullscreen }
}
