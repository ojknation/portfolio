export const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

export const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export const marqueeVariants = {
  container: {
    x: [0, -2000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 45,
        ease: "circInOut",
      },
    },
  },
  text: {
    "-webkit-text-stroke-color": ["#fff", "#FFA9", "#4166C6"],
    "-webkit-text-fill-color": [
      "rgb(17,16,23, 0.96)",
      "rgb(17,16,23, 0.74)",
      "#fff",
    ],
    transition: {
      "-webkit-text-stroke-color": { duration: 10, repeat: Infinity },
      "-webkit-text-fill-color": { duration: 6, repeat: Infinity },
    },
  },
}

export const easeVariants = {
  slideUp: {
    offscreen: {
      y: 50,
    },
    onscreen: {
      y: 0,
      transition: {
        duration: 1,
      },
      opacity: [0, 0.2, 0.4, 0.8, 1],
    },
  },
  slowAppear: {
    offscreen: {
      opacity: 0,
      y: -20,
      scale: 0,
    },
    onscreen: {
      y: 1,
      transition: {
        duration: 2,
        delay: 0.2,
      },
      opacity: [0, 0.2, 0.4, 0.8, 1],
      scale: [1, 1.02, 1],
    },
  },
  swooshIn: {
    offscreen: {
      opacity: 0,
      x: -400,
    },
    onscreen: {
      x: 0,
      transition: {
        duration: 1.2,
      },
      opacity: [0, 0.2, 0.4, 0.8, 1],
    },
  },
  swooshOut: {
    offscreen: {
      opacity: 0,
      letterSpacing: "22px",
    },
    onscreen: {
      transition: {
        duration: 2.9,
        type: "spring",
        stiffness: 100,
        delay: 0.2,
      },
      opacity: [0, 0.2, 0.4, 0.8, 1],
      letterSpacing: ["-10px", "40px", "-3px"],
    },
  },
}
