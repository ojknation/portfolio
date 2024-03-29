import { blurPerformance } from "./custom"

export const glass = {
  ...blurPerformance,
  background: "rgb(255, 255, 255, 0.11)",
  // backdropFilter: "blur(32px)",
}

export const cardGlass = {
  ...glass,
  borderRadius: "16px",
  width: "100%",
  height: "100%",
  padding: "40px",
  color: "white",
}

export const neumorph = {
  boxShadow: `inset 4px 4px 8px rgb(17 16 23 / 28%),
    inset -4px -4px 8px rgb(17 16 23 / 28%)`,
  background: "rgb(17 16 23 / 20%)",
  overflow: "hidden",
  minWidth: "50px",
}
