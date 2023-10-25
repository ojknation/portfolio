export const Button = {
  variants: {
    "app-primary": {
      bg: "#0071bc",
      fontWeight: "bold",
      color: "#FFFFFF",
    },
    "app-secondary": {
      bg: "#f7931e",
      fontWeight: "bold",
      color: "#101017",
    },

    "app-iconButton": {
      WebkitBackfaceVisibility: "hidden",
      backfaceVisibility: "hidden",
      transform: "translate3d(0,0,0)",
      msTransform: "translateZ(0)",
      background: "rgb(245, 255, 255, 0.11)",
      boxShadow: "0 4px 30px rgb(0, 0, 0, 0.1)",
      backdropFilter: "blur(2px)",
      border: "1px solid #efefef60",
      outline: "none",
    },
  },
  sizes: {
    xl: {
      h: "66px",
      fontSize: "26px",
      w: "179px",
      fontWeight: "bold",
    },
  },
}
